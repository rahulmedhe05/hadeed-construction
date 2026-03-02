import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ChevronRight,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { BookingForm } from "@/components/booking-form"
import { allCities } from "@/lib/areas"
import { SITE_CONFIG } from "@/lib/data"

interface Props {
  params: Promise<{ city: string; area: string }>
}

function findArea(citySlug: string, areaSlug: string) {
  const city = allCities.find((c) => c.slug === citySlug)
  if (!city) return null
  const area = city.areas.find((a) => a.slug === areaSlug)
  if (!area) return null
  return { city, area }
}

export async function generateStaticParams() {
  const params: { city: string; area: string }[] = []
  for (const city of allCities) {
    for (const area of city.areas) {
      params.push({ city: city.slug, area: area.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, area: areaSlug } = await params
  const result = findArea(citySlug, areaSlug)
  if (!result) return {}
  const { city, area } = result
  return {
    title: `Construction & Contracting in ${area.name}, ${city.name} | Hadeed Emirates`,
    description: `Construction, contracting & project management in ${area.name}, ${city.name}. Industrial, commercial, residential projects. Hadeed Emirates Contracting — 400+ projects completed.`,
    openGraph: {
      title: `Construction Services in ${area.name} | Hadeed Emirates Contracting`,
      description: `Construction & contracting in ${area.name}, ${city.name}. Industrial, commercial, infrastructure projects & MEP works.`,
    },
    alternates: {
      canonical: `https://hadeedconstruction.com/${city.slug}/${area.slug}`,
    },
  }
}

export default async function AreaPage({ params }: Props) {
  const { city: citySlug, area: areaSlug } = await params
  const result = findArea(citySlug, areaSlug)
  if (!result) notFound()

  const { city, area } = result

  // Nearby areas (exclude current, pick up to 6)
  const nearbyAreas = city.areas.filter((a) => a.slug !== area.slug).slice(0, 6)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Hadeed Emirates Contracting - ${area.name}`,
    description: area.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: city.name,
      addressCountry: city.countryCode,
    },
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: `https://hadeedconstruction.com/${city.slug}/${area.slug}`,
  }

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <div className="pt-28 pb-4 bg-[#ffffff] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${city.slug}`} className="hover:text-[#2563eb] transition-colors">
              {city.name}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2563eb]">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold">
                  {area.name}, {city.name}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Construction &amp; Contracting in {area.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {area.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["Industrial Construction", "Commercial Buildings", "Civil Infrastructure", "Project Management"].map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 blue-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Quote
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
              OUR SERVICES IN {area.name.toUpperCase()}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              What We Offer in {area.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-8">
              <CheckCircle2 className="w-10 h-10 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Construction</h3>
              <p className="text-gray-600 mb-4">
                Factories, warehouses, manufacturing plants, and industrial complexes in {area.name}.
              </p>
            </div>
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-8">
              <CheckCircle2 className="w-10 h-10 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Buildings</h3>
              <p className="text-gray-600 mb-4">
                Office towers, retail facilities, mixed-use developments, and commercial projects in {area.name}.
              </p>
            </div>
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-8">
              <CheckCircle2 className="w-10 h-10 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Works</h3>
              <p className="text-gray-600 mb-4">
                Roads, drainage, utilities, and site enabling works for developments in {area.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hadeed in this area */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
                WHY HADEED EMIRATES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-8">
                Your Trusted Construction Partner in {area.name}
              </h2>
              <div className="space-y-6">
                {[
                  { title: "25+ Years Experience", desc: `Decades of proven construction expertise delivering projects in ${area.name} and beyond.` },
                  { title: "400+ Projects Delivered", desc: "Track record of excellence across industrial, commercial, and infrastructure sectors." },
                  { title: "Turnkey Solutions", desc: "End-to-end construction services from design support to final handover." },
                  { title: "Quality Assurance", desc: "Strict quality control processes with international standards compliance." },
                  { title: "Competitive Pricing", desc: "Transparent pricing with no hidden charges. Value engineering options available." },
                  { title: "24/7 Support", desc: "Round-the-clock project management support for critical operations." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2563eb] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#ffffff] border border-[#2563eb]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Request a Quote for {area.name}
              </h3>
              <p className="text-gray-600 mb-6">
                Tell us about your project and our team will prepare a competitive quote for construction in {area.name}.
              </p>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/971506266515?text=${encodeURIComponent(`Hi, I need construction services in ${area.name}, ${city.name}. Please send me a quote.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full blue-gradient text-[#ffffff] px-6 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 w-full border-2 border-[#2563eb] text-[#2563eb] px-6 py-4 rounded-full font-semibold text-lg hover:bg-[#2563eb]/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +971 50 626 6515
                </a>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-900 px-6 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Form <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-20 bg-[#ffffff]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
                NEARBY AREAS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Also Serving Nearby {city.name} Areas
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${city.slug}/${nearby.slug}`}
                  className="group flex items-center gap-3 bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-5 hover:border-[#2563eb]/40 transition-all"
                >
                  <MapPin className="w-5 h-5 text-[#2563eb] shrink-0" />
                  <div>
                    <h3 className="text-gray-900 font-semibold group-hover:text-[#2563eb] transition-colors">
                      Construction Services in {nearby.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#2563eb] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${city.slug}`}
                className="text-[#2563eb] font-semibold hover:underline inline-flex items-center gap-2"
              >
                View All {city.name} Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
