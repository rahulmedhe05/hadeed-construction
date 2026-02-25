// ============================================================
// Rental Pages Data Generator
// Generates ~234 unique product × city rental pages
// ============================================================

import { equipmentCategories, spaceRentals, type Product } from "./data"

// ────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────

export interface RentalCity {
  name: string
  slug: string
  preposition: string
  areaText: string
  popularAreas: string[]
}

export interface RentalPageInfo {
  slug: string
  productName: string
  productImage: string
  productDescription: string
  categorySlug: string | null
  categoryName: string | null
  productSlug: string
  city: RentalCity
  isSpace: boolean
  isGrouped: boolean
  whatsappMessage: string
}

// ────────────────────────────────────────────────
// City Data
// ────────────────────────────────────────────────

export const rentalCities: RentalCity[] = [
  {
    name: "Dubai",
    slug: "dubai",
    preposition: "in Dubai",
    areaText:
      "across Dubai including Downtown Dubai, Business Bay, JBR, Dubai Marina, Jebel Ali, Dubai South, Dubai Industrial City, DIP, Al Quoz, and all commercial and residential areas",
    popularAreas: [
      "Downtown Dubai",
      "Business Bay",
      "Dubai Marina",
      "Jebel Ali",
      "Al Quoz",
      "Dubai South",
      "JBR",
      "DIP",
      "Dubai Industrial City",
      "DIFC",
      "Palm Jumeirah",
      "Dubai Silicon Oasis",
    ],
  },
  {
    name: "Abu Dhabi",
    slug: "abu-dhabi",
    preposition: "in Abu Dhabi",
    areaText:
      "throughout Abu Dhabi including ICAD, Mussafah, Khalifa City, Yas Island, Saadiyat Island, Al Reem Island, KIZAD, Masdar City, and all industrial and residential zones",
    popularAreas: [
      "ICAD",
      "Mussafah",
      "Khalifa City",
      "Yas Island",
      "Saadiyat Island",
      "Al Reem Island",
      "KIZAD",
      "Al Ain",
      "Masdar City",
      "Corniche",
      "Al Shamkha",
      "MBZ City",
    ],
  },
  {
    name: "UAE",
    slug: "uae",
    preposition: "across the UAE",
    areaText:
      "across all emirates including Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain",
    popularAreas: [
      "Abu Dhabi",
      "Dubai",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
      "Al Ain",
      "Jebel Ali",
      "ICAD",
      "Mussafah",
      "KIZAD",
    ],
  },
  {
    name: "Sharjah",
    slug: "sharjah",
    preposition: "in Sharjah",
    areaText:
      "across Sharjah including the Industrial Area, Muwaileh, Al Nahda, Aljada, SAIF Zone, Hamriyah Free Zone, Al Majaz, and all residential and commercial areas",
    popularAreas: [
      "Industrial Area",
      "Muwaileh",
      "Al Nahda",
      "Aljada",
      "Al Majaz",
      "Al Khan",
      "SAIF Zone",
      "Hamriyah Free Zone",
      "Al Zahia",
      "Tilal City",
      "Al Taawun",
      "University City",
    ],
  },
]

// ────────────────────────────────────────────────
// Grouped/Category Products
// ────────────────────────────────────────────────

const GROUPED_PRODUCTS = [
  {
    name: "Crane",
    slug: "crane",
    description:
      "Mobile cranes from 25 to 50 tons for heavy lifting, steel erection, and material handling at construction sites",
    image: "/images/equipment/25-mobile-crane.jpg",
  },
  {
    name: "Generator",
    slug: "generator",
    description:
      "Power generators from 10 KVA to 500 KVA for construction sites, events, and temporary power needs",
    image: "/images/tools/gen-500.jpg",
  },
  {
    name: "Roller & Compactor",
    slug: "roller-compactor",
    description:
      "Road rollers from 1 to 4 tons, plate compactors, and jumping jacks for earthwork and road construction",
    image: "/images/tools/driving-roller-4t.jpg",
  },
  {
    name: "Concrete Equipment",
    slug: "concrete-equipment",
    description:
      "Concrete mixers, vibrators, power floats, and saw cutters for all concrete work requirements",
    image: "/images/tools/mixer-petrol.jpg",
  },
  {
    name: "Bus & Staff Transport",
    slug: "bus-transport",
    description:
      "12 to 60 seater buses and saloon cars for staff, labor, and personnel transportation",
    image: "/images/equipment/60-bus.jpg",
  },
  {
    name: "Pickup Truck",
    slug: "pickup-truck",
    description:
      "1 to 3 ton pickup trucks for material and equipment transportation across job sites",
    image: "/images/equipment/3-ton-pickup.jpg",
  },
  {
    name: "Water Tanker",
    slug: "water-tanker",
    description:
      "3,000 to 5,000 gallon water tankers for construction sites, dust control, and water supply",
    image: "/images/equipment/3000-water-tanker.jpg",
  },
  {
    name: "Manlift & Aerial Platform",
    slug: "manlift-aerial-platform",
    description:
      "Low and high level man lifts and aerial work platforms for elevated access and maintenance",
    image: "/images/equipment/high-manlift.jpg",
  },
  {
    name: "Survey Equipment",
    slug: "survey-equipment",
    description:
      "Total stations, auto levels, and laser levels for professional land surveying and construction layout",
    image: "/images/tools/total-station.jpg",
  },
  {
    name: "Air Compressor",
    slug: "air-compressor",
    description:
      "Diesel and electric air compressors from 300 to 900 CFM for cleaning and pneumatic tools",
    image: "/images/tools/compressor-900.jpg",
  },
  {
    name: "Earthmoving Equipment",
    slug: "earthmoving-equipment",
    description:
      "Shovels, excavators, backhoe loaders, and bobcats for excavation, grading, and site preparation",
    image: "/images/equipment/shovel.jpg",
  },
  {
    name: "Forklift",
    slug: "forklift-rental",
    description:
      "Forklifts from 1 ton to 15 ton capacity for warehouses, construction sites, and industrial operations",
    image: "/images/equipment/forklift.jpg",
  },
  {
    name: "Heavy Equipment",
    slug: "heavy-equipment",
    description:
      "Complete fleet of heavy construction equipment including cranes, excavators, loaders, and transport vehicles",
    image: "/images/equipment/backhoe-loader.jpg",
  },
  {
    name: "Construction Tools",
    slug: "construction-tools",
    description:
      "Comprehensive range of small construction tools and equipment for every project requirement",
    image: "/images/tools/jack-hammer.jpg",
  },
  {
    name: "Scaffolding",
    slug: "scaffolding-rental",
    description:
      "Heavy and light duty scaffolding systems for building construction, maintenance, and renovation projects",
    image: "/images/tools/scaffolding.jpg",
  },
]

// ────────────────────────────────────────────────
// Content Generation Helpers
// ────────────────────────────────────────────────

export type ProductType =
  | "earthmoving"
  | "crane"
  | "forklift"
  | "manlift"
  | "tanker"
  | "transport"
  | "bus"
  | "car"
  | "roller"
  | "compactor"
  | "concrete"
  | "generator"
  | "steel"
  | "compressor"
  | "pump"
  | "scaffolding"
  | "cutting"
  | "plaster"
  | "coring"
  | "survey"
  | "jackhammer"
  | "storage"
  | "general"

export function detectType(name: string): ProductType {
  const n = name.toLowerCase()
  if (n.includes("warehouse") || n.includes("storage") || n.includes("container") || n.includes("self-storage")) return "storage"
  if (n.includes("shovel") || n.includes("excavator") || n.includes("backhoe") || n.includes("bobcat") || n.includes("earthmoving")) return "earthmoving"
  if (n.includes("crane")) return "crane"
  if (n.includes("forklift")) return "forklift"
  if (n.includes("manlift") || n.includes("aerial")) return "manlift"
  if (n.includes("tanker")) return "tanker"
  if (n.includes("trailer") || n.includes("pickup") || n.includes("recovery") || n.includes("truck")) return "transport"
  if (n.includes("bus") || n.includes("seater")) return "bus"
  if (n.includes("saloon") || n.includes("car")) return "car"
  if (n.includes("driving roller") || (n.includes("roller") && !n.includes("compactor"))) return "roller"
  if (n.includes("compactor") || n.includes("jumping jack")) return "compactor"
  if (n.includes("jack hammer")) return "jackhammer"
  if (n.includes("concrete") || n.includes("mixer") || n.includes("vibrator") || n.includes("power float")) return "concrete"
  if (n.includes("generator")) return "generator"
  if (n.includes("steel")) return "steel"
  if (n.includes("compressor")) return "compressor"
  if (n.includes("dewatering")) return "pump"
  if (n.includes("scaffolding")) return "scaffolding"
  if (n.includes("cutter") || n.includes("cutting") || n.includes("wood") || n.includes("marble") || n.includes("grind")) return "cutting"
  if (n.includes("plaster")) return "plaster"
  if (n.includes("coring") || n.includes("coaring")) return "coring"
  if (n.includes("station") || n.includes("level") || n.includes("laser") || n.includes("survey")) return "survey"
  if (n.includes("caravan") || n.includes("mobile toilet") || n.includes("office space") || n.includes("open yard")) return "storage"
  return "general"
}

// City-specific content hooks
const cityIntros: Record<string, (product: string) => string> = {
  dubai: (p) =>
    `Dubai's rapidly evolving construction and real estate landscape demands reliable, high-quality equipment. Whether you are working on a luxury high-rise in Downtown Dubai, an infrastructure project near Jebel Ali Port, or a commercial development in Business Bay, having the right ${p.toLowerCase()} makes all the difference. Hadeed Transport delivers well-maintained ${p.toLowerCase()} directly to your project site anywhere in Dubai, ensuring zero downtime and maximum productivity.`,
  "abu-dhabi": (p) =>
    `As one of the UAE's most active construction markets, Abu Dhabi is home to major residential, commercial, and industrial developments. From ICAD and Mussafah industrial zones to the premium projects on Saadiyat Island and Yas Island, the demand for reliable ${p.toLowerCase()} continues to grow. Based in ICAD III, Hadeed Transport is Abu Dhabi's trusted local equipment rental partner, offering same-day delivery and expert support for your ${p.toLowerCase()} needs.`,
  uae: (p) =>
    `The UAE is one of the world's most dynamic construction and infrastructure markets, with projects spanning from Abu Dhabi's industrial zones to Dubai's iconic skyline and the Northern Emirates' developing communities. Hadeed Transport provides premium ${p.toLowerCase()} rental services nationwide, delivering well-maintained equipment to any emirate with the reliability and professionalism your projects demand.`,
  sharjah: (p) =>
    `Sharjah's construction and development sector continues to boom, with major projects like Aljada, Tilal City, and Sharjah Waterfront City transforming the emirate. Whether you need ${p.toLowerCase()} for an industrial project in Hamriyah Free Zone, a residential build in Muwaileh, or commercial construction in Al Majaz, Hadeed Transport delivers reliable, well-maintained equipment directly to your Sharjah project site.`,
}

const citySecondParas: Record<string, (product: string) => string> = {
  dubai: (p) =>
    `Our ${p.toLowerCase()} fleet is available for daily, weekly, and monthly rental across all Dubai areas. We serve projects in Dubai Marina, JBR, Palm Jumeirah, DIFC, Dubai Hills, Dubai South, Dubai Industrial City, DIP, Al Quoz, Jebel Ali, and every other location in the emirate. With competitive rates and a commitment to on-time delivery, Hadeed Transport is the preferred choice for contractors, developers, and businesses in Dubai.`,
  "abu-dhabi": (p) =>
    `Our ${p.toLowerCase()} fleet is available for daily, weekly, and monthly rental across all Abu Dhabi areas. Operating from our ICAD III facility, we offer same-day delivery to Mussafah, Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, KIZAD, Al Ain, and every other area in the emirate. With flexible rental terms and a well-maintained fleet, Hadeed Transport keeps your Abu Dhabi projects running without interruption.`,
  uae: (p) =>
    `Whether your project is in Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, or Umm Al Quwain, our ${p.toLowerCase()} fleet is ready for deployment. We offer flexible rental periods, competitive pricing, and reliable delivery logistics that cover the entire UAE. From major construction sites to small maintenance projects, Hadeed Transport has the equipment you need and the experience to support your operations.`,
  sharjah: (p) =>
    `Our ${p.toLowerCase()} fleet is available for daily, weekly, and monthly rental across all Sharjah areas. We serve projects in the Industrial Area, Muwaileh, Al Nahda, Aljada, Al Zahia, Al Majaz, Al Khan, SAIF Zone, Hamriyah Free Zone, University City, and every other location in the emirate. Conveniently located near Sharjah, Hadeed Transport offers competitive rates with reliable, on-time delivery.`,
}

export interface RentalPageContent {
  metaTitle: string
  metaDescription: string
  h1: string
  heroSubtitle: string
  introParagraph1: string
  introParagraph2: string
  features: string[]
  benefits: string[]
  applications: string[]
  faqs: { question: string; answer: string }[]
}

const typeFeatures: Record<string, string[]> = {
  earthmoving: [
    "Heavy-duty hydraulic system for maximum digging force",
    "Available in multiple sizes for diverse project requirements",
    "Climate-controlled operator cabin for UAE heat",
    "Advanced safety systems including proximity sensors",
    "Low fuel consumption for cost-effective operations",
    "Reinforced bucket and undercarriage for extended life",
  ],
  crane: [
    "High lifting capacity from 25 to 50 tons",
    "Telescopic boom with extended reach capability",
    "360-degree rotation for maximum flexibility",
    "Load moment indicator for safe lifting",
    "Anti-two-block safety system",
    "Outrigger monitoring system for stability",
  ],
  forklift: [
    "Capacity range from 1 ton to 15 tons",
    "Diesel and electric models available",
    "Ergonomic operator controls for comfort",
    "High-visibility mast design for safety",
    "Heavy-duty tires for rough terrain",
    "Fork positioning system for precision handling",
  ],
  manlift: [
    "Safe platform for elevated work operations",
    "Smooth hydraulic lift system",
    "Non-slip platform with safety railings",
    "Emergency lowering system",
    "Compact design for tight spaces",
    "Battery and diesel powered options",
  ],
  tanker: [
    "High-capacity tank for efficient transportation",
    "Properly sealed and certified for safe transport",
    "Pump system for quick loading and unloading",
    "Non-corrosive tank construction",
    "GPS tracking for fleet management",
    "Experienced drivers available on request",
  ],
  transport: [
    "Variety of sizes for different load requirements",
    "Well-maintained vehicles inspected regularly",
    "Experienced drivers available",
    "GPS tracking on all vehicles",
    "Flexible rental periods",
    "Suitable for materials, equipment, and heavy loads",
  ],
  bus: [
    "Range from 12 to 60 passenger capacity",
    "Air-conditioned for UAE climate comfort",
    "Licensed and insured for passenger transport",
    "Experienced, vetted drivers provided",
    "GPS tracking for fleet management",
    "Available for daily, weekly, and monthly rental",
  ],
  car: [
    "Different models available for executive transport",
    "Air-conditioned and well-maintained",
    "Licensed driver available on request",
    "GPS tracking for safety",
    "Flexible rental terms",
    "Suitable for staff and VIP transportation",
  ],
  roller: [
    "Available from 1 ton to 4 ton models",
    "Vibrating drum for effective compaction",
    "Easy-to-operate controls",
    "Excellent maneuverability on site",
    "Fuel-efficient diesel engines",
    "Suitable for both road and earthwork compaction",
  ],
  compactor: [
    "Compact design for confined spaces",
    "High compaction force for effective results",
    "Ergonomic handle for operator comfort",
    "Petrol and diesel models available",
    "Low maintenance and reliable operation",
    "Ideal for trench, backfill, and edge compaction",
  ],
  concrete: [
    "Petrol and electric models available",
    "Robust construction for continuous operation",
    "Easy-to-clean drum and components",
    "Portable design for site mobility",
    "Consistent mixing quality",
    "Available in multiple capacities",
  ],
  generator: [
    "Range from 10 KVA to 500 KVA capacity",
    "Low noise operation for residential areas",
    "Automatic voltage regulation (AVR)",
    "Fuel-efficient diesel engines",
    "Weather-resistant enclosures",
    "24/7 support for power emergencies",
  ],
  steel: [
    "Handles various rebar sizes and specifications",
    "Electric powered for consistent performance",
    "Safety guards and emergency stop systems",
    "Portable design for on-site use",
    "High production capacity",
    "Suitable for all steel reinforcement work",
  ],
  compressor: [
    "Available from 300 to 900 CFM capacity",
    "Diesel and electric powered options",
    "Oil-free options available for clean air",
    "Portable and trailer-mounted models",
    "Aftercooler and moisture separator included",
    "Ideal for pneumatic tools and sandblasting",
  ],
  pump: [
    "High-capacity dewatering capability",
    "Submersible and surface pump options",
    "Handles dirty water with solids",
    "Quick-connect hose fittings",
    "Portable for any job site",
    "24/7 emergency availability",
  ],
  scaffolding: [
    "Heavy and light duty options available",
    "Galvanized steel for durability",
    "Modular design for flexible configurations",
    "Safety-certified to UAE standards",
    "Full accessories: planks, clamps, toe boards",
    "Erection and dismantling services available",
  ],
  cutting: [
    "Diamond blade and standard cutting options",
    "Electric and petrol powered models",
    "Precision cutting for clean finishes",
    "Safety guards and handles",
    "Portable for on-site use",
    "Suitable for concrete, marble, block, and wood",
  ],
  plaster: [
    "High-speed plastering for efficient work",
    "Consistent material application",
    "Adjustable spray patterns",
    "Easy-to-maintain components",
    "Reduces labor costs significantly",
    "Suitable for interior and exterior plastering",
  ],
  coring: [
    "Diamond-tipped core bits for precision drilling",
    "Wet and dry coring capabilities",
    "Various core diameters available",
    "Portable stand-mounted operation",
    "Low vibration for operator comfort",
    "Suitable for concrete sampling and utility penetration",
  ],
  survey: [
    "High-precision measurement instruments",
    "Digital display for easy reading",
    "Rugged construction for field conditions",
    "Tripod and accessories included",
    "Calibrated and certified before every rental",
    "Suitable for construction layout and land surveying",
  ],
  jackhammer: [
    "Available in various sizes and capacities",
    "Pneumatic and electric powered options",
    "Ergonomic design to reduce operator fatigue",
    "Point and chisel bits included",
    "Powerful impact for efficient demolition",
    "Suitable for concrete, asphalt, and rock breaking",
  ],
  storage: [
    "Secure, lockable facilities with 24/7 access",
    "Multiple size options from small units to large areas",
    "CCTV surveillance and security patrols",
    "Flexible lease terms from monthly to yearly",
    "Located in accessible industrial zones",
    "Climate and weather protection for stored items",
  ],
  general: [
    "Professional-grade equipment for commercial use",
    "Thoroughly inspected and maintained before every rental",
    "Flexible daily, weekly, and monthly rental terms",
    "Fast delivery across the UAE",
    "Competitive rental rates with no hidden charges",
    "Expert technical support available 24/7",
  ],
}

const typeBenefits: Record<string, string[]> = {
  earthmoving: [
    "Well-maintained fleet ensures zero downtime",
    "Flexible rental terms from daily to long-term contracts",
    "Certified operators available for safe operations",
    "Fast delivery anywhere in Abu Dhabi and Dubai",
  ],
  crane: [
    "Certified crane operators with years of experience",
    "Regular load testing and safety certification",
    "Competitive daily and monthly rental rates",
    "24/7 support for critical lifting operations",
  ],
  forklift: [
    "Wide range of capacities to match your needs",
    "Well-maintained fleet for reliable performance",
    "Flexible rental periods from hours to months",
    "Delivered and collected from your site",
  ],
  manlift: [
    "Safer and faster alternative to traditional scaffolding",
    "Quick setup — operational within minutes",
    "Multiple height options for any requirement",
    "Regularly tested and certified for safety",
  ],
  tanker: [
    "Certified vehicles compliant with UAE regulations",
    "Experienced drivers with proper licensing",
    "Available for scheduled or on-demand delivery",
    "Well-maintained tanks for safe, clean transport",
  ],
  transport: [
    "Variety of vehicle sizes for any load requirement",
    "GPS-tracked fleet for route transparency",
    "Experienced drivers with UAE road knowledge",
    "Flexible scheduling and competitive pricing",
  ],
  bus: [
    "Licensed and insured passenger transport vehicles",
    "Professional, vetted drivers for your peace of mind",
    "Air-conditioned comfort for UAE weather",
    "Customizable routes and schedules",
  ],
  car: [
    "Well-maintained vehicles for professional impression",
    "Licensed drivers available for executive transport",
    "Flexible rental terms for short and long-term needs",
    "Clean, comfortable, and reliable service",
  ],
  roller: [
    "Multiple tonnage options for different compaction needs",
    "Equipment delivered and collected from your site",
    "Operator training and guidance available",
    "Competitive pricing for project budgets",
  ],
  compactor: [
    "Compact equipment perfect for confined work areas",
    "Simple operation requires minimal training",
    "Reliable performance for consistent compaction quality",
    "Cost-effective rental for short and long-term projects",
  ],
  concrete: [
    "Full range of concrete equipment in one rental",
    "Equipment maintained for consistent output quality",
    "Available for single-day or entire project duration",
    "Technical support for optimal equipment use",
  ],
  generator: [
    "Reliable power supply for uninterrupted operations",
    "Range of capacities to match exact power needs",
    "Fuel delivery services available for remote sites",
    "Emergency replacement within hours if needed",
  ],
  steel: [
    "Speed up rebar work with professional-grade machines",
    "Reduce manual labor costs significantly",
    "Equipment calibrated for accurate bending angles",
    "On-site delivery saves transport time and cost",
  ],
  compressor: [
    "High CFM output for demanding applications",
    "Portable units for easy site-to-site movement",
    "Clean, dry air supply for sensitive operations",
    "Flexible rental terms to suit project timelines",
  ],
  pump: [
    "Rapid deployment for emergency dewatering situations",
    "High-capacity pumps for large-scale operations",
    "Complete setup including hoses and accessories",
    "24/7 availability for flood and storm emergencies",
  ],
  scaffolding: [
    "Modular system adapts to any building shape",
    "Professional erection and dismantling services",
    "Safety-certified to meet UAE construction regulations",
    "Cost-effective alternative to permanent access systems",
  ],
  cutting: [
    "Precision cutting reduces material waste",
    "Multiple blade options for different materials",
    "Portable equipment works anywhere on site",
    "Operator guidance and safety briefing included",
  ],
  plaster: [
    "Dramatically reduce plastering time and labor costs",
    "Consistent application for professional finish quality",
    "Easy cleanup and maintenance between uses",
    "Technical support for first-time machine operators",
  ],
  coring: [
    "Non-destructive sampling preserves structural integrity",
    "Clean, precise holes for utility installation",
    "Various diameters available for different requirements",
    "Dust collection systems for indoor operations",
  ],
  survey: [
    "Calibrated instruments for professional-grade accuracy",
    "Complete kit with accessories ready to use",
    "Technical support for complex surveying tasks",
    "Flexible rental for single-day or extended projects",
  ],
  jackhammer: [
    "Powerful breaking force for tough concrete and rock",
    "Multiple bit options included with rental",
    "Ergonomic design reduces operator fatigue",
    "Fast delivery for urgent demolition needs",
  ],
  storage: [
    "Secure facilities with round-the-clock surveillance",
    "Flexible sizing — only pay for the space you need",
    "Convenient locations near major transport routes",
    "No long-term commitment required — month-to-month available",
  ],
  general: [
    "Professional equipment maintained to high standards",
    "Flexible rental terms for any project duration",
    "Competitive pricing with transparent quotations",
    "Nationwide delivery and pickup across the UAE",
  ],
}

const typeApplications: Record<string, string[]> = {
  earthmoving: ["Foundation excavation and trenching", "Site clearing and grading", "Road and highway construction", "Material loading and hauling", "Utility installation and pipeline works"],
  crane: ["High-rise building construction", "Steel structure erection", "Heavy equipment installation", "Bridge and infrastructure projects", "Industrial plant maintenance"],
  forklift: ["Warehouse material handling", "Construction site logistics", "Loading and unloading trucks", "Industrial plant operations", "Container and pallet movement"],
  manlift: ["Building facade maintenance and painting", "Electrical and HVAC installation", "Warehouse high-rack maintenance", "Event setup and decoration", "Industrial plant inspection"],
  tanker: ["Construction site water supply", "Dust suppression and road washing", "Diesel delivery to remote sites", "Sewerage and waste water management", "Emergency water supply services"],
  transport: ["Construction material delivery", "Equipment and machinery transport", "Building supplies logistics", "Furniture and fixture moving", "Inter-site material transfers"],
  bus: ["Staff and labor daily transportation", "Airport transfers for project teams", "Event and excursion transport", "Inter-camp shuttle services", "Corporate employee commute"],
  car: ["Executive staff transportation", "Airport pickups and transfers", "Client site visits", "Corporate events", "Inter-office commuting"],
  roller: ["Road surface compaction", "Sub-base preparation", "Parking lot construction", "Asphalt compaction", "Soil stabilization work"],
  compactor: ["Trench backfill compaction", "Paving stone bed preparation", "Foundation backfilling", "Pipe zone compaction", "Edge and corner compaction"],
  concrete: ["Foundation concrete pouring", "Slab and floor finishing", "Column and beam casting", "Pre-cast element production", "Repair and patch work"],
  generator: ["Construction site temporary power", "Emergency backup power", "Event and exhibition power", "Remote site power supply", "Welding and tool power on-site"],
  steel: ["Rebar bending for foundations", "Column and beam reinforcement", "Slab reinforcement preparation", "Pre-fabrication yard work", "Custom steel fabrication"],
  compressor: ["Sandblasting and surface preparation", "Pneumatic tool operation", "Line blowing and cleaning", "Spray painting operations", "Industrial air supply"],
  pump: ["Foundation pit dewatering", "Flooded area drainage", "Groundwater level management", "Storm water removal", "Trench water control"],
  scaffolding: ["Building exterior painting and repair", "Facade installation and maintenance", "Interior high-ceiling work", "Event stage construction", "Industrial plant access"],
  cutting: ["Concrete slab cutting", "Expansion joint cutting", "Block and brick cutting", "Marble and tile cutting", "Demolition preparation"],
  plaster: ["Interior wall plastering", "Exterior render application", "Ceiling plastering", "Commercial building finishes", "Renovation and refurbishment"],
  coring: ["Concrete sample extraction", "Plumbing and electrical penetrations", "HVAC duct openings", "Structural testing holes", "Anchor bolt installations"],
  survey: ["Construction site layout", "Land boundary surveys", "Elevation and leveling work", "Road alignment surveys", "Building setout operations"],
  jackhammer: ["Concrete demolition", "Foundation removal", "Asphalt breaking", "Rock breaking", "Renovation and remodeling demolition"],
  storage: ["Inventory and goods warehousing", "Construction material storage", "Vehicle and equipment parking", "Temporary project offices", "Industrial operational space"],
  general: ["Construction projects of all scales", "Infrastructure development", "Maintenance and renovation", "Industrial operations", "Event and temporary installations"],
}

function getTypeFaqs(type: ProductType, productName: string, city: RentalCity): { question: string; answer: string }[] {
  const base: Record<string, { question: string; answer: string }[]> = {
    earthmoving: [
      { question: `What sizes of ${productName} are available for rent ${city.preposition}?`, answer: `We offer a full range from compact mini models for tight urban spaces to large-capacity units for major excavation projects ${city.preposition}. Contact us with your project requirements for the best recommendation.` },
      { question: `Do you provide operators with ${productName} ${city.preposition}?`, answer: `Yes, we provide trained and certified operators with all earthmoving equipment. Our operators are experienced in UAE construction environments and follow strict safety protocols.` },
      { question: `How quickly can ${productName} be delivered ${city.preposition}?`, answer: `We offer same-day or next-day delivery ${city.areaText}. For urgent requirements, contact our team via WhatsApp at +971506266515 for the fastest response.` },
      { question: `What is the rental cost for ${productName} ${city.preposition}?`, answer: `Rental rates vary based on model, duration, and whether an operator is included. We offer competitive daily, weekly, and monthly rates. Contact us for a free, no-obligation quote tailored to your project.` },
    ],
    crane: [
      { question: `What crane lifting capacities are available ${city.preposition}?`, answer: `Our mobile crane fleet ${city.preposition} ranges from 25 tons to 50 tons lifting capacity. For specific load charts and reach specifications, contact our technical team with your project requirements.` },
      { question: `Is a crane operator included in the rental ${city.preposition}?`, answer: `Yes, all crane rentals include a certified crane operator trained in UAE safety standards. This ensures safe and efficient lifting operations on your construction site.` },
      { question: `Can cranes be used for night operations ${city.preposition}?`, answer: `Yes, our cranes are equipped with working lights for night operations. We can arrange 24-hour crane services for projects with tight deadlines anywhere ${city.areaText}.` },
      { question: `How much does crane rental cost ${city.preposition}?`, answer: `Crane rental rates depend on tonnage, rental duration, and project location. We provide competitive rates with operator included. Request a free quote from our team for accurate pricing.` },
    ],
    forklift: [
      { question: `What forklift capacities do you offer ${city.preposition}?`, answer: `We offer forklifts from 1 ton up to 15 ton capacity ${city.preposition}. Whether you need a compact warehouse forklift or a heavy-duty construction site unit, we have the right size.` },
      { question: `Can I rent a forklift for just one day ${city.preposition}?`, answer: `Yes, we offer flexible rental periods including daily, weekly, and monthly options. Contact us for the best rate based on your rental duration.` },
      { question: `Do you deliver forklifts ${city.preposition}?`, answer: `Yes, we deliver forklifts ${city.areaText}. Same-day delivery is available based on fleet availability. Call us at +971506266515 to arrange delivery.` },
    ],
    manlift: [
      { question: `What heights can your man lifts reach ${city.preposition}?`, answer: `We offer both low-level and high-level man lifts. Low-level units reach up to 12 meters, while high-level units can reach 20+ meters. Contact us with your height requirements.` },
      { question: `Are man lifts safe for outdoor use ${city.preposition}?`, answer: `Yes, our man lifts are designed for both indoor and outdoor use in the UAE climate. They include safety features like wind speed sensors and stabilization systems.` },
      { question: `What is the rental rate for man lifts ${city.preposition}?`, answer: `Man lift rental rates depend on the platform height, rental duration, and delivery location. We offer competitive daily, weekly, and monthly rates. Contact us for a personalized quote.` },
    ],
    generator: [
      { question: `What generator sizes are available for rent ${city.preposition}?`, answer: `We offer generators from 10 KVA to 500 KVA ${city.preposition}. Our team can help you determine the right capacity based on your power requirements and site conditions.` },
      { question: `Can you provide generators for events ${city.preposition}?`, answer: `Absolutely. We supply generators for events, exhibitions, and outdoor functions ${city.areaText}. Our low-noise models are perfect for events where quiet operation is essential.` },
      { question: `Do you offer 24/7 generator support ${city.preposition}?`, answer: `Yes, we provide round-the-clock support for generator rentals. If your generator experiences any issues, our maintenance team responds quickly to minimize downtime.` },
    ],
    storage: [
      { question: `What storage sizes are available ${city.preposition}?`, answer: `We offer a range of storage options ${city.preposition} including warehouse units from 300 to 1,000 sqm, self-storage units from 30 to 100 sqm, open yards up to 25,000 sqm, and storage containers.` },
      { question: `Are the storage facilities ${city.preposition} secure?`, answer: `Yes, all our facilities feature CCTV surveillance, security patrols, and controlled access. Your inventory and equipment are safe and secure with us.` },
      { question: `What are the rental terms for storage ${city.preposition}?`, answer: `We offer flexible terms from monthly to yearly leases. No long-term commitment is required for most storage options. Contact us for a customized quote based on your needs.` },
    ],
    tanker: [
      { question: `What tanker capacities are available ${city.preposition}?`, answer: `We offer water tankers in 3,000 and 5,000 gallon capacities, plus diesel tankers and sewerage tankers ${city.preposition}. Contact us with your specific volume requirements.` },
      { question: `Can you provide regular water delivery ${city.preposition}?`, answer: `Yes, we offer scheduled water delivery to construction sites ${city.areaText}. We can set up daily, weekly, or custom delivery schedules based on your project needs.` },
      { question: `Do tanker rentals include a driver?`, answer: `Yes, all tanker rentals include experienced drivers with proper UAE licensing. This ensures safe and legal operation on public roads and within your project site.` },
    ],
    bus: [
      { question: `What bus sizes are available for rent ${city.preposition}?`, answer: `We offer buses from 12 to 60 passenger capacity ${city.preposition}. All buses are air-conditioned and come with professional drivers. Choose the right size for your team.` },
      { question: `Can I rent a bus for daily staff transport ${city.preposition}?`, answer: `Yes, we specialize in daily staff and labor transportation services. We can set up regular pick-up and drop-off routes ${city.areaText} based on your schedule.` },
      { question: `Are the bus drivers licensed and experienced?`, answer: `All our bus drivers are licensed for passenger transport in the UAE and have extensive experience navigating routes ${city.areaText}. Safety is our top priority.` },
    ],
  }

  const defaultFaqs = [
    { question: `How do I rent ${productName} ${city.preposition}?`, answer: `Renting is simple. Contact us via WhatsApp at +971506266515, call us, or fill out our contact form. We'll provide a free quote and arrange delivery ${city.areaText} at your convenience.` },
    { question: `What are the rental rates for ${productName} ${city.preposition}?`, answer: `We offer competitive daily, weekly, and monthly rental rates ${city.preposition}. Pricing depends on the specific model, rental duration, and delivery location. Call us for a free, personalized quote.` },
    { question: `Do you deliver ${productName} to my site ${city.preposition}?`, answer: `Yes, we deliver ${city.areaText}. Depending on availability, same-day or next-day delivery can be arranged. Our logistics team ensures your equipment arrives on time.` },
    { question: `Can I extend my rental period for ${productName}?`, answer: `Absolutely. We understand project timelines can change. You can extend your rental with a simple phone call or WhatsApp message. We offer flexible terms to accommodate your schedule.` },
  ]

  return base[type] || defaultFaqs
}

// ────────────────────────────────────────────────
// Main Generator
// ────────────────────────────────────────────────

function makeWhatsapp(productName: string): string {
  return `https://wa.me/971506266515?text=${encodeURIComponent(`Hi, I'm interested in renting "${productName}". Please send more details and pricing.`)}`
}

function generateAllRentalPages(): RentalPageInfo[] {
  const pages: RentalPageInfo[] = []

  // Equipment products × cities
  for (const category of equipmentCategories) {
    for (const product of category.products) {
      for (const city of rentalCities) {
        pages.push({
          slug: `${product.slug}-rental-${city.slug}`,
          productName: product.name,
          productImage: product.image,
          productDescription: product.description,
          categorySlug: category.slug,
          categoryName: category.name,
          productSlug: product.slug,
          city,
          isSpace: false,
          isGrouped: false,
          whatsappMessage: product.whatsappMessage,
        })
      }
    }
  }

  // Space rentals × cities
  for (const space of spaceRentals) {
    for (const city of rentalCities) {
      pages.push({
        slug: `${space.slug}-rental-${city.slug}`,
        productName: space.name,
        productImage: space.image,
        productDescription: space.heroDescription,
        categorySlug: null,
        categoryName: "Space Rentals",
        productSlug: space.slug,
        city,
        isSpace: true,
        isGrouped: false,
        whatsappMessage: makeWhatsapp(space.name),
      })
    }
  }

  // Grouped/category rental pages × cities
  for (const group of GROUPED_PRODUCTS) {
    for (const city of rentalCities) {
      pages.push({
        slug: `${group.slug}-rental-${city.slug}`,
        productName: group.name,
        productImage: group.image,
        productDescription: group.description,
        categorySlug: null,
        categoryName: null,
        productSlug: group.slug,
        city,
        isSpace: false,
        isGrouped: true,
        whatsappMessage: makeWhatsapp(group.name),
      })
    }
  }

  return pages
}

// ────────────────────────────────────────────────
// Exports
// ────────────────────────────────────────────────

export const allRentalPages = generateAllRentalPages()

export function getRentalPageBySlug(slug: string): RentalPageInfo | undefined {
  return allRentalPages.find((p) => p.slug === slug)
}

export function getRentalPageContent(page: RentalPageInfo): RentalPageContent {
  const type = detectType(page.productName)
  const { productName, city } = page

  const intro1Fn = cityIntros[city.slug] || cityIntros.uae
  const intro2Fn = citySecondParas[city.slug] || citySecondParas.uae

  return {
    metaTitle: `${productName} for Rent ${city.preposition} | Hadeed Transport`,
    metaDescription: `Rent ${productName} ${city.preposition}. ${page.productDescription}. Well-maintained, competitive rates, fast delivery. Daily, weekly & monthly rental. Call +971506266515.`,
    h1: `${productName} Rental ${city.preposition}`,
    heroSubtitle: `Professional ${productName.toLowerCase()} rental services ${city.preposition}. Reliable, well-maintained equipment delivered to your project site ${city.areaText}.`,
    introParagraph1: intro1Fn(productName),
    introParagraph2: intro2Fn(productName),
    features: typeFeatures[type] || typeFeatures.general,
    benefits: typeBenefits[type] || typeBenefits.general,
    applications: typeApplications[type] || typeApplications.general,
    faqs: getTypeFaqs(type, productName, city),
  }
}
