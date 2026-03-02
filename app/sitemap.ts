import type { MetadataRoute } from "next"
import { projectSectors } from "@/lib/data"
import { allCities } from "@/lib/areas"
import { keywordPages } from "@/lib/keyword-pages-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hadeedconstruction.com"
  const now = new Date()

  // --- Static pages ---
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]

  // --- Project sector pages ---
  const sectorPages: MetadataRoute.Sitemap = projectSectors.map((s) => ({
    url: `${baseUrl}/sectors/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // --- City pages (13 cities) ---
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // --- Area pages (~200 areas) ---
  const areaPages: MetadataRoute.Sitemap = allCities.flatMap((city) =>
    city.areas.map((area) => ({
      url: `${baseUrl}/${city.slug}/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  )

  // --- Keyword / service pages ---
  const keywordSeoPages: MetadataRoute.Sitemap = keywordPages.map((kw) => ({
    url: `${baseUrl}/services/${kw.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...sectorPages,
    ...cityPages,
    ...areaPages,
    ...keywordSeoPages,
  ]
}
