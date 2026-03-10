import { steps } from "@/lib/data"

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Simple Steps to Get What You Need
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore top-tier construction equipment and rental solutions designed
            to drive your projects forward efficiently and smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 flex items-start gap-5 hover:border-[#2563eb]/40 transition-all group"
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-full blue-gradient flex items-center justify-center text-[#ffffff] font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Premium services for your needs
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide reliable, high-performance equipment and secure space
              rentals to support projects of every scale. From inquiry to delivery,
              Hadeed is your trusted partner every step of the way.
            </p>
            <a
              href="/contact-us"
              className="inline-block blue-gradient text-[#ffffff] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
