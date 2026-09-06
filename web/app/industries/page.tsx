import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";
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

      <section className="page-head grid-bg">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Industries</span>
          </nav>

          <h1 className="h1">Industries we serve</h1>
          <p className="lead">
            SHIV ENTERPRISES supplies industrial chemicals to{" "}
            {industries.length} sectors across India, from municipal water
            treatment plants in Punjab to defence metallurgical laboratories and
            thermal power stations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="industry-detail-grid">
            {industries.map((industry, i) => (
              <Reveal
                as="li"
                index={i}
                key={industry.slug}
                className="card industry-detail-card"
              >
                <span className="commit-icon">
                  <Icon name={industry.icon} size={22} />
                </span>
                <h2 className="h3">{industry.name}</h2>
                <p className="prose-muted">{industry.blurb}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h2">Supplying your sector?</h2>
            <p className="lead">
              Tell us the application and we will recommend the right chemical,
              grade, and dosing approach.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Talk to our team <ArrowRight size={17} aria-hidden="true" />
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
