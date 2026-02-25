// ============================================================
// Extended Product Details Generator
// ============================================================

import { Product } from "./data"

export interface ProductDetails {
  longDescription: string
  features: string[]
  specifications: { label: string; value: string }[]
  applications: string[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
}

type ProductType =
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
  | "general"

function detectProductType(product: Product): ProductType {
  const n = product.name.toLowerCase()
  if (n.includes("shovel") || n.includes("excavator") || n.includes("backhoe") || n.includes("bobcat")) return "earthmoving"
  if (n.includes("crane")) return "crane"
  if (n.includes("forklift")) return "forklift"
  if (n.includes("manlift")) return "manlift"
  if (n.includes("tanker")) return "tanker"
  if (n.includes("trailer") || n.includes("pickup") || n.includes("recovery")) return "transport"
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
  if (n.includes("cutter") || n.includes("cutting") || n.includes("wood") || n.includes("marble")) return "cutting"
  if (n.includes("plaster")) return "plaster"
  if (n.includes("coring") || n.includes("coaring")) return "coring"
  if (n.includes("station") || n.includes("level") || n.includes("laser")) return "survey"
  return "general"
}

const typeTemplates: Record<ProductType, {
  descTemplate: string
  features: string[]
  specs: { label: string; value: string }[]
  applications: string[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
}> = {
  earthmoving: {
    descTemplate: "Our {name} is built for heavy-duty earthwork and excavation operations across Abu Dhabi and the UAE. Whether you need to dig foundations, grade terrain, or move large volumes of earth, this equipment delivers reliable performance on every job site. Each unit is maintained to the highest standards and is available with certified operators for safe, efficient operation.",
    features: [
      "Heavy-duty hydraulic system for maximum digging force",
      "Available in multiple sizes for diverse project requirements",
      "Reinforced bucket and undercarriage for extended service life",
      "Climate-controlled operator cabin for comfort in UAE heat",
      "Advanced safety systems including proximity sensors",
      "Low fuel consumption for cost-effective operations",
    ],
    specs: [
      { label: "Type", value: "Earthmoving Equipment" },
      { label: "Fuel", value: "Diesel" },
      { label: "Operator", value: "Available on request" },
      { label: "Delivery", value: "Same-day / Next-day across UAE" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Foundation excavation and trenching",
      "Site clearing and grading",
      "Road and highway construction",
      "Material loading and hauling",
      "Utility installation and pipeline works",
    ],
    benefits: [
      "Well-maintained fleet ensures zero downtime on your project",
      "Flexible rental terms from daily to long-term contracts",
      "Certified operators available to ensure safe operations",
      "Fast delivery anywhere in Abu Dhabi and Dubai",
    ],
    faqs: [
      { question: "What sizes are available for rent?", answer: "We offer a full range of sizes from compact mini models for tight spaces to large-capacity units for major excavation projects. Contact us to discuss your specific requirements." },
      { question: "Do you provide operators with the equipment?", answer: "Yes, we provide trained and certified operators with all our earthmoving equipment. Operators are experienced in UAE construction environments and follow strict safety protocols." },
      { question: "How quickly can you deliver to my site?", answer: "We offer same-day or next-day delivery across Abu Dhabi and Dubai, depending on availability. For urgent requirements, contact our team directly via WhatsApp for the fastest response." },
    ],
  },
  crane: {
    descTemplate: "The {name} from Hadeed Transport is your go-to solution for heavy lifting and material handling at construction sites across the UAE. Designed for precision and power, our cranes handle loads at various heights and capacities, making them ideal for high-rise construction, industrial installations, and infrastructure projects. Every crane in our fleet undergoes rigorous maintenance and safety inspections.",
    features: [
      "High lifting capacity for heavy construction loads",
      "Telescopic boom with extended reach capability",
      "360-degree rotation for maximum operational flexibility",
      "Load moment indicator for safe lifting operations",
      "Anti-two-block safety system",
      "Outrigger monitoring system for stability",
    ],
    specs: [
      { label: "Type", value: "Mobile Crane" },
      { label: "Fuel", value: "Diesel" },
      { label: "Operation", value: "Certified crane operator included" },
      { label: "Delivery", value: "Scheduled delivery across UAE" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "High-rise building construction",
      "Steel structure erection",
      "Heavy equipment installation",
      "Bridge and infrastructure projects",
      "Industrial plant maintenance",
    ],
    benefits: [
      "Certified crane operators with years of experience",
      "Regular load testing and safety certification",
      "Competitive daily and monthly rental rates",
      "24/7 support for critical lifting operations",
    ],
    faqs: [
      { question: "What is the maximum lifting capacity?", answer: "Our mobile cranes range from 25 tons to 50 tons lifting capacity. For specific load charts and reach specifications, contact our team with your project requirements." },
      { question: "Is the crane operator included in the rental?", answer: "Yes, all crane rentals include a certified crane operator trained in UAE safety standards. This ensures safe and efficient operations on your site." },
      { question: "Can the crane be used for night operations?", answer: "Yes, our cranes are equipped with working lights for night operations. We can arrange 24-hour crane services for projects with tight deadlines." },
    ],
  },
  forklift: {
    descTemplate: "Hadeed Transport offers forklifts ranging from 1 ton to 15 ton capacity for material handling operations across Abu Dhabi and the UAE. Our {name} units are perfect for warehouses, construction sites, and industrial facilities. Each forklift is regularly serviced and inspected to ensure reliable performance and operator safety.",
    features: [
      "Capacity range from 1 ton to 15 tons",
      "Diesel and electric models available",
      "Ergonomic operator controls for comfort",
      "High-visibility mast design for safe operations",
      "Fork positioning system for precision handling",
      "Heavy-duty tires suitable for rough terrain",
    ],
    specs: [
      { label: "Capacity", value: "1 Ton to 15 Ton" },
      { label: "Fuel", value: "Diesel / Electric" },
      { label: "Lift Height", value: "Various (up to 6m+)" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Warehouse material handling",
      "Construction site logistics",
      "Loading and unloading trucks",
      "Industrial plant operations",
      "Container and pallet movement",
    ],
    benefits: [
      "Wide range of capacities to match your needs",
      "Well-maintained fleet for reliable performance",
      "Flexible rental periods from hours to months",
      "Delivered and collected from your site",
    ],
    faqs: [
      { question: "What capacity forklifts do you offer?", answer: "We offer forklifts from 1 ton up to 15 ton capacity. Whether you need a compact unit for warehouse work or a heavy-duty forklift for construction, we have the right size for your project." },
      { question: "Can I rent a forklift for just one day?", answer: "Yes, we offer flexible rental periods including daily, weekly, and monthly options. Contact us for the best rate based on your rental duration." },
      { question: "Do you deliver forklifts to my location?", answer: "Yes, we deliver forklifts anywhere in Abu Dhabi and across the UAE. Same-day delivery is available based on fleet availability." },
    ],
  },
  manlift: {
    descTemplate: "Our {name} equipment provides safe and efficient access to elevated work areas for construction, maintenance, and installation projects. Hadeed Transport's man lifts are ideal for reaching heights safely, whether for building maintenance, painting, electrical work, or facade installations across Abu Dhabi and the UAE.",
    features: [
      "Safe platform for elevated work operations",
      "Smooth hydraulic lift system",
      "Non-slip platform with safety railings",
      "Emergency lowering system",
      "Compact design for tight spaces",
      "Battery/diesel powered options available",
    ],
    specs: [
      { label: "Type", value: "Aerial Work Platform" },
      { label: "Power", value: "Battery / Diesel" },
      { label: "Platform", value: "Non-slip with safety rails" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Building facade maintenance and painting",
      "Electrical and HVAC installation",
      "Warehouse high-rack maintenance",
      "Event setup and decoration",
      "Industrial plant inspection",
    ],
    benefits: [
      "Safer alternative to traditional scaffolding",
      "Quick setup — operational within minutes",
      "Multiple height options for any requirement",
      "Regularly tested and certified for safety",
    ],
    faqs: [
      { question: "What heights can your man lifts reach?", answer: "We offer both low-level and high-level man lifts. Low-level units reach up to 12 meters, while high-level units can reach 20+ meters. Contact us with your height requirements for the best recommendation." },
      { question: "Are man lifts safe for outdoor use?", answer: "Yes, our man lifts are designed for both indoor and outdoor use. They include safety features like wind speed sensors and stabilization systems for outdoor operations." },
      { question: "Do I need a license to operate a man lift?", answer: "Operators should be trained in aerial work platform safety. We can provide trained operators with the equipment or offer guidance on operation requirements." },
    ],
  },
  tanker: {
    descTemplate: "Hadeed Transport's {name} is a reliable solution for liquid transportation needs across Abu Dhabi and the UAE. Whether you need water delivery, diesel transport, or sewerage services, our tankers are well-maintained, properly certified, and available for short-term and long-term rental with experienced drivers.",
    features: [
      "High-capacity tank for efficient transportation",
      "Properly sealed and certified for safe transport",
      "Pump system for quick loading and unloading",
      "Non-corrosive tank construction",
      "GPS tracking for fleet management",
      "Experienced drivers available",
    ],
    specs: [
      { label: "Type", value: "Liquid Transport Tanker" },
      { label: "Fuel", value: "Diesel" },
      { label: "Driver", value: "Experienced driver available" },
      { label: "Delivery", value: "Across Abu Dhabi & UAE" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Construction site water supply",
      "Dust suppression and road washing",
      "Diesel delivery to remote sites",
      "Sewerage and waste water management",
      "Emergency water supply services",
    ],
    benefits: [
      "Certified vehicles compliant with UAE regulations",
      "Experienced drivers with proper licensing",
      "Available for scheduled or on-demand delivery",
      "Well-maintained tanks for clean transport",
    ],
    faqs: [
      { question: "What capacity tankers do you offer?", answer: "We offer tankers in various capacities including 3,000 gallon and 5,000 gallon water tankers, diesel tankers, and sewerage tankers. Contact us with your volume requirements." },
      { question: "Can you provide regular water delivery to my construction site?", answer: "Yes, we offer scheduled water delivery services to construction sites across Abu Dhabi and the UAE. We can set up daily, weekly, or custom delivery schedules." },
      { question: "Are your tankers certified for road transport?", answer: "Yes, all our tankers are properly certified and compliant with UAE transport regulations. Drivers hold the required licenses for liquid transportation." },
    ],
  },
  transport: {
    descTemplate: "The {name} from Hadeed Transport is designed for reliable material and equipment transportation across Abu Dhabi and the UAE. Whether you need to move construction materials, heavy equipment, or general cargo, our transport vehicles are well-maintained and available with experienced drivers for safe, on-time delivery.",
    features: [
      "Heavy-duty chassis for maximum payload",
      "Secure loading bed with tie-down points",
      "Hydraulic loading ramp where applicable",
      "GPS-equipped for real-time tracking",
      "Climate-controlled cab for driver comfort",
      "Regular safety inspections and maintenance",
    ],
    specs: [
      { label: "Type", value: "Transport Vehicle" },
      { label: "Fuel", value: "Diesel" },
      { label: "Driver", value: "Available on request" },
      { label: "Coverage", value: "Abu Dhabi, Dubai & UAE-wide" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Construction material delivery",
      "Heavy equipment transportation",
      "Warehouse logistics and distribution",
      "Removal and relocation services",
      "General cargo transport",
    ],
    benefits: [
      "Reliable fleet for on-time deliveries",
      "Experienced drivers with UAE road knowledge",
      "Flexible rental terms and competitive rates",
      "Fully insured vehicles for peace of mind",
    ],
    faqs: [
      { question: "Can I rent a vehicle with a driver?", answer: "Yes, we provide experienced drivers with all our transport vehicles. Drivers are licensed, insured, and familiar with routes across Abu Dhabi and the UAE." },
      { question: "What is the maximum load capacity?", answer: "Load capacity varies by vehicle — from 1-ton pickups for light loads to trailers and recovery trucks for heavy equipment. Contact us with your cargo details for the best recommendation." },
      { question: "Do you offer long-term transport contracts?", answer: "Yes, we offer flexible long-term rental contracts with competitive monthly rates. This is ideal for ongoing projects that require regular transportation." },
    ],
  },
  bus: {
    descTemplate: "The {name} from Hadeed Transport provides comfortable and reliable passenger transportation for construction crews, labor camps, and corporate staff in Abu Dhabi and across the UAE. Our buses are well-maintained, air-conditioned, and available with professional drivers for safe daily commutes and project site transfers.",
    features: [
      "Comfortable seating with adequate legroom",
      "Fully air-conditioned for UAE climate",
      "Professional licensed driver included",
      "Safety features including seatbelts and emergency exits",
      "Regular maintenance and safety inspections",
      "GPS tracking for fleet management",
    ],
    specs: [
      { label: "Type", value: "Passenger Bus" },
      { label: "A/C", value: "Fully Air-Conditioned" },
      { label: "Driver", value: "Professional driver included" },
      { label: "Coverage", value: "Abu Dhabi, Dubai & UAE-wide" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Construction worker daily transportation",
      "Labor camp to site shuttle services",
      "Corporate staff transport",
      "Event and tour group transportation",
      "Airport transfers for large groups",
    ],
    benefits: [
      "Licensed drivers with clean driving records",
      "Air-conditioned comfort for UAE climate",
      "Flexible scheduling for shift-based operations",
      "Well-maintained fleet for reliable service",
    ],
    faqs: [
      { question: "Do you provide a driver with the bus?", answer: "Yes, all bus rentals include a professional, licensed driver. Our drivers are experienced in UAE roads and maintain high safety standards." },
      { question: "Can I book a bus for daily worker transportation?", answer: "Absolutely. We specialize in daily worker transportation from labor camps to construction sites. We offer flexible scheduling to match your shift patterns." },
      { question: "Are your buses air-conditioned?", answer: "Yes, all our buses are fully air-conditioned to ensure passenger comfort in the UAE climate. Regular A/C maintenance ensures optimal performance." },
    ],
  },
  car: {
    descTemplate: "Hadeed Transport offers {name} rentals for staff transportation across Abu Dhabi and the UAE. Our fleet of saloon cars is ideal for supervisors, engineers, and management personnel who need reliable daily transportation. All vehicles are well-maintained, insured, and available with professional drivers.",
    features: [
      "Comfortable sedan with premium features",
      "Fully air-conditioned interior",
      "Automatic transmission for easy driving",
      "GPS navigation system",
      "Comprehensive insurance coverage",
      "Professional chauffeur available",
    ],
    specs: [
      { label: "Type", value: "Sedan / Saloon Car" },
      { label: "Capacity", value: "5 Passengers" },
      { label: "A/C", value: "Fully Air-Conditioned" },
      { label: "Insurance", value: "Comprehensive coverage" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Staff and management transportation",
      "Site inspection and supervision visits",
      "Client meetings and corporate travel",
      "Airport pickup and drop-off",
      "Daily commuting for project teams",
    ],
    benefits: [
      "Multiple car models available to suit preferences",
      "Fully insured for complete peace of mind",
      "Flexible rental including self-drive options",
      "Well-maintained vehicles with regular servicing",
    ],
    faqs: [
      { question: "What car models are available?", answer: "We offer different sedan models suitable for staff transportation. Contact us with your preferences and we'll provide available options with pricing." },
      { question: "Can I rent a car without a driver?", answer: "Yes, self-drive options are available with proper documentation. We also offer chauffeur-driven cars for added convenience." },
      { question: "Is insurance included in the rental?", answer: "Yes, comprehensive insurance is included with all our car rentals. Additional coverage options are available upon request." },
    ],
  },
  roller: {
    descTemplate: "Our {name} is engineered for superior compaction performance on construction sites across Abu Dhabi and the UAE. Ideal for road construction, sub-base preparation, and earthwork compaction, this roller delivers consistent results with reliable operation. Hadeed Transport ensures every roller is maintained to optimal operating standards.",
    features: [
      "Powerful vibration system for effective compaction",
      "Adjustable amplitude and frequency settings",
      "Ergonomic operator controls",
      "Water sprinkler system to prevent material adhesion",
      "Heavy-duty drum for maximum compaction force",
      "Compact design for maneuverability on site",
    ],
    specs: [
      { label: "Type", value: "Vibratory Roller / Compactor" },
      { label: "Fuel", value: "Diesel" },
      { label: "Vibration", value: "Adjustable frequency" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Road and highway construction",
      "Sub-base and base course compaction",
      "Parking lot and driveway construction",
      "Trench backfill compaction",
      "Earthwork and grading projects",
    ],
    benefits: [
      "Various tonnages to match project requirements",
      "Well-maintained for consistent compaction quality",
      "Delivered to your site ready to operate",
      "Competitive daily and weekly rental rates",
    ],
    faqs: [
      { question: "What size rollers do you offer?", answer: "We offer rollers from 1 ton to 4 ton capacity, including both driving and walk-behind models. The right size depends on your project area and compaction requirements." },
      { question: "Is fuel included in the rental price?", answer: "Fuel is typically not included in the rental price. However, we can discuss all-inclusive packages for long-term rentals." },
      { question: "Can you deliver the roller to my construction site?", answer: "Yes, we deliver rollers on flatbed trucks to any location in Abu Dhabi and across the UAE. Delivery can be arranged for the same day or next day." },
    ],
  },
  compactor: {
    descTemplate: "The {name} from Hadeed Transport is designed for efficient compaction in limited access areas. Perfect for trenches, foundations, and small-area earthwork, this equipment delivers powerful compaction in a compact package. Available for rent across Abu Dhabi and the UAE with flexible rental terms.",
    features: [
      "High compaction force in a compact design",
      "Ideal for confined spaces and trenches",
      "Easy to transport and maneuver",
      "Vibration-dampened handle for operator comfort",
      "Reliable engine for continuous operation",
      "Low maintenance design for minimal downtime",
    ],
    specs: [
      { label: "Type", value: "Plate / Jumping Jack Compactor" },
      { label: "Fuel", value: "Petrol / Diesel" },
      { label: "Application", value: "Limited area compaction" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Trench backfill compaction",
      "Foundation preparation",
      "Paving and interlocking work",
      "Pipe laying and utility installation",
      "Landscaping and hardscaping",
    ],
    benefits: [
      "Portable and easy to transport to any location",
      "Efficient compaction in tight spaces where rollers can't reach",
      "Simple operation — no specialized training required",
      "Affordable rental rates for short-term projects",
    ],
    faqs: [
      { question: "What's the difference between a plate compactor and jumping jack?", answer: "Plate compactors are best for granular soils and flat surfaces, while jumping jacks (rammers) excel at compacting cohesive soils in trenches and confined spaces. Our team can recommend the right tool for your project." },
      { question: "Can I rent a compactor for just a few hours?", answer: "Our minimum rental period is one day. For short projects, daily rental provides the most cost-effective option." },
      { question: "Do I need special training to operate it?", answer: "These are straightforward to operate. We provide a brief orientation when delivering the equipment to ensure safe and effective use." },
    ],
  },
  concrete: {
    descTemplate: "Hadeed Transport's {name} is essential for professional concrete work on construction sites across Abu Dhabi and the UAE. Whether you're mixing, pouring, vibrating, or finishing concrete, our equipment ensures quality results every time. Each unit is thoroughly maintained and ready for immediate deployment to your project site.",
    features: [
      "Professional-grade construction quality",
      "Reliable engine for continuous operation",
      "Easy to operate and maintain on site",
      "Portable design for site flexibility",
      "Safety guards and emergency stop systems",
      "Available in various sizes and capacities",
    ],
    specs: [
      { label: "Type", value: "Concrete Equipment" },
      { label: "Power", value: "Diesel / Petrol / Electric" },
      { label: "Application", value: "Concrete works" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Building slab and foundation concrete works",
      "Beam and column concrete pouring",
      "Road and pavement construction",
      "Precast element production",
      "Repair and maintenance concrete work",
    ],
    benefits: [
      "Ready-to-use equipment delivered to your site",
      "Multiple power options (diesel, petrol, electric)",
      "Quick turnaround for urgent project needs",
      "Competitive rates for all rental durations",
    ],
    faqs: [
      { question: "Do you offer concrete vibrators in different sizes?", answer: "Yes, we offer concrete vibrators with various needle diameters and lengths to suit different concrete section sizes. Both diesel and electric models are available." },
      { question: "Can I rent a concrete mixer for a small residential project?", answer: "Absolutely. Our concrete mixers are available in sizes suitable for both small residential projects and large commercial construction. Daily rental is available." },
      { question: "Is the equipment delivered with fuel?", answer: "Diesel and petrol-powered equipment is delivered with enough fuel to start operations. Ongoing fuel supply is the renter's responsibility unless otherwise arranged." },
    ],
  },
  generator: {
    descTemplate: "The {name} from Hadeed Transport provides reliable power generation for construction sites, events, and industrial operations across Abu Dhabi and the UAE. Our generators are well-maintained, fuel-efficient, and available in capacities from 10 KVA to 500 KVA to meet any power requirement. Fast delivery and 24/7 support ensure your operations never stop.",
    features: [
      "Reliable power output for continuous operation",
      "Sound-attenuated enclosure for low noise",
      "Automatic voltage regulation (AVR)",
      "Large fuel tank for extended run time",
      "Digital control panel with monitoring",
      "Weather-resistant enclosure for outdoor use",
    ],
    specs: [
      { label: "Type", value: "Diesel Generator" },
      { label: "Fuel", value: "Diesel" },
      { label: "Noise Level", value: "Sound-attenuated enclosure" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Construction site temporary power",
      "Event and exhibition power supply",
      "Emergency backup power",
      "Industrial and commercial operations",
      "Remote area power generation",
    ],
    benefits: [
      "Wide range from 10 KVA to 500 KVA capacity",
      "24/7 technical support for critical operations",
      "Fuel-efficient models to minimize running costs",
      "Fast deployment for emergency power needs",
    ],
    faqs: [
      { question: "What size generator do I need?", answer: "Generator sizing depends on your total power requirement. As a guide: 10-20 KVA for small tools and lighting, 60-150 KVA for medium construction sites, 225-500 KVA for large projects. Our team can help you calculate the right size." },
      { question: "Do you provide fuel for the generator?", answer: "Generators are delivered with fuel for initial operation. We also offer fuel delivery services for long-term rentals. Contact us to arrange regular fuel top-ups." },
      { question: "Is 24/7 technical support available?", answer: "Yes, we provide round-the-clock technical support for all generator rentals. If any issue arises, our maintenance team will respond promptly to minimize downtime." },
    ],
  },
  steel: {
    descTemplate: "Hadeed Transport's {name} is a must-have for rebar processing on construction sites across Abu Dhabi and the UAE. Designed for precision and efficiency, this machine handles steel reinforcement bars of different sizes, helping your team work faster while maintaining quality standards. Available for rent with flexible terms.",
    features: [
      "Handles various rebar sizes and diameters",
      "Powerful electric motor for consistent operation",
      "Precision angle settings for accurate bending/cutting",
      "Safety guards and emergency stop button",
      "Portable design for easy relocation on site",
      "Durable construction for heavy-duty use",
    ],
    specs: [
      { label: "Type", value: "Steel Processing Equipment" },
      { label: "Power", value: "Electric" },
      { label: "Capacity", value: "Various rebar diameters" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Rebar fabrication for foundations",
      "Column and beam reinforcement preparation",
      "Slab reinforcement work",
      "Precast element production",
      "General steel fabrication",
    ],
    benefits: [
      "Precision machining for quality reinforcement",
      "Faster than manual bending and cutting",
      "Multiple size capability in one machine",
      "Reduces labor costs and improves productivity",
    ],
    faqs: [
      { question: "What sizes of rebar can the machine handle?", answer: "Our steel bending and cutting machines handle various rebar diameters from 8mm to 32mm. For specific size requirements, contact our team." },
      { question: "Is the machine electric or diesel powered?", answer: "Our steel processing machines are electrically powered for precise, clean operation. They require a standard 3-phase power supply or can work with a generator." },
      { question: "Can I rent both bending and cutting machines together?", answer: "Yes, we offer both machines individually and as a package. Renting together often provides a better rate. Contact us for a combined quote." },
    ],
  },
  compressor: {
    descTemplate: "The {name} from Hadeed Transport delivers reliable compressed air for construction, cleaning, and industrial operations across Abu Dhabi and the UAE. Our compressors are well-maintained and available in various capacities to power pneumatic tools, sandblasting equipment, and cleaning operations on your project site.",
    features: [
      "High CFM output for demanding applications",
      "Reliable diesel or electric motor",
      "Built-in moisture separator for clean air",
      "Portable design with tow bar for easy transport",
      "Low noise operation",
      "Large air receiver tank for consistent pressure",
    ],
    specs: [
      { label: "Type", value: "Air Compressor" },
      { label: "Power", value: "Diesel / Electric" },
      { label: "Application", value: "Compressed air generation" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Pneumatic tool operation",
      "Sandblasting and surface preparation",
      "Construction site cleaning",
      "Industrial air supply",
      "Pipeline testing and commissioning",
    ],
    benefits: [
      "Multiple capacity options from portable to industrial",
      "Diesel and electric models for any environment",
      "Reliable performance for continuous operation",
      "Fast delivery to any site in the UAE",
    ],
    faqs: [
      { question: "What capacity compressor do I need?", answer: "Capacity depends on your application. Small electric compressors suit light tools, 300 CFM units power most construction pneumatic equipment, and 900 CFM units are for sandblasting and large-scale operations." },
      { question: "Can the compressor run pneumatic jack hammers?", answer: "Yes, our diesel air compressors (300 CFM and 900 CFM) are specifically designed to power pneumatic jack hammers, breakers, and other heavy-duty tools." },
      { question: "Do you offer compressors for indoor use?", answer: "Yes, our electric air compressors are suitable for indoor use with lower noise levels and zero emissions. They're ideal for workshops and enclosed spaces." },
    ],
  },
  pump: {
    descTemplate: "Hadeed Transport's {name} provides effective water management solutions for construction sites across Abu Dhabi and the UAE. Whether you need to remove groundwater, manage rainwater, or control water levels during excavation, our dewatering equipment ensures your site stays dry and workable.",
    features: [
      "High-capacity pumping for fast water removal",
      "Submersible and surface pump options",
      "Automatic float switch operation",
      "Corrosion-resistant construction",
      "Complete system with hoses and fittings",
      "Diesel or electric powered options",
    ],
    specs: [
      { label: "Type", value: "Dewatering Pump System" },
      { label: "Power", value: "Diesel / Electric" },
      { label: "Application", value: "Water management" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Excavation and foundation dewatering",
      "Basement construction water management",
      "Flood emergency response",
      "Construction site drainage",
      "Underground utility installation",
    ],
    benefits: [
      "Complete system ready for immediate deployment",
      "Multiple pump sizes for any volume requirement",
      "24/7 support for critical dewatering operations",
      "Experienced team for system setup and monitoring",
    ],
    faqs: [
      { question: "What volume of water can the system handle?", answer: "Our dewatering systems range from small units handling a few hundred liters per minute to large systems managing thousands of liters. We assess your site conditions and recommend the right capacity." },
      { question: "Do you help with installation and setup?", answer: "Yes, our technical team can assist with system installation, setup, and initial operation. For ongoing large-scale dewatering, we offer monitoring services." },
      { question: "Can you handle emergency dewatering?", answer: "Yes, we offer emergency dewatering services with rapid deployment. Contact our 24/7 support line for urgent water management needs." },
    ],
  },
  scaffolding: {
    descTemplate: "Hadeed Transport provides both heavy-duty and light-duty scaffolding solutions for construction projects across Abu Dhabi and the UAE. Our {name} systems offer safe access to elevated work areas, supporting everything from building construction and renovation to painting and maintenance operations.",
    features: [
      "Heavy and light-duty configurations available",
      "Certified scaffolding materials meeting UAE standards",
      "Adjustable height and platform options",
      "Safety toe boards and guardrails included",
      "Quick assembly and disassembly",
      "Access ladders and stairway towers available",
    ],
    specs: [
      { label: "Type", value: "Scaffolding System" },
      { label: "Material", value: "Galvanized Steel" },
      { label: "Load Rating", value: "Heavy & Light Duty" },
      { label: "Delivery", value: "Across Abu Dhabi & UAE" },
      { label: "Rental Period", value: "Weekly, Monthly, Project-based" },
    ],
    applications: [
      "Building construction and facade work",
      "Painting and plastering operations",
      "Structural repair and maintenance",
      "Industrial plant maintenance",
      "Event stage and platform construction",
    ],
    benefits: [
      "Complete scaffolding packages including all accessories",
      "Erection and dismantling services available",
      "Certified materials meeting safety standards",
      "Flexible quantities for projects of any size",
    ],
    faqs: [
      { question: "Do you provide scaffolding erection services?", answer: "Yes, we offer professional scaffolding erection and dismantling services. Our trained team ensures proper assembly according to safety standards and regulations." },
      { question: "What area can you cover with scaffolding?", answer: "We can supply scaffolding for projects of any size, from small maintenance work to large building construction. Contact us with your project dimensions for a tailored quote." },
      { question: "Is the scaffolding approved for UAE use?", answer: "Yes, all our scaffolding materials are approved and certified for use in the UAE. Regular inspections ensure compliance with local safety standards." },
    ],
  },
  cutting: {
    descTemplate: "Hadeed Transport's {name} delivers precision cutting performance for construction projects across Abu Dhabi and the UAE. Designed for professional use, this cutting equipment handles various materials with accuracy and efficiency. Each machine is regularly maintained and safety-checked before every rental.",
    features: [
      "Precision cutting with adjustable depth/angle",
      "Powerful motor for efficient material processing",
      "Water cooling system where applicable",
      "Safety guards and emergency stop",
      "Dust collection or suppression system",
      "Portable design for easy site relocation",
    ],
    specs: [
      { label: "Type", value: "Cutting Machine" },
      { label: "Power", value: "Electric / Petrol" },
      { label: "Application", value: "Material cutting" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Block and brick cutting for masonry work",
      "Marble and tile precision cutting",
      "Wood cutting for formwork and carpentry",
      "Concrete cutting and sawing",
      "Road and pavement cutting",
    ],
    benefits: [
      "Professional-grade cutting accuracy",
      "Multiple blade options for different materials",
      "Reduces manual labor and improves productivity",
      "Regular maintenance ensures peak performance",
    ],
    faqs: [
      { question: "What materials can the machine cut?", answer: "Depending on the specific machine, our cutters handle concrete, blocks, marble, tiles, wood, and more. Contact us with your cutting requirements and we'll recommend the right tool." },
      { question: "Are replacement blades available?", answer: "Yes, we can supply replacement blades and cutting discs for all our machines. Blade costs may be separate from the rental charge." },
      { question: "Is the cutting machine suitable for indoor use?", answer: "Electric models are suitable for indoor use with proper ventilation and dust management. We recommend water-cooled cutting for indoor operations to minimize dust." },
    ],
  },
  plaster: {
    descTemplate: "The {name} from Hadeed Transport streamlines plastering operations on construction sites across Abu Dhabi and the UAE. This professional-grade machine applies plaster evenly and efficiently, significantly reducing labor time and improving finish quality on walls and ceilings.",
    features: [
      "Even plaster application for professional finish",
      "Adjustable output pressure and volume",
      "Suitable for various plaster types",
      "Large hopper capacity for continuous operation",
      "Easy to clean and maintain between uses",
      "Wheels and handles for easy site mobility",
    ],
    specs: [
      { label: "Type", value: "Plastering Machine" },
      { label: "Power", value: "Electric" },
      { label: "Application", value: "Wall and ceiling plaster" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Interior wall plastering",
      "Ceiling plaster application",
      "External render application",
      "Large-area plastering projects",
      "Commercial and residential finishing",
    ],
    benefits: [
      "5x faster than manual plastering",
      "Consistent, even plaster thickness",
      "Reduces material waste",
      "Less labor required for same output",
    ],
    faqs: [
      { question: "What types of plaster can the machine apply?", answer: "Our plaster machine is compatible with various plaster types including gypsum, cement, and lime-based plasters. Contact us with your specific material requirements." },
      { question: "How much area can be plastered per day?", answer: "A plaster machine typically covers 200-400 sqm per day depending on the material and surface conditions — significantly more than manual application." },
      { question: "Do you provide training on how to use it?", answer: "Yes, we provide a brief operational training when delivering the machine. For teams unfamiliar with machine plastering, we can arrange a skilled operator to assist." },
    ],
  },
  coring: {
    descTemplate: "Hadeed Transport's {name} provides precision concrete coring solutions for construction and renovation projects across Abu Dhabi and the UAE. Essential for creating openings in concrete slabs, walls, and floors, our coring equipment delivers clean, accurate holes for plumbing, electrical, and HVAC installations.",
    features: [
      "Diamond-tipped core bits for clean cuts",
      "Variable speed control for different materials",
      "Water-cooled system to prevent overheating",
      "Vacuum base or anchor system for stability",
      "Various core bit diameters available",
      "Portable rig for easy positioning",
    ],
    specs: [
      { label: "Type", value: "Concrete Core Drilling Machine" },
      { label: "Power", value: "Electric" },
      { label: "Cooling", value: "Water-cooled diamond bits" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Plumbing and drain pipe installations",
      "Electrical conduit openings",
      "HVAC duct penetrations",
      "Structural testing and sampling",
      "Anchor bolt installations",
    ],
    benefits: [
      "Clean, precise holes without structural damage",
      "Vibration-free operation protects surrounding concrete",
      "Various diameters from small holes to large openings",
      "Suitable for walls, floors, and ceilings",
    ],
    faqs: [
      { question: "What diameters can you core?", answer: "Our coring machines handle diameters from 25mm up to 500mm depending on the core bit. Multiple sizes are available for rent. Contact us with your specific diameter requirements." },
      { question: "Can you core through reinforced concrete?", answer: "Yes, our diamond-tipped core bits are designed to cut through reinforced concrete including rebar. The water-cooled system ensures smooth cutting through tough materials." },
      { question: "Is water supply needed for the coring machine?", answer: "Yes, water cooling is essential for diamond core drilling. A standard water connection or water tank with a pump is needed. We can advise on the setup when delivering." },
    ],
  },
  survey: {
    descTemplate: "Hadeed Transport's {name} provides accurate surveying and measurement capabilities for construction projects across Abu Dhabi and the UAE. Essential for site layout, grading, and quality control, our survey equipment is precision-calibrated and ready for professional use on any project site.",
    features: [
      "High-precision measurement accuracy",
      "Durable construction for field conditions",
      "Easy-to-read digital display",
      "Long battery life for full-day operation",
      "Protective carrying case included",
      "Tripod and accessories included",
    ],
    specs: [
      { label: "Type", value: "Survey & Measurement Equipment" },
      { label: "Power", value: "Rechargeable Battery" },
      { label: "Accuracy", value: "Professional-grade precision" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Construction site layout and staking",
      "Elevation and grading measurement",
      "Building alignment verification",
      "Road and infrastructure survey",
      "As-built documentation",
    ],
    benefits: [
      "Professional-grade accuracy at rental prices",
      "Calibrated instruments for reliable results",
      "Complete kits with tripod and accessories",
      "Technical support for instrument setup",
    ],
    faqs: [
      { question: "Are the instruments recently calibrated?", answer: "Yes, all our survey equipment is regularly calibrated to ensure accuracy. Calibration certificates are available upon request." },
      { question: "Do you provide a tripod and staff?", answer: "Yes, our survey equipment rentals include all necessary accessories including tripods, staffs, and protective carrying cases." },
      { question: "Can you provide a surveyor to operate the equipment?", answer: "While we primarily rent the equipment, we can recommend qualified surveyors in Abu Dhabi and Dubai for your project needs." },
    ],
  },
  jackhammer: {
    descTemplate: "Hadeed Transport's {name} is built for heavy-duty concrete breaking and demolition work across Abu Dhabi and the UAE. Available in various sizes for different applications, from small chipping work to major concrete demolition, our jack hammers deliver reliable power backed by professional maintenance.",
    features: [
      "High impact energy for efficient breaking",
      "Anti-vibration handle system for operator comfort",
      "Multiple chisel point options available",
      "Pneumatic and electric models available",
      "Durable construction for demanding conditions",
      "Easy chisel change mechanism",
    ],
    specs: [
      { label: "Type", value: "Concrete Jack Hammer / Breaker" },
      { label: "Power", value: "Pneumatic / Electric" },
      { label: "Application", value: "Concrete breaking & chipping" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Concrete demolition",
      "Road and pavement breaking",
      "Foundation removal",
      "Trench excavation in concrete",
      "Renovation and remodeling work",
    ],
    benefits: [
      "Various sizes for different breaking requirements",
      "Anti-vibration design reduces operator fatigue",
      "Both pneumatic and electric options available",
      "Chisels and points included in rental",
    ],
    faqs: [
      { question: "What types of jack hammers do you offer?", answer: "We offer both pneumatic (air-powered) and electric jack hammers in various sizes. Pneumatic models require an air compressor, while electric models plug directly into a power supply or generator." },
      { question: "Do I need an air compressor for the jack hammer?", answer: "Pneumatic jack hammers require an air compressor. We offer both the jack hammer and compressor as a package deal. Electric models don't need a compressor." },
      { question: "Are safety accessories included?", answer: "The jack hammer comes with standard chisels and points. We recommend using appropriate PPE (ear protection, safety glasses, gloves) which should be sourced separately." },
    ],
  },
  general: {
    descTemplate: "Hadeed Transport offers the {name} for rent across Abu Dhabi and the UAE. This professional-grade equipment is maintained to the highest standards and available with flexible rental terms. Whether for short-term or long-term projects, we ensure reliable performance and fast delivery to your site.",
    features: [
      "Professional-grade build quality",
      "Regularly maintained and inspected",
      "Easy to operate with standard controls",
      "Safety features for operator protection",
      "Compact and portable design",
      "Available in various sizes/capacities",
    ],
    specs: [
      { label: "Type", value: "Construction Equipment" },
      { label: "Condition", value: "Well-maintained & inspected" },
      { label: "Availability", value: "Ready for immediate dispatch" },
      { label: "Delivery", value: "Same-day across Abu Dhabi" },
      { label: "Rental Period", value: "Daily, Weekly, Monthly" },
    ],
    applications: [
      "Construction site operations",
      "Building maintenance projects",
      "Industrial and commercial use",
      "Infrastructure and civil works",
      "Renovation and remodeling",
    ],
    benefits: [
      "Well-maintained fleet for zero downtime",
      "Flexible rental terms from daily to long-term",
      "Fast delivery anywhere in the UAE",
      "Competitive rates with no hidden charges",
    ],
    faqs: [
      { question: "How do I request a rental quote?", answer: "Contact us via WhatsApp, phone (+971506266515), or email (info@hadeed-transport.com). Provide the equipment name, rental duration, and delivery location for a quick quote." },
      { question: "What are the payment terms?", answer: "We accept various payment methods. Payment terms are discussed during the quotation process and depend on the rental type and duration." },
      { question: "Do you offer discounts for long-term rentals?", answer: "Yes, we offer competitive discounts for weekly and monthly rentals. The longer the rental period, the better the rate. Contact us for a custom quote." },
    ],
  },
}

export function getProductDetails(product: Product): ProductDetails {
  const ptype = detectProductType(product)
  const template = typeTemplates[ptype]

  return {
    longDescription: template.descTemplate.replace("{name}", product.name),
    features: template.features,
    specifications: template.specs,
    applications: template.applications,
    benefits: template.benefits,
    faqs: template.faqs,
  }
}

export function getRelatedProducts(
  product: Product,
  allProducts: Product[],
  count = 3
): Product[] {
  return allProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, count)
}
