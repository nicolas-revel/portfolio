import { containerClass } from "./styles";

// Séparateur de sections : un filet fin.
export function SectionDivider() {
  return (
    <div aria-hidden className={containerClass}>
      <div className="h-px bg-border" />
    </div>
  );
}
