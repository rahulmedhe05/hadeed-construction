import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Hadeed Emirates Contracting | Construction & Industrial Projects UAE, Qatar, Jordan",
    template: "%s | Hadeed Emirates Contracting",
  },
  description:
    "Hadeed Emirates Contracting Company — 25+ years delivering industrial developments, commercial buildings, infrastructure works, logistics facilities, oil & gas construction, and more across UAE, Qatar & Jordan. 400+ projects, 1.5M+ sqm constructed.",
  keywords:
    "construction company UAE, industrial construction Abu Dhabi, contracting company Dubai, warehouse construction, infrastructure works UAE, commercial building construction, oil gas facility construction, villa construction UAE, logistics warehouse construction, pharmaceutical facility construction, free zone construction UAE, construction company Qatar, construction company Jordan, residential building construction, military defense construction, aviation airport construction, solar energy construction, ports marine construction",
  authors: [{ name: "Hadeed Emirates Contracting Company" }],
  creator: "Hadeed Emirates Contracting Company",
  publisher: "Hadeed Emirates Contracting Company",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://hadeedconstruction.com"),
  alternates: {
    canonical: "https://hadeedconstruction.com",
  },
  openGraph: {
    title: "Hadeed Emirates Contracting | Construction & Industrial Projects",
    description:
      "With 25+ years of experience and 400+ completed projects, Hadeed Emirates Contracting delivers complex construction across UAE, Qatar & Jordan.",
    url: "https://hadeedconstruction.com",
    siteName: "Hadeed Emirates Contracting",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://hadeedconstruction.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hadeed Emirates Contracting Company — Building Excellence Across the Middle East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadeed Emirates Contracting | Construction & Industrial Projects",
    description:
      "25+ years delivering industrial, commercial & infrastructure construction across UAE, Qatar & Jordan. 400+ projects completed.",
    images: ["https://hadeedconstruction.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
