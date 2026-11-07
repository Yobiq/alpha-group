"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

const companyUrls = {
  goTeam: "https://go-teamnl.nl",
  sword: "https://swordbv.nl",
  alphaBouw: "https://alphabow.vercel.app/",
}

const companyLogos = {
  goTeam: "/goteamlogo.jpeg",
  sword: "/swordbvlogo.jpeg",
  alphaBouw: "/logobouw.jpeg",
}

export function CompanyHierarchy() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null)
  const [arrowPaths, setArrowPaths] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; controlX: number; controlY: number }>>([])
  const sectionRef = useRef<HTMLElement>(null)
  const parentCardRef = useRef<HTMLDivElement>(null)
  const companyCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const svgRef = useRef<SVGSVGElement>(null)
  const { language } = useLanguage()
  const t = getTranslations(language)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Smart arrow path calculation based on actual card positions
  useEffect(() => {
    if (!isVisible || !parentCardRef.current || !svgRef.current) return

    const calculatePaths = () => {
      const parentRect = parentCardRef.current?.getBoundingClientRect()
      const svgRect = svgRef.current?.getBoundingClientRect()
      if (!parentRect || !svgRect) return

      const parentCenterX = parentRect.left + parentRect.width / 2 - svgRect.left
      const parentBottomY = parentRect.bottom - svgRect.top
      const parentY = parentBottomY - 10 // Start from bottom of parent card

      const paths = companyCardsRef.current
        .filter((card) => card !== null)
        .map((card, index) => {
          if (!card) return null
          const cardRect = card.getBoundingClientRect()
          const cardCenterX = cardRect.left + cardRect.width / 2 - svgRect.left
          const cardTopY = cardRect.top - svgRect.top

          // Calculate control point for smooth curve
          const midY = parentY + (cardTopY - parentY) / 2
          const controlX = cardCenterX
          const controlY = midY

          return {
            x1: parentCenterX,
            y1: parentY,
            x2: cardCenterX,
            y2: cardTopY,
            controlX,
            controlY,
          }
        })
        .filter((path): path is NonNullable<typeof path> => path !== null)

      setArrowPaths(paths)
    }

    // Calculate on mount and resize
    calculatePaths()
    window.addEventListener("resize", calculatePaths)
    const timeout = setTimeout(calculatePaths, 100) // Small delay for layout

    return () => {
      window.removeEventListener("resize", calculatePaths)
      clearTimeout(timeout)
    }
  }, [isVisible])

  const companies = [
    {
      id: "goTeam",
      name: "GO-TEAM",
      role: t.hierarchy.goTeam,
      logo: companyLogos.goTeam,
      color: "from-blue-500 to-cyan-500",
      url: companyUrls.goTeam,
    },
    {
      id: "sword",
      name: "SWORD BV",
      role: t.hierarchy.sword,
      logo: companyLogos.sword,
      color: "from-orange-500 to-amber-500",
      url: companyUrls.sword,
    },
    {
      id: "alphaBouw",
      name: "Alphabouw",
      role: t.hierarchy.alphaBouw,
      logo: companyLogos.alphaBouw,
      color: "from-emerald-500 to-teal-500",
      url: companyUrls.alphaBouw,
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24 px-4">
          <h2
            className={`text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t.hierarchy.title}
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t.hierarchy.description}
          </p>
        </div>

        <div className="relative perspective-1000">
          {/* Alpha Group - Parent (3D floating card) */}
          <div
            ref={parentCardRef}
            className={`flex justify-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-300 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group w-full max-w-md">
              {/* 3D shadow effect */}
              <div className="absolute inset-0 bg-foreground/10 rounded-2xl sm:rounded-3xl blur-2xl transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500" />

              <div
                className="glass-panel relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_80px_-24px_oklch(0.64_0.19_255/0.6)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="logo-chip w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center p-1.5 transform group-hover:rotate-6 transition-transform duration-500 relative">
                    <Image
                      src="/alphagroulogo.jpeg"
                      alt="Alpha Group Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Alpha Group</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{t.hierarchy.parentLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart SVG Connector - Dynamically positioned */}
          <div
            className={`relative mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ height: "200px", minHeight: "200px" }}
          >
            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full hidden md:block"
              style={{ filter: "drop-shadow(0 0 14px rgba(59, 130, 246, 0.35))", overflow: "visible" }}
            >
              <defs>
                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="glowGradientStrong" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: "#0ea5e9", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 0.9 }} />
                </linearGradient>
                <radialGradient id="pulseGradient">
                  <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }} />
                </radialGradient>
              </defs>
              
              {/* Origin node at the parent card */}
              {arrowPaths[0] && (
                <g>
                  <circle cx={arrowPaths[0].x1} cy={arrowPaths[0].y1} r="5" fill="url(#pulseGradient)" filter="url(#strongGlow)" />
                  <circle cx={arrowPaths[0].x1} cy={arrowPaths[0].y1} r="2" fill="#dbeaff" />
                </g>
              )}

              {arrowPaths.map((line, idx) => {
                const d = `M ${line.x1} ${line.y1} Q ${line.controlX} ${line.controlY} ${line.x2} ${line.y2}`
                return (
                  <g key={idx}>
                    {/* Soft glow underlay */}
                    <path
                      d={d}
                      stroke="#3b82f6"
                      strokeWidth="8"
                      fill="none"
                      opacity="0.18"
                      filter="url(#strongGlow)"
                      strokeLinecap="round"
                    />
                    {/* Main line */}
                    <path
                      d={d}
                      stroke="url(#glowGradientStrong)"
                      strokeWidth="2.25"
                      fill="none"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />

                    {/* Clean landing node where the line meets the card */}
                    <circle
                      cx={line.x2}
                      cy={line.y2}
                      r="11"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.25"
                      opacity="0.45"
                      style={{ animation: `glow-ring 2.6s ease-in-out infinite`, animationDelay: `${idx * 0.35}s` }}
                    />
                    <circle
                      cx={line.x2}
                      cy={line.y2}
                      r="5"
                      fill="url(#pulseGradient)"
                      filter="url(#strongGlow)"
                      style={{ animation: `pulse 2.6s ease-in-out infinite`, animationDelay: `${idx * 0.35}s` }}
                    />
                    <circle cx={line.x2} cy={line.y2} r="2" fill="#dbeaff" />
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Company Cards */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 overflow-x-auto sm:overflow-visible">
            {companies.map((company, index) => {
              const isHovered = hoveredCompany === company.id

              return (
                <div
                  key={company.name}
                  ref={(el) => {
                    companyCardsRef.current[index] = el
                  }}
                  className={`transition-all duration-700 min-w-[260px] sm:min-w-0 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredCompany(company.id)}
                  onMouseLeave={() => setHoveredCompany(null)}
                >
                  <Link
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative perspective-1000"
                  >
                    {/* 3D shadow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transform translate-y-2 transition-all duration-500`}
                    />

                    <div
                      className={`glass-panel relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 ${
                        isHovered ? "shadow-2xl -translate-y-1 sm:-translate-y-2 scale-[1.02] sm:scale-105 shadow-[0_20px_70px_-24px_oklch(0.64_0.19_255/0.55)]" : "shadow-lg"
                      }`}
                    >
                      {/* Logo Image */}
                      <div
                        className={`logo-chip w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 mb-3 sm:mb-4 md:mb-5 transition-all duration-500 ${
                          isHovered ? "scale-110 shadow-[0_12px_34px_-10px_oklch(0.64_0.19_255/0.6)]" : ""
                        }`}
                      >
                        <Image
                          src={company.logo}
                          alt={`${company.name} Logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>

                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 tracking-tight">
                        {company.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{company.role}</p>

                      {/* Animated indicator line */}
                      <div
                        className={`h-0.5 bg-gradient-to-r ${company.color} mt-4 sm:mt-6 rounded-full transition-all duration-500 ${
                          isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
