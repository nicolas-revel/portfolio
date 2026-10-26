import Link from "next/link";
import { SectionDivider } from "@/components/section-divider";
import { AsciiScene } from "@/components/ascii-scene";
import { CaseStudyCard } from "@/components/case-study-card";
import { ContactCta } from "@/components/contact-cta";
import { OfferCard } from "@/components/offer-card";
import { SectionLabel } from "@/components/section-label";
import { containerClass, primaryButtonClass, sectionClass, textLinkClass, titleClass } from "@/components/styles";
import { caseStudies, method, offers, problem, profile } from "@/content/site";

export default function Home() {
  const featured = caseStudies.filter((study) => study.featured);

  return (
    <>
      <section className={`${containerClass} grid items-center gap-12 pt-10 pb-16 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`}>
        <div>
          <p className="font-mono text-xs text-muted">
            ~ {profile.role} · {profile.location}
          </p>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
            {profile.pitchLead} <em className="text-accent">{profile.pitchAccent}</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
            <Link href="/offres" className={primaryButtonClass}>
              Voir les offres
            </Link>
            <Link href="/contact" className={textLinkClass}>
              Réserver un appel
            </Link>
          </div>
        </div>
        <AsciiScene />
      </section>

      <SectionDivider />

      <section className={sectionClass}>
        <SectionLabel index={1}>constat</SectionLabel>
        <h2 className={titleClass}>{problem.title}</h2>
        <div className="mt-6 grid max-w-3xl gap-4 text-muted">
          {problem.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionLabel index={2}>offres</SectionLabel>
        <h2 className={titleClass}>Offres</h2>
        <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} index={index} />
          ))}
        </div>
        <Link href="/offres" className={`${textLinkClass} mt-10 inline-block text-sm`}>
          Le détail des offres
        </Link>
      </section>

      <SectionDivider />

      <section className={sectionClass}>
        <SectionLabel index={3}>méthode</SectionLabel>
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

      <section className={sectionClass}>
        <SectionLabel index={4}>projets</SectionLabel>
        <h2 className={titleClass}>Projets</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <Link href="/projets" className={`${textLinkClass} mt-10 inline-block text-sm`}>
          Tous les projets
        </Link>
      </section>

      <ContactCta />
    </>
  );
}
