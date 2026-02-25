import { Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl p-8 hover:border-[#c8a35a]/40 transition-all"
            >
              <Quote className="w-8 h-8 text-[#c8a35a] mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c8a35a]/10 flex items-center justify-center">
                  <span className="text-[#c8a35a] font-bold text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
