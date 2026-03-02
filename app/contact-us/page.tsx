"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SITE_CONFIG } from "@/lib/data"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message from form data
    const msg = `Hi, I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType || 'Not specified'}\nMessage: ${formData.message}`
    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-1.jpg" alt="Contact Hadeed Emirates" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for construction, contracting, and project consultation across UAE, Qatar, and Jordan.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#ffffff] border border-[#2563eb]/20 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#ffffff] border border-[#2563eb]/20 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#ffffff] border border-[#2563eb]/20 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full bg-[#ffffff] border border-[#2563eb]/20 rounded-xl px-4 py-3 text-gray-900 focus:border-[#2563eb] focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="General Industrial Developments">General Industrial Developments</option>
                    <option value="Logistics & Warehousing">Logistics & Warehousing</option>
                    <option value="Pharmaceutical & Healthcare">Pharmaceutical & Healthcare Facilities</option>
                    <option value="Education & Institutional">Education & Institutional Buildings</option>
                    <option value="Oil & Gas Facilities">Oil & Gas Facilities</option>
                    <option value="Commercial & Retail">Commercial & Retail Developments</option>
                    <option value="Residential Buildings">Residential Buildings</option>
                    <option value="Energy & Solar Projects">Energy & Solar Projects</option>
                    <option value="Villas & Premium Residential">Villas & Premium Residential</option>
                    <option value="Military & Defense">Military & Defense Facilities</option>
                    <option value="Aviation & Airport">Aviation & Airport Facilities</option>
                    <option value="Ports & Marine">Ports & Marine Facilities</option>
                    <option value="Free Zone Developments">Free Zone Developments</option>
                    <option value="Infrastructure Works">Infrastructure Works</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#ffffff] border border-[#2563eb]/20 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2563eb] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full blue-gradient text-[#ffffff] py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-8">
              <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-gray-900 hover:text-[#2563eb] transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Phone / WhatsApp</p>
                      <a
                        href={`tel:+${SITE_CONFIG.whatsapp}`}
                        className="text-gray-900 hover:text-[#2563eb] transition-colors"
                      >
                        +971 50 626 6515
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Location</p>
                      <p className="text-gray-900">{SITE_CONFIG.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-[#ffffff] shadow-sm border border-[#2563eb]/15 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29062.06087610218!2d54.48!3d24.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41c8c4b0dc5b%3A0x6f2c2b9e1a23e0c0!2sICAD%20III%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hadeed Emirates Contracting - Abu Dhabi, UAE"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
