import Link from "next/link";
import Chapter from "@/components/Chapter";
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
            <span className="breadcrumb-current">Contact &amp; Quotes</span>
          </nav>

          <span className="section-badge-pill mb-3 inline-block">REQUEST A QUOTE</span>
          <h1 className="title t1 mb-4">Contact &amp; Technical Enquiries</h1>
          <p className="lead mb-6">
            Request a quote, ask about a grade, or get technical guidance. Call{" "}
            {site.phone}, email {site.email}, or send the form below.
          </p>
        </div>
      </section>

      <section className="chapter" data-tone="paper">
        <div className="page spread">
          <EnquiryForm />

          <aside className="margin-note">
            <p className="apparatus-sm margin-note-label">Direct</p>
            <dl className="margin-list">
              <div>
                <dt>Telephone</dt>
                <dd>
                  <a href={site.phoneHref} className="link">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={site.emailHref} className="link">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
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
                <div key={address.label}>
                  <dt>{address.label}</dt>
                  <dd>{address.display}</dd>
                </div>
              ))}
              <div>
                <dt>Certification</dt>
                <dd>{site.certification}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <Chapter
        number={1}
        title="Frequently asked"
        note={`${faqSchema.mainEntity.length} questions buyers ask most often.`}
        tone="tint"
      >
        {/* Mirrors the FAQPage schema above, so what an AI engine reads and
            what a visitor reads are the same answers. */}
        <dl className="faq">
          {faqSchema.mainEntity.map((entry, i) => (
            <div key={entry.name} className="faq-entry">
              <dt>
                <span className="folio faq-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="title t3">{entry.name}</span>
              </dt>
              <dd className="prose">{entry.acceptedAnswer.text}</dd>
            </div>
          ))}
        </dl>
      </Chapter>
    </>
  );
}
