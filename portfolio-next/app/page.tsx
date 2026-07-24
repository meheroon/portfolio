import Hero from "@/components/home/Hero";
import AboutSummary from "@/components/home/AboutSummary";
import SkillsSummary from "@/components/home/SkillsSummary";
import ProjectsSummary from "@/components/home/ProjectsSummary";
import ExperienceSummary from "@/components/home/ExperienceSummary";
import ContactSummary from "@/components/home/ContactSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <SkillsSummary />
      <ProjectsSummary />
      <ExperienceSummary />
      <ContactSummary />
    </>
  );
}
