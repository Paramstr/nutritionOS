import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NutritionOS",
  description: "Platform your longevity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
