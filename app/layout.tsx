import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alpha Group | Next-Level Construction Platform",
  description:
    "Alpha Group unites GO-TEAM, SWORD BV, and ALPHABouw - three pioneering construction and staffing companies delivering excellence across Europe.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/alphagroulogo.jpeg",
        type: "image/png",
      },
      {
        url: "/alphagroulogo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/alphagroulogo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/alphagroulogo.jpeg",
    shortcut: "/alphagroulogo.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
