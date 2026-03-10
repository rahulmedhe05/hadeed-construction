import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin, Phone, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HowItWorks } from "@/components/how-it-works"
import { InternalLinks } from "@/components/internal-links"
import { BreadcrumbSchema } from "@/components/schema-markup"
import { allCities } from "@/lib/areas"
import { SITE_CONFIG } from "@/lib/data"

export const revalidate = 86400

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return allCities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = allCities.find((c) => c.slug === slug)
  if (!city) return {}
  return {
    title: `Construction & Contracting in ${city.name} | Hadeed Emirates`,
    description: city.metaDescription,
    openGraph: {
      title: `${city.title} | Hadeed Emirates Contracting`,
      description: city.metaDescription,
      url: `https://hadeedconstruction.com/${city.slug}`,
      siteName: "Hadeed Emirates Contracting",
      type: "website",
      images: [{ url: "https://hadeedconstruction.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Construction & Contracting in ${city.name} | Hadeed Emirates`,
      description: city.metaDescription,
    },
    alternates: {
      canonical: `https://hadeedconstruction.com/${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const city = allCities.find((c) => c.slug === slug)
  if (!city) notFound()

  const breadcrumbs = [
    { name: "Home", url: "https://hadeedconstruction.com" },
    { name: city.name, url: `https://hadeedconstruction.com/${city.slug}` },
  ]

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Navigation />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold">{city.name}, {city.country}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {city.title}
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                {city.description}
              </p>
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

      {/* Areas Grid */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
              SERVICE AREAS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              We Serve All Areas in {city.name}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Click on any area to learn more about our construction and contracting services in that location.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {city.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${city.slug}/${area.slug}`}
                className="group bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-5 hover:border-[#2563eb]/40 hover:bg-[#ffffff]/80 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <h3 className="text-gray-900 font-semibold group-hover:text-[#2563eb] transition-colors">
                    {area.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Project Gallery Strip */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Projects in {city.name}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/projects/project-01.jpeg",
              "/images/projects/project-10.jpeg",
              "/images/projects/project-15.jpeg",
              "/images/projects/project-37.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img src={src} alt={`Project in ${city.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb]/20 via-[#f1f5f9] to-[#2563eb]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Project in {city.name}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact Hadeed Emirates Contracting today for a free consultation on your construction project in {city.name}.
          </p>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 blue-gradient text-[#ffffff] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us Now
          </a>
        </div>
      </section>

      <InternalLinks variant="city" currentSlug={city.slug} />

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
