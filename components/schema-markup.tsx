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
    description:
      "Leading construction & contracting company with 25+ years experience delivering industrial, commercial, and infrastructure projects across UAE, Qatar & Jordan. 400+ projects, 1.5M+ sqm constructed.",
    foundingDate: "1999",
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
    currenciesAccepted: "AED, QAR, JOD",
    paymentAccepted: "Cash, Bank Transfer, Cheque",
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Jordan" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Al Ain" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Umm Al Quwain" },
      { "@type": "City", name: "Doha" },
      { "@type": "City", name: "Amman" },
      { "@type": "City", name: "Aqaba" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Contracting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Building Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil & Gas Facility Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infrastructure Works" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEP Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Steel Structure Fabrication" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renewable Energy Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marine & Port Construction" } },
      ],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 200,
      maxValue: 500,
    },
    knowsAbout: [
      "Industrial Construction",
      "Commercial Construction",
      "Infrastructure Development",
      "Oil & Gas Facilities",
      "Warehouse & Logistics",
      "Renewable Energy",
      "Marine & Ports",
      "Military & Aviation",
      "Residential Villas",
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
