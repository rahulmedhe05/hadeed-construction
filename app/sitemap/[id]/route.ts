import { NextResponse } from "next/server"
import { getSitemapCount, getUrlsForSitemap } from "@/lib/sitemap-utils"

export async function generateStaticParams() {
  const count = getSitemapCount()
  return Array.from({ length: count }, (_, i) => ({ id: String(i) }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const index = parseInt(id, 10)
  const count = getSitemapCount()

  if (isNaN(index) || index < 0 || index >= count) {
    return new NextResponse("Not Found", { status: 404 })
  }

  const urls = getUrlsForSitemap(index)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
