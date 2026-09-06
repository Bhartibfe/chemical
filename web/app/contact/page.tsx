import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import Unit from "@/components/Unit";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { addresses, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact — Request a Chemical Quote",
  description:
    "Contact SHIV ENTERPRISES for industrial chemical quotes. Call +91 78149 69998, email shivventerprisess@gmail.com, or visit our Sardulgarh, Punjab or Chandigarh office.",
  path: "/contact",
  keywords: [
    "chemical supplier contact Punjab",
    "industrial chemical quote India",
    "Shiv Enterprises contact",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={[
          faqSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="sheet-head">
        <div className="container">
          <nav aria-label="Breadcrumb" className="tag-sm crumb">
            <Link href="/">Overview</Link>
            <span aria-hidden="true">→</span>
            <span aria-current="page">Control room</span>
          </nav>

          <div className="sheet-inner">
            <div>
              <span className="tag-text sheet-ref">SHT 05 · CP-601</span>
              <h1 className="draft t1">Control room</h1>
            </div>
            <p className="lead">
              Request a quote, ask about a grade, or get technical guidance.
              Call {site.phone}, email {site.email}, or send the form below.
            </p>
          </div>
        </div>
      </section>

      <Unit tag="CP-601" name="Direct lines">
        <dl className="datasheet">
          <div className="ds-row">
            <dt className="tag-sm">Telephone</dt>
            <dd>
              <a href={site.phoneHref} className="data link">
                {site.phone}
              </a>
            </dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">Email</dt>
            <dd>
              <a href={site.emailHref} className="data link">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="ds-row">
            <dt className="tag-sm">WhatsApp</dt>
            <dd>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="data link"
              >
                Chat
                <span className="visually-hidden">
                  {" "}
                  on WhatsApp (opens in a new tab)
                </span>
              </a>
            </dd>
          </div>
          {addresses.map((address) => (
            <div className="ds-row" key={address.label}>
              <dt className="tag-sm">{address.label.replace(" Office", "")}</dt>
              <dd className="data">{address.display}</dd>
            </div>
          ))}
          <div className="ds-row">
            <dt className="tag-sm">Certification</dt>
            <dd className="data">{site.certification}</dd>
          </div>
        </dl>
      </Unit>

      <Unit tag="FM-701" name="Enquiry form" tone="panel">
        <EnquiryForm />
      </Unit>

      <Unit
        tag="RF-801"
        name="Frequently asked"
        note={`${faqSchema.mainEntity.length} entries`}
        terminal
      >
        {/* Mirrors the FAQPage schema above, so what an AI engine reads and
            what a visitor reads are the same answers. */}
        <dl className="faq">
          {faqSchema.mainEntity.map((entry, i) => (
            <div key={entry.name} className="faq-entry">
              <dt>
                <span className="data faq-num">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <span className="draft t3">{entry.name}</span>
              </dt>
              <dd className="prose">{entry.acceptedAnswer.text}</dd>
            </div>
          ))}
        </dl>
      </Unit>
    </>
  );
}
