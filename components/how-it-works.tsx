import { steps } from "@/lib/data"

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Simple Steps to Get What You Need
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore top-tier construction equipment and rental solutions designed
            to drive your projects forward efficiently and smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl p-8 text-center hover:border-[#c8a35a]/40 transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center text-[#0d0d1a] font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Premium services for your needs
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We provide reliable, high-performance equipment and secure space
              rentals to support projects of every scale. From inquiry to delivery,
              Hadeed is your trusted partner every step of the way.
            </p>
            <a
              href="/contact-us"
              className="inline-block gold-gradient text-[#0d0d1a] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
