import { NextRequest, NextResponse } from "next/server"
import { getAllUrlStrings } from "@/lib/sitemap-utils"

/**
 * Google Indexing API integration.
 *
 * Environment variables required:
 *   GOOGLE_INDEXING_CLIENT_EMAIL  – service account email
 *   GOOGLE_INDEXING_PRIVATE_KEY   – service account private key (PEM)
 *   INDEXING_API_SECRET           – secret token to protect this endpoint
 *
 * Usage:
 *   POST /api/index
 *   Body: { "urls": ["https://..."], "type": "URL_UPDATED" }
 *   Header: Authorization: Bearer <INDEXING_API_SECRET>
 *
 *   POST /api/index?bulk=true
 *   Submits ALL sitemap URLs (rate-limited to 200/day by Google)
 */

async function getAccessToken(): Promise<string> {
  const clientEmail = process.env.GOOGLE_INDEXING_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY?.replace(/\\n/g, "\n")

  if (!clientEmail || !privateKey) {
    throw new Error("Missing GOOGLE_INDEXING_CLIENT_EMAIL or GOOGLE_INDEXING_PRIVATE_KEY")
  }

  // Build JWT
  const header = { alg: "RS256", typ: "JWT" }
  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }

  const encoder = new TextEncoder()

  function base64url(data: Uint8Array): string {
    let binary = ""
    for (const byte of data) binary += String.fromCharCode(byte)
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
  }

  const headerB64 = base64url(encoder.encode(JSON.stringify(header)))
  const payloadB64 = base64url(encoder.encode(JSON.stringify(payload)))
  const signingInput = `${headerB64}.${payloadB64}`

  // Import private key and sign
  const pemBody = privateKey
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "")
  const binaryKey = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0))

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  )

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    encoder.encode(signingInput)
  )

  const jwt = `${signingInput}.${base64url(new Uint8Array(signature))}`

  // Exchange JWT for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  if (!tokenRes.ok) {
    const err = await tokenRes.text()
    throw new Error(`Token exchange failed: ${err}`)
  }

  const { access_token } = await tokenRes.json()
  return access_token
}

async function notifyGoogle(
  accessToken: string,
  url: string,
  type: "URL_UPDATED" | "URL_DELETED"
) {
  const res = await fetch(
    "https://indexing.googleapis.com/v3/urlNotifications:publish",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ url, type }),
    }
  )
  const data = await res.json()
  return { url, status: res.status, data }
}

export async function POST(request: NextRequest) {
  // Auth check
  const secret = process.env.INDEXING_API_SECRET
  if (!secret) {
    return NextResponse.json({ error: "Indexing API not configured" }, { status: 500 })
  }

  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const accessToken = await getAccessToken()
    const isBulk = request.nextUrl.searchParams.get("bulk") === "true"

    if (isBulk) {
      // Submit all sitemap URLs
      const allUrls = getAllUrlStrings()
      // Google allows ~200 requests/day — limit to 200
      const batch = allUrls.slice(0, 200)
      const results = []

      for (const url of batch) {
        const result = await notifyGoogle(accessToken, url, "URL_UPDATED")
        results.push(result)
      }

      return NextResponse.json({
        submitted: results.length,
        total: allUrls.length,
        results,
      })
    }

    // Single/specific URLs
    const body = await request.json()
    const urls: string[] = body.urls || []
    const type: "URL_UPDATED" | "URL_DELETED" = body.type || "URL_UPDATED"

    if (!urls.length) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 })
    }

    const results = []
    for (const url of urls.slice(0, 200)) {
      const result = await notifyGoogle(accessToken, url, type)
      results.push(result)
    }

    return NextResponse.json({ submitted: results.length, results })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
