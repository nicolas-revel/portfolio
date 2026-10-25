import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { pageTitleClass, sectionClass, textLinkClass } from "@/components/styles";

export default function NotFound() {
  return (
    <section className={sectionClass}>
      <SectionLabel>404</SectionLabel>
      <h1 className={pageTitleClass}>Cette page n&apos;existe pas</h1>
      <Link href="/" className={`${textLinkClass} mt-8 inline-block`}>
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
