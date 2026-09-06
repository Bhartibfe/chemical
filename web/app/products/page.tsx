import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      <section className="page-head grid-bg">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Products</span>
          </nav>

          <h1 className="h1">Industrial chemical catalogue</h1>
          <p className="lead">
            SHIV ENTERPRISES supplies {products.length} industrial chemicals
            across {categories.length} categories — water treatment, acids,
            alkalis and salts, bleaching and oxidising agents, surfactants, and
            specialty products — delivered from Punjab and Chandigarh to sites
            across India.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Suspense fallback={<p className="result-count">Loading catalogue…</p>}>
            <ProductBrowser />
          </Suspense>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h2">Cannot find what you need?</h2>
            <p className="lead">
              SHIV ENTERPRISES sources beyond this catalogue. Send the chemical
              name, grade, and quantity and we will confirm availability.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href={site.phoneHref} className="btn btn-secondary">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
