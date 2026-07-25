"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";
import Link from "next/link";

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
    <section className="py-[100px] bg-ink-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">Let&apos;s Connect</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
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

          {/* Right - Go to Contact */}
          <ScrollReveal delay={0.2} className="flex items-center justify-center lg:justify-start">
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
