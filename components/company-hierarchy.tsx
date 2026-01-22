"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Wrench, HardHat } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

const companyUrls = {
  goTeam: "https://v0-sword-bv-website-design.vercel.app/",
  sword: "https://v0-sword-bv-website.vercel.app/",
  alphaBouw: "https://v0-modern-website-design-zeta-three.vercel.app/",
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
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      url: companyUrls.goTeam,
    },
    {
      id: "sword",
      name: "SWORD BV",
      role: t.hierarchy.sword,
      icon: Wrench,
      color: "from-orange-500 to-amber-500",
      url: companyUrls.sword,
    },
    {
      id: "alphaBouw",
      name: "ALPHABouw",
      role: t.hierarchy.alphaBouw,
      icon: HardHat,
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
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight transition-all duration-1000 ${
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
                className="relative bg-background border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500 relative bg-background">
                    <Image
                      src="/alphalogo.png"
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
              style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))", overflow: "visible" }}
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
              
              {arrowPaths.map((line, idx) => {
                // Calculate arrow angle at end point
                const dx = line.x2 - line.controlX
                const dy = line.y2 - line.controlY
                const angle = Math.atan2(dy, dx) * (180 / Math.PI)

                return (
                <g key={idx}>
                  {/* Glow background path */}
                  <path
                      d={`M ${line.x1} ${line.y1} Q ${line.controlX} ${line.controlY} ${line.x2} ${line.y2}`}
                    stroke="#3b82f6"
                      strokeWidth="12"
                    fill="none"
                      opacity="0.4"
                    filter="url(#strongGlow)"
                    strokeLinecap="round"
                  />
                  {/* Main glowing line */}
                  <path
                      d={`M ${line.x1} ${line.y1} Q ${line.controlX} ${line.controlY} ${line.x2} ${line.y2}`}
                    stroke="url(#glowGradientStrong)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                      className="transition-all duration-500"
                  />
                  
                    {/* Animated pulse point at control */}
                  <circle 
                      cx={line.controlX}
                      cy={line.controlY}
                      r="8"
                      fill="url(#pulseGradient)"
                      opacity="0.8"
                    filter="url(#strongGlow)"
                    style={{
                        animation: `pulse 2s ease-in-out infinite`,
                        animationDelay: `${idx * 0.3}s`,
                    }}
                  />
                  
                  {/* Outer glow ring */}
                  <circle 
                      cx={line.controlX}
                      cy={line.controlY}
                      r="12"
                    fill="none"
                    stroke="#3b82f6"
                      strokeWidth="1.5"
                      opacity="0.6"
                    style={{
                        animation: `pulse-ring 2s ease-in-out infinite`,
                        animationDelay: `${idx * 0.3}s`,
                      }}
                    />

                    {/* Smart arrow pointing directly at card */}
                    <g transform={`translate(${line.x2}, ${line.y2}) rotate(${angle})`}>
                      <polygon
                        points="0,0 -12,18 12,18"
                        fill="#0ea5e9"
                        filter="url(#strongGlow)"
                        opacity="1"
                        className="transition-all duration-300"
                      />
                      <polygon points="0,0 -7,11 7,11" fill="#06b6d4" opacity="0.9" />
                    </g>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Company Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {companies.map((company, index) => {
              const Icon = company.icon
              const isHovered = hoveredCompany === company.id

              return (
                <div
                  key={company.name}
                  ref={(el) => {
                    companyCardsRef.current[index] = el
                  }}
                  className={`transition-all duration-700 ${
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
                      className={`relative bg-background border border-border/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                        isHovered ? "shadow-2xl -translate-y-2 border-accent/30 scale-105" : "shadow-lg"
                      }`}
                      style={{
                        transform: isHovered
                          ? "perspective(1000px) rotateX(-2deg) scale(1.02)"
                          : "perspective(1000px) rotateX(0deg)",
                        transformOrigin: "top",
                      }}
                    >
                      {/* Icon with gradient background on hover */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500 ${
                          isHovered ? `bg-gradient-to-br ${company.color} shadow-lg scale-110` : "bg-secondary"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-500 ${
                            isHovered ? "text-white" : "text-muted-foreground"
                          }`}
                        />
                      </div>

                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 tracking-tight">
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
