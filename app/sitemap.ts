import type { MetadataRoute } from "next"
import { getSitemapCount, getUrlsForSitemap } from "@/lib/sitemap-utils"

export async function generateSitemaps() {
  const count = getSitemapCount()
  return Array.from({ length: count }, (_, i) => ({ id: i }))
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const urls = getUrlsForSitemap(id)

  return urls.map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
