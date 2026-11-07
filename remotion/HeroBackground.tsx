import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion"

export const HERO_FPS = 30
export const HERO_DURATION = 360 // 12s seamless loop

// Dark-luxury palette (sRGB approximations of the site's oklch tokens)
const BASE = "#0a0a0c"
const BLUE = "46, 108, 255"
const CYAN = "34, 184, 214"
const VIOLET = "122, 75, 224"

type Blob = {
  color: string
  size: number // vmax %
  cx: number // base center x (%)
  cy: number // base center y (%)
  ax: number // amplitude x (%)
  ay: number // amplitude y (%)
  fx: number // frequency multiplier x
  fy: number // frequency multiplier y
  phase: number
  peak: number // peak alpha
}

const BLOBS: Blob[] = [
  { color: BLUE, size: 92, cx: 50, cy: 22, ax: 16, ay: 10, fx: 1, fy: 2, phase: 0, peak: 1 },
  { color: CYAN, size: 72, cx: 16, cy: 44, ax: 15, ay: 12, fx: 2, fy: 1, phase: 1.1, peak: 0.85 },
  { color: VIOLET, size: 80, cx: 84, cy: 70, ax: 17, ay: 11, fx: 1, fy: 2, phase: 2.3, peak: 0.85 },
  { color: BLUE, size: 60, cx: 66, cy: 48, ax: 14, ay: 14, fx: 2, fy: 1, phase: 3.6, peak: 0.6 },
]

// A few drifting glints for subtle life
const PARTICLES = Array.from({ length: 22 }, (_, i) => {
  const r = (n: number) => {
    const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453
    return x - Math.floor(x)
  }
  return {
    x: r(1) * 100,
    y: r(2) * 100,
    size: 1 + r(3) * 2.5,
    drift: 4 + r(4) * 8,
    phase: r(5) * Math.PI * 2,
    speed: 1 + Math.floor(r(6) * 2),
    baseOpacity: 0.15 + r(7) * 0.35,
  }
})

export const HeroBackground = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  // Single full turn across the loop → start state === end state (seamless)
  const t = (frame / durationInFrames) * Math.PI * 2

  return (
    <AbsoluteFill style={{ backgroundColor: BASE }}>
      {/* Aurora blobs */}
      {BLOBS.map((b, i) => {
        const x = b.cx + Math.sin(t * b.fx + b.phase) * b.ax
        const y = b.cy + Math.cos(t * b.fy + b.phase) * b.ay
        const breathe = 0.9 + 0.1 * Math.sin(t * 2 + b.phase)
        const size = b.size * breathe
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}vmax`,
              height: `${size}vmax`,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background: `radial-gradient(circle at center, rgba(${b.color}, ${b.peak}) 0%, rgba(${b.color}, ${
                b.peak * 0.35
              }) 38%, rgba(${b.color}, 0) 68%)`,
              filter: "blur(70px)",
              mixBlendMode: "screen",
            }}
          />
        )
      })}

      {/* Drifting construction grid, masked toward center */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: `0px ${(-(frame / durationInFrames) * 64).toFixed(2)}px`,
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 42%, black 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 42%, black 20%, transparent 78%)",
          opacity: 0.8,
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => {
        const dy = Math.sin(t * p.speed + p.phase) * p.drift
        const dx = Math.cos(t * p.speed + p.phase) * (p.drift * 0.5)
        const twinkle = 0.6 + 0.4 * Math.sin(t * 3 + p.phase)
        return (
          <div
            key={`p${i}`}
            style={{
              position: "absolute",
              left: `${p.x + dx}%`,
              top: `${p.y + dy}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "#dbeaff",
              opacity: p.baseOpacity * twinkle,
              filter: "blur(0.3px)",
              boxShadow: "0 0 6px rgba(120,170,255,0.8)",
            }}
          />
        )
      })}

      {/* Diagonal light sweep for obvious, premium motion */}
      <div
        style={{
          position: "absolute",
          inset: "-30%",
          background:
            "linear-gradient(115deg, transparent 38%, rgba(120,170,255,0.10) 50%, transparent 62%)",
          transform: `translateX(${(Math.sin(t) * 18).toFixed(2)}%)`,
        }}
      />

      {/* Vignette for depth + text contrast (lighter so motion reads clearly) */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,12,0) 46%, rgba(10,10,12,0.5) 100%)",
        }}
      />
    </AbsoluteFill>
  )
}
