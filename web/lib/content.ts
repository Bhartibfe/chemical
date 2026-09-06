/** Section content ported from the original site. Real business data — do not
 *  invent entries, and confirm with the owner before editing client names. */

export const industries = [
  { icon: "💧", name: "Water Treatment Plants" },
  { icon: "⚡", name: "Power Plants" },
  { icon: "🚂", name: "Indian Railways" },
  { icon: "🛡", name: "Defence Sector" },
  { icon: "🧵", name: "Textile Industry" },
  { icon: "💊", name: "Pharmaceuticals" },
  { icon: "📄", name: "Paper & Pulp Industry" },
  { icon: "⚗️", name: "Chemical Manufacturing" },
] as const;

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

export const commitments = [
  {
    icon: "⚗",
    title: "Laboratory-Grade Purity",
    desc: "Every batch tested and certified before dispatch.",
  },
  {
    icon: "🚚",
    title: "Pan-India Delivery",
    desc: "Reliable logistics to any location across India.",
  },
  {
    icon: "🛡",
    title: "Safety Compliance",
    desc: "Full MSDS documentation and safe packaging for all chemicals.",
  },
  {
    icon: "📞",
    title: "Dedicated Support",
    desc: "Technical team available for product selection and queries.",
  },
] as const;

export const aboutBadges = [
  "Competitive Pricing",
  "Timely Delivery",
  "Technical Expertise",
  "Govt & Private Sector",
] as const;
