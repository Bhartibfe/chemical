import { Suspense } from "react";
import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import JsonLd from "@/components/JsonLd";
import ProductBrowser from "@/components/ProductBrowser";
import { categories, products } from "@/lib/products";
import { breadcrumbSchema, productCatalogueSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: `All ${products.length} Industrial Chemicals`,
  description: `Browse the full SHIV ENTERPRISES catalogue — ${products.length} industrial chemicals across water treatment, acids, alkalis, bleaching agents and surfactants, supplied across India.`,
  path: "/products",
  keywords: [
    "industrial chemical list India",
    "water treatment chemical supplier",
    "acid supplier Punjab",
    "caustic soda supplier",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        schema={[
          productCatalogueSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />

      <section className="page-plate">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mono sheet-crumb">
            <Link href="/">Index</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Catalogue</span>
          </nav>

          <div className="page-plate-inner">
            <div>
              <span className="data page-plate-ref">SE/01</span>
              <h1 className="display d1">The catalogue</h1>
            </div>
            <p className="lead">
              SHIV ENTERPRISES supplies {products.length} industrial chemicals
              across {categories.length} categories — water treatment, acids,
              alkalis and salts, bleaching and oxidising agents, surfactants,
              and specialty products — dispatched from Punjab and Chandigarh to
              sites across India.
            </p>
          </div>

          <CategoryKey />
        </div>
      </section>

      <section className="band">
        <div className="container">
          <Suspense
            fallback={<p className="mono index-count">Loading index…</p>}
          >
            <ProductBrowser />
          </Suspense>
        </div>
      </section>

      <section className="band enquiry-band">
        <div className="container enquiry-band-inner">
          <div>
            <p className="mono enquiry-kicker">Not listed</p>
            <h2 className="display d2">
              We source beyond
              <br />
              this index.
            </h2>
            <p className="lead enquiry-lead">
              Send the chemical name, grade, and quantity and we will confirm
              availability.
            </p>
          </div>
          <div className="enquiry-actions">
            <Link href="/contact" className="btn btn-solid">
              Request a quote
            </Link>
            <a href={site.phoneHref} className="btn btn-outline data">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
