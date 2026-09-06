/** Section content ported from the original site. Real business data — do not
 *  invent entries, and confirm with the owner before editing client names. */

/** Keys map to Lucide icons in the rendering component. The design system
 *  rules out emoji as icons, so nothing here is a glyph. */
export type IconKey =
  | "droplets"
  | "zap"
  | "train"
  | "shield"
  | "shirt"
  | "pill"
  | "scroll"
  | "flask"
  | "beaker"
  | "truck"
  | "headset"
  | "badge";

export const industries: {
  icon: IconKey;
  name: string;
  slug: string;
  blurb: string;
}[] = [
  {
    icon: "droplets",
    name: "Water Treatment Plants",
    slug: "water-treatment",
    blurb:
      "Coagulants, disinfectants, and flocculants for municipal and industrial water and effluent treatment.",
  },
  {
    icon: "zap",
    name: "Power Plants",
    slug: "power",
    blurb:
      "Boiler feed water chemicals and oxygen scavengers that protect high-pressure steam circuits from corrosion.",
  },
  {
    icon: "train",
    name: "Indian Railways",
    slug: "railways",
    blurb:
      "Cleaning, descaling, and water treatment chemicals supplied to railway workshops and depots.",
  },
  {
    icon: "shield",
    name: "Defence Sector",
    slug: "defence",
    blurb:
      "High-purity chemicals supplied to defence research and metallurgical establishments.",
  },
  {
    icon: "shirt",
    name: "Textile Industry",
    slug: "textile",
    blurb:
      "Bleaching, dyeing, and reducing agents for denim, fabric processing, and finishing units.",
  },
  {
    icon: "pill",
    name: "Pharmaceuticals",
    slug: "pharmaceuticals",
    blurb:
      "Process chemicals and intermediates for pharmaceutical manufacturing operations.",
  },
  {
    icon: "scroll",
    name: "Paper & Pulp Industry",
    slug: "paper-pulp",
    blurb:
      "Alkalis, bleaching agents, and retention chemicals for pulp, paper, and board production.",
  },
  {
    icon: "flask",
    name: "Chemical Manufacturing",
    slug: "chemical-manufacturing",
    blurb:
      "Bulk acids, alkalis, and raw materials feeding downstream chemical synthesis.",
  },
];

export const testimonials = [
  {
    quote:
      "SHIV ENTERPRISES delivers high-quality chemicals on time, every time. Their reliability and product quality set them apart from other suppliers.",
    author: "PowerMech Projects Ltd.",
  },
  {
    quote:
      "Professional and reliable supplier with excellent customer support. We've been sourcing from them for years without a single issue.",
    author: "KEPCO Plant Services & Engineering",
  },
  {
    quote:
      "Trusted partner for our water treatment projects. Their chemicals meet the strict purity standards our operations demand.",
    author: "Nuclear Power Corporation of India",
  },
] as const;

export const clients = [
  { initials: "PM", name: "Power Mech Projects Limited" },
  { initials: "KP", name: "KEPCO Plant Service & Engineering" },
  { initials: "NP", name: "Nuclear Power Corporation of India" },
  { initials: "IR", name: "Indian Railways" },
  { initials: "NF", name: "Nuclear Fuel Complex" },
  { initials: "DM", name: "Defence Metallurgical Research Lab" },
  { initials: "MC", name: "Municipal Corporation Punjab" },
  { initials: "MK", name: "MADHAV KRG Environmental Solutions Limited" },
  { initials: "RD", name: "Rainbow Denim Limited" },
  { initials: "TT", name: "TC Terrytex" },
] as const;

export const commitments: { icon: IconKey; title: string; desc: string }[] = [
  {
    icon: "beaker",
    title: "Laboratory-Grade Purity",
    desc: "Every batch tested and certified before dispatch.",
  },
  {
    icon: "truck",
    title: "Pan-India Delivery",
    desc: "Reliable logistics to any location across India.",
  },
  {
    icon: "shield",
    title: "Safety Compliance",
    desc: "Full MSDS documentation and safe packaging for all chemicals.",
  },
  {
    icon: "headset",
    title: "Dedicated Support",
    desc: "Technical team available for product selection and queries.",
  },
];

export const differentiators = [
  "Competitive Pricing",
  "Timely Delivery",
  "Technical Expertise",
  "Govt & Private Sector",
] as const;
