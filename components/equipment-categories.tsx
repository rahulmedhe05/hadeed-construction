import Link from "next/link"
import { ArrowRight, Truck, Wrench } from "lucide-react"
import { equipmentCategories } from "@/lib/data"

const icons = [Truck, Wrench]

export function EquipmentCategories() {
  return (
    <section className="py-24 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Heavy equipment solutions according to your needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipmentCategories.map((cat, idx) => {
            const Icon = icons[idx] || Truck
            return (
              <div
                key={cat.slug}
                className="group bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl overflow-hidden hover:border-[#c8a35a]/40 transition-all"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#c8a35a]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8a35a]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#c8a35a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                  <Link
                    href={`/equipments/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-[#c8a35a] font-semibold hover:gap-3 transition-all"
                  >
                    Browse Equipment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
