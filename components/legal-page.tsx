"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { getLegalDoc, type DocKey } from "@/lib/legal-content"

const backLabels: Record<string, string> = {
  en: "Back to home",
  nl: "Terug naar home",
  es: "Volver al inicio",
  zh: "返回首页",
}

export function LegalPage({ doc, company }: { doc: DocKey; company: string }) {
  const { language } = useLanguage()
  const t = getLegalDoc(doc, language)
  const back = backLabels[language] ?? backLabels.nl

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Header */}
      <header className="pt-28 sm:pt-32 pb-8 sm:pb-10 border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {back}
          </Link>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-3">{company}</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {t.updatedLabel}: {t.updated}
          </p>
        </div>
      </header>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {t.intro && (
          <div className="space-y-4 mb-10">
            {t.intro.map((block, i) =>
              block.type === "p" ? (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              ) : (
                <ul key={i} className="space-y-2 pl-5 list-disc marker:text-muted-foreground/60">
                  {block.items.map((item, j) => (
                    <li key={j} className="text-base text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            )}
          </div>
        )}

        <div className="space-y-10">
          {t.sections.map((section, i) => (
            <section key={i} className="scroll-mt-28">
              {section.heading && (
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 tracking-tight">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.blocks.map((block, j) =>
                  block.type === "p" ? (
                    <p key={j} className="text-base text-muted-foreground leading-relaxed">
                      {block.text}
                    </p>
                  ) : (
                    <ul key={j} className="space-y-2 pl-5 list-disc marker:text-muted-foreground/60">
                      {block.items.map((item, k) => (
                        <li key={k} className="text-base text-muted-foreground leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  )
}
