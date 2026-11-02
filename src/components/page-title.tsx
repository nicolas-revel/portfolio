import { pageTitleClass } from "./styles";

// Titre de page suivi d'un curseur de terminal qui clignote.
export function PageTitle({ children }: { children: string }) {
  return (
    <h1 className={pageTitleClass}>
      {children}
      <span aria-hidden className="cursor-blink ml-1 font-mono text-accent">_</span>
    </h1>
  );
}
