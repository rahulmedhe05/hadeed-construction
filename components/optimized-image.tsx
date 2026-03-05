"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

// Convert image path to WebP if available
function getOptimizedSrc(src: string): string {
  // If already webp or external URL, return as is
  if (src.endsWith('.webp') || src.startsWith('http')) {
    return src
  }
  // Convert jpg/jpeg/png to webp
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [error, setError] = useState(false)
  const optimizedSrc = error ? src : getOptimizedSrc(src)

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={() => setError(true)}
    />
  )
}

// Simple image component for backgrounds and galleries (uses native lazy loading)
export function LazyImage({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  const optimizedSrc = getOptimizedSrc(src)

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}
