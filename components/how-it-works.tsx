import { steps } from "@/lib/data"
import { MessageSquare, FileText, HardHat, CheckCircle2, ArrowRight, Phone } from "lucide-react"

const stepIcons = [MessageSquare, FileText, HardHat, CheckCircle2]

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0f1729] overflow-hidden relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `
          linear-gradient(rgba(96,165,250,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      {/* Subtle radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase border border-blue-500/30 px-4 py-1.5 rounded-full bg-blue-500/10">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            How We Build <span className="text-blue-400">Your Vision</span>
          </h2>
          <p className="mt-6 text-blue-200/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A proven 4-step process built on 25+ years of engineering excellence —
            from first call to final handover.
          </p>
        </div>

        {/* Desktop: Winding blueprint road */}
        <div className="hidden lg:block max-w-5xl mx-auto relative">
          {/* SVG winding dashed road */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 520"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              d="M 160 80 C 300 80, 350 80, 500 80 C 650 80, 700 80, 840 80 
                 C 920 80, 940 140, 880 180 
                 C 780 240, 600 260, 500 260 C 400 260, 220 240, 160 260 
                 C 80 290, 80 340, 160 380 
                 C 260 420, 400 440, 500 440 C 600 440, 700 440, 840 440"
              stroke="rgba(96,165,250,0.25)"
              strokeWidth="3"
              strokeDasharray="12 8"
            />
            {/* Glow path */}
            <path
              d="M 160 80 C 300 80, 350 80, 500 80 C 650 80, 700 80, 840 80 
                 C 920 80, 940 140, 880 180 
                 C 780 240, 600 260, 500 260 C 400 260, 220 240, 160 260 
                 C 80 290, 80 340, 160 380 
                 C 260 420, 400 440, 500 440 C 600 440, 700 440, 840 440"
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>

          {/* Step nodes positioned along the road */}
          <div className="relative z-10" style={{ minHeight: "520px" }}>
            {/* Step 1 — top-left */}
            <div className="absolute" style={{ left: "4%", top: "0px" }}>
              <StepCard step={steps[0]} icon={stepIcons[0]} index={0} />
            </div>

            {/* Step 2 — top-right */}
            <div className="absolute" style={{ right: "4%", top: "0px" }}>
              <StepCard step={steps[1]} icon={stepIcons[1]} index={1} />
            </div>

            {/* Step 3 — middle-left */}
            <div className="absolute" style={{ left: "4%", top: "200px" }}>
              <StepCard step={steps[2]} icon={stepIcons[2]} index={2} />
            </div>

            {/* Step 4 — bottom-right */}
            <div className="absolute" style={{ right: "4%", top: "370px" }}>
              <StepCard step={steps[3]} icon={stepIcons[3]} index={3} />
            </div>
          </div>
        </div>

        {/* Tablet: 2-column zigzag */}
        <div className="hidden md:block lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical dashed line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-blue-500/25 -translate-x-1/2" />
            
            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = stepIcons[i]
                const isLeft = i % 2 === 0
                return (
                  <div key={step.number} className={`flex ${isLeft ? "justify-start pr-[52%]" : "justify-end pl-[52%]"} relative`}>
                    {/* Center dot */}
                    <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0f1729] z-10" />
                    
                    <div className="bg-[#1a2744] border border-blue-500/20 rounded-2xl p-5 hover:border-blue-400/40 transition-all group w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-lg bg-blue-500/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-400" strokeWidth={2} />
                        </div>
                        <span className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                          {String(step.number).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-blue-200/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical blueprint timeline */}
        <div className="md:hidden">
          <div className="relative pl-12">
            {/* Vertical dashed road */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-blue-500/30" />

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <div key={step.number} className="relative">
                    {/* Road node */}
                    <div className="absolute -left-12 top-5 w-[38px] h-[38px] rounded-full bg-[#1a2744] border-2 border-blue-500/40 flex items-center justify-center z-10">
                      <Icon className="w-4 h-4 text-blue-400" strokeWidth={2} />
                    </div>

                    <div className="bg-[#1a2744] border border-blue-500/15 rounded-xl p-5 hover:border-blue-400/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-blue-200/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="relative bg-[#1a2744] rounded-3xl p-10 md:p-14 max-w-3xl mx-auto border border-blue-500/15 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1)_0%,transparent_60%)]" />
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-200/50 mb-8 leading-relaxed max-w-xl mx-auto">
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
                  className="inline-flex items-center gap-2 bg-white/5 text-blue-200 px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors border border-blue-500/20"
                >
                  <Phone className="w-4 h-4" />
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

function StepCard({ step, icon: Icon, index }: { step: typeof steps[0]; icon: typeof stepIcons[0]; index: number }) {
  return (
    <div className="group w-[280px]">
      <div className="flex items-center gap-4 mb-3">
        {/* Glowing node */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity scale-150" />
          <div className="relative w-14 h-14 rounded-full bg-[#1a2744] border-2 border-blue-500/40 group-hover:border-blue-400 flex items-center justify-center transition-all">
            <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.8} />
          </div>
        </div>
        <span className="text-5xl font-black text-blue-500/15 group-hover:text-blue-500/25 transition-colors select-none">
          {String(step.number).padStart(2, "0")}
        </span>
      </div>
      <div className="bg-[#1a2744]/80 backdrop-blur-sm border border-blue-500/15 rounded-xl p-5 group-hover:border-blue-400/30 group-hover:bg-[#1e2f50]/80 transition-all">
        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
        <p className="text-blue-200/50 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}
