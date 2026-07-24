"use client";

import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBar from "@/components/ui/SkillBar";
import { Palette, Server, Bug, Wrench } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  palette: Palette,
  server: Server,
  bug: Bug,
  wrench: Wrench,
};

export default function SkillsSummary() {
  const displayCategories = skills.slice(0, 3);

  return (
    <section className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            My Skills
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">What I Know</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCategories.map((category) => {
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
                  {category.skills.slice(0, 5).map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/skills">
            <Button variant="outline">
              View All Skills <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
