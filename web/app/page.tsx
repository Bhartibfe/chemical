import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import Chapter from "@/components/Chapter";
import Entry from "@/components/Entry";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { clients, commitments, industries, testimonials } from "@/lib/content";
import { products } from "@/lib/products";
import { productCatalogueSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { addresses, site } from "@/lib/site";

// The title template on the root layout does not apply to this segment, so
// the brand is spelled out here rather than lost from the homepage title.
export const metadata = pageMeta({
  title: "Industrial Chemical Supplier in Punjab | SHIV ENTERPRISES",
  description:
    "SHIV ENTERPRISES is an ISO 9001:2015 certified industrial chemical supplier in Sardulgarh, Punjab, delivering water treatment chemicals, acids, alkalis and surfactants across India.",
  path: "/",
});

const opening = products.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={productCatalogueSchema} />

      {/* ── TITLE PAGE ───────────────────────────────────────── */}
      <section className="title-page">
        <div className="page">
          <p className="apparatus title-page-imprint">
            Sardulgarh, Punjab · {site.certification} Certified
          </p>

          <h1 className="title t1 title-page-title">
            A handbook of
            <br />
            industrial chemicals
          </h1>

          <p className="title-page-sub">
            Twenty-nine compounds for power, rail, defence and textile
          </p>

          <hr className="rule-double" />

          {/* Answer-first and entity-explicit: quotable standalone by an AI
              answer engine, with company, credential, place and scope all
              inside a single sentence. */}
          <p className="lead title-page-lead">
            SHIV ENTERPRISES is an {site.certification} certified industrial
            chemical supplier based in Sardulgarh, Punjab, supplying{" "}
            {products.length} water treatment chemicals, acids, alkalis and
            surfactants to power plants, Indian Railways, defence, and textile
            mills across India.
          </p>

          <div className="title-page-actions">
            <Link href="/products" className="btn btn-ink">
              Open the catalogue
            </Link>
            <Link href="/contact" className="btn btn-plain">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTENTS ─────────────────────────────────────────── */}
      <section className="contents">
        <div className="page">
          <p className="apparatus contents-label">Contents</p>
          <ol className="contents-list">
            <li>
              <Link href="/products">
                <span className="folio">01</span>
                <span className="contents-title">The catalogue</span>
                <span className="contents-leader" aria-hidden="true" />
                <span className="folio">{products.length} entries</span>
              </Link>
            </li>
            <li>
              <Link href="/industries">
                <span className="folio">02</span>
                <span className="contents-title">Sectors served</span>
                <span className="contents-leader" aria-hidden="true" />
                <span className="folio">{industries.length} sectors</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="folio">03</span>
                <span className="contents-title">The company</span>
                <span className="contents-leader" aria-hidden="true" />
                <span className="folio">{clients.length} clients</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="folio">04</span>
                <span className="contents-title">Enquiries</span>
                <span className="contents-leader" aria-hidden="true" />
                <span className="folio">{site.phone}</span>
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* ── § 01 THE CATALOGUE ───────────────────────────────── */}
      <Chapter
        number={1}
        title="The catalogue"
        note={`Showing ${opening.length} of ${products.length} entries. Each entry carries its formula, subject class, and applications.`}
        tone="tint"
      >
        <p className="prose opening chapter-opening">
          SHIV ENTERPRISES holds {products.length} industrial chemicals across
          six subject classes, from sodium hypochlorite for municipal water
          treatment to hydrazine hydrate for boiler feed water. Every entry is
          supplied under an {site.certification} certified quality management
          system, with MSDS documentation on dispatch.
        </p>

        <div className="index-list index-list-preview">
          {opening.map((product, i) => (
            <Entry key={product.slug} product={product} index={i} />
          ))}
        </div>

        <div className="chapter-foot">
          <CategoryKey />
          <Link href="/products" className="btn btn-plain">
            All {products.length} entries
          </Link>
        </div>
      </Chapter>

      {/* ── § 02 SECTORS ─────────────────────────────────────── */}
      <Chapter
        number={2}
        title="Sectors served"
        note={`${industries.length} sectors, from municipal water treatment to defence metallurgy.`}
      >
        <ol className="sector-list">
          {industries.map((industry, i) => (
            <Reveal as="li" index={i} key={industry.slug} className="sector">
              <span className="folio sector-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="title t3 sector-name">{industry.name}</h3>
                <p className="prose sector-desc">{industry.blurb}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* ── § 03 TERMS OF SUPPLY ─────────────────────────────── */}
      <Chapter
        number={3}
        title="Terms of supply"
        note="What every order carries, whatever the chemical."
        tone="tint"
      >
        <ol className="terms">
          {commitments.map((item, i) => (
            <Reveal as="li" index={i} key={item.title} className="term">
              <span className="folio term-num">
                {["i", "ii", "iii", "iv"][i] ?? String(i + 1)}
              </span>
              <div>
                <h3 className="title t3">{item.title}</h3>
                <p className="prose">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* ── § 04 CLIENTS & REFERENCES ────────────────────────── */}
      <Chapter
        number={4}
        title="Clients and references"
        note={`${clients.length} government and private institutions across India.`}
      >
        <ul className="client-list">
          {clients.map((client, i) => (
            <li key={client.name} className="client">
              <span className="folio">{String(i + 1).padStart(2, "0")}</span>
              <span>{client.name}</span>
            </li>
          ))}
        </ul>

        <ul className="quotes">
          {testimonials.map((testimonial, i) => (
            <Reveal as="li" index={i} key={testimonial.author} className="quote">
              <blockquote>
                <p className="quote-text">{testimonial.quote}</p>
              </blockquote>
              <cite className="apparatus-sm quote-cite">
                {testimonial.author}
              </cite>
            </Reveal>
          ))}
        </ul>
      </Chapter>

      {/* ── § 05 ENQUIRIES ───────────────────────────────────── */}
      <Chapter
        number={5}
        title="Enquiries"
        note="Include the chemical, grade and quantity for a faster reply."
        tone="plate"
      >
        <div className="enquiry-spread">
          <div>
            <p className="lead">
              Send the chemical, grade and quantity. Our technical team replies
              with availability, documentation, and delivery timelines.
            </p>
            <div className="title-page-actions">
              <Link href="/contact" className="btn btn-ink">
                Open the enquiry form
              </Link>
            </div>
          </div>

          <dl className="imprint-list">
            <div>
              <dt className="apparatus-sm">Telephone</dt>
              <dd>
                <a href={site.phoneHref} className="link">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="apparatus-sm">Email</dt>
              <dd>
                <a href={site.emailHref} className="link">
                  {site.email}
                </a>
              </dd>
            </div>
            {addresses.map((address) => (
              <div key={address.label}>
                <dt className="apparatus-sm">{address.label}</dt>
                <dd>{address.display}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Chapter>
    </>
  );
}
