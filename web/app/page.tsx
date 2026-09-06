import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import ElementTile from "@/components/ElementTile";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { clients, commitments, industries, testimonials } from "@/lib/content";
import { products } from "@/lib/products";
import { productCatalogueSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { addresses, site, stats } from "@/lib/site";

// The title template on the root layout does not apply to this segment, so
// the brand is spelled out here rather than lost from the homepage title.
export const metadata = pageMeta({
  title: "Industrial Chemical Supplier in Punjab | SHIV ENTERPRISES",
  description:
    "SHIV ENTERPRISES is an ISO 9001:2015 certified industrial chemical supplier in Sardulgarh, Punjab, delivering water treatment chemicals, acids, alkalis and surfactants across India.",
  path: "/",
});

const preview = products.slice(0, 12);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={productCatalogueSchema} />

      {/* ── 00 · MASTHEAD ────────────────────────────────────── */}
      <section className="cover">
        <div className="container cover-inner">
          <div className="cover-main">
            <p className="mono cover-kicker">
              Industrial Chemical Index · Punjab, India
            </p>

            <h1 className="display d1 cover-title">
              Twenty-nine
              <br />
              compounds.
              <br />
              <span className="cover-title-accent">One supplier.</span>
            </h1>

            {/* Answer-first and entity-explicit: quotable standalone by an AI
                answer engine, with company, credential, place and scope all
                inside a single sentence. */}
            <p className="lead cover-lead">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier based in Sardulgarh, Punjab, supplying{" "}
              {products.length} water treatment chemicals, acids, alkalis and
              surfactants to power plants, Indian Railways, defence, and textile
              mills across India.
            </p>

            <div className="cover-actions">
              <Link href="/products" className="btn btn-solid">
                Open the index
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Request a quote
              </Link>
            </div>
          </div>

          {/* Specification block — the document's own metadata. */}
          <dl className="cover-spec">
            <div className="field-row">
              <dt>Entries</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">{products.length}</dd>
            </div>
            <div className="field-row">
              <dt>Categories</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">06</dd>
            </div>
            <div className="field-row">
              <dt>Sectors</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">{String(industries.length).padStart(2, "0")}</dd>
            </div>
            <div className="field-row">
              <dt>Clients</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">{clients.length}</dd>
            </div>
            <div className="field-row">
              <dt>Certification</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">{site.certification}</dd>
            </div>
            <div className="field-row">
              <dt>Offices</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">Sardulgarh · Chandigarh</dd>
            </div>
            <div className="field-row">
              <dt>Supply area</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="data">Pan-India</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── 01 · THE INDEX ───────────────────────────────────── */}
      <section className="band band-sheet">
        <div className="container">
          <div className="marker">
            <span className="marker-num">01</span>
            <span className="marker-title">The index</span>
            <span className="marker-meta">
              {preview.length} of {products.length} shown
            </span>
          </div>

          <ul className="tile-grid">
            {preview.map((product, i) => (
              <li key={product.slug}>
                <ElementTile product={product} index={i} />
              </li>
            ))}
          </ul>

          <div className="index-footer">
            <CategoryKey />
            <Link href="/products" className="btn btn-outline">
              All {products.length} entries
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02 · SECTORS ─────────────────────────────────────── */}
      <section className="band">
        <div className="container">
          <div className="marker">
            <span className="marker-num">02</span>
            <span className="marker-title">Sectors served</span>
            <span className="marker-meta">{industries.length} entries</span>
          </div>

          <ul className="ledger">
            {industries.map((industry, i) => (
              <Reveal as="li" index={i} key={industry.slug} className="ledger-row">
                <span className="data ledger-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display d3 ledger-title">{industry.name}</h3>
                <p className="ledger-desc">{industry.blurb}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 03 · TERMS OF SUPPLY ─────────────────────────────── */}
      <section className="band band-sheet">
        <div className="container">
          <div className="marker">
            <span className="marker-num">03</span>
            <span className="marker-title">Terms of supply</span>
          </div>

          <div className="terms-grid">
            {commitments.map((item, i) => (
              <Reveal as="div" index={i} key={item.title} className="term">
                <span className="data term-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display d3">{item.title}</h3>
                <p className="prose">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 · REGISTER OF CLIENTS ─────────────────────────── */}
      <section className="band">
        <div className="container">
          <div className="marker">
            <span className="marker-num">04</span>
            <span className="marker-title">Register of clients</span>
            <span className="marker-meta">{clients.length} institutions</span>
          </div>

          <ul className="register">
            {clients.map((client, i) => (
              <li key={client.name} className="register-row">
                <span className="data register-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="register-name">{client.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 05 · REFERENCES ──────────────────────────────────── */}
      <section className="band band-sheet">
        <div className="container">
          <div className="marker">
            <span className="marker-num">05</span>
            <span className="marker-title">References</span>
          </div>

          <ul className="quotes">
            {testimonials.map((testimonial, i) => (
              <Reveal as="li" index={i} key={testimonial.author} className="quote">
                <blockquote>
                  <p className="quote-text">{testimonial.quote}</p>
                </blockquote>
                <cite className="mono quote-cite">{testimonial.author}</cite>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 06 · ENQUIRY ─────────────────────────────────────── */}
      <section className="band enquiry-band">
        <div className="container enquiry-band-inner">
          <div>
            <p className="mono enquiry-kicker">06 · Enquiry</p>
            <h2 className="display d2">
              Send the chemical,
              <br />
              grade and quantity.
            </h2>
            <p className="lead enquiry-lead">
              Our technical team replies with availability, documentation, and
              delivery timelines.
            </p>
          </div>

          <dl className="enquiry-spec">
            <div className="field-row">
              <dt>Telephone</dt>
              <span className="leader" aria-hidden="true" />
              <dd>
                <a href={site.phoneHref} className="data link">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="field-row">
              <dt>Email</dt>
              <span className="leader" aria-hidden="true" />
              <dd>
                <a href={site.emailHref} className="data link">
                  {site.email}
                </a>
              </dd>
            </div>
            {addresses.map((address) => (
              <div className="field-row" key={address.label}>
                <dt>{address.label.replace(" Office", "")}</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{address.display}</dd>
              </div>
            ))}
            <div className="enquiry-cta">
              <Link href="/contact" className="btn btn-solid">
                Open enquiry form
              </Link>
            </div>
          </dl>
        </div>
      </section>

      {/* Stats are kept in the markup for crawlers and for anyone scanning the
          page bottom, set as a final rule of record. */}
      <section className="band-tight">
        <div className="container">
          <dl className="tallies">
            {stats.map((stat) => (
              <div key={stat.label} className="tally">
                <dt className="mono-sm">{stat.label}</dt>
                <dd className="display d3 data">{stat.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
