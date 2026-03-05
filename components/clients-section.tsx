"use client"

import { useEffect, useRef } from "react"

const clientLogos = [
  "/images/client-logos/client-logo-01.webp",
  "/images/client-logos/client-logo-02.webp",
  "/images/client-logos/client-logo-03.webp",
  "/images/client-logos/client-logo-04.webp",
  "/images/client-logos/client-logo-05.webp",
  "/images/client-logos/client-logo-06.webp",
  "/images/client-logos/client-logo-07.webp",
  "/images/client-logos/client-logo-08.webp",
  "/images/client-logos/client-logo-09.webp",
  "/images/client-logos/client-logo-10.webp",
  "/images/client-logos/client-logo-11.webp",
  "/images/client-logos/client-logo-12.webp",
  "/images/client-logos/client-logo-13.webp",
  "/images/client-logos/client-logo-14.webp",
  "/images/client-logos/client-logo-15.webp",
  "/images/client-logos/client-logo-16.webp",
  "/images/client-logos/client-logo-17.webp",
  "/images/client-logos/client-logo-18.webp",
  "/images/client-logos/client-logo-19.webp",
  "/images/client-logos/client-logo-20.webp",
  "/images/client-logos/client-logo-21.webp",
  "/images/client-logos/client-logo-22.webp",
  "/images/client-logos/client-logo-23.webp",
]

const clientProjects = [
  {
    src: "/images/clients/client-5-1.webp",
    title: "ADSB — Vessel Outfit",
    description: "Abu Dhabi Ship Building vessel outfit workshop and marine facilities.",
  },
  {
    src: "/images/clients/client-5-2.webp",
    title: "CMW — Aircraft Hangar & Service Buildings",
    description: "Design & build of aircraft hangar with 170m clear span in Abu Dhabi.",
  },
  {
    src: "/images/clients/client-5-3.webp",
    title: "Tawazun Residential Complex",
    description: "Construction of Tawazun residential complex for defense personnel.",
  },
  {
    src: "/images/clients/client-6-1.webp",
    title: "Extramix Precast Concrete Plant",
    description: "Turnkey construction of precast concrete plant in Mussafah, Abu Dhabi.",
  },
]

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollEl = scrollRef.current
    if (!scrollEl) return

    let animationId: number
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      scrollPos += speed
      if (scrollPos >= scrollEl.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollEl.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollEl.addEventListener("mouseenter", handleMouseEnter)
    scrollEl.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollEl.removeEventListener("mouseenter", handleMouseEnter)
      scrollEl.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Our Clients
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Our quality of service and workmanship has ensured that none of our customers are left unsatisfied. At HEC, it is our core value of meeting the client&apos;s expectation honestly and fairly.
          </p>
        </div>

        {/* Scrolling Logo Ticker */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden py-6"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-28 h-20 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-3 hover:border-[#2563eb]/30 hover:shadow-md transition-all"
              >
                <img
                  src={logo}
                  alt={`Client ${(i % clientLogos.length) + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Client Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2563eb]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
