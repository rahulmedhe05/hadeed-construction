import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { projectSectors, SITE_CONFIG } from "@/lib/data"
import { allCities } from "@/lib/areas"
import { keywordPages } from "@/lib/keyword-pages-data"

export function Footer() {
  const serviceKeywords = keywordPages.filter((k) => k.category === "service").slice(0, 12)
  const locationKeywords = keywordPages.filter((k) => k.category === "location").slice(0, 10)

  return (
    <footer className="bg-[#f8fafc] border-t border-[#2563eb]/20">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Project Sectors */}
          <div>
            <h4 className="text-[#2563eb] font-bold text-lg mb-6">Project Sectors</h4>
            <ul className="space-y-3">
              {projectSectors.slice(0, 10).map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm"
                  >
                    {sector.icon} {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Quick Links */}
          <div>
            <h4 className="text-[#2563eb] font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href={SITE_CONFIG.profilePdf} download className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm">
                  Company Profile PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-[#2563eb] font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {allCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm font-medium"
                  >
                    Construction Services in {city.name}
                  </Link>
                </li>
              ))}
              {allCities.flatMap((city) =>
                city.areas.slice(0, 5).map((area) => (
                  <li key={`${city.slug}-${area.slug}`}>
                    <Link
                      href={`/${city.slug}/${area.slug}`}
                      className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm"
                    >
                      {area.name}, {city.name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-[#2563eb] font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 hover:text-[#2563eb] transition-colors text-sm">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{SITE_CONFIG.location}, UAE</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#2563eb]/20 flex items-center justify-center text-gray-600 hover:text-[#2563eb] hover:border-[#2563eb] transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#2563eb]/20 flex items-center justify-center text-gray-600 hover:text-[#2563eb] hover:border-[#2563eb] transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#2563eb]/20 flex items-center justify-center text-gray-600 hover:text-[#2563eb] hover:border-[#2563eb] transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Keywords Links */}
      <div className="border-t border-[#2563eb]/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h5 className="text-[#2563eb] font-semibold text-sm mb-4 uppercase tracking-wider">Our Services</h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {serviceKeywords.map((kw) => (
              <Link key={kw.slug} href={`/services/${kw.slug}`} className="text-gray-500 hover:text-[#2563eb] transition-colors text-xs">
                {kw.keyword}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Location Keywords */}
      {locationKeywords.length > 0 && (
        <div className="border-t border-[#2563eb]/10">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h5 className="text-[#2563eb] font-semibold text-sm mb-4 uppercase tracking-wider">Service Locations</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {locationKeywords.map((kw) => (
                <Link key={kw.slug} href={`/services/${kw.slug}`} className="text-gray-500 hover:text-[#2563eb] transition-colors text-xs">
                  {kw.keyword}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Area Links by City */}
      <div className="border-t border-[#2563eb]/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {allCities.map((city) => (
            <div key={city.slug} className="mb-6 last:mb-0">
              <h5 className="text-[#2563eb] font-semibold text-sm mb-3 uppercase tracking-wider">
                Construction Services in {city.name}
              </h5>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link href={`/${city.slug}`} className="text-gray-500 hover:text-[#2563eb] transition-colors text-xs font-medium">
                  {city.name} Main
                </Link>
                {city.areas.map((area) => (
                  <Link key={area.slug} href={`/${city.slug}/${area.slug}`} className="text-gray-500 hover:text-[#2563eb] transition-colors text-xs">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#2563eb]/10">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Hadeed Emirates Contracting Company LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
