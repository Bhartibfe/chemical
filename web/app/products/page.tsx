import { Suspense } from "react";
import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import Chapter from "@/components/Chapter";
import JsonLd from "@/components/JsonLd";
import ProductBrowser from "@/components/ProductBrowser";
import { categories, products } from "@/lib/products";
import { productImageMap } from "@/lib/productImages";
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
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link href="/" className="breadcrumb-link">
              <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="breadcrumb-current">Products Catalogue</span>
          </nav>

          <div className="page-header-title-block">
            <span className="badge-pill-primary">ISO 9001 CERTIFIED CATALOGUE</span>
            <h1 className="title t1 page-main-title">Industrial Chemicals Catalogue</h1>
            <p className="lead page-main-sub">
              SHIV ENTERPRISES supplies {products.length} industrial chemicals
              across {categories.length} subject classes — water treatment, acids,
              alkalis and salts, bleaching and oxidising agents, surfactants, and
              specialty products — dispatched from Punjab and Chandigarh to sites
              across India.
            </p>
          </div>

          <CategoryKey />
        </div>
      </section>

      <section className="chapter" data-tone="paper">
        <div className="page">
          <Suspense
            fallback={<p className="apparatus-sm index-count">Loading index…</p>}
          >
            <ProductBrowser
              images={productImageMap(products.map((p) => p.slug))}
            />
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
