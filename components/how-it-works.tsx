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

        {/* Matrix layout with arrows */}
        <div className="max-w-4xl mx-auto relative">
          {/* Desktop: 2x2 grid with SVG arrows */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-x-28 gap-y-20 relative">
              {/* SVG Arrows overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
                  </marker>
                </defs>
                {/* Arrow 1→2 (short diagonal, top row) */}
                <line
                  x1="47%" y1="24%" x2="53%" y2="20%"
                  stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrowhead)"
                />
                {/* Arrow 2→3 (short diagonal, right to left down) */}
                <line
                  x1="53%" y1="42%" x2="47%" y2="58%"
                  stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrowhead)"
                />
                {/* Arrow 3→4 (short diagonal, bottom row) */}
                <line
                  x1="47%" y1="80%" x2="53%" y2="76%"
                  stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrowhead)"
                />
              </svg>

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative bg-white shadow-sm border border-[#2563eb]/15 rounded-2xl p-7 hover:border-[#2563eb]/40 hover:shadow-md transition-all group z-20"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 flex-shrink-0 rounded-full blue-gradient flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical flow with arrows */}
          <div className="md:hidden flex flex-col items-center gap-3">
            {steps.map((step, i) => (
              <div key={step.number} className="w-full">
                <div className="relative bg-white shadow-sm border border-[#2563eb]/15 rounded-2xl p-6 hover:border-[#2563eb]/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full blue-gradient flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg width="24" height="28" viewBox="0 0 24 28">
                      <line x1="12" y1="2" x2="12" y2="22" stroke="#2563eb" strokeWidth="2.5" />
                      <polygon points="6,20 12,28 18,20" fill="#2563eb" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white shadow-sm border border-[#2563eb]/15 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
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
              className="inline-block blue-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
