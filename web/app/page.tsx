import Link from "next/link";
import CategoryKey from "@/components/CategoryKey";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Unit from "@/components/Unit";
import Vessel from "@/components/Vessel";
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

const onLine = products.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={productCatalogueSchema} />

      {/* ── FEED ─────────────────────────────────────────────── */}
      <section className="intake">
        <div className="container intake-inner">
          <div className="intake-rail" aria-hidden="true">
            <span className="intake-cap" />
            <span className="pipe pipe-out" />
          </div>

          <div className="intake-body">
            <p className="tag-text intake-kicker">
              SE-PFD-001 · Industrial chemical supply · Punjab, India
            </p>

            <h1 className="draft t1 intake-title">
              Twenty-nine chemicals.
              <br />
              <span className="intake-accent">One process line.</span>
            </h1>

            {/* Answer-first and entity-explicit: quotable standalone by an AI
                answer engine, with company, credential, place and scope all
                inside a single sentence. */}
            <p className="lead intake-lead">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier based in Sardulgarh, Punjab, supplying{" "}
              {products.length} water treatment chemicals, acids, alkalis and
              surfactants to power plants, Indian Railways, defence, and textile
              mills across India.
            </p>

            <div className="intake-actions">
              <Link href="/products" className="btn btn-solid">
                Open the tank farm
              </Link>
              <Link href="/contact" className="btn btn-line">
                Request a quote
              </Link>
            </div>

            <div className="gauges">
              <div className="gauge">
                <span className="bubble">
                  QI
                  <br />
                  001
                </span>
                <span className="gauge-text">
                  <span className="tag-sm">Certification</span>
                  <span className="data">{site.certification}</span>
                </span>
              </div>
              <div className="gauge">
                <span className="bubble">
                  FI
                  <br />
                  029
                </span>
                <span className="gauge-text">
                  <span className="tag-sm">Streams</span>
                  <span className="data">{products.length} chemicals</span>
                </span>
              </div>
              <div className="gauge">
                <span className="bubble">
                  ZI
                  <br />
                  002
                </span>
                <span className="gauge-text">
                  <span className="tag-sm">Sites</span>
                  <span className="data">Sardulgarh · Chandigarh</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QC ───────────────────────────────────────────────── */}
      <Unit
        tag="AN-201"
        name="Quality assurance"
        note={`${commitments.length} controls`}
        tone="panel"
      >
        <p className="lead unit-lead">
          Every batch SHIV ENTERPRISES dispatches passes an{" "}
          {site.certification} certified quality management system before it
          leaves the plant.
        </p>

        <ul className="controls">
          {commitments.map((item, i) => (
            <Reveal as="li" index={i} key={item.title} className="control">
              <span className="bubble">
                QC
                <br />
                {String(i + 1).padStart(3, "0")}
              </span>
              <div>
                <h3 className="draft t3">{item.title}</h3>
                <p className="prose">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Unit>

      {/* ── STORAGE ──────────────────────────────────────────── */}
      <Unit
        tag="TK-301"
        name="Storage — tank farm"
        note={`${onLine.length} of ${products.length} shown`}
      >
        <p className="lead unit-lead">
          {products.length} chemicals held across six service classes, from
          sodium hypochlorite for municipal water treatment to hydrazine hydrate
          for boiler feed water.
        </p>

        <div className="farm">
          <span className="farm-header" aria-hidden="true" />
          <ul className="farm-grid">
            {onLine.map((product, i) => (
              <li key={product.slug}>
                <Vessel product={product} index={i} />
              </li>
            ))}
          </ul>
        </div>

        <div className="farm-foot">
          <CategoryKey />
          <Link href="/products" className="btn btn-line">
            All {products.length} vessels
          </Link>
        </div>
      </Unit>

      {/* ── DISTRIBUTION ─────────────────────────────────────── */}
      <Unit
        tag="MN-401"
        name="Distribution manifold"
        note={`${industries.length} branches`}
        tone="panel"
      >
        <p className="lead unit-lead">
          From storage the line branches to {industries.length} sectors across
          India — water treatment plants, power stations, Indian Railways, and
          defence establishments among them.
        </p>

        <ul className="branches">
          {industries.map((industry, i) => (
            <Reveal as="li" index={i} key={industry.slug} className="branch">
              <span className="branch-pipe" aria-hidden="true" />
              <span className="data branch-tag">
                B-{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="draft t3 branch-name">{industry.name}</h3>
              <p className="branch-desc">{industry.blurb}</p>
            </Reveal>
          ))}
        </ul>
      </Unit>

      {/* ── DISPATCH ─────────────────────────────────────────── */}
      <Unit
        tag="PK-501"
        name="Dispatch — client register"
        note={`${clients.length} institutions`}
      >
        <p className="lead unit-lead">
          Delivered pan-India to government and private institutions including
          Nuclear Power Corporation of India, Indian Railways, and Nuclear Fuel
          Complex.
        </p>

        <ul className="register">
          {clients.map((client, i) => (
            <li key={client.name} className="register-row">
              <span className="data register-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="register-name">{client.name}</span>
              <span className="register-line" aria-hidden="true" />
              <span className="tag-sm register-dest">Delivered</span>
            </li>
          ))}
        </ul>

        <ul className="returns">
          {testimonials.map((testimonial, i) => (
            <Reveal as="li" index={i} key={testimonial.author} className="return">
              <blockquote>
                <p className="return-text">{testimonial.quote}</p>
              </blockquote>
              <cite className="tag-sm return-cite">{testimonial.author}</cite>
            </Reveal>
          ))}
        </ul>
      </Unit>

      {/* ── CONTROL ROOM ─────────────────────────────────────── */}
      <Unit tag="CP-601" name="Control room — enquiry" tone="ink" terminal>
        <div className="control-room">
          <div>
            <h3 className="draft t2">
              Send the chemical,
              <br />
              grade and quantity.
            </h3>
            <p className="lead cr-lead">
              Our technical team replies with availability, documentation, and
              delivery timelines.
            </p>
            <div className="intake-actions">
              <Link href="/contact" className="btn btn-solid">
                Open enquiry form
              </Link>
            </div>
          </div>

          <dl className="cr-spec">
            <div className="cr-row">
              <dt className="tag-sm">Telephone</dt>
              <dd>
                <a href={site.phoneHref} className="data link">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="cr-row">
              <dt className="tag-sm">Email</dt>
              <dd>
                <a href={site.emailHref} className="data link">
                  {site.email}
                </a>
              </dd>
            </div>
            {addresses.map((address) => (
              <div className="cr-row" key={address.label}>
                <dt className="tag-sm">
                  {address.label.replace(" Office", "")}
                </dt>
                <dd className="data">{address.display}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Unit>
    </>
  );
}
