"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "@/components/ui/Button";
import { Download, Eye, Send } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[70px] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_70%)] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,170,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-10 w-full">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-full text-sm text-accent mb-6">
            <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-2 tracking-[-1px]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-text-secondary mb-8 font-normal">
            {personalInfo.heroDesignation}
          </p>

          <div className="flex gap-4 flex-wrap mb-10">
            <Button variant="primary">
              <Download size={18} />
              Download Resume
            </Button>
            <Link href="/resume">
              <Button variant="secondary">
                <Eye size={18} />
                View Resume
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">
                <Send size={18} />
                Get In Touch
              </Button>
            </Link>
          </div>

          <SocialLinks />
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-[380px] h-[380px] max-w-full">
            <div className="absolute inset-[-4px] bg-gradient-to-br from-accent to-accent-secondary rounded-[30px] z-0 animate-[spin_8s_linear_infinite]" />
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover rounded-[28px] relative z-[1] bg-ink-lighter"
              priority
              sizes="(max-width: 768px) 220px, 380px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
