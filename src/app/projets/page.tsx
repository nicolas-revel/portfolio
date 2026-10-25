import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { ContactCta } from "@/components/contact-cta";
import { SectionLabel } from "@/components/section-label";
import { pageTitleClass, sectionClass } from "@/components/styles";
import { caseStudies, projectsPage } from "@/content/site";

export const metadata: Metadata = {
  title: projectsPage.title,
  description: projectsPage.intro,
};

export default function ProjectsPage() {
  return (
    <>
      <section className={sectionClass}>
        <SectionLabel>projets</SectionLabel>
        <h1 className={pageTitleClass}>{projectsPage.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{projectsPage.intro}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
