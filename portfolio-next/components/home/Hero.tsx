import Image from "next/image";
import { personalInfo } from "@/lib/data";
import SocialLinks from "@/components/ui/SocialLinks";
import { Download, Eye, Send, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-full text-sm text-accent mb-6">
            <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.15] mb-4 tracking-[-0.5px]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-[clamp(1rem,1.8vw,1.2rem)] text-text-secondary mb-8 font-normal max-w-[480px] leading-relaxed">
            {personalInfo.heroDesignation}
          </p>

          {/* Action Icons - Single Row */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-accent to-[#5a52d5] text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)]"
              title="Download Resume"
            >
              <Download size={18} />
            </a>
            <Link
              href="/resume"
              className="w-11 h-11 flex items-center justify-center bg-card-bg border border-border text-text-secondary rounded-xl transition-all duration-300 hover:border-accent hover:text-text-primary hover:bg-card-hover"
              title="View Resume"
            >
              <Eye size={18} />
            </Link>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 flex items-center justify-center bg-card-bg border border-border text-text-secondary rounded-xl transition-all duration-300 hover:border-accent hover:text-text-primary hover:bg-card-hover"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <Link
              href="/contact"
              className="w-11 h-11 flex items-center justify-center bg-card-bg border border-border text-text-secondary rounded-xl transition-all duration-300 hover:border-accent hover:text-text-primary hover:bg-card-hover"
              title="Get In Touch"
            >
              <Send size={18} />
            </Link>
          </div>

          {/* Social Icons - Single Row */}
          <SocialLinks size={18} />
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
