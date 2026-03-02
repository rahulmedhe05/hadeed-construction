import { ShieldCheck, Wrench, UserCheck, Globe, Award, Building2 } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Image + Text Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src="/images/projects/project-01.jpeg" alt="Industrial project" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="/images/projects/project-22.jpeg" alt="Infrastructure project" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="/images/projects/project-15.jpeg" alt="Commercial project" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src="/images/projects/project-35.jpeg" alt="Oil & Gas facility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
              Delivering Confidence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
              Hadeed Emirates Contracting Company
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Through engineering excellence, disciplined project execution, and deep market
              understanding, the company has developed strong expertise across multiple strategic
              sectors supporting the UAE&apos;s industrial growth, infrastructure expansion, and
              economic diversification.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl border border-[#2563eb]/15">
                <div className="text-3xl font-bold text-[#2563eb]">400+</div>
                <div className="text-gray-600 text-sm mt-1">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-[#2563eb]/15">
                <div className="text-3xl font-bold text-[#2563eb]">25+</div>
                <div className="text-gray-600 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-[#2563eb]/15">
                <div className="text-3xl font-bold text-[#2563eb]">1.5M+</div>
                <div className="text-gray-600 text-sm mt-1">Sqm Constructed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-[#2563eb]/15">
                <div className="text-3xl font-bold text-[#2563eb]">15+</div>
                <div className="text-gray-600 text-sm mt-1">Sectors Served</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 text-center hover:border-[#2563eb]/40 transition-all group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Quality Culture</h3>
            <p className="text-gray-600">
              ISO 9001, ISO 14001, ISO 45001 certified. Strong HSE management across all projects.
            </p>
          </div>

          <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 text-center hover:border-[#2563eb]/40 transition-all group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
              <Building2 className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Specialization</h3>
            <p className="text-gray-600">
              Deep expertise in industrial construction, manufacturing plants, and production facilities.
            </p>
          </div>

          <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 text-center hover:border-[#2563eb]/40 transition-all group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
              <Globe className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Regional Presence</h3>
            <p className="text-gray-600">
              Operations across UAE, Qatar, and Jordan — proven execution in government, private, and industrial sectors.
            </p>
          </div>
        </div>

        {/* Strengths checklist */}
        <div className="mt-16 bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Hadeed Emirates?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Deep regional experience across UAE, Qatar & Jordan",
              "Industrial construction specialization",
              "Multidisciplinary project delivery capability",
              "Strong safety and quality culture",
              "Proven execution across government & private sectors",
              "400+ successfully completed projects",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2563eb]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2563eb] text-sm">✔</span>
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
