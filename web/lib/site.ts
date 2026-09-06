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
  legalName: "Shiv Enterprises",
  url: "https://theshiventerprises.co.in",
  logo: "/logo.png",
  certification: "ISO 9001:2015",
  phone: "+91 78149 69998",
  phoneHref: "tel:+917814969998",
  email: "shivventerprisess@gmail.com",
  emailHref: "mailto:shivventerprisess@gmail.com",
  whatsapp:
    "https://wa.me/917814969998?text=Hello!%20I%20want%20to%20enquire%20about%20your%20chemical%20products",
  areaServed: "India",
  founded: "Sardulgarh, Mansa, Punjab",
} as const;

export const addresses = [
  {
    label: "Punjab Office",
    streetAddress: "Sardulgarh",
    addressLocality: "Mansa",
    addressRegion: "Punjab",
    postalCode: "151507",
    addressCountry: "IN",
    display: "Sardulgarh, Mansa, Punjab – 151507",
  },
  {
    label: "Chandigarh Office",
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
  { num: "29", label: "Chemicals supplied" },
  { num: "8", label: "Industries served" },
  { num: "10", label: "Institutional clients" },
  { num: "2", label: "Offices in North India" },
] as const;

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
