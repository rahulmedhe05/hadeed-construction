import { Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 hover:border-[#2563eb]/40 transition-all"
            >
              <Quote className="w-8 h-8 text-[#2563eb] mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                  <span className="text-[#2563eb] font-bold text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
