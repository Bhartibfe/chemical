import Image from "next/image";
import Link from "next/link";
import { addresses, navLinks, site } from "@/lib/site";
import { categories, categoryMeta, products } from "@/lib/products";

/**
 * Colophon — the note at the back of a book recording who made it, how, and
 * in what types. Here it also carries the imprint details a buyer needs.
 */
export default function Footer() {
  return (
    <footer className="colophon">
      <div className="page">
        <p className="apparatus colophon-rule">Colophon</p>

        <div className="colophon-grid">
          <div className="colophon-imprint">
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
              {products.length} chemicals to power, rail, defence, water
              treatment and textile sectors across India.
            </p>
            {addresses.map((address) => (
              <address key={address.label} className="colophon-address">
                <span className="apparatus-sm">{address.label}</span>
                <span>{address.display}</span>
              </address>
            ))}
          </div>

          <nav className="colophon-col" aria-label="Footer">
            <p className="apparatus-sm colophon-label">Chapters</p>
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} className="colophon-link">
                <span className="folio">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="colophon-col" aria-label="Subject classes">
            <p className="apparatus-sm colophon-label">Subjects</p>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="colophon-link"
              >
                <span
                  className="mark"
                  style={{ background: `var(${categoryMeta[category].token})` }}
                  aria-hidden="true"
                />
                {category}
              </Link>
            ))}
          </nav>

          <div className="colophon-col">
            <p className="apparatus-sm colophon-label">Enquiries</p>
            <a href={site.phoneHref} className="colophon-link">
              {site.phone}
            </a>
            <a href={site.emailHref} className="colophon-link">
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="colophon-link"
            >
              WhatsApp
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <p className="colophon-set">
          Set in Source Serif 4 and Source Sans 3. {site.certification}{" "}
          certified. © {new Date().getFullYear()} {site.legalName}, Sardulgarh
          and Chandigarh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
