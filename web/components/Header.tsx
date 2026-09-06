"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/lib/site";

/** Section reference printed in the masthead, the way a document header
 *  names the sheet you are on. */
const sheetRef: Record<string, string> = {
  "/": "SE/00 · INDEX",
  "/products": "SE/01 · CATALOGUE",
  "/industries": "SE/02 · SECTORS",
  "/about": "SE/03 · COMPANY",
  "/contact": "SE/04 · ENQUIRY",
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const ref = pathname.startsWith("/products/")
    ? "SE/01 · DATASHEET"
    : (sheetRef[pathname] ?? "SE · SHIV ENTERPRISES");

  return (
    <header className="masthead">
      {/* Running head — document reference, certification, contact. */}
      <div className="running-head">
        <div className="container running-head-inner mono-sm">
          <span>{ref}</span>
          <span className="running-head-cert">
            {site.certification} CERTIFIED
          </span>
          <a href={site.phoneHref} className="running-head-phone data">
            {site.phone}
          </a>
        </div>
      </div>

      <div className="container masthead-inner">
        <Link href="/" className="masthead-logo" aria-label={`${site.name} home`}>
          <Image
            src={site.logo}
            alt={`${site.name} — ${site.certification} certified industrial chemical supplier`}
            width={412}
            height={175}
            priority
          />
        </Link>

        <nav className="masthead-nav" aria-label="Primary">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="masthead-link mono"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="masthead-link-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="masthead-actions">
          <ThemeToggle />
          <button
            type="button"
            className="masthead-burger mono"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="masthead-mobile" hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="masthead-mobile-link"
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="mono masthead-link-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display d3">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
