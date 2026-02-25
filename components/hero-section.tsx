"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d1a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a]/90 via-[#0d0d1a]/80 to-[#1a1a2e]/90" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#c8a35a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c8a35a]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 text-center">
        <div className="inline-block mb-6">
          <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase border border-[#c8a35a]/30 px-6 py-2 rounded-full">
            {SITE_CONFIG.tagline}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto">
          From heavy machinery to secure storage,{" "}
          <span className="text-[#c8a35a]">we provide practical solutions</span>{" "}
          tailored to your business needs.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Hadeed specializes in both heavy equipment rentals and versatile space
          solutions across Abu Dhabi. Whether you&apos;re managing a major build or
          need secure self-storage, we&apos;ve got you covered.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/equipments"
            className="gold-gradient text-[#0d0d1a] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Browse Equipment <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/space-rentals"
            className="border-2 border-[#c8a35a] text-[#c8a35a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c8a35a]/10 transition-colors flex items-center gap-2"
          >
            Explore Spaces <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
