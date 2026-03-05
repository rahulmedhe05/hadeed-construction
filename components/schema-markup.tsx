// JSON-LD Schema components for SEO and AI visibility

interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  provider?: string
  areaServed?: string[]
  image?: string
  url?: string
}

export function ServiceSchema({
  name,
  description,
  provider = "Hadeed Emirates Contracting Company",
  areaServed = ["UAE", "Qatar", "Jordan"],
  image,
  url,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://hadeedconstruction.com",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    ...(image && { image }),
    ...(url && { url }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hadeed Emirates Contracting Company",
    url: "https://hadeedconstruction.com",
    logo: "https://hadeedconstruction.com/logo.svg",
    description:
      "Leading construction company with 25+ years experience delivering industrial, commercial, and infrastructure projects across UAE, Qatar & Jordan.",
    foundingDate: "1999",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-50-626-6515",
      contactType: "sales",
      email: "info@hadeedconstruction.com",
      areaServed: ["AE", "QA", "JO"],
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://www.facebook.com/hadeedemirates",
      "https://www.instagram.com/hadeedemirates",
      "https://www.linkedin.com/company/hadeedemirates",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hadeedconstruction.com",
    name: "Hadeed Emirates Contracting Company",
    image: "https://hadeedconstruction.com/og-image.jpg",
    telephone: "+971-50-626-6515",
    email: "info@hadeedconstruction.com",
    url: "https://hadeedconstruction.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musaffah Industrial Area",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.3654,
      longitude: 54.5,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$$",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Jordan" },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
  breadcrumbs?: BreadcrumbItem[]
}

export function WebPageSchema({ title, description, url, breadcrumbs }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Hadeed Emirates Contracting",
      url: "https://hadeedconstruction.com",
    },
    ...(breadcrumbs && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
