import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Industries We Serve — Power, Rail, Defence",
  description:
    "SHIV ENTERPRISES supplies industrial chemicals to eight sectors across India: water treatment plants, power plants, Indian Railways, defence, textile, pharmaceuticals, paper and chemical manufacturing.",
  path: "/industries",
  keywords: [
    "boiler chemicals power plant India",
    "water treatment plant chemical supplier",
    "textile chemicals supplier Punjab",
    "railway chemical supplier India",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />

      <section className="page-plate">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mono sheet-crumb">
            <Link href="/">Index</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Sectors</span>
          </nav>

          <div className="page-plate-inner">
            <div>
              <span className="data page-plate-ref">SE/02</span>
              <h1 className="display d1">Sectors served</h1>
            </div>
            <p className="lead">
              SHIV ENTERPRISES supplies industrial chemicals to{" "}
              {industries.length} sectors across India, from municipal water
              treatment plants in Punjab to defence metallurgical laboratories
              and thermal power stations.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <ul className="ledger">
            {industries.map((industry, i) => (
              <Reveal as="li" index={i} key={industry.slug} className="ledger-row">
                <span className="data ledger-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display d3 ledger-title">{industry.name}</h2>
                <p className="ledger-desc">{industry.blurb}</p>
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
              Tell us the
              <br />
              application.
            </h2>
            <p className="lead enquiry-lead">
              We will recommend the right chemical, grade, and dosing approach.
            </p>
          </div>
          <div className="enquiry-actions">
            <Link href="/contact" className="btn btn-solid">
              Talk to our team
            </Link>
            <a href={site.phoneHref} className="btn btn-outline data">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
