import { notFound } from "next/navigation";
import Link from "next/link";
import ElementTile from "@/components/ElementTile";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  categoryMeta,
  getProduct,
  indexOf,
  products,
} from "@/lib/products";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { clampWords, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** One static datasheet per chemical — 29 indexable pages, each targeting the
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

  const meta = categoryMeta[product.category];
  const ref = indexOf(product.slug);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div
      className="datasheet"
      style={{ "--stripe": `var(${meta.token})` } as React.CSSProperties}
    >
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

      {/* ── DOCUMENT HEADER ──────────────────────────────────── */}
      <div className="sheet-head">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mono sheet-crumb">
            <Link href="/">Index</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Catalogue</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <dl className="sheet-meta">
            <div>
              <dt className="mono-sm">Document</dt>
              <dd className="data">SE/PRD/{ref}</dd>
            </div>
            <div>
              <dt className="mono-sm">Category</dt>
              <dd className="data">
                <span
                  className="swatch"
                  style={{ background: "var(--stripe)" }}
                  aria-hidden="true"
                />
                {meta.code} · {product.category}
              </dd>
            </div>
            <div>
              <dt className="mono-sm">Issued by</dt>
              <dd className="data">{site.name}</dd>
            </div>
            <div>
              <dt className="mono-sm">Certification</dt>
              <dd className="data">{site.certification}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── TITLE PLATE ──────────────────────────────────────── */}
      <section className="plate">
        <div className="container plate-inner">
          <div className="plate-formula-wrap">
            <span className="data plate-formula">
              {product.formula ?? meta.abbr}
            </span>
            <span className="mono-sm plate-formula-label">
              {product.formula ? "Formula" : "Category"}
            </span>
          </div>

          <div className="plate-title-wrap">
            <span className="data plate-ref">{ref}</span>
            <h1 className="display d1 plate-title">{product.name}</h1>
            {/* Answer-first: this sentence stands alone if an AI engine lifts
                it out of the page. */}
            <p className="lead plate-lead">{product.summary}</p>
            <div className="plate-actions">
              <Link href="/contact" className="btn btn-solid">
                Enquire
              </Link>
              <a href={site.phoneHref} className="btn btn-outline data">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATION ────────────────────────────────────── */}
      <section className="band">
        <div className="container sheet-body">
          <div>
            <div className="marker">
              <span className="marker-num">01</span>
              <span className="marker-title">Applications</span>
              <span className="marker-meta">
                {String(product.applications.length).padStart(2, "0")} listed
              </span>
            </div>

            <ol className="applications">
              {product.applications.map((application, i) => (
                <Reveal as="li" index={i} key={application} className="application">
                  <span className="data application-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{application}</span>
                </Reveal>
              ))}
            </ol>

            <p className="prose sheet-note">
              {product.desc} Grades, packing, and pricing are confirmed on
              enquiry.
            </p>
          </div>

          <aside>
            <div className="marker">
              <span className="marker-num">02</span>
              <span className="marker-title">Supply data</span>
            </div>

            <dl className="sheet-spec">
              <div className="field-row">
                <dt>Product</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{product.name}</dd>
              </div>
              {product.formula && (
                <div className="field-row">
                  <dt>Formula</dt>
                  <span className="leader" aria-hidden="true" />
                  <dd className="data">{product.formula}</dd>
                </div>
              )}
              <div className="field-row">
                <dt>Index ref</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">SE/PRD/{ref}</dd>
              </div>
              <div className="field-row">
                <dt>Category</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{product.category}</dd>
              </div>
              <div className="field-row">
                <dt>Application</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{product.tag}</dd>
              </div>
              <div className="field-row">
                <dt>Supply area</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">Pan-India</dd>
              </div>
              <div className="field-row">
                <dt>Dispatch from</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">Punjab · Chandigarh</dd>
              </div>
              <div className="field-row">
                <dt>Documentation</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">MSDS supplied</dd>
              </div>
              <div className="field-row">
                <dt>Certification</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{site.certification}</dd>
              </div>
            </dl>

            <Link href="/contact" className="btn btn-solid sheet-cta">
              Request {product.name}
            </Link>
          </aside>
        </div>
      </section>

      {/* ── CROSS REFERENCE ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="band band-sheet">
          <div className="container">
            <div className="marker">
              <span className="marker-num">03</span>
              <span className="marker-title">Cross reference</span>
              <span className="marker-meta">{product.category}</span>
            </div>

            <ul className="tile-grid">
              {related.map((item) => (
                <li key={item.slug}>
                  <ElementTile
                    product={item}
                    index={products.findIndex((p) => p.slug === item.slug)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
