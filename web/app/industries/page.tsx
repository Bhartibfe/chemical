import Link from "next/link";
import Chapter from "@/components/Chapter";
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

      <section className="chapter-opener">
        <div className="page">
          <nav aria-label="Breadcrumb" className="apparatus-sm breadcrumb">
            <Link href="/">Handbook</Link>
            <span aria-hidden="true">·</span>
            <span aria-current="page">Sectors</span>
          </nav>

          <p className="apparatus chapter-opener-num">§ 02</p>
          <h1 className="title t1">Sectors served</h1>
          <hr className="rule-double" />
          <p className="lead">
            SHIV ENTERPRISES supplies industrial chemicals to{" "}
            {industries.length} sectors across India, from municipal water
            treatment plants in Punjab to defence metallurgical laboratories and
            thermal power stations.
          </p>
        </div>
      </section>

      <section className="chapter" data-tone="paper">
        <div className="page">
          <ol className="sector-list">
            {industries.map((industry, i) => (
              <Reveal as="li" index={i} key={industry.slug} className="sector">
                <span className="folio sector-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="title t3 sector-name">{industry.name}</h2>
                  <p className="prose sector-desc">{industry.blurb}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Chapter
        number={3}
        title="Enquiries"
        note="Tell us the application and we will match the chemical."
        tone="plate"
      >
        <div className="enquiry-spread">
          <p className="lead">
            We will recommend the right chemical, grade, and dosing approach for
            your process.
          </p>
          <div className="title-page-actions">
            <Link href="/contact" className="btn btn-ink">
              Talk to our team
            </Link>
            <a href={site.phoneHref} className="btn btn-plain">
              {site.phone}
            </a>
          </div>
        </div>
      </Chapter>
    </>
  );
}
