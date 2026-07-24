"use client";

import { education } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";

export default function EducationTimeline() {
  return (
    <section className="py-[100px] bg-ink-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader label="Education" title="My Academic Journey" />
        <div className="max-w-[800px] mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-secondary" />
          {education.map((edu) => (
            <TimelineItem key={edu.title} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
