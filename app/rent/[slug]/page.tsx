import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Truck,
  Shield,
  Clock,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SITE_CONFIG, equipmentCategories } from "@/lib/data"
import {
  allRentalPages,
  getRentalPageBySlug,
  getRentalPageContent,
} from "@/lib/rental-pages-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allRentalPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getRentalPageBySlug(slug)
  if (!page) return {}
  const content = getRentalPageContent(page)
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      images: [page.productImage],
    },
    alternates: {
      canonical: `https://hadeed-transport.com/rent/${slug}`,
    },
  }
}

export default async function RentalPage({ params }: Props) {
  const { slug } = await params
  const page = getRentalPageBySlug(slug)
  if (!page) notFound()

  const content = getRentalPageContent(page)

  // Get related rental pages (same city, different products)
  const relatedRentals = allRentalPages
    .filter(
      (p) =>
        p.city.slug === page.city.slug &&
        p.slug !== page.slug &&
        !p.isGrouped
    )
    .slice(0, 6)

  // Build breadcrumb
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Rent", href: "/equipments" },
  ]
  if (page.categorySlug) {
    breadcrumbs.push({
      label: page.categoryName || "Equipment",
      href: `/equipments/${page.categorySlug}`,
    })
  }
  if (page.isSpace) {
    breadcrumbs.push({ label: "Space Rentals", href: "/space-rentals" })
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${page.productName} Rental ${page.city.preposition}`,
    description: content.metaDescription,
    image: `https://hadeed-transport.com${page.productImage}`,
    brand: { "@type": "Brand", name: "Hadeed Transport" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED",
        unitText: "DAY",
      },
      seller: {
        "@type": "Organization",
        name: "Hadeed Transport",
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
      },
    },
    areaServed: {
      "@type": "Place",
      name: page.city.name,
      address: {
        "@type": "PostalAddress",
        addressRegion: page.city.name,
        addressCountry: "AE",
      },
    },
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hadeed Transport",
    description: `${page.productName} rental services ${page.city.preposition}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ICAD III",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    url: `https://hadeed-transport.com/rent/${slug}`,
    areaServed: page.city.popularAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-[#0d0d1a]">
      <Navigation />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Breadcrumbs */}
      <div className="pt-28 pb-4 bg-[#0d0d1a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-3 h-3" />}
                <Link
                  href={crumb.href}
                  className="hover:text-[#c8a35a] transition-colors"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#c8a35a]">{page.productName} {page.city.preposition}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#c8a35a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#c8a35a]/3 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c8a35a]/10 border border-[#c8a35a]/20 rounded-full px-5 py-2 mb-6">
                <MapPin className="w-4 h-4 text-[#c8a35a]" />
                <span className="text-[#c8a35a] text-sm font-semibold">
                  Available {page.city.preposition}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {content.h1}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {content.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={page.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gold-gradient text-[#0d0d1a] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Quote
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 border-2 border-[#c8a35a] text-[#c8a35a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c8a35a]/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Truck className="w-4 h-4 text-[#c8a35a]" />
                  Fast Delivery
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Shield className="w-4 h-4 text-[#c8a35a]" />
                  Well-Maintained
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-[#c8a35a]" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Star className="w-4 h-4 text-[#c8a35a]" />
                  15+ Years
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#c8a35a]/20">
              <img
                src={page.productImage}
                alt={`${page.productName} for rent ${page.city.preposition}`}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#c8a35a] text-[#0d0d1a] px-4 py-1.5 rounded-full text-sm font-semibold">
                  Available for Rent
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-[#0d0d1a]/80 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                  {page.city.name}, UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
              ABOUT THIS RENTAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
              {page.productName} Rental Services {page.city.preposition}
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>{content.introParagraph1}</p>
              <p>{content.introParagraph2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
              KEY FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Why Choose Our {page.productName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#1a1a2e] border border-[#c8a35a]/10 rounded-xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-[#c8a35a] shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Benefits */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
                APPLICATIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
                Common Use Cases {page.city.preposition}
              </h2>
              <ul className="space-y-4">
                {content.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c8a35a]" />
                    <span className="text-gray-300 text-lg">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
                BENEFITS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
                Why Rent From Hadeed Transport
              </h2>
              <ul className="space-y-4">
                {content.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c8a35a] shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
              SERVICE AREAS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              {page.productName} Delivery {page.city.preposition}
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We deliver {page.productName.toLowerCase()} {page.city.areaText}.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {page.city.popularAreas.map((area, i) => (
              <span
                key={i}
                className="bg-[#1a1a2e] border border-[#c8a35a]/10 text-gray-300 px-5 py-2.5 rounded-full text-sm hover:border-[#c8a35a]/30 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              {page.productName} Rental FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-[#1a1a2e] border border-[#c8a35a]/10 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-semibold hover:text-[#c8a35a] transition-colors">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-[#c8a35a] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Rentals */}
      {relatedRentals.length > 0 && (
        <section className="py-20 bg-[#0d0d1a]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
                MORE RENTALS {page.city.preposition.toUpperCase()}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                Other Equipment Available {page.city.preposition}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRentals.map((rental) => (
                <Link
                  key={rental.slug}
                  href={`/rent/${rental.slug}`}
                  className="group bg-[#1a1a2e] border border-[#c8a35a]/10 rounded-xl p-6 hover:border-[#c8a35a]/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#c8a35a] transition-colors mb-2">
                    {rental.productName}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {rental.productDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#c8a35a] text-sm font-semibold">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-[#c8a35a]/20 via-[#0f0f1a] to-[#c8a35a]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Rent {page.productName} {page.city.preposition}?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free quote in minutes. We deliver {page.city.areaText}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={page.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient text-[#0d0d1a] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Quote
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 border-2 border-[#c8a35a] text-[#c8a35a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c8a35a]/10 transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
