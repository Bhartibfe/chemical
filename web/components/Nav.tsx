import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <a className="nav-logo" href="#main">
        <Image
          src={site.logo}
          alt={`${site.name} logo`}
          width={34}
          height={34}
          priority
        />
        <span>SHIV</span>
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
