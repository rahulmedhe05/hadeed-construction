import React from "react"

interface LogoIconProps {
  size?: number
  className?: string
}

// Stylized H logo with diagonal red/blue split - matching the original logo.jpeg
export function LogoIcon({ size = 40, className = "" }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <clipPath id="logoLeftClip">
          <polygon points="0,0 32,0 0,32" />
        </clipPath>
        <clipPath id="logoRightClip">
          <polygon points="32,0 32,32 0,32" />
        </clipPath>
      </defs>
      {/* Blue H (top-left triangle) */}
      <g clipPath="url(#logoLeftClip)">
        <rect width="32" height="32" fill="#0076c0" />
        <path
          d="M6,4 L6,28 L11,28 L11,18 L21,18 L21,28 L26,28 L26,4 L21,4 L21,14 L11,14 L11,4 Z"
          fill="white"
        />
      </g>
      {/* Red H (bottom-right triangle) */}
      <g clipPath="url(#logoRightClip)">
        <rect width="32" height="32" fill="#ee3425" />
        <path
          d="M6,4 L6,28 L11,28 L11,18 L21,18 L21,28 L26,28 L26,4 L21,4 L21,14 L11,14 L11,4 Z"
          fill="white"
        />
      </g>
    </svg>
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
