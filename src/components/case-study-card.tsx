import Link from "next/link";
import type { CaseStudy } from "@/content/site";

// Au survol, des coins « + » encadrent la carte et la flèche s'allonge.
const corner =
  "absolute font-mono text-sm leading-none text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/projets/${study.slug}`}
      className="group relative block border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent focus-visible:border-accent"
    >
      <span aria-hidden className={`${corner} -top-[0.5em] -left-[0.3em]`}>+</span>
      <span aria-hidden className={`${corner} -top-[0.5em] -right-[0.3em]`}>+</span>
      <span aria-hidden className={`${corner} -bottom-[0.5em] -left-[0.3em]`}>+</span>
      <span aria-hidden className={`${corner} -right-[0.3em] -bottom-[0.5em]`}>+</span>
      <p className="font-mono text-xs text-muted">{study.period}</p>
      <h3 className="mt-2 text-lg font-medium">{study.title}</h3>
      <p className="mt-2 text-sm text-muted">{study.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {study.tags.map((tag) => (
          <li key={tag}>[{tag}]</li>
        ))}
      </ul>
      <span aria-hidden className="mt-4 inline-flex font-mono text-xs text-accent">
        lire l&apos;étude de cas&nbsp;
        <span className="inline-block w-[2ch] overflow-hidden whitespace-nowrap transition-[width] duration-300 group-hover:w-[6ch] group-focus-visible:w-[6ch] motion-reduce:transition-none">
          ------
        </span>
        &gt;
      </span>
    </Link>
  );
}
