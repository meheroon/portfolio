"use client";

import Image from "next/image";
import Link from "next/link";
import { personalInfo, resumeSkills, experience, education, currentlyLearning } from "@/lib/data";
import Button from "@/components/ui/Button";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumeView() {
  return (
    <div className="min-h-screen">
      {/* Action Bar */}
      <div className="fixed top-5 right-5 z-[100] flex gap-3">
        <Link href="/">
          <Button variant="secondary" size="sm">
            <ArrowLeft size={16} /> Back
          </Button>
        </Link>
        <Button variant="primary" size="sm" onClick={() => window.print()}>
          <Download size={16} /> Download PDF
        </Button>
      </div>

      <div className="max-w-[900px] mx-auto px-10 pt-[100px] pb-15">
        {/* Header */}
        <div className="flex gap-8 items-start mb-10 pb-8 border-b-2 border-border">
          <Image
            src={personalInfo.photo}
            alt={personalInfo.name}
            width={120}
            height={120}
            className="rounded-full object-cover border-[3px] border-accent flex-shrink-0"
          />
          <div>
            <h1 className="text-[2rem] font-extrabold tracking-[-0.5px] mb-1">{personalInfo.name}</h1>
            <p className="text-lg text-accent font-semibold mb-3">{personalInfo.heroDesignation}</p>
            <div className="flex flex-wrap gap-5">
              <span className="text-sm text-text-secondary flex items-center gap-1.5">
                📍 {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-text-secondary no-underline hover:text-accent flex items-center gap-1.5"
              >
                ✉️ {personalInfo.email}
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary no-underline hover:text-accent flex items-center gap-1.5"
              >
                🔗 LinkedIn
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary no-underline hover:text-accent flex items-center gap-1.5"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <ResumeSection title="Professional Summary">
          <p className="text-text-secondary text-[0.95rem] leading-[1.8]">
            Full Stack Software Engineer with hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js) and
            Next.js. Currently working as a Software QA Engineer at Ginilab Ltd., performing Manual Testing, API Testing,
            SQL Testing, and Bug Tracking. Passionate about building scalable web applications, improving software quality,
            and learning Secure Software Development. Built 32+ repositories on GitHub including AI-powered platforms,
            crowdfunding systems, ebook marketplaces, and job boards.
          </p>
        </ResumeSection>

        {/* Technical Skills */}
        <ResumeSection title="Technical Skills">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {Object.entries(resumeSkills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="text-sm font-bold mb-2 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] rounded-full text-xs text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection title="Experience">
          {experience.map((exp) => (
            <div key={exp.role} className="mb-5 last:mb-0">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[1.05rem] font-bold">{exp.role}</span>
                <span className="text-sm text-accent font-semibold">{exp.duration}</span>
              </div>
              <div className="text-[0.95rem] text-text-secondary mb-2">{exp.company}</div>
              <ul className="list-none p-0">
                {exp.description.split(". ").filter(Boolean).map((item, i) => (
                  <li key={i} className="text-text-secondary text-[0.95rem] leading-[1.7] py-0.5 pl-5 relative">
                    <span className="absolute left-0 text-accent">→</span>
                    {item.trim()}.
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Featured Projects">
          {[
            { title: "VoyageAI — AI Travel Planner", tech: "Next.js 14, TypeScript, OpenAI GPT-4o, MongoDB", desc: "Full-stack AI-powered travel planning platform with chat assistant, trip planner, content generator, and data analyzer. Deployed on Vercel." },
            { title: "FundSpark — Crowdfunding Platform", tech: "Next.js 14, React 18, Node.js, MongoDB, Stripe", desc: "Full-stack MERN crowdfunding platform with credit system, campaign management, Stripe payments, and role-based dashboards." },
            { title: "Fable — Digital Ebook Marketplace", tech: "Next.js 16, React 19, Tailwind CSS, Firebase, Stripe", desc: "Modern ebook marketplace with reader, writer, and admin dashboards. Features Stripe payments and Firebase authentication." },
          ].map((proj) => (
            <div key={proj.title} className="mb-5 last:mb-0">
              <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
                <span className="text-[1.05rem] font-bold">{proj.title}</span>
                <span className="text-sm text-accent font-semibold">{proj.tech}</span>
              </div>
              <p className="text-text-secondary text-[0.95rem] leading-[1.7]">{proj.desc}</p>
            </div>
          ))}
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          {education.filter(e => e.date !== "2026 Roadmap").map((edu) => (
            <div key={edu.title} className="mb-5 last:mb-0">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[1.05rem] font-bold">{edu.title}</span>
                <span className="text-sm text-accent font-semibold">{edu.date}</span>
              </div>
              <div className="text-[0.95rem] text-text-secondary mb-2">{edu.institution}</div>
              <p className="text-text-secondary text-[0.95rem] leading-[1.7]">{edu.description}</p>
            </div>
          ))}
        </ResumeSection>

        {/* Currently Learning */}
        <ResumeSection title="Currently Learning">
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] rounded-full text-xs text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </ResumeSection>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; color: #1a1a1a !important; }
          .fixed { display: none !important; }
          div { max-width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-bold text-accent uppercase tracking-[2px] mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </div>
  );
}
