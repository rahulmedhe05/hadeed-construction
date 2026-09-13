"use client"

import { useState } from "react"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"

const galleryVideos = [
  {
    src: "/videos/WhatsApp Video 2026-09-07 at 17.03.01.mp4",
    poster: "/videos/thumbnails/WhatsApp Video 2026-09-07 at 17.03.01.jpg",
    title: "Site Progress Walkthrough",
  },
  {
    src: "/videos/WhatsApp Video 2026-09-13 at 02.12.09.mp4",
    poster: "/videos/thumbnails/WhatsApp Video 2026-09-13 at 02.12.09.jpg",
    title: "Construction Site Update",
  },
  {
    src: "/videos/WhatsApp Video 2026-09-13 at 16.49.59.mp4",
    poster: "/videos/thumbnails/WhatsApp Video 2026-09-13 at 16.49.59.jpg",
    title: "Project Site Footage",
  },
  {
    src: "/videos/WhatsApp Video 2026-09-13 at 16.50.00.mp4",
    poster: "/videos/thumbnails/WhatsApp Video 2026-09-13 at 16.50.00.jpg",
    title: "On-Site Construction Video",
  },
]

export function VideoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const nextVideo = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryVideos.length : null))
  const prevVideo = () =>
    setLightbox((prev) => (prev !== null ? (prev - 1 + galleryVideos.length) % galleryVideos.length : null))

  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            See Us In Action
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Site Videos
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            A closer look at our project sites and ongoing construction works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryVideos.map((video, i) => (
            <button
              key={video.src}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={encodeURI(video.poster)}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-[#2563eb] fill-[#2563eb]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm">{video.title}</h3>
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
            onClick={(e) => { e.stopPropagation(); prevVideo() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextVideo() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <video
              key={galleryVideos[lightbox].src}
              src={encodeURI(galleryVideos[lightbox].src)}
              poster={encodeURI(galleryVideos[lightbox].poster)}
              className="max-w-full max-h-[78vh] rounded-lg mx-auto"
              controls
              autoPlay
              playsInline
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-semibold">{galleryVideos[lightbox].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
