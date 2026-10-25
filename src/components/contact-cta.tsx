import Link from "next/link";
import { contact } from "@/content/site";
import { AsciiDivider } from "./ascii-divider";
import { primaryButtonClass, sectionClass, titleClass } from "./styles";

// Appel à l'action en bas de chaque page.
export function ContactCta() {
  return (
    <>
      <AsciiDivider />
      <section className={sectionClass}>
        <h2 className={titleClass}>{contact.title}</h2>
        <p className="mt-4 max-w-2xl text-muted">{contact.text}</p>
        <Link href="/contact" className={`${primaryButtonClass} mt-8 text-sm`}>
          Réserver un appel
        </Link>
      </section>
    </>
  );
}
