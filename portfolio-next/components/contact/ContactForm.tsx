"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const mailtoLink = `mailto:${personalInfo.emailAlt}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `From: ${data.name} (${data.email})\n\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
    reset();
  };

  return (
    <ScrollReveal delay={0.2}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-card-bg border border-border rounded-[20px]"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)]"
          />
          {errors.name && (
            <p className="text-accent-warm text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)]"
          />
          {errors.email && (
            <p className="text-accent-warm text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="subject" className="block text-sm font-semibold mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project Inquiry"
            {...register("subject")}
            className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)]"
          />
          {errors.subject && (
            <p className="text-accent-warm text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell me about your project..."
            rows={5}
            {...register("message")}
            className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)] resize-y min-h-[120px]"
          />
          {errors.message && (
            <p className="text-accent-warm text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-br from-accent to-[#5a52d5] text-text-primary border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)] disabled:opacity-50"
        >
          <Send size={16} className="inline mr-2" />
          Send Message
        </button>
      </form>
    </ScrollReveal>
  );
}
