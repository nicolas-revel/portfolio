import Link from "next/link";
import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-10 font-mono text-xs text-muted sm:px-6">
      <span>~ {profile.name} · site construit en code assisté par IA</span>
      <span className="flex gap-5">
        <a href={profile.links.linkedin} className="hover:text-foreground">linkedin</a>
        <a href={profile.links.github} className="hover:text-foreground">github</a>
        <Link href="/contact" className="hover:text-foreground">contact</Link>
      </span>
    </footer>
  );
}
