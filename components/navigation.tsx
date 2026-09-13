"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Mail, Download, FileText, Facebook, Instagram, Linkedin } from "lucide-react"
import { projectSectors, SITE_CONFIG } from "@/lib/data"
import { Logo } from "@/components/logo"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#2563eb]/20">
      {/* Top bar */}
      <div className="hidden md:block bg-[#f8fafc] border-b border-[#2563eb]/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2563eb]" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#2563eb] transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-gray-600">25+ Years | 400+ Projects | UAE · Qatar · Jordan</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium text-sm">
            Home
          </Link>

          {/* Sectors dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setSectorsOpen(true)}
            onMouseLeave={() => setSectorsOpen(false)}
          >
            <button className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium flex items-center gap-1 text-sm">
              Sectors <ChevronDown className="w-4 h-4" />
            </button>
            {sectorsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-[#ffffff] border border-[#2563eb]/20 rounded-xl shadow-2xl p-4 z-50">
                <div className="grid grid-cols-2 gap-1">
                  {projectSectors.slice(0, 14).map((sector) => (
                    <Link
                      key={sector.slug}
                      href={`/sectors/${sector.slug}`}
                      className="flex items-center gap-2 px-3 py-2.5 text-gray-700 hover:text-[#2563eb] hover:bg-[#2563eb]/10 rounded-lg transition-colors text-sm"
                    >
                      <span className="text-base">{sector.icon}</span>
                      {sector.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about-us" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium text-sm">
            About
          </Link>
          <Link href="/contact-us" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium text-sm">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE_CONFIG.profilePdf}
            download
            className="flex items-center gap-1.5 border border-[#2563eb]/30 text-[#2563eb] px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-[#2563eb]/10 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Profile PDF
          </a>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="blue-gradient text-[#ffffff] px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#ffffff] border-t border-[#2563eb]/20 px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            className="block text-gray-700 hover:text-[#2563eb] py-2 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Sectors */}
          <div>
            <button
              onClick={() => setSectorsOpen(!sectorsOpen)}
              className="flex items-center justify-between w-full text-gray-700 hover:text-[#2563eb] py-2 font-medium"
            >
              Sectors <ChevronDown className={`w-4 h-4 transition-transform ${sectorsOpen ? "rotate-180" : ""}`} />
            </button>
            {sectorsOpen && (
              <div className="pl-4 space-y-2 mt-2">
                {projectSectors.slice(0, 14).map((sector) => (
                  <Link
                    key={sector.slug}
                    href={`/sectors/${sector.slug}`}
                    className="block text-gray-600 hover:text-[#2563eb] py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sector.icon} {sector.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className="block text-gray-700 hover:text-[#2563eb] py-2 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="block text-gray-700 hover:text-[#2563eb] py-2 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          <div className="space-y-3 pt-4 border-t border-[#2563eb]/10">
            <a
              href={SITE_CONFIG.profilePdf}
              download
              className="flex items-center justify-center gap-2 w-full border border-[#2563eb]/30 text-[#2563eb] px-6 py-3 rounded-full font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Company Profile
            </a>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center blue-gradient text-[#ffffff] px-6 py-3 rounded-full font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
