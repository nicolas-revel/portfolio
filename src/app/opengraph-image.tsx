import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Couleurs du thème clair « Calanque » (globals.css), en dur : ImageResponse ne lit pas le CSS.
const background = "#f7f3ea";
const foreground = "#102a5c";
const muted = "#34446a";
const accent = "#b4502e";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background,
          color: foreground,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: muted }}>
          nicolasrevel.fr · {profile.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>{profile.pitchLead}</div>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, color: accent }}>
            {profile.pitchAccent}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32 }}>{profile.name}</div>
      </div>
    ),
    size,
  );
}
