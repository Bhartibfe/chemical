import Link from "next/link";
import Chapter from "@/components/Chapter";
import Entry from "@/components/Entry";
import HeroVideo from "@/components/HeroVideo";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { clients, commitments, industries, testimonials } from "@/lib/content";
import { products } from "@/lib/products";
import { productImage } from "@/lib/productImages";
import { productCatalogueSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { heroScrim } from "@/lib/hero";
import { addresses, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Industrial Chemical Supplier in Punjab | SHIV ENTERPRISES",
  description:
    "SHIV ENTERPRISES is an ISO 9001:2015 certified industrial chemical supplier in Sardulgarh, Punjab, delivering water treatment chemicals, acids, alkalis and surfactants across India.",
  path: "/",
});

const opening = products.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={productCatalogueSchema} />

      {/* ── HERO SECTION ───────────────────────────────────────── */}
      {/* HeroVideo renders nothing until clips are configured in lib/hero.ts,
          so the gradient hero below stands on its own until then. All hero
          copy is server-rendered above the video layer, never inside it. */}
      <section className="hero-section" data-scrim={heroScrim}>
        <HeroVideo />
        <div className="hero-scrim" aria-hidden="true" />

        <div className="page-hero hero-inner">
          <div className="hero-content">
            <span className="hero-badge">
              <span className="mark" style={{ background: "var(--accent)" }} />
              ISO 9001:2015 Certified Supplier
            </span>

            {/* Kept to two display lines. The long-tail keywords that used to
                pad the headline now sit in the lead below, where they read as
                a sentence instead of a banner. */}
            <h1 className="title t1 hero-title">
              Industrial Chemicals, Supplied Across India
            </h1>

            <p className="lead hero-sub">
              SHIV ENTERPRISES is an {site.certification} certified chemical
              supplier based in Sardulgarh, Punjab, delivering{" "}
              {products.length}+ industrial compounds, acids, alkalis, and
              surfactants to power plants, Indian Railways, defence, and
              textile industries across India.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="btn btn-ink">
                Browse Chemical Catalogue &rarr;
              </Link>
              <Link href="/contact" className="btn btn-plain">
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>

        <span className="scroll-cue" aria-hidden="true">
          Scroll
          <span className="scroll-cue-rail" />
        </span>
      </section>

      {/* Credential strip. Deliberately below the fold: the hero owns the
          first screen, and this is what rewards the first scroll. */}
      <section className="hero-strip">
        <div className="page-hero stats-bar">
            <div className="stat-item">
              <span className="stat-value">{products.length}+</span>
              <span className="stat-label">Industrial Compounds</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">ISO 9001</span>
              <span className="stat-label">Certified Quality</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{industries.length}+</span>
              <span className="stat-label">Major Sectors Served</span>
            </div>
          <div className="stat-item">
            <span className="stat-value">2 Offices</span>
            <span className="stat-label">Punjab &amp; Chandigarh</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 01: CATALOGUE ─────────────────────────────── */}
      <Chapter
        number={1}
        title="Featured Chemical Catalogue"
        note={`Showing ${opening.length} of ${products.length} industrial chemicals with MSDS and COA support.`}
        tone="tint"
        action={
          <Link href="/products" className="btn btn-ink">
            View All {products.length} Products &rarr;
          </Link>
        }
      >
        <div className="entry-card-grid">
          {opening.map((product) => (
            <Entry
              key={product.slug}
              product={product}
              image={productImage(product.slug)}
            />
          ))}
        </div>

      </Chapter>

      {/* ── SECTION 02: SECTORS ───────────────────────────────── */}
      <Chapter
        number={2}
        title="Key Industrial Sectors Served"
        note={`Delivering tailored chemical solutions to ${industries.length}+ core industries nationwide.`}
      >
        <ol className="sector-grid">
          {industries.map((industry, i) => (
            <Reveal as="li" index={i} key={industry.slug} className="sector-card">
              <span className="sector-num">
                SECTOR 0{i + 1}
              </span>
              <h3 className="title t3 sector-name">{industry.name}</h3>
              <p className="sector-desc">{industry.blurb}</p>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* ── SECTION 03: TERMS & COMMITMENT ───────────────────── */}
      <Chapter
        number={3}
        title="Quality & Supply Commitments"
        note="Every order carries guaranteed purity, COA documentation, and reliable dispatch."
        tone="tint"
      >
        <ol className="terms-grid">
          {commitments.map((item, i) => (
            <Reveal as="li" index={i} key={item.title} className="term-card">
              <div className="term-icon-badge">
                0{i + 1}
              </div>
              <h3 className="title t3">{item.title}</h3>
              <p className="prose">{item.desc}</p>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* ── SECTION 04: CLIENTS & TESTIMONIALS ────────────────── */}
      <Chapter
        number={4}
        title="Trusted Client Partnerships"
        note={`Partnering with ${clients.length}+ government institutions, railways, and major enterprises across India.`}
      >
        <ul className="client-pills">
          {clients.map((client) => (
            <li key={client.name} className="client-pill">
              {client.name}
            </li>
          ))}
        </ul>

        <ul className="quotes-grid">
          {testimonials.map((testimonial, i) => (
            <Reveal as="li" index={i} key={testimonial.author} className="quote-card">
              <blockquote>
                <p className="quote-text">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <cite className="quote-cite">
                &mdash; {testimonial.author}
              </cite>
            </Reveal>
          ))}
        </ul>
      </Chapter>

      {/* ── SECTION 05: ENQUIRIES ─────────────────────────────── */}
      <Chapter
        number={5}
        title="Get in Touch &amp; Request a Quote"
        note="Specify chemical, grade, and quantity for direct price and dispatch timelines."
      >
        <div className="enquiry-card">
          <div className="enquiry-spread">
            <div>
              <h3 className="title t2" style={{ color: "#ffffff", marginBottom: "16px" }}>
                Ready to Order or Have Technical Enquiries?
              </h3>
              <p className="lead">
                Send us your required chemical name, target grade, and batch quantity. Our technical team will reply with immediate stock availability, COA/MSDS documentation, and competitive delivery schedules.
              </p>
              <div style={{ marginTop: "28px" }}>
                <Link href="/contact" className="btn btn-plain" style={{ background: "#ffffff", color: "#00243c", borderColor: "#ffffff" }}>
                  Open Detailed Enquiry Form &rarr;
                </Link>
              </div>
            </div>

            <dl className="imprint-list">
              <div>
                <dt>Direct Telephone</dt>
                <dd>
                  <a href={site.phoneHref} className="enquiry-contact-link">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Official Email</dt>
                <dd>
                  <a href={site.emailHref} className="enquiry-contact-link">
                    {site.email}
                  </a>
                </dd>
              </div>
              {addresses.map((address) => (
                <div key={address.label}>
                  <dt>{address.label}</dt>
                  <dd>{address.display}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Chapter>
    </>
  );
}
