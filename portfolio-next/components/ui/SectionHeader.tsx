"use client";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-15 ${className ?? ""}`}>
      <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[2px] mb-3">
        {label}
      </span>
      <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.5px]">{title}</h2>
      <div className="w-[60px] h-1 bg-gradient-to-r from-accent to-accent-secondary mt-4 mx-auto rounded" />
    </div>
  );
}
