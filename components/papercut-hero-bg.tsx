// Paper-cut style hero background: layered construction skyline (buildings +
// tower cranes) cut from "paper", with depth shadows and gentle parallax.
// Pure SVG/CSS — no video, no external deps, always renders.

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>

// Round so server-rendered and client-rendered strings match exactly (no
// floating-point hydration mismatch).
const round = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d

const stars = Array.from({ length: 26 }, (_, i) => {
  const r = (n: number) => {
    const x = Math.sin(i * 23.17 + n * 61.3) * 43758.5
    return x - Math.floor(x)
  }
  return {
    x: round(60 + r(1) * 1320),
    y: round(40 + r(2) * 340),
    s: round(0.8 + r(3) * 1.8),
    dur: round(3 + r(4) * 4),
    delay: round(r(5) * 4),
  }
})

// A tower crane drawn from simple paper shapes.
function Crane({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${(flip ? -scale : scale).toString()} ${scale})`}>
      {/* Mast */}
      <rect x={-6} y={-220} width={12} height={220} fill="#2a4a86" />
      <rect x={-6} y={-220} width={12} height={220} fill="url(#pcEdge)" opacity={0.25} />
      {/* Cab */}
      <rect x={-16} y={-236} width={32} height={20} rx={3} fill="#32589c" />
      {/* Jib + counter-jib (sways slightly) */}
      <g className="pc-sway" style={{ ["--pc-dur" as string]: "8s", ["--pc-swA" as string]: "-1.6deg", ["--pc-swB" as string]: "1.6deg" }}>
        <polygon points="-120,-230 150,-234 150,-224 -120,-222" fill="#3b6ef5" opacity={0.92} />
        <polygon points="-120,-230 -120,-222 -70,-222 -70,-230" fill="#27457d" />
        {/* counterweight */}
        <rect x={-126} y={-232} width={18} height={22} rx={2} fill="#1f3a6b" />
        {/* hook line + hook (bobs) */}
        <g className="pc-bob" style={{ ["--pc-dur" as string]: "6.5s", ["--pc-bob" as string]: "10px" }}>
          <line x1={92} y1={-224} x2={92} y2={-150} stroke="#5b8cff" strokeWidth={2} />
          <path d="M88,-150 h8 l-4,8 z" fill="#8fb4ff" />
        </g>
      </g>
      {/* tip light */}
      <circle cx={150} cy={-229} r={3} fill="#8fb4ff" className="pc-twinkle" style={{ ["--pc-dur" as string]: "2.4s" } as CSSVars} />
    </g>
  )
}

export function PapercutHeroBg() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pcSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1a3c" />
          <stop offset="55%" stopColor="#0b1026" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="pcEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8fb4ff" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#8fb4ff" stopOpacity={0} />
        </linearGradient>
        <radialGradient id="pcGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b6ef5" stopOpacity={0.55} />
          <stop offset="70%" stopColor="#3b6ef5" stopOpacity={0.08} />
          <stop offset="100%" stopColor="#3b6ef5" stopOpacity={0} />
        </radialGradient>
        {/* Paper depth: each layer casts a soft shadow upward onto the one behind */}
        <filter id="pcShadow" x="-20%" y="-40%" width="140%" height="180%">
          <feDropShadow dx="0" dy="-8" stdDeviation="10" floodColor="#05060c" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="900" fill="url(#pcSky)" />

      {/* Moon / ambient glow */}
      <circle cx="1070" cy="210" r="360" fill="url(#pcGlow)" />
      <circle cx="1070" cy="210" r="70" fill="#12204a" />
      <circle cx="1070" cy="210" r="70" fill="url(#pcEdge)" opacity={0.3} />

      {/* Stars */}
      <g>
        {stars.map((st, i) => (
          <circle
            key={i}
            cx={st.x}
            cy={st.y}
            r={st.s}
            fill="#cfe0ff"
            className="pc-twinkle"
            style={{ ["--pc-dur" as string]: `${st.dur}s`, animationDelay: `${st.delay}s` } as CSSVars}
          />
        ))}
      </g>

      {/* Layer 1 — far skyline (lightest, slowest drift) */}
      <g
        className="pc-drift"
        style={{ ["--pc-dur" as string]: "40s", ["--pc-amp" as string]: "-1.4%" } as CSSVars}
        filter="url(#pcShadow)"
      >
        <path
          fill="#16284d"
          d="M0,640 h70 v-60 h50 v60 h60 v-110 h44 v110 h90 v-70 h54 v70 h120 v-150 h40 v150 h110 v-80 h60 v80 h150 v-120 h46 v120 h120 v-60 h70 v60 h160 v-90 h60 v90 h120 V900 H0 Z"
        />
      </g>

      {/* Layer 2 — mid skyline + left crane */}
      <g
        className="pc-drift"
        style={{ ["--pc-dur" as string]: "30s", ["--pc-amp" as string]: "1.8%" } as CSSVars}
        filter="url(#pcShadow)"
      >
        <path
          fill="#1d386c"
          d="M0,720 h120 v-120 h80 v120 h90 v-180 h70 v180 h120 v-90 h70 v90 h140 v-150 h80 v150 h150 v-110 h80 v110 h150 v-160 h80 v160 h150 V900 H0 Z"
        />
        {/* top highlight strip */}
        <path fill="url(#pcEdge)" opacity={0.18} d="M0,720 h120 v-120 h80 v120 h90 v-180 h70 v180 h120 v-90 h70 v90 h140 v-150 h80 v150 h150 v-110 h80 v110 h150 v-160 h80 v160 h150 v6 H0 Z" />
        <Crane x={300} y={720} scale={1} />
      </g>

      {/* Layer 3 — foreground (darkest) + right crane + scaffolding */}
      <g
        className="pc-drift"
        style={{ ["--pc-dur" as string]: "22s", ["--pc-amp" as string]: "-2.4%" } as CSSVars}
        filter="url(#pcShadow)"
      >
        <path
          fill="#0f1d38"
          d="M0,820 h160 v-120 h120 v120 h120 v-90 h110 v90 h150 v-150 h120 v150 h170 v-100 h120 v100 h300 V900 H0 Z"
        />
        <Crane x={1080} y={820} scale={1.25} flip />
        {/* lit windows */}
        {[
          [220, 740],
          [250, 740],
          [220, 770],
          [690, 710],
          [720, 710],
          [690, 740],
          [1240, 760],
          [1270, 760],
        ].map(([wx, wy], i) => (
          <rect
            key={i}
            x={wx}
            y={wy}
            width={10}
            height={14}
            fill="#6ea8ff"
            className="pc-twinkle"
            style={{ ["--pc-dur" as string]: `${3 + (i % 4)}s`, animationDelay: `${i * 0.4}s` } as CSSVars}
          />
        ))}
      </g>

      {/* Vignette + base fade for text contrast */}
      <rect width="1440" height="900" fill="url(#pcVignette)" />
      <defs>
        <radialGradient id="pcVignette" cx="50%" cy="42%" r="75%">
          <stop offset="45%" stopColor="#0a0a0c" stopOpacity={0} />
          <stop offset="100%" stopColor="#0a0a0c" stopOpacity={0.5} />
        </radialGradient>
      </defs>
    </svg>
  )
}
