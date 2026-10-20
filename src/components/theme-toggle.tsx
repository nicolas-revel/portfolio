"use client";

import { setTheme, useIsDark } from "./preferences";

// Le bouton montre le thème actif : soleil en clair, lune en sombre.
const SUN = "\\ | /\n- o -\n/ | \\";
const MOON = " .-- \n( (  \n '-- ";

export function ThemeToggle() {
  const isDark = useIsDark();
  const label = isDark ? "Passer en mode clair" : "Passer en mode sombre";

  return (
    <button
      type="button"
      onClick={() => setTheme(!isDark)}
      aria-label={label}
      title={label}
      className="flex size-11 items-center justify-center text-accent hover:text-foreground"
    >
      <span aria-hidden className="whitespace-pre font-mono text-[10px] leading-[1.05]">
        {isDark ? MOON : SUN}
      </span>
    </button>
  );
}
