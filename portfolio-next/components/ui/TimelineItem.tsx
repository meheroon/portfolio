"use client";

import ScrollReveal from "./ScrollReveal";

interface TimelineItemProps {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export default function TimelineItem({ date, title, institution, description }: TimelineItemProps) {
  return (
    <ScrollReveal className="relative pl-16 mb-10 last:mb-0">
      <div className="absolute left-4 top-2 w-[18px] h-[18px] bg-accent rounded-full border-[3px] border-ink" />
      <div className="p-6 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:border-accent">
        <div className="text-sm text-accent font-semibold mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-text-secondary text-[0.95rem]">{institution}</p>
        <p className="text-text-secondary mt-3 leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
