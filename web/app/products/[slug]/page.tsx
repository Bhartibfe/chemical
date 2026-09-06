import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Unit from "@/components/Unit";
import Vessel from "@/components/Vessel";
import { categoryMeta, getProduct, indexOf, products } from "@/lib/products";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { clampWords, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** One static stream sheet per chemical — 29 indexable pages, each targeting
 *  the searches buyers actually run for that specific product. */
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
  const tag = `V-${ref.padStart(3, "0")}`;

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div style={{ "--svc": `var(${meta.token})` } as React.CSSProperties}>
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

      {/* ── STREAM HEAD ──────────────────────────────────────── */}
      <section className="stream-head">
        <div className="container">
          <nav aria-label="Breadcrumb" className="tag-sm crumb">
            <Link href="/">Overview</Link>
            <span aria-hidden="true">→</span>
            <Link href="/products">Tank farm</Link>
            <span aria-hidden="true">→</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="stream-inner">
            <div className="stream-plate">
              <span className="tag-sm stream-plate-tag">{tag}</span>
              <span className="data stream-formula">
                {product.formula ?? meta.abbr}
              </span>
              <span className="stream-svc" aria-hidden="true" />
              <span className="tag-sm stream-plate-svc">
                {meta.code} · {product.category}
              </span>
            </div>

            <div>
              <h1 className="draft t1 stream-title">{product.name}</h1>
              {/* Answer-first: this sentence stands alone if an AI engine
                  lifts it out of the page. */}
              <p className="lead stream-lead">{product.summary}</p>
              <div className="intake-actions">
                <Link href="/contact" className="btn btn-solid">
                  Enquire
                </Link>
                <a href={site.phoneHref} className="btn btn-line data">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTLET STREAMS ───────────────────────────────────── */}
      <Unit
        tag="ST-101"
        name="Outlet streams — applications"
        note={`${String(product.applications.length).padStart(2, "0")} branches`}
      >
        <p className="lead unit-lead">
          Where buyers across India take {product.name.toLowerCase()} once it
          leaves SHIV ENTERPRISES.
        </p>

        <ul className="branches">
          {product.applications.map((application, i) => (
            <Reveal as="li" index={i} key={application} className="branch">
              <span className="branch-pipe" aria-hidden="true" />
              <span className="data branch-tag">
                S-{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="draft t3 branch-name">{application}</h3>
            </Reveal>
          ))}
        </ul>

        <p className="prose stream-note">
          {product.desc} Grades, packing, and pricing are confirmed on enquiry.
        </p>
      </Unit>

      {/* ── STREAM DATA ──────────────────────────────────────── */}
      <Unit tag="DS-102" name="Stream data" tone="panel">
        <dl className="datasheet">
          <div className="ds-row">
            <dt className="tag-sm">Product</dt>
            <dd className="data">{product.name}</dd>
          </div>
          {product.formula && (
            <div className="ds-row">
              <dt className="tag-sm">Formula</dt>
              <dd className="data">{product.formula}</dd>
            </div>
          )}
          <div className="ds-row">
            <dt className="tag-sm">Vessel tag</dt>
            <dd className="data">{tag}</dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Service class</dt>
            <dd className="data">
              {meta.code} · {product.category}
            </dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Application</dt>
            <dd className="data">{product.tag}</dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Supply area</dt>
            <dd className="data">Pan-India</dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Dispatch from</dt>
            <dd className="data">Punjab · Chandigarh</dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Documentation</dt>
            <dd className="data">MSDS supplied</dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Certification</dt>
            <dd className="data">{site.certification}</dd>
          </div>
        </dl>

        <Link href="/contact" className="btn btn-solid ds-cta">
          Request {product.name}
        </Link>
      </Unit>

      {/* ── PARALLEL LINES ───────────────────────────────────── */}
      {related.length > 0 && (
        <Unit
          tag="TK-303"
          name={`Parallel lines — ${product.category}`}
          note={`${related.length} vessels`}
          terminal
        >
          <div className="farm">
            <span className="farm-header" aria-hidden="true" />
            <ul className="farm-grid">
              {related.map((item) => (
                <li key={item.slug}>
                  <Vessel
                    product={item}
                    index={products.findIndex((p) => p.slug === item.slug)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Unit>
      )}
    </div>
  );
}
