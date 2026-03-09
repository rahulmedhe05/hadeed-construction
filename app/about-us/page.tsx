import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsCounter } from "@/components/stats-counter"
import {
  Eye,
  Target,
  Award,
  ShieldCheck,
  CheckCircle2,
  Download,
  ArrowRight,
} from "lucide-react"
import { SITE_CONFIG, companyStrengths, certifications, projectSectors } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us | Hadeed Emirates Contracting Company",
  description:
    "Hadeed Emirates Contracting Company — 25+ years of construction excellence across UAE, Qatar & Jordan. 400+ projects, 1.5M+ sqm constructed. Industrial, commercial & infrastructure specialists.",
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-1.jpg" alt="Hadeed Emirates Contracting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Hadeed Emirates Contracting</h1>
          <p className="text-xl text-gray-300">25+ Years of Engineering Excellence Across the Middle East</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                Hadeed Emirates Contracting Company
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                With over 25 years of continuous operations, Hadeed Emirates Contracting Company
                has established itself as a trusted industrial and construction partner delivering
                complex projects across the United Arab Emirates, Qatar, and Jordan.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our portfolio exceeds 400 successfully completed projects, representing more than
                1.5 million square meters of constructed facilities. Through engineering excellence,
                disciplined project execution, and deep market understanding, we have developed strong
                expertise across multiple strategic sectors.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We support the UAE&apos;s industrial growth, infrastructure expansion, and economic
                diversification through multidisciplinary project delivery across government, private,
                and industrial sectors.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={SITE_CONFIG.profilePdf}
                  download
                  className="inline-flex items-center gap-2 blue-gradient text-[#ffffff] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" /> Download Company Profile
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-6 py-3 rounded-full font-semibold hover:bg-[#2563eb]/10 transition-colors"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img src="/images/hero/hero-2.jpg" alt="Hadeed Emirates Construction Projects" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8">
                <h3 className="text-[#2563eb] font-bold text-lg mb-4">Company Highlights</h3>
                <div className="space-y-4">
                  {[
                    { label: "Established", value: "2000" },
                    { label: "Headquarters", value: "Abu Dhabi, UAE" },
                    { label: "Projects Completed", value: "400+" },
                    { label: "Area Constructed", value: "1.5 Million+ Sqm" },
                    { label: "Sectors Served", value: "16+" },
                    { label: "Countries", value: "UAE, Qatar, Jordan" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="text-gray-900 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 hover:border-[#2563eb]/40 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
                <Eye className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the Middle East&apos;s most trusted construction and industrial partner —
                recognized for engineering excellence, project reliability, and innovation in
                building the region&apos;s future infrastructure.
              </p>
            </div>
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 hover:border-[#2563eb]/40 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
                <Target className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver complex construction projects with engineering excellence, safety discipline,
                and unwavering commitment to quality — powering industrial growth, infrastructure
                development, and economic diversification across the region.
              </p>
            </div>
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 hover:border-[#2563eb]/40 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
                <Award className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Engineering Excellence. Safety First. Client Partnership. Integrity in Execution.
                Every project we deliver reflects our commitment to building with precision,
                quality, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Strengths */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">Certifications</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-8">Accreditations & Compliance</h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-4">
                    <ShieldCheck className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">Delivering Confidence</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-8">Our Strengths</h2>
              <div className="space-y-4">
                {companyStrengths.map((strength, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Summary */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">15+ Sectors, 400+ Projects</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectSectors.slice(0, 15).map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group bg-[#ffffff] shadow-sm border border-[#2563eb]/10 rounded-xl p-6 text-center hover:border-[#2563eb]/40 transition-all"
              >
                <span className="text-3xl block mb-3">{sector.icon}</span>
                <h3 className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors">{sector.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio Gallery */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Project Highlights</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">A selection from our 400+ completed projects across UAE, Qatar & Jordan.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/projects/project-01.jpeg",
              "/images/projects/project-10.jpeg",
              "/images/projects/project-14.jpeg",
              "/images/projects/project-15.jpeg",
              "/images/projects/project-16.jpeg",
              "/images/projects/project-22.jpeg",
              "/images/projects/project-35.jpeg",
              "/images/projects/project-37.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img src={src} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <TestimonialsSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
