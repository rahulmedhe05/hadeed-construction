import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Truck,
  Shield,
  Clock,
  Users,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { BookingForm } from "@/components/booking-form"
import { keywordPages, type KeywordPage } from "@/lib/keywords"
import { equipmentCategories, spaceRentals, SITE_CONFIG } from "@/lib/data"

interface Props {
  params: Promise<{ keyword: string }>
}

function findKeyword(slug: string): KeywordPage | undefined {
  return keywordPages.find((k) => k.slug === slug)
}

export async function generateStaticParams() {
  return keywordPages.map((k) => ({ keyword: k.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { keyword } = await params
  const page = findKeyword(keyword)
  if (!page) return {}
  return {
    title: `${page.title} | Hadeed Transport`,
    description: page.metaDescription,
    openGraph: {
      title: `${page.title} | Hadeed Transport`,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `https://hadeed-transport.com/services/${page.slug}`,
    },
  }
}

export default async function KeywordPage({ params }: Props) {
  const { keyword } = await params
  const page = findKeyword(keyword)
  if (!page) notFound()

  const relatedPages = page.relatedSlugs
    .map((s) => keywordPages.find((k) => k.slug === s))
    .filter(Boolean) as KeywordPage[]

  // Pick some featured products for sidebar
  const featuredProducts = [
    ...equipmentCategories[0].products.slice(0, 3),
    ...equipmentCategories[1].products.slice(0, 2),
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Hadeed Transport",
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  }

  return (
    <main className="min-h-screen bg-[#0d0d1a]">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0d0d1a] via-[#161629] to-[#0d0d1a]">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#c8a35a] transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#c8a35a]">{page.title}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {page.h1}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl">{page.intro}</p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8a35a] text-[#0d0d1a] px-6 py-3 rounded-md font-semibold hover:bg-[#b8933a] transition"
            >
              <MessageCircle className="h-5 w-5" /> Get Free Quote
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 border border-[#c8a35a] text-[#c8a35a] px-6 py-3 rounded-md font-semibold hover:bg-[#c8a35a]/10 transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {page.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}

              {/* Why choose us */}
              <div className="bg-[#161629] rounded-xl p-8 border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Why Choose Hadeed Transport?
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, title: "Certified & Insured", desc: "All equipment is maintained to international safety standards with full insurance coverage." },
                    { icon: Clock, title: "Same-Day Delivery", desc: "Rapid delivery from our ICAD III base to Abu Dhabi & Dubai project sites." },
                    { icon: Truck, title: "Large Fleet", desc: "60+ types of equipment and vehicles for every construction need." },
                    { icon: Users, title: "Expert Operators", desc: "Certified, experienced operators included with every heavy equipment rental." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#c8a35a]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-[#c8a35a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "500+", label: "Clients Served" },
                  { value: "1200+", label: "Projects Done" },
                  { value: "60+", label: "Equipment Types" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-[#161629] rounded-lg py-4 border border-white/5">
                    <div className="text-2xl font-bold text-[#c8a35a]">{s.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Featured equipment */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Popular Equipment for Rent</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredProducts.map((p, i) => {
                    const catSlug = i < 3
                      ? equipmentCategories[0].slug
                      : equipmentCategories[1].slug
                    return (
                      <Link
                        key={p.slug}
                        href={`/equipments/${catSlug}/${p.slug}`}
                        className="group bg-[#161629] rounded-lg overflow-hidden border border-white/5 hover:border-[#c8a35a]/30 transition"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-semibold text-white group-hover:text-[#c8a35a] transition">
                            {p.name}
                          </h3>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking form */}
              <BookingForm />

              {/* Quick links */}
              <div className="bg-[#161629] rounded-xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Heavy Machinery Rental", href: "/equipments/transportation-construction-machineries" },
                    { label: "Small Tools Rental", href: "/equipments/construction-small-tools" },
                    { label: "Warehouse Rental", href: "/space-rentals/warehouses" },
                    { label: "Open Yard Rental", href: "/space-rentals/open-yards" },
                    { label: "Office Space", href: "/space-rentals/office-spaces" },
                    { label: "Storage Containers", href: "/space-rentals/storage-containers" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-[#c8a35a] transition text-sm py-1"
                      >
                        <ArrowRight className="h-3 w-3 text-[#c8a35a]" /> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-gradient-to-br from-[#c8a35a] to-[#a0822e] rounded-xl p-6 text-[#0d0d1a]">
                <h3 className="text-lg font-bold mb-2">Need Help Choosing?</h3>
                <p className="text-sm opacity-80 mb-4">
                  Our experts will recommend the right equipment for your project — free consultation.
                </p>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0d0d1a] text-[#c8a35a] px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#0d0d1a]/90 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <section className="py-16 bg-[#161629]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/services/${rp.slug}`}
                  className="group bg-[#161629] rounded-xl p-6 border border-white/5 hover:border-[#c8a35a]/30 transition"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#c8a35a] transition">
                    {rp.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                    {rp.metaDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[#c8a35a] text-sm font-medium">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0d0d1a] to-[#161629]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Hadeed Transport today for competitive rates on equipment and space rentals across the UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8a35a] text-[#0d0d1a] px-8 py-3 rounded-md font-semibold hover:bg-[#b8933a] transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/5 transition"
            >
              <Phone className="h-5 w-5" /> {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
