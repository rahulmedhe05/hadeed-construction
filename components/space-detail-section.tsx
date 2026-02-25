import { ArrowRight, CheckCircle } from "lucide-react"
import type { SpaceRental } from "@/lib/data"

export function SpaceDetailSection({ space }: { space: SpaceRental }) {
  const whatsappLink = `https://wa.me/971506266515?text=${encodeURIComponent(`Hi, I'm interested in "${space.name}" for rent. Please send more details.`)}`

  return (
    <section className="py-24 bg-[#0d0d1a]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Space Image */}
        <div className="aspect-video bg-[#1a1a2e] rounded-2xl border border-[#c8a35a]/15 mb-12 overflow-hidden">
          <img
            src={space.image}
            alt={space.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {space.fullDescription}
        </h2>

        <div className="space-y-4 mb-10">
          {space.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#c8a35a] flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-lg">{detail}</p>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gold-gradient text-[#0d0d1a] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Get a Quote <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
