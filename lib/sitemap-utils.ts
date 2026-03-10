import { projectSectors } from "@/lib/data"
import { allCities } from "@/lib/areas"
import { keywordPages } from "@/lib/keyword-pages-data"

const BASE_URL = "https://hadeedconstruction.com"
const URLS_PER_SITEMAP = 100

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
}

/** Gather every URL the site exposes */
export function getAllUrls(): SitemapEntry[] {
  const now = new Date()

  const staticPages: SitemapEntry[] = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]

  const sectorPages: SitemapEntry[] = projectSectors.map((s) => ({
    url: `${BASE_URL}/sectors/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const cityPages: SitemapEntry[] = allCities.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const areaPages: SitemapEntry[] = allCities.flatMap((city) =>
    city.areas.map((area) => ({
      url: `${BASE_URL}/${city.slug}/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  )

  const keywordSeoPages: SitemapEntry[] = keywordPages.map((kw) => ({
    url: `${BASE_URL}/services/${kw.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...sectorPages, ...cityPages, ...areaPages, ...keywordSeoPages]
}

/** How many child sitemaps we need */
export function getSitemapCount(): number {
  return Math.ceil(getAllUrls().length / URLS_PER_SITEMAP)
}

/** Get the URLs for a specific child sitemap (0-indexed) */
export function getUrlsForSitemap(index: number): SitemapEntry[] {
  const all = getAllUrls()
  const start = index * URLS_PER_SITEMAP
  return all.slice(start, start + URLS_PER_SITEMAP)
}

/** Get all raw URL strings (for indexing API bulk submit) */
export function getAllUrlStrings(): string[] {
  return getAllUrls().map((e) => e.url)
}
