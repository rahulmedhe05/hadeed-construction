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
    name: "Oil & Gas",
    slug: "oil-gas",
    icon: "🛢",
    shortDescription: "Proven experience supporting the energy sector through delivery of oilfield service facilities, operational compounds, storage facilities, and technically demanding industrial infrastructure.",
    fullDescription: "Hadeed Emirates Contracting has a proven track record in supporting the oil and gas industry through the delivery of technically demanding construction projects. Our experience covers operational compounds, tank farms, pipe racks, service buildings, personnel accommodation, pump stations, and associated civil and structural works.",
    image: "/images/projects/ppt-project-30.webp",
    keyProjects: ["Al Ghaith Oilfield Offices & Workshop — Mussafah, Abu Dhabi"],
    capabilities: ["Hazardous area construction", "HSE management systems", "Blast-resistant construction", "Cathodic protection systems", "Fire and gas detection infrastructure", "Hot work and confined space operations"],
    metaTitle: "Oil & Gas Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Oil & gas facility construction including compounds, tank farms, and service buildings across UAE, Qatar & Jordan. 25+ years of energy sector experience.",
  },
  {
    name: "Renewable Energy",
    slug: "renewable-energy",
    icon: "☀️",
    shortDescription: "Participation in the energy transition through construction of solar innovation centres, industrial rooftop systems, and renewable energy infrastructure supporting sustainable development.",
    fullDescription: "As the Middle East accelerates its energy transition, Hadeed Emirates Contracting is actively supporting the region's sustainability goals through the construction of solar energy projects and energy infrastructure. We construct ground-mounted solar farms, innovation centres, industrial rooftop solar systems, battery storage facilities, and electrical substations.",
    image: "/images/projects/ppt-project-05.webp",
    keyProjects: ["DEWA Solar Innovation Centre — Dubai, U.A.E."],
    capabilities: ["Solar mounting structure installation", "Electrical balance of systems", "Civil and structural works", "Cable routing and trenching", "Inverter room construction", "Grid connection infrastructure"],
    metaTitle: "Renewable Energy Construction | Hadeed Emirates Contracting",
    metaDescription: "Solar farm construction, innovation centres, and renewable energy infrastructure across UAE, Qatar & Jordan. Supporting the Middle East energy transition.",
  },
  {
    name: "Commercial & Malls",
    slug: "commercial-malls",
    icon: "🏬",
    shortDescription: "Successful execution of commercial centres, retail malls, business complexes, and mixed-use developments contributing to vibrant commercial communities.",
    fullDescription: "We create commercial and retail environments that attract customers, drive revenue, and build lasting communities. Our commercial construction services encompass shopping malls, retail parks, business centres, office towers, mixed-use developments, and hospitality venues.",
    image: "/images/projects/ppt-project-41.webp",
    keyProjects: ["G+2 Khalidiyah Mall — Abu Dhabi, U.A.E."],
    capabilities: ["High-end architectural finishes", "Complex MEP coordination", "Curtain wall and facade systems", "Multi-level parking structures", "Escalator and elevator installation", "Tenant fit-out management"],
    metaTitle: "Commercial & Mall Construction | Hadeed Emirates Contracting",
    metaDescription: "Commercial centres, malls, retail developments, and business complexes built by Hadeed Emirates Contracting across UAE, Qatar & Jordan.",
  },
  {
    name: "Marine & Ports",
    slug: "marine-ports",
    icon: "⚓",
    shortDescription: "Construction of marine workshops, vessel outfit facilities, port warehouses, and marine-support infrastructure enabling efficient cargo handling and maritime operations.",
    fullDescription: "Hadeed Emirates Contracting supports the maritime sector through the construction of port facilities, marine logistics infrastructure, and waterfront developments. Our port construction experience includes vessel outfit workshops, cargo warehouses, container handling yards, port administration buildings, and marine workshops.",
    image: "/images/projects/ppt-project-32.webp",
    keyProjects: ["Abu Dhabi Ship Building — Vessel Outfit Workshop, Mussafah, Abu Dhabi"],
    capabilities: ["Heavy-duty pavement construction", "Marine foundation engineering", "Port operations continuity management", "Container handling infrastructure", "Customs and security building construction", "Environmental protection measures"],
    metaTitle: "Marine & Port Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Port warehouses, marine workshops, vessel outfit facilities, and waterfront construction across UAE, Qatar & Jordan. Enabling efficient maritime operations.",
  },
  {
    name: "Automobile",
    slug: "automobile",
    icon: "🚗",
    shortDescription: "Construction of automobile workshops, bus factories, vehicle service centres, and automotive manufacturing facilities designed for efficient production and maintenance operations.",
    fullDescription: "Hadeed Emirates Contracting delivers state-of-the-art automobile facilities including bus factories, vehicle workshops, service centres, and automotive manufacturing plants. Our expertise covers the full range of automotive construction requirements from heavy-duty workshop bays to precision assembly environments.",
    image: "/images/projects/ppt-project-27.webp",
    keyProjects: ["Bus Factory — Abu Dhabi, U.A.E."],
    capabilities: ["Heavy-duty workshop construction", "Vehicle inspection bay installation", "Industrial ventilation systems", "Specialized flooring for automotive facilities", "Paint booth and spray area construction", "High-capacity loading dock systems"],
    metaTitle: "Automobile Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Bus factories, automobile workshops, and vehicle service centre construction across UAE, Qatar & Jordan. Hadeed Emirates — industrial expertise.",
  },
  {
    name: "Military & Aviation",
    slug: "military-aviation",
    icon: "🛡",
    shortDescription: "Execution of high-security military facilities and aviation hangars requiring strict compliance, confidentiality, and disciplined construction management standards.",
    fullDescription: "Hadeed Emirates Contracting has earned the trust of government and defence agencies through the disciplined execution of high-security construction projects. Our military and aviation portfolio includes aircraft hangars with large clear spans, barracks, command centres, training facilities, and defence infrastructure.",
    image: "/images/projects/ppt-project-21.webp",
    keyProjects: ["Abu Dhabi Aviation CMW Hangar — 170m Clear Span, Abu Dhabi Airport"],
    capabilities: ["Security-cleared construction teams", "Large-span structural steel erection", "Confidential project management", "Blast-resistant construction", "Secure communication infrastructure", "Compliance with ICAO and military standards"],
    metaTitle: "Military & Aviation Construction | Hadeed Emirates Contracting",
    metaDescription: "Military facilities, aircraft hangars, and aviation construction across UAE, Qatar & Jordan. High-security, strict compliance project delivery.",
  },
  {
    name: "Logistics",
    slug: "logistics",
    icon: "🚚",
    shortDescription: "Design and construction of modern logistics parks, distribution centres, and high-capacity warehousing supporting regional supply chains and international trade.",
    fullDescription: "Our logistics construction division delivers state-of-the-art facilities that form the backbone of regional and international supply chains. From massive distribution centres and logistics parks to automated warehousing systems and last-mile delivery hubs, we construct logistics infrastructure that drives operational efficiency.",
    image: "/images/projects/ppt-project-01.webp",
    keyProjects: ["ICT Logistics Park — Mussafah, Abu Dhabi"],
    capabilities: ["High-capacity racking systems integration", "Temperature-controlled environments", "Advanced loading dock construction", "High-flatness industrial flooring", "Fire suppression and sprinkler systems", "Energy-efficient building envelopes"],
    metaTitle: "Logistics Park & Warehouse Construction | Hadeed Emirates Contracting",
    metaDescription: "Modern logistics parks, distribution centres & warehouse construction across UAE, Qatar & Jordan. Hadeed Emirates Contracting — 400+ projects completed.",
  },
  {
    name: "Education",
    slug: "education",
    icon: "🎓",
    shortDescription: "Construction of educational campuses, schools, training centres, and academic institutions providing functional, safe, and future-ready learning environments.",
    fullDescription: "We deliver world-class educational and institutional facilities that inspire learning and foster academic excellence. Our education construction portfolio spans K-12 schools, university campuses, vocational training centres, research laboratories, and multi-purpose academic buildings.",
    image: "/images/projects/ppt-project-40.webp",
    keyProjects: ["American Community School — Abu Dhabi, U.A.E."],
    capabilities: ["Acoustic treatment and design", "Smart classroom infrastructure", "Laboratory construction", "Multi-purpose hall construction", "Sustainable building practices", "Accessibility compliance"],
    metaTitle: "Education & School Construction | Hadeed Emirates Contracting",
    metaDescription: "School, university campus, and institutional building construction across UAE, Qatar & Jordan. Hadeed Emirates Contracting — safe, functional learning environments.",
  },
  {
    name: "Residential",
    slug: "residential",
    icon: "🏢",
    shortDescription: "Development of residential complexes, staff accommodations, and integrated housing communities designed for quality living standards and long-term asset value.",
    fullDescription: "Hadeed Emirates Contracting constructs residential buildings that prioritise quality living, structural integrity, and long-term asset value. Our residential portfolio includes residential complexes, mid-rise developments, staff accommodation facilities, and integrated housing communities.",
    image: "/images/projects/ppt-project-37.webp",
    keyProjects: ["Tawazun Residential Complex — Suweihan, Abu Dhabi"],
    capabilities: ["Reinforced concrete construction", "Post-tension slab systems", "Facade engineering and installation", "Swimming pool and amenity construction", "Landscape and hardscape works", "Smart home infrastructure"],
    metaTitle: "Residential Building Construction | Hadeed Emirates Contracting",
    metaDescription: "Residential complexes, housing communities, and staff accommodation construction in UAE, Qatar & Jordan. Hadeed Emirates — quality living, lasting value.",
  },
  {
    name: "Plants",
    slug: "plants",
    icon: "🏭",
    shortDescription: "Construction of precast concrete plants, polymer additive plants, and industrial production facilities engineered for high-output manufacturing operations.",
    fullDescription: "Hadeed Emirates Contracting delivers turnkey plant construction for various industries including precast concrete manufacturing, polymer production, and building materials processing. Our plant construction expertise covers the full scope from civil and structural works to mechanical and electrical installations.",
    image: "/images/projects/ppt-project-24.webp",
    keyProjects: ["Extramix Precast Concrete Plant — Mussafah, Abu Dhabi"],
    capabilities: ["Heavy industrial foundation engineering", "Process equipment installation", "Crane rail and runway beam installation", "Industrial piping systems", "Batch plant construction", "Quality control laboratory construction"],
    metaTitle: "Plant & Manufacturing Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Precast concrete plants, manufacturing facilities, and industrial plant construction across UAE, Qatar & Jordan. Turnkey delivery by Hadeed Emirates.",
  },
  {
    name: "Warehouses",
    slug: "warehouses",
    icon: "📦",
    shortDescription: "Design and construction of modern warehouse facilities, storage complexes, and distribution buildings supporting logistics and commercial operations.",
    fullDescription: "Our warehouse construction services deliver high-quality storage and distribution facilities optimised for efficiency and scalability. We construct steel-framed warehouses, cold storage facilities, rack-supported structures, and multi-storey storage buildings across the UAE's major free zones and industrial areas.",
    image: "/images/projects/ppt-project-26.webp",
    keyProjects: ["Warehouse for Al Masa — Jebel Ali, Dubai"],
    capabilities: ["Pre-engineered steel building construction", "High-flatness floor systems", "Automated racking integration", "Temperature-controlled environments", "Advanced fire suppression systems", "Dock leveller and loading bay construction"],
    metaTitle: "Warehouse Construction | Hadeed Emirates Contracting",
    metaDescription: "Modern warehouse construction across UAE free zones and industrial areas. Al Masa, Jebel Ali & more. Hadeed Emirates Contracting — 400+ projects.",
  },
  {
    name: "Factories",
    slug: "factories",
    icon: "⚙️",
    shortDescription: "Execution of specialised factory buildings including pharmaceutical facilities, chemical plants, and controlled-environment production spaces meeting strict regulatory standards.",
    fullDescription: "Hadeed Emirates Contracting has extensive experience in constructing specialised factory facilities that meet the strictest international regulatory standards. Our portfolio includes pharmaceutical manufacturing facilities, GMP-compliant clean rooms, chemical processing plants, and precision production environments.",
    image: "/images/projects/ppt-project-13.webp",
    keyProjects: ["ADCAN Pharmaceutical Factory — ICAD II, Abu Dhabi"],
    capabilities: ["Clean room construction and validation", "HVAC systems for controlled environments", "Pharmaceutical-grade piping systems", "Contamination control construction", "Regulatory compliance documentation", "Specialised flooring and wall systems"],
    metaTitle: "Factory Construction | Hadeed Emirates Contracting",
    metaDescription: "Pharmaceutical factories, chemical plants, and specialised manufacturing facility construction in UAE, Qatar & Jordan. Hadeed Emirates — trusted construction partner.",
  },
  {
    name: "Airports",
    slug: "airports",
    icon: "✈️",
    shortDescription: "Delivery of airport support buildings, warehouses, operational infrastructure, and aviation-related developments meeting specialised operational requirements.",
    fullDescription: "Our airport construction services support the rapidly growing aviation sector across the Middle East. We construct airport warehouses, cargo terminals, maintenance facilities, airport operations buildings, fuel farm infrastructure, and passenger terminal extensions.",
    image: "/images/projects/ppt-project-08.webp",
    keyProjects: ["Al-Taaqa Alternative Solutions — Jebel Ali Airport, Dubai, U.A.E."],
    capabilities: ["Large-span structural steel", "Airfield-side construction management", "Fuel system infrastructure", "Specialised flooring systems", "Fire suppression systems", "Compliance with ICAO standards"],
    metaTitle: "Airport Facility Construction | Hadeed Emirates Contracting",
    metaDescription: "Airport warehouses, terminals, and aviation facility construction in UAE, Qatar & Jordan. Meeting specialised airport requirements.",
  },
  {
    name: "Water Stations",
    slug: "water-stations",
    icon: "💧",
    shortDescription: "Construction of pump stations, water treatment facilities, and utility infrastructure supporting municipal water supply and distribution networks.",
    fullDescription: "Hadeed Emirates Contracting delivers critical water infrastructure including main pump stations, water treatment plants, reservoir construction, and distribution network facilities. Our water station construction expertise ensures reliable water supply systems that meet municipal and industrial demands.",
    image: "/images/projects/ppt-project-39.webp",
    keyProjects: ["Main Pump Station — Mussafah, Abu Dhabi"],
    capabilities: ["Pump house construction", "Reinforced concrete reservoir construction", "Pipeline and distribution network civil works", "Electrical and control room construction", "Corrosion-resistant construction", "Compliance with municipal utility standards"],
    metaTitle: "Water Station & Pump Station Construction | Hadeed Emirates Contracting",
    metaDescription: "Pump stations, water treatment facilities, and utility infrastructure construction across UAE, Qatar & Jordan. Reliable water supply systems.",
  },
  {
    name: "Paper & Printing",
    slug: "paper-printing",
    icon: "📄",
    shortDescription: "Construction of paper manufacturing plants, printing facilities, and packaging factories designed for industrial production workflows and material handling.",
    fullDescription: "Hadeed Emirates Contracting delivers specialised construction for the paper, printing, and packaging industry. Our expertise covers paper manufacturing plants, printing press facilities, plastic and packaging factories, and associated warehouse and logistics buildings.",
    image: "/images/projects/ppt-project-31.webp",
    keyProjects: ["West Coast Papers & Plastic Factory — Khalifa A, Abu Dhabi"],
    capabilities: ["Heavy machine foundation construction", "Industrial ventilation and dust extraction", "Fire-rated compartmentation", "High-capacity floor loading design", "Crane and gantry installation", "Chemical storage and handling areas"],
    metaTitle: "Paper & Printing Factory Construction | Hadeed Emirates Contracting",
    metaDescription: "Paper manufacturing plants, printing facilities, and packaging factory construction across UAE, Qatar & Jordan. Hadeed Emirates — industrial expertise.",
  },
  {
    name: "Industrial",
    slug: "industrial",
    icon: "🔌",
    shortDescription: "Delivery of large-scale industrial complexes, cable factories, fabrication facilities, and production environments designed for operational efficiency and durability.",
    fullDescription: "Hadeed Emirates Contracting is a leading provider of general industrial construction services across the UAE, Qatar, and Jordan. We specialise in the design and construction of large-scale industrial complexes, cable manufacturing factories, fabrication facilities, and production environments engineered for operational efficiency and long-term durability.",
    image: "/images/projects/ppt-project-12.webp",
    keyProjects: ["Ducab Electrical Cable Factory — Abu Dhabi, U.A.E."],
    capabilities: ["Heavy structural steel erection", "Industrial foundation engineering", "Process piping and utilities", "Industrial ventilation systems", "Fire protection and safety systems", "Environmental compliance construction"],
    metaTitle: "Industrial Construction | Hadeed Emirates Contracting",
    metaDescription: "Industrial complexes, cable factories, and manufacturing facility construction across UAE, Qatar & Jordan. 25+ years of proven experience.",
  },
  {
    name: "Villas",
    slug: "villas",
    icon: "🏡",
    shortDescription: "Construction of luxury residential villas across the UAE, from beachfront properties and premium estates to large-scale villa community developments with hundreds of units.",
    fullDescription: "Hadeed Emirates Contracting delivers luxury villa construction across the UAE, from high-end private residences to large-scale community developments. Our villa portfolio includes the 388-unit Akoya Oxygen Villas in DAMAC Hills 2 Dubai (60,000 SQM), luxury villas in Khalifa City A Abu Dhabi (1,000 SQM each), the Al Nouf Luxury Villa in Abu Dhabi (1,279 SQM total built area), and beachfront villas on Abu Dhabi Island (500 SQM each). We handle main works packages from foundations to finishing, delivering architectural quality, premium materials, and meticulous craftsmanship.",
    image: "/images/projects/villa-01.webp",
    keyProjects: [
      "Akoya Oxygen Villas — 388 Villas, Sanctuary Cluster VP10, DAMAC Hills 2, Dubai (60,000 SQM)",
      "Khalifa City A Luxury Villas — 2 Villas, Abu Dhabi (2,000 SQM)",
      "Al Nouf Luxury Villa — Abu Dhabi (1,279 SQM)",
      "Abu Dhabi Island Beachfront Villas — 2 Villas (1,000 SQM)"
    ],
    capabilities: ["Custom architectural construction", "Premium material sourcing and installation", "Swimming pool and water feature construction", "Landscape architecture implementation", "Interior fit-out and finishing", "Large-scale villa community delivery"],
    metaTitle: "Luxury Villa Construction | Hadeed Emirates Contracting",
    metaDescription: "Luxury villa construction in UAE — from 388-unit communities to premium beachfront villas. Hadeed Emirates — architectural quality, client-focused delivery.",
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
  { label: "Sectors Served", value: "16", suffix: "+" },
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
