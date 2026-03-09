"use client"

import { useState } from "react"
import { Award, ShieldCheck, FileCheck, X, ChevronLeft, ChevronRight } from "lucide-react"

const awards = [
  { src: "/images/awards/award-1.webp", title: "Paris 2007 Gold Award" },
  { src: "/images/awards/award-2.webp", title: "TRIDEX 2000 General Exhibition Corporation" },
  { src: "/images/awards/award-3.webp", title: "19th International Construction Award — Madrid, Spain 2007" },
  { src: "/images/awards/award-4.webp", title: "Zamil Steel Certificate 2007" },
  { src: "/images/awards/award-5.webp", title: "Zamil Steel Certificate 2008" },
]

const certificates = [
  // New certificates (2025)
  { src: "/images/certificates/cert-new-2.webp", title: "ISO 14001:2015 — Environmental Management System" },
  { src: "/images/certificates/cert-new-3.webp", title: "ISO 9001:2015 — Quality Management System" },
]

const licenses = [
  { src: "/images/certificates/cert-new-1.webp", title: "HEC Abu Dhabi Trade Licence 2027" },
]

const allItems = [...awards, ...certificates, ...licenses]

export function CertificatesSection() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"awards" | "certificates" | "licenses">("awards")

  const currentItems =
    activeTab === "awards" ? awards : activeTab === "certificates" ? certificates : licenses

  const openLightbox = (index: number) => {
    // Calculate global index for lightbox navigation
    const offset =
      activeTab === "awards" ? 0 : activeTab === "certificates" ? awards.length : awards.length + certificates.length
    setLightbox(offset + index)
  }

  const closeLightbox = () => setLightbox(null)
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % allItems.length : null))
  const prevImage = () =>
    setLightbox((prev) => (prev !== null ? (prev - 1 + allItems.length) % allItems.length : null))

  const tabs = [
    { key: "awards" as const, label: "Awards", icon: Award, count: awards.length },
    { key: "certificates" as const, label: "Certificates", icon: ShieldCheck, count: certificates.length },
    { key: "licenses" as const, label: "Licenses", icon: FileCheck, count: licenses.length },
  ]

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            Credentials & Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Certificates & Awards
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Our commitment to quality, safety, and excellence is recognized through international certifications, industry awards, and government approvals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563eb]/40 hover:text-[#2563eb]"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              <span
                className={`ml-1 w-6 h-6 rounded-full text-xs flex items-center justify-center ${
                  activeTab === tab.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`grid gap-6 ${
          currentItems.length <= 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        }`}>
          {currentItems.map((item, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2563eb]/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-[#2563eb] transition-colors">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={allItems[lightbox].src}
              alt={allItems[lightbox].title}
              className="max-w-full max-h-[78vh] object-contain rounded-lg mx-auto"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-semibold">{allItems[lightbox].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
