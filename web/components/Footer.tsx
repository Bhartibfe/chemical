import Image from "next/image";
import Link from "next/link";
import { addresses, navLinks, site } from "@/lib/site";
import { categories, categoryMeta, products } from "@/lib/products";

/** Colophon — the imprint block at the back of the document. */
export default function Footer() {
  return (
    <footer className="colophon">
      <div className="container">
        <div className="colophon-grid">
          <div className="colophon-brand">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={412}
              height={175}
              className="colophon-logo"
            />
            <p className="prose colophon-note">
              SHIV ENTERPRISES is an {site.certification} certified industrial
              chemical supplier based in Sardulgarh, Punjab, supplying{" "}
              {products.length} chemicals across India.
            </p>
          </div>

          <nav className="colophon-col" aria-label="Footer">
            <h2 className="mono colophon-heading">Sections</h2>
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} className="colophon-link">
                <span className="data colophon-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="colophon-col" aria-label="Product categories">
            <h2 className="mono colophon-heading">Index key</h2>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="colophon-link"
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

          <div className="colophon-col">
            <h2 className="mono colophon-heading">Offices</h2>
            {addresses.map((address) => (
              <address key={address.label} className="colophon-address">
                <span className="mono-sm">{address.label}</span>
                <span className="data">{address.display}</span>
              </address>
            ))}
            <a href={site.phoneHref} className="colophon-link data">
              {site.phone}
            </a>
            <a href={site.emailHref} className="colophon-link data">
              {site.email}
            </a>
          </div>
        </div>

        <div className="colophon-foot mono-sm">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <span>{site.certification} Certified</span>
          <span>Sardulgarh · Chandigarh · Pan-India</span>
        </div>
      </div>
    </footer>
  );
}
