// Script exécuté pendant l'analyse du HTML, avant le premier rendu.
// Côté client, le type text/plain évite qu'il soit réexécuté ou signalé par React.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
