import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { clients, commitments, industries, testimonials } from "@/lib/content";
import { products } from "@/lib/products";
import { productCatalogueSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site, stats } from "@/lib/site";

// The title template on the root layout does not apply to this segment, so
// the brand is spelled out here rather than lost from the homepage title.
export const metadata = pageMeta({
  title: "Industrial Chemical Supplier in Punjab | SHIV ENTERPRISES",
  description:
    "SHIV ENTERPRISES is an ISO 9001:2015 certified industrial chemical supplier in Sardulgarh, Punjab, delivering water treatment chemicals, acids, alkalis and surfactants across India.",
  path: "/",
});

const featured = products.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={productCatalogueSchema} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero grid-bg">
        <div className="container hero-inner">
          <p className="chip chip-accent hero-chip">
            <Check size={14} aria-hidden="true" />
            {site.certification} Certified Company
          </p>

          <h1 className="h1 hero-title">
            Industrial chemicals,
            <br />
            <span className="hero-accent">delivered with certainty.</span>
          </h1>

          {/* Answer-first and entity-explicit: quotable on its own by an AI
              answer engine, with the company, credential, place and scope all
              inside one sentence. */}
          <p className="lead hero-lead">
            SHIV ENTERPRISES is an {site.certification} certified industrial
            chemical supplier based in Sardulgarh, Punjab, supplying{" "}
            {products.length} water treatment chemicals, acids, alkalis and
            surfactants to power plants, Indian Railways, defence, and textile
            mills across India.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/products" className="btn btn-secondary">
              Browse {products.length} Chemicals
            </Link>
          </div>

          <dl className="stat-row">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <dt className="stat-label">{stat.label}</dt>
                <dd className="stat-value">{stat.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CLIENT PROOF ─────────────────────────────────────── */}
      <section className="section-tight client-strip">
        <div className="container">
          <p className="strip-label">
            Trusted by India&apos;s power, rail, defence and water institutions
          </p>
          <ul className="client-marquee">
            {clients.map((client) => (
              <li key={client.name}>{client.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why SHIV ENTERPRISES</p>
            <h2 className="h2">Supply you can plan a shutdown around</h2>
            <p className="lead section-lead">
              Procurement teams choose SHIV ENTERPRISES for tested purity,
              documented safety compliance, and delivery that holds to schedule.
            </p>
          </Reveal>

          <ul className="commit-grid">
            {commitments.map((item, i) => (
              <Reveal as="li" index={i} key={item.title} className="commit-card">
                <span className="commit-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="h3">{item.title}</h3>
                <p className="prose-muted">{item.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">What we supply</p>
                <h2 className="h2">Core chemical range</h2>
                <p className="lead section-lead">
                  From sodium hypochlorite for municipal water treatment to
                  hydrazine hydrate for boiler feed water — {products.length}{" "}
                  chemicals, each with grade and application detail.
                </p>
              </div>
              <Link href="/products" className="btn btn-secondary">
                View all <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <ul className="product-grid">
            {featured.map((product, i) => (
              <Reveal as="li" index={i} key={product.slug}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Who we serve</p>
            <h2 className="h2">Eight sectors, one supplier</h2>
            <p className="lead section-lead">
              SHIV ENTERPRISES supplies critical chemicals to India&apos;s
              essential infrastructure — water treatment plants, power plants,
              Indian Railways, and defence establishments among them.
            </p>
          </Reveal>

          <ul className="industry-grid">
            {industries.map((industry, i) => (
              <Reveal
                as="li"
                index={i}
                key={industry.slug}
                className="card industry-card"
              >
                <span className="industry-icon">
                  <Icon name={industry.icon} size={20} />
                </span>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-blurb">{industry.blurb}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Client feedback</p>
            <h2 className="h2">What buyers say</h2>
          </Reveal>

          <ul className="testi-grid">
            {testimonials.map((testimonial, i) => (
              <Reveal
                as="li"
                index={i}
                key={testimonial.author}
                className="card testi-card"
              >
                <Quote size={22} className="testi-mark" aria-hidden="true" />
                <blockquote>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <cite>{testimonial.author}</cite>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h2">Need a quote or a technical spec?</h2>
            <p className="lead">
              Tell us the chemical, grade, and quantity. Our technical team
              responds with availability and delivery timelines.
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
