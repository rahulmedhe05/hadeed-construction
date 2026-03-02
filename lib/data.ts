// ============================================================
// Hadeed Emirates Contracting Company - Site Data
// ============================================================

export const SITE_CONFIG = {
  name: "Hadeed Emirates Contracting",
  fullName: "Hadeed Emirates Contracting Company",
  shortName: "HEC",
  tagline: "BUILDING EXCELLENCE ACROSS THE MIDDLE EAST",
  description:
    "With over 25 years of continuous operations, Hadeed Emirates Contracting Company has established itself as a trusted industrial and construction partner delivering complex projects across the UAE, Qatar, and Jordan.",
  email: "info@hadeedconstruction.com",
  phone: "+971506266515",
  whatsapp: "971506266515",
  whatsappLink: "https://wa.link/4fqgo9",
  location: "Abu Dhabi, United Arab Emirates",
  url: "https://hadeedconstruction.com",
  profilePdf: "/HEC LLC - Prequalification.pdf",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
}

// ============================================================
// Project Sectors / Services
// ============================================================

export interface ProjectSector {
  name: string
  slug: string
  icon: string
  shortDescription: string
  fullDescription: string
  image: string
  keyProjects: string[]
  capabilities: string[]
  metaTitle: string
  metaDescription: string
}

export const projectSectors: ProjectSector[] = [
  {
    name: "General Industrial Developments",
    slug: "general-industrial-developments",
    icon: "🏭",
    shortDescription: "Delivery of large-scale industrial complexes, manufacturing plants, fabrication facilities, and production environments designed for operational efficiency, durability, and future expansion.",
    fullDescription: "Hadeed Emirates Contracting Company is a leading provider of general industrial construction services across the UAE, Qatar, and Jordan. We specialize in the design and construction of large-scale industrial complexes, manufacturing plants, fabrication facilities, and production environments. Our industrial developments are engineered for operational efficiency, long-term durability, and seamless future expansion. With over 25 years of experience, we understand the unique challenges of industrial construction — from heavy foundations and structural steel erection to specialized MEP systems and process-specific layouts.",
    image: "/images/sectors/industrial.jpg",
    keyProjects: ["Manufacturing plant construction", "Fabrication workshop development", "Industrial complex master planning", "Process plant construction", "Factory floor and production line setup"],
    capabilities: ["Heavy structural steel erection", "Industrial foundation engineering", "Process piping and utilities", "Industrial ventilation systems", "Fire protection and safety systems", "Environmental compliance construction"],
    metaTitle: "General Industrial Construction | Hadeed Emirates Contracting",
    metaDescription: "Hadeed Emirates Contracting delivers large-scale industrial complexes, manufacturing plants, and fabrication facilities across UAE, Qatar & Jordan. 25+ years of proven experience.",
  },
  {
    name: "Logistics & Warehousing",
    slug: "logistics-warehousing",
    icon: "🚚",
    shortDescription: "Design and construction of modern logistics hubs, distribution centers, cold storage facilities, and high-capacity warehousing supporting regional supply chains and international trade.",
    fullDescription: "Our logistics and warehousing construction division delivers state-of-the-art facilities that form the backbone of regional and international supply chains. From massive distribution centers and temperature-controlled cold storage facilities to automated warehousing systems and last-mile delivery hubs, we construct logistics infrastructure that drives operational efficiency.",
    image: "/images/sectors/logistics.jpg",
    keyProjects: ["Distribution center construction", "Cold storage facility development", "E-commerce fulfillment centers", "Automated warehouse systems", "Cross-docking facilities"],
    capabilities: ["High-capacity racking systems integration", "Temperature-controlled environments", "Advanced loading dock construction", "High-flatness industrial flooring", "Fire suppression and sprinkler systems", "Energy-efficient building envelopes"],
    metaTitle: "Logistics & Warehouse Construction | Hadeed Emirates Contracting",
    metaDescription: "Modern logistics hubs, distribution centers & cold storage construction across UAE, Qatar & Jordan. Hadeed Emirates Contracting — 400+ projects completed.",
  },
  {
    name: "Pharmaceutical & Healthcare Facilities",
    slug: "pharmaceutical-healthcare-facilities",
    icon: "💊",
    shortDescription: "Execution of specialized pharmaceutical buildings including GMP-compliant facilities, laboratories, clean rooms, and controlled-environment production spaces meeting strict regulatory standards.",
    fullDescription: "Hadeed Emirates Contracting has extensive experience in constructing pharmaceutical and healthcare facilities that meet the strictest international regulatory standards. Our portfolio includes GMP-compliant manufacturing facilities, ISO-classified clean rooms, pharmaceutical laboratories, vaccine storage facilities, and hospital infrastructure.",
    image: "/images/sectors/pharma.jpg",
    keyProjects: ["GMP-compliant production facilities", "Pharmaceutical laboratory construction", "Clean room environments (ISO 5-8)", "Vaccine and cold chain storage", "Hospital and clinic construction"],
    capabilities: ["Clean room construction and validation", "HVAC systems for controlled environments", "Pharmaceutical-grade piping systems", "Contamination control construction", "Regulatory compliance documentation", "Specialized flooring and wall systems"],
    metaTitle: "Pharmaceutical & Healthcare Construction | Hadeed Emirates Contracting",
    metaDescription: "GMP-compliant pharmaceutical facilities, clean rooms, and healthcare construction in UAE, Qatar & Jordan. Hadeed Emirates — trusted construction partner.",
  },
  {
    name: "Education & Institutional Buildings",
    slug: "education-institutional-buildings",
    icon: "🎓",
    shortDescription: "Construction of educational campuses, schools, training centers, and academic institutions providing functional, safe, and future-ready learning environments.",
    fullDescription: "We deliver world-class educational and institutional facilities that inspire learning and foster academic excellence. Our education construction portfolio spans K-12 schools, university campuses, vocational training centers, research laboratories, and multi-purpose academic buildings.",
    image: "/images/sectors/education.jpg",
    keyProjects: ["School and university campus construction", "Training center development", "Research laboratory facilities", "Student accommodation buildings", "Sports and recreation facilities"],
    capabilities: ["Acoustic treatment and design", "Smart classroom infrastructure", "Laboratory construction", "Multi-purpose hall construction", "Sustainable building practices", "Accessibility compliance"],
    metaTitle: "Education & Institutional Building Construction | Hadeed Emirates",
    metaDescription: "School, university campus, and institutional building construction across UAE, Qatar & Jordan. Hadeed Emirates Contracting — safe, functional learning environments.",
  },
  {
    name: "Oil & Gas Facilities",
    slug: "oil-gas-facilities",
    icon: "🛢",
    shortDescription: "Proven experience supporting the energy sector through delivery of industrial service facilities, operational compounds, storage facilities, and technically demanding infrastructure projects.",
    fullDescription: "Hadeed Emirates Contracting has a proven track record in supporting the oil and gas industry through the delivery of technically demanding construction projects. Our experience covers operational compounds, tank farms, pipe racks, service buildings, personnel accommodation, pump stations, and associated civil and structural works.",
    image: "/images/sectors/oil-gas.jpg",
    keyProjects: ["Operational compound construction", "Tank farm and storage facilities", "Pipe rack and support structures", "Service and maintenance buildings", "Personnel accommodation camps"],
    capabilities: ["Hazardous area construction", "HSE management systems", "Blast-resistant construction", "Cathodic protection systems", "Fire and gas detection infrastructure", "Hot work and confined space operations"],
    metaTitle: "Oil & Gas Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Oil & gas facility construction including compounds, tank farms, and service buildings across UAE, Qatar & Jordan. 25+ years of energy sector experience.",
  },
  {
    name: "Commercial & Retail Developments",
    slug: "commercial-retail-developments",
    icon: "🏬",
    shortDescription: "Successful execution of commercial centers, retail destinations, business complexes, and mixed-use developments contributing to vibrant commercial communities.",
    fullDescription: "We create commercial and retail environments that attract customers, drive revenue, and build lasting communities. Our commercial construction services encompass shopping malls, retail parks, business centers, office towers, mixed-use developments, and hospitality venues.",
    image: "/images/sectors/commercial.jpg",
    keyProjects: ["Shopping mall construction", "Office tower development", "Business park construction", "Mixed-use development projects", "Retail fit-out and renovation"],
    capabilities: ["High-end architectural finishes", "Complex MEP coordination", "Curtain wall and facade systems", "Multi-level parking structures", "Escalator and elevator installation", "Tenant fit-out management"],
    metaTitle: "Commercial & Retail Construction | Hadeed Emirates Contracting",
    metaDescription: "Commercial centers, retail developments, and business complexes built by Hadeed Emirates Contracting across UAE, Qatar & Jordan.",
  },
  {
    name: "Residential Buildings",
    slug: "residential-buildings",
    icon: "🏢",
    shortDescription: "Development of residential towers, staff accommodations, and integrated housing communities designed for quality living standards and long-term asset value.",
    fullDescription: "Hadeed Emirates Contracting constructs residential buildings that prioritize quality living, structural integrity, and long-term asset value. Our residential portfolio includes high-rise apartment towers, mid-rise developments, staff accommodation complexes, and integrated housing communities.",
    image: "/images/sectors/residential.jpg",
    keyProjects: ["High-rise residential towers", "Mid-rise apartment buildings", "Staff accommodation complexes", "Integrated housing communities", "Luxury penthouse developments"],
    capabilities: ["Reinforced concrete construction", "Post-tension slab systems", "Facade engineering and installation", "Swimming pool and amenity construction", "Landscape and hardscape works", "Smart home infrastructure"],
    metaTitle: "Residential Building Construction | Hadeed Emirates Contracting",
    metaDescription: "Residential towers, housing communities, and staff accommodation construction in UAE, Qatar & Jordan. Hadeed Emirates — quality living, lasting value.",
  },
  {
    name: "Energy & Solar Projects",
    slug: "energy-solar-projects",
    icon: "☀️",
    shortDescription: "Participation in the energy transition through construction of solar installations, industrial rooftop systems, and energy infrastructure projects supporting sustainable development goals.",
    fullDescription: "As the Middle East accelerates its energy transition, Hadeed Emirates Contracting is actively supporting the region's sustainability goals through the construction of solar energy projects and energy infrastructure. We construct ground-mounted solar farms, industrial rooftop solar systems, battery storage facilities, and electrical substations.",
    image: "/images/sectors/solar.jpg",
    keyProjects: ["Ground-mounted solar farm construction", "Industrial rooftop solar installations", "Battery energy storage systems", "Electrical substation construction", "Power distribution infrastructure"],
    capabilities: ["Solar mounting structure installation", "Electrical balance of systems", "Civil and structural works", "Cable routing and trenching", "Inverter room construction", "Grid connection infrastructure"],
    metaTitle: "Energy & Solar Project Construction | Hadeed Emirates Contracting",
    metaDescription: "Solar farm construction, rooftop solar installations, and energy infrastructure across UAE, Qatar & Jordan. Supporting the Middle East energy transition.",
  },
  {
    name: "Villas & Premium Residential Projects",
    slug: "villas-premium-residential",
    icon: "🏡",
    shortDescription: "Construction of high-end private villas and residential communities delivered with attention to architectural quality, functionality, and client expectations.",
    fullDescription: "We specialize in the construction of high-end private villas and premium residential communities that reflect the unique vision and lifestyle of our clients. From contemporary minimalist designs to traditional Arabic architecture, our villa construction services deliver with meticulous attention to architectural quality, material selection, and finishing standards.",
    image: "/images/sectors/villas.jpg",
    keyProjects: ["Luxury villa construction", "Gated community development", "Beach and waterfront villas", "Heritage and traditional villas", "Smart home villa projects"],
    capabilities: ["Custom architectural construction", "Premium material sourcing", "Swimming pool and water feature construction", "Landscape architecture implementation", "Interior fit-out and finishing", "Home automation integration"],
    metaTitle: "Villa & Premium Residential Construction | Hadeed Emirates",
    metaDescription: "High-end villa construction and premium residential communities in UAE, Qatar & Jordan. Hadeed Emirates — architectural quality, client-focused delivery.",
  },
  {
    name: "Military & Defense Facilities",
    slug: "military-defense-facilities",
    icon: "🛡",
    shortDescription: "Execution of high-security projects requiring strict compliance, confidentiality, and disciplined construction management standards.",
    fullDescription: "Hadeed Emirates Contracting has earned the trust of government and defense agencies through the disciplined execution of high-security construction projects. Our military and defense facility portfolio includes barracks, command centers, training facilities, perimeter security systems, vehicle maintenance workshops, and ammunition storage buildings.",
    image: "/images/sectors/military.jpg",
    keyProjects: ["Military barracks and accommodation", "Command and control centers", "Training facility construction", "Perimeter security infrastructure", "Vehicle maintenance workshops"],
    capabilities: ["Security-cleared construction teams", "Confidential project management", "Blast-resistant construction", "Secure communication infrastructure", "CCTV and surveillance integration", "Controlled access systems"],
    metaTitle: "Military & Defense Facility Construction | Hadeed Emirates",
    metaDescription: "High-security military and defense facility construction across UAE, Qatar & Jordan. Strict compliance, confidential project delivery.",
  },
  {
    name: "Aviation & Airport Facilities",
    slug: "aviation-airport-facilities",
    icon: "✈️",
    shortDescription: "Delivery of airport support buildings, hangars, operational infrastructure, and aviation-related developments meeting specialized operational requirements.",
    fullDescription: "Our aviation and airport construction services support the rapidly growing aviation sector across the Middle East. We construct aircraft hangars, maintenance repair and overhaul (MRO) facilities, cargo terminals, airport operations buildings, fuel farm infrastructure, and passenger terminal extensions.",
    image: "/images/sectors/aviation.jpg",
    keyProjects: ["Aircraft hangar construction", "MRO facility development", "Cargo terminal construction", "Airport operations buildings", "Fuel farm infrastructure"],
    capabilities: ["Large-span structural steel", "Airfield-side construction management", "Fuel system infrastructure", "Specialized flooring systems", "Fire suppression systems", "Compliance with ICAO standards"],
    metaTitle: "Aviation & Airport Facility Construction | Hadeed Emirates",
    metaDescription: "Aircraft hangars, airport terminals, and aviation facility construction in UAE, Qatar & Jordan. Meeting specialized aviation requirements.",
  },
  {
    name: "Ports & Marine Facilities",
    slug: "ports-marine-facilities",
    icon: "⚓",
    shortDescription: "Construction of port warehouses, logistics yards, and marine-support infrastructure enabling efficient cargo handling and maritime operations.",
    fullDescription: "Hadeed Emirates Contracting supports the maritime sector through the construction of port facilities, marine logistics infrastructure, and waterfront developments. Our port construction experience includes cargo warehouses, container handling yards, port administration buildings, roll-on/roll-off terminals, and marine workshops.",
    image: "/images/sectors/ports.jpg",
    keyProjects: ["Port warehouse construction", "Container yard development", "Marine workshop facilities", "Port administration buildings", "Waterfront commercial developments"],
    capabilities: ["Heavy-duty pavement construction", "Marine foundation engineering", "Port operations continuity management", "Container handling infrastructure", "Customs and security building construction", "Environmental protection measures"],
    metaTitle: "Port & Marine Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Port warehouses, marine logistics, and waterfront facility construction across UAE, Qatar & Jordan. Enabling efficient maritime operations.",
  },
  {
    name: "Free Zone Developments",
    slug: "free-zone-developments",
    icon: "🌐",
    shortDescription: "Extensive experience delivering industrial and commercial facilities across UAE free zones supporting international investment and business expansion.",
    fullDescription: "With extensive experience across the UAE's major free zones, Hadeed Emirates Contracting is a preferred construction partner for businesses establishing operations in these dynamic economic environments. We construct industrial units, warehouses, office buildings, showrooms, and mixed-use facilities across JAFZA, KIZAD, SAIF Zone, DAFZA, and numerous other free zones.",
    image: "/images/sectors/freezone.jpg",
    keyProjects: ["Industrial unit construction in free zones", "Free zone warehouse development", "Office and showroom construction", "Light industrial facility build-outs", "Free zone master plan infrastructure"],
    capabilities: ["Free zone authority liaison", "Pre-engineered building construction", "Quick-build modular facilities", "Industrial fit-out services", "Compliance with free zone regulations", "Multi-authority coordination"],
    metaTitle: "Free Zone Development Construction | Hadeed Emirates Contracting",
    metaDescription: "Industrial and commercial facilities across UAE free zones — JAFZA, KIZAD, SAIF Zone & more. Your free zone construction partner.",
  },
  {
    name: "Infrastructure Works",
    slug: "infrastructure-works",
    icon: "🏗",
    shortDescription: "Implementation of civil infrastructure projects including roads, utilities, drainage networks, and enabling works forming the backbone of major developments.",
    fullDescription: "Hadeed Emirates Contracting delivers civil infrastructure projects that form the foundation of communities and commercial developments. Our infrastructure works include road construction, stormwater drainage systems, sewage networks, water supply systems, electrical and telecommunications ducting, earthworks, and site enabling works.",
    image: "/images/sectors/infrastructure.jpg",
    keyProjects: ["Road and highway construction", "Stormwater drainage networks", "Water and sewage systems", "Electrical infrastructure ducting", "Site enabling and earthworks"],
    capabilities: ["Earthworks and grading", "Asphalt and concrete road construction", "Utility trench excavation and backfill", "Stormwater management systems", "Retaining wall construction", "Traffic management during construction"],
    metaTitle: "Infrastructure & Civil Works | Hadeed Emirates Contracting",
    metaDescription: "Roads, utilities, drainage networks, and enabling infrastructure construction across UAE, Qatar & Jordan. Building the backbone of development.",
  },
]

// ============================================================\n// FAQ Data\n// ============================================================

// ============================================================
// FAQ Data
// ============================================================

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  { question: "What services does Hadeed Emirates Contracting Company offer?", answer: "We offer comprehensive construction and contracting services including industrial developments, logistics facilities, commercial buildings, residential towers, infrastructure works, and specialized construction. Our portfolio spans 15+ sectors across UAE, Qatar, and Jordan." },
  { question: "How many projects has Hadeed Emirates completed?", answer: "We have successfully completed over 400 projects representing more than 1.5 million square meters of constructed facilities across diverse sectors." },
  { question: "In which countries does Hadeed Emirates operate?", answer: "We operate across the United Arab Emirates, Qatar, and Jordan, with our headquarters in Abu Dhabi, UAE." },
  { question: "What types of industrial construction do you handle?", answer: "We deliver large-scale industrial complexes, manufacturing plants, fabrication facilities, warehouses, cold storage, and production environments designed for operational efficiency and future expansion." },
  { question: "Can you handle government and defense projects?", answer: "Yes, we have extensive experience in military and defense facility construction with strict compliance, confidentiality protocols, and security-cleared construction teams." },
  { question: "Do you build in free zones?", answer: "Absolutely. We have extensive experience delivering industrial and commercial facilities across major UAE free zones including JAFZA, KIZAD, SAIF Zone, and DAFZA." },
  { question: "What is your experience in oil and gas construction?", answer: "We have proven experience supporting the energy sector through delivery of operational compounds, tank farms, service buildings, and technically demanding infrastructure projects." },
  { question: "Do you handle MEP works?", answer: "Yes, our construction projects include full MEP (Mechanical, Electrical, and Plumbing) integration ensuring complete, turnkey delivery of every project." },
  { question: "How do I request a quote or consultation?", answer: "Contact us via WhatsApp, phone (+971 50 626 6515), email (info@hadeedconstruction.com), or through our website contact form. We respond promptly to all inquiries." },
]

// ============================================================
// Testimonials
// ============================================================

export interface Testimonial {
  name: string
  role: string
  text: string
}

export const testimonials: Testimonial[] = [
  { name: "Ahmed R.", role: "Project Director, Major Developer", text: "Hadeed Emirates delivered our industrial complex on time and within budget. Their engineering expertise and project management capabilities are outstanding." },
  { name: "Fatima K.", role: "Operations Manager, Logistics Company", text: "We've worked with HEC on three warehouse projects. Their understanding of logistics facility requirements and quality of construction is unmatched in the region." },
  { name: "Mohammed A.", role: "Government Project Manager", text: "Strict compliance, professional team, and disciplined execution. Hadeed Emirates is our trusted partner for sensitive infrastructure projects." },
  { name: "Sarah L.", role: "Facilities Director, Pharma Company", text: "The clean room facilities HEC built for us passed regulatory validation on the first attempt. Their attention to detail in specialized construction is remarkable." },
]

// ============================================================
// Company Stats
// ============================================================

export const stats = [
  { label: "Years of Experience", value: "25", suffix: "+" },
  { label: "Projects Completed", value: "400", suffix: "+" },
  { label: "Sqm Constructed", value: "1.5", suffix: "M+" },
  { label: "Sectors Served", value: "15", suffix: "+" },
]

// ============================================================
// How It Works Steps
// ============================================================

export const steps = [
  { number: 1, title: "Initial Consultation", description: "Discuss your project requirements, timeline, and budget with our expert team." },
  { number: 2, title: "Proposal & Planning", description: "Receive a detailed proposal with engineering solutions, cost estimates, and project schedule." },
  { number: 3, title: "Project Execution", description: "Our experienced teams deliver your project with engineering excellence and safety discipline." },
  { number: 4, title: "Quality Handover", description: "Comprehensive testing, commissioning, and handover ensuring complete client satisfaction." },
]

// ============================================================
// Company Strengths
// ============================================================

export const companyStrengths = [
  "Deep regional experience across UAE, Qatar & Jordan",
  "Industrial construction specialization",
  "Multidisciplinary project delivery capability",
  "Strong safety and quality culture",
  "Proven execution across government, private, and industrial sectors",
  "ISO 9001:2015 Quality Management System",
  "ISO 14001:2015 Environmental Management System",
  "ISO 45001:2018 Occupational Health & Safety",
  "400+ successfully completed projects",
  "1.5 million+ square meters constructed",
]

export const certifications = [
  "ISO 9001:2015 – Quality Management System",
  "ISO 14001:2015 – Environmental Management System",
  "ISO 45001:2018 – Occupational Health & Safety Management",
  "Abu Dhabi Municipality – Building Contractor License",
  "Department of Economic Development – Trade License",
  "Civil Defense Approved",
]
