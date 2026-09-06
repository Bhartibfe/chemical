import { addresses, site } from "./site";
import { products } from "./products";
import { industries } from "./content";

/**
 * JSON-LD structured data.
 *
 * The original site shipped an `Organization` block; it is preserved here and
 * extended with `LocalBusiness` (both offices, area served) and an
 * `ItemList` of the real product catalogue. Every value derives from
 * `lib/site.ts` and `lib/products.ts`, so the structured data can never drift
 * out of sync with the visible copy — which is what search engines and AI
 * answer engines cross-check.
 *
 * No claim here is invented: everything below already appears on the site.
 */

const postalAddresses = addresses.map((a) => ({
  "@type": "PostalAddress",
  streetAddress: a.streetAddress,
  addressLocality: a.addressLocality,
  addressRegion: a.addressRegion,
  postalCode: a.postalCode,
  addressCountry: a.addressCountry,
}));

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/logo.jpg`,
  image: `${site.url}/logo.jpg`,
  telephone: site.phone,
  email: site.email,
  description:
    "Leading industrial chemical supplier in Punjab and Chandigarh offering water treatment chemicals, acids, alkalis, textile chemicals and industrial raw materials across India.",
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
  image: `${site.url}/logo.jpg`,
  telephone: site.phone,
  email: site.email,
  address: postalAddresses,
  areaServed: { "@type": "Country", name: "India" },
  parentOrganization: { "@id": `${site.url}/#organization` },
  knowsAbout: industries.map((i) => i.name),
};

export const productCatalogueSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}/#products`,
  name: "Industrial chemicals supplied by SHIV ENTERPRISES",
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.desc,
      category: p.tag,
      brand: { "@id": `${site.url}/#organization` },
    },
  })),
};

export const allSchemas = [
  organizationSchema,
  localBusinessSchema,
  productCatalogueSchema,
];
