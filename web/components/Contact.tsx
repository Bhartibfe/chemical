import { addresses, site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-sub">
          Request a quote, ask about products, or get technical guidance from
          SHIV ENTERPRISES in Punjab and Chandigarh.
        </p>

        <div className="contact-grid">
          <div>
            {addresses.map((address) => (
              <div className="contact-info-item" key={address.label}>
                <span className="contact-icon" aria-hidden="true">
                  {address.icon}
                </span>
                <div className="contact-detail">
                  <strong>{address.label}</strong>
                  <address style={{ fontStyle: "normal" }}>
                    <span>{address.display}</span>
                  </address>
                </div>
              </div>
            ))}

            <div className="contact-info-item">
              <span className="contact-icon" aria-hidden="true">
                📞
              </span>
              <div className="contact-detail">
                <strong>Phone</strong>
                <span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon" aria-hidden="true">
                ✉
              </span>
              <div className="contact-detail">
                <strong>Email</strong>
                <span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </div>
            </div>

            <p className="contact-cta">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-icon"
              >
                <span aria-hidden="true">💬</span> Chat on WhatsApp
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </p>
          </div>

          <div className="contact-form">
            <h3>Send an Enquiry</h3>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enquiry-name">Name</label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-phone">Phone</label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-email">Email</label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-message">Message</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about the chemicals you need..."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Enquiry <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
