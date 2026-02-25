import { CheckCircle } from "lucide-react"

interface CategoryHeroProps {
  title: string
  subtitle: string
  badges?: string[]
}

export function CategoryHero({ title, subtitle, badges }: CategoryHeroProps) {
  const defaultBadges = [
    "Well-maintained and operator-optional",
    "Short- and long-term rental",
    "Fast dispatch and reliable support",
    "Caterpillar and other trusted brands",
  ]

  const displayBadges = badges || defaultBadges

  return (
    <section className="relative pt-32 pb-20 bg-[#0d0d1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a] via-[#0f0f1a] to-[#0d0d1a]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#c8a35a]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {displayBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-[#1a1a2e] border border-[#c8a35a]/20 rounded-full px-5 py-2.5 text-sm text-gray-300"
            >
              <CheckCircle className="w-4 h-4 text-[#c8a35a]" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
