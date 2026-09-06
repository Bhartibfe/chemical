import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Unit from "@/components/Unit";
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

      <section className="sheet-head">
        <div className="container">
          <nav aria-label="Breadcrumb" className="tag-sm crumb">
            <Link href="/">Overview</Link>
            <span aria-hidden="true">→</span>
            <span aria-current="page">Plant data</span>
          </nav>

          <div className="sheet-inner">
            <div>
              <span className="tag-text sheet-ref">SHT 04 · PLANT DATA</span>
              <h1 className="draft t1">The plant</h1>
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

      <Unit tag="OP-101" name="Operating statement">
        <p className="prose about-para">
          SHIV ENTERPRISES delivers high-purity chemical solutions to
          India&apos;s most critical industries — from nuclear power plants to
          railways and defence. Every product supplied meets strict quality
          benchmarks under an {site.certification} certified quality management
          system.
        </p>
        <p className="prose about-para">
          Our technical team supports product selection, dosing guidance, and
          specification matching, so procurement teams receive the right grade
          the first time rather than the closest available substitute.
        </p>

        <ul className="marks">
          {differentiators.map((item) => (
            <li key={item} className="tag-sm mark">
              {item}
            </li>
          ))}
        </ul>

        <dl className="datasheet about-data">
          {stats.map((stat) => (
            <div className="ds-row" key={stat.label}>
              <dt className="tag-sm">{stat.label}</dt>
              <dd className="data">{stat.num}</dd>
            </div>
          ))}
          <div className="ds-row">
            <dt className="tag-sm">Certification</dt>
            <dd className="data">{site.certification}</dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Supply area</dt>
            <dd className="data">Pan-India</dd>
          </div>
        </dl>
      </Unit>

      <Unit
        tag="AN-201"
        name="Quality controls"
        note={`${commitments.length} controls`}
        tone="panel"
      >
        <ul className="controls">
          {commitments.map((item, i) => (
            <Reveal as="li" index={i} key={item.title} className="control">
              <span className="bubble">
                QC
                <br />
                {String(i + 1).padStart(3, "0")}
              </span>
              <div>
                <h2 className="draft t3">{item.title}</h2>
                <p className="prose">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Unit>

      <Unit
        tag="PK-501"
        name="Client register"
        note={`${clients.length} institutions`}
      >
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
      </Unit>

      <Unit tag="ZI-002" name="Sites" tone="panel">
        <ul className="sites">
          {addresses.map((address, i) => (
            <Reveal as="li" index={i} key={address.label} className="site-card">
              <span className="bubble">
                ZI
                <br />
                {String(i + 1).padStart(3, "0")}
              </span>
              <div>
                <h2 className="draft t3">{address.label}</h2>
                <address className="data site-address">
                  {address.display}
                </address>
              </div>
            </Reveal>
          ))}
        </ul>
      </Unit>

      <Unit tag="CP-601" name="Enquiry" tone="ink" terminal>
        <div className="control-room">
          <div>
            <h3 className="draft t2">
              Work with
              <br />
              SHIV ENTERPRISES.
            </h3>
            <p className="lead cr-lead">
              Send your requirement and our technical team will respond with
              availability, documentation, and delivery timelines.
            </p>
          </div>
          <div className="cr-actions">
            <Link href="/contact" className="btn btn-solid">
              Contact us
            </Link>
            <Link href="/products" className="btn btn-line">
              Tank farm
            </Link>
          </div>
        </div>
      </Unit>
    </>
  );
}
