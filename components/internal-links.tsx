import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projectSectors } from "@/lib/data"
import { allCities } from "@/lib/areas"
import { keywordPages } from "@/lib/keyword-pages-data"

const topServices = keywordPages.slice(0, 8)

interface InternalLinksProps {
  /** Current page type to adjust which links are shown */
  variant: "city" | "area" | "sector" | "service"
  /** Current slug to exclude from the list */
  currentSlug?: string
  /** For area pages: the parent city slug */
  citySlug?: string
}

export function InternalLinks({ variant, currentSlug, citySlug }: InternalLinksProps) {
  // Top sectors (exclude current if on sector page)
  const sectors = projectSectors
    .filter((s) => variant !== "sector" || s.slug !== currentSlug)
    .slice(0, 6)

  // Nearby cities (exclude current if on city page)
  const cities = allCities
    .filter((c) => variant !== "city" || c.slug !== currentSlug)
    .slice(0, 8)

  // Related services (exclude current if on service page)
  const services = topServices.filter(
    (s) => variant !== "service" || s.slug !== currentSlug
  )

  // For area pages, show sibling areas
  const city = citySlug ? allCities.find((c) => c.slug === citySlug) : null
  const siblingAreas = city
    ? city.areas.filter((a) => a.slug !== currentSlug).slice(0, 6)
    : []

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore More</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sectors */}
          <div>
            <h3 className="text-sm font-semibold text-[#2563eb] tracking-wider uppercase mb-4">
              Our Sectors
            </h3>
            <ul className="space-y-2">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/sectors/${s.slug}`}
                    className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities / Areas */}
          <div>
            <h3 className="text-sm font-semibold text-[#2563eb] tracking-wider uppercase mb-4">
              {variant === "area" ? `More Areas in ${city?.name}` : "Locations We Serve"}
            </h3>
            <ul className="space-y-2">
              {variant === "area" && siblingAreas.length > 0
                ? siblingAreas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/${citySlug}/${a.slug}`}
                        className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm flex items-center gap-1"
                      >
                        <ArrowRight className="w-3 h-3" />
                        {a.name}
                      </Link>
                    </li>
                  ))
                : cities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${c.slug}`}
                        className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm flex items-center gap-1"
                      >
                        <ArrowRight className="w-3 h-3" />
                        {c.name}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#2563eb] tracking-wider uppercase mb-4">
              Popular Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {s.keyword}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick links to home & contact */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-6">
          <Link href="/" className="text-[#2563eb] text-sm font-semibold hover:underline">
            ← Back to Home
          </Link>
          <Link href="/contact-us" className="text-[#2563eb] text-sm font-semibold hover:underline">
            Contact Us →
          </Link>
          <Link href="/about-us" className="text-[#2563eb] text-sm font-semibold hover:underline">
            About Hadeed Emirates →
          </Link>
        </div>
      </div>
    </section>
  )
}
