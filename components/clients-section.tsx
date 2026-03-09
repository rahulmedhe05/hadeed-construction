"use client"

import { useEffect, useRef } from "react"

const clientLogos = [
  "/images/client-logos/preq-logo-01.webp",
  "/images/client-logos/preq-logo-02.webp",
  "/images/client-logos/preq-logo-03.webp",
  "/images/client-logos/preq-logo-04.webp",
  "/images/client-logos/preq-logo-05.webp",
  "/images/client-logos/preq-logo-06.webp",
  "/images/client-logos/preq-logo-07.webp",
  "/images/client-logos/preq-logo-08.webp",
  "/images/client-logos/preq-logo-09.webp",
  "/images/client-logos/preq-logo-10.webp",
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
        <div className="relative">
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
      </div>
    </section>
  )
}
