"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/lib/data"
import { FAQSchema } from "@/components/schema-markup"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  customFaqs?: FAQ[]
  title?: string
  subtitle?: string
}

export function FAQSection({ customFaqs, title = "Most Popular Questions", subtitle = "Common Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqList = customFaqs || faqs

  return (
    <section className="py-24 bg-[#f1f5f9]">
      <FAQSchema faqs={faqList} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] text-sm font-semibold tracking-[0.3em] uppercase">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-xl overflow-hidden hover:border-[#2563eb]/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-gray-900 font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2563eb] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
