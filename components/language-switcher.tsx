"use client"

import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"
import { Globe, Check } from "lucide-react"
import { useState } from "react"

const languages: { code: Language; label: string; short: string; flag: string }[] = [
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "nl", label: "Nederlands", short: "NL", flag: "🇳🇱" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
  { code: "zh", label: "中文", short: "中", flag: "🇨🇳" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find((l) => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/30 hover:bg-secondary/60 transition-all duration-300 border border-transparent hover:border-border"
      >
        <Globe className="w-4 h-4 text-foreground/70" />
        <span className="text-sm font-medium text-foreground">
          {currentLang?.flag} {currentLang?.short}
        </span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-3 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl z-50 overflow-hidden min-w-[160px] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 ${
                    language === lang.code
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.label}</span>
                  </div>
                  {language === lang.code && <Check className="w-4 h-4 text-foreground" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
