import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { SectionLabel } from "@/components/section-label";
import { pageTitleClass, sectionClass, titleClass } from "@/components/styles";
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
        <h1 className={pageTitleClass}>{about.title}</h1>
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
        <ul className="mt-10 grid gap-4">
          {experiences.map((experience) => (
            <li
              key={experience.company}
              className="grid gap-1 border-b border-border pb-4 sm:grid-cols-[10rem_1fr]"
            >
              <span className="font-mono text-sm text-muted">{experience.period}</span>
              <span>
                <span className="font-medium">{experience.company}</span>
                <span className="text-muted"> · {experience.role}</span>
              </span>
            </li>
          ))}
        </ul>
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
