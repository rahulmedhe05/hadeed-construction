import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorks } from "@/components/how-it-works"
import { StatsCounter } from "@/components/stats-counter"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ProjectGallery } from "@/components/project-gallery"
import { projectSectors } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />

      {/* Project Sectors Grid */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
              Our Project Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
              Proven Experience Across Diverse Sectors
            </h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              From industrial complexes to defense facilities, we deliver construction excellence across 15+ sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectSectors.slice(0, 15).map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl overflow-hidden hover:border-[#2563eb]/40 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{sector.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {sector.shortDescription}
                  </p>
                  <span className="text-[#2563eb] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery />
      <HowItWorks />
      <StatsCounter />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
