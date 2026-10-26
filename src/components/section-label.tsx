// Libellé de section encadré par un filet, façon cadre ASCII : +-- 02 · offres -----+
export function SectionLabel({ index, children }: { index?: number; children: string }) {
  const label = index === undefined ? children : `${String(index).padStart(2, "0")} · ${children}`;
  return (
    <p className="flex items-center gap-3 font-mono text-xs text-accent">
      <span aria-hidden>+--</span>
      <span>{label}</span>
      <span aria-hidden className="h-px flex-1 bg-border" />
      <span aria-hidden>--+</span>
    </p>
  );
}
