"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { getTranslations } from "@/lib/translations"
import {
  MessageCircle,
  X,
  Send,
  Building2,
  Briefcase,
  Phone,
  Users,
  Bot,
  User,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
  links?: { label: string; url: string }[]
  type?: "text" | "form" | "suggestion"
  suggestions?: string[]
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  description: string
  budget: string
  timeline: string
}

export function Chatbot() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    description: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, showForm, formStep])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        content: t.chatbot.welcomeMessage,
        isBot: true,
        timestamp: new Date(),
        type: "suggestion",
        suggestions: [
          t.chatbot.quickActions.companies,
          t.chatbot.quickActions.services,
          t.chatbot.quickActions.getQuote,
        ],
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, t.chatbot.welcomeMessage, t.chatbot.quickActions])

  useEffect(() => {
    if (isOpen && !showForm) {
      inputRef.current?.focus()
    }
  }, [isOpen, showForm])

  useEffect(() => {
    if (messages.length > 0 && !showForm) {
      const lastMessage = messages[messages.length - 1]
      if (lastMessage.isBot && lastMessage.content === t.chatbot.welcomeMessage) {
        setMessages([
          {
            id: "welcome",
            content: t.chatbot.welcomeMessage,
            isBot: true,
            timestamp: new Date(),
            type: "suggestion",
            suggestions: [
              t.chatbot.quickActions.companies,
              t.chatbot.quickActions.services,
              t.chatbot.quickActions.getQuote,
            ],
          },
        ])
      }
    }
  }, [language])

  const getResponse = (input: string): { text: string; links?: { label: string; url: string }[]; triggerForm?: boolean } => {
    const lowerInput = input.toLowerCase()

    // Check for form trigger keywords
    if (
      lowerInput.includes("quote") ||
      lowerInput.includes("get started") ||
      lowerInput.includes("contact") ||
      lowerInput.includes("inquiry") ||
      lowerInput.includes("project") ||
      lowerInput.includes("need help") ||
      lowerInput.includes("offerte") ||
      lowerInput.includes("cotización") ||
      lowerInput.includes("报价") ||
      lowerInput.includes("开始")
    ) {
      return {
        text: t.chatbot.form.startForm,
        triggerForm: true,
      }
    }

    if (
      lowerInput.includes("go-team") ||
      lowerInput.includes("go team") ||
      lowerInput.includes("staffing") ||
      lowerInput.includes("personeel") ||
      lowerInput.includes("personal") ||
      lowerInput.includes("人力") ||
      lowerInput.includes("人员")
    ) {
      return {
        text: t.chatbot.responses.goTeam,
        links: [{ label: "GO-TEAM", url: "https://v0-sword-bv-website-design.vercel.app/" }],
      }
    }
    if (
      lowerInput.includes("sword") ||
      lowerInput.includes("engineering") ||
      lowerInput.includes("technical") ||
      lowerInput.includes("technisch") ||
      lowerInput.includes("técnico") ||
      lowerInput.includes("工程") ||
      lowerInput.includes("技术")
    ) {
      return {
        text: t.chatbot.responses.sword,
        links: [{ label: "SWORD BV", url: "https://v0-sword-bv-website.vercel.app/" }],
      }
    }
    if (
      lowerInput.includes("alphabouw") ||
      lowerInput.includes("construction") ||
      lowerInput.includes("bouw") ||
      lowerInput.includes("construcción") ||
      lowerInput.includes("building") ||
      lowerInput.includes("建筑") ||
      lowerInput.includes("建设")
    ) {
      return {
        text: t.chatbot.responses.alphaBouw,
        links: [{ label: "ALPHABouw", url: "https://v0-modern-website-design-zeta-three.vercel.app/" }],
      }
    }
    if (
      lowerInput.includes("companies") ||
      lowerInput.includes("bedrijven") ||
      lowerInput.includes("empresas") ||
      lowerInput.includes("divisions") ||
      lowerInput.includes("公司")
    ) {
      return {
        text: t.chatbot.responses.companies,
        suggestions: ["GO-TEAM", "SWORD BV", "ALPHABouw"],
      }
    }
    if (
      lowerInput.includes("service") ||
      lowerInput.includes("dienst") ||
      lowerInput.includes("servicio") ||
      lowerInput.includes("what do you do") ||
      lowerInput.includes("offer") ||
      lowerInput.includes("服务")
    ) {
      return { text: t.chatbot.responses.services }
    }
    if (
      lowerInput.includes("career") ||
      lowerInput.includes("job") ||
      lowerInput.includes("work") ||
      lowerInput.includes("vacature") ||
      lowerInput.includes("empleo") ||
      lowerInput.includes("baan") ||
      lowerInput.includes("招聘") ||
      lowerInput.includes("工作") ||
      lowerInput.includes("职位")
    ) {
      return { text: t.chatbot.responses.careers }
    }

    return { text: t.chatbot.responses.default }
  }

  const handleSend = () => {
    if (!inputValue.trim() || showForm) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsTyping(true)

    setTimeout(
      () => {
        const response = getResponse(currentInput)
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: response.text,
          isBot: true,
          timestamp: new Date(),
          links: response.links,
          suggestions: response.suggestions,
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)

        if (response.triggerForm) {
          setTimeout(() => {
            setShowForm(true)
            setFormStep(0)
          }, 500)
        }
      },
      800 + Math.random() * 400,
    )
  }

  const handleQuickAction = (action: string) => {
    if (action === "getQuote") {
      const botMessage: Message = {
        id: Date.now().toString(),
        content: t.chatbot.form.startForm,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setTimeout(() => {
        setShowForm(true)
        setFormStep(0)
      }, 500)
      return
    }

    let response = ""
    let links: { label: string; url: string }[] | undefined

    switch (action) {
      case "companies":
        response = t.chatbot.responses.companies
        break
      case "services":
        response = t.chatbot.responses.services
        break
      case "contact":
        response = t.chatbot.responses.contact
        break
      case "careers":
        response = t.chatbot.responses.careers
        break
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: t.chatbot.quickActions[action as keyof typeof t.chatbot.quickActions],
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isBot: true,
        timestamp: new Date(),
        links,
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 600)
  }

  const handleSuggestion = (suggestion: string) => {
    setInputValue(suggestion)
    setTimeout(() => handleSend(), 100)
  }

  const formatMessage = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  const handleFormInput = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFormNext = () => {
    if (formStep < 7) {
      setFormStep(formStep + 1)
    } else {
      handleFormSubmit()
    }
  }

  const handleFormBack = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1)
    } else {
      setShowForm(false)
      const cancelMessage: Message = {
        id: Date.now().toString(),
        content: "Form cancelled. How else can I help you?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, cancelMessage])
    }
  }

  const handleFormSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      const successMessage: Message = {
        id: Date.now().toString(),
        content: t.chatbot.form.success,
        isBot: true,
        timestamp: new Date(),
        type: "suggestion",
        suggestions: [
          t.chatbot.quickActions.companies,
          t.chatbot.quickActions.services,
        ],
      }
      setMessages((prev) => [...prev, successMessage])
      setShowForm(false)
      setFormStep(0)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        description: "",
        budget: "",
        timeline: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formSteps = [
    { field: "name" as keyof FormData, label: t.chatbot.form.step1, type: "text", placeholder: "John Doe" },
    { field: "email" as keyof FormData, label: t.chatbot.form.step2, type: "email", placeholder: "john@example.com" },
    { field: "phone" as keyof FormData, label: t.chatbot.form.step3, type: "tel", placeholder: "+31 6 42672511" },
    {
      field: "company" as keyof FormData,
      label: t.chatbot.form.step4,
      type: "select",
      options: Object.entries(t.chatbot.form.companyOptions).map(([key, value]) => ({ key, value })),
    },
    {
      field: "service" as keyof FormData,
      label: t.chatbot.form.step5,
      type: "select",
      options: Object.entries(t.chatbot.form.serviceOptions).map(([key, value]) => ({ key, value })),
    },
    { field: "description" as keyof FormData, label: t.chatbot.form.step6, type: "textarea", placeholder: "Describe your project..." },
    {
      field: "budget" as keyof FormData,
      label: t.chatbot.form.step7,
      type: "select",
      options: Object.entries(t.chatbot.form.budgetOptions).map(([key, value]) => ({ key, value })),
    },
    {
      field: "timeline" as keyof FormData,
      label: t.chatbot.form.step8,
      type: "select",
      options: Object.entries(t.chatbot.form.timelineOptions).map(([key, value]) => ({ key, value })),
    },
  ]

  const currentStep = formSteps[formStep]
  const isStepValid = () => {
    if (!currentStep) return false
    const value = formData[currentStep.field]
    if (!value || value.trim() === "") return false
    
    // Email validation
    if (currentStep.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    }
    
    // Phone validation (basic)
    if (currentStep.type === "tel") {
      return value.length >= 8
    }
    
    return true
  }

  const quickActionIcons = {
    companies: Building2,
    services: Briefcase,
    contact: Phone,
    careers: Users,
    getQuote: Sparkles,
  }

  return (
    <>
      {/* Enhanced Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 text-background shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-foreground/30 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 transition-transform group-hover:scale-125" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
      </button>

      {/* Enhanced Chat Window */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-[calc(100vh-2rem)] sm:h-[700px] w-[calc(100vw-2rem)] sm:w-[450px] max-w-[calc(100vw-2rem)] sm:max-w-[450px] max-h-[calc(100vh-2rem)] sm:max-h-[700px] flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-background shadow-2xl transition-all duration-500 ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-8 scale-95 opacity-0"
        }`}
      >
        {/* Enhanced Header */}
        <div className="relative flex items-center justify-between bg-gradient-to-r from-foreground to-foreground/90 px-6 py-5 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-md">
              <Bot className="h-6 w-6 text-foreground" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-foreground bg-green-500 shadow-lg"></span>
            </div>
            <div>
              <h3 className="font-bold text-background text-lg">{t.chatbot.title}</h3>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <p className="text-sm text-background/70">{t.chatbot.online}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setIsOpen(false)
              setShowForm(false)
              setFormStep(0)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 text-background/80 transition-all hover:bg-background/20 hover:text-background hover:scale-110"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Enhanced Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-secondary/20 to-background/30">
          <div className="space-y-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-end gap-2.5 ${message.isBot ? "justify-start" : "justify-end"}`}>
                {message.isBot && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground shadow-lg">
                    <Bot className="h-4 w-4 text-background" />
                  </div>
                )}
                <div className="flex flex-col gap-2 max-w-[85%] sm:max-w-[75%]">
                  <div
                    className={`rounded-2xl px-4 py-3 transition-all duration-300 ${
                      message.isBot
                        ? "rounded-bl-md bg-background border border-border/50 shadow-md hover:shadow-lg hover:border-border"
                        : "rounded-br-md bg-gradient-to-r from-foreground to-foreground/90 text-background shadow-md"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm leading-relaxed">{formatMessage(message.content)}</p>
                  </div>
                  {message.links && message.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pl-1">
                      {message.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-foreground/10 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-foreground hover:text-background hover:shadow-md"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 pl-1">
                      {message.suggestions.map((suggestion, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestion(suggestion)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-foreground hover:text-background hover:shadow-md border border-border/50"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {!message.isBot && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary shadow-md">
                    <User className="h-4 w-4 text-foreground" />
                  </div>
                )}
              </div>
            ))}

            {/* Form Wizard */}
            {showForm && currentStep && (
              <div className="bg-background border border-border/50 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      Step {formStep + 1} of {formSteps.length}
                    </span>
                  </div>
                  <div className="flex-1 mx-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-foreground to-foreground/80 transition-all duration-300"
                      style={{ width: `${((formStep + 1) / formSteps.length) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground mb-3">{currentStep.label}</p>
                {currentStep.type === "text" || currentStep.type === "email" || currentStep.type === "tel" ? (
                  <Input
                    type={currentStep.type}
                    value={formData[currentStep.field]}
                    onChange={(e) => handleFormInput(currentStep.field, e.target.value)}
                    placeholder={currentStep.placeholder}
                    className="mb-3"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && isStepValid()) {
                        handleFormNext()
                      }
                    }}
                    autoFocus
                  />
                ) : currentStep.type === "textarea" ? (
                  <textarea
                    value={formData[currentStep.field]}
                    onChange={(e) => handleFormInput(currentStep.field, e.target.value)}
                    placeholder={currentStep.placeholder}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground/60 focus:border-foreground focus:bg-background outline-none transition-all resize-none mb-3"
                    autoFocus
                  />
                ) : (
                  <select
                    value={formData[currentStep.field]}
                    onChange={(e) => handleFormInput(currentStep.field, e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/30 text-foreground focus:border-foreground focus:bg-background outline-none transition-all mb-3"
                    autoFocus
                  >
                    <option value="">Select an option...</option>
                    {currentStep.options?.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleFormBack}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {formStep === 0 ? t.chatbot.form.cancel : t.chatbot.form.back}
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleFormNext}
                    disabled={!isStepValid() || isSubmitting}
                    className="flex-1 bg-gradient-to-r from-foreground to-foreground/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        {t.chatbot.form.submitting}
                      </>
                    ) : formStep === formSteps.length - 1 ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {t.chatbot.form.submit}
                      </>
                    ) : (
                      <>
                        {t.chatbot.form.next}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex items-end gap-2.5 justify-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground shadow-lg">
                  <Bot className="h-4 w-4 text-background" />
                </div>
                <div className="rounded-2xl rounded-bl-md bg-background border border-border/50 px-4 py-3 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Enhanced Quick Actions */}
        {messages.length <= 1 && !showForm && (
          <div className="border-t border-border bg-gradient-to-r from-background via-secondary/10 to-background px-3 sm:px-5 py-3 sm:py-4">
            <p className="text-xs text-muted-foreground mb-2 sm:mb-3 font-medium uppercase tracking-wide">{t.chatbot.subtitle}</p>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {(Object.keys(t.chatbot.quickActions) as Array<keyof typeof t.chatbot.quickActions>).map((action) => {
                const Icon = quickActionIcons[action]
                return (
                  <button
                    key={action}
                    onClick={() => handleQuickAction(action)}
                    className="flex items-center gap-1.5 sm:gap-2.5 rounded-xl border border-border bg-secondary/40 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-lg hover:scale-105"
                  >
                    <Icon className="h-4 w-4" />
                    {t.chatbot.quickActions[action]}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Enhanced Input */}
        {!showForm && (
          <div className="border-t border-border bg-gradient-to-b from-background to-secondary/10 p-3 sm:p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t.chatbot.placeholder}
                className="flex-1 rounded-xl border border-border/50 bg-secondary/40 px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm text-foreground placeholder-muted-foreground/60 outline-none transition-all focus:border-foreground focus:bg-background focus:ring-2 focus:ring-foreground/20"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-foreground to-foreground/90 text-background transition-all hover:scale-110 hover:shadow-lg disabled:opacity-40 disabled:hover:scale-100 shadow-md"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}
