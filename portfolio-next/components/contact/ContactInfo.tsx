"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";

const contactItems = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Meherun Nessa Ferdausi", href: personalInfo.social.linkedin },
  { icon: FacebookIcon, label: "Facebook", value: "rooonroon", href: personalInfo.social.facebook },
  { icon: GithubIcon, label: "GitHub", value: "meheroon", href: personalInfo.social.github },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: null },
  { icon: MessageCircle, label: "WhatsApp", value: personalInfo.whatsapp, href: null },
];

export default function ContactInfo() {
  return (
    <ScrollReveal>
      <div className="flex flex-col gap-5">
        <p className="text-text-secondary text-[1.05rem] mb-2">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through any of the channels below!
        </p>
        {contactItems.map((item) => {
          const Tag = item.href ? "a" : "div";
          return (
            <Tag
              key={item.label}
              {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-4 p-5 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:border-accent hover:translate-x-2 no-underline text-text-primary"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-sm text-text-muted mb-1">{item.label}</div>
                <div className="font-semibold">{item.value}</div>
              </div>
            </Tag>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
