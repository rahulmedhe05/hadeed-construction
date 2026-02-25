import { ShieldCheck, Wrench, UserCheck } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Hadeed Equipment & Space Rentals
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Hadeed specializes in both heavy equipment rentals and versatile space
            solutions across Abu Dhabi. Whether you&apos;re managing a major build or
            need secure self-storage, we&apos;ve got you covered with high-quality
            assets and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl p-8 text-center hover:border-[#c8a35a]/40 transition-all group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#c8a35a]/10 flex items-center justify-center group-hover:bg-[#c8a35a]/20 transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#c8a35a]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Company Compliance</h3>
            <p className="text-gray-400">
              Fully compliant with UAE laws and strict safety standards.
            </p>
          </div>

          <div className="bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl p-8 text-center hover:border-[#c8a35a]/40 transition-all group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#c8a35a]/10 flex items-center justify-center group-hover:bg-[#c8a35a]/20 transition-colors">
              <Wrench className="w-8 h-8 text-[#c8a35a]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Equipment Standards</h3>
            <p className="text-gray-400">
              Regularly maintained and meets all regulatory requirements.
            </p>
          </div>

          <div className="bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl p-8 text-center hover:border-[#c8a35a]/40 transition-all group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#c8a35a]/10 flex items-center justify-center group-hover:bg-[#c8a35a]/20 transition-colors">
              <UserCheck className="w-8 h-8 text-[#c8a35a]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Certified Operators</h3>
            <p className="text-gray-400">
              Trained, verified professionals ensure safe, efficient operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
