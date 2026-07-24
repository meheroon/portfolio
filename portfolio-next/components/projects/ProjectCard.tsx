import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card-bg border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col h-full">
      <div className="w-full h-[220px] relative overflow-hidden bg-gradient-to-br from-ink-lighter to-ink-light">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary text-[0.95rem] mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] rounded-full text-xs text-accent font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm mt-auto transition-all duration-200 hover:gap-3"
        >
          View Details <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
