import type { Offer } from "@/content/site";

export function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  return (
    <article className="group flex flex-col border-t border-foreground pt-5">
      <span aria-hidden className="font-mono text-sm text-accent">
        <span className="group-hover:hidden">[{String(index + 1).padStart(2, "0")}]</span>
        <span className="hidden group-hover:inline">[ → ]</span>
      </span>
      <h3 className="mt-2 text-xl font-medium">{offer.name}</h3>
      <p className="mt-1 text-sm text-muted">{offer.audience}</p>
      <ul className="mt-5 grid gap-2 pb-6 text-sm">
        {offer.content.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden className="font-mono text-accent">~</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-1 border-t border-border pt-4 text-sm">
        <span className="font-medium">{offer.price}</span>
        <span className="text-muted">{offer.format}</span>
      </div>
    </article>
  );
}
