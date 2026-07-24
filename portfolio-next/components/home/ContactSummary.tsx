"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Mail, Linkedin, Facebook, Github, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "Meherun Nessa Ferdausi", href: personalInfo.social.linkedin },
  { icon: Facebook, label: "Facebook", value: "rooonroon", href: personalInfo.social.facebook },
  { icon: Github, label: "GitHub", value: "meheroon", href: personalInfo.social.github },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: null },
  { icon: MessageCircle, label: "WhatsApp", value: personalInfo.whatsapp, href: null },
];

export default function ContactSummary() {
  return (
    <section className="py-[100px] bg-ink-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">Let&apos;s Connect</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="flex flex-col gap-5">
              <p className="text-text-secondary text-[1.05rem] mb-2">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              {contactItems.map((item) => {
                const Content = item.href ? "a" : "div";
                return (
                  <Content
                    key={item.label}
                    {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 p-5 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:border-accent hover:translate-x-2 no-underline text-text-primary"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center text-lg flex-shrink-0 text-white">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted mb-1">{item.label}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </Content>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex items-center justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                <ArrowRight size={20} /> Go to Contact Page
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
