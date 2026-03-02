"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"
import { BookingForm } from "./booking-form"

const heroSlides = [
  {
    image: "/images/hero/hero-1.jpg",
    title: "Industrial & Construction Excellence",
    subtitle: "Heavy equipment fleet and skilled workforce delivering complex projects across Abu Dhabi & Dubai",
  },
  {
    image: "/images/hero/hero-2.jpg",
    title: "400+ Projects Successfully Delivered",
    subtitle: "From warehouses to logistics parks — proven turnkey execution at scale across the UAE",
  },
  {
    image: "/images/hero/hero-3.jpg",
    title: "Diverse Sector Expertise",
    subtitle: "Aviation hangars, industrial factories, marine facilities — 15+ sectors served since 2001",
  },
  {
    image: "/images/hero/hero-4.jpg",
    title: "Turnkey Construction Solutions",
    subtitle: "Design, engineering, procurement & construction of commercial and industrial buildings",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = heroSlides[current]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slider Background Images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-blue-500" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 pb-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-3">
            <div className="inline-block mb-6">
              <span className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase border border-blue-400/30 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                {SITE_CONFIG.tagline}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight min-h-[144px]">
              {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-blue-400">{slide.title.split(" ").slice(-2).join(" ")}</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed min-h-[60px]">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              <Link
                href="/about-us"
                className="blue-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Our Projects <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={SITE_CONFIG.profilePdf}
                download
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" /> Company Profile
              </a>
            </div>

            {/* Quick stats bar */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "400+", label: "Projects Completed" },
                { value: "1.5M+", label: "Sqm Constructed" },
                { value: "15+", label: "Sectors Served" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
