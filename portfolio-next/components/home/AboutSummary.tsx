"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Code } from "lucide-react";

export default function AboutSummary() {
  return (
    <section className="py-[100px] bg-ink-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            About Me
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">Who I Am</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <ScrollReveal>
            <p className="text-text-secondary mb-5 text-[1.05rem]">
              <strong className="text-text-primary">Hello!</strong> I&apos;m Meherun Nessa Ferdausi, a Full Stack Software Engineer
              from Bangladesh with a passion for building scalable web applications and improving software quality through testing.
            </p>
            <p className="text-text-secondary mb-5 text-[1.05rem]">
              Currently, I work with <strong className="text-text-primary">JavaScript, React, Next.js, Node.js, Express.js, and MongoDB</strong>{" "}
              while gaining practical experience in Software Quality Assurance at <strong className="text-text-primary">Ginilab Ltd.</strong>
            </p>
            <p className="text-text-secondary mb-5 text-[1.05rem]">
              Alongside software development, I&apos;m learning <strong className="text-text-primary">Secure Software Development and Application Security</strong>{" "}
              to build reliable and secure software systems.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: personalInfo.stats.repositories, label: "Repositories" },
                { number: personalInfo.stats.projects, label: "Projects Built" },
                { number: personalInfo.stats.technologies, label: "Technologies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-6 px-4 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:border-accent hover:-translate-y-1"
                >
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center">
            <div className="w-full max-w-[400px] p-10 bg-gradient-to-br from-ink-lighter to-ink-light border border-border rounded-3xl text-center">
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-accent to-accent-secondary rounded-2xl flex items-center justify-center text-3xl text-white">
                <Code size={32} />
              </div>
              <h3 className="text-xl mb-3">Quick Facts</h3>
              <p className="text-text-secondary text-[0.95rem] leading-[1.8]">
                Based in Dhaka, Bangladesh<br />
                Full Stack MERN + QA Engineer<br />
                Learning Secure Software Development<br />
                32 repos &amp; counting
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
