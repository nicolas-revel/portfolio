import Link from "next/link";
import { profile } from "@/content/site";
import { FooterHorizon } from "./footer-horizon";
import { containerClass } from "./styles";

export function SiteFooter() {
  return (
    <footer className={`${containerClass} pt-16 pb-10`}>
      <FooterHorizon />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted">
      <span>{profile.name} · site construit en code assisté par IA</span>
      <span className="flex gap-5">
        <a href={profile.links.linkedin} className="hover:text-foreground">linkedin</a>
        <a href={profile.links.github} className="hover:text-foreground">github</a>
        <Link href="/contact" className="hover:text-foreground">contact</Link>
      </span>
      </div>
    </footer>
  );
}
