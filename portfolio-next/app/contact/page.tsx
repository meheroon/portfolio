import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Meherun Nessa Ferdausi — Full Stack Software Engineer. Email, phone, LinkedIn, and more.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let&apos;s Connect"
        description="Have a project in mind or just want to say hello? I&apos;d love to hear from you."
      />
      <section className="py-[100px] relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
