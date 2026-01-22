"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

// Extract video ID from URL: https://youtu.be/W6PN5jVIYok
const YOUTUBE_VIDEO_ID = "W6PN5jVIYok"

export function HeroSection({ onGetStarted }: { onGetStarted?: () => void }) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showVideo, setShowVideo] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const heroRef = useRef<HTMLSection>(null)
  const { language } = useLanguage()
  const t = getTranslations(language)

  useEffect(() => {
    setIsVisible(true)
    setIsHydrated(true)
    
    // Check if YouTube video is available by testing thumbnail
    const checkVideoAvailability = () => {
      const img = new Image()
      img.onload = () => {
        // Thumbnail exists, video should be available
        setVideoError(false)
      }
      img.onerror = () => {
        // Thumbnail doesn't exist, video might not be available
        setVideoError(true)
      }
      img.src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`
    }
    
    // Check after a delay to allow iframe to load first
    const timeout = setTimeout(checkVideoAvailability, 3000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 50
        const y = (e.clientY - rect.top - rect.height / 2) / 50
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background - Continuously Playing */}
      {isHydrated && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Fallback Gradient Background - Always visible as backup */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-0">
            <div className="absolute inset-0 bg-[url('/modern-city-skyline-at-night-with-blue-lights.jpg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          {/* YouTube Video Background - Overlay on top if available */}
          {!videoError && (
            <div className="absolute inset-0 z-10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?si=R6EON2Msf_qkBiSQ&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playlist=${YOUTUBE_VIDEO_ID}&start=0&playsinline=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={false}
                className="absolute top-0 left-0 w-full h-full"
                style={{ 
                  pointerEvents: 'none',
                  transform: 'scale(1.1)',
                }}
                loading="eager"
              />
            </div>
          )}
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-30" />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-24 md:pt-20">
        <div
          className="perspective-1000 hidden md:block"
          style={{
            transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            className={`preserve-3d transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/80 border border-border/50 mb-6 sm:mb-8 md:mb-10 shadow-sm">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wide uppercase">{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-balance leading-[1.1] tracking-tight px-2">
              {t.hero.title1}
              <br />
              <span className="text-muted-foreground/70">{t.hero.title2}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-pretty leading-relaxed font-light px-4">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
                onClick={() => onGetStarted?.()}
              >
                {t.hero.explore}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-secondary/50 bg-background/50 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium backdrop-blur-sm group w-full sm:w-auto"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile version without 3D effects */}
        <div className="md:hidden">
          <div
            className={`preserve-3d transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/80 border border-border/50 mb-6 sm:mb-8 md:mb-10 shadow-sm">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wide uppercase">{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-balance leading-[1.1] tracking-tight px-2">
              {t.hero.title1}
              <br />
              <span className="text-muted-foreground/70">{t.hero.title2}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-pretty leading-relaxed font-light px-4">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
                onClick={() => onGetStarted?.()}
              >
                {t.hero.explore}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-secondary/50 bg-background/50 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium backdrop-blur-sm group w-full sm:w-auto"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Video Modal - Only render after hydration */}
      {isHydrated && showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 sm:-top-12 right-0 sm:right-0 text-white hover:text-gray-300 transition-colors z-10 p-2"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?si=R6EON2Msf_qkBiSQ&autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
