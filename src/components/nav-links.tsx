"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/offres", label: "offres" },
  { href: "/projets", label: "projets" },
  { href: "/a-propos", label: "à propos" },
  { href: "/contact", label: "contact" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
        {links.map((link) => {
          const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center hover:text-foreground ${current ? "text-accent" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
