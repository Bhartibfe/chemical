import { Suspense } from "react";
import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import Chapter from "@/components/Chapter";
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

      <section className="chapter-opener">
        <div className="page">
          <nav aria-label="Breadcrumb" className="apparatus-sm breadcrumb">
            <Link href="/">Handbook</Link>
            <span aria-hidden="true">·</span>
            <span aria-current="page">Catalogue</span>
          </nav>

          <p className="apparatus chapter-opener-num">§ 01</p>
          <h1 className="title t1">The catalogue</h1>
          <hr className="rule-double" />
          <p className="lead">
            SHIV ENTERPRISES supplies {products.length} industrial chemicals
            across {categories.length} subject classes — water treatment, acids,
            alkalis and salts, bleaching and oxidising agents, surfactants, and
            specialty products — dispatched from Punjab and Chandigarh to sites
            across India.
          </p>
          <CategoryKey />
        </div>
      </section>

      <section className="chapter" data-tone="paper">
        <div className="page">
          <Suspense
            fallback={<p className="apparatus-sm index-count">Loading index…</p>}
          >
            <ProductBrowser />
          </Suspense>
        </div>
      </section>

      <Chapter
        number={2}
        title="Not listed here"
        note="The handbook is not the limit of what we supply."
        tone="plate"
      >
        <div className="enquiry-spread">
          <p className="lead">
            SHIV ENTERPRISES sources beyond this catalogue. Send the chemical
            name, grade, and quantity and we will confirm availability.
          </p>
          <div className="title-page-actions">
            <Link href="/contact" className="btn btn-ink">
              Request a quote
            </Link>
            <a href={site.phoneHref} className="btn btn-plain">
              {site.phone}
            </a>
          </div>
        </div>
      </Chapter>
    </>
  );
}
