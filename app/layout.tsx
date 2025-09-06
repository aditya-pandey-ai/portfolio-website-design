import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Code_Pro, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-crimson-text",
})

export const metadata: Metadata = {
  title: "Aditya Pandey | AI/ML Engineer & Data Scientist",
  description:
    "Final year AI/ML student passionate about building intelligent systems. Specializing in computer vision, data engineering, and autonomous AI agents.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable} ${crimsonText.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
