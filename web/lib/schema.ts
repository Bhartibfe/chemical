import { addresses, site } from "./site";
import { products, type Product } from "./products";
import { industries } from "./content";

/**
 * JSON-LD structured data.
 *
 * Everything derives from `lib/site.ts`, `lib/products.ts`, and `lib/content.ts`
 * so the structured data can never drift out of sync with the visible copy —
 * which is exactly what search engines and AI answer engines cross-check.
 *
 * No claim here is invented: every fact already appears on the site.
 */

const postalAddresses = addresses.map((a) => ({
  "@type": "PostalAddress",
  streetAddress: a.streetAddress,
  addressLocality: a.addressLocality,
  addressRegion: a.addressRegion,
  postalCode: a.postalCode,
  addressCountry: a.addressCountry,
}));

const ORG_ID = `${site.url}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.logo}`,
  telephone: site.phone,
  email: site.email,
  description:
    "Industrial chemical supplier in Punjab and Chandigarh offering water treatment chemicals, acids, alkalis, textile chemicals and industrial raw materials across India.",
  address: postalAddresses,
  areaServed: site.areaServed,
  sameAs: ["https://wa.me/917814969998"],
  hasCredential: `${site.certification} certified quality management`,
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  url: `${site.url}/`,
  image: `${site.url}${site.logo}`,
  telephone: site.phone,
  email: site.email,
  address: postalAddresses,
  areaServed: { "@type": "Country", name: "India" },
  parentOrganization: { "@id": ORG_ID },
  knowsAbout: industries.map((i) => i.name),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

/**
 * Answers to questions buyers and AI engines actually ask. Every answer is
 * sourced from facts already published on this site — nothing about pricing,
 * minimum order, or lead time, which only the owner can confirm.
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is SHIV ENTERPRISES located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `SHIV ENTERPRISES operates from two offices in North India: ${addresses[0].display} and ${addresses[1].display}.`,
      },
    },
    {
      "@type": "Question",
      name: "Is SHIV ENTERPRISES an ISO certified chemical supplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. SHIV ENTERPRISES is an ${site.certification} certified company, operating a certified quality management system for industrial chemical supply.`,
      },
    },
    {
      "@type": "Question",
      name: "Which industrial chemicals does SHIV ENTERPRISES supply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `SHIV ENTERPRISES supplies ${products.length} industrial chemicals including sodium hypochlorite, caustic soda flakes, sulphuric acid, hydrochloric acid, poly aluminium chloride, hydrogen peroxide, and hydrazine hydrate, covering water treatment, acids, alkalis, bleaching agents, and surfactants.`,
      },
    },
    {
      "@type": "Question",
      name: "Which industries does SHIV ENTERPRISES serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `SHIV ENTERPRISES serves ${industries.length} sectors: ${industries
          .map((i) => i.name)
          .join(", ")}.`,
      },
    },
    {
      "@type": "Question",
      name: "Does SHIV ENTERPRISES deliver chemicals across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SHIV ENTERPRISES delivers industrial chemicals pan-India from its Punjab and Chandigarh offices, supplying power plants, Indian Railways, defence establishments, water treatment plants, and textile mills.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a quote from SHIV ENTERPRISES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Call ${site.phone}, email ${site.email}, or send an enquiry through the contact form at ${site.url}/contact.`,
      },
    },
  ],
};

export const productCatalogueSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}/products#catalogue`,
  name: "Industrial chemicals supplied by SHIV ENTERPRISES",
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${site.url}/products/${p.slug}`,
    name: p.name,
  })),
};

export const productSchema = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${site.url}/products/${product.slug}#product`,
  name: product.name,
  description: product.summary,
  category: product.category,
  url: `${site.url}/products/${product.slug}`,
  ...(product.formula ? { alternateName: product.formula } : {}),
  brand: { "@id": ORG_ID },
  manufacturer: { "@id": ORG_ID },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    seller: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    url: `${site.url}/products/${product.slug}`,
  },
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    item: `${site.url}${crumb.path}`,
  })),
});

/** Site-wide graph, rendered once in the root layout. */
export const globalSchemas = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  faqSchema,
];
