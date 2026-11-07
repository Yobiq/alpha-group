"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"
import { PapercutHeroBg } from "@/components/papercut-hero-bg"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

const companies = ["GO-TEAM", "SWORD BV", "Alphabouw"]

export function HeroSection({ onGetStarted }: { onGetStarted?: () => void }) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-noise isolate relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* ---- Paper-cut construction skyline (pure SVG/CSS, no video) ---- */}
      <div aria-hidden className="absolute inset-0 z-0 bg-background">
        <PapercutHeroBg />
        {/* Light darkening + bottom fade for text legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,oklch(0.09_0.004_270/0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-28 sm:py-32 text-center">
        {/* Eyebrow badge */}
        <div className="animate-rise mb-6 flex justify-center sm:mb-8">
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              {t.hero.badge}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="animate-rise text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          <span className="text-gradient">{t.hero.title1}</span>
          <br />
          <span className="text-gradient-accent">{t.hero.title2}</span>
        </h1>

        {/* Description */}
        <p
          className="animate-rise mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
          style={{ animationDelay: "0.16s" }}
        >
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div
          className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:mt-11 sm:flex-row sm:gap-4"
          style={{ animationDelay: "0.24s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollTo("companies")}
            className="group h-12 w-full rounded-full bg-foreground px-7 text-sm font-medium text-background shadow-lg transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl sm:w-auto"
          >
            {t.hero.explore}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => (onGetStarted ? onGetStarted() : scrollTo("about"))}
            className="glass-panel h-12 w-full rounded-full border-0 px-7 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground/10 sm:w-auto"
          >
            {t.hero.learnMore}
          </Button>
        </div>

        {/* Trust strip — the three companies */}
        <div
          className="animate-rise mt-14 sm:mt-20"
          style={{ animationDelay: "0.32s" }}
        >
          <div className="hairline mx-auto mb-5 max-w-xs" />
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70 sm:gap-x-8 sm:text-sm">
            {companies.map((name, i) => (
              <span key={name} className="flex items-center gap-x-5 sm:gap-x-8">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />}
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        aria-label="Scroll down"
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center justify-center text-muted-foreground/60 transition-colors hover:text-foreground sm:flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  )
}
