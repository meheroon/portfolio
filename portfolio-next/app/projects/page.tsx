import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects by Meherun Nessa Ferdausi — full-stack MERN applications, AI platforms, crowdfunding systems, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="My Recent Work"
        description="A showcase of my best projects spanning full-stack, AI, and database design."
      />
      <ProjectsList />
    </>
  );
}
