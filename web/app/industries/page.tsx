import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Unit from "@/components/Unit";
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

      <section className="sheet-head">
        <div className="container">
          <nav aria-label="Breadcrumb" className="tag-sm crumb">
            <Link href="/">Overview</Link>
            <span aria-hidden="true">→</span>
            <span aria-current="page">Distribution</span>
          </nav>

          <div className="sheet-inner">
            <div>
              <span className="tag-text sheet-ref">SHT 03 · MN-401</span>
              <h1 className="draft t1">Distribution</h1>
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

      <Unit
        tag="MN-401"
        name="Manifold branches"
        note={`${industries.length} outlets`}
      >
        <ul className="branches">
          {industries.map((industry, i) => (
            <Reveal as="li" index={i} key={industry.slug} className="branch">
              <span className="branch-pipe" aria-hidden="true" />
              <span className="data branch-tag">
                B-{String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="draft t3 branch-name">{industry.name}</h2>
              <p className="branch-desc">{industry.blurb}</p>
            </Reveal>
          ))}
        </ul>
      </Unit>

      <Unit tag="CP-601" name="Sector enquiry" tone="ink" terminal>
        <div className="control-room">
          <div>
            <h3 className="draft t2">
              Tell us the
              <br />
              application.
            </h3>
            <p className="lead cr-lead">
              We will recommend the right chemical, grade, and dosing approach.
            </p>
          </div>
          <div className="cr-actions">
            <Link href="/contact" className="btn btn-solid">
              Talk to our team
            </Link>
            <a href={site.phoneHref} className="btn btn-line data">
              {site.phone}
            </a>
          </div>
        </div>
      </Unit>
    </>
  );
}
