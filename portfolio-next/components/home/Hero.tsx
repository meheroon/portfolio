import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { Download, Eye, Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";
import Link from "next/link";

const actionIcons = [
  { href: "#", icon: Download, label: "Download Resume", primary: true },
  { href: "/resume", icon: Eye, label: "View Resume", primary: false },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Send Email", primary: false },
  { href: "/contact", icon: Send, label: "Get In Touch", primary: false },
];

const socialIcons = [
  { href: personalInfo.social.github, icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: personalInfo.social.facebook, icon: FacebookIcon, label: "Facebook" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Content */}
        <div>
          <p className="text-accent text-sm font-semibold mb-3 tracking-wide">
            Hi, I&apos;m {personalInfo.shortName}
          </p>

          <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[1.05] mb-5 tracking-[-1px]">
            {personalInfo.name}
          </h1>

          <h2 className="text-[clamp(1.1rem,2.2vw,1.5rem)] font-semibold text-accent-secondary mb-5">
            {personalInfo.heroDesignation}
          </h2>

          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] text-text-secondary mb-8 max-w-[520px] leading-[1.7]">
            {personalInfo.heroDescription}
          </p>

          {/* All Icons - One Single Row */}
          <div className="flex items-center gap-2">
            {actionIcons.map((item) => {
              const Icon = item.icon;
              return item.href === "#" ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    item.primary
                      ? "bg-gradient-to-br from-accent to-[#5a52d5] text-white hover:shadow-[0_8px_30px_var(--accent-glow)]"
                      : "bg-card-bg border border-border text-text-secondary hover:border-accent hover:text-text-primary hover:bg-card-hover"
                  }`}
                  title={item.label}
                >
                  <Icon size={16} />
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 flex items-center justify-center bg-card-bg border border-border text-text-secondary rounded-lg transition-all duration-300 hover:border-accent hover:text-text-primary hover:bg-card-hover"
                  title={item.label}
                >
                  <Icon size={16} />
                </Link>
              );
            })}

            <div className="w-px h-5 bg-border mx-1" />

            {socialIcons.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 flex items-center justify-center bg-card-bg border border-border text-text-secondary rounded-lg transition-all duration-300 hover:border-accent hover:text-text-primary hover:bg-card-hover"
                  title={item.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Photo with Frame */}
        <div className="flex justify-center lg:justify-end">
          <div className="hero-photo-frame">
            <div className="hero-photo-inner">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                width={360}
                height={360}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 280px, 360px"
              />
            </div>
            <div className="hero-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
