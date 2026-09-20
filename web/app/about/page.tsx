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

      {/* ── PAGE HERO ────────────────────────────────────────── */}
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
            <span className="breadcrumb-current">Corporate Profile</span>
          </nav>

          <div className="page-header-title-block">
            <span className="badge-pill-primary">ISO 9001:2015 CERTIFIED SUPPLIER</span>
            <h1 className="title t1 page-main-title">About SHIV ENTERPRISES</h1>
            <p className="lead page-main-sub">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier headquartered in Sardulgarh, Mansa, Punjab, with a regional corporate office in Chandigarh. We deliver {products.length}+ industrial compounds, water treatment chemicals, acids, alkalis, and surfactants to power plants, Indian Railways, defence establishments, and textile mills across India.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/contact" className="btn btn-ink">
                Request a Custom Quote &rarr;
              </Link>
              <a href={site.phoneHref} className="btn btn-plain">
                Call Direct: {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="chapter" data-tone="tint">
        <div className="page">
          <div className="stats-bar">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.num}+</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
            <div className="stat-item">
              <span className="stat-value">ISO 9001</span>
              <span className="stat-label">Certified Quality System</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE OPERATIONS & PILLARS ───────────────────────── */}
      <Chapter
        number={1}
        title="Company Operations & Capabilities"
        note="Delivering lab-tested chemicals backed by rigorous quality standards."
      >
        <div className="about-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-box">01</div>
            <h3 className="title t3 mb-2">High-Purity Standards</h3>
            <p className="prose">
              SHIV ENTERPRISES delivers high-purity chemical solutions to India&apos;s most critical industries — from nuclear power plants to railways and defence. Every product supplied meets strict quality benchmarks under an {site.certification} certified quality management system.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">02</div>
            <h3 className="title t3 mb-2">Technical Guidance</h3>
            <p className="prose">
              Our technical team supports product selection, dosing guidance, and specification matching, so procurement teams receive the right grade the first time rather than the closest available substitute.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">03</div>
            <h3 className="title t3 mb-2">Pan-India Logistics</h3>
            <p className="prose">
              With primary warehousing in Sardulgarh, Mansa, Punjab, and corporate logistics coordination in Chandigarh, we ensure rapid, safe dispatch of bulk liquids, flakes, and powders to any industrial site in India.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">04</div>
            <h3 className="title t3 mb-2">Safety &amp; Compliance</h3>
            <p className="prose">
              Complete Material Safety Data Sheets (MSDS) and Certificates of Analysis (COA) accompany every shipment, adhering to strict environmental and transportation safety regulations.
            </p>
          </div>
        </div>

        {/* Differentiators Bar */}
        <div className="about-diff-bar mt-10">
          <span className="about-diff-label">Key Advantages:</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {differentiators.map((item) => (
              <span key={item} className="badge-pill">
                &check; {item}
              </span>
            ))}
          </div>
        </div>
      </Chapter>

      {/* ── TERMS OF SUPPLY ─────────────────────────────────── */}
      <Chapter
        number={2}
        title="Terms of Supply &amp; Order Guarantees"
        note="What every purchase order carries, regardless of quantity."
        tone="tint"
      >
        <ol className="terms-grid">
          {commitments.map((item, i) => (
            <Reveal as="li" index={i} key={item.title} className="term-card">
              <div className="term-icon-badge">
                0{i + 1}
              </div>
              <div>
                <h3 className="title t3 mb-2">{item.title}</h3>
                <p className="prose">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* ── OFFICE LOCATIONS ────────────────────────────────── */}
      <Chapter
        number={3}
        title="Office Locations &amp; Logistics Hubs"
        note="Two strategic sites in North India dispatching nationwide."
      >
        <div className="offices-grid">
          {addresses.map((address, i) => (
            <Reveal as="div" index={i} key={address.label} className="office-card">
              <div className="office-card-header">
                <span className="badge-pill-primary">LOCATION 0{i + 1}</span>
                <h3 className="title t2 office-card-title">{address.label}</h3>
              </div>
              <p className="office-card-address">{address.display}</p>
              <div className="office-card-actions">
                <a href={site.phoneHref} className="btn btn-plain btn-sm">
                  Call {site.phone}
                </a>
                <a href={site.emailHref} className="btn btn-ink btn-sm">
                  Email Office
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* ── CLIENTS & PARTNERS ──────────────────────────────── */}
      <Chapter
        number={4}
        title="Trusted Client Partnerships"
        note={`${clients.length} government institutions and major industrial enterprises across India.`}
        tone="tint"
      >
        <ul className="client-pills">
          {clients.map((client) => (
            <li key={client.name} className="client-pill">
              {client.name}
            </li>
          ))}
        </ul>
      </Chapter>

      {/* ── ENQUIRIES CTA ───────────────────────────────────── */}
      <Chapter
        number={5}
        title="Get Technical Pricing &amp; Availability"
        note="Send your chemical requirement for immediate response."
      >
        <div className="enquiry-card">
          <div className="enquiry-spread">
            <div>
              <h3 className="title t2" style={{ color: "#ffffff", marginBottom: "16px" }}>
                Ready to Order or Request Specifications?
              </h3>
              <p className="lead">
                Send your required chemical name, target grade, and batch quantity. Our technical team responds with immediate availability, documentation, and competitive delivery schedules.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-plain" style={{ background: "#ffffff", color: "#00243c", borderColor: "#ffffff" }}>
                  Open Detailed Enquiry Form &rarr;
                </Link>
                <Link href="/products" className="btn btn-ink" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                  Browse Chemical Catalogue
                </Link>
              </div>
            </div>

            <dl className="imprint-list">
              <div>
                <dt>Registered Address</dt>
                <dd>Sardulgarh, Mansa, Punjab – 151507</dd>
              </div>
              <div>
                <dt>Chandigarh Office</dt>
                <dd>Elante Mall Offices, Phase-I, Chandigarh</dd>
              </div>
              <div>
                <dt>Direct Telephone</dt>
                <dd>
                  <a href={site.phoneHref} className="enquiry-contact-link">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Official Email</dt>
                <dd>
                  <a href={site.emailHref} className="enquiry-contact-link">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Chapter>
    </>
  );
}
