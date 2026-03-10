import type { MetadataRoute } from "next"
import { getSitemapCount } from "@/lib/sitemap-utils"

/**
 * Sitemap Index — generates /sitemap.xml pointing to child sitemaps
 * Each child contains max 100 URLs for optimal crawling.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hadeedconstruction.com"
  const count = getSitemapCount()
  const entries: MetadataRoute.Sitemap = []

  for (let i = 0; i < count; i++) {
    entries.push({
      url: `${baseUrl}/sitemap/${i}.xml`,
      lastModified: new Date(),
    })
  }

  return entries
}
