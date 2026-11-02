// Logo « nr_ » : initiales en Instrument Sans Bold vectorisées, curseur de terminal en couleur d'accent.
// Les icônes (src/app/icon.svg, favicon.ico, apple-icon.png) reprennent le même tracé.
const letters =
  "M60 0V-510H207V-390H210V0ZM415 0V-316Q415 -358 393.5 -379.0Q372 -400 331 -400Q296 -400 268.5 -384.0Q241 -368 225.5 -340.0Q210 -312 210 -274L197 -397Q222 -453 270.5 -486.5Q319 -520 390 -520Q475 -520 520.0 -472.5Q565 -425 565 -345V0Z M629.0 0V-510H776.0V-390H779.0V0ZM779.0 -266 766.0 -387Q784.0 -452 825.0 -486.0Q866.0 -520 927.0 -520Q946.0 -520 955.0 -516V-376Q950.0 -378 941.0 -378.5Q932.0 -379 919.0 -379Q847.0 -379 813.0 -353.5Q779.0 -328 779.0 -266Z";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="60 -520 1347 540" className={className} aria-hidden="true" focusable="false">
      <path d={letters} fill="currentColor" />
      <rect x="987" y="-90" width="420" height="110" className="fill-accent" />
    </svg>
  );
}
