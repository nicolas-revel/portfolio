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
const titleClass = "text-2xl font-semibold tracking-tight sm:text-3xl";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-6 sm:px-6">
        <span className="font-semibold">{profile.name}</span>
        <nav className="hidden gap-5 text-sm text-muted sm:flex">
          <a href="#offres" className="hover:text-foreground">Offres</a>
          <a href="#methode" className="hover:text-foreground">Méthode</a>
          <a href="#projets" className="hover:text-foreground">Projets</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      <main className="flex-1">
        <section className={`${sectionClass} pt-12 sm:pt-20`}>
          <p className="text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.pitch}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#offres"
              className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-background"
            >
              Voir les offres
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-5 py-3 text-sm font-medium"
            >
              Réserver un appel
            </a>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={titleClass}>{problem.title}</h2>
          <div className="mt-6 grid max-w-3xl gap-4 text-muted">
            {problem.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="offres" className={sectionClass}>
          <h2 className={titleClass}>Offres</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {offers.map((offer) => (
              <article
                key={offer.slug}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="text-lg font-semibold">{offer.name}</h3>
                <p className="mt-1 text-sm text-muted">{offer.audience}</p>
                <ul className="mt-5 grid gap-2 text-sm">
                  {offer.content.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-accent">—</span>
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

        <section id="methode" className={sectionClass}>
          <h2 className={titleClass}>{method.title}</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {method.steps.map((step, index) => (
              <li key={step.name}>
                <span className="font-mono text-sm text-accent">0{index + 1}</span>
                <h3 className="mt-2 font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="projets" className={sectionClass}>
          <h2 className={titleClass}>Projets</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {caseStudies.map((study) => {
              const card = (
                <>
                  <h3 className="font-semibold">{study.title}</h3>
                  <p className="mt-2 text-sm text-muted">{study.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </>
              );
              const cardClass = "block rounded-2xl border border-border bg-surface p-6";
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

        <section className={sectionClass}>
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
          <h2 className={titleClass}>{contact.title}</h2>
          <p className="mt-4 max-w-2xl text-muted">
            {contact.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-3 font-medium text-background"
            >
              {profile.email}
            </a>
            <a href={profile.links.linkedin} className="rounded-full border border-border px-5 py-3">
              LinkedIn
            </a>
            <a href={profile.links.github} className="rounded-full border border-border px-5 py-3">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-4 py-10 text-sm text-muted sm:px-6">
        {profile.name} · Site construit en code assisté par IA
      </footer>
    </>
  );
}
