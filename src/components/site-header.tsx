import Link from "next/link";
import { Suspense } from "react";
import { profile } from "@/content/site";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 px-4 py-4 sm:px-6 sm:py-6">
      <Link href="/" className="text-lg font-medium hover:text-accent">
        {profile.name}
      </Link>
      <div className="order-last w-full sm:order-none sm:ml-auto sm:w-auto">
        {/* Une page de projet inconnue n'est résolue qu'à la requête : le lien actif attend l'URL. */}
        <Suspense fallback={<div className="min-h-11" />}>
          <NavLinks />
        </Suspense>
      </div>
      <ThemeToggle />
    </header>
  );
}
