import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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

      <section className="page-head grid-bg">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>

          <h1 className="h1">Contact SHIV ENTERPRISES</h1>
          <p className="lead">
            Request a quote, ask about a grade, or get technical guidance. Call{" "}
            {site.phone}, email {site.email}, or send the enquiry form below.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container contact-grid">
          <div className="contact-details">
            <a href={site.phoneHref} className="card contact-tile">
              <span className="contact-icon">
                <Phone size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>Phone</strong>
                <span>{site.phone}</span>
              </span>
            </a>

            <a href={site.emailHref} className="card contact-tile">
              <span className="contact-icon">
                <Mail size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>Email</strong>
                <span>{site.email}</span>
              </span>
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card contact-tile"
            >
              <span className="contact-icon">
                <MessageCircle size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>WhatsApp</strong>
                <span>
                  Chat with our team
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </span>
              </span>
            </a>

            {addresses.map((address) => (
              <div key={address.label} className="card contact-tile">
                <span className="contact-icon">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <span>
                  <strong>{address.label}</strong>
                  <address>{address.display}</address>
                </span>
              </div>
            ))}
          </div>

          <div className="card enquiry-card">
            <h2 className="h3">Send an enquiry</h2>
            <p className="prose-muted enquiry-intro">
              Include the chemical, grade, and quantity so we can respond with
              availability and delivery timelines.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container faq-block">
          <p className="eyebrow">Common questions</p>
          <h2 className="h2">Frequently asked</h2>

          {/* Mirrors the FAQPage schema above, so what an AI engine reads and
              what a visitor reads are the same answers. */}
          <dl className="faq-list">
            {faqSchema.mainEntity.map((entry) => (
              <div key={entry.name} className="faq-item">
                <dt>{entry.name}</dt>
                <dd>{entry.acceptedAnswer.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
