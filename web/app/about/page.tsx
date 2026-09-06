import Link from "next/link";
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

      <section className="page-plate">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mono sheet-crumb">
            <Link href="/">Index</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Company</span>
          </nav>

          <div className="page-plate-inner">
            <div>
              <span className="data page-plate-ref">SE/03</span>
              <h1 className="display d1">The company</h1>
            </div>
            <p className="lead">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier based in Sardulgarh, Mansa, Punjab, with a
              second office in Chandigarh, supplying {products.length} chemicals
              to power plants, Indian Railways, defence establishments, water
              treatment plants, and textile mills across India.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container sheet-body">
          <div>
            <div className="marker">
              <span className="marker-num">01</span>
              <span className="marker-title">Statement</span>
            </div>

            <p className="prose about-para">
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

            <ul className="marks">
              {differentiators.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="marker">
              <span className="marker-num">02</span>
              <span className="marker-title">Record</span>
            </div>

            <dl className="sheet-spec">
              {stats.map((stat) => (
                <div className="field-row" key={stat.label}>
                  <dt>{stat.label}</dt>
                  <span className="leader" aria-hidden="true" />
                  <dd className="data">{stat.num}</dd>
                </div>
              ))}
              <div className="field-row">
                <dt>Certification</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{site.certification}</dd>
              </div>
              <div className="field-row">
                <dt>Supply area</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">Pan-India</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

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
                <h2 className="display d3">{item.title}</h2>
                <p className="prose">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

      <section className="band band-sheet">
        <div className="container">
          <div className="marker">
            <span className="marker-num">05</span>
            <span className="marker-title">Offices</span>
          </div>

          <ul className="offices">
            {addresses.map((address, i) => (
              <Reveal as="li" index={i} key={address.label} className="office">
                <span className="data office-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display d3">{address.label}</h2>
                <address className="data office-address">
                  {address.display}
                </address>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band enquiry-band">
        <div className="container enquiry-band-inner">
          <div>
            <p className="mono enquiry-kicker">Enquiry</p>
            <h2 className="display d2">
              Work with
              <br />
              SHIV ENTERPRISES.
            </h2>
            <p className="lead enquiry-lead">
              Send your requirement and our technical team will respond with
              availability, documentation, and delivery timelines.
            </p>
          </div>
          <div className="enquiry-actions">
            <Link href="/contact" className="btn btn-solid">
              Contact us
            </Link>
            <Link href="/products" className="btn btn-outline">
              View catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
