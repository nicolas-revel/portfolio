// Pied de page : la calanque, le soleil et la mer qui ondule, en caractères.
const CLIFF = "__/\\___/^^\\_";
const SEA = "~  ~~ ~   ~~~  ~ ~~    ~  ~~~ ";
const SWELL = " .   ~    .  ~~    .     ~   ";

export function FooterHorizon() {
  return (
    <div aria-hidden className="select-none overflow-hidden font-mono text-xs leading-[1.15] sm:text-sm">
      <div className="flex justify-end pr-[12%] text-accent">
        <span className="whitespace-pre">{"\\ | /\n- o -"}</span>
      </div>
      <div className="flex text-muted">
        <span className="whitespace-pre">{CLIFF}</span>
        <span className="relative flex-1 overflow-hidden">
          <span className="wave-left inline-block whitespace-pre">{SEA.repeat(24)}</span>
        </span>
      </div>
      <div className="overflow-hidden pl-[12ch] text-border">
        <span className="wave-right inline-block whitespace-pre">{SWELL.repeat(24)}</span>
      </div>
    </div>
  );
}
