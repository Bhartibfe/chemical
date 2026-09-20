import { notFound } from "next/navigation";
import Link from "next/link";
import Chapter from "@/components/Chapter";
import Entry from "@/components/Entry";
import JsonLd from "@/components/JsonLd";
import { categoryMeta, getProduct, indexOf, products } from "@/lib/products";
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

          <div className="spread entry-spread">
            <div>
              <p className="apparatus entry-page-ref">
                Entry {ref} · {product.category}
              </p>

              <h1 className="title t1 entry-page-word mb-2">{product.name}</h1>

              {product.formula && (
                <p className="entry-page-formula mb-4">[ {product.formula} ]</p>
              )}

              {/* Answer-first: this sentence stands alone if an AI engine
                  lifts it out of the page. */}
              <p className="lead opening entry-page-definition mb-6">
                {product.summary}
              </p>

              <div className="title-page-actions">
                <Link href="/contact" className="btn btn-ink">
                  Enquire about {product.name}
                </Link>
                <a href={site.phoneHref} className="btn btn-plain">
                  Call {site.phone}
                </a>
              </div>
            </div>

            {/* Marginal note — the book's outer column. */}
            <aside className="margin-note">
              <p className="apparatus-sm margin-note-label">Supply Specifications</p>
              <dl className="margin-list">
                <div>
                  <dt>Subject</dt>
                  <dd>{product.category}</dd>
                </div>
                {product.formula && (
                  <div>
                    <dt>Formula</dt>
                    <dd>{product.formula}</dd>
                  </div>
                )}
                <div>
                  <dt>Application</dt>
                  <dd>{product.tag}</dd>
                </div>
                <div>
                  <dt>Supply area</dt>
                  <dd>Pan-India</dd>
                </div>
                <div>
                  <dt>Dispatch</dt>
                  <dd>Punjab &amp; Chandigarh</dd>
                </div>
                <div>
                  <dt>Documents</dt>
                  <dd>MSDS supplied</dd>
                </div>
                <div>
                  <dt>Certification</dt>
                  <dd>{site.certification}</dd>
                </div>
              </dl>
              <p className="margin-note-foot">
                Grades, packing and pricing are confirmed on enquiry.
              </p>
            </aside>
          </div>
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
              <Entry key={item.slug} product={item} />
            ))}
          </div>
        </Chapter>
      )}
    </div>
  );
}
