export function SectionLabel({ index, children }: { index?: number; children: string }) {
  return (
    <p className="font-mono text-xs text-accent">
      {index === undefined ? "~" : `[${String(index).padStart(2, "0")}]`} {children}
    </p>
  );
}
