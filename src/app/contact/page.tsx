import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactSection } from "@/components/contact-section";
import { SectionLabel } from "@/components/section-label";
import { pageTitleClass, sectionClass } from "@/components/styles";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.text,
};

export default function ContactPage() {
  return (
    <section className={sectionClass}>
      <SectionLabel>contact</SectionLabel>
      <h1 className={pageTitleClass}>{contact.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{contact.text}</p>
      <div className="mt-10">
        <Suspense fallback={<div className="min-h-96" />}>
          <ContactSection />
        </Suspense>
      </div>
    </section>
  );
}
