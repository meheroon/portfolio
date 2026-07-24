"use client";

import { projects } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <section className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
