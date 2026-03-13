import { steps } from "@/lib/data"
import { MessageSquare, FileText, HardHat, CheckCircle2, ArrowRight } from "lucide-react"

const stepIcons = [MessageSquare, FileText, HardHat, CheckCircle2]

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6">
            Your Project in <span className="text-[#2563eb]">4 Simple Steps</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From first call to final handover — a proven process built on
            25+ years of engineering excellence.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Timeline connector line */}
          <div className="relative">
            <div className="absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />
            <div className="absolute top-[60px] left-[12%] right-[12%] h-[2px] z-0">
              <div className="h-full w-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 opacity-40 blur-sm" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  {/* Numbered circle */}
                  <div className="relative mb-8">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full blue-gradient opacity-20 group-hover:opacity-40 scale-[1.4] group-hover:scale-[1.6] transition-all duration-500" />
                    <div className="relative w-[120px] h-[120px] rounded-full bg-white shadow-xl shadow-blue-500/10 border-2 border-blue-100 group-hover:border-blue-300 flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-blue-500/20 group-hover:-translate-y-1">
                      <Icon className="w-7 h-7 text-[#2563eb] mb-1.5" strokeWidth={1.8} />
                      <span className="text-[#2563eb] font-bold text-lg">{String(step.number).padStart(2, "0")}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300 w-full group-hover:-translate-y-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden md:block lg:hidden max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={step.number} className="relative group">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl blue-gradient flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                        {String(step.number).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {/* Arrow connectors */}
                  {i < steps.length - 1 && (
                    <div className={`absolute ${
                      i === 0 ? "-right-4 top-1/2 -translate-y-1/2" :
                      i === 1 ? "left-1/2 -bottom-4 -translate-x-1/2 rotate-90" :
                      "-right-4 top-1/2 -translate-y-1/2"
                    } text-blue-300 z-20`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400" />

            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <div key={step.number} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 top-6 w-[46px] h-[46px] rounded-full blue-gradient flex items-center justify-center shadow-lg shadow-blue-500/25 border-4 border-[#f1f5f9] z-10">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>

                    {/* Card */}
                    <div className="ml-8 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded-full">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="relative bg-white rounded-3xl p-10 md:p-14 max-w-3xl mx-auto shadow-sm border border-gray-100 overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto">
                From inquiry to delivery, Hadeed is your trusted partner.
                Get a free consultation and detailed proposal today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 blue-gradient text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+971506266515"
                  className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
