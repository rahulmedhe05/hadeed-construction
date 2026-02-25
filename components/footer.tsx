import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { equipmentCategories, spaceRentals, SITE_CONFIG } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-[#0a0a15] border-t border-[#c8a35a]/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Equipment */}
          <div>
            <h4 className="text-[#c8a35a] font-bold text-lg mb-6">Equipment</h4>
            <ul className="space-y-3">
              {equipmentCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/equipments/${cat.slug}`}
                    className="text-gray-400 hover:text-[#c8a35a] transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Space Rentals */}
          <div>
            <h4 className="text-[#c8a35a] font-bold text-lg mb-6">Space Rentals</h4>
            <ul className="space-y-3">
              {spaceRentals.slice(0, 4).map((space) => (
                <li key={space.slug}>
                  <Link
                    href={`/space-rentals/${space.slug}`}
                    className="text-gray-400 hover:text-[#c8a35a] transition-colors text-sm"
                  >
                    {space.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-[#c8a35a] font-bold text-lg mb-6">More</h4>
            <ul className="space-y-3">
              {spaceRentals.slice(4).map((space) => (
                <li key={space.slug}>
                  <Link
                    href={`/space-rentals/${space.slug}`}
                    className="text-gray-400 hover:text-[#c8a35a] transition-colors text-sm"
                  >
                    {space.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#c8a35a] font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-[#c8a35a] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-[#c8a35a] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="flex gap-4 mt-8">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#c8a35a]/20 flex items-center justify-center text-gray-400 hover:text-[#c8a35a] hover:border-[#c8a35a] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#c8a35a]/20 flex items-center justify-center text-gray-400 hover:text-[#c8a35a] hover:border-[#c8a35a] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#c8a35a]/20 flex items-center justify-center text-gray-400 hover:text-[#c8a35a] hover:border-[#c8a35a] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#c8a35a]/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Hadeed Transport, All rights reserved.
        </div>
      </div>
    </footer>
  )
}
