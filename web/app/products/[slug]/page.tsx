import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";
import Reveal from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { clampWords, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** One static page per chemical — 29 indexable pages, each targeting the
 *  searches buyers actually run for that specific product. */
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return pageMeta({
    title: `${product.name} Supplier in Punjab & India`,
    // Entity and place first so the snippet still identifies the company even
    // when a long product description gets clamped.
    description: clampWords(
      `SHIV ENTERPRISES supplies ${product.name} across India from Punjab. ${product.desc}`,
    ),
    path: `/products/${product.slug}`,
    keywords: [
      `${product.name} supplier`,
      `${product.name} supplier India`,
      `${product.name} Punjab`,
      `buy ${product.name}`,
      product.category,
    ],
  });
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        schema={[
          productSchema(product),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />

      <section className="page-head grid-bg">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="product-hero">
            <div>
              <div className="product-hero-meta">
                <span className="chip chip-accent">{product.category}</span>
                {product.formula && (
                  <span className="chip">{product.formula}</span>
                )}
              </div>

              <h1 className="h1 product-title">{product.name}</h1>

              {/* Answer-first: this sentence stands alone if an AI engine
                  lifts it out of the page. */}
              <p className="lead">{product.summary}</p>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Request a Quote <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a href={site.phoneHref} className="btn btn-secondary">
                  <Phone size={16} aria-hidden="true" /> {site.phone}
                </a>
              </div>
            </div>

            <div className="card product-hero-visual">
              <ProductVisual name={product.name} category={product.category} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-detail">
          <div>
            <Reveal>
              <h2 className="h2">Applications</h2>
              <p className="prose-muted section-lead">
                Where buyers across India use {product.name.toLowerCase()}.
              </p>
              <ul className="application-list">
                {product.applications.map((application) => (
                  <li key={application}>
                    <Check size={17} aria-hidden="true" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="card spec-card">
            <h2 className="h3">Supply details</h2>
            <dl className="spec-list">
              <div>
                <dt>Product</dt>
                <dd>{product.name}</dd>
              </div>
              {product.formula && (
                <div>
                  <dt>Formula</dt>
                  <dd>{product.formula}</dd>
                </div>
              )}
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
              <div>
                <dt>Supplied by</dt>
                <dd>
                  {site.name}, {site.certification} certified
                </dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>Pan-India from Punjab &amp; Chandigarh</dd>
              </div>
              <div>
                <dt>Documentation</dt>
                <dd>MSDS provided with every dispatch</dd>
              </div>
            </dl>
            <p className="spec-note">
              Grades, packing, and pricing are confirmed on enquiry.
            </p>
            <Link href="/contact" className="btn btn-primary spec-cta">
              Enquire about {product.name}
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <p className="eyebrow">Same category</p>
            <h2 className="h2">More {product.category.toLowerCase()} chemicals</h2>
            <ul className="product-grid related-grid">
              {related.map((item, i) => (
                <Reveal as="li" index={i} key={item.slug}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
