import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AboutDetail from "@/components/about/AboutDetail";
import EducationTimeline from "@/components/about/EducationTimeline";
import ExperienceGrid from "@/components/about/ExperienceGrid";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Meherun Nessa Ferdausi's programming journey, skills, education, and experience as a Full Stack Software Engineer and QA Engineer.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Me"
        title="Get to Know Me"
        description="My journey, passion, and the things that make me who I am."
      />
      <AboutDetail />
      <EducationTimeline />
      <ExperienceGrid />
    </>
  );
}
