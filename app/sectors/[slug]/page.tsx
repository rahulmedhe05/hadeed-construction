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
  Download,
  MapPin,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { FAQSection } from "@/components/faq-section"
import { BreadcrumbSchema } from "@/components/schema-markup"
import { InternalLinks } from "@/components/internal-links"
import { projectSectors, SITE_CONFIG } from "@/lib/data"
import { allCities } from "@/lib/areas"

export const revalidate = 86400

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectSectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = projectSectors.find((s) => s.slug === slug)
  if (!sector) return {}
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      url: `https://hadeedconstruction.com/sectors/${slug}`,
      siteName: "Hadeed Emirates Contracting",
      type: "website",
      images: [{ url: `https://hadeedconstruction.com${sector.image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: sector.metaTitle,
      description: sector.metaDescription,
    },
    alternates: {
      canonical: `https://hadeedconstruction.com/sectors/${slug}`,
    },
  }
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params
  const sector = projectSectors.find((s) => s.slug === slug)
  if (!sector) notFound()

  const relatedSectors = projectSectors
    .filter((s) => s.slug !== sector.slug)
    .slice(0, 6)

  // Generate sector-specific FAQs
  const sectorFaqs = [
    { question: `What types of ${sector.name.toLowerCase()} projects does Hadeed Emirates handle?`, answer: `We handle all types of ${sector.name.toLowerCase()} projects including ${sector.keyProjects.slice(0, 3).join(', ')}. Our team has extensive experience delivering these projects across the UAE, Qatar, and Jordan.` },
    { question: `How long does a typical ${sector.name.toLowerCase()} project take to complete?`, answer: `Project timelines vary based on scope and complexity. Small to medium ${sector.name.toLowerCase()} projects typically take 3-6 months, while large-scale projects may require 12-24 months. We provide detailed timelines during the consultation phase.` },
    { question: `What areas in the UAE do you provide ${sector.name.toLowerCase()} services?`, answer: `We provide ${sector.name.toLowerCase()} services across all Emirates including Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also serve Qatar and Jordan.` },
    { question: `Do you offer turnkey ${sector.name.toLowerCase()} solutions?`, answer: `Yes, we offer complete turnkey solutions for ${sector.name.toLowerCase()} projects. This includes design, engineering, procurement, construction, and commissioning — all managed by our experienced team.` },
    { question: `What certifications does Hadeed Emirates hold for ${sector.name.toLowerCase()} work?`, answer: `We hold ISO 9001:2015 Quality Management, ISO 14001:2015 Environmental Management, and ISO 45001:2018 Safety certifications. We are also classified as First Class contractors in Abu Dhabi.` },
    { question: `Can you provide references for completed ${sector.name.toLowerCase()} projects?`, answer: `Absolutely. We have completed over 400 projects and can provide references from clients in the ${sector.name.toLowerCase()} sector. Contact us for case studies and client testimonials.` },
    { question: `What is the process to start a ${sector.name.toLowerCase()} project with Hadeed Emirates?`, answer: `Contact us via WhatsApp or phone for a free consultation. We'll discuss your requirements, conduct a site visit if needed, and provide a detailed proposal with timeline and pricing.` },
    { question: `Do you handle permits and approvals for ${sector.name.toLowerCase()} projects?`, answer: `Yes, we handle all necessary permits, approvals, and regulatory compliance as part of our turnkey service. Our team is familiar with requirements across all UAE emirates.` },
    { question: `What safety standards do you follow for ${sector.name.toLowerCase()} construction?`, answer: `We follow international safety standards and hold ISO 45001:2018 certification. All our sites implement comprehensive HSE protocols with regular safety audits and training.` },
    { question: `How can I get a quote for my ${sector.name.toLowerCase()} project?`, answer: `Contact us via WhatsApp at ${SITE_CONFIG.phone} or email at ${SITE_CONFIG.email}. Provide your project details and we'll send a competitive quote within 24-48 hours.` },
  ]

  const breadcrumbs = [
    { name: "Home", url: "https://hadeedconstruction.com" },
    { name: "Sectors", url: "https://hadeedconstruction.com/sectors" },
    { name: sector.name, url: `https://hadeedconstruction.com/sectors/${slug}` },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sector.name,
    description: sector.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.fullName,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      url: SITE_CONFIG.url,
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Jordan" },
    ],
  }

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sector.image} 
            alt={sector.name} 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-gray-300 mb-8">
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-blue-400">{sector.name}</span>
              </nav>

              <span className="text-5xl mb-6 block">{sector.icon}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {sector.name}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                {sector.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in your ${sector.name} services. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 blue-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Consultation
                </a>
                <a
                  href={SITE_CONFIG.profilePdf}
                  download
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Company Profile
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our {sector.name} Services</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {sector.fullDescription}
              </p>

              {/* Key Projects */}
              <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Project Types</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sector.keyProjects.map((project, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sector.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#2563eb]/20 to-transparent border border-[#2563eb]/20 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discuss Your Project</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Contact us for a free consultation on your {sector.name.toLowerCase()} project.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I need ${sector.name} services. Please share details and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
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

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <h4 className="text-[#2563eb] font-semibold text-sm">Company Highlights</h4>
                  {[
                    "25+ Years of Experience",
                    "400+ Projects Completed",
                    "1.5M+ Sqm Constructed",
                    "UAE, Qatar & Jordan",
                    "ISO 9001 | 14001 | 45001",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Visuals */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">Project Showcase</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Our {sector.name} Work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/images/projects/project-01.webp",
              "/images/projects/project-10.webp",
              "/images/projects/project-14.webp",
              "/images/projects/project-15.webp",
              "/images/projects/project-22.webp",
              "/images/projects/project-35.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img 
                  src={src} 
                  alt={`${sector.name} project ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
              WHERE WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              {sector.name} Across the Region
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {allCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group flex items-center gap-3 bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-5 hover:border-[#2563eb]/40 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#2563eb] shrink-0" />
                <div>
                  <h3 className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{city.country}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Sectors */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Other Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedSectors.map((s) => (
              <Link
                key={s.slug}
                href={`/sectors/${s.slug}`}
                className="group bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-6 hover:border-[#2563eb]/40 transition-all"
              >
                <span className="text-3xl block mb-3">{s.icon}</span>
                <h3 className="text-gray-900 font-bold group-hover:text-[#2563eb] transition-colors mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{s.shortDescription}</p>
                <span className="text-[#2563eb] text-sm font-semibold mt-3 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection 
        customFaqs={sectorFaqs} 
        title={`${sector.name} FAQs`}
        subtitle={`Common Questions About ${sector.name}`}
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb]/20 via-[#f1f5f9] to-[#2563eb]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your {sector.name} Project?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact Hadeed Emirates Contracting for a free consultation and competitive quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 blue-gradient text-[#ffffff] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563eb]/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <InternalLinks variant="sector" currentSlug={sector.slug} />

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
