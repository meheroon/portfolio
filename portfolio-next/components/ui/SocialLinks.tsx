"use client";

import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Facebook } from "lucide-react";

const links = [
  { href: personalInfo.social.github, label: "GitHub", icon: Github },
  { href: personalInfo.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: personalInfo.social.facebook, label: "Facebook", icon: Facebook },
];

interface SocialLinksProps {
  className?: string;
  size?: number;
}

export default function SocialLinks({ className = "", size = 20 }: SocialLinksProps) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="w-12 h-12 flex items-center justify-center bg-card-bg border border-border rounded-xl text-text-secondary text-xl transition-all duration-300 hover:text-accent hover:border-accent hover:-translate-y-0.5"
        >
          <link.icon size={size} />
        </a>
      ))}
    </div>
  );
}
