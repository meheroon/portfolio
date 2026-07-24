import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { href: personalInfo.social.github, label: "GitHub", icon: Github },
  { href: personalInfo.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: personalInfo.social.facebook, label: "Facebook", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Crafted with{" "}
          <Heart size={14} className="inline text-accent-warm fill-accent-warm" /> and lots of coffee.
        </p>
        <div className="flex justify-center gap-4 mt-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 flex items-center justify-center bg-card-bg border border-border rounded-xl text-text-secondary transition-all duration-300 hover:text-accent hover:border-accent hover:-translate-y-0.5"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
