"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Mail } from "lucide-react"
import { equipmentCategories, spaceRentals, SITE_CONFIG } from "@/lib/data"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [equipmentOpen, setEquipmentOpen] = useState(false)
  const [spaceOpen, setSpaceOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d1a]/95 backdrop-blur-md border-b border-[#c8a35a]/20">
      {/* Top bar */}
      <div className="hidden md:block bg-[#0a0a15] border-b border-[#c8a35a]/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Mail className="w-4 h-4 text-[#c8a35a]" />
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#c8a35a] transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
          >
            Whatsapp us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-bold text-[#0d0d1a] text-lg">
            H
          </div>
          <span className="text-xl font-bold text-white">
            Hadeed<span className="text-[#c8a35a]"> Transport</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-[#c8a35a] transition-colors font-medium">
            Home
          </Link>

          {/* Equipment dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setEquipmentOpen(true)}
            onMouseLeave={() => setEquipmentOpen(false)}
          >
            <Link
              href="/equipments"
              className="text-gray-300 hover:text-[#c8a35a] transition-colors font-medium flex items-center gap-1"
            >
              Equipment <ChevronDown className="w-4 h-4" />
            </Link>
            {equipmentOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#1a1a2e] border border-[#c8a35a]/20 rounded-xl shadow-2xl p-3 z-50">
                {equipmentCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/equipments/${cat.slug}`}
                    className="block px-4 py-3 text-gray-300 hover:text-[#c8a35a] hover:bg-[#c8a35a]/10 rounded-lg transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Space Rentals dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setSpaceOpen(true)}
            onMouseLeave={() => setSpaceOpen(false)}
          >
            <Link
              href="/space-rentals"
              className="text-gray-300 hover:text-[#c8a35a] transition-colors font-medium flex items-center gap-1"
            >
              Space Rentals <ChevronDown className="w-4 h-4" />
            </Link>
            {spaceOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a2e] border border-[#c8a35a]/20 rounded-xl shadow-2xl p-3 z-50">
                {spaceRentals.map((space) => (
                  <Link
                    key={space.slug}
                    href={`/space-rentals/${space.slug}`}
                    className="block px-4 py-3 text-gray-300 hover:text-[#c8a35a] hover:bg-[#c8a35a]/10 rounded-lg transition-colors text-sm"
                  >
                    {space.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about-us" className="text-gray-300 hover:text-[#c8a35a] transition-colors font-medium">
            About Us
          </Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-[#c8a35a] transition-colors font-medium">
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-[#0d0d1a] px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0d1a] border-t border-[#c8a35a]/20 px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block text-gray-300 hover:text-[#c8a35a] py-2 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setEquipmentOpen(!equipmentOpen)}
              className="flex items-center justify-between w-full text-gray-300 hover:text-[#c8a35a] py-2 font-medium"
            >
              Equipment <ChevronDown className={`w-4 h-4 transition-transform ${equipmentOpen ? "rotate-180" : ""}`} />
            </button>
            {equipmentOpen && (
              <div className="pl-4 space-y-2 mt-2">
                <Link
                  href="/equipments"
                  className="block text-gray-400 hover:text-[#c8a35a] py-1 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  All Equipment
                </Link>
                {equipmentCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/equipments/${cat.slug}`}
                    className="block text-gray-400 hover:text-[#c8a35a] py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setSpaceOpen(!spaceOpen)}
              className="flex items-center justify-between w-full text-gray-300 hover:text-[#c8a35a] py-2 font-medium"
            >
              Space Rentals <ChevronDown className={`w-4 h-4 transition-transform ${spaceOpen ? "rotate-180" : ""}`} />
            </button>
            {spaceOpen && (
              <div className="pl-4 space-y-2 mt-2">
                <Link
                  href="/space-rentals"
                  className="block text-gray-400 hover:text-[#c8a35a] py-1 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  All Spaces
                </Link>
                {spaceRentals.map((space) => (
                  <Link
                    key={space.slug}
                    href={`/space-rentals/${space.slug}`}
                    className="block text-gray-400 hover:text-[#c8a35a] py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {space.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className="block text-gray-300 hover:text-[#c8a35a] py-2 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="block text-gray-300 hover:text-[#c8a35a] py-2 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center gold-gradient text-[#0d0d1a] px-6 py-3 rounded-full font-semibold mt-4"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
