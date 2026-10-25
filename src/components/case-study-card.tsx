import Link from "next/link";
import type { CaseStudy } from "@/content/site";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/projets/${study.slug}`}
      className="group block border border-border bg-surface p-6 hover:border-accent"
    >
      <p className="font-mono text-xs text-muted">{study.period}</p>
      <h3 className="mt-2 text-lg font-medium">{study.title}</h3>
      <p className="mt-2 text-sm text-muted">{study.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {study.tags.map((tag) => (
          <li key={tag}>[{tag}]</li>
        ))}
      </ul>
      <span aria-hidden className="mt-4 inline-block font-mono text-xs text-accent group-hover:translate-x-1 motion-safe:transition-transform">
        lire l&apos;étude de cas →
      </span>
    </Link>
  );
}
