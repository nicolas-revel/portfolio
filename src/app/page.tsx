import { AsciiDivider } from "@/components/ascii-divider";
import { AsciiScene } from "@/components/ascii-scene";
import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  background,
  caseStudies,
  contact,
  experiences,
  method,
  offers,
  problem,
  profile,
} from "@/content/site";

const sectionClass = "mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24";
const titleClass = "mt-3 text-2xl font-medium tracking-tight sm:text-4xl";
const primaryButtonClass =
  "inline-flex min-h-11 items-center rounded-[3px] bg-accent px-5 font-medium text-background hover:opacity-90";
const secondaryButtonClass =
  "inline-flex min-h-11 items-center rounded-[3px] border border-border px-5 hover:border-accent";

function SectionLabel({ index, children }: { index: number; children: string }) {
  return (
    <p className="font-mono text-xs text-accent">
      [{String(index).padStart(2, "0")}] {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
        <span className="text-lg font-medium">{profile.name}</span>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-5 font-mono text-xs text-muted sm:flex">
            <a href="#offres" className="hover:text-foreground">offres</a>
            <a href="#methode" className="hover:text-foreground">méthode</a>
            <a href="#projets" className="hover:text-foreground">projets</a>
            <a href="#contact" className="hover:text-foreground">contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-5xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs text-muted">
              ~ {profile.role} · {profile.location}
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              {profile.pitchLead}{" "}
              <em className="text-accent">{profile.pitchAccent}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <a href="#offres" className={primaryButtonClass}>
                Voir les offres
              </a>
              <a href="#contact" className="underline underline-offset-4 hover:text-accent">
                Réserver un appel
              </a>
            </div>
          </div>
          <AsciiScene />
        </section>

        <AsciiDivider />

        <section className={sectionClass}>
          <SectionLabel index={1}>constat</SectionLabel>
          <h2 className={titleClass}>{problem.title}</h2>
          <div className="mt-6 grid max-w-3xl gap-4 text-muted">
            {problem.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="offres" className={sectionClass}>
          <SectionLabel index={2}>offres</SectionLabel>
          <h2 className={titleClass}>Offres</h2>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {offers.map((offer, index) => (
              <article key={offer.slug} className="group flex flex-col border-t border-foreground pt-5">
                <span aria-hidden className="font-mono text-sm text-accent">
                  <span className="group-hover:hidden">[{String(index + 1).padStart(2, "0")}]</span>
                  <span className="hidden group-hover:inline">[ → ]</span>
                </span>
                <h3 className="mt-2 text-xl font-medium">{offer.name}</h3>
                <p className="mt-1 text-sm text-muted">{offer.audience}</p>
                <ul className="mt-5 grid gap-2 text-sm">
                  {offer.content.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="font-mono text-accent">~</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-between gap-4 pt-6 text-sm">
                  <span className="text-muted">{offer.format}</span>
                  <span className="font-medium">{offer.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AsciiDivider />

        <section id="methode" className={sectionClass}>
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

        <section id="projets" className={sectionClass}>
          <SectionLabel index={4}>projets</SectionLabel>
          <h2 className={titleClass}>Projets</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {caseStudies.map((study) => {
              const card = (
                <>
                  <h3 className="text-lg font-medium">{study.title}</h3>
                  <p className="mt-2 text-sm text-muted">{study.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                    {study.tags.map((tag) => (
                      <li key={tag}>[{tag}]</li>
                    ))}
                  </ul>
                </>
              );
              const cardClass = "block border border-border bg-surface p-6";
              return study.href ? (
                <a key={study.title} href={study.href} className={`${cardClass} hover:border-accent`}>
                  {card}
                </a>
              ) : (
                <article key={study.title} className={cardClass}>
                  {card}
                </article>
              );
            })}
          </div>
        </section>

        <AsciiDivider />

        <section className={sectionClass}>
          <SectionLabel index={5}>parcours</SectionLabel>
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
          <p className="mt-6 max-w-2xl text-sm text-muted">
            {background}
          </p>
        </section>

        <section id="contact" className={sectionClass}>
          <SectionLabel index={6}>contact</SectionLabel>
          <h2 className={titleClass}>{contact.title}</h2>
          <p className="mt-4 max-w-2xl text-muted">
            {contact.text}
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-muted">Ou retrouvez-moi sur</span>
            <a href={profile.links.linkedin} className={secondaryButtonClass}>
              LinkedIn
            </a>
            <a href={profile.links.github} className={secondaryButtonClass}>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-4 py-10 font-mono text-xs text-muted sm:px-6">
        ~ {profile.name} · site construit en code assisté par IA
      </footer>
    </>
  );
}
