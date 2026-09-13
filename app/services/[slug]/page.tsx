import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BookingForm } from "@/components/booking-form"
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
  HelpCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SITE_CONFIG } from "@/lib/data"
import {
  keywordPages,
  getKeywordPageBySlug,
  getRelatedKeywordPages,
} from "@/lib/keyword-pages-data"

export const revalidate = 86400

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return keywordPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getKeywordPageBySlug(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://hadeedconstruction.com/services/${slug}`,
      siteName: "Hadeed Emirates Contracting",
      type: "website",
      images: [{ url: "https://hadeedconstruction.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `https://hadeedconstruction.com/services/${slug}`,
    },
  }
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params
  const page = getKeywordPageBySlug(slug)
  if (!page) notFound()

  const related = getRelatedKeywordPages(page, 6)

  const categoryColors: Record<string, string> = {
    service: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    location: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    industry: "bg-red-500/10 text-red-400 border-red-500/20",
    construction: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  }

  const categoryLabels: Record<string, string> = {
    service: "Service",
    location: "Location",
    industry: "Industry",
    construction: "Construction",
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.keyword,
        description: page.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
            streetAddress: "Abu Dhabi",
          },
          url: SITE_CONFIG.url,
        },
        areaServed: [
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "Country", name: "Qatar" },
          { "@type": "Country", name: "Jordan" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_CONFIG.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.keyword,
            item: `${SITE_CONFIG.url}/services/${slug}`,
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navigation />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-3.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-300 mb-8">
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/" className="hover:text-blue-400 transition-colors">Services</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-blue-400">{page.keyword}</span>
              </nav>

              {/* Category Badge */}
              <div className="mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[page.category]}`}>
                  {categoryLabels[page.category]}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {page.h1}
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
                {page.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${page.keyword}. Please share details.`)}`}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Quote on WhatsApp
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
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

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg  max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {page.introParagraph}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  {page.secondParagraph}
                </p>
              </div>

              {/* Features */}
              <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {page.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Hadeed Emirates Contracting */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Hadeed Emirates Contracting?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, title: "25+ Years Experience", desc: "Proven track record delivering 400+ projects across UAE, Qatar & Jordan." },
                    { icon: Truck, title: "Fast Response", desc: "Rapid mobilization from our headquarters in Abu Dhabi to any project site." },
                    { icon: Clock, title: "Full-Service Delivery", desc: "End-to-end construction, contracting, and project management solutions." },
                    { icon: Star, title: "Quality Assured", desc: "ISO certified with strong HSE culture across all projects." },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                      <item.icon className="w-8 h-8 text-[#2563eb] mb-3" />
                      <h3 className="text-gray-900 font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  <MapPin className="inline w-6 h-6 text-[#2563eb] mr-2" />
                  We Serve All UAE
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { city: "Abu Dhabi", areas: "Mussafah, ICAD, KIZAD, Khalifa City, Al Reem Island, Yas Island, Saadiyat, Al Ain" },
                    { city: "Dubai & Northern Emirates", areas: "Jebel Ali, JAFZA, Business Bay, Dubai South, Sharjah Industrial, Ajman, RAK, Fujairah" },
                    { city: "Qatar & Jordan", areas: "Doha, Lusail, West Bay, Mesaieed, Amman, Aqaba, Irbid, Zarqa" },
                  ].map((loc, i) => (
                    <div key={i} className="bg-gray-100 border border-gray-200 rounded-xl p-5">
                      <h3 className="text-[#2563eb] font-semibold mb-2">{loc.city}</h3>
                      <p className="text-gray-600 text-sm">{loc.areas}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#2563eb]/20 to-transparent border border-[#2563eb]/20 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Free Quote</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Contact us today for competitive rates on {page.keyword.toLowerCase()}.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I need ${page.keyword}. Please share pricing.`)}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gray-200 text-gray-900 font-semibold rounded-lg hover:border-[#2563eb] transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE_CONFIG.phone}
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 text-[#2563eb]" />
                    Abu Dhabi, UAE
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#2563eb]" />
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* Tags */}
              {page.tags.length > 0 && (
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {page.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recent Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/projects/project-01.jpeg",
              "/images/projects/project-14.jpeg",
              "/images/projects/project-16.jpeg",
              "/images/projects/project-35.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img src={src} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {page.faqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <HelpCircle className="w-10 h-10 text-[#2563eb] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Common questions about {page.keyword.toLowerCase()}</p>
            </div>

            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <div key={i} className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <Link
                  key={i}
                  href={`/services/${r.slug}`}
                  className="group bg-gray-100 border border-gray-200 rounded-xl p-6 hover:border-[#2563eb]/30 transition-all"
                >
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border mb-3 ${categoryColors[r.category]}`}>
                    {categoryLabels[r.category]}
                  </span>
                  <h3 className="text-gray-900 font-semibold group-hover:text-[#2563eb] transition-colors mb-2">
                    {r.keyword}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{r.heroSubtitle}</p>
                  <div className="flex items-center text-[#2563eb] text-sm mt-3">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb]/10 via-transparent to-[#2563eb]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact Hadeed Emirates Contracting today for the best {page.keyword.toLowerCase()} services in the UAE, Qatar & Jordan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${page.keyword}. Please provide a quote.`)}`}
              className="inline-flex items-center px-8 py-4 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2563eb]/20"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp for Free Quote
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center px-8 py-4 border-2 border-[#2563eb] text-[#2563eb] font-bold rounded-lg hover:bg-[#2563eb] hover:text-white transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +971 50 626 6515
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
