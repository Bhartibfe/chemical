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
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link href="/" className="breadcrumb-link">
              <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="breadcrumb-current">Sectors &amp; Industries</span>
          </nav>

          <span className="section-badge-pill mb-3 inline-block">SECTORS SERVED</span>
          <h1 className="title t1 mb-4">Industries We Serve</h1>
          <p className="lead mb-6">
            SHIV ENTERPRISES supplies industrial chemicals to{" "}
            {industries.length} sectors across India, from municipal water
            treatment plants in Punjab to defence metallurgical laboratories and
            thermal power stations.
          </p>
        </div>
      </section>

      <section className="chapter" data-tone="paper">
        <div className="page">
          <ol className="sector-grid">
            {industries.map((industry, i) => (
              <Reveal as="li" index={i} key={industry.slug} className="sector-card">
                <span className="sector-num">
                  SECTOR 0{i + 1}
                </span>
                <div>
                  <h2 className="title t3 sector-name mb-2">{industry.name}</h2>
                  <p className="sector-desc">{industry.blurb}</p>
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
