import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { SectionLabel } from "@/components/section-label";
import { sectionClass, textLinkClass } from "@/components/styles";

export default function NotFound() {
  return (
    <section className={sectionClass}>
      <SectionLabel>404</SectionLabel>
      <PageTitle>Cette page n&apos;existe pas</PageTitle>
      <Link href="/" className={`${textLinkClass} mt-8 inline-block`}>
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
