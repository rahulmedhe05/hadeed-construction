"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

type ProjectCategory = "all" | "major" | "industrial" | "energy" | "logistics" | "aviation" | "marine" | "military" | "other"

interface Project {
  src: string
  title: string
  location: string
  category: ProjectCategory
  sector: string
}

const projects: Project[] = [
  // Major Projects
  { src: "/images/projects/ppt-project-01.webp", title: "ICT Logistics Park", location: "Mussafah, Abu Dhabi", category: "logistics", sector: "Logistics" },
  { src: "/images/projects/ppt-project-02.webp", title: "ICT Logistics Park — Phase 2", location: "Mussafah, Abu Dhabi", category: "logistics", sector: "Logistics" },
  { src: "/images/projects/ppt-project-03.webp", title: "Abu Dhabi Business Hub — Phase 11", location: "Mussafah, Abu Dhabi", category: "logistics", sector: "Logistics" },
  { src: "/images/projects/ppt-project-04.webp", title: "Business Hub Offices & Warehouse", location: "Mussafah, Abu Dhabi", category: "logistics", sector: "Logistics" },

  // Renewable Energy
  { src: "/images/projects/ppt-project-05.webp", title: "DEWA Solar Innovation Centre", location: "Dubai, U.A.E.", category: "energy", sector: "Renewable Energy" },
  { src: "/images/projects/ppt-project-06.webp", title: "DEWA Solar Innovation Centre — Interior", location: "Dubai, U.A.E.", category: "energy", sector: "Renewable Energy" },
  { src: "/images/projects/ppt-project-07.webp", title: "DEWA Solar Panel Installation", location: "Dubai, U.A.E.", category: "energy", sector: "Renewable Energy" },

  // Al-Taaqa Warehouse
  { src: "/images/projects/ppt-project-08.webp", title: "Al-Taaqa Alternative Solutions — Jebel Ali Airport", location: "Dubai, U.A.E.", category: "logistics", sector: "Logistics" },
  { src: "/images/projects/ppt-project-09.webp", title: "Al-Taaqa Warehouse Construction", location: "Jebel Ali, Dubai", category: "logistics", sector: "Logistics" },
  { src: "/images/projects/ppt-project-10.webp", title: "Al-Taaqa Office Buildings", location: "Jebel Ali, Dubai", category: "logistics", sector: "Logistics" },

  // Industrial Cable
  { src: "/images/projects/ppt-project-12.webp", title: "Industrial Cable Factory", location: "Abu Dhabi, U.A.E.", category: "industrial", sector: "Industrial" },

  // Pharmaceutical
  { src: "/images/projects/ppt-project-13.webp", title: "ADCAN Pharmaceutical Factory", location: "ICAD II, Abu Dhabi", category: "industrial", sector: "Pharmaceutical" },
  { src: "/images/projects/ppt-project-14.webp", title: "ADCAN Pharmaceutical — Interior", location: "ICAD II, Abu Dhabi", category: "industrial", sector: "Pharmaceutical" },
  { src: "/images/projects/ppt-project-15.webp", title: "ADCAN Pharmaceutical — Lab Facilities", location: "ICAD II, Abu Dhabi", category: "industrial", sector: "Pharmaceutical" },
  { src: "/images/projects/ppt-project-16.webp", title: "ADCAN Pharmaceutical — Production Line", location: "ICAD II, Abu Dhabi", category: "industrial", sector: "Pharmaceutical" },

  // Aviation
  { src: "/images/projects/ppt-project-17.webp", title: "Aircraft Hangar — Front View", location: "Abu Dhabi, U.A.E.", category: "aviation", sector: "Aviation" },
  { src: "/images/projects/ppt-project-18.webp", title: "Aircraft Hangar — Internal View", location: "Abu Dhabi, U.A.E.", category: "aviation", sector: "Aviation" },
  { src: "/images/projects/ppt-project-20.webp", title: "Aircraft Hangar — Panoramic View", location: "Abu Dhabi, U.A.E.", category: "aviation", sector: "Aviation" },
  { src: "/images/projects/ppt-project-21.webp", title: "CMW Hangar — 170m Clear Span", location: "Abu Dhabi Airport", category: "aviation", sector: "Aviation" },

  // Building Materials
  { src: "/images/projects/ppt-project-22.webp", title: "Al Ain Cement Factory Services Buildings", location: "Al Ain, Abu Dhabi", category: "industrial", sector: "Building Materials" },
  { src: "/images/projects/ppt-project-23.webp", title: "Polymer Additive Plant", location: "KIZAD, Abu Dhabi", category: "industrial", sector: "Building Materials" },
  { src: "/images/projects/ppt-project-24.webp", title: "Extramix Precast Concrete Plant", location: "Mussafah, Abu Dhabi", category: "industrial", sector: "Building Materials" },

  // Logistics - Kimera
  { src: "/images/projects/ppt-project-25.webp", title: "Kimera Warehouses", location: "KIZAD, Abu Dhabi", category: "logistics", sector: "Logistics" },
  { src: "/images/projects/ppt-project-26.webp", title: "Warehouse for Al Masa", location: "Jebel Ali, Dubai", category: "logistics", sector: "Logistics" },

  // Automobile
  { src: "/images/projects/ppt-project-27.webp", title: "Al Masaood New Workshop", location: "Mussafah, Abu Dhabi", category: "industrial", sector: "Automobile" },
  { src: "/images/projects/ppt-project-28.webp", title: "Al Masaood Workshop Interior", location: "Mussafah, Abu Dhabi", category: "industrial", sector: "Automobile" },

  // Metal Industries
  { src: "/images/projects/ppt-project-29.webp", title: "Schmidlin Aluminium Factory", location: "Mussafah, Abu Dhabi", category: "industrial", sector: "Metal Industries" },

  // Oilfield
  { src: "/images/projects/ppt-project-30.webp", title: "Al Ghaith Oilfield Offices & Workshop", location: "Mussafah, Abu Dhabi", category: "industrial", sector: "Oil & Gas" },

  // Paper & Printing
  { src: "/images/projects/ppt-project-31.webp", title: "West Coast Papers & Plastic Factory", location: "Khalifa A, Abu Dhabi", category: "industrial", sector: "Paper & Printing" },

  // Marine & Ports
  { src: "/images/projects/ppt-project-32.webp", title: "Abu Dhabi Ship Building — Vessel Outfit Workshop", location: "Mussafah, Abu Dhabi", category: "marine", sector: "Marine & Ports" },
  { src: "/images/projects/ppt-project-33.webp", title: "Boat Shed Factory", location: "Mussafah, Abu Dhabi", category: "marine", sector: "Marine & Ports" },
  { src: "/images/projects/ppt-project-34.webp", title: "Leaders Marine Factory", location: "ICAD II, Abu Dhabi", category: "marine", sector: "Marine & Ports" },

  // Military
  { src: "/images/projects/ppt-project-35.webp", title: "CMW Communication Tower — Ghagha Project", location: "Abu Dhabi, U.A.E.", category: "military", sector: "Military & Police" },
  { src: "/images/projects/ppt-project-36.webp", title: "Military Communications Facility", location: "Abu Dhabi, U.A.E.", category: "military", sector: "Military & Police" },

  // Residential
  { src: "/images/projects/ppt-project-37.webp", title: "Tawazun Residential Complex", location: "Suweihan, Abu Dhabi", category: "other", sector: "Residential" },

  // Food & Beverages
  { src: "/images/projects/ppt-project-38.webp", title: "Packing House for Vegetables", location: "Al Maha, Abu Dhabi", category: "other", sector: "Food & Beverages" },

  // Water Stations
  { src: "/images/projects/ppt-project-39.webp", title: "Main Pump Station", location: "Mussafah, Abu Dhabi", category: "other", sector: "Water Stations" },

  // Education
  { src: "/images/projects/ppt-project-40.webp", title: "American Community School", location: "Abu Dhabi, U.A.E.", category: "other", sector: "Education" },

  // Malls
  { src: "/images/projects/ppt-project-41.webp", title: "Sheikh Hamdan Warehouse — M34", location: "Mussafah, Abu Dhabi", category: "logistics", sector: "Malls & Showrooms" },

  // Energy
  { src: "/images/projects/ppt-project-42.webp", title: "Shahama 33/11KV Substation", location: "Shahama, Abu Dhabi", category: "energy", sector: "Energy" },
  { src: "/images/projects/ppt-project-43.webp", title: "Madinat Zayed Primary Substation", location: "Abu Dhabi, U.A.E.", category: "energy", sector: "Energy" },

  // Qatar
  { src: "/images/projects/ppt-project-46.webp", title: "Umm Al Houl Power Project", location: "Doha, Qatar", category: "energy", sector: "Energy — Qatar" },
]

const filters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "major", label: "Major" },
  { key: "industrial", label: "Industrial" },
  { key: "energy", label: "Energy" },
  { key: "logistics", label: "Logistics" },
  { key: "aviation", label: "Aviation" },
  { key: "marine", label: "Marine" },
  { key: "military", label: "Military" },
  { key: "other", label: "Other" },
]

export function OurWorkSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === "all"
    ? projects
    : activeFilter === "major"
    ? projects.slice(0, 11)
    : projects.filter((p) => p.category === activeFilter)

  const displayed = showAll ? filtered : filtered.slice(0, 12)

  const openLightbox = (filteredIndex: number) => {
    const item = displayed[filteredIndex]
    const globalIndex = projects.indexOf(item)
    setLightbox(globalIndex)
  }

  const closeLightbox = () => setLightbox(null)
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % projects.length : null))
  const prevImage = () =>
    setLightbox((prev) => (prev !== null ? (prev - 1 + projects.length) % projects.length : null))

  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#60a5fa] text-sm font-semibold tracking-[0.3em] uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Our Work
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Over 400 projects delivered across the UAE and Qatar — from industrial complexes and energy stations to aviation hangars and marine facilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => { setActiveFilter(filter.key); setShowAll(false) }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayed.map((project, i) => (
            <button
              key={`${project.src}-${i}`}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[#60a5fa] text-xs font-semibold uppercase tracking-wider">
                  {project.sector}
                </span>
                <h3 className="text-white font-semibold text-sm mt-1 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 mt-1.5 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Show More */}
        {!showAll && filtered.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#2563eb] text-white rounded-full font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/25"
            >
              View All {filtered.length} Projects
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
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
              src={projects[lightbox].src}
              alt={projects[lightbox].title}
              className="max-w-full max-h-[78vh] object-contain rounded-lg mx-auto"
            />
            <div className="text-center mt-4">
              <span className="text-[#60a5fa] text-sm font-semibold">{projects[lightbox].sector}</span>
              <h3 className="text-white text-lg font-semibold mt-1">{projects[lightbox].title}</h3>
              <div className="flex items-center justify-center gap-1 mt-1 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {projects[lightbox].location}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
