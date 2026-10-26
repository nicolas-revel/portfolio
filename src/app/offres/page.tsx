import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageTitle } from "@/components/page-title";
import { SectionLabel } from "@/components/section-label";
import { sectionClass, titleClass } from "@/components/styles";
import { offers, offersPage } from "@/content/site";

export const metadata: Metadata = {
  title: offersPage.title,
  description: offersPage.intro,
};

export default function OffersPage() {
  return (
    <>
      <section className={sectionClass}>
        <SectionLabel>offres</SectionLabel>
        <PageTitle>{offersPage.title}</PageTitle>
        <p className="mt-6 max-w-2xl text-lg text-muted">{offersPage.intro}</p>
      </section>

      {offers.map((offer, index) => (
        <section key={offer.slug} id={offer.slug} className={`${sectionClass} scroll-mt-4`}>
          <div className="grid gap-10 border-t border-foreground pt-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <span className="font-mono text-sm text-accent">[{String(index + 1).padStart(2, "0")}]</span>
              <h2 className={titleClass}>{offer.name}</h2>
              <p className="mt-3 text-muted">{offer.audience}</p>
              <ul className="mt-6 grid gap-2">
                {offer.content.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="font-mono text-accent">~</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid content-start gap-5 text-sm">
              <div>
                <dt className="font-mono text-xs text-muted">prix</dt>
                <dd className="mt-1 text-lg font-medium">{offer.price}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">format</dt>
                <dd className="mt-1">{offer.format}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">ce qui reste après</dt>
                <dd className="mt-1">{offer.outcome}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">preuve</dt>
                <dd className="mt-1 text-muted">{offer.proof}</dd>
              </div>
            </dl>
          </div>
        </section>
      ))}

      <section className={sectionClass}>
        <SectionLabel>déroulé</SectionLabel>
        <h2 className={titleClass}>Comment on travaille ensemble</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offersPage.steps.map((step, index) => (
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
