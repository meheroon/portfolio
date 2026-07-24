"use client";

import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/lib/data";
import Button from "@/components/ui/Button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div>
      {/* Hero Image */}
      <div className="w-full h-[400px] bg-gradient-to-br from-ink-lighter to-ink flex items-center justify-center overflow-hidden mt-[70px]">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-[60px]">
        <p className="text-text-muted mb-4">
          <Link
            href="/projects"
            className="text-accent no-underline font-semibold hover:underline"
          >
            <ArrowLeft size={16} className="inline mr-1" />
            Back to Projects
          </Link>
        </p>

        <h1 className="text-[2.2rem] font-extrabold mb-6">{project.title}</h1>

        {/* Tech Stack */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-accent uppercase tracking-[1px] mb-3">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] rounded-full text-xs text-accent font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-accent uppercase tracking-[1px] mb-3">
            Description
          </h3>
          <p className="text-text-secondary text-[1.05rem] leading-[1.8]">{project.description}</p>
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-accent uppercase tracking-[1px] mb-3">
            Challenges Faced
          </h3>
          <ul className="list-none p-0">
            {project.challenges.map((c, i) => (
              <li
                key={i}
                className="text-text-secondary py-1.5 pl-6 relative text-base leading-[1.7]"
              >
                <span className="absolute left-0 text-accent font-bold">→</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-accent uppercase tracking-[1px] mb-3">
            Future Improvements
          </h3>
          <ul className="list-none p-0">
            {project.improvements.map((item, i) => (
              <li
                key={i}
                className="text-text-secondary py-1.5 pl-6 relative text-base leading-[1.7]"
              >
                <span className="absolute left-0 text-accent font-bold">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap mt-10 pt-10 border-t border-border">
          {project.live && project.live !== "#" ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                <ExternalLink size={16} /> Live Demo
              </Button>
            </a>
          ) : (
            <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">
              <ExternalLink size={16} /> Live Demo (Coming Soon)
            </Button>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <GithubIcon size={16} /> Source Code (Client)
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
