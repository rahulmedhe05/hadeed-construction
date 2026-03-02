"use client"

import { useState } from "react"
import { Send, Phone, CheckCircle } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"

interface BookingFormProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

export function BookingForm({
  title = "Request a Free Quote",
  subtitle = "Get a callback within 30 minutes",
  compact = false,
}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const waText = `Hi, I'm ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waText)}`,
      "_blank"
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Requested!</h3>
        <p className="text-gray-600">We&apos;ll contact you within 30 minutes.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Form Header */}
      <div className="blue-gradient px-6 py-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-blue-100 text-sm">{subtitle}</p>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="tel"
            placeholder="Phone *"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
        </div>

        <div>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          >
            <option value="">Select Service Type</option>
            <option value="General Industrial Developments">General Industrial Developments</option>
            <option value="Logistics & Warehousing">Logistics & Warehousing</option>
            <option value="Pharmaceutical & Healthcare Facilities">Pharmaceutical & Healthcare Facilities</option>
            <option value="Education & Institutional Buildings">Education & Institutional Buildings</option>
            <option value="Oil & Gas Facilities">Oil & Gas Facilities</option>
            <option value="Commercial & Retail Developments">Commercial & Retail Developments</option>
            <option value="Residential Buildings">Residential Buildings</option>
            <option value="Energy & Solar Projects">Energy & Solar Projects</option>
            <option value="Villas & Premium Residential">Villas & Premium Residential</option>
            <option value="Military & Defense Facilities">Military & Defense Facilities</option>
            <option value="Aviation & Airport Facilities">Aviation & Airport Facilities</option>
            <option value="Ports & Marine Facilities">Ports & Marine Facilities</option>
            <option value="Free Zone Developments">Free Zone Developments</option>
            <option value="Infrastructure Works">Infrastructure Works</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {!compact && (
          <div>
            <textarea
              placeholder="Brief project details..."
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full blue-gradient text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Get Free Quote
        </button>

        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gray-200 text-gray-700 rounded-lg font-medium text-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Or Call {SITE_CONFIG.phone}
        </a>
      </form>
    </div>
  )
}
