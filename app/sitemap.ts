import type { MetadataRoute } from "next"
import { equipmentCategories, spaceRentals } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hadeed-transport.com"

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/equipments`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/space-rentals`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ]

  const equipmentPages = equipmentCategories.map((cat) => ({
    url: `${baseUrl}/equipments/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const spacePages = spaceRentals.map((space) => ({
    url: `${baseUrl}/space-rentals/${space.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...equipmentPages, ...spacePages]
}
