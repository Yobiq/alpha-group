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
        url: "/alphalogo.png",
        type: "image/png",
      },
      {
        url: "/alphalogo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/alphalogo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/alphalogo.png",
    shortcut: "/alphalogo.png",
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
