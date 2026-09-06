import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Icon from "@/components/Icon";
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

      <section className="page-head grid-bg">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>

          <h1 className="h1">About SHIV ENTERPRISES</h1>
          <p className="lead">
            SHIV ENTERPRISES is an {site.certification} certified industrial
            chemical supplier based in Sardulgarh, Mansa, Punjab, with a second
            office in Chandigarh. The company supplies {products.length}{" "}
            chemicals to power plants, Indian Railways, defence establishments,
            water treatment plants, and textile mills across India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="h2">A chemical partner, not just a vendor</h2>
              <p className="prose-muted about-para">
                SHIV ENTERPRISES delivers high-purity chemical solutions to
                India&apos;s most critical industries — from nuclear power
                plants to railways and defence. Every product supplied meets
                strict quality benchmarks under an {site.certification}{" "}
                certified quality management system.
              </p>
              <p className="prose-muted about-para">
                Our technical team supports product selection, dosing guidance,
                and specification matching, so procurement teams get the right
                grade the first time rather than the closest available
                substitute.
              </p>

              <ul className="badge-row">
                {differentiators.map((item) => (
                  <li key={item} className="chip chip-accent">
                    <Check size={13} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="card iso-card">
            <span className="iso-mark">
              <Icon name="badge" size={26} />
            </span>
            <h2 className="h3">{site.certification}</h2>
            <p className="prose-muted">
              Certified quality management covering procurement, storage,
              testing, and dispatch of industrial chemicals.
            </p>
            <dl className="spec-list">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.num}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our commitment</p>
            <h2 className="h2">What every order includes</h2>
          </Reveal>

          <ul className="commit-grid">
            {commitments.map((item, i) => (
              <Reveal as="li" index={i} key={item.title} className="commit-card">
                <span className="commit-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="h3">{item.title}</h3>
                <p className="prose-muted">{item.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our clients</p>
            <h2 className="h2">Institutions that rely on us</h2>
            <p className="lead section-lead">
              SHIV ENTERPRISES serves government and private institutions
              including Nuclear Power Corporation of India, Indian Railways, and
              Nuclear Fuel Complex.
            </p>
          </Reveal>

          <ul className="client-grid">
            {clients.map((client, i) => (
              <Reveal
                as="li"
                index={i}
                key={client.name}
                className="card client-card"
              >
                <span className="client-mark">{client.initials}</span>
                <span className="client-name">{client.name}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Where to find us</p>
          <h2 className="h2">Two offices in North India</h2>
          <ul className="office-grid">
            {addresses.map((address, i) => (
              <Reveal as="li" index={i} key={address.label} className="card office-card">
                <h3 className="h3">{address.label}</h3>
                <address>{address.display}</address>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h2">Work with SHIV ENTERPRISES</h2>
            <p className="lead">
              Send your requirement and our technical team will respond with
              availability, documentation, and delivery timelines.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/products" className="btn btn-secondary">
              View Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
