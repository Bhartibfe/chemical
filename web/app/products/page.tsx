import { Suspense } from "react";
import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import JsonLd from "@/components/JsonLd";
import ProductBrowser from "@/components/ProductBrowser";
import Unit from "@/components/Unit";
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

      <section className="sheet-head">
        <div className="container">
          <nav aria-label="Breadcrumb" className="tag-sm crumb">
            <Link href="/">Overview</Link>
            <span aria-hidden="true">→</span>
            <span aria-current="page">Tank farm</span>
          </nav>

          <div className="sheet-inner">
            <div>
              <span className="tag-text sheet-ref">SHT 02 · TK-301</span>
              <h1 className="draft t1">Tank farm</h1>
            </div>
            <p className="lead">
              SHIV ENTERPRISES holds {products.length} industrial chemicals
              across {categories.length} service classes — water treatment,
              acids, alkalis and salts, bleaching and oxidising agents,
              surfactants, and specialty products — dispatched from Punjab and
              Chandigarh to sites across India.
            </p>
          </div>

          <CategoryKey />
        </div>
      </section>

      <Unit tag="TK-301" name="Vessel inventory" note="Live filter">
        <Suspense
          fallback={<p className="tag-sm stream-count">Priming lines…</p>}
        >
          <ProductBrowser />
        </Suspense>
      </Unit>

      <Unit tag="CP-601" name="Off-catalogue enquiry" tone="ink" terminal>
        <div className="control-room">
          <div>
            <h3 className="draft t2">
              We source beyond
              <br />
              this inventory.
            </h3>
            <p className="lead cr-lead">
              Send the chemical name, grade, and quantity and we will confirm
              availability.
            </p>
          </div>
          <div className="cr-actions">
            <Link href="/contact" className="btn btn-solid">
              Request a quote
            </Link>
            <a href={site.phoneHref} className="btn btn-line data">
              {site.phone}
            </a>
          </div>
        </div>
      </Unit>
    </>
  );
}
