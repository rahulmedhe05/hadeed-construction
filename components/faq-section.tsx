"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/lib/data"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#0f0f1a]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#c8a35a] text-sm font-semibold tracking-[0.3em] uppercase">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Most Popular Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-xl overflow-hidden hover:border-[#c8a35a]/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#c8a35a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
