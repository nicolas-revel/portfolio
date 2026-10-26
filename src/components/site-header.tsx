import Link from "next/link";
import { Suspense } from "react";
import { profile } from "@/content/site";
import { NavLinks } from "./nav-links";
import { containerClass } from "./styles";

export function SiteHeader() {
  return (
    <header className={`${containerClass} flex flex-wrap items-center justify-between gap-x-6 py-4 sm:py-6`}>
      <Link href="/" className="text-lg font-medium hover:text-accent">
        {profile.name}
      </Link>
      <div className="w-full sm:ml-auto sm:w-auto">
        {/* Une page de projet inconnue n'est résolue qu'à la requête : le lien actif attend l'URL. */}
        <Suspense fallback={<div className="min-h-11" />}>
          <NavLinks />
        </Suspense>
      </div>
    </header>
  );
}
