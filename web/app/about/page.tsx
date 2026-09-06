import Link from "next/link";
import Chapter from "@/components/Chapter";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { clients, commitments, differentiators } from "@/lib/content";
import { products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { addresses, site, stats } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Us — ISO 9001:2015 Chemical Supplier",
  description:
    "SHIV ENTERPRISES is an ISO 9001:2015 certified industrial chemical supplier in Sardulgarh, Mansa, Punjab, with a Chandigarh office, serving power, rail, defence and textile sectors across India.",
  path: "/about",
  keywords: [
    "about Shiv Enterprises",
    "ISO certified chemical supplier Punjab",
    "Sardulgarh chemical company",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="chapter-opener">
        <div className="page">
          <nav aria-label="Breadcrumb" className="apparatus-sm breadcrumb">
            <Link href="/">Handbook</Link>
            <span aria-hidden="true">·</span>
            <span aria-current="page">The company</span>
          </nav>

          <p className="apparatus chapter-opener-num">§ 03</p>
          <h1 className="title t1">The company</h1>
          <hr className="rule-double" />
          <p className="lead">
            SHIV ENTERPRISES is an {site.certification} certified industrial
            chemical supplier based in Sardulgarh, Mansa, Punjab, with a second
            office in Chandigarh, supplying {products.length} chemicals to power
            plants, Indian Railways, defence establishments, water treatment
            plants, and textile mills across India.
          </p>
        </div>
      </section>

      <section className="chapter" data-tone="paper">
        <div className="page spread">
          <div>
            <p className="prose opening">
              SHIV ENTERPRISES delivers high-purity chemical solutions to
              India&apos;s most critical industries — from nuclear power plants
              to railways and defence. Every product supplied meets strict
              quality benchmarks under an {site.certification} certified quality
              management system.
            </p>
            <p className="prose about-para">
              Our technical team supports product selection, dosing guidance,
              and specification matching, so procurement teams receive the right
              grade the first time rather than the closest available substitute.
            </p>

            <ul className="attributes">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="margin-note">
            <p className="apparatus-sm margin-note-label">In brief</p>
            <dl className="margin-list">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.num}</dd>
                </div>
              ))}
              <div>
                <dt>Certification</dt>
                <dd>{site.certification}</dd>
              </div>
              <div>
                <dt>Supply area</dt>
                <dd>Pan-India</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <Chapter
        number={1}
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
                <h2 className="title t3">{item.title}</h2>
                <p className="prose">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      <Chapter
        number={2}
        title="Clients"
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
      </Chapter>

      <Chapter
        number={3}
        title="Offices"
        note="Two sites in North India, dispatching nationwide."
        tone="tint"
      >
        <ol className="offices">
          {addresses.map((address, i) => (
            <Reveal as="li" index={i} key={address.label} className="office">
              <span className="folio">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="title t3">{address.label}</h2>
                <address className="office-address">{address.display}</address>
              </div>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      <Chapter
        number={4}
        title="Enquiries"
        note="Send your requirement for availability and timelines."
        tone="plate"
      >
        <div className="enquiry-spread">
          <p className="lead">
            Send your requirement and our technical team will respond with
            availability, documentation, and delivery timelines.
          </p>
          <div className="title-page-actions">
            <Link href="/contact" className="btn btn-ink">
              Contact us
            </Link>
            <Link href="/products" className="btn btn-plain">
              The catalogue
            </Link>
          </div>
        </div>
      </Chapter>
    </>
  );
}
