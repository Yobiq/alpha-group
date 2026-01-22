"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, X, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"

interface FormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  service: string
  employees: string
  budget: string
  timeline: string
  description: string
}

export function GetStartedWizard({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    service: "",
    employees: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const totalSteps = 4

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        setStep(1)
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          service: "",
          employees: "",
          budget: "",
          timeline: "",
          description: "",
        })
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.companyName.trim() !== "" && formData.contactName.trim() !== ""
      case 2:
        return formData.email.trim() !== "" && formData.phone.trim() !== ""
      case 3:
        return formData.service !== "" && formData.employees !== ""
      case 4:
        return formData.budget !== "" && formData.timeline !== ""
      default:
        return false
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-background rounded-2xl sm:rounded-3xl shadow-2xl border border-border/50 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Success State */}
        {isSuccess && (
          <div className="flex items-center justify-center min-h-[400px] sm:min-h-[600px] flex-col gap-4 sm:gap-6 p-6 sm:p-8">
            <div className="animate-bounce">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center px-4">Thank You!</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center max-w-sm px-4">
              We've received your inquiry. Our team will contact you within 24 hours to discuss your project.
            </p>
          </div>
        )}

        {/* Form State */}
        {!isSuccess && (
          <>
            {/* Header */}
            <div className="relative bg-gradient-to-r from-foreground to-foreground/90 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-background">Get Started</h2>
                <p className="text-background/70 text-xs sm:text-sm mt-1">Step {step} of {totalSteps}</p>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background hover:bg-background/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-secondary">
              <div
                className="h-full bg-gradient-to-r from-foreground to-foreground/80 transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[400px] flex flex-col justify-between">
              {/* Step 1: Company & Contact Info */}
              {step === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground/60 focus:border-foreground focus:bg-background outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground/60 focus:border-foreground focus:bg-background outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Contact Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground/60 focus:border-foreground focus:bg-background outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground/60 focus:border-foreground focus:bg-background outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Service & Requirements */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">What Service Do You Need? *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground focus:border-foreground focus:bg-background outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="staffing">Staffing Solutions (GO-TEAM)</option>
                      <option value="technical">Technical Services (SWORD BV)</option>
                      <option value="construction">Construction Services (ALPHABouw)</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">How Many Employees/Workers Needed? *</label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground focus:border-foreground focus:bg-background outline-none transition-all"
                    >
                      <option value="">Select number</option>
                      <option value="1-5">1-5 people</option>
                      <option value="6-20">6-20 people</option>
                      <option value="21-50">21-50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Budget & Timeline */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground focus:border-foreground focus:bg-background outline-none transition-all"
                    >
                      <option value="">Select budget</option>
                      <option value="under-10k">Under €10,000</option>
                      <option value="10-50k">€10,000 - €50,000</option>
                      <option value="50-100k">€50,000 - €100,000</option>
                      <option value="100k+">€100,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground focus:border-foreground focus:bg-background outline-none transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediately</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your project or requirements..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground/60 focus:border-foreground focus:bg-background outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 sm:gap-4 justify-between pt-4 sm:pt-6 border-t border-border/30">
                <Button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  variant="outline"
                  disabled={step === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                {step === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="gap-2 bg-gradient-to-r from-foreground to-foreground/90"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                ) : (
                  <Button
                    onClick={() => setStep(Math.min(totalSteps, step + 1))}
                    disabled={!isStepValid()}
                    className="gap-2 bg-gradient-to-r from-foreground to-foreground/90"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
