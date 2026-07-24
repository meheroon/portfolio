"use client";

import { useState } from "react";
import { skills, tools } from "@/lib/data";
import { Code, Palette, Server, Bug } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  palette: Palette,
  server: Server,
  bug: Bug,
};

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skills[activeTab];

  return (
    <section className="py-[80px] relative">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-center mb-12 tracking-[-0.5px]">
          Skills
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 p-2 bg-card-bg border border-border rounded-2xl">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-none ${
                  activeTab === index
                    ? "bg-gradient-to-r from-accent to-[#5a52d5] text-white shadow-lg"
                    : "bg-transparent text-text-secondary hover:text-text-primary hover:bg-card-hover"
                }`}
              >
                <Icon size={16} />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Cards */}
        <div className="p-8 bg-card-bg border border-border rounded-2xl mb-10">
          <h3 className="text-lg font-bold text-accent mb-6">{activeCategory.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 p-5 bg-ink-light border border-border rounded-xl transition-all duration-300 hover:border-accent hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-secondary/20 border border-accent/30 rounded-xl flex items-center justify-center group-hover:from-accent group-hover:to-accent-secondary transition-all duration-300">
                  <span className="text-accent group-hover:text-white text-lg font-bold transition-colors">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-text-primary text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="p-8 bg-card-bg border border-border rounded-2xl text-center">
          <h3 className="text-lg font-bold mb-6">Tools & Developer Kit</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-ink-light border border-border rounded-full text-sm text-text-secondary transition-all duration-300 hover:border-accent hover:text-text-primary cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
