import type { Metadata } from "next";
import ResumeView from "@/components/resume/ResumeView";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Meherun Nessa Ferdausi — Full Stack Software Engineer and QA Engineer.",
};

export default function ResumePage() {
  return <ResumeView />;
}
