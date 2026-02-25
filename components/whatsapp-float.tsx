"use client"

import { MessageCircle } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"

export function WhatsAppFloat() {
  return (
    <a
      href={`https://web.whatsapp.com/send?phone=${SITE_CONFIG.whatsapp}&text=`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
