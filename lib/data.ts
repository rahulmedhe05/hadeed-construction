// ============================================================
// Hadeed Transport - Site Data
// ============================================================

export const SITE_CONFIG = {
  name: "Hadeed Transport",
  tagline: "POWERING YOUR PROGRESS.",
  description:
    "From heavy machinery to secure storage, we provide practical solutions tailored to your business needs.",
  email: "info@hadeed-transport.com",
  phone: "+971506266515",
  whatsapp: "971506266515",
  whatsappLink: "https://wa.link/4fqgo9",
  location: "ICAD III, Abu Dhabi",
  url: "https://hadeed-transport.com",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

// ============================================================
// Equipment Categories
// ============================================================

export interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export interface EquipmentCategory {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
  products: Product[];
  ctaTitle: string;
  ctaDescription: string;
}

function makeWhatsappLink(productName: string): string {
  return `https://wa.me/971506266515?text=${encodeURIComponent(`Hi, I'm interested in "${productName}". Please send more details.`)}`;
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    name: "Transportation & Construction Machineries",
    slug: "transportation-construction-machineries",
    subtitle: "Comprehensive Rental Solutions for Heavy Machinery and Equipment",
    description:
      "Robust machinery designed for excavation, grading, and site preparation to power construction projects of all scales.",
    image: "/images/equipment-hero.jpg",
    ctaTitle: "Get the Equipment You Need — Available for Rent Today!",
    ctaDescription:
      "Achieve smooth, compact surfaces – rent road rollers for your paving needs!",
    products: [
      {
        name: "Shovel Various Sizes",
        slug: "shovel-various-sizes",
        description: "Earth work and earth moving",
        image: "/images/equipment/shovel.jpg",
        whatsappMessage: makeWhatsappLink("Shovel - Various Sizes"),
      },
      {
        name: "Backhoe Loader & Excavator Various Sizes",
        slug: "backhoe-loader-excavator",
        description: "Major trench excavation and dredging works",
        image: "/images/equipment/backhoe-loader.jpg",
        whatsappMessage: makeWhatsappLink(
          "Backhoe Loader and Excavator - Various Sizes"
        ),
      },
      {
        name: "25 Ton Mobile Crane",
        slug: "25-ton-mobile-crane",
        description:
          "Material handling at various heights with various capacities",
        image: "/images/equipment/25-mobile-crane.jpg",
        whatsappMessage: makeWhatsappLink("25 Mobile Crane"),
      },
      {
        name: "50 Ton Mobile Crane",
        slug: "50-ton-mobile-crane",
        description:
          "Material handling at various heights with various capacities",
        image: "/images/equipment/50-mobile-crane.jpg",
        whatsappMessage: makeWhatsappLink("50 Ton Mobile Crane"),
      },
      {
        name: "J.C.B Backhoe Loader",
        slug: "jcb-backhoe-loader",
        description:
          "For limited excavation of trenches sizes and general medium size earth work",
        image: "/images/equipment/jcb-backhoe.jpg",
        whatsappMessage: makeWhatsappLink("J.C.B Backhoe Loader"),
      },
      {
        name: "Forklift Different Sizes (1 to 15 Ton)",
        slug: "forklift-various-sizes",
        description:
          "Material handling at various heights with various capacities",
        image: "/images/equipment/forklift.jpg",
        whatsappMessage: makeWhatsappLink(
          "Forklift different sizes from 1 ton to 15 ton"
        ),
      },
      {
        name: "Bobcat Mini Loader JCB",
        slug: "bobcat-mini-loader",
        description: "Earthwork in limited access area",
        image: "/images/equipment/bobcat.jpg",
        whatsappMessage: makeWhatsappLink("BOBCAT MINI LOADER JCB"),
      },
      {
        name: "Low Level Manlifts",
        slug: "low-level-manlifts",
        description: "Workers lifting to elevated locations",
        image: "/images/equipment/low-manlift.jpg",
        whatsappMessage: makeWhatsappLink("Low level manlifts"),
      },
      {
        name: "High Level Manlifts",
        slug: "high-level-manlifts",
        description: "Workers lifting to elevated locations",
        image: "/images/equipment/high-manlift.jpg",
        whatsappMessage: makeWhatsappLink("High level manlifts"),
      },
      {
        name: "Tanker Diesel",
        slug: "tanker-diesel",
        description: "Diesel transportation",
        image: "/images/equipment/tanker-diesel.jpg",
        whatsappMessage: makeWhatsappLink("Tanker Diesel"),
      },
      {
        name: "Sewerage Tanker",
        slug: "sewerage-tanker",
        description: "Sewerage transportation",
        image: "/images/equipment/sewerage-tanker.jpg",
        whatsappMessage: makeWhatsappLink("Sewarage Tanker"),
      },
      {
        name: "3000 Gallon Water Tanker",
        slug: "3000-gallon-water-tanker",
        description: "Water transportation",
        image: "/images/equipment/3000-water-tanker.jpg",
        whatsappMessage: makeWhatsappLink("3000 Galon Water Tanker"),
      },
      {
        name: "5000 Gallon Water Tanker",
        slug: "5000-gallon-water-tanker",
        description: "Water transportation",
        image: "/images/equipment/5000-water-tanker.jpg",
        whatsappMessage: makeWhatsappLink("5000 Water Tanker"),
      },
      {
        name: "Trailer",
        slug: "trailer",
        description: "Material transportation — large in size",
        image: "/images/equipment/trailer.jpg",
        whatsappMessage: makeWhatsappLink("TRAILOR"),
      },
      {
        name: "3 Ton Pickup",
        slug: "3-ton-pickup",
        description: "Material transportation — large in size",
        image: "/images/equipment/3-ton-pickup.jpg",
        whatsappMessage: makeWhatsappLink("3 ton Pickup"),
      },
      {
        name: "2 Ton Pickup",
        slug: "2-ton-pickup",
        description: "Material and workers transportation",
        image: "/images/equipment/2-ton-pickup.jpg",
        whatsappMessage: makeWhatsappLink("2 ton Pickup"),
      },
      {
        name: "1 Ton Pickup",
        slug: "1-ton-pickup",
        description: "Material and workers transportation",
        image: "/images/equipment/1-ton-pickup.jpg",
        whatsappMessage: makeWhatsappLink("1 Ton Pickup"),
      },
      {
        name: "Recovery Truck",
        slug: "recovery-truck",
        description:
          "Transport of machines and equipment — different sizes",
        image: "/images/equipment/recovery-truck.jpg",
        whatsappMessage: makeWhatsappLink("Recovery Truck"),
      },
      {
        name: "60 Passenger Bus",
        slug: "60-passenger-bus",
        description: "Transport staff or labor",
        image: "/images/equipment/60-bus.jpg",
        whatsappMessage: makeWhatsappLink("60 passenger Bus"),
      },
      {
        name: "30 Seater Bus",
        slug: "30-seater-bus",
        description: "Transport staff or labor",
        image: "/images/equipment/30-bus.jpg",
        whatsappMessage: makeWhatsappLink("30 seater Bus"),
      },
      {
        name: "15 Seater Bus",
        slug: "15-seater-bus",
        description: "Transport staff or labor",
        image: "/images/equipment/15-bus.jpg",
        whatsappMessage: makeWhatsappLink("15 seater Bus"),
      },
      {
        name: "12 Seater Bus",
        slug: "12-seater-bus",
        description: "Staff transportation",
        image: "/images/equipment/12-bus.jpg",
        whatsappMessage: makeWhatsappLink("12 seater Bus"),
      },
      {
        name: "5 Passenger Saloon Car (Different Models)",
        slug: "5-passenger-saloon-car",
        description: "Staff transportation",
        image: "/images/equipment/saloon-car.jpg",
        whatsappMessage: makeWhatsappLink(
          "5 passenger Saloon Car, (Different models)"
        ),
      },
    ],
  },
  {
    name: "Small Construction Equipment & Tools",
    slug: "construction-small-tools",
    subtitle: "Comprehensive Rental Solutions for Small Machinery and Equipment",
    description:
      "High-performance, quality equipment and tools ensuring safe, efficient, and rapid construction.",
    image: "/images/small-tools-hero.jpg",
    ctaTitle: "Cut, grind, and weld with ease – rent your tools today!",
    ctaDescription:
      "Affordable hand tools for precision in construction work.",
    products: [
      {
        name: "Driving Roller 4 Ton",
        slug: "driving-roller-4-ton",
        description: "Earth work compactor — medium area",
        image: "/images/tools/driving-roller-4t.jpg",
        whatsappMessage: makeWhatsappLink("DRIVING ROLLER 4 TON"),
      },
      {
        name: "Driving Roller 2 Ton",
        slug: "driving-roller-2-ton",
        description: "Earth work compactor — medium area",
        image: "/images/tools/driving-roller-2t.jpg",
        whatsappMessage: makeWhatsappLink("DRIVING ROLLER 2 TON"),
      },
      {
        name: "Roller 2 Ton",
        slug: "roller-2-ton",
        description: "Earth work compactor — limited area",
        image: "/images/tools/roller-2t.jpg",
        whatsappMessage: makeWhatsappLink("ROLLER 2 TON"),
      },
      {
        name: "Roller 1 Ton",
        slug: "roller-1-ton",
        description: "Earth work compactor — limited area",
        image: "/images/tools/roller-1t.jpg",
        whatsappMessage: makeWhatsappLink("ROLLER 1 TON"),
      },
      {
        name: "Plate Compactor",
        slug: "plate-compactor",
        description: "Limited area compaction",
        image: "/images/tools/plate-compactor.jpg",
        whatsappMessage: makeWhatsappLink("Plate compactor"),
      },
      {
        name: "Jumping Jack Compactor",
        slug: "jumping-jack-compactor",
        description: "Limited area compaction",
        image: "/images/tools/jumping-jack.jpg",
        whatsappMessage: makeWhatsappLink("Jumping Jack Compactor"),
      },
      {
        name: "Concrete Mixer (Petrol)",
        slug: "concrete-mixer-petrol",
        description: "Small quantity concrete mixer",
        image: "/images/tools/mixer-petrol.jpg",
        whatsappMessage: makeWhatsappLink("CONCRETE MIXER petrol"),
      },
      {
        name: "Concrete Mixer (Electrical)",
        slug: "concrete-mixer-electrical",
        description: "Small quantity concrete mixer",
        image: "/images/tools/mixer-electrical.jpg",
        whatsappMessage: makeWhatsappLink("CONCRETE MIXER ELECTRICAL"),
      },
      {
        name: "Concrete Vibrator (Diesel)",
        slug: "concrete-vibrator-diesel",
        description: "Concrete casting vibration",
        image: "/images/tools/vibrator-diesel.jpg",
        whatsappMessage: makeWhatsappLink("Concrete Vibrator Deisel"),
      },
      {
        name: "Concrete Electric Vibrator",
        slug: "concrete-electric-vibrator",
        description: "Concrete casting vibration",
        image: "/images/tools/vibrator-electric.jpg",
        whatsappMessage: makeWhatsappLink("Concrete ELECTRIC VIBRATOR"),
      },
      {
        name: "Concrete Power Float",
        slug: "concrete-power-float",
        description: "Concrete slabs finishing machine",
        image: "/images/tools/power-float.jpg",
        whatsappMessage: makeWhatsappLink("Concrete Power Float"),
      },
      {
        name: "Dewatering System",
        slug: "dewatering-system",
        description: "Dewatering works",
        image: "/images/tools/dewatering.jpg",
        whatsappMessage: makeWhatsappLink("Dewatering system"),
      },
      {
        name: "Generator (500 KVA)",
        slug: "generator-500-kva",
        description: "Power generation — high capacity",
        image: "/images/tools/gen-500.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (500-KVA)"),
      },
      {
        name: "Generator (250 KVA)",
        slug: "generator-250-kva",
        description: "Power generation — high capacity",
        image: "/images/tools/gen-250.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (250-KVA)"),
      },
      {
        name: "Generator (225 KVA)",
        slug: "generator-225-kva",
        description: "Power generation — medium capacity",
        image: "/images/tools/gen-225.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (225-KVA)"),
      },
      {
        name: "Generator (150 KVA)",
        slug: "generator-150-kva",
        description: "Power generation — medium capacity",
        image: "/images/tools/gen-150.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (150-KVA)"),
      },
      {
        name: "Generator (130 KVA)",
        slug: "generator-130-kva",
        description: "Power generation — different capacity",
        image: "/images/tools/gen-130.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (130-KVA)"),
      },
      {
        name: "Generator (60 KVA)",
        slug: "generator-60-kva",
        description: "Power generation — compact",
        image: "/images/tools/gen-60.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (60-KVA)"),
      },
      {
        name: "Generator (20 KVA)",
        slug: "generator-20-kva",
        description: "Power generation — portable",
        image: "/images/tools/gen-20.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (20-KVA)"),
      },
      {
        name: "Generator (10 KVA)",
        slug: "generator-10-kva",
        description: "Power generation — portable",
        image: "/images/tools/gen-10.jpg",
        whatsappMessage: makeWhatsappLink("GENERATOR (10-KVA)"),
      },
      {
        name: "Steel Electric Bending Machine",
        slug: "steel-bending-machine",
        description: "Steel rebar bending machine — different sizes",
        image: "/images/tools/steel-bender.jpg",
        whatsappMessage: makeWhatsappLink("Steel Elec BENDING MACHINE"),
      },
      {
        name: "Steel Cutter",
        slug: "steel-cutter",
        description: "Steel rebar cutting machine — different sizes",
        image: "/images/tools/steel-cutter.jpg",
        whatsappMessage: makeWhatsappLink("STEEL CUTTER"),
      },
      {
        name: "Concrete Saw Cutter",
        slug: "concrete-saw-cutter",
        description: "Concrete cutter",
        image: "/images/tools/saw-cutter.jpg",
        whatsappMessage: makeWhatsappLink("CONCRETE Saw CUTTER"),
      },
      {
        name: "Diesel Air Compressor (900 CFM)",
        slug: "diesel-air-compressor-900",
        description: "Air generation for cleaning",
        image: "/images/tools/compressor-900.jpg",
        whatsappMessage: makeWhatsappLink("Diesel air compressor 900 CFM"),
      },
      {
        name: "Diesel Air Compressor (300 CFM)",
        slug: "diesel-air-compressor-300",
        description: "Air generation for cleaning",
        image: "/images/tools/compressor-300.jpg",
        whatsappMessage: makeWhatsappLink("Diesel Air Compressor 300 CFM"),
      },
      {
        name: "Electric Air Compressor (Various Capacities)",
        slug: "electric-air-compressor",
        description: "Air generation for cleaning",
        image: "/images/tools/compressor-electric.jpg",
        whatsappMessage: makeWhatsappLink(
          "Electric air compressor different capacities"
        ),
      },
      {
        name: "Concrete Jack Hammer (Various Sizes)",
        slug: "concrete-jack-hammer",
        description: "Concrete chipping and breaking",
        image: "/images/tools/jack-hammer.jpg",
        whatsappMessage: makeWhatsappLink(
          "Concrete JACK HAMMER different sizes"
        ),
      },
      {
        name: "Heavy & Light Duty Scaffolding",
        slug: "scaffolding",
        description: "Scaffolding solutions for construction",
        image: "/images/tools/scaffolding.jpg",
        whatsappMessage: makeWhatsappLink(
          "Heavy and light duty scaffolding"
        ),
      },
      {
        name: "Block Cutter Machine",
        slug: "block-cutter-machine",
        description: "Block cutting",
        image: "/images/tools/block-cutter.jpg",
        whatsappMessage: makeWhatsappLink("Block Cutter Machine"),
      },
      {
        name: "Concrete Grinding Machine",
        slug: "concrete-grinding-machine",
        description: "Concrete grinder",
        image: "/images/tools/grinder.jpg",
        whatsappMessage: makeWhatsappLink("Concrete Grinding Machine"),
      },
      {
        name: "Electric Wood Cutter",
        slug: "electric-wood-cutter",
        description: "Wood cutting",
        image: "/images/tools/wood-cutter.jpg",
        whatsappMessage: makeWhatsappLink("Elec Wood cutter"),
      },
      {
        name: "Marble Cutting Machine",
        slug: "marble-cutting-machine",
        description: "Marble cutting machine",
        image: "/images/tools/marble-cutter.jpg",
        whatsappMessage: makeWhatsappLink("Marble Cutting Machine"),
      },
      {
        name: "Plaster Machine",
        slug: "plaster-machine",
        description: "Plaster works",
        image: "/images/tools/plaster.jpg",
        whatsappMessage: makeWhatsappLink("Plaster Machine"),
      },
      {
        name: "Coring Machine",
        slug: "coring-machine",
        description: "Concrete coring machine",
        image: "/images/tools/coring.jpg",
        whatsappMessage: makeWhatsappLink("COARING MACHINE"),
      },
      {
        name: "Total Station TC405 Leica",
        slug: "total-station-tc405-leica",
        description: "Survey machines",
        image: "/images/tools/total-station.jpg",
        whatsappMessage: makeWhatsappLink("TOTAL STATION TC405 LEICA"),
      },
      {
        name: "Auto Level Machine",
        slug: "auto-level-machine",
        description: "Survey machines",
        image: "/images/tools/auto-level.jpg",
        whatsappMessage: makeWhatsappLink("Auto Level Machine"),
      },
      {
        name: "Laser Level Machine",
        slug: "laser-level-machine",
        description: "Survey machines",
        image: "/images/tools/laser-level.jpg",
        whatsappMessage: makeWhatsappLink("Laser level machine"),
      },
    ],
  },
];

// ============================================================
// Space Rentals
// ============================================================

export interface SpaceRental {
  name: string;
  slug: string;
  subtitle: string;
  heroDescription: string;
  image: string;
  details: string[];
  fullDescription: string;
}

export const spaceRentals: SpaceRental[] = [
  {
    name: "Warehouses",
    slug: "warehouses",
    subtitle: "Efficient Storage Solutions for Every Need",
    heroDescription:
      "Versatile storage spaces ideal for logistics, manufacturing, and inventory management.",
    image: "/images/spaces/warehouses.jpg",
    details: [
      "Located in Abu Dhabi",
      "Total area: 6,000 sqm",
      "Options include single or multiple warehouses ranging from 300 sqm to 1,000 sqm each",
    ],
    fullDescription: "Warehouses for Storage & Logistics Solutions",
  },
  {
    name: "Office Spaces",
    slug: "office-spaces",
    subtitle: "Transform Your Work Environment",
    heroDescription:
      "Functional units tailored for factories, workshops, or business operations.",
    image: "/images/spaces/office-spaces.jpg",
    details: [
      "Open-plan and closed office options",
      "Business center facilities available",
    ],
    fullDescription: "Your Perfect Office, Tailored to You",
  },
  {
    name: "Self-Storage",
    slug: "self-storage",
    subtitle: "Safe, Secure, and Accessible Storage",
    heroDescription:
      "Clean, secure units offering easy access for both personal and business needs.",
    image: "/images/spaces/self-storage.jpg",
    details: [
      "Around 32 storage units",
      "Sizes ranging from 30 sqm to 100 sqm",
    ],
    fullDescription: "Daily Storage Solutions for Individuals and Businesses",
  },
  {
    name: "Open Yards",
    slug: "open-yards",
    subtitle: "Open Yards for Endless Possibilities",
    heroDescription:
      "Spacious outdoor areas suitable for heavy-duty use, storage, or movement.",
    image: "/images/spaces/open-yards.jpg",
    details: [
      "Areas available up to 25,000 sqm",
      "Suitable for a variety of business needs",
    ],
    fullDescription: "Outdoor Yards for Storage & Logistics",
  },
  {
    name: "Caravans",
    slug: "caravans",
    subtitle: "Efficient Storage Solutions for Every Need",
    heroDescription:
      "Specialized zones designed to handle and store large machinery securely.",
    image: "/images/spaces/caravans.jpg",
    details: [
      "Ideal for temporary offices, labor camps, or on-site project offices",
      "Mobile toilets and cabins available across the UAE",
      "Can be equipped with temporary water drainage and AC systems",
      "Available for both short- and long-term rentals",
    ],
    fullDescription: "Temporary Porta Cabins and Mobile Facilities",
  },
  {
    name: "Mobile Toilets",
    slug: "mobile-toilets",
    subtitle: "Comfortable Mobile Toilets for Outdoor Events",
    heroDescription:
      "Flexible land options to suit your operational scale and future expansion.",
    image: "/images/spaces/mobile-toilets.jpg",
    details: [
      "Ideal for temporary offices, labor camps, or on-site projects and events",
      "Available for both short- and long-term rentals",
    ],
    fullDescription: "Convenience on the Go with Mobile Toilets",
  },
  {
    name: "Storage Containers for Rent",
    slug: "storage-containers-for-rent",
    subtitle: "Efficient Storage Solutions for Every Need",
    heroDescription:
      "Secure, portable storage — rent for site or event use.",
    image: "/images/spaces/storage-containers.jpg",
    details: [
      "Durable and versatile solutions designed to keep your belongings organized, secure, and easily accessible",
      "Ideal for office, events or industrial use",
    ],
    fullDescription: "Storage Containers for Rent",
  },
];

// ============================================================
// FAQ Data
// ============================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What types of equipment do you offer for rent?",
    answer:
      "We offer a wide range of heavy machinery, including earthmoving equipment, cranes, lifting gear, transport machinery, and more.",
  },
  {
    question: "Do you provide operators with the equipment?",
    answer:
      "Yes, we provide trained and certified operators with our equipment to ensure safe and efficient operations on your project site.",
  },
  {
    question: "Can I rent equipment for short-term projects?",
    answer:
      "Absolutely. We offer flexible rental durations including daily, weekly, and monthly options to suit projects of any scale.",
  },
  {
    question: "What are your space rental options?",
    answer:
      "We offer warehouses, office spaces, self-storage units, open yards, caravans, mobile toilets, and storage containers for rent across Abu Dhabi.",
  },
  {
    question: "Is your equipment and spaces compliant with regulations?",
    answer:
      "Yes, all our equipment is regularly maintained and meets UAE regulatory requirements. Our spaces are fully compliant with local safety standards.",
  },
  {
    question: "How quickly can I get the equipment delivered?",
    answer:
      "We offer same-day or next-day delivery depending on availability and location within Abu Dhabi.",
  },
  {
    question: "Do you require a security deposit?",
    answer:
      "A refundable security deposit may be required depending on the type and duration of rental. Our team will provide full details during the quoting process.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote by contacting us via WhatsApp, phone, email, or through our website contact form. We respond promptly to all inquiries.",
  },
  {
    question: "Is there support available if the equipment breaks down?",
    answer:
      "Yes, we provide 24/7 support and rapid response for equipment issues. Our maintenance team ensures minimal downtime for your projects.",
  },
  {
    question: "Where do you operate?",
    answer:
      "We primarily operate across Abu Dhabi and the wider UAE region, with our main base located in ICAD III, Abu Dhabi.",
  },
];

// ============================================================
// Testimonials
// ============================================================

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed R.",
    role: "Project Manager",
    text: "Top-notch service and well-maintained equipment. Hadeed made our construction project seamless from start to finish.",
  },
  {
    name: "Fatima K.",
    role: "Logistics Coordinator",
    text: "We needed last-minute storage space for our equipment. Hadeed delivered fast and professionally. Highly recommended!",
  },
  {
    name: "Mohammed A.",
    role: "Site Supervisor",
    text: "Their team was responsive, knowledgeable, and flexible. Great experience with both their cranes and open yard rentals.",
  },
];

// ============================================================
// Stats
// ============================================================

export const stats = [
  { label: "Happy Clients", value: "500", suffix: "+" },
  { label: "Projects Done", value: "1200", suffix: "+" },
  { label: "Client Reviews", value: "350", suffix: "+" },
  { label: "Years Experience", value: "15", suffix: "+" },
];

// ============================================================
// How It Works Steps
// ============================================================

export const steps = [
  {
    number: 1,
    title: "Browse Catalog",
    description: "Explore our wide range of equipment and space rental options.",
  },
  {
    number: 2,
    title: "Get an Estimate",
    description: "Receive a detailed estimate tailored to your project needs.",
  },
  {
    number: 3,
    title: "Request a Quote",
    description: "Submit your requirements and get a competitive quote.",
  },
  {
    number: 4,
    title: "Fast Delivery",
    description: "Get your equipment delivered quickly to your project site.",
  },
];
