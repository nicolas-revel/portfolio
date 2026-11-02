import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageTitle } from "@/components/page-title";
import { SectionLabel } from "@/components/section-label";
import { sectionClass, titleClass } from "@/components/styles";
import { about, background, experiences, method } from "@/content/site";

export const metadata: Metadata = {
  title: about.title,
  description: about.intro[0],
};

export default function AboutPage() {
  return (
    <>
      <section className={sectionClass}>
        <SectionLabel>à propos</SectionLabel>
        <PageTitle>{about.title}</PageTitle>
        <div className="mt-6 grid max-w-2xl gap-4 text-lg text-muted">
          {about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{background}</p>
        </div>
      </section>

      <section className={sectionClass}>
        <SectionLabel index={1}>parcours</SectionLabel>
        <h2 className={titleClass}>Parcours</h2>
        <ol className="mt-10">
          {experiences.map((experience, index) => {
            const last = index === experiences.length - 1;
            return (
              <li key={experience.company} className="grid grid-cols-[1.5rem_1fr] gap-x-3">
                {/* Frise : un point par poste, reliés par un trait. */}
                <span aria-hidden className="flex flex-col items-center pt-1.5">
                  <span className={`size-2 rounded-full border border-accent ${last ? "" : "bg-accent"}`} />
                  {!last && <span className="w-px flex-1 bg-accent" />}
                </span>
                <span className={`grid gap-1 sm:grid-cols-[10rem_1fr] ${last ? "" : "pb-8"}`}>
                  <span className="font-mono text-sm text-muted">{experience.period}</span>
                  <span>
                    <span className="font-medium">{experience.company}</span>
                    <span className="text-muted"> · {experience.role}</span>
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <section className={sectionClass}>
        <SectionLabel index={2}>méthode</SectionLabel>
        <h2 className={titleClass}>{method.title}</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {method.steps.map((step, index) => (
            <li key={step.name} className="border-t border-border pt-5">
              <span className="font-mono text-sm text-accent">[{String(index + 1).padStart(2, "0")}]</span>
              <h3 className="mt-2 text-lg font-medium">{step.name}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactCta />
    </>
  );
}
