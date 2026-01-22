"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CompanyHierarchy } from "@/components/company-hierarchy"
import { CompaniesShowcase } from "@/components/companies-showcase"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { GetStartedWizard } from "@/components/get-started-wizard"

export default function Home() {
  const [showWizard, setShowWizard] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation onGetStarted={() => setShowWizard(true)} />
      <HeroSection onGetStarted={() => setShowWizard(true)} />
      <CompanyHierarchy />
      <CompaniesShowcase />
      <CTASection onGetStarted={() => setShowWizard(true)} />
      <Footer />
      <Chatbot />
      <GetStartedWizard isOpen={showWizard} onClose={() => setShowWizard(false)} />
    </main>
  )
}
