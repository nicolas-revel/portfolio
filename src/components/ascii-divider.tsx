// Séparateur de sections : un demi-soleil posé sur l'horizon.
export function AsciiDivider() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-5xl overflow-hidden px-4 font-mono text-xs leading-[1.1] text-muted sm:px-6">
      <div className="flex justify-center">
        <span className="text-accent">.-&quot;&quot;-.</span>
      </div>
      <div className="flex items-center">
        <span className="h-px flex-1 bg-border" />
        <span className="whitespace-pre text-accent">/      \</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
