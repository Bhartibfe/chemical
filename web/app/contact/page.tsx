import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
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

      <section className="page-plate">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mono sheet-crumb">
            <Link href="/">Index</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Enquiry</span>
          </nav>

          <div className="page-plate-inner">
            <div>
              <span className="data page-plate-ref">SE/04</span>
              <h1 className="display d1">Enquiry</h1>
            </div>
            <p className="lead">
              Request a quote, ask about a grade, or get technical guidance.
              Call {site.phone}, email {site.email}, or send the form below.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container sheet-body">
          <div>
            <div className="marker">
              <span className="marker-num">01</span>
              <span className="marker-title">Direct lines</span>
            </div>

            <dl className="sheet-spec">
              <div className="field-row">
                <dt>Telephone</dt>
                <span className="leader" aria-hidden="true" />
                <dd>
                  <a href={site.phoneHref} className="data link">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="field-row">
                <dt>Email</dt>
                <span className="leader" aria-hidden="true" />
                <dd>
                  <a href={site.emailHref} className="data link">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="field-row">
                <dt>WhatsApp</dt>
                <span className="leader" aria-hidden="true" />
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
                <div className="field-row" key={address.label}>
                  <dt>{address.label.replace(" Office", "")}</dt>
                  <span className="leader" aria-hidden="true" />
                  <dd className="data">{address.display}</dd>
                </div>
              ))}
              <div className="field-row">
                <dt>Certification</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="data">{site.certification}</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="marker">
              <span className="marker-num">02</span>
              <span className="marker-title">Enquiry form</span>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="band band-sheet">
        <div className="container">
          <div className="marker">
            <span className="marker-num">03</span>
            <span className="marker-title">Frequently asked</span>
            <span className="marker-meta">
              {faqSchema.mainEntity.length} entries
            </span>
          </div>

          {/* Mirrors the FAQPage schema above, so what an AI engine reads and
              what a visitor reads are the same answers. */}
          <dl className="faq">
            {faqSchema.mainEntity.map((entry, i) => (
              <div key={entry.name} className="faq-entry">
                <dt>
                  <span className="data faq-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display d3">{entry.name}</span>
                </dt>
                <dd className="prose">{entry.acceptedAnswer.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
