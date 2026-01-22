"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Wrench, HardHat, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

const companyImages = {
  goTeam: "/diverse-construction-workers-team-meeting-on-job-s.jpg",
  sword: "/engineers-reviewing-technical-blueprints-and-struc.jpg",
  alphaBouw: "/modern-residential-building-construction-project-w.jpg",
}

const companyUrls = {
  goTeam: "https://v0-sword-bv-website-design.vercel.app/",
  sword: "https://v0-sword-bv-website.vercel.app/",
  alphaBouw: "https://v0-modern-website-design-zeta-three.vercel.app/",
}

export function CompaniesShowcase() {
  const [activeCompany, setActiveCompany] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const t = getTranslations(language)

  const companies = [
    {
      id: "goTeam",
      name: t.companies.goTeam.name,
      tagline: t.companies.goTeam.tagline,
      description: t.companies.goTeam.description,
      features: t.companies.goTeam.features,
      image: companyImages.goTeam,
      icon: Users,
      color: "bg-blue-500",
      colorLight: "bg-blue-500/10",
      url: companyUrls.goTeam,
    },
    {
      id: "sword",
      name: t.companies.sword.name,
      tagline: t.companies.sword.tagline,
      description: t.companies.sword.description,
      features: t.companies.sword.features,
      image: companyImages.sword,
      icon: Wrench,
      color: "bg-amber-500",
      colorLight: "bg-amber-500/10",
      url: companyUrls.sword,
    },
    {
      id: "alphaBouw",
      name: t.companies.alphaBouw.name,
      tagline: t.companies.alphaBouw.tagline,
      description: t.companies.alphaBouw.description,
      features: t.companies.alphaBouw.features,
      image: companyImages.alphaBouw,
      icon: HardHat,
      color: "bg-emerald-500",
      colorLight: "bg-emerald-500/10",
      url: companyUrls.alphaBouw,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCompanyChange = (index: number) => {
    if (isAnimating || index === activeCompany) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveCompany(index)
      setIsAnimating(false)
    }, 300)
  }

  const nextCompany = () => handleCompanyChange((activeCompany + 1) % companies.length)
  const prevCompany = () => handleCompanyChange((activeCompany - 1 + companies.length) % companies.length)

  return (
    <section ref={sectionRef} id="companies" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t.companies.title}
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t.companies.description}
          </p>
        </div>

        <div
          className={`flex justify-center gap-2 mb-8 sm:mb-12 transition-all duration-1000 delay-300 overflow-x-auto pb-2 px-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {companies.map((company, index) => {
            const Icon = company.icon
            const isActive = activeCompany === index
            return (
              <button
                key={company.id}
                onClick={() => handleCompanyChange(index)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{company.name}</span>
              </button>
            )
          })}
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevCompany}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-secondary transition-all duration-300 hidden md:flex"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextCompany}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-secondary transition-all duration-300 hidden md:flex"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]">
            {companies.map((company, index) => {
              const isActive = activeCompany === index

              return (
                <div
                  key={company.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {/* Lottie Animation */}
                  <Link
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group order-2 lg:order-1"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-background/50 backdrop-blur-sm">
                      <div className="w-full h-[400px] flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/8e585d49-3a7c-4010-bd88-684bedc1a1e1/sotymkQGYT.lottie"
                          loop
                          autoplay
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Company badge on animation */}
                      <div className="absolute bottom-5 left-5 z-10">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                          <div className={`w-8 h-8 rounded-full ${company.color} flex items-center justify-center`}>
                            <company.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white font-medium text-sm">{company.name}</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-2 sm:px-0">
                    <div>
                      <div
                        className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${company.colorLight} mb-3 sm:mb-4`}
                      >
                        <company.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${company.color.replace("bg-", "text-")}`} />
                        <span className={`text-[10px] sm:text-xs font-medium ${company.color.replace("bg-", "text-")}`}>
                          {company.tagline}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">{company.name}</h3>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-light">{company.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                      {company.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 sm:gap-2.5">
                          <div
                            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${company.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={company.url} target="_blank" rel="noopener noreferrer" className="block mt-3 sm:mt-4">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 sm:px-7 py-4 sm:py-5 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto">
                        {t.companies.viewProfile}
                        <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-10">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCompanyChange(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeCompany === index ? "w-8 h-2 bg-foreground" : "w-2 h-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
