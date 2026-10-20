"use client";

import { setTheme, useIsDark } from "./preferences";

export function ThemeToggle() {
  const isDark = useIsDark();

  return (
    <button
      type="button"
      onClick={() => setTheme(!isDark)}
      aria-pressed={isDark}
      className="min-h-11 border border-border px-3 font-mono text-xs text-foreground hover:border-accent"
    >
      {isDark ? "[ mode clair ]" : "[ mode sombre ]"}
    </button>
  );
}
