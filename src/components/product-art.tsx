import type { ArtKind, Product } from "@/lib/products";

const palette = {
  black: { body: "#0c0c0c", edge: "rgba(241,239,232,.16)", ink: "#f1efe8" },
  olive: { body: "#56702a", edge: "rgba(0,0,0,.35)", ink: "#f1efe8" },
  bone: { body: "#e8e4d6", edge: "rgba(0,0,0,.25)", ink: "#131313" },
} as const;

/** Illustrated product mock-ups in the brand palette. Replace with photos when you have them. */
export function ProductArt({ kind, tone }: { kind: ArtKind; tone: Product["tone"] }) {
  const c = palette[tone];
  const common = { fill: c.body, stroke: c.edge, strokeWidth: 1.5, strokeLinejoin: "round" as const };
  const word = (x: number, y: number, size: number, text = "RGPK") => (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={c.ink}
      fontSize={size}
      style={{ fontFamily: "var(--font-display)", letterSpacing: ".02em" }}
    >
      {text}
    </text>
  );

  return (
    <svg viewBox="0 0 200 200" className="size-full" role="img" aria-hidden="true">
      <ZebraCorner />
      {kind === "tee" && (
        <g>
          <path d="M70 38 82 32q18 12 36 0l12 6 34 24-16 24-14-8v94H66V78l-14 8-16-24z" {...common} />
          <path d="M82 32q18 12 36 0" fill="none" stroke={c.edge} strokeWidth="3" />
          {word(100, 78, 16)}
          {tone === "bone" && <path d="M136 46l28 18-6 9-26-16z" fill="#131313" opacity=".85" />}
        </g>
      )}
      {kind === "hoodie" && (
        <g>
          <path d="M72 40q28-24 56 0l38 24-12 100h-16l-4-74v86H66V90l-4 74H46L34 64z" {...common} />
          <path d="M80 42q20 22 40 0" fill="none" stroke={c.edge} strokeWidth="3" />
          <path d="M80 130h40l6 26H74z" fill="rgba(0,0,0,.18)" />
          <path d="M94 50v22M106 50v22" stroke={c.ink} strokeWidth="1.5" opacity=".7" />
          {word(100, 108, 18)}
        </g>
      )}
      {kind === "cap" && (
        <g>
          <path d="M44 120q0-58 60-58t58 58z" {...common} />
          <path d="M150 118q30 4 40 16-26 10-62 0" {...common} />
          <circle cx="104" cy="62" r="4" fill={c.edge} />
          {word(100, 106, 22)}
        </g>
      )}
      {kind === "beanie" && (
        <g>
          <path d="M50 128q0-78 50-78t50 78z" {...common} />
          <rect x="44" y="122" width="112" height="34" rx="4" {...common} />
          {Array.from({ length: 13 }, (_, i) => (
            <path key={i} d={`M${52 + i * 8} 126v26`} stroke={c.edge} strokeWidth="2" />
          ))}
          <rect x="84" y="130" width="32" height="18" fill="#131313" />
          {word(100, 144, 11)}
        </g>
      )}
      {kind === "sticker" && (
        <g>
          <circle cx="122" cy="84" r="44" fill="#56702a" transform="rotate(12 122 84)" />
          <rect x="40" y="96" width="90" height="62" rx="10" fill="#e8e4d6" transform="rotate(-8 85 127)" />
          <circle cx="86" cy="80" r="46" fill="#0c0c0c" stroke="#f1efe8" strokeWidth="4" />
          <text x="86" y="82" textAnchor="middle" fill="#f1efe8" fontSize="17" style={{ fontFamily: "var(--font-display)" }}>
            ROLLIN
          </text>
          <text x="86" y="100" textAnchor="middle" fill="#8fae3c" fontSize="13" style={{ fontFamily: "var(--font-display)" }}>
            GEAR PK
          </text>
          <text x="85" y="140" textAnchor="middle" fill="#131313" fontSize="15" transform="rotate(-8 85 127)" style={{ fontFamily: "var(--font-display)" }}>
            ZERO CHILL
          </text>
        </g>
      )}
      {kind === "patch" && (
        <g transform="rotate(-6 100 100)">
          <rect x="38" y="60" width="124" height="80" rx="40" {...common} />
          <rect x="46" y="68" width="108" height="64" rx="32" fill="none" stroke={c.ink} strokeDasharray="4 4" strokeWidth="1.5" opacity=".7" />
          {word(100, 98, 22, "ROLLIN GEAR")}
          {word(100, 120, 13, "STREET JOURNEY · PK")}
        </g>
      )}
      {kind === "keychain" && (
        <g>
          <circle cx="100" cy="52" r="20" fill="none" stroke="#b9bdb8" strokeWidth="5" />
          <path d="M100 72v12" stroke="#b9bdb8" strokeWidth="4" />
          <rect x="70" y="84" width="60" height="84" rx="8" {...common} />
          <circle cx="100" cy="96" r="4" fill="#131313" />
          {word(100, 136, 22)}
          {word(100, 154, 9, "STREET JOURNEY")}
        </g>
      )}
      {kind === "gaiter" && (
        <g>
          <defs>
            <clipPath id="gaiter-clip">
              <path d="M60 40h80q-8 60 0 120H60q8-60 0-120z" />
            </clipPath>
          </defs>
          <path d="M60 40h80q-8 60 0 120H60q8-60 0-120z" {...common} />
          <g clipPath="url(#gaiter-clip)" fill="#131313">
            {Array.from({ length: 8 }, (_, i) => (
              <path key={i} d={`M40 ${36 + i * 18}q30-14 60-2t70-10l2 7q-40 12-72 6t-60 8z`} />
            ))}
          </g>
          <ellipse cx="100" cy="40" rx="40" ry="6" fill="rgba(0,0,0,.25)" />
        </g>
      )}
    </svg>
  );
}

function ZebraCorner() {
  return (
    <g fill="#f1efe8" opacity=".05">
      <path d="M0 150q40-20 90 10t110-6v46H0z" />
      <path d="M0 176q50-14 100 4t100-4v6q-50 14-100-2T0 186z" fill="#131313" opacity="1" />
    </g>
  );
}
