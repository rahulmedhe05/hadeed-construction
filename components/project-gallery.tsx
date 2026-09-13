"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const projectGallery = [
  { src: "/images/projects/ppt-project-01.webp", title: "ICT Logistics Park — Mussafah", category: "Logistics" },
  { src: "/images/projects/ppt-project-05.webp", title: "DEWA Solar Innovation Centre", category: "Renewable Energy" },
  { src: "/images/projects/ppt-project-08.webp", title: "Al-Taaqa Warehouse — Jebel Ali Airport", category: "Logistics" },
  { src: "/images/projects/ppt-project-13.webp", title: "ADCAN Pharmaceutical Factory", category: "Pharmaceutical" },
  { src: "/images/projects/ppt-project-18.webp", title: "Aircraft Hangar — Internal View", category: "Aviation" },
  { src: "/images/projects/ppt-project-22.webp", title: "Al Ain Cement Factory Services", category: "Building Materials" },
  { src: "/images/projects/ppt-project-25.webp", title: "Kimera Warehouses — KIZAD", category: "Logistics" },
  { src: "/images/projects/ppt-project-29.webp", title: "Schmidlin Aluminium Factory", category: "Metal Industries" },
  { src: "/images/projects/ppt-project-32.webp", title: "ADSB Vessel Outfit Workshop", category: "Marine & Ports" },
  { src: "/images/projects/ppt-project-35.webp", title: "CMW Communication Tower — Ghagha", category: "Military" },
  { src: "/images/projects/ppt-project-37.webp", title: "Tawazun Residential Complex", category: "Residential" },
  { src: "/images/projects/ppt-project-43.webp", title: "Madinat Zayed Primary Substation", category: "Energy" },
]

export function ProjectGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const nextImage = () => setLightbox((prev) => prev !== null ? (prev + 1) % projectGallery.length : null)
  const prevImage = () => setLightbox((prev) => prev !== null ? (prev - 1 + projectGallery.length) % projectGallery.length : null)

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Project Gallery
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            A selection of our completed projects across diverse sectors — from industrial complexes to infrastructure works.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projectGallery.map((project, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-white font-semibold text-sm mt-1">{project.title}</h3>
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
          <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={projectGallery[lightbox].src}
              alt={projectGallery[lightbox].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-blue-400 text-sm font-semibold">{projectGallery[lightbox].category}</span>
              <h3 className="text-white text-lg font-semibold mt-1">{projectGallery[lightbox].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
