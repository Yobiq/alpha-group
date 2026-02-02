"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

export function Navigation({ onGetStarted }: { onGetStarted?: () => void } = {}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = getTranslations(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#companies", label: t.nav.companies },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[calc(100%-2rem)] sm:w-auto max-w-[95vw]`}
      >
        <div
          className={`flex items-center gap-1 px-1 sm:px-2 py-1.5 sm:py-2 rounded-full border transition-all duration-500 ${
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border-border/60 shadow-lg shadow-black/5"
              : "bg-background/60 backdrop-blur-lg border-border/40 shadow-md shadow-black/5"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 pl-1 sm:pl-2 pr-2 sm:pr-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden flex items-center justify-center relative">
              <Image
                src="/alphagroulogo.jpeg"
                alt="Alpha Group Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-foreground tracking-tight hidden sm:block">Alpha Group</span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-border/60" />

          {/* Nav Links - Updated to use smooth scroll handler */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-border/60" />

          {/* Right side */}
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <Button
              size="sm"
              className="hidden sm:flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 h-8 text-xs font-medium gap-1.5"
              onClick={() => onGetStarted?.()}
            >
              {t.nav.getStarted}
              <ArrowUpRight className="w-3 h-3" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu - Updated to use smooth scroll handler */}
      <div
        className={`fixed top-20 left-4 right-4 z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-xl shadow-black/10 p-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 text-sm text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border/60">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl h-11 text-sm font-medium gap-2" onClick={() => onGetStarted?.()}>
              {t.nav.getStarted}
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
