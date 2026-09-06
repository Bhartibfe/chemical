import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { addresses, navLinks, site } from "@/lib/site";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={412}
            height={175}
            className="footer-logo"
          />
          <p className="prose-muted footer-tagline">
            SHIV ENTERPRISES is an {site.certification} certified industrial
            chemical supplier based in Sardulgarh, Punjab, delivering across
            India.
          </p>
          <div className="footer-contact">
            <a href={site.phoneHref}>
              <Phone size={15} aria-hidden="true" /> {site.phone}
            </a>
            <a href={site.emailHref}>
              <Mail size={15} aria-hidden="true" /> {site.email}
            </a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2 className="footer-heading">Company</h2>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-col" aria-label="Product categories">
          <h2 className="footer-heading">Categories</h2>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
            >
              {category}
            </Link>
          ))}
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Offices</h2>
          {addresses.map((address) => (
            <address key={address.label} className="footer-address">
              <strong>{address.label}</strong>
              <span>{address.display}</span>
            </address>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <span className="chip chip-accent">{site.certification} Certified</span>
      </div>
    </footer>
  );
}
