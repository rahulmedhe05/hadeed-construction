// ============================================================
// Hadeed Emirates Contracting — Cities & Areas Data
// UAE (7 Emirates) + Qatar + Jordan
// ============================================================

export interface Area {
  name: string
  slug: string
  description: string
}

export interface City {
  name: string
  slug: string
  country: string
  countryCode: string
  title: string
  description: string
  metaDescription: string
  areas: Area[]
}

// ============================================================
// UAE — Abu Dhabi
// ============================================================

const abuDhabiAreas: Area[] = [
  { name: "Mussafah", slug: "mussafah", description: "Industrial hub in Abu Dhabi — home to ICAD and manufacturing facilities requiring construction and contracting services." },
  { name: "ICAD", slug: "icad", description: "Industrial City of Abu Dhabi — major industrial zone for factories, warehouses, and logistics facilities." },
  { name: "KIZAD", slug: "kizad", description: "Khalifa Industrial Zone Abu Dhabi — a world-class industrial zone for large-scale construction projects." },
  { name: "Khalifa City", slug: "khalifa-city", description: "Residential and commercial area in Abu Dhabi with growing construction and infrastructure needs." },
  { name: "Mohammed Bin Zayed City", slug: "mohammed-bin-zayed-city", description: "MBZ City — a major residential hub requiring construction, villa building, and infrastructure works." },
  { name: "Al Reem Island", slug: "al-reem-island", description: "Premium mixed-use development on Abu Dhabi's waterfront with residential and commercial construction." },
  { name: "Al Shamkha", slug: "al-shamkha", description: "Expanding residential area in Abu Dhabi requiring new construction and development projects." },
  { name: "Al Rahba", slug: "al-rahba", description: "Growing community near Abu Dhabi International Airport with residential and industrial construction." },
  { name: "Saadiyat Island", slug: "saadiyat-island", description: "Cultural district and premium residential island with high-end construction projects." },
  { name: "Yas Island", slug: "yas-island", description: "Entertainment and residential destination with major construction and hospitality developments." },
  { name: "Al Ain Road", slug: "al-ain-road", description: "Major corridor connecting Abu Dhabi and Al Ain with logistics and industrial construction." },
  { name: "Madinat Zayed", slug: "madinat-zayed", description: "Central Abu Dhabi commercial district with office and retail construction projects." },
  { name: "Al Bateen", slug: "al-bateen", description: "Premium residential and diplomatic area in Abu Dhabi with high-end construction needs." },
  { name: "Corniche", slug: "corniche", description: "Abu Dhabi's iconic waterfront with commercial, hospitality, and residential developments." },
  { name: "Al Maqta", slug: "al-maqta", description: "Strategic location connecting Abu Dhabi island with mainland — commercial and infrastructure projects." },
  { name: "Al Falah", slug: "al-falah", description: "Large residential community in Abu Dhabi requiring construction and fit-out services." },
  { name: "Baniyas", slug: "baniyas", description: "Historic residential area with ongoing development and construction activity." },
  { name: "Shakhbout City", slug: "shakhbout-city", description: "Growing residential district in Abu Dhabi with new villa and housing construction projects." },
  { name: "Al Wathba", slug: "al-wathba", description: "Expanding area south of Abu Dhabi with industrial and residential construction." },
  { name: "Al Samha", slug: "al-samha", description: "Developing community between Abu Dhabi and Dubai with commercial and warehouse construction." },
  { name: "Masdar City", slug: "masdar-city", description: "Sustainable smart city project — green building and energy-efficient construction." },
  { name: "Al Maryah Island", slug: "al-maryah-island", description: "Abu Dhabi Global Market financial district with premium commercial construction." },
  { name: "Tourist Club Area", slug: "tourist-club-area", description: "Central Abu Dhabi commercial district with retail and hospitality construction." },
  { name: "Electra Street", slug: "electra-street", description: "Busy commercial area in downtown Abu Dhabi requiring renovation and construction services." },
  { name: "Hamdan Street", slug: "hamdan-street", description: "Prime Abu Dhabi commercial corridor with retail and office construction." },
  { name: "Al Nahyan", slug: "al-nahyan", description: "Established residential district with ongoing construction and renovation projects." },
  { name: "Al Mushrif", slug: "al-mushrif", description: "Premium residential area in Abu Dhabi with villa construction and renovation." },
  { name: "Al Karamah", slug: "al-karamah", description: "Central residential area with mid-rise apartment construction projects." },
  { name: "Zayed Sports City", slug: "zayed-sports-city", description: "Sports and entertainment district with construction and infrastructure projects." },
  { name: "Al Marina", slug: "al-marina", description: "Waterfront development area with residential tower and commercial construction." },
]

// ============================================================
// UAE — Al Ain
// ============================================================

const alAinAreas: Area[] = [
  { name: "Al Ain Industrial Area", slug: "al-ain-industrial-area", description: "Industrial hub in Al Ain for factory, warehouse, and workshop construction." },
  { name: "Al Jimi", slug: "al-jimi", description: "Commercial and residential district in Al Ain with ongoing construction activity." },
  { name: "Al Muwaiji", slug: "al-muwaiji", description: "Growing residential area in Al Ain with villa and mid-rise construction." },
  { name: "Al Towayya", slug: "al-towayya", description: "Residential area in Al Ain requiring construction and development." },
  { name: "Zakher", slug: "zakher", description: "Established residential community in Al Ain with construction and renovation needs." },
  { name: "Al Hili", slug: "al-hili", description: "Historic area in Al Ain and site of ongoing residential developments." },
  { name: "Al Ain Oasis", slug: "al-ain-oasis", description: "Heritage site area with sensitive construction and renovation requirements." },
  { name: "Al Sarooj", slug: "al-sarooj", description: "Central Al Ain district with commercial and residential construction." },
  { name: "Falaj Hazza", slug: "falaj-hazza", description: "Growing residential zone in Al Ain with new building and infrastructure projects." },
  { name: "Al Markhaniya", slug: "al-markhaniya", description: "Residential area in Al Ain with villa and townhouse construction." },
  { name: "Al Mutarad", slug: "al-mutarad", description: "Community in Al Ain with various residential construction projects." },
  { name: "Al Khabisi", slug: "al-khabisi", description: "Residential and commercial area in Al Ain with construction services." },
  { name: "Al Yahar", slug: "al-yahar", description: "Developing area on the outskirts of Al Ain with industrial facilities." },
  { name: "Sweihan", slug: "sweihan", description: "Military and agricultural area between Abu Dhabi and Al Ain with specialized construction." },
  { name: "Remah", slug: "remah", description: "Growing community east of Al Ain with residential development projects." },
]

// ============================================================
// UAE — Dubai
// ============================================================

const dubaiAreas: Area[] = [
  { name: "Jebel Ali", slug: "jebel-ali", description: "Major industrial and port area hosting JAFZA — large-scale warehouse and logistics construction." },
  { name: "JAFZA", slug: "jafza", description: "Jebel Ali Free Zone — the UAE's largest free zone requiring industrial and commercial construction." },
  { name: "Dubai Industrial City", slug: "dubai-industrial-city", description: "Dedicated manufacturing and logistics zone with heavy industrial construction projects." },
  { name: "Al Quoz", slug: "al-quoz", description: "Mixed industrial and creative district with warehouse and workshop construction." },
  { name: "Dubai Investment Park", slug: "dubai-investment-park", description: "Integrated commercial and industrial community with warehouse and factory construction." },
  { name: "Business Bay", slug: "business-bay", description: "Central business district with high-rise commercial and residential construction." },
  { name: "Downtown Dubai", slug: "downtown-dubai", description: "Iconic urban center with premium commercial and hospitality construction." },
  { name: "Dubai Marina", slug: "dubai-marina", description: "Waterfront residential district with tower and mixed-use construction." },
  { name: "Dubai Silicon Oasis", slug: "dubai-silicon-oasis", description: "Technology park with commercial and residential construction." },
  { name: "International City", slug: "international-city", description: "Affordable residential community with construction and renovation projects." },
  { name: "JLT", slug: "jlt", description: "Jumeirah Lake Towers — commercial and residential tower construction hub." },
  { name: "DIFC", slug: "difc", description: "Dubai International Financial Centre — premium commercial construction." },
  { name: "Deira", slug: "deira", description: "Historic commercial district with renovation and retail construction." },
  { name: "Bur Dubai", slug: "bur-dubai", description: "Traditional commercial area with ongoing construction and renovation." },
  { name: "Al Rashidiya", slug: "al-rashidiya", description: "Residential area near Dubai Airport with construction and infrastructure." },
  { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle", description: "Growing residential community with mid-rise apartment construction." },
  { name: "Dubai South", slug: "dubai-south", description: "Aviation district near Al Maktoum Airport with massive infrastructure development." },
  { name: "Dubai Hills Estate", slug: "dubai-hills-estate", description: "Premium residential and commercial development with villa and tower construction." },
  { name: "Motor City", slug: "motor-city", description: "Residential community with apartment and townhouse construction." },
  { name: "Dubai Sports City", slug: "dubai-sports-city", description: "Sports-themed community with stadium and facility construction." },
  { name: "Mirdif", slug: "mirdif", description: "Established residential area with villa construction and renovation." },
  { name: "Palm Jumeirah", slug: "palm-jumeirah", description: "Iconic artificial island with luxury villa and resort construction." },
  { name: "Creek Harbour", slug: "creek-harbour", description: "Waterfront mega-development with tower and mixed-use construction." },
  { name: "Nad Al Sheba", slug: "nad-al-sheba", description: "Developing area with residential and commercial construction projects." },
  { name: "Al Warqa", slug: "al-warqa", description: "Residential district with villa and apartment construction." },
  { name: "Dubailand", slug: "dubailand", description: "Entertainment and residential mega-project with diverse construction." },
  { name: "Al Barsha", slug: "al-barsha", description: "Mixed residential and commercial area with construction activity." },
  { name: "Jumeirah", slug: "jumeirah", description: "Premium beachfront residential area with villa construction and renovation." },
  { name: "Karama", slug: "karama", description: "Dense commercial and residential area with renovation and construction." },
  { name: "Arabian Ranches", slug: "arabian-ranches", description: "Premium villa community with residential construction and landscaping." },
]

// ============================================================
// UAE — Sharjah
// ============================================================

const sharjahAreas: Area[] = [
  { name: "Sharjah Industrial Area", slug: "sharjah-industrial-area", description: "Major industrial zone in Sharjah with warehouse and factory construction." },
  { name: "SAIF Zone", slug: "saif-zone", description: "Sharjah Airport International Free Zone — industrial and commercial construction." },
  { name: "Al Nahda Sharjah", slug: "al-nahda-sharjah", description: "Residential and commercial area with high-rise construction." },
  { name: "Al Majaz", slug: "al-majaz", description: "Lakefront area in Sharjah with commercial and hospitality construction." },
  { name: "Al Khan", slug: "al-khan", description: "Waterfront area with residential tower and commercial construction." },
  { name: "Muwaileh", slug: "muwaileh", description: "Growing commercial area in Sharjah with retail and residential construction." },
  { name: "Al Qasimia", slug: "al-qasimia", description: "Central Sharjah district with residential and commercial developments." },
  { name: "University City", slug: "university-city", description: "Academic district in Sharjah with institutional and educational construction." },
  { name: "Sharjah Waterfront City", slug: "sharjah-waterfront-city", description: "New waterfront development with residential and commercial construction." },
  { name: "Al Taawun", slug: "al-taawun", description: "Residential area between Sharjah and Ajman with tower construction." },
  { name: "Bu Tina", slug: "bu-tina", description: "Residential area in Sharjah with ongoing construction activity." },
  { name: "Al Mamzar Sharjah", slug: "al-mamzar-sharjah", description: "Waterfront residential area with apartment construction." },
  { name: "Rolla", slug: "rolla", description: "Commercial center of Sharjah with retail and office construction." },
  { name: "Aljada", slug: "aljada", description: "Major mega-development in Sharjah with residential and commercial construction." },
  { name: "Tilal City", slug: "tilal-city", description: "New freehold residential community with villa and apartment construction." },
]

// ============================================================
// UAE — Ajman
// ============================================================

const ajmanAreas: Area[] = [
  { name: "Ajman Free Zone", slug: "ajman-free-zone", description: "Free zone area with commercial and industrial construction." },
  { name: "Ajman Industrial Area", slug: "ajman-industrial-area", description: "Industrial zone in Ajman for warehouse and factory construction." },
  { name: "Al Nuaimiya", slug: "al-nuaimiya", description: "Central Ajman commercial and residential construction district." },
  { name: "Al Rashidiya Ajman", slug: "al-rashidiya-ajman", description: "Residential area in Ajman with construction projects." },
  { name: "Al Jurf", slug: "al-jurf", description: "Developing industrial area in Ajman with warehouse construction." },
  { name: "Emirates City", slug: "emirates-city-ajman", description: "Flagship development in Ajman with tower and commercial construction." },
  { name: "Al Mowaihat", slug: "al-mowaihat", description: "Growing residential area in Ajman with villa construction." },
  { name: "Al Hamidiya", slug: "al-hamidiya", description: "Traditional residential area with renovation and new construction." },
  { name: "Ajman Corniche", slug: "ajman-corniche", description: "Waterfront area with hospitality and residential construction." },
  { name: "Al Rawda Ajman", slug: "al-rawda-ajman", description: "Residential area with new building construction projects." },
]

// ============================================================
// UAE — Umm Al Quwain
// ============================================================

const uaqAreas: Area[] = [
  { name: "UAQ Free Trade Zone", slug: "uaq-free-trade-zone", description: "Commercial free zone with industrial and warehouse construction." },
  { name: "UAQ Industrial Area", slug: "uaq-industrial-area", description: "Industrial zone for factory and workshop construction in UAQ." },
  { name: "Al Salamah UAQ", slug: "al-salamah-uaq", description: "Residential district in Umm Al Quwain with construction needs." },
  { name: "Old Town UAQ", slug: "old-town-uaq", description: "Historic area with renovation and heritage construction." },
  { name: "Al Raas UAQ", slug: "al-raas-uaq", description: "Commercial area in UAQ with retail construction." },
  { name: "Al Aahad UAQ", slug: "al-aahad-uaq", description: "Developing residential area in UAQ." },
  { name: "Falaj Al Mualla", slug: "falaj-al-mualla", description: "Inland area in UAQ with residential and agricultural construction." },
  { name: "Umm Al Quwain Marina", slug: "umm-al-quwain-marina", description: "Waterfront development area with marine and residential construction." },
]

// ============================================================
// UAE — Ras Al Khaimah
// ============================================================

const rakAreas: Area[] = [
  { name: "RAK Free Trade Zone", slug: "rak-free-trade-zone", description: "Major free zone for commercial and industrial construction." },
  { name: "RAK Industrial Area", slug: "rak-industrial-area", description: "Industrial zone in Ras Al Khaimah for factory and warehouse construction." },
  { name: "Al Hamra Village", slug: "al-hamra-village", description: "Resort-style residential community with villa and hospitality construction." },
  { name: "Al Nakheel", slug: "al-nakheel", description: "Central commercial area in RAK with retail and office construction." },
  { name: "Julphar", slug: "julphar", description: "Commercial district in RAK with tower and mixed-use construction." },
  { name: "Mina Al Arab", slug: "mina-al-arab", description: "Waterfront development with residential and hospitality construction." },
  { name: "Al Marjan Island", slug: "al-marjan-island", description: "Artificial island development with resort and residential construction." },
  { name: "Khuzam", slug: "khuzam", description: "Residential area in RAK with villa and apartment construction." },
  { name: "Dafan Al Nakheel", slug: "dafan-al-nakheel", description: "Commercial area in RAK with office and retail construction." },
  { name: "Sidroh", slug: "sidroh", description: "Residential area in RAK with new construction activity." },
  { name: "Al Dhait", slug: "al-dhait", description: "Growing residential district with villa and housing construction." },
  { name: "RAK Gateway", slug: "rak-gateway", description: "New commercial development with infrastructure construction." },
]

// ============================================================
// UAE — Fujairah
// ============================================================

const fujairahAreas: Area[] = [
  { name: "Fujairah Free Zone", slug: "fujairah-free-zone", description: "Free zone area for industrial and commercial construction." },
  { name: "Fujairah Industrial Area", slug: "fujairah-industrial-area", description: "Industrial zone for factory and warehouse construction." },
  { name: "Fujairah Port Area", slug: "fujairah-port-area", description: "Port district with marine, logistics, and industrial construction." },
  { name: "Al Faseel", slug: "al-faseel", description: "Central Fujairah commercial area with retail and office construction." },
  { name: "Mirbah", slug: "mirbah", description: "Coastal area in Fujairah with residential and tourism construction." },
  { name: "Dibba Al Fujairah", slug: "dibba-al-fujairah", description: "Northern Fujairah town with residential and commercial construction." },
  { name: "Sakamkam", slug: "sakamkam", description: "Residential area in Fujairah with housing construction." },
  { name: "Al Hayl", slug: "al-hayl", description: "Inland area in Fujairah with residential and infrastructure construction." },
  { name: "Qidfa", slug: "qidfa", description: "Developing area in Fujairah with agricultural and residential construction." },
  { name: "Masafi", slug: "masafi", description: "Mountain area between Fujairah and other emirates with construction needs." },
]

// ============================================================
// QATAR
// ============================================================

const dohaAreas: Area[] = [
  { name: "West Bay", slug: "west-bay", description: "Qatar's prestigious business district with skyscraper and commercial construction." },
  { name: "Lusail City", slug: "lusail-city", description: "Qatar's flagship mega-city development with massive infrastructure and tower construction." },
  { name: "The Pearl Qatar", slug: "the-pearl-qatar", description: "Artificial island with luxury residential and retail construction." },
  { name: "Industrial Area Doha", slug: "industrial-area-doha", description: "Doha's main industrial zone for factory, warehouse, and workshop construction." },
  { name: "Al Wakrah", slug: "al-wakrah", description: "Growing city south of Doha with residential and commercial construction." },
  { name: "Mesaieed", slug: "mesaieed", description: "Industrial city and port area with heavy industrial and petrochemical construction." },
  { name: "Ras Laffan", slug: "ras-laffan", description: "Major industrial city for LNG — heavy industrial construction and infrastructure." },
  { name: "Al Rayyan", slug: "al-rayyan", description: "Western Doha municipality with residential and commercial construction." },
  { name: "Al Dafna", slug: "al-dafna", description: "Central business area with office tower and hospitality construction." },
  { name: "Msheireb Downtown", slug: "msheireb-downtown", description: "Sustainable urban regeneration project with smart building and heritage construction." },
  { name: "Education City", slug: "education-city", description: "Qatar Foundation campus with institutional and educational building construction." },
  { name: "Al Sadd", slug: "al-sadd", description: "Mixed-use district in Doha with commercial and residential construction." },
  { name: "Umm Salal", slug: "umm-salal", description: "Northern Doha municipality with residential and infrastructure construction." },
  { name: "Al Khor", slug: "al-khor", description: "Coastal city north of Doha with residential and industrial construction." },
  { name: "Dukhan", slug: "dukhan", description: "Western Qatar oil town with energy sector and industrial construction." },
  { name: "Al Gharafa", slug: "al-gharafa", description: "Residential area with villa and community construction." },
  { name: "Al Thumama", slug: "al-thumama", description: "Southern Doha area with sports and infrastructure construction." },
  { name: "Katara Cultural Village", slug: "katara-cultural-village", description: "Cultural district with heritage and institutional construction." },
  { name: "Bin Mahmoud", slug: "bin-mahmoud", description: "Dense residential and commercial district with construction and renovation." },
  { name: "Al Markhiya", slug: "al-markhiya", description: "Residential area near West Bay with villa and apartment construction." },
]

// ============================================================
// JORDAN
// ============================================================

const ammanAreas: Area[] = [
  { name: "Abdali", slug: "abdali", description: "Amman's new downtown — premium commercial, residential, and hospitality construction." },
  { name: "Abdoun", slug: "abdoun", description: "Upscale residential and diplomatic area with villa and premium construction." },
  { name: "Shmeisani", slug: "shmeisani", description: "Central commercial district with office and hotel construction." },
  { name: "Sweifieh", slug: "sweifieh", description: "Major commercial and retail district with mall and high-rise construction." },
  { name: "Dabouq", slug: "dabouq", description: "Premium residential area with villa and luxury home construction." },
  { name: "Al Bayader", slug: "al-bayader", description: "Growing residential area with apartment and housing construction." },
  { name: "Khalda", slug: "khalda", description: "Residential district with mid-rise and villa construction." },
  { name: "Um Uthaina", slug: "um-uthaina", description: "Commercial area with retail and office construction." },
  { name: "Jabal Amman", slug: "jabal-amman", description: "Historic hilltop area with heritage renovation and boutique construction." },
  { name: "Tla Al Ali", slug: "tla-al-ali", description: "Residential and commercial area with mixed-use construction." },
  { name: "Al Jubeiha", slug: "al-jubeiha", description: "University area with institutional and residential construction." },
  { name: "Marj Al Hamam", slug: "marj-al-hamam", description: "Residential area south of Amman with new housing construction." },
  { name: "Tabarbour", slug: "tabarbour", description: "East Amman residential area with construction and infrastructure." },
  { name: "Al Hashmi Al Shamali", slug: "al-hashmi-al-shamali", description: "Commercial and industrial area with warehouse construction." },
  { name: "Sahab", slug: "sahab", description: "Industrial zone near Amman with factory and logistics construction." },
  { name: "King Hussein Business Park", slug: "king-hussein-business-park", description: "Modern business park with commercial and office construction." },
  { name: "Airport Road Amman", slug: "airport-road-amman", description: "Major corridor with logistics and commercial development." },
  { name: "Marka", slug: "marka", description: "Mixed residential and industrial area with construction activity." },
  { name: "Zahran", slug: "zahran", description: "Premium central Amman area with office and embassy construction." },
  { name: "Gardens Street", slug: "gardens-street", description: "Busy commercial street with retail and residential construction." },
]

const aqabaAreas: Area[] = [
  { name: "Aqaba Port", slug: "aqaba-port", description: "Major port and logistics area with marine and industrial construction." },
  { name: "ASEZA", slug: "aseza", description: "Aqaba Special Economic Zone with industrial and commercial construction." },
  { name: "Tala Bay", slug: "tala-bay", description: "Resort and residential development with hospitality construction." },
  { name: "Ayla Oasis", slug: "ayla-oasis", description: "Waterfront development with residential and leisure construction." },
  { name: "Marsa Zayed", slug: "marsa-zayed", description: "New waterfront development with mixed-use construction." },
  { name: "Al Sakaneyeh", slug: "al-sakaneyeh-aqaba", description: "Residential area in Aqaba with housing construction." },
  { name: "Industrial Estate Aqaba", slug: "industrial-estate-aqaba", description: "Industrial zone with factory and warehouse construction." },
  { name: "Downtown Aqaba", slug: "downtown-aqaba", description: "City center with commercial and hospitality renovation and construction." },
]

const irbidAreas: Area[] = [
  { name: "University Street Irbid", slug: "university-street-irbid", description: "Academic and commercial area with construction activity." },
  { name: "Al Husn", slug: "al-husn", description: "Residential area in Irbid with housing construction." },
  { name: "Irbid Industrial Area", slug: "irbid-industrial-area", description: "Industrial zone with factory and warehouse construction." },
  { name: "Al Ramtha", slug: "al-ramtha", description: "Border city near Syria with commercial and residential construction." },
  { name: "Beit Ras", slug: "beit-ras", description: "Developing area near Irbid with residential construction." },
  { name: "Downtown Irbid", slug: "downtown-irbid", description: "City center with commercial and retail construction." },
]

const zarqaAreas: Area[] = [
  { name: "Zarqa Free Zone", slug: "zarqa-free-zone", description: "Industrial free zone with manufacturing and warehouse construction." },
  { name: "New Zarqa", slug: "new-zarqa", description: "Modern residential area with apartment and villa construction." },
  { name: "Russeifa", slug: "russeifa", description: "Adjacent city with residential and commercial construction." },
  { name: "Al Hashemiyya", slug: "al-hashemiyya", description: "Developing area with industrial and residential construction." },
  { name: "Zarqa Industrial Area", slug: "zarqa-industrial-area", description: "Major industrial zone with factory and logistics construction." },
]

// ============================================================
// All Cities
// ============================================================

export const allCities: City[] = [
  // UAE
  {
    name: "Abu Dhabi",
    slug: "abu-dhabi",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Abu Dhabi",
    description: "Hadeed Emirates Contracting delivers industrial developments, commercial buildings, infrastructure works, and MEP services across Abu Dhabi. With 25+ years of experience and 400+ completed projects, we are Abu Dhabi's trusted construction partner.",
    metaDescription: "Leading construction & contracting company in Abu Dhabi. Industrial developments, commercial buildings, infrastructure works, MEP services. 400+ projects | 25+ years experience.",
    areas: abuDhabiAreas,
  },
  {
    name: "Al Ain",
    slug: "al-ain",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Al Ain",
    description: "Hadeed Emirates Contracting provides comprehensive construction, contracting, and project management services across Al Ain. From industrial facilities to residential developments, we deliver projects with engineering excellence.",
    metaDescription: "Professional construction & contracting company in Al Ain. Industrial, commercial, residential construction. MEP works. Hadeed Emirates Contracting.",
    areas: alAinAreas,
  },
  {
    name: "Dubai",
    slug: "dubai",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Dubai",
    description: "Hadeed Emirates Contracting serves Dubai's dynamic construction sector with industrial developments, logistics facilities, commercial buildings, free zone construction, and specialized MEP works. From JAFZA to Downtown, we deliver excellence.",
    metaDescription: "Premier construction & contracting company in Dubai. Industrial, commercial, residential construction. Free zone developments, logistics facilities. 400+ projects completed.",
    areas: dubaiAreas,
  },
  {
    name: "Sharjah",
    slug: "sharjah",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Sharjah",
    description: "Hadeed Emirates Contracting provides construction and contracting services across Sharjah including industrial zone construction, commercial developments, residential buildings, and specialized construction solutions.",
    metaDescription: "Leading construction company in Sharjah. Industrial zone construction, commercial developments, SAIF Zone projects. Hadeed Emirates Contracting.",
    areas: sharjahAreas,
  },
  {
    name: "Ajman",
    slug: "ajman",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Ajman",
    description: "Comprehensive construction and contracting services in Ajman including industrial facilities, commercial buildings, residential projects, and MEP works from Hadeed Emirates Contracting.",
    metaDescription: "Professional construction & contracting services in Ajman. Industrial facilities, commercial buildings, residential projects. Hadeed Emirates Contracting.",
    areas: ajmanAreas,
  },
  {
    name: "Umm Al Quwain",
    slug: "umm-al-quwain",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Umm Al Quwain",
    description: "Hadeed Emirates Contracting delivers construction, industrial development, and project management services across Umm Al Quwain, supporting the emirate's growing industrial and residential sectors.",
    metaDescription: "Construction & contracting services in Umm Al Quwain. Industrial development, residential construction, project management. Hadeed Emirates Contracting.",
    areas: uaqAreas,
  },
  {
    name: "Ras Al Khaimah",
    slug: "ras-al-khaimah",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Ras Al Khaimah",
    description: "Hadeed Emirates Contracting provides construction and contracting services across Ras Al Khaimah including free zone developments, industrial construction, hospitality projects, and MEP works.",
    metaDescription: "Construction company in Ras Al Khaimah. Free zone developments, industrial construction, hospitality projects. Hadeed Emirates Contracting — 25+ years experience.",
    areas: rakAreas,
  },
  {
    name: "Fujairah",
    slug: "fujairah",
    country: "UAE",
    countryCode: "AE",
    title: "Construction & Contracting Services in Fujairah",
    description: "Hadeed Emirates Contracting serves Fujairah's construction sector with industrial facilities, port infrastructure, commercial buildings, and specialized construction services across the emirate.",
    metaDescription: "Construction & contracting in Fujairah. Industrial facilities, port infrastructure, commercial buildings. Hadeed Emirates Contracting.",
    areas: fujairahAreas,
  },
  // Qatar
  {
    name: "Doha",
    slug: "doha",
    country: "Qatar",
    countryCode: "QA",
    title: "Construction & Contracting Services in Doha, Qatar",
    description: "Hadeed Emirates Contracting extends its proven construction expertise to Qatar, delivering industrial developments, commercial buildings, infrastructure projects, and specialized facilities across Doha and surrounding areas.",
    metaDescription: "Construction & contracting company in Doha, Qatar. Industrial developments, commercial buildings, infrastructure projects. Hadeed Emirates — 400+ projects experience.",
    areas: dohaAreas,
  },
  // Jordan
  {
    name: "Amman",
    slug: "amman",
    country: "Jordan",
    countryCode: "JO",
    title: "Construction & Contracting Services in Amman, Jordan",
    description: "Hadeed Emirates Contracting brings 25+ years of construction excellence to Jordan's capital, delivering commercial developments, residential buildings, industrial facilities, and infrastructure projects across Amman.",
    metaDescription: "Construction & contracting company in Amman, Jordan. Commercial, residential, industrial construction. Hadeed Emirates — trusted Middle East contractor.",
    areas: ammanAreas,
  },
  {
    name: "Aqaba",
    slug: "aqaba",
    country: "Jordan",
    countryCode: "JO",
    title: "Construction & Contracting Services in Aqaba, Jordan",
    description: "Construction and contracting services in Aqaba Special Economic Zone. Hadeed Emirates Contracting delivers port infrastructure, industrial facilities, hospitality developments, and commercial construction.",
    metaDescription: "Construction company in Aqaba, Jordan. Port infrastructure, industrial facilities, hospitality developments. ASEZA projects. Hadeed Emirates Contracting.",
    areas: aqabaAreas,
  },
  {
    name: "Irbid",
    slug: "irbid",
    country: "Jordan",
    countryCode: "JO",
    title: "Construction & Contracting Services in Irbid, Jordan",
    description: "Hadeed Emirates Contracting provides construction and contracting services in Irbid, Jordan's second-largest city, covering commercial, residential, educational, and industrial projects.",
    metaDescription: "Construction company in Irbid, Jordan. Commercial, residential, industrial construction. Hadeed Emirates Contracting — delivering Middle East construction excellence.",
    areas: irbidAreas,
  },
  {
    name: "Zarqa",
    slug: "zarqa",
    country: "Jordan",
    countryCode: "JO",
    title: "Construction & Contracting Services in Zarqa, Jordan",
    description: "Construction and industrial development services in Zarqa, Jordan's industrial capital. Hadeed Emirates Contracting delivers factory construction, warehouse development, and infrastructure projects.",
    metaDescription: "Construction & industrial development in Zarqa, Jordan. Factory construction, warehouse development, infrastructure projects. Hadeed Emirates Contracting.",
    areas: zarqaAreas,
  },
]

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return allCities.find((c) => c.slug === slug)
}

export function getAreaBySlug(citySlug: string, areaSlug: string) {
  const city = getCityBySlug(citySlug)
  if (!city) return null
  const area = city.areas.find((a) => a.slug === areaSlug)
  if (!area) return null
  return { city, area }
}

// Count total pages
export function getTotalAreaPages(): number {
  return allCities.reduce((sum, city) => sum + city.areas.length, 0) + allCities.length
}
