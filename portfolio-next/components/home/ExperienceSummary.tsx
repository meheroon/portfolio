"use client";

import { experience } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FlaskConical, Code } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  code: Code,
};

export default function ExperienceSummary() {
  return (
    <section className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            Experience
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">Where I&apos;ve Worked</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((exp, i) => {
            const Icon = iconMap[exp.icon] || Code;
            return (
              <ScrollReveal key={exp.role} delay={i * 0.1}>
                <div className="p-8 bg-card-bg border border-border rounded-[20px] transition-all duration-300 hover:border-accent hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center text-xl text-white">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{exp.role}</div>
                      <div className="text-sm text-accent">{exp.company}</div>
                    </div>
                  </div>
                  <div className="text-sm text-text-muted mb-3">{exp.duration}</div>
                  <p className="text-text-secondary text-[0.95rem]">{exp.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
