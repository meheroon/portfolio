"use client";

import { projects } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ProjectsSummary() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-[100px] bg-ink-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-15">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
            Projects
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">My Recent Work</h2>
          <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline">
              View All Projects <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
