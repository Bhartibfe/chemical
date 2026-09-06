export type Category =
  | "Water Treatment"
  | "Acids"
  | "Alkalis & Salts"
  | "Bleaching & Oxidising"
  | "Surfactants"
  | "Specialty";

export type Product = {
  /** URL segment for /products/[slug]. Derived once, never hand-edited. */
  slug: string;
  name: string;
  /** Card blurb — ported from the original site. */
  desc: string;
  /** Opening line of the detail page. Written answer-first and
   *  entity-explicit so AI answer engines can quote it standalone. */
  summary: string;
  formula?: string;
  category: Category;
  /** Original tag, kept as the visible chip. */
  tag: string;
  applications: string[];
};

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/%/g, " percent ")
    .replace(/[()]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

type ProductSeed = Omit<Product, "slug">;

const seeds: ProductSeed[] = [
  {
    name: "Sodium Hypochlorite",
    desc: "Powerful disinfectant and bleaching agent for water treatment and sanitation.",
    summary:
      "Sodium hypochlorite is a chlorine-based disinfectant and bleaching agent used to treat drinking water, wastewater, and industrial process water. SHIV ENTERPRISES supplies it to water treatment plants and municipal bodies across Punjab and India.",
    formula: "NaOCl",
    category: "Water Treatment",
    tag: "Water Treatment",
    applications: [
      "Drinking water and municipal water disinfection",
      "Wastewater and effluent treatment",
      "Bleaching in textile and paper processing",
      "Surface sanitation in food and dairy plants",
    ],
  },
  {
    name: "Caustic Lye",
    desc: "High-strength alkali for pH control, chemical processing, and industrial cleaning.",
    summary:
      "Caustic lye is liquid sodium hydroxide used for pH correction, neutralisation, and industrial cleaning. SHIV ENTERPRISES supplies caustic lye to textile, paper, and chemical processing units across India.",
    formula: "NaOH",
    category: "Alkalis & Salts",
    tag: "Industrial",
    applications: [
      "pH control and acid neutralisation",
      "Textile mercerising and scouring",
      "Pulp and paper processing",
      "Clean-in-place and industrial degreasing",
    ],
  },
  {
    name: "Caustic Soda Flakes",
    desc: "Solid sodium hydroxide used in soap making, pulp & paper, and chemicals.",
    summary:
      "Caustic soda flakes are solid sodium hydroxide, valued for easy handling and storage where a liquid alkali is impractical. SHIV ENTERPRISES supplies caustic soda flakes to soap, detergent, paper, and chemical manufacturers.",
    formula: "NaOH",
    category: "Alkalis & Salts",
    tag: "Multi-purpose",
    applications: [
      "Soap and detergent manufacturing",
      "Pulp, paper, and board production",
      "Alumina and metal processing",
      "Water treatment pH adjustment",
    ],
  },
  {
    name: "Sulphuric Acid",
    desc: "Concentrated acid used in fertilizers, metal processing, and batteries.",
    summary:
      "Sulphuric acid is a strong mineral acid used across fertiliser production, metal pickling, and battery manufacturing. SHIV ENTERPRISES supplies sulphuric acid to industrial buyers in Punjab, Chandigarh, and across India.",
    formula: "H₂SO₄",
    category: "Acids",
    tag: "Industrial",
    applications: [
      "Fertiliser and phosphate manufacturing",
      "Metal pickling and surface treatment",
      "Lead-acid battery electrolyte",
      "Effluent pH correction",
    ],
  },
  {
    name: "Hydrochloric Acid",
    desc: "Used in pH control, metal pickling, cleaning, and chemical processes.",
    summary:
      "Hydrochloric acid is a strong mineral acid used for pH control, steel pickling, and resin regeneration in demineralisation plants. SHIV ENTERPRISES supplies hydrochloric acid to power, textile, and water treatment sectors.",
    formula: "HCl",
    category: "Acids",
    tag: "Industrial",
    applications: [
      "Ion exchange resin regeneration",
      "Steel pickling and descaling",
      "pH control in process water",
      "Industrial and scale cleaning",
    ],
  },
  {
    name: "Poly Aluminium Chloride",
    desc: "Coagulant for water and wastewater treatment, improving clarity.",
    summary:
      "Poly aluminium chloride (PAC) is an inorganic coagulant that removes suspended solids and turbidity from water faster than conventional alum. SHIV ENTERPRISES supplies PAC to water treatment plants and effluent treatment plants across India.",
    category: "Water Treatment",
    tag: "Water Treatment",
    applications: [
      "Drinking water clarification",
      "Effluent and sewage treatment",
      "Paper mill retention aid",
      "Turbidity and colour removal",
    ],
  },
  {
    name: "Sulphur",
    desc: "Used in fertilizers, chemicals, rubber, and pharmaceuticals.",
    summary:
      "Sulphur is a foundational industrial raw material used in fertiliser, rubber, and chemical manufacturing. SHIV ENTERPRISES supplies industrial-grade sulphur to agricultural and chemical processors.",
    formula: "S",
    category: "Specialty",
    tag: "Agriculture",
    applications: [
      "Sulphur-based fertiliser production",
      "Rubber vulcanisation",
      "Sulphuric acid manufacturing",
      "Agrochemical and pharmaceutical intermediates",
    ],
  },
  {
    name: "Sodium Chloride",
    desc: "High-purity salt for water treatment and chemical industries.",
    summary:
      "Sodium chloride is high-purity industrial salt used to regenerate water softeners and as a feedstock in chemical manufacturing. SHIV ENTERPRISES supplies sodium chloride to water treatment and process industries.",
    formula: "NaCl",
    category: "Alkalis & Salts",
    tag: "Water Treatment",
    applications: [
      "Water softener resin regeneration",
      "Chlor-alkali feedstock",
      "Textile dyeing baths",
      "Brine preparation",
    ],
  },
  {
    name: "Hydrogen Peroxide",
    desc: "Oxidizing agent for bleaching, disinfecting, and wastewater treatment.",
    summary:
      "Hydrogen peroxide is an oxidising agent that bleaches and disinfects while breaking down into water and oxygen, leaving no persistent residue. SHIV ENTERPRISES supplies hydrogen peroxide to textile, paper, and water treatment operations.",
    formula: "H₂O₂",
    category: "Bleaching & Oxidising",
    tag: "Bleaching",
    applications: [
      "Textile and paper bleaching",
      "Wastewater odour and COD control",
      "Disinfection and sterilisation",
      "Chemical oxidation processes",
    ],
  },
  {
    name: "Sodium Hydrosulphite",
    desc: "Reducing agent for textiles, leather, paper, and water treatment.",
    summary:
      "Sodium hydrosulphite is a powerful reducing agent used for vat dyeing and stripping colour in textile processing. SHIV ENTERPRISES supplies sodium hydrosulphite to textile mills and denim processors.",
    formula: "Na₂S₂O₄",
    category: "Bleaching & Oxidising",
    tag: "Textile",
    applications: [
      "Vat and indigo dyeing in denim",
      "Colour stripping and correction",
      "Kaolin clay and paper brightening",
      "Leather processing",
    ],
  },
  {
    name: "Hydrazine Hydrate",
    desc: "Used in boiler water treatment, fuel additives, and chemical synthesis.",
    summary:
      "Hydrazine hydrate is an oxygen scavenger dosed into boiler feed water to prevent corrosion in high-pressure steam systems. SHIV ENTERPRISES supplies hydrazine hydrate to power plants and thermal utilities across India.",
    formula: "N₂H₄·H₂O",
    category: "Water Treatment",
    tag: "Power Plants",
    applications: [
      "Boiler feed water oxygen scavenging",
      "Corrosion control in steam circuits",
      "Power plant water chemistry",
      "Chemical synthesis intermediate",
    ],
  },
  {
    name: "Polyacrylamide (PAM)",
    desc: "Water-soluble polymer for flocculation, sludge dewatering, and water treatment.",
    summary:
      "Polyacrylamide (PAM) is a water-soluble flocculant that binds fine suspended particles into settleable flocs, sharply improving sludge dewatering. SHIV ENTERPRISES supplies anionic and cationic PAM grades for water and effluent treatment.",
    category: "Water Treatment",
    tag: "Water Treatment",
    applications: [
      "Sludge thickening and dewatering",
      "Effluent clarification",
      "Mineral processing and tailings",
      "Paper making retention",
    ],
  },
  {
    name: "Soda Ash Light",
    desc: "Light sodium carbonate for glass, detergents, and chemicals.",
    summary:
      "Soda ash light is low-bulk-density sodium carbonate used where fast dissolution matters, such as detergents and water treatment. SHIV ENTERPRISES supplies soda ash light to detergent, glass, and chemical manufacturers.",
    formula: "Na₂CO₃",
    category: "Alkalis & Salts",
    tag: "Industrial",
    applications: [
      "Detergent and soap formulation",
      "Water hardness reduction",
      "Glass manufacturing",
      "pH buffering in dyeing",
    ],
  },
  {
    name: "Soda Ash Dense",
    desc: "Dense sodium carbonate with higher bulk density for industry use.",
    summary:
      "Soda ash dense is high-bulk-density sodium carbonate preferred in glass manufacturing for its handling and low dust characteristics. SHIV ENTERPRISES supplies soda ash dense to glass and heavy chemical industries.",
    formula: "Na₂CO₃",
    category: "Alkalis & Salts",
    tag: "Industrial",
    applications: [
      "Container and flat glass production",
      "Bulk chemical manufacturing",
      "Metallurgical flux",
      "Alkali supply in process industries",
    ],
  },
  {
    name: "Sodium Metabisulphite",
    desc: "Bleaching and preservative agent for water, food, and chemicals.",
    summary:
      "Sodium metabisulphite acts as a reducing agent, preservative, and dechlorinating chemical in water and food processing. SHIV ENTERPRISES supplies sodium metabisulphite to water treatment, textile, and processing industries.",
    formula: "Na₂S₂O₅",
    category: "Bleaching & Oxidising",
    tag: "Preservative",
    applications: [
      "Dechlorination ahead of RO membranes",
      "Food and beverage preservation",
      "Textile bleach neutralisation",
      "Leather and photographic processing",
    ],
  },
  {
    name: "Ferrous Sulphate",
    desc: "Iron salt for water treatment, pigments, and fertilizers.",
    summary:
      "Ferrous sulphate is an iron salt used as a coagulant in water treatment and as a micronutrient in agriculture. SHIV ENTERPRISES supplies ferrous sulphate to water treatment plants and fertiliser blenders.",
    formula: "FeSO₄",
    category: "Water Treatment",
    tag: "Water Treatment",
    applications: [
      "Coagulation and phosphate removal",
      "Iron micronutrient in fertilisers",
      "Chromium reduction in cement",
      "Pigment manufacturing",
    ],
  },
  {
    name: "Hydrated Lime",
    desc: "Calcium hydroxide for soil stabilization, water treatment, and construction.",
    summary:
      "Hydrated lime is calcium hydroxide used to raise pH, soften water, and stabilise soils in construction. SHIV ENTERPRISES supplies hydrated lime to water treatment, construction, and industrial buyers.",
    formula: "Ca(OH)₂",
    category: "Alkalis & Salts",
    tag: "Construction",
    applications: [
      "Water softening and pH correction",
      "Soil stabilisation in road works",
      "Flue gas desulphurisation",
      "Effluent neutralisation",
    ],
  },
  {
    name: "Sodium Sulphite",
    desc: "Reducing agent, antioxidant, and water treatment chemical.",
    summary:
      "Sodium sulphite is an oxygen scavenger used to protect boilers and pipelines from corrosion. SHIV ENTERPRISES supplies sodium sulphite to power, paper, and water treatment operations.",
    formula: "Na₂SO₃",
    category: "Water Treatment",
    tag: "Water Treatment",
    applications: [
      "Boiler water oxygen scavenging",
      "Dechlorination of process water",
      "Pulp and paper processing",
      "Photographic and textile use",
    ],
  },
  {
    name: "Sodium Bisulphite",
    desc: "Used for bleaching, water treatment, and as a preservative.",
    summary:
      "Sodium bisulphite is a reducing agent used to remove residual chlorine and excess oxygen from process water. SHIV ENTERPRISES supplies sodium bisulphite to water treatment and textile industries.",
    formula: "NaHSO₃",
    category: "Bleaching & Oxidising",
    tag: "Bleaching",
    applications: [
      "Residual chlorine removal before RO",
      "Textile bleach neutralisation",
      "Food-grade preservation",
      "Effluent treatment",
    ],
  },
  {
    name: "Acetic Acid",
    desc: "Glacial acetic acid for chemical manufacturing, food, and industrial applications.",
    summary:
      "Acetic acid is a versatile organic acid used in textile dyeing, chemical synthesis, and food processing. SHIV ENTERPRISES supplies glacial acetic acid to textile and chemical manufacturers.",
    formula: "CH₃COOH",
    category: "Acids",
    tag: "Industrial",
    applications: [
      "pH control in textile dyeing",
      "Chemical and solvent manufacturing",
      "Food-grade acidulant",
      "Cleaning and descaling",
    ],
  },
  {
    name: "Calcium Chloride",
    desc: "Used for de-icing, dust control, concrete acceleration, and as a drying agent.",
    summary:
      "Calcium chloride is a highly soluble salt used for dust control, concrete acceleration, and moisture absorption. SHIV ENTERPRISES supplies calcium chloride to construction, oilfield, and industrial buyers.",
    formula: "CaCl₂",
    category: "Alkalis & Salts",
    tag: "Multi-purpose",
    applications: [
      "Concrete set acceleration",
      "Dust suppression on roads",
      "Industrial drying and desiccation",
      "Refrigeration brines",
    ],
  },
  {
    name: "Calcium Hypochlorite",
    desc: "Solid chlorine disinfectant used for water treatment and sanitation.",
    summary:
      "Calcium hypochlorite is a solid chlorine disinfectant offering higher available chlorine and longer shelf life than liquid bleach. SHIV ENTERPRISES supplies calcium hypochlorite for water disinfection and sanitation.",
    formula: "Ca(OCl)₂",
    category: "Water Treatment",
    tag: "Disinfectant",
    applications: [
      "Drinking water and tank disinfection",
      "Swimming pool sanitation",
      "Sewage and effluent treatment",
      "Surface and equipment sanitisation",
    ],
  },
  {
    name: "Phosphoric Acid",
    desc: "Industrial acid for fertilizers, food processing, detergents, and chemical manufacturing.",
    summary:
      "Phosphoric acid is a mineral acid central to fertiliser production, metal surface treatment, and food-grade acidulation. SHIV ENTERPRISES supplies phosphoric acid to agricultural and industrial processors.",
    formula: "H₃PO₄",
    category: "Acids",
    tag: "Agriculture",
    applications: [
      "Phosphatic fertiliser manufacturing",
      "Metal phosphating and rust conversion",
      "Detergent and cleaner formulation",
      "Food-grade acidulant",
    ],
  },
  {
    name: "Nitric Acid",
    desc: "Strong mineral acid used in fertilizers, explosives, and metal processing.",
    summary:
      "Nitric acid is a strong oxidising mineral acid used in fertiliser manufacturing and stainless steel passivation. SHIV ENTERPRISES supplies nitric acid to industrial and metallurgical buyers.",
    formula: "HNO₃",
    category: "Acids",
    tag: "Industrial",
    applications: [
      "Nitrogenous fertiliser production",
      "Stainless steel pickling and passivation",
      "Metal etching and refining",
      "Chemical intermediates",
    ],
  },
  {
    name: "Ferric Alum",
    desc: "Coagulant for water treatment and textile dyeing processes.",
    summary:
      "Ferric alum is a coagulant that removes colour, turbidity, and suspended solids from water and textile effluent. SHIV ENTERPRISES supplies ferric alum to water treatment plants and textile processors.",
    category: "Water Treatment",
    tag: "Water Treatment",
    applications: [
      "Raw water clarification",
      "Textile effluent decolourisation",
      "Sewage treatment",
      "Paper mill water systems",
    ],
  },
  {
    name: "Ammonia",
    desc: "Used in fertilizers, water treatment, refrigeration, and chemical manufacturing.",
    summary:
      "Ammonia is a fundamental industrial chemical used in fertiliser production, refrigeration, and pH control. SHIV ENTERPRISES supplies ammonia solution to industrial and agricultural buyers.",
    formula: "NH₃",
    category: "Specialty",
    tag: "Multi-purpose",
    applications: [
      "Fertiliser and urea manufacturing",
      "Industrial refrigeration systems",
      "Chloramination in water treatment",
      "Flue gas NOx reduction",
    ],
  },
  {
    name: "Green Acid",
    desc: "High-performance industrial cleaning acid used for rust removal, scale cleaning, surface treatment, and maintenance applications.",
    summary:
      "Green acid is a high-performance industrial cleaning acid formulated for rust removal, scale cleaning, and surface preparation. SHIV ENTERPRISES supplies green acid for plant maintenance and descaling work.",
    category: "Specialty",
    tag: "Cleaning Chemical",
    applications: [
      "Rust and scale removal",
      "Heat exchanger and boiler descaling",
      "Metal surface preparation",
      "Plant maintenance cleaning",
    ],
  },
  {
    name: "LABSA 96%",
    desc: "High-active Linear Alkyl Benzene Sulphonic Acid used in detergent manufacturing, liquid cleaners, dishwashing formulations, emulsifiers, and industrial cleaning applications.",
    summary:
      "LABSA 96% is high-active Linear Alkyl Benzene Sulphonic Acid, the primary anionic surfactant behind most detergent powders and liquid cleaners. SHIV ENTERPRISES supplies LABSA 96% to detergent and cleaning product manufacturers.",
    category: "Surfactants",
    tag: "Surfactant Chemical",
    applications: [
      "Detergent powder and cake manufacturing",
      "Liquid and dishwashing cleaners",
      "Industrial degreasers",
      "Emulsifier formulations",
    ],
  },
  {
    name: "Cocamidopropyl Betaine",
    desc: "Mild amphoteric surfactant widely used in shampoos, hand washes, liquid soaps, personal care products, and foam-boosting cleaning formulations.",
    summary:
      "Cocamidopropyl betaine is a mild amphoteric surfactant that boosts foam and reduces irritation in personal care formulations. SHIV ENTERPRISES supplies cocamidopropyl betaine to personal care and cleaning product manufacturers.",
    category: "Surfactants",
    tag: "Foaming Surfactant",
    applications: [
      "Shampoos and body washes",
      "Hand wash and liquid soap",
      "Foam boosting in cleaners",
      "Viscosity building in formulations",
    ],
  },
];

export const products: Product[] = seeds.map((seed) => ({
  ...seed,
  slug: toSlug(seed.name),
}));

export const categories: Category[] = [
  "Water Treatment",
  "Acids",
  "Alkalis & Salts",
  "Bleaching & Oxidising",
  "Surfactants",
  "Specialty",
];

/**
 * Category key for the index. `code` is the short label printed on each
 * element tile; `token` selects the stripe colour from the CSS custom
 * properties, so the palette lives in one place rather than in JSX.
 */
export const categoryMeta: Record<
  Category,
  { code: string; token: string; abbr: string }
> = {
  "Water Treatment": { code: "WTR", token: "--cat-water", abbr: "W" },
  Acids: { code: "ACD", token: "--cat-acid", abbr: "A" },
  "Alkalis & Salts": { code: "ALK", token: "--cat-alkali", abbr: "K" },
  "Bleaching & Oxidising": { code: "OXD", token: "--cat-oxid", abbr: "O" },
  Surfactants: { code: "SRF", token: "--cat-surf", abbr: "S" },
  Specialty: { code: "SPC", token: "--cat-spec", abbr: "X" },
};

/** Catalogue index number, zero-padded — printed on tiles and datasheets. */
export const indexOf = (slug: string) => {
  const position = products.findIndex((p) => p.slug === slug);
  return String(position + 1).padStart(2, "0");
};

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
