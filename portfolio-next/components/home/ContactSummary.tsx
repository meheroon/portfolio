"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";

const contactCards = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: null },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
];

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: personalInfo.social.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: personalInfo.social.linkedin },
  { icon: FacebookIcon, label: "Facebook", href: personalInfo.social.facebook },
];

export default function ContactSummary() {
  return (
    <section id="contact" className="py-[100px] bg-ink-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">Let&apos;s Connect</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info Cards */}
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              {contactCards.map((item) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 p-5 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:border-accent hover:-translate-y-0.5 no-underline text-text-primary"
                  >
                    <div className="w-12 h-12 bg-ink-lighter border border-border rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary mb-0.5">{item.label}</div>
                      <div className="text-text-secondary text-sm">{item.value}</div>
                    </div>
                  </Tag>
                );
              })}

              {/* Connect With Me */}
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-11 h-11 flex items-center justify-center bg-card-bg border border-border rounded-xl text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                    >
                      <item.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Quick Contact Form */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const subject = formData.get("subject") as string;
                const message = formData.get("message") as string;
                const mailtoLink = `mailto:${personalInfo.emailAlt}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                window.location.href = mailtoLink;
              }}
              className="p-8 bg-card-bg border border-border rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="home-name" className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-semibold mb-2">Your Email</label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="home-subject" className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  id="home-subject"
                  name="subject"
                  type="text"
                  placeholder="How can I help you?"
                  required
                  className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="home-message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="home-message"
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 bg-ink border border-border rounded-xl text-text-primary font-[inherit] text-[0.95rem] transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)] resize-y min-h-[100px]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-br from-accent to-[#5a52d5] text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)] flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="m22 2-11 11"/></svg>
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
