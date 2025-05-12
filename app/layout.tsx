import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata = {
  title: "Ferma de Capre Mureș | Produse Bio-Lactate",
  description: "Produse bio-lactate de calitate superioară din Mureș, România. Capre crescute în munți cu aer curat.",
  keywords: "ferma de capre, produse bio-lactate, Mureș, România, lapte de capră, brânză de capră",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
