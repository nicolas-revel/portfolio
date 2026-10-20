"use client";

import { useEffect, useRef, useState } from "react";
import { useIsDark, usePrefersReducedMotion } from "./preferences";

const WIDTH = 66;
const HEIGHT = 17;
const HORIZON = 10;
const SUN_X = 41;
const SUN_RADIUS = 5.5;
const MOON_X = 48;
// Le soleil descend de SUN_SET lignes avant que la lune ne se lève.
const SUN_SET = 8;

type Frame = { tick: number; drop: number; moon: number; reveal: number };

function cliffTop(x: number) {
  const left =
    HORIZON -
    Math.round(8 * Math.exp(-(((x - 5) / 8) ** 2)) + 3 * Math.exp(-(((x - 17) / 4) ** 2)));
  const right = HORIZON - Math.round(6 * Math.exp(-(((x - 60) / 6) ** 2)));
  return Math.min(x < 28 ? left : 99, x > 52 ? right : 99);
}

function skyChar(x: number, y: number, { drop, moon }: Frame) {
  const top = cliffTop(x);
  if (y >= top) {
    const depth = y - top;
    if (depth === 0) return x <= 5 || (x > 52 && x <= 60) ? "/" : "\\";
    return depth > 3 ? "%" : depth > 1 ? "#" : "*";
  }
  const toMoon = Math.hypot((x - MOON_X) / 2.1, y - (HORIZON + 2 - moon * 9));
  if (moon > 0 && toMoon < 2.6) return toMoon < 1.4 ? "@" : "o";
  const toSun = Math.hypot((x - SUN_X) / 2.1, y - HORIZON + 0.5 - drop);
  if (toSun < SUN_RADIUS) return toSun < SUN_RADIUS - 1.6 ? "@" : "o";
  if (toSun < SUN_RADIUS + 1.2 && drop < 4) return (x + y) % 2 === 0 ? "." : " ";
  if (moon > 0.5 && (x * 7 + y * 13) % 29 === 0) return ".";
  return " ";
}

function seaChar(x: number, y: number, { tick, drop, moon }: Frame) {
  const dy = y - HORIZON;
  const sunReflection = (SUN_RADIUS * 2.1 - dy * 0.9) * Math.max(0, 1 - drop / 7);
  const moonReflection = moon > 0.6 ? 4 - dy * 0.6 : 0;
  const inReflection =
    Math.abs(x - SUN_X) < sunReflection || Math.abs(x - MOON_X) < moonReflection;
  if (inReflection && (x * 3 + dy + tick) % 4 !== 0) return dy % 2 === 0 ? "~" : "-";
  if ((x + dy * 7 + tick) % 11 === 0) return "~";
  if ((x * 5 + dy * 3 + tick) % 13 === 0) return ".";
  return " ";
}

function render(frame: Frame) {
  const rows: string[] = [];
  for (let y = 0; y < HEIGHT; y++) {
    let row = "";
    for (let x = 0; x < WIDTH; x++) {
      let char = y < HORIZON ? skyChar(x, y, frame) : y === HORIZON ? "=" : seaChar(x, y, frame);
      // Apparition progressive : chaque caractère a son propre seuil.
      if (char !== " " && frame.reveal < 1) {
        const threshold = (((x * 73856093) ^ (y * 19349663)) >>> 0) % 1000 / 1000;
        if (threshold > frame.reveal) char = " ";
      }
      row += char;
    }
    rows.push(row.trimEnd());
  }
  return rows.join("\n");
}

function step(frame: Frame, dark: boolean): Frame {
  const target = dark ? SUN_SET : 0;
  const delta = Math.sign(target - frame.drop) * Math.min(0.5, Math.abs(target - frame.drop));
  let { drop, moon } = frame;
  if (dark) {
    drop += delta;
    if (drop >= SUN_SET - 1) moon = Math.min(1, moon + 0.08);
  } else if (moon > 0) {
    // Retour au clair : la lune se couche avant que le soleil remonte.
    moon = Math.max(0, moon - 0.15);
  } else {
    drop += delta;
  }
  return { tick: frame.tick + 1, drop, moon, reveal: Math.min(1, frame.reveal + 0.05) };
}

export function AsciiScene({ className = "" }: { className?: string }) {
  const isDark = useIsDark();
  const reducedMotion = usePrefersReducedMotion();
  const [frame, setFrame] = useState<Frame>({ tick: 0, drop: 0, moon: 0, reveal: 0 });
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => setFrame((current) => step(current, isDarkRef.current)), 140);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const shown = reducedMotion
    ? { tick: 0, drop: isDark ? SUN_SET : 0, moon: isDark ? 1 : 0, reveal: 1 }
    : frame;

  return (
    <pre
      aria-hidden
      className={`m-0 overflow-hidden font-mono leading-[1.1] text-accent text-[clamp(6px,2.1vw,13px)] lg:text-[11px] ${className}`}
    >
      {render(shown)}
    </pre>
  );
}
