"use client"

import Image from "next/image"
import { Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const footerLinks = {
    companies: [
      { name: "GO-TEAM", href: "#" },
      { name: "SWORD BV", href: "#" },
      { name: "Alphabouw", href: "#" },
    ],
    resources: [
      { name: t.footer.aboutUs, href: "#" },
      { name: t.footer.careers, href: "#" },
      { name: t.footer.news, href: "#" },
      { name: t.footer.contact, href: "#" },
    ],
    legal: [
      { name: t.footer.privacy, href: "#" },
      { name: t.footer.terms, href: "#" },
      { name: t.footer.cookies, href: "#" },
    ],
  }

  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg relative">
                <Image
                  src="/alphagroulogo.jpeg"
                  alt="Alpha Group Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">Alpha Group</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xs leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-2.5 sm:gap-3">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">
              {t.footer.companiesTitle}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.companies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">{t.footer.legal}</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
