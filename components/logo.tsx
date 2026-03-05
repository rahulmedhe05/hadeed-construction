import React from "react"
import Image from "next/image"

interface LogoIconProps {
  size?: number
  className?: string
}

// Logo icon using the actual company logo image
export function LogoIcon({ size = 40, className = "" }: LogoIconProps) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Hadeed Emirates Contracting Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  )
}

interface LogoProps {
  showText?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ showText = true, size = "md", className = "" }: LogoProps) {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 56,
  }

  const textSizes = {
    sm: { title: "text-base", subtitle: "text-[8px]" },
    md: { title: "text-lg", subtitle: "text-[10px]" },
    lg: { title: "text-2xl", subtitle: "text-xs" },
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon size={iconSizes[size]} />
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size].title} font-bold text-gray-900 leading-tight`}>
            Hadeed<span className="text-[#0076c0]"> Emirates</span>
          </span>
          <span
            className={`${textSizes[size].subtitle} text-gray-600 tracking-wider uppercase leading-tight`}
          >
            Contracting Company
          </span>
        </div>
      )}
    </div>
  )
}
