"use client";

import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBar from "@/components/ui/SkillBar";
import { Palette, Server, Bug, Wrench, Code } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  palette: Palette,
  server: Server,
  bug: Bug,
  wrench: Wrench,
};

export default function SkillsGrid() {
  return (
    <section className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <ScrollReveal key={category.title}>
                <div className="p-8 bg-card-bg border border-border rounded-[20px] transition-all duration-300 hover:border-accent h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center text-xl text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
