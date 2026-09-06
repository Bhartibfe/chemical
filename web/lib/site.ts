/**
 * Single source of truth for SHIV ENTERPRISES business data.
 *
 * Every NAP (name, address, phone) reference on the site — visible copy,
 * metadata, and JSON-LD — reads from here. Inconsistent NAP across a site is
 * the most common local-SEO failure, and a single constant makes it impossible.
 * Change a fact here and it changes everywhere at once.
 */

export const site = {
  name: "SHIV ENTERPRISES",
  url: "https://theshiventerprises.co.in",
  logo: "/logo.jpg",
  certification: "ISO 9001:2015",
  phone: "+91 78149 69998",
  phoneHref: "tel:+917814969998",
  email: "shivventerprisess@gmail.com",
  whatsapp:
    "https://wa.me/917814969998?text=Hello!%20I%20want%20to%20enquire%20about%20your%20chemical%20products",
  areaServed: "India",
} as const;

export const addresses = [
  {
    label: "Punjab Office",
    icon: "📍",
    streetAddress: "Sardulgarh",
    addressLocality: "Mansa",
    addressRegion: "Punjab",
    postalCode: "151507",
    addressCountry: "IN",
    display: "Sardulgarh, Mansa, Punjab – 151507",
  },
  {
    label: "Chandigarh Office",
    icon: "🏢",
    streetAddress: "6th Floor, Elante Mall Offices, Industrial Area Phase-I",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160002",
    addressCountry: "IN",
    display:
      "6th Floor, Elante Mall Offices, Industrial Area Phase-I, Chandigarh – 160002",
  },
] as const;

export const stats = [
  { num: "26+", label: "Products" },
  { num: "7+", label: "Major Clients" },
  { num: "8+", label: "Industries Served" },
  { num: "100%", label: "Quality Assured" },
] as const;
