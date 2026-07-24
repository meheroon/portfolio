"use client";

import { personalInfo, aboutText } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function AboutDetail() {
  return (
    <section className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <ScrollReveal>
            <div>
              {aboutText.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary mb-5 text-[1.05rem]">
                  {i === 0 ? (
                    <>
                      <strong className="text-text-primary">Hello!</strong>{" "}
                      {p.replace("Hello! I'm", "I'm")}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: personalInfo.stats.repositories, label: "Repositories" },
                  { number: personalInfo.stats.projects, label: "Projects Built" },
                  { number: personalInfo.stats.technologies, label: "Technologies" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-6 px-4 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:border-accent hover:-translate-y-1"
                  >
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center">
            <div className="w-full max-w-[400px] p-10 bg-gradient-to-br from-ink-lighter to-ink-light border border-border rounded-3xl text-center">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                width={120}
                height={120}
                className="rounded-full object-cover mx-auto mb-5 border-[3px] border-accent"
              />
              <h3 className="text-xl mb-3">Quick Facts</h3>
              <p className="text-text-secondary text-[0.95rem] leading-[1.8]">
                Based in Dhaka, Bangladesh<br />
                Full Stack MERN + QA Engineer<br />
                Learning Secure Software Development<br />
                32 repos &amp; counting
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
