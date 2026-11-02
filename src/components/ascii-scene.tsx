"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./preferences";

const WIDTH = 66;
const HEIGHT = 17;
const HORIZON = 10;
const SUN_X = 41;
const SUN_RADIUS = 5.5;
// Les caractères sont environ deux fois plus hauts que larges.
const ASPECT = 2.1;
// Angles des rayons (en degrés, 90 = vertical), uniquement au-dessus de l'horizon.
const RAYS = [12, 36, 60, 90, 120, 144, 168];

type Frame = { tick: number; reveal: number };

function cliffTop(x: number) {
  const left =
    HORIZON -
    Math.round(8 * Math.exp(-(((x - 5) / 8) ** 2)) + 3 * Math.exp(-(((x - 17) / 4) ** 2)));
  const right = HORIZON - Math.round(6 * Math.exp(-(((x - 60) / 6) ** 2)));
  return Math.min(x < 28 ? left : 99, x > 52 ? right : 99);
}

// Caractère d'un rayon selon sa pente à l'écran.
function rayChar(angle: number) {
  const screen = (Math.atan(Math.tan((angle * Math.PI) / 180) / ASPECT) * 180) / Math.PI;
  if (Math.abs(screen) < 14) return "-";
  if (Math.abs(screen) > 70) return "|";
  return screen > 0 ? "/" : "\\";
}

function skyChar(x: number, y: number, { tick }: Frame) {
  const top = cliffTop(x);
  if (y >= top) {
    const depth = y - top;
    if (depth === 0) return x <= 5 || (x > 52 && x <= 60) ? "/" : "\\";
    return depth > 3 ? "%" : depth > 1 ? "#" : "*";
  }
  // Demi-soleil posé sur l'horizon, plein au centre.
  const dx = (x - SUN_X) / ASPECT;
  const dy = HORIZON - 0.5 - y;
  const distance = Math.hypot(dx, dy);
  if (distance < SUN_RADIUS) return distance < SUN_RADIUS - 1.6 ? "@" : "o";
  // Rayons fins dont la longueur ondule doucement, chacun à son rythme.
  for (const [index, angle] of RAYS.entries()) {
    const radians = (angle * Math.PI) / 180;
    const along = dx * Math.cos(radians) + dy * Math.sin(radians);
    const across = Math.abs(dx * Math.sin(radians) - dy * Math.cos(radians));
    const length = 3.4 + 1.1 * Math.sin(tick * 0.18 + index * 1.7);
    if (across < 0.3 && along > SUN_RADIUS + 1 && along < SUN_RADIUS + 1 + length) {
      return rayChar(angle);
    }
  }
  return " ";
}

function seaChar(x: number, y: number, { tick }: Frame) {
  const dy = y - HORIZON;
  const inReflection = Math.abs(x - SUN_X) < SUN_RADIUS * ASPECT - dy * 0.9;
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

export function AsciiScene({ className = "" }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const [frame, setFrame] = useState<Frame>({ tick: 0, reveal: 0 });

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(
      () => setFrame(({ tick, reveal }) => ({ tick: tick + 1, reveal: Math.min(1, reveal + 0.05) })),
      140,
    );
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <pre
      aria-hidden
      className={`m-0 overflow-hidden font-mono leading-[1.1] text-accent text-[clamp(6px,2.1vw,13px)] lg:text-[clamp(10px,1.1vw,18px)] ${className}`}
    >
      {render(reducedMotion ? { tick: 0, reveal: 1 } : frame)}
    </pre>
  );
}
