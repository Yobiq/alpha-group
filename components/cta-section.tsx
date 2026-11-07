"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

export function CTASection({ onGetStarted }: { onGetStarted?: () => void }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const t = getTranslations(language)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div aria-hidden className="absolute inset-0">
        <div className="animate-aurora-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[700px] h-[420px] sm:h-[700px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.64_0.19_255/0.22),transparent_68%)] blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="glass-panel inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-10">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs font-medium text-muted-foreground tracking-[0.18em] uppercase">{t.cta.badge}</span>
          </div>

          <h2 className="text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 tracking-tight text-balance px-2">
            {t.cta.title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
            {t.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              onClick={() => onGetStarted?.()}
            >
              {t.cta.contact}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-panel border-0 hover:bg-foreground/10 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium text-foreground w-full sm:w-auto"
            >
              {t.cta.opportunities}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
