"use client";

import { motion } from "framer-motion";

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
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded"
        />
      </div>
    </div>
  );
}
