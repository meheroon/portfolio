"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  showBack?: boolean;
}

export default function PageHeader({ label, title, description, showBack = true }: PageHeaderProps) {
  return (
    <div className="pt-[160px] pb-20 bg-ink-light border-b border-border text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        {showBack && (
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary text-sm mb-6 hover:text-text-primary transition-colors no-underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        )}
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
          {label}
        </span>
        <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold tracking-[-0.5px] mb-4">
          {title}
        </h1>
        <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
