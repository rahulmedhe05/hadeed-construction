// ============================================================
// SEO Keyword Pages Data
// 200 High-Value Keywords for Equipment & Space Rental in UAE
// ============================================================

export interface KeywordPage {
  slug: string
  keyword: string
  h1: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string
  introParagraph: string
  secondParagraph: string
  category: "equipment" | "space" | "service" | "location" | "industry"
  relatedSlugs: string[]
  features: string[]
  faqs: { question: string; answer: string }[]
  tags: string[]
}

// ────────────────────────────────────────────────
// Helper to generate consistent content
// ────────────────────────────────────────────────

function kw(
  slug: string,
  keyword: string,
  category: KeywordPage["category"],
  {
    h1,
    metaTitle,
    metaDescription,
    heroSubtitle,
    intro,
    second,
    features,
    faqs,
    tags,
    relatedSlugs,
  }: {
    h1?: string
    metaTitle?: string
    metaDescription?: string
    heroSubtitle?: string
    intro?: string
    second?: string
    features?: string[]
    faqs?: { question: string; answer: string }[]
    tags?: string[]
    relatedSlugs?: string[]
  } = {}
): KeywordPage {
  const defaultH1 = h1 || `${keyword} | Hadeed Transport`
  const defaultMetaTitle =
    metaTitle || `${keyword} in UAE | Hadeed Transport – Rent Now`
  const defaultMetaDescription =
    metaDescription ||
    `Looking for ${keyword.toLowerCase()} in UAE? Hadeed Transport offers well-maintained equipment, competitive rates & fast delivery across Abu Dhabi, Dubai & Sharjah. Call +971506266515.`
  const defaultHeroSubtitle =
    heroSubtitle ||
    `Professional ${keyword.toLowerCase()} services across Abu Dhabi, Dubai, Sharjah & all UAE. Fast delivery, competitive rates, and 15+ years of trusted experience.`
  const defaultIntro =
    intro ||
    `Hadeed Transport is the UAE's trusted provider for ${keyword.toLowerCase()}. With over 15 years of experience in the construction and rental industry, we deliver reliable, well-maintained equipment and services to project sites across Abu Dhabi, Dubai, Sharjah, and the wider UAE. Our commitment to quality, safety, and on-time delivery has made us the preferred partner for contractors, developers, and businesses throughout the region.`
  const defaultSecond =
    second ||
    `Whether you need ${keyword.toLowerCase()} for a short-term project or a long-term contract, our flexible rental terms and competitive pricing ensure you get the best value. We offer daily, weekly, and monthly rental options, with same-day delivery available from our ICAD III base in Abu Dhabi. Our team of equipment specialists is ready to help you choose the right solution for your specific requirements.`
  const defaultFeatures = features || [
    "Extensive fleet of well-maintained equipment",
    "Flexible daily, weekly, and monthly rental terms",
    "Fast delivery across Abu Dhabi, Dubai & Sharjah",
    "Competitive pricing with no hidden charges",
    "Trained operators available on request",
    "24/7 customer support and technical assistance",
  ]
  const defaultFaqs = faqs || [
    {
      question: `What does ${keyword.toLowerCase()} include?`,
      answer: `Our ${keyword.toLowerCase()} services include delivery, setup, and pickup of equipment. Trained operators are available on request. We provide flexible rental terms to suit your project timeline and budget.`,
    },
    {
      question: `How much does ${keyword.toLowerCase()} cost in the UAE?`,
      answer: `Pricing depends on the specific equipment, rental duration, and delivery location. We offer competitive rates across the UAE. Contact us via WhatsApp at +971506266515 or call for a free, personalized quote.`,
    },
    {
      question: `Where can I get ${keyword.toLowerCase()} near me?`,
      answer: `Hadeed Transport delivers ${keyword.toLowerCase()} across Abu Dhabi, Dubai, Sharjah, and the entire UAE. Based in ICAD III, Abu Dhabi, we offer same-day delivery for most equipment and services.`,
    },
    {
      question: `Do you provide operators with the equipment?`,
      answer: `Yes, we provide trained and certified operators for most heavy equipment. This ensures safe and efficient operations on your project site. Operator availability and costs will be included in your quote.`,
    },
  ]

  return {
    slug,
    keyword,
    h1: defaultH1,
    metaTitle: defaultMetaTitle,
    metaDescription: defaultMetaDescription,
    heroSubtitle: defaultHeroSubtitle,
    introParagraph: defaultIntro,
    secondParagraph: defaultSecond,
    category,
    relatedSlugs: relatedSlugs || [],
    features: defaultFeatures,
    faqs: defaultFaqs,
    tags: tags || [keyword],
  }
}

// ============================================================
// ALL 200 KEYWORD PAGES
// ============================================================

export const keywordPages: KeywordPage[] = [
  // ── EQUIPMENT RENTAL KEYWORDS (1-50) ──────────────────────
  kw("crane-rental-uae", "Crane Rental UAE", "equipment", {
    h1: "Crane Rental in UAE – 25 to 50 Ton Mobile Cranes",
    intro: "Need a crane for your construction project? Hadeed Transport offers mobile crane rental services across the UAE, featuring 25-ton and 50-ton cranes with certified operators. Whether it's for high-rise construction in Dubai, industrial lifting in Abu Dhabi, or infrastructure projects in Sharjah, our crane fleet delivers the lifting power your project demands.",
    features: ["25 and 50 ton mobile cranes available", "Certified crane operators included", "360-degree rotation for maximum flexibility", "Load moment indicators for safe lifting", "Same-day deployment available", "24/7 support for critical lifts"],
    tags: ["crane rental", "mobile crane", "crane hire uae"],
  }),
  kw("excavator-rental-uae", "Excavator Rental UAE", "equipment", {
    h1: "Excavator Rental in UAE – Multiple Sizes Available",
    intro: "Hadeed Transport provides excavator rental services across the UAE for excavation, trenching, grading, and earthmoving projects. Our fleet includes backhoe loaders, mini excavators, and full-size excavators suitable for any project scale. All equipment is well-maintained and available with experienced operators.",
    features: ["Mini and full-size excavators available", "Backhoe loaders for versatile operations", "Certified operators on request", "Reinforced buckets for heavy-duty work", "Climate-controlled cabins", "Fast delivery across UAE"],
    tags: ["excavator rental", "backhoe rental", "excavator hire"],
  }),
  kw("forklift-rental-uae", "Forklift Rental UAE", "equipment", {
    h1: "Forklift Rental in UAE – 1 to 15 Ton Capacity",
    intro: "Rent forklifts from 1 ton to 15 ton capacity from Hadeed Transport. Our forklift fleet serves warehouses, construction sites, industrial plants, and logistics operations across Abu Dhabi, Dubai, and Sharjah. Choose from diesel and electric models to match your specific material handling requirements.",
    features: ["1 to 15 ton capacity range", "Diesel and electric models", "Rough terrain options available", "Ergonomic operator controls", "Daily, weekly, and monthly rental", "Delivered to your location"],
    tags: ["forklift rental", "forklift hire", "forklift rent uae"],
  }),
  kw("generator-rental-uae", "Generator Rental UAE", "equipment", {
    h1: "Generator Rental in UAE – 10 KVA to 500 KVA",
    intro: "Hadeed Transport offers generator rental services from 10 KVA to 500 KVA across the UAE. Whether you need temporary power for a construction site, backup for an event, or emergency power supply, our generators deliver reliable performance in the demanding UAE climate.",
    features: ["10 KVA to 500 KVA capacity range", "Low-noise models for events", "Automatic voltage regulation", "Fuel-efficient diesel engines", "Weather-resistant enclosures", "24/7 emergency support"],
    tags: ["generator rental", "generator hire", "power generator rent"],
  }),
  kw("manlift-rental-uae", "Manlift Rental UAE", "equipment", {
    h1: "Manlift & Aerial Platform Rental in UAE",
    intro: "Access elevated work areas safely with Hadeed Transport's manlift rental services across the UAE. We offer low-level and high-level manlifts for building maintenance, facade work, electrical installation, painting, and industrial inspections. All units are inspected, certified, and ready for deployment.",
    features: ["Low and high level manlifts available", "Reach heights of 20+ meters", "Non-slip platforms with safety rails", "Emergency lowering systems", "Indoor and outdoor models", "Certified for UAE safety standards"],
    tags: ["manlift rental", "aerial platform hire", "cherry picker rental"],
  }),
  kw("water-tanker-rental-uae", "Water Tanker Rental UAE", "equipment", {
    h1: "Water Tanker Rental in UAE – 3,000 to 5,000 Gallons",
    intro: "Hadeed Transport provides water tanker rental services across the UAE for construction sites, dust suppression, landscaping, and emergency water supply. Our tankers come with experienced drivers and are available for scheduled or on-demand delivery across Abu Dhabi, Dubai, and Sharjah.",
    features: ["3,000 and 5,000 gallon tankers", "Experienced drivers included", "Scheduled delivery services", "Dust suppression solutions", "Construction site water supply", "Emergency water delivery"],
    tags: ["water tanker rental", "water tanker hire", "water supply uae"],
  }),
  kw("roller-compactor-rental-uae", "Roller & Compactor Rental UAE", "equipment", {
    h1: "Road Roller & Compactor Rental in UAE",
    intro: "Rent road rollers and compactors from Hadeed Transport for earthwork, road construction, and soil compaction projects across the UAE. Our fleet includes driving rollers from 1 to 4 tons, plate compactors, and jumping jack compactors to suit any compaction requirement.",
    features: ["1 to 4 ton driving rollers", "Plate compactors available", "Jumping jack compactors", "Vibrating drums for compaction", "Fuel-efficient operation", "Delivery anywhere in UAE"],
    tags: ["roller rental", "compactor rental", "road roller hire"],
  }),
  kw("concrete-mixer-rental-uae", "Concrete Mixer Rental UAE", "equipment", {
    h1: "Concrete Mixer Rental in UAE – Petrol & Electric",
    intro: "Hadeed Transport offers concrete mixer rental services across the UAE. Our petrol and electric concrete mixers are perfect for small to medium concrete works on construction sites. We also provide concrete vibrators and power floats for a complete concrete solution.",
    features: ["Petrol and electric models", "Various capacity options", "Concrete vibrators available", "Power floats for finishing", "Easy to operate", "Delivered to your site"],
    tags: ["concrete mixer rental", "mixer hire", "concrete equipment uae"],
  }),
  kw("scaffolding-rental-uae", "Scaffolding Rental UAE", "equipment", {
    h1: "Scaffolding Rental in UAE – Heavy & Light Duty",
    intro: "Rent heavy and light duty scaffolding from Hadeed Transport for building construction, facade work, painting, and maintenance projects across the UAE. Our modular scaffolding systems are galvanized for durability and certified to UAE safety standards.",
    features: ["Heavy and light duty options", "Galvanized steel construction", "Modular and flexible design", "Safety-certified to UAE standards", "Erection and dismantling available", "Full accessories included"],
    tags: ["scaffolding rental", "scaffolding hire", "scaffold rent uae"],
  }),
  kw("jack-hammer-rental-uae", "Jack Hammer Rental UAE", "equipment", {
    h1: "Jack Hammer Rental in UAE – Various Sizes",
    intro: "Need a jack hammer for demolition or concrete breaking? Hadeed Transport provides jack hammer rental in various sizes across the UAE. Whether you're breaking concrete, removing foundations, or demolishing structures, our jack hammers deliver powerful performance.",
    features: ["Various sizes available", "Pneumatic and electric options", "High impact breaking force", "Ergonomic design", "Point and chisel bits included", "Same-day delivery"],
    tags: ["jack hammer rental", "jackhammer hire", "concrete breaker rent"],
  }),
  kw("air-compressor-rental-uae", "Air Compressor Rental UAE", "equipment", {
    h1: "Air Compressor Rental in UAE – 300 to 900 CFM",
    intro: "Hadeed Transport offers diesel and electric air compressor rental from 300 to 900 CFM across the UAE. Our compressors power sandblasting, pneumatic tools, spray painting, and industrial cleaning operations on construction and industrial sites.",
    features: ["300 to 900 CFM capacity", "Diesel and electric models", "Portable and trailer-mounted", "Oil-free options available", "Aftercooler and separator included", "Suitable for all pneumatic tools"],
    tags: ["air compressor rental", "compressor hire", "pneumatic equipment uae"],
  }),
  kw("dewatering-pump-rental-uae", "Dewatering Pump Rental UAE", "equipment", {
    h1: "Dewatering Pump & System Rental in UAE",
    intro: "Keep your construction site dry with Hadeed Transport's dewatering pump rental services across the UAE. Our high-capacity pumps handle foundation dewatering, flood drainage, and groundwater management for projects of all sizes.",
    features: ["High-capacity dewatering systems", "Submersible and surface pumps", "Handles dirty water with solids", "Quick-connect hose fittings", "24/7 emergency availability", "Complete system with accessories"],
    tags: ["dewatering pump rental", "pump hire", "site dewatering uae"],
  }),
  kw("survey-equipment-rental-uae", "Survey Equipment Rental UAE", "equipment", {
    h1: "Survey Equipment Rental in UAE – Total Stations & Levels",
    intro: "Rent professional survey equipment from Hadeed Transport including total stations, auto levels, and laser levels. Our calibrated instruments are perfect for construction layout, land surveys, road alignment, and elevation work across the UAE.",
    features: ["Total stations (Leica TC405)", "Auto level machines", "Laser level instruments", "Calibrated before every rental", "Tripod and accessories included", "Technical support available"],
    tags: ["survey equipment rental", "total station hire", "laser level rent"],
  }),
  kw("steel-bending-machine-rental-uae", "Steel Bending Machine Rental UAE", "equipment", {
    h1: "Steel Bending Machine Rental in UAE",
    intro: "Speed up your steel reinforcement work with Hadeed Transport's steel bending machine and steel cutter rental services across the UAE. Our electric machines handle various rebar sizes and deliver precise bending angles for foundation, column, and slab reinforcement work.",
    features: ["Electric steel bending machines", "Steel cutters available", "Various rebar sizes", "Safety guards included", "Portable for on-site use", "High production capacity"],
    tags: ["steel bending machine", "rebar bending", "steel cutter rental"],
  }),
  kw("bus-rental-uae", "Bus Rental UAE", "service", {
    h1: "Bus Rental in UAE – 12 to 60 Passenger",
    intro: "Hadeed Transport provides bus rental services from 12 to 60 passenger capacity across the UAE. Our air-conditioned buses with professional drivers are ideal for staff transportation, labor camps, airport transfers, and corporate events.",
    features: ["12 to 60 passenger capacity", "Air-conditioned comfort", "Professional licensed drivers", "GPS tracking on all buses", "Daily and monthly rental", "Custom route planning"],
    tags: ["bus rental uae", "staff transport", "labor bus rental"],
  }),
  kw("pickup-truck-rental-uae", "Pickup Truck Rental UAE", "equipment", {
    h1: "Pickup Truck Rental in UAE – 1 to 3 Ton",
    intro: "Rent 1 to 3 ton pickup trucks from Hadeed Transport for material transportation, equipment delivery, and logistics across the UAE. Our well-maintained pickups serve construction sites, warehouses, and businesses throughout Abu Dhabi, Dubai, and Sharjah.",
    features: ["1, 2, and 3 ton pickups", "Well-maintained vehicles", "Experienced drivers available", "GPS tracking included", "Flexible rental terms", "Across all UAE"],
    tags: ["pickup truck rental", "truck hire", "delivery truck rent"],
  }),
  kw("trailer-rental-uae", "Trailer Rental UAE", "equipment", {
    h1: "Trailer Rental in UAE for Heavy Transport",
    intro: "Hadeed Transport provides trailer rental for heavy equipment and oversized material transportation across the UAE. Our trailers handle large construction materials, machinery, and heavy loads with safety and reliability.",
    features: ["Heavy-duty trailers", "Equipment and machinery transport", "Experienced drivers", "GPS tracked fleet", "Licensed for UAE roads", "Daily and project-based rental"],
    tags: ["trailer rental", "flatbed trailer", "transport trailer uae"],
  }),
  kw("recovery-truck-rental-uae", "Recovery Truck Rental UAE", "equipment", {
    h1: "Recovery Truck Rental in UAE",
    intro: "Need to transport heavy equipment or vehicles? Hadeed Transport provides recovery truck rental services across the UAE for vehicle recovery, equipment transport, and machinery relocation.",
    features: ["Heavy-duty recovery vehicles", "Equipment and machinery transport", "Experienced operators", "Available 24/7", "Cross-UAE delivery", "Various payload capacities"],
    tags: ["recovery truck", "tow truck rental", "vehicle recovery uae"],
  }),
  kw("bobcat-rental-uae", "Bobcat Mini Loader Rental UAE", "equipment", {
    h1: "Bobcat Mini Loader Rental in UAE",
    intro: "Hadeed Transport offers Bobcat mini loader rental for earthwork in limited access areas across the UAE. Our compact loaders are perfect for tight construction sites, landscaping, and indoor operations where full-size equipment cannot reach.",
    features: ["Compact design for tight spaces", "Versatile attachments available", "Easy to operate", "Indoor and outdoor use", "Low ground pressure", "Fast mobilization"],
    tags: ["bobcat rental", "mini loader", "skid steer rental"],
  }),
  kw("concrete-vibrator-rental-uae", "Concrete Vibrator Rental UAE", "equipment", {
    h1: "Concrete Vibrator Rental in UAE – Diesel & Electric",
    intro: "Rent concrete vibrators from Hadeed Transport for concrete casting and consolidation projects across the UAE. We offer both diesel and electric vibrators for foundation, slab, column, and beam concreting operations.",
    features: ["Diesel and electric models", "Various head sizes", "Flexible shaft options", "Powerful vibration force", "Portable design", "Same-day delivery"],
    tags: ["concrete vibrator", "vibrator rental", "concrete consolidation"],
  }),

  // ── SPACE RENTAL KEYWORDS (21-40) ─────────────────────────
  kw("warehouse-for-rent-abu-dhabi", "Warehouse for Rent in Abu Dhabi", "space", {
    h1: "Warehouse for Rent in Abu Dhabi – 300 to 1,000 sqm",
    intro: "Hadeed Transport offers warehouses for rent in Abu Dhabi ranging from 300 sqm to 1,000 sqm. Located in accessible industrial zones, our warehouses feature secure access, CCTV surveillance, and flexible lease terms for logistics, manufacturing, and storage operations.",
    features: ["300 to 1,000 sqm per unit", "Total area 6,000 sqm", "CCTV surveillance 24/7", "Secure controlled access", "Flexible lease terms", "Located in industrial zones"],
    tags: ["warehouse rent abu dhabi", "warehouse rental", "storage warehouse"],
  }),
  kw("warehouse-for-rent-dubai", "Warehouse for Rent in Dubai", "space", {
    h1: "Warehouse for Rent in Dubai – Flexible Sizes",
    intro: "Looking for warehouse space in Dubai? Hadeed Transport provides warehouse rental solutions for businesses requiring storage, logistics, and operational space. Our well-maintained facilities offer security, accessibility, and flexible terms.",
    features: ["Multiple size options", "Secure facilities with CCTV", "Accessible locations", "Flexible lease terms", "Loading dock facilities", "24/7 access available"],
    tags: ["warehouse rent dubai", "dubai warehouse", "industrial warehouse"],
  }),
  kw("open-yard-for-rent-uae", "Open Yard for Rent in UAE", "space", {
    h1: "Open Yard for Rent in UAE – Up to 25,000 sqm",
    intro: "Hadeed Transport offers open yards for rent across the UAE with areas up to 25,000 sqm. Our open yards are perfect for vehicle parking, material storage, equipment staging, and outdoor industrial operations.",
    features: ["Areas up to 25,000 sqm", "Fenced and secured", "Suitable for heavy vehicles", "Material storage areas", "Flexible lease terms", "Strategic locations"],
    tags: ["open yard rent", "yard rental uae", "outdoor storage"],
  }),
  kw("office-space-for-rent-abu-dhabi", "Office Space for Rent in Abu Dhabi", "space", {
    h1: "Office Space for Rent in Abu Dhabi",
    intro: "Hadeed Transport provides office spaces for rent in Abu Dhabi suitable for project offices, business operations, and administrative setups. Choose from open-plan and closed office configurations with business center facilities available.",
    features: ["Open-plan and closed offices", "Business center facilities", "Furnished options available", "Meeting room access", "Flexible lease terms", "Utilities included options"],
    tags: ["office rent abu dhabi", "office space", "business office rental"],
  }),
  kw("self-storage-abu-dhabi", "Self-Storage in Abu Dhabi", "space", {
    h1: "Self-Storage Units for Rent in Abu Dhabi",
    intro: "Need extra storage space? Hadeed Transport offers approximately 32 self-storage units in Abu Dhabi ranging from 30 sqm to 100 sqm. Our secure, clean units provide easy access for both personal and business storage needs.",
    features: ["30 to 100 sqm units", "Around 32 units available", "Clean and secure", "24/7 access", "Monthly rental terms", "Personal and business use"],
    tags: ["self storage abu dhabi", "storage units", "personal storage"],
  }),
  kw("caravan-for-rent-uae", "Caravan for Rent in UAE", "space", {
    h1: "Caravan & Porta Cabin Rental in UAE",
    intro: "Hadeed Transport provides caravan and porta cabin rental across the UAE for temporary offices, labor camps, site accommodation, and project facilities. Our caravans can be equipped with AC, temporary water drainage, and furnished interiors.",
    features: ["Temporary offices and camps", "AC-equipped units", "Water drainage systems", "Furnished interiors", "Short and long-term rental", "UAE-wide delivery"],
    tags: ["caravan rental", "porta cabin", "site office rental"],
  }),
  kw("mobile-toilet-rental-uae", "Mobile Toilet Rental UAE", "space", {
    h1: "Mobile Toilet Rental in UAE – Events & Construction",
    intro: "Hadeed Transport provides mobile toilet rental across the UAE for construction sites, outdoor events, festivals, and temporary facilities. Our portable toilet units are clean, well-maintained, and available for short and long-term rental.",
    features: ["Clean, hygienic units", "Event and construction models", "Regular servicing available", "Short and long-term rental", "UAE-wide delivery", "Quick deployment"],
    tags: ["mobile toilet rental", "portable toilet", "porta potty rental"],
  }),
  kw("storage-container-rental-uae", "Storage Container Rental UAE", "space", {
    h1: "Storage Container for Rent in UAE",
    intro: "Rent secure, portable storage containers from Hadeed Transport for site storage, event use, and temporary warehousing across the UAE. Our durable containers keep your materials, tools, and equipment safe and organized.",
    features: ["Durable steel construction", "Secure lockable doors", "Portable and relocatable", "Various sizes available", "Office and event use", "Weather-resistant"],
    tags: ["storage container rental", "container hire", "shipping container rent"],
  }),
  kw("warehouse-storage-solutions-uae", "Warehouse Storage Solutions UAE", "space", {
    h1: "Comprehensive Warehouse & Storage Solutions in UAE",
    intro: "Hadeed Transport offers a full range of warehouse and storage solutions across the UAE including warehouses, self-storage units, open yards, and storage containers. Whether you need 30 sqm or 25,000 sqm, we have the right storage solution.",
    features: ["Warehouses up to 6,000 sqm", "Self-storage 30-100 sqm units", "Open yards up to 25,000 sqm", "Storage containers", "Flexible lease terms", "Strategic UAE locations"],
    tags: ["warehouse storage", "storage solutions", "warehousing uae"],
  }),
  kw("labor-camp-rental-uae", "Labor Camp Rental UAE", "space", {
    h1: "Labor Camp & Worker Accommodation Rental in UAE",
    intro: "Hadeed Transport provides caravan-based labor camp and worker accommodation solutions across the UAE. Our portable cabins are ideal for housing construction workers on remote sites, with options for AC, furnishing, and utility connections.",
    features: ["Porta cabin accommodation", "AC and furnishing options", "Utility connections available", "Multiple unit capacity", "UAE-wide deployment", "Compliant with labor standards"],
    tags: ["labor camp", "worker accommodation", "site camp rental"],
  }),

  // ── SERVICE KEYWORDS (41-80) ──────────────────────────────
  kw("heavy-equipment-rental-uae", "Heavy Equipment Rental UAE", "service", {
    h1: "Heavy Equipment Rental in UAE – Full Fleet Available",
    intro: "Hadeed Transport is the UAE's leading heavy equipment rental company, offering a comprehensive fleet of construction machinery for projects of all scales. From excavators and cranes to rollers and generators, our well-maintained equipment is ready for deployment across Abu Dhabi, Dubai, Sharjah, and all emirates.",
    features: ["Complete heavy equipment fleet", "Cranes, excavators, loaders", "Generators and compressors", "Certified operators available", "Same-day delivery", "15+ years experience"],
    tags: ["heavy equipment rental", "construction equipment", "machinery hire"],
  }),
  kw("construction-equipment-rental-uae", "Construction Equipment Rental UAE", "service", {
    h1: "Construction Equipment Rental in UAE",
    intro: "From foundation to finishing, Hadeed Transport provides all the construction equipment you need for your UAE projects. Our fleet covers earthmoving, lifting, concrete work, compaction, transportation, and small tools — everything under one roof for your convenience.",
    features: ["Full construction equipment range", "Foundation to finishing tools", "One-stop rental solution", "Competitive package deals", "Project-based rental plans", "Expert equipment advice"],
    tags: ["construction equipment", "building equipment", "construction machinery rental"],
  }),
  kw("equipment-rental-company-abu-dhabi", "Equipment Rental Company Abu Dhabi", "service", {
    h1: "Trusted Equipment Rental Company in Abu Dhabi",
    intro: "Based in ICAD III, Hadeed Transport is Abu Dhabi's most reliable equipment rental company. With over 15 years of industry experience, we've built a reputation for quality equipment, competitive pricing, and dependable service. We serve all Abu Dhabi areas including Mussafah, Khalifa City, Al Reem Island, Yas Island, KIZAD, and beyond.",
    features: ["Based in ICAD III, Abu Dhabi", "15+ years in the industry", "500+ satisfied clients", "1200+ projects completed", "Same-day delivery", "24/7 customer support"],
    tags: ["equipment rental company", "rental company abu dhabi", "hadeed transport"],
  }),
  kw("equipment-rental-company-dubai", "Equipment Rental Company Dubai", "service", {
    h1: "Reliable Equipment Rental Company in Dubai",
    intro: "Hadeed Transport is one of Dubai's most dependable equipment rental companies, serving contractors, developers, and businesses across all areas. Whether your project is in Downtown Dubai, Jebel Ali, Dubai South, or JBR, we deliver the right equipment at the right time.",
    features: ["Dubai-wide delivery coverage", "Full construction equipment range", "Space rental solutions", "Competitive pricing", "Emergency equipment supply", "Flexible rental terms"],
    tags: ["equipment rental dubai", "rental company dubai", "machinery hire dubai"],
  }),
  kw("construction-machinery-rental-uae", "Construction Machinery Rental UAE", "service", {
    h1: "Construction Machinery Rental Across UAE",
    intro: "Hadeed Transport offers construction machinery rental services that cover every phase of your building project. From earthmoving and excavation to concrete work and finishing, our well-maintained fleet of machinery is available for daily, weekly, and monthly rental across the UAE.",
    features: ["Earthmoving machinery", "Concrete equipment", "Lifting and hoisting tools", "Road construction machines", "Demolition equipment", "Finishing and surveying tools"],
    tags: ["construction machinery", "machinery rental uae", "building machinery"],
  }),
  kw("heavy-machinery-hire-uae", "Heavy Machinery Hire UAE", "service", {
    h1: "Heavy Machinery Hire in UAE – Trusted & Reliable",
    intro: "Hire heavy machinery from Hadeed Transport for your UAE construction, industrial, and infrastructure projects. Our fleet includes excavators, cranes, forklifts, loaders, and much more — all maintained to the highest standards and delivered to your site.",
    features: ["Excavators and loaders", "Mobile cranes to 50 tons", "Forklifts to 15 tons", "Maintained to high standards", "Competitive hire rates", "Nationwide coverage"],
    tags: ["heavy machinery hire", "machinery hire uae", "equipment hire"],
  }),
  kw("equipment-rental-with-operator-uae", "Equipment Rental with Operator UAE", "service", {
    h1: "Equipment Rental with Operator in UAE",
    intro: "Don't just rent equipment — get the expertly trained operator too. Hadeed Transport provides equipment rental with certified operators for cranes, excavators, forklifts, man lifts, and transport vehicles across the UAE. Our operators are licensed, experienced, and trained in UAE safety standards.",
    features: ["Certified operators included", "Licensed for UAE operations", "Experienced in all terrain types", "Safety protocol trained", "Available for all equipment types", "Short and long-term assignments"],
    tags: ["equipment with operator", "operated equipment", "wet hire"],
  }),
  kw("same-day-equipment-delivery-uae", "Same Day Equipment Delivery UAE", "service", {
    h1: "Same-Day Equipment Delivery Across UAE",
    intro: "Need equipment today? Hadeed Transport offers same-day equipment delivery from our ICAD III base in Abu Dhabi to anywhere in the UAE. Whether you're facing an equipment failure, an urgent project start, or unexpected demand, we respond fast to keep your project moving.",
    features: ["Same-day delivery available", "ICAD III base in Abu Dhabi", "Emergency equipment supply", "24/7 availability", "Dubai and Sharjah coverage", "Rapid response team"],
    tags: ["same day delivery", "emergency equipment", "urgent rental"],
  }),
  kw("long-term-equipment-rental-uae", "Long-Term Equipment Rental UAE", "service", {
    h1: "Long-Term Equipment Rental in UAE – Save More",
    intro: "Save money on extended projects with Hadeed Transport's long-term equipment rental plans across the UAE. Our monthly and project-based rental agreements offer significant discounts compared to daily rates, with priority maintenance and equipment replacement guarantees.",
    features: ["Discounted monthly rates", "Project-based agreements", "Priority maintenance service", "Equipment replacement guarantee", "Dedicated account manager", "Custom rental packages"],
    tags: ["long term rental", "monthly equipment rental", "project rental"],
  }),
  kw("short-term-equipment-rental-uae", "Short-Term Equipment Rental UAE", "service", {
    h1: "Short-Term Equipment Rental in UAE – Daily & Weekly",
    intro: "Need equipment for just a few days? Hadeed Transport offers short-term daily and weekly equipment rental across the UAE with no long-term commitment. Perfect for one-off jobs, emergency projects, or when you need additional capacity for a brief period.",
    features: ["Daily rental available", "Weekly rental options", "No long-term commitment", "Quick mobilization", "Full equipment range", "Transparent pricing"],
    tags: ["short term rental", "daily rental", "weekly equipment hire"],
  }),
  kw("construction-site-equipment-uae", "Construction Site Equipment UAE", "service", {
    h1: "Complete Construction Site Equipment in UAE",
    intro: "Set up your construction site with everything you need from Hadeed Transport. From heavy machinery and generators to portable offices and mobile toilets, we're your one-stop shop for complete construction site equipment in the UAE.",
    features: ["Heavy machinery fleet", "Power generators all sizes", "Portable site offices", "Mobile toilets and cabins", "Storage containers", "Transport and logistics"],
    tags: ["construction site equipment", "site setup", "construction rental"],
  }),
  kw("industrial-equipment-rental-uae", "Industrial Equipment Rental UAE", "service", {
    h1: "Industrial Equipment Rental in UAE",
    intro: "Hadeed Transport serves the UAE's industrial sector with specialized equipment rental for manufacturing, processing, warehousing, and logistics operations. Our industrial equipment fleet includes forklifts, compressors, generators, and material handling machinery.",
    features: ["Forklifts and loaders", "Air compressors", "Power generators", "Material handling equipment", "Industrial storage solutions", "24/7 support"],
    tags: ["industrial equipment", "factory equipment rental", "manufacturing machinery"],
  }),
  kw("infrastructure-equipment-rental-uae", "Infrastructure Equipment Rental UAE", "service", {
    h1: "Infrastructure Project Equipment Rental in UAE",
    intro: "Building roads, bridges, or utilities? Hadeed Transport provides specialized infrastructure equipment rental across the UAE. Our fleet supports road construction, utility installation, pipeline work, and major infrastructure development projects.",
    features: ["Road construction equipment", "Utility installation tools", "Pipeline excavation machinery", "Bridge construction cranes", "Survey instruments", "Traffic management tools"],
    tags: ["infrastructure equipment", "road construction", "utility equipment rental"],
  }),
  kw("oil-gas-equipment-rental-uae", "Oil & Gas Equipment Rental UAE", "service", {
    h1: "Oil & Gas Equipment Rental in UAE",
    intro: "Hadeed Transport supports the UAE's oil and gas sector with heavy equipment rental for drilling support, pipeline construction, refinery maintenance, and offshore logistics. Our equipment meets the strict safety and quality standards required in the energy industry.",
    features: ["Pipeline construction equipment", "Refinery maintenance tools", "Heavy lifting cranes", "Transport and logistics fleet", "Safety-certified equipment", "Remote site delivery"],
    tags: ["oil gas equipment", "energy sector rental", "pipeline equipment"],
  }),
  kw("event-equipment-rental-uae", "Event Equipment Rental UAE", "service", {
    h1: "Event Equipment Rental in UAE – Generators, Toilets & More",
    intro: "Hosting an outdoor event in the UAE? Hadeed Transport provides essential event equipment including generators, mobile toilets, storage containers, and transport vehicles. We support festivals, exhibitions, corporate events, and sports events across Abu Dhabi, Dubai, and Sharjah.",
    features: ["Power generators for events", "Mobile toilet units", "Storage containers", "Transport vehicles", "Quick setup and removal", "Event-specific logistics"],
    tags: ["event equipment", "event rental", "outdoor event supplies"],
  }),
  kw("demolition-equipment-rental-uae", "Demolition Equipment Rental UAE", "service", {
    h1: "Demolition Equipment Rental in UAE",
    intro: "Hadeed Transport provides demolition equipment rental for controlled demolition, concrete breaking, and structure removal projects across the UAE. Our fleet includes jack hammers, excavators with demolition attachments, and concrete saws for safe, efficient demolition work.",
    features: ["Jack hammers various sizes", "Excavators with attachments", "Concrete saw cutters", "Dust control equipment", "Safety equipment provided", "Licensed operators available"],
    tags: ["demolition equipment", "concrete breaking", "demolition rental"],
  }),
  kw("earthmoving-equipment-rental-uae", "Earthmoving Equipment Rental UAE", "service", {
    h1: "Earthmoving Equipment Rental in UAE",
    intro: "Hadeed Transport offers comprehensive earthmoving equipment rental across the UAE including shovels, excavators, backhoe loaders, bobcats, and grading equipment. Whether you're preparing a building foundation or grading a highway, our earthmoving fleet gets the job done.",
    features: ["Shovels and excavators", "Backhoe loaders (JCB)", "Bobcat mini loaders", "Various sizes available", "Certified operators", "Same-day deployment"],
    tags: ["earthmoving equipment", "excavation rental", "grading equipment"],
  }),
  kw("lifting-equipment-rental-uae", "Lifting Equipment Rental UAE", "service", {
    h1: "Lifting Equipment Rental in UAE – Cranes & Manlifts",
    intro: "Hadeed Transport provides a full range of lifting equipment rental across the UAE including mobile cranes, man lifts, and forklifts. Our lifting solutions cover everything from ground-level material handling to high-rise construction at 50+ meters.",
    features: ["Mobile cranes 25-50 ton", "Man lifts low and high level", "Forklifts 1-15 ton", "Certified operators", "Load testing certified", "24/7 lift planning support"],
    tags: ["lifting equipment", "crane hire", "manlift rental"],
  }),
  kw("cutting-grinding-equipment-rental-uae", "Cutting & Grinding Equipment Rental UAE", "equipment", {
    h1: "Cutting & Grinding Equipment Rental in UAE",
    intro: "Rent concrete saws, block cutters, marble cutting machines, grinding machines, and wood cutters from Hadeed Transport. Our cutting and grinding equipment is ideal for precision work on construction sites across the UAE.",
    features: ["Concrete saw cutters", "Block cutting machines", "Marble cutting machines", "Concrete grinding machines", "Electric wood cutters", "Diamond blade options"],
    tags: ["cutting equipment", "grinding machine", "saw cutter rental"],
  }),
  kw("plastering-machine-rental-uae", "Plastering Machine Rental UAE", "equipment", {
    h1: "Plastering Machine Rental in UAE",
    intro: "Speed up your plastering work with Hadeed Transport's plastering machine rental services across the UAE. Our machines deliver consistent, professional-quality plaster application for interior and exterior walls, dramatically reducing labor time and costs.",
    features: ["High-speed plastering", "Consistent application", "Adjustable spray patterns", "Interior and exterior use", "Easy to maintain", "Delivery across UAE"],
    tags: ["plastering machine", "plaster rental", "plastering equipment"],
  }),

  // ── LOCATION-SPECIFIC KEYWORDS (81-130) ───────────────────
  kw("equipment-rental-icad", "Equipment Rental in ICAD Abu Dhabi", "location", {
    h1: "Equipment Rental in ICAD, Abu Dhabi – Same-Day Service",
    intro: "Located right in ICAD III, Hadeed Transport is your nearest equipment rental partner in the Industrial City of Abu Dhabi. We offer same-day equipment delivery to all ICAD zones with the fastest response times in the market.",
    tags: ["icad equipment rental", "icad industrial zone", "icad iii"],
  }),
  kw("equipment-rental-mussafah", "Equipment Rental in Mussafah", "location", {
    h1: "Equipment Rental in Mussafah, Abu Dhabi",
    intro: "Hadeed Transport provides fast equipment delivery to Mussafah industrial district in Abu Dhabi. Our heavy machinery, construction tools, and storage solutions serve the hundreds of industrial and commercial operations in Mussafah.",
    tags: ["mussafah equipment", "mussafah rental", "mussafah industrial"],
  }),
  kw("equipment-rental-jebel-ali", "Equipment Rental in Jebel Ali", "location", {
    h1: "Equipment Rental in Jebel Ali, Dubai",
    intro: "Serving Jebel Ali's massive port and free zone operations, Hadeed Transport provides industrial equipment, container handling machinery, and construction tools for the logistics and manufacturing hub of Dubai.",
    tags: ["jebel ali equipment", "jafza rental", "jebel ali port equipment"],
  }),
  kw("equipment-rental-downtown-dubai", "Equipment Rental in Downtown Dubai", "location", {
    h1: "Equipment Rental in Downtown Dubai",
    intro: "Hadeed Transport delivers cranes, man lifts, and specialized construction equipment for the premium high-rise projects in Downtown Dubai. We understand the unique logistics challenges of this iconic district and plan deliveries for minimum disruption.",
    tags: ["downtown dubai equipment", "burj khalifa area rental", "downtown construction"],
  }),
  kw("equipment-rental-business-bay", "Equipment Rental in Business Bay", "location", {
    h1: "Equipment Rental in Business Bay, Dubai",
    intro: "Business Bay's rapid commercial tower development requires reliable equipment partners. Hadeed Transport provides comprehensive construction equipment for the office towers, mixed-use developments, and infrastructure projects in Business Bay.",
    tags: ["business bay equipment", "dubai cbd rental", "business bay construction"],
  }),
  kw("equipment-rental-dubai-south", "Equipment Rental in Dubai South", "location", {
    h1: "Equipment Rental in Dubai South",
    intro: "Supporting the massive development around Al Maktoum International Airport and Expo City, Hadeed Transport delivers our full heavy equipment fleet to Dubai South for long-term construction and infrastructure projects.",
    tags: ["dubai south equipment", "expo city rental", "al maktoum airport construction"],
  }),
  kw("equipment-rental-kizad", "Equipment Rental in KIZAD", "location", {
    h1: "Equipment Rental in KIZAD (Khalifa Industrial Zone)",
    intro: "Hadeed Transport serves KIZAD with industrial-grade heavy equipment, container storage, and transport services. We support the port logistics, manufacturing, and industrial construction operations in Khalifa Industrial Zone Abu Dhabi.",
    tags: ["kizad equipment", "khalifa industrial zone", "khalifa port rental"],
  }),
  kw("equipment-rental-al-ain", "Equipment Rental in Al Ain", "location", {
    h1: "Equipment Rental in Al Ain, Abu Dhabi",
    intro: "Hadeed Transport extends our full equipment rental services to Al Ain, the Garden City. We support construction, agricultural, and infrastructure projects across Al Ain with timely equipment delivery and professional service.",
    tags: ["al ain equipment", "al ain rental", "garden city construction"],
  }),
  kw("equipment-rental-sharjah-industrial", "Equipment Rental Sharjah Industrial Area", "location", {
    h1: "Equipment Rental in Sharjah Industrial Area",
    intro: "Hadeed Transport serves Sharjah's major industrial zone with heavy machinery, storage solutions, and transport equipment. Our fleet supports manufacturing, warehousing, and industrial construction operations across Sharjah Industrial Area.",
    tags: ["sharjah industrial equipment", "sharjah industrial zone", "sharjah machinery"],
  }),
  kw("crane-rental-abu-dhabi", "Crane Rental Abu Dhabi", "location", {
    h1: "Crane Rental in Abu Dhabi – 25 to 50 Ton",
    intro: "Need a crane in Abu Dhabi? Hadeed Transport provides 25-ton and 50-ton mobile crane rental with certified operators across all Abu Dhabi areas. Based in ICAD III, we offer the fastest crane deployment in the emirate.",
    tags: ["crane rental abu dhabi", "mobile crane abu dhabi", "crane hire"],
  }),
  kw("crane-rental-dubai", "Crane Rental Dubai", "location", {
    h1: "Crane Rental in Dubai – Mobile Cranes Available",
    intro: "Hadeed Transport delivers mobile cranes to construction sites across Dubai for heavy lifting, steel erection, and material handling operations. Our 25-ton and 50-ton cranes come with certified operators for safe, efficient lifting.",
    tags: ["crane rental dubai", "mobile crane dubai", "lifting dubai"],
  }),
  kw("forklift-rental-abu-dhabi", "Forklift Rental Abu Dhabi", "location", {
    h1: "Forklift Rental in Abu Dhabi – 1 to 15 Ton",
    intro: "Rent forklifts in Abu Dhabi from our ICAD III facility with same-day delivery available. Hadeed Transport offers forklifts from 1 to 15 ton capacity for warehouses, construction sites, and industrial operations across Abu Dhabi.",
    tags: ["forklift abu dhabi", "forklift rental", "material handling abu dhabi"],
  }),
  kw("forklift-rental-dubai", "Forklift Rental Dubai", "location", {
    h1: "Forklift Rental in Dubai – All Capacities",
    intro: "Hadeed Transport provides forklift rental across Dubai for warehouse, construction, and industrial applications. Our fleet ranges from 1-ton compact forklifts to 15-ton heavy-duty units, available for daily, weekly, or monthly hire.",
    tags: ["forklift dubai", "warehouse forklift", "forklift hire dubai"],
  }),
  kw("generator-rental-abu-dhabi", "Generator Rental Abu Dhabi", "location", {
    h1: "Generator Rental in Abu Dhabi – 10 to 500 KVA",
    intro: "Hadeed Transport provides generators from 10 KVA to 500 KVA for rent in Abu Dhabi. From temporary construction site power to emergency backup, we deliver reliable generators with same-day service from our ICAD III base.",
    tags: ["generator abu dhabi", "power generator rental", "temporary power abu dhabi"],
  }),
  kw("generator-rental-dubai", "Generator Rental Dubai", "location", {
    h1: "Generator Rental in Dubai – All Capacities",
    intro: "Need temporary power in Dubai? Hadeed Transport delivers generators from 10 KVA to 500 KVA for construction sites, events, commercial backup, and emergency power across all Dubai areas.",
    tags: ["generator dubai", "power rental dubai", "generator hire dubai"],
  }),
  kw("warehouse-rental-mussafah", "Warehouse Rental Mussafah", "location", {
    h1: "Warehouse for Rent in Mussafah, Abu Dhabi",
    intro: "Hadeed Transport offers warehouse rental in the Mussafah industrial district of Abu Dhabi. Our secure warehouse facilities provide the storage and operational space your business needs in this prime industrial location.",
    tags: ["warehouse mussafah", "mussafah storage", "industrial warehouse"],
  }),
  kw("storage-rental-icad", "Storage Rental ICAD Abu Dhabi", "location", {
    h1: "Storage & Warehouse Rental in ICAD, Abu Dhabi",
    intro: "Hadeed Transport's ICAD III facility offers warehouses, self-storage units, open yards, and storage containers for rent. Located in the heart of Abu Dhabi's industrial zone, we provide flexible storage solutions for every business need.",
    tags: ["icad storage", "icad warehouse", "icad rental"],
  }),
  kw("open-yard-rental-abu-dhabi", "Open Yard Rental Abu Dhabi", "location", {
    h1: "Open Yard for Rent in Abu Dhabi – Flexible Sizes",
    intro: "Secure large open yard spaces for rent in Abu Dhabi from Hadeed Transport. Our yards accommodate heavy vehicles, equipment staging, material storage, and outdoor operations with areas up to 25,000 sqm.",
    tags: ["open yard abu dhabi", "yard rental", "outdoor storage abu dhabi"],
  }),
  kw("equipment-rental-yas-island", "Equipment Rental Yas Island", "location", {
    h1: "Equipment Rental on Yas Island, Abu Dhabi",
    intro: "Hadeed Transport supports construction, entertainment, and hospitality projects on Yas Island with our full equipment fleet. From theme park construction to hotel fit-outs, we deliver the right equipment for Yas Island's unique needs.",
    tags: ["yas island equipment", "yas island construction", "entertainment construction"],
  }),
  kw("equipment-rental-saadiyat", "Equipment Rental Saadiyat Island", "location", {
    h1: "Equipment Rental on Saadiyat Island, Abu Dhabi",
    intro: "Serving Abu Dhabi's cultural district, Hadeed Transport provides specialized construction equipment for museum, gallery, luxury residential, and infrastructure projects on Saadiyat Island.",
    tags: ["saadiyat equipment", "cultural district construction", "saadiyat island rental"],
  }),

  // ── INDUSTRY & NICHE KEYWORDS (131-200) ───────────────────
  kw("construction-equipment-rental-near-me", "Construction Equipment Rental Near Me", "service", {
    h1: "Construction Equipment Rental Near Me – UAE Wide",
    intro: "Looking for construction equipment rental near you? Hadeed Transport delivers equipment to every corner of the UAE from our ICAD III base in Abu Dhabi. No matter where your project is located, we're your nearest equipment rental solution with same-day delivery available.",
    tags: ["equipment near me", "rental near me", "closest equipment rental"],
  }),
  kw("cheap-equipment-rental-uae", "Cheap Equipment Rental UAE", "service", {
    h1: "Affordable Equipment Rental in UAE – Best Rates",
    intro: "Get the best equipment rental rates in the UAE with Hadeed Transport. We offer competitive pricing without compromising on equipment quality or service. Our flexible rental terms, from daily to monthly, ensure you only pay for what you need.",
    tags: ["cheap equipment rental", "affordable rental", "best rates uae"],
  }),
  kw("best-equipment-rental-company-uae", "Best Equipment Rental Company UAE", "service", {
    h1: "Best Equipment Rental Company in UAE – Hadeed Transport",
    intro: "With 15+ years of experience, 500+ happy clients, and 1,200+ completed projects, Hadeed Transport is one of the best equipment rental companies in the UAE. Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.",
    features: ["15+ years of experience", "500+ satisfied clients", "1,200+ completed projects", "Well-maintained fleet", "24/7 customer support", "Competitive pricing"],
    tags: ["best equipment rental", "top rental company", "most trusted rental uae"],
  }),
  kw("construction-vehicle-rental-uae", "Construction Vehicle Rental UAE", "service", {
    h1: "Construction Vehicle Rental in UAE",
    intro: "Hadeed Transport offers a fleet of construction vehicles for rent across the UAE including pickup trucks, trailers, recovery trucks, tankers, and buses. Supporting both material transport and personnel mobility, we keep your project moving.",
    tags: ["construction vehicles", "site vehicles", "transport rental"],
  }),
  kw("site-preparation-equipment-uae", "Site Preparation Equipment UAE", "service", {
    h1: "Site Preparation Equipment Rental in UAE",
    intro: "Preparing a construction site? Hadeed Transport provides all the equipment you need for site clearing, grading, excavation, and compaction across the UAE. Our earthmoving fleet handles projects from small vacant lots to major development sites.",
    tags: ["site preparation", "site clearing", "land grading equipment"],
  }),
  kw("road-construction-equipment-uae", "Road Construction Equipment UAE", "service", {
    h1: "Road Construction Equipment Rental in UAE",
    intro: "Hadeed Transport supplies road construction equipment across the UAE including rollers, compactors, excavators, graders, and tankers. We support highway construction, road repair, and paving operations for government and private projects.",
    tags: ["road construction", "highway equipment", "paving equipment"],
  }),
  kw("building-construction-equipment-uae", "Building Construction Equipment UAE", "service", {
    h1: "Building Construction Equipment Rental in UAE",
    intro: "From foundation to rooftop, Hadeed Transport provides all the building construction equipment you need. Our complete fleet supports residential, commercial, and industrial building projects with cranes, concrete equipment, scaffolding, and more.",
    tags: ["building construction", "residential construction", "commercial building equipment"],
  }),
  kw("villa-construction-equipment-uae", "Villa Construction Equipment UAE", "service", {
    h1: "Villa Construction Equipment Rental in UAE",
    intro: "Building a villa in the UAE? Hadeed Transport provides the complete equipment package for villa construction projects including excavators, concrete mixers, scaffolding, manlifts, and finishing tools. We serve all villa communities across Abu Dhabi, Dubai, and Sharjah.",
    tags: ["villa construction", "residential equipment", "villa building"],
  }),
  kw("high-rise-construction-equipment-uae", "High-Rise Construction Equipment UAE", "service", {
    h1: "High-Rise Construction Equipment Rental in UAE",
    intro: "Hadeed Transport supplies specialized equipment for high-rise construction projects across the UAE including mobile cranes, high-level manlifts, concrete pumps, and tower work tools. We support the UAE's iconic skyline projects with reliable, certified equipment.",
    tags: ["high-rise construction", "tower construction", "skyscraper equipment"],
  }),
  kw("renovation-equipment-rental-uae", "Renovation Equipment Rental UAE", "service", {
    h1: "Renovation & Remodeling Equipment Rental in UAE",
    intro: "Renovating a property in the UAE? Hadeed Transport provides all the equipment you need for demolition, cutting, plastering, painting access, and finishing. Our compact tools are perfect for interior renovation work in residential and commercial properties.",
    tags: ["renovation equipment", "remodeling tools", "property renovation rental"],
  }),
  kw("maintenance-equipment-rental-uae", "Maintenance Equipment Rental UAE", "service", {
    h1: "Building Maintenance Equipment Rental in UAE",
    intro: "Keep your buildings in top condition with Hadeed Transport's maintenance equipment rental across the UAE. Our man lifts, scaffolding, generators, and power tools support facade cleaning, painting, repairs, and regular maintenance operations.",
    tags: ["maintenance equipment", "building maintenance", "facility management rental"],
  }),
  kw("landscaping-equipment-rental-uae", "Landscaping Equipment Rental UAE", "service", {
    h1: "Landscaping Equipment Rental in UAE",
    intro: "Hadeed Transport provides earthmoving and landscaping equipment for garden, park, and outdoor space development across the UAE. Our mini loaders, excavators, and grading equipment transform landscapes efficiently and professionally.",
    tags: ["landscaping equipment", "garden machinery", "outdoor development"],
  }),
  kw("power-tools-rental-uae", "Power Tools Rental UAE", "equipment", {
    h1: "Power Tools Rental in UAE – Professional Grade",
    intro: "Rent professional-grade power tools from Hadeed Transport across the UAE. Our range includes concrete cutters, grinders, jack hammers, plaster machines, coring machines, and more. All tools are maintained and ready for immediate use.",
    tags: ["power tools", "professional tools", "tool rental uae"],
  }),
  kw("concrete-cutting-rental-uae", "Concrete Cutting Equipment Rental UAE", "equipment", {
    h1: "Concrete Cutting & Coring Equipment Rental in UAE",
    intro: "Hadeed Transport provides concrete cutting and coring equipment rental across the UAE including saw cutters, coring machines, and diamond blades. Our equipment handles precision cutting for expansion joints, utility penetrations, and demolition preparation.",
    tags: ["concrete cutting", "coring machine", "saw cutter rental"],
  }),
  kw("staff-transportation-uae", "Staff Transportation Services UAE", "service", {
    h1: "Staff & Labor Transportation Services in UAE",
    intro: "Hadeed Transport provides reliable staff transportation services across the UAE with our fleet of 12 to 60 passenger buses and saloon cars. We support daily worker commutes, project team transport, and corporate mobility needs with professional drivers.",
    tags: ["staff transport", "labor transportation", "worker bus service"],
  }),
  kw("diesel-tanker-rental-uae", "Diesel Tanker Rental UAE", "equipment", {
    h1: "Diesel Tanker Rental in UAE",
    intro: "Hadeed Transport provides diesel tanker rental for fuel delivery to construction sites, remote operations, and industrial facilities across the UAE. Our tankers are certified for safe diesel transport and come with experienced, licensed drivers.",
    tags: ["diesel tanker", "fuel delivery", "diesel transport"],
  }),
  kw("sewerage-tanker-rental-uae", "Sewerage Tanker Rental UAE", "equipment", {
    h1: "Sewerage Tanker Rental in UAE",
    intro: "Hadeed Transport offers sewerage tanker rental for waste water management at construction sites, events, and temporary facilities across the UAE. Our tanks are properly sealed and operated by experienced drivers for safe waste disposal.",
    tags: ["sewerage tanker", "waste water", "sewage transport"],
  }),
  kw("power-float-rental-uae", "Power Float Rental UAE", "equipment", {
    h1: "Concrete Power Float Rental in UAE",
    intro: "Achieve perfectly smooth concrete floors with Hadeed Transport's power float rental services across the UAE. Our concrete finishing machines are ideal for warehouse floors, commercial buildings, and residential slab finishing.",
    tags: ["power float", "concrete finishing", "floor finishing rental"],
  }),
  kw("concrete-grinding-machine-rental-uae", "Concrete Grinding Machine Rental UAE", "equipment", {
    h1: "Concrete Grinding Machine Rental in UAE",
    intro: "Rent concrete grinding machines from Hadeed Transport for floor preparation, surface leveling, and concrete polishing across the UAE. Our machines deliver smooth, professional-quality concrete surfaces.",
    tags: ["concrete grinder", "floor grinder", "surface grinding rental"],
  }),
  kw("block-cutter-rental-uae", "Block Cutter Machine Rental UAE", "equipment", {
    h1: "Block Cutter Machine Rental in UAE",
    intro: "Hadeed Transport provides block cutter machine rental for precision block cutting on construction sites across the UAE. Our machines handle various block sizes and materials for clean, accurate cuts.",
    tags: ["block cutter", "block cutting machine", "masonry cutting"],
  }),
  kw("marble-cutting-machine-rental-uae", "Marble Cutting Machine Rental UAE", "equipment", {
    h1: "Marble Cutting Machine Rental in UAE",
    intro: "Rent marble cutting machines from Hadeed Transport for precision stone and marble work on construction and renovation projects across the UAE. Our machines deliver clean, professional cuts for flooring, cladding, and countertop installations.",
    tags: ["marble cutter", "stone cutting", "marble machine rental"],
  }),
  kw("wood-cutter-rental-uae", "Wood Cutter Rental UAE", "equipment", {
    h1: "Electric Wood Cutter Rental in UAE",
    intro: "Hadeed Transport provides electric wood cutter rental across the UAE for carpentry, formwork, and woodworking operations on construction sites. Our machines deliver precise cuts for doors, window frames, and structural timber.",
    tags: ["wood cutter", "timber cutting", "carpentry tools rental"],
  }),
  kw("coring-machine-rental-uae", "Coring Machine Rental UAE", "equipment", {
    h1: "Concrete Coring Machine Rental in UAE",
    intro: "Hadeed Transport offers coring machine rental for precision concrete drilling across the UAE. Our diamond-tipped core drilling equipment is ideal for utility penetrations, structural sampling, and anchor installations.",
    tags: ["coring machine", "core drilling", "concrete coring rental"],
  }),
  kw("total-station-rental-uae", "Total Station Rental UAE", "equipment", {
    h1: "Total Station Rental in UAE – Leica TC405",
    intro: "Rent the Leica TC405 total station from Hadeed Transport for professional land surveying and construction layout across the UAE. Our calibrated instruments and accessories ensure accurate measurements for your project.",
    tags: ["total station", "leica rental", "survey instrument"],
  }),
  kw("auto-level-rental-uae", "Auto Level Rental UAE", "equipment", {
    h1: "Auto Level Machine Rental in UAE",
    intro: "Hadeed Transport provides auto level machine rental for elevation surveying, leveling work, and construction layout across the UAE. Our instruments are calibrated and come with tripods and accessories ready for use.",
    tags: ["auto level", "leveling instrument", "survey level rental"],
  }),
  kw("laser-level-rental-uae", "Laser Level Rental UAE", "equipment", {
    h1: "Laser Level Machine Rental in UAE",
    intro: "Rent laser level machines from Hadeed Transport for precise alignment and leveling on construction projects across the UAE. Our instruments are perfect for interior fit-outs, ceiling installation, and precision construction work.",
    tags: ["laser level", "laser alignment", "precision leveling rental"],
  }),
  kw("50-ton-crane-rental-uae", "50 Ton Crane Rental UAE", "equipment", {
    h1: "50 Ton Mobile Crane Rental in UAE",
    intro: "Hadeed Transport offers 50-ton mobile crane rental for heavy lifting operations across the UAE. Our 50-ton cranes handle the heaviest construction loads with certified operators and complete safety equipment.",
    tags: ["50 ton crane", "heavy crane rental", "large crane hire"],
  }),
  kw("25-ton-crane-rental-uae", "25 Ton Crane Rental UAE", "equipment", {
    h1: "25 Ton Mobile Crane Rental in UAE",
    intro: "Rent our 25-ton mobile cranes for medium to heavy lifting operations across the UAE. Hadeed Transport's 25-ton cranes are perfect for steel erection, precast installation, and general material handling on construction sites.",
    tags: ["25 ton crane", "medium crane rental", "crane hire uae"],
  }),
  kw("500-kva-generator-rental-uae", "500 KVA Generator Rental UAE", "equipment", {
    h1: "500 KVA Generator Rental in UAE",
    intro: "Need high-capacity temporary power? Hadeed Transport provides 500 KVA generator rental for large construction sites, commercial operations, and events across the UAE. Our generators deliver reliable power for the most demanding applications.",
    tags: ["500 kva generator", "high power generator", "large generator rental"],
  }),
  kw("portable-generator-rental-uae", "Portable Generator Rental UAE", "equipment", {
    h1: "Portable Generator Rental in UAE – 10 to 60 KVA",
    intro: "Rent portable generators from 10 to 60 KVA from Hadeed Transport for small construction sites, shops, events, and emergency backup across the UAE. Our compact generators are easy to transport and set up.",
    tags: ["portable generator", "small generator", "compact power rental"],
  }),
  kw("jcb-rental-uae", "JCB Backhoe Loader Rental UAE", "equipment", {
    h1: "JCB Backhoe Loader Rental in UAE",
    intro: "Hadeed Transport offers JCB backhoe loader rental for limited excavation, trenching, and general earthwork across the UAE. The versatile JCB is perfect for medium-size construction projects where flexibility and compact operation are essential.",
    tags: ["jcb rental", "backhoe loader", "jcb hire uae"],
  }),
  kw("60-passenger-bus-rental-uae", "60 Passenger Bus Rental UAE", "service", {
    h1: "60 Passenger Bus Rental in UAE",
    intro: "Rent 60-passenger buses from Hadeed Transport for staff transportation, labor camp shuttles, and large group transport across the UAE. Our air-conditioned buses come with professional drivers for safe, comfortable journeys.",
    tags: ["60 seater bus", "large bus rental", "staff transport bus"],
  }),
  kw("15-seater-bus-rental-uae", "15 Seater Bus Rental UAE", "service", {
    h1: "15 Seater Bus Rental in UAE",
    intro: "Hadeed Transport provides 15-seater bus rental for small team transport, airport transfers, and project site commutes across the UAE. Our compact buses are air-conditioned with professional drivers.",
    tags: ["15 seater bus", "minibus rental", "small bus hire"],
  }),
  kw("construction-site-power-solutions-uae", "Construction Site Power Solutions UAE", "service", {
    h1: "Construction Site Power Solutions in UAE",
    intro: "Power your construction site with Hadeed Transport's generator rental services. From 10 KVA for small operations to 500 KVA for major projects, we provide reliable temporary power solutions with fuel delivery and 24/7 support across the UAE.",
    tags: ["site power", "temporary power", "construction electricity"],
  }),
  kw("construction-waste-management-uae", "Construction Waste Equipment UAE", "service", {
    h1: "Construction Waste Management Equipment in UAE",
    intro: "Manage construction waste efficiently with Hadeed Transport's equipment rental services. Our storage containers, skip loaders, and transport vehicles help you keep your site clean and compliant with UAE waste management regulations.",
    tags: ["construction waste", "waste management", "skip hire uae"],
  }),
  kw("temporary-fencing-equipment-uae", "Temporary Site Equipment Rental UAE", "service", {
    h1: "Temporary Site Equipment & Facilities in UAE",
    intro: "Hadeed Transport provides temporary site facilities for construction projects across the UAE. Our caravans, mobile toilets, storage containers, and generators create comfortable, functional work environments for your project teams.",
    tags: ["temporary facilities", "site equipment", "construction facilities"],
  }),
  kw("material-handling-equipment-uae", "Material Handling Equipment UAE", "service", {
    h1: "Material Handling Equipment Rental in UAE",
    intro: "Hadeed Transport offers a comprehensive range of material handling equipment for rent across the UAE including forklifts, cranes, hoists, and trolleys. Our equipment keeps materials moving efficiently on construction sites, warehouses, and industrial facilities.",
    tags: ["material handling", "logistics equipment", "warehouse machinery"],
  }),
  kw("compaction-equipment-rental-uae", "Compaction Equipment Rental UAE", "equipment", {
    h1: "Compaction Equipment Rental in UAE",
    intro: "Achieve optimal soil and sub-base compaction with Hadeed Transport's range of compaction equipment available for rent across the UAE. Our fleet includes driving rollers, plate compactors, and jumping jack compactors for projects of every scale.",
    tags: ["compaction equipment", "soil compactor", "vibrating roller"],
  }),
  kw("tower-crane-services-uae", "Tower Crane Services UAE", "service", {
    h1: "Tower Crane & Mobile Crane Services in UAE",
    intro: "Hadeed Transport provides professional crane services across the UAE for high-rise construction, steel erection, and heavy material handling. Our certified operators and well-maintained mobile cranes deliver safe, efficient lifting for your most demanding projects.",
    tags: ["tower crane", "crane services", "professional lifting"],
  }),
  kw("equipment-maintenance-support-uae", "Equipment Rental Maintenance Support UAE", "service", {
    h1: "Equipment Rental with Maintenance Support in UAE",
    intro: "When you rent from Hadeed Transport, you get more than just equipment — you get comprehensive maintenance support. Our in-house maintenance team provides regular servicing, emergency repairs, and standby replacement to ensure your projects never stop.",
    features: ["In-house maintenance team", "Regular equipment servicing", "Emergency repair response", "Standby equipment available", "Parts and consumables support", "24/7 maintenance hotline"],
    tags: ["equipment maintenance", "rental support", "maintenance service"],
  }),
  kw("excavation-contractor-equipment-uae", "Excavation Equipment UAE", "service", {
    h1: "Excavation Equipment & Services in UAE",
    intro: "Hadeed Transport provides excavation equipment for contractors across the UAE. Our shovels, excavators, and loaders handle foundation work, trenching, grading, and bulk earthmoving for projects of all sizes and complexities.",
    tags: ["excavation equipment", "foundation digging", "trenching machinery"],
  }),
  kw("piling-equipment-support-uae", "Foundation & Piling Support Equipment UAE", "service", {
    h1: "Foundation & Piling Support Equipment in UAE",
    intro: "Support your foundation and piling operations with Hadeed Transport's equipment fleet. We provide excavators for pile cap excavation, cranes for piling rig support, and dewatering systems for foundation pit management across the UAE.",
    tags: ["piling support", "foundation equipment", "pile cap excavation"],
  }),
  kw("fit-out-equipment-rental-uae", "Fit-Out Equipment Rental UAE", "service", {
    h1: "Interior Fit-Out Equipment Rental in UAE",
    intro: "Hadeed Transport provides essential equipment for interior fit-out and finishing projects across the UAE. Our range includes man lifts for ceiling work, plaster machines, cutting tools, generators, and material handling equipment for commercial and residential fit-outs.",
    tags: ["fit out equipment", "interior finishing", "commercial fit out rental"],
  }),
  kw("desert-construction-equipment-uae", "Desert Construction Equipment UAE", "service", {
    h1: "Desert & Remote Site Construction Equipment in UAE",
    intro: "Working on a remote desert project? Hadeed Transport delivers construction equipment to even the most remote desert locations in the UAE. Our logistics capability ensures your equipment arrives on time, no matter how far from the city your project is.",
    tags: ["desert construction", "remote site equipment", "off-road machinery"],
  }),
  kw("marine-construction-equipment-uae", "Marine Construction Equipment UAE", "service", {
    h1: "Marine & Waterfront Construction Equipment in UAE",
    intro: "Hadeed Transport supports marine and waterfront construction projects across the UAE with specialized equipment. From island developments to port expansions, our cranes, earthmoving equipment, and transport vehicles serve the unique needs of marine construction.",
    tags: ["marine construction", "waterfront equipment", "island construction"],
  }),
  kw("green-building-equipment-uae", "Green Building Equipment UAE", "service", {
    h1: "Green & Sustainable Building Equipment in UAE",
    intro: "Hadeed Transport supports the UAE's sustainability goals with equipment suitable for green building and eco-friendly construction projects. We serve sustainable developments like Masdar City and The Sustainable City with modern, efficient equipment.",
    tags: ["green building", "sustainable construction", "eco equipment"],
  }),
  kw("project-logistics-uae", "Construction Project Logistics UAE", "service", {
    h1: "Construction Project Logistics & Equipment in UAE",
    intro: "Hadeed Transport provides end-to-end construction project logistics across the UAE, combining equipment rental with transport services, storage solutions, and on-site support. We simplify your project supply chain with a single, reliable partner.",
    tags: ["project logistics", "construction logistics", "supply chain rental"],
  }),
  kw("equipment-rental-free-zone-uae", "Equipment Rental for Free Zones UAE", "service", {
    h1: "Equipment Rental for Free Zones Across UAE",
    intro: "Hadeed Transport serves free zones across the UAE including JAFZA, KIZAD, SAIF Zone, Hamriyah Free Zone, DIP, and many more. Our industrial equipment, storage solutions, and transport services support the manufacturing and commercial operations within these strategic zones.",
    tags: ["free zone equipment", "jafza rental", "industrial zone machinery"],
  }),
  kw("government-project-equipment-uae", "Government Project Equipment UAE", "service", {
    h1: "Equipment Rental for Government Projects in UAE",
    intro: "Hadeed Transport is experienced in supporting government construction and infrastructure projects across the UAE. Our well-maintained fleet and professional service standards meet the rigorous requirements of public sector projects.",
    tags: ["government project", "public sector rental", "infrastructure equipment"],
  }),
  kw("hospital-construction-equipment-uae", "Hospital Construction Equipment UAE", "industry", {
    h1: "Hospital & Healthcare Facility Construction Equipment UAE",
    intro: "Hadeed Transport provides specialized equipment for hospital and healthcare facility construction across the UAE. From foundation work to precision interior fit-out, our fleet supports the unique requirements of healthcare infrastructure projects.",
    tags: ["hospital construction", "healthcare facility", "medical building equipment"],
  }),
  kw("school-construction-equipment-uae", "School Construction Equipment UAE", "industry", {
    h1: "School & Educational Facility Construction Equipment UAE",
    intro: "Supporting the UAE's education sector, Hadeed Transport provides construction equipment for school, university, and campus development projects. Our fleet helps build the learning environments of tomorrow.",
    tags: ["school construction", "education facility", "campus construction equipment"],
  }),
  kw("hotel-construction-equipment-uae", "Hotel Construction Equipment UAE", "industry", {
    h1: "Hotel & Hospitality Construction Equipment UAE",
    intro: "Hadeed Transport supplies construction and fit-out equipment for hotel, resort, and hospitality projects across the UAE. From structural work to interior finishing, we support the luxury standards the UAE's hospitality industry demands.",
    tags: ["hotel construction", "hospitality equipment", "resort building rental"],
  }),
  kw("retail-construction-equipment-uae", "Retail & Mall Construction Equipment UAE", "industry", {
    h1: "Retail & Mall Construction Equipment in UAE",
    intro: "Hadeed Transport provides construction and fit-out equipment for retail, mall, and shopping center projects across the UAE. Our equipment supports both new construction and renovation of commercial retail spaces.",
    tags: ["retail construction", "mall construction", "shopping center equipment"],
  }),
  kw("warehouse-construction-equipment-uae", "Warehouse Construction Equipment UAE", "industry", {
    h1: "Warehouse & Logistics Center Construction Equipment UAE",
    intro: "Building a warehouse or logistics center? Hadeed Transport provides the heavy equipment needed for large-span structure construction, including cranes, forklifts, concrete equipment, and earthmoving machinery across the UAE.",
    tags: ["warehouse construction", "logistics center", "industrial building equipment"],
  }),
  kw("sports-facility-equipment-uae", "Sports Facility Construction Equipment UAE", "industry", {
    h1: "Sports Facility & Stadium Construction Equipment UAE",
    intro: "Hadeed Transport supports the construction of sports facilities, stadiums, and recreation centers across the UAE with our comprehensive equipment fleet. From earthmoving to finishing, we have the machinery for world-class sports infrastructure.",
    tags: ["sports facility", "stadium construction", "recreation center equipment"],
  }),
  kw("parking-structure-equipment-uae", "Parking Structure Construction Equipment UAE", "industry", {
    h1: "Parking Structure Construction Equipment in UAE",
    intro: "Hadeed Transport provides equipment for multi-storey parking structure construction across the UAE including cranes, concrete equipment, formwork support, and finishing tools for efficient car park development.",
    tags: ["parking structure", "car park construction", "multi-storey parking"],
  }),
  kw("mixed-use-development-equipment-uae", "Mixed-Use Development Equipment UAE", "industry", {
    h1: "Mixed-Use Development Construction Equipment UAE",
    intro: "Hadeed Transport supports mixed-use development projects across the UAE that combine residential, commercial, and retail components. Our diverse equipment fleet handles every phase of these complex multi-function developments.",
    tags: ["mixed use development", "multi-use construction", "complex development equipment"],
  }),
  kw("heritage-building-equipment-uae", "Heritage Building Restoration Equipment UAE", "industry", {
    h1: "Heritage Building Restoration Equipment in UAE",
    intro: "Hadeed Transport provides specialized, carefully operated equipment for heritage building restoration and preservation projects across the UAE. Our compact, low-vibration machinery protects historic structures while enabling necessary restoration work.",
    tags: ["heritage restoration", "historic building", "preservation equipment"],
  }),
  kw("emergency-equipment-rental-uae", "Emergency Equipment Rental UAE", "service", {
    h1: "Emergency & Urgent Equipment Rental in UAE",
    intro: "Equipment emergency? Hadeed Transport provides 24/7 emergency equipment rental across the UAE. Whether it's an urgent generator need, emergency dewatering, or last-minute crane requirement, our rapid response team gets equipment to your site fast.",
    features: ["24/7 emergency hotline", "Same-day deployment", "Generator emergency backup", "Emergency dewatering pumps", "Rapid crane deployment", "Priority service for emergencies"],
    tags: ["emergency rental", "urgent equipment", "24/7 equipment hire"],
  }),
]

// ────────────────────────────────────────────────
// Exports
// ────────────────────────────────────────────────

export function getKeywordPageBySlug(slug: string): KeywordPage | undefined {
  return keywordPages.find((p) => p.slug === slug)
}

export function getRelatedKeywordPages(current: KeywordPage, limit = 6): KeywordPage[] {
  // First try related slugs
  const related = current.relatedSlugs
    .map((s) => keywordPages.find((p) => p.slug === s))
    .filter(Boolean) as KeywordPage[]

  // Then add same-category pages
  const sameCategory = keywordPages.filter(
    (p) => p.category === current.category && p.slug !== current.slug && !current.relatedSlugs.includes(p.slug)
  )

  return [...related, ...sameCategory].slice(0, limit)
}
