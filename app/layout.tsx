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
    default: "Hadeed Transport | Equipment & Space Rentals in Abu Dhabi",
    template: "%s | Hadeed Transport",
  },
  description:
    "Hadeed specializes in heavy equipment rentals and versatile space solutions across Abu Dhabi. Construction machinery, cranes, storage, warehouses & more. Call +971 50 626 6515",
  keywords:
    "equipment rental Abu Dhabi, heavy machinery rental, crane rental UAE, construction equipment, space rental Abu Dhabi, warehouse rental, self storage Abu Dhabi, open yards, forklift rental, generator rental, water tanker rental",
  authors: [{ name: "Hadeed Transport" }],
  creator: "Hadeed Transport",
  publisher: "Hadeed Transport",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://hadeed-transport.com"),
  alternates: {
    canonical: "https://hadeed-transport.com",
  },
  openGraph: {
    title: "Hadeed Transport | Equipment & Space Rentals in Abu Dhabi",
    description:
      "From heavy machinery to secure storage, we provide practical solutions tailored to your business needs. Serving Abu Dhabi & UAE.",
    url: "https://hadeed-transport.com",
    siteName: "Hadeed Transport",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://hadeed-transport.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hadeed Transport - Equipment & Space Rentals Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadeed Transport | Equipment & Space Rentals Abu Dhabi",
    description:
      "Heavy equipment rentals & space solutions across Abu Dhabi. Construction machinery, cranes, storage & more.",
    images: ["https://hadeed-transport.com/og-image.jpg"],
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
