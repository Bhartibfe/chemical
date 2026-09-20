import { notFound } from "next/navigation";
import Link from "next/link";
import Chapter from "@/components/Chapter";
import Entry from "@/components/Entry";
import JsonLd from "@/components/JsonLd";
import { categoryMeta, getProduct, indexOf, products } from "@/lib/products";
import { productImage } from "@/lib/productImages";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { clampWords, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** One static entry per chemical — 29 indexable pages, each targeting the
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
  const heroImage = productImage(product.slug);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 5);

  return (
    <div style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}>
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

      {/* ── ENTRY HEAD ───────────────────────────────────────── */}
      <section className="entry-page">
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
            <Link href="/products" className="breadcrumb-link">
              Catalogue
            </Link>
            <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="breadcrumb-current">{product.name}</span>
          </nav>

          <div className="detail-hero">
            <div className="detail-copy">
              <span
                className="pcard-pill detail-pill"
                style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}
              >
                {product.category}
              </span>

              <h1 className="title t1 detail-title">{product.name}</h1>

              {product.formula && (
                <p className="detail-formula">{product.formula}</p>
              )}

              {/* Answer-first: this sentence stands alone if an AI engine
                  lifts it out of the page. */}
              <p className="lead detail-summary">{product.summary}</p>

              <div className="detail-actions">
                <Link href="/contact" className="btn btn-ink">
                  Enquire about {product.name}
                </Link>
                <a href={site.phoneHref} className="btn btn-plain">
                  Call {site.phone}
                </a>
              </div>

              <ul className="detail-assurances">
                <li>{site.certification} certified</li>
                <li>MSDS with every dispatch</li>
                <li>Pan-India delivery</li>
              </ul>
            </div>

            {/* The catalogue photo, given room to be seen rather than
                cropped into a card column. */}
            <figure
              className="detail-figure"
              style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}
            >
              {heroImage ? (
                <picture>
                  {heroImage.webp && (
                    <source srcSet={heroImage.webp} type="image/webp" />
                  )}
                  <img
                    src={heroImage.src}
                    alt={`${product.name}${
                      product.formula ? ` (${product.formula})` : ""
                    } supplied by ${site.name}`}
                    width={512}
                    height={1024}
                    fetchPriority="high"
                  />
                </picture>
              ) : (
                <span className="detail-figure-fallback" aria-hidden="true">
                  {product.formula ?? meta.code}
                </span>
              )}
            </figure>
          </div>

          {/* Specifications, full width under the hero rather than squeezed
              into a margin column. */}
          <dl className="detail-specs">
            <div>
              <dt>Entry</dt>
              <dd>{ref}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            {product.formula && (
              <div>
                <dt>Formula</dt>
                <dd>{product.formula}</dd>
              </div>
            )}
            <div>
              <dt>Primary use</dt>
              <dd>{product.tag}</dd>
            </div>
            <div>
              <dt>Supply area</dt>
              <dd>Pan-India</dd>
            </div>
            <div>
              <dt>Dispatch from</dt>
              <dd>Punjab &amp; Chandigarh</dd>
            </div>
            <div>
              <dt>Documentation</dt>
              <dd>MSDS supplied</dd>
            </div>
            <div>
              <dt>Certification</dt>
              <dd>{site.certification}</dd>
            </div>
          </dl>

          <p className="detail-note">
            Grades, packing and pricing are confirmed on enquiry.
          </p>
        </div>
      </section>

      {/* ── USES ─────────────────────────────────────────────── */}
      <Chapter
        number={1}
        title="Key Applications &amp; Industry Uses"
        note={`Where buyers across India take ${product.name.toLowerCase()}.`}
        tone="tint"
      >
        <ol className="uses mb-6">
          {product.applications.map((application, i) => (
            <li key={application} className="use">
              <span className="folio use-num">0{i + 1}</span>
              <span>{application}</span>
            </li>
          ))}
        </ol>

        <p className="prose uses-note">{product.desc}</p>
      </Chapter>

      {/* ── SEE ALSO ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <Chapter
          number={2}
          title="Related Chemical Compounds"
          note={`Other entries under ${product.category}.`}
        >
          <div className="entry-card-grid">
            {related.map((item) => (
              <Entry
                key={item.slug}
                product={item}
                image={productImage(item.slug)}
              />
            ))}
          </div>
        </Chapter>
      )}
    </div>
  );
}
