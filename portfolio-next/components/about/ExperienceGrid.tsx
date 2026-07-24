"use client";

import { experience } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FlaskConical, Code } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  code: Code,
};

export default function ExperienceGrid() {
  return (
    <section className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader label="Experience" title="Where I&apos;ve Worked" />
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
