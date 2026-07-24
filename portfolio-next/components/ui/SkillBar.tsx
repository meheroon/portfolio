"use client";

interface SkillBarProps {
  name: string;
  percent: number;
}

export default function SkillBar({ name, percent }: SkillBarProps) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-accent font-semibold">{percent}%</span>
      </div>
      <div className="h-2 bg-ink-lighter rounded overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
