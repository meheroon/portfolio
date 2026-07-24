import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SkillsGrid from "@/components/skills/SkillsGrid";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and proficiency levels of Meherun Nessa Ferdausi — Frontend, Backend, Testing & QA, and Tools.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label="My Skills"
        title="What I Know"
        description="A comprehensive overview of my technical skills and proficiency levels."
      />
      <SkillsGrid />
    </>
  );
}
