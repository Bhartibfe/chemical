import Image from "next/image";
import Link from "next/link";
import { addresses, navLinks, site } from "@/lib/site";
import { categories, categoryMeta, products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="page">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={320}
              height={140}
              className="footer-logo"
            />
            <p className="footer-desc">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier based in Sardulgarh, Punjab, supplying{" "}
              {products.length} high-grade chemicals across India.
            </p>
            <div className="footer-certification-badge">
              <span className="badge-pill">ISO 9001:2015 CERTIFIED SUPPLIER</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <nav aria-label="Footer main navigation" className="footer-nav-list">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Chemical Categories</h4>
            <nav aria-label="Footer subject categories" className="footer-nav-list">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="footer-link-category"
                >
                  <span
                    className="category-dot"
                    style={{ background: `var(${categoryMeta[category].token})` }}
                    aria-hidden="true"
                  />
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact &amp; Offices</h4>
            <div className="footer-contact-details">
              <a href={site.phoneHref} className="footer-contact-item footer-phone-highlight">
                Call: {site.phone}
              </a>
              <a href={site.emailHref} className="footer-contact-item">
                Email: {site.email}
              </a>
              {addresses.map((address) => (
                <div key={address.label} className="footer-address-box">
                  <span className="footer-address-label">{address.label}</span>
                  <p className="footer-address-text">{address.display}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. Registered in Sardulgarh, Punjab &amp; Chandigarh, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
