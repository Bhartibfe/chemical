import Image from "next/image";
import Link from "next/link";
import { addresses, navLinks, site } from "@/lib/site";
import { categories, categoryMeta, products } from "@/lib/products";

/**
 * Title block — the bordered data panel in the corner of every engineering
 * drawing, carrying who drew it, what it is, and which revision you hold.
 */
export default function Footer() {
  return (
    <footer className="title-block">
      <div className="container">
        <div className="tb-grid">
          <div className="tb-cell tb-brand">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={412}
              height={175}
              className="tb-logo"
            />
            <p className="prose tb-note">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier based in Sardulgarh, Punjab, supplying{" "}
              {products.length} chemicals across India.
            </p>
          </div>

          <nav className="tb-cell" aria-label="Footer">
            <span className="tag-sm tb-label">Sheets</span>
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} className="tb-link">
                <span className="data tb-num">
                  {String(i + 2).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="tb-cell" aria-label="Service classes">
            <span className="tag-sm tb-label">Services</span>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="tb-link"
              >
                <span
                  className="swatch"
                  style={{ background: `var(${categoryMeta[category].token})` }}
                  aria-hidden="true"
                />
                {category}
              </Link>
            ))}
          </nav>

          <div className="tb-cell">
            <span className="tag-sm tb-label">Sites</span>
            {addresses.map((address) => (
              <address key={address.label} className="tb-address">
                <span className="tag-sm">{address.label}</span>
                <span className="data">{address.display}</span>
              </address>
            ))}
            <a href={site.phoneHref} className="tb-link data">
              {site.phone}
            </a>
            <a href={site.emailHref} className="tb-link data">
              {site.email}
            </a>
          </div>
        </div>

        {/* The stamp row a real title block ends on. */}
        <dl className="tb-stamp">
          <div>
            <dt className="tag-sm">Drawing</dt>
            <dd className="data">SE-PFD-001</dd>
          </div>
          <div>
            <dt className="tag-sm">Title</dt>
            <dd className="data">Industrial Chemical Supply — Process Flow</dd>
          </div>
          <div>
            <dt className="tag-sm">Certification</dt>
            <dd className="data">{site.certification}</dd>
          </div>
          <div>
            <dt className="tag-sm">Area served</dt>
            <dd className="data">Pan-India</dd>
          </div>
          <div>
            <dt className="tag-sm">Issued</dt>
            <dd className="data">{new Date().getFullYear()}</dd>
          </div>
        </dl>

        <p className="tag-sm tb-foot">
          © {new Date().getFullYear()} {site.legalName} · Sardulgarh ·
          Chandigarh · All rights reserved
        </p>
      </div>
    </footer>
  );
}
