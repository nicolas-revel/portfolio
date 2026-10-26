import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/contact-cta";
import { PageTitle } from "@/components/page-title";
import { SectionLabel } from "@/components/section-label";
import { sectionClass, textLinkClass } from "@/components/styles";
import { caseStudies } from "@/content/site";

function findStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const study = findStudy((await params).slug);
  return study ? { title: study.title, description: study.summary } : {};
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid gap-3 border-t border-border pt-5 md:grid-cols-[12rem_1fr]">
      <h2 className="font-mono text-xs text-accent">{label}</h2>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/projets/[slug]">) {
  const study = findStudy((await params).slug);
  if (!study) notFound();

  return (
    <>
      <article className={sectionClass}>
        <Link href="/projets" className="font-mono text-xs text-muted hover:text-foreground">
          ← tous les projets
        </Link>
        <div className="mt-8">
          <SectionLabel>{study.period}</SectionLabel>
          <PageTitle>{study.title}</PageTitle>
          <p className="mt-6 max-w-2xl text-lg text-muted">{study.summary}</p>
          <p className="mt-4 text-sm">{study.role}</p>
        </div>

        <div className="mt-14 grid gap-10">
          <Block label="contexte" items={study.context} />
          <Block label="ce que j'ai fait" items={study.work} />
          <Block label="résultat" items={study.outcome} />
          <div className="grid gap-3 border-t border-border pt-5 md:grid-cols-[12rem_1fr]">
            <h2 className="font-mono text-xs text-accent">stack</h2>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-muted">
              {study.stack.map((item) => (
                <li key={item}>[{item}]</li>
              ))}
            </ul>
          </div>
          {study.links.length > 0 && (
            <div className="grid gap-3 border-t border-border pt-5 md:grid-cols-[12rem_1fr]">
              <h2 className="font-mono text-xs text-accent">liens</h2>
              <ul className="grid gap-2">
                {study.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={textLinkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      <ContactCta />
    </>
  );
}
