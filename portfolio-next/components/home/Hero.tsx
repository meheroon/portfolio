import Image from "next/image";
import { personalInfo } from "@/lib/data";
import SocialLinks from "@/components/ui/SocialLinks";
import { Download, Eye, Send, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-full text-sm text-accent mb-6">
            <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold leading-[1.1] mb-3 tracking-[-1px]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-[clamp(1.05rem,2vw,1.3rem)] text-text-secondary mb-8 font-normal max-w-[520px]">
            {personalInfo.heroDesignation}
          </p>

          <div className="flex gap-3 flex-wrap mb-10">
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent to-[#5a52d5] text-text-primary rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)]" title="Download Resume">
              <Download size={20} />
            </a>
            <Link href="/resume" className="w-12 h-12 flex items-center justify-center bg-card-bg border border-border text-text-primary rounded-xl transition-all duration-300 hover:border-accent hover:bg-card-hover" title="View Resume">
              <Eye size={20} />
            </Link>
            <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 flex items-center justify-center bg-card-bg border border-border text-text-primary rounded-xl transition-all duration-300 hover:border-accent hover:bg-card-hover" title="Send Email">
              <Mail size={20} />
            </a>
            <Link href="/contact" className="w-12 h-12 flex items-center justify-center bg-card-bg border border-border text-text-primary rounded-xl transition-all duration-300 hover:border-accent hover:bg-card-hover" title="Get In Touch">
              <Send size={20} />
            </Link>
          </div>

          <SocialLinks />
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[340px] h-[340px] rounded-2xl overflow-hidden border border-border">
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              width={340}
              height={340}
              className="w-full h-full object-cover"
              priority
              sizes="(max-width: 768px) 280px, 340px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
