"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/lib/site";

/** Drawing sheet number for the current view. */
const sheetOf: Record<string, string> = {
  "/": "SHT 01 — PROCESS OVERVIEW",
  "/products": "SHT 02 — TANK FARM",
  "/industries": "SHT 03 — DISTRIBUTION",
  "/about": "SHT 04 — PLANT DATA",
  "/contact": "SHT 05 — CONTROL ROOM",
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

  const sheet = pathname.startsWith("/products/")
    ? "SHT 02.1 — STREAM DATA"
    : (sheetOf[pathname] ?? "SHIV ENTERPRISES");

  return (
    <header className="drawing-head">
      {/* Revision strip — the band across the top of every drawing. */}
      <div className="rev-strip">
        <div className="container rev-strip-inner tag-sm">
          <span>{sheet}</span>
          <span className="rev-cert">{site.certification}</span>
          <a href={site.phoneHref} className="data rev-phone">
            {site.phone}
          </a>
        </div>
      </div>

      <div className="container head-inner">
        <Link href="/" className="head-logo" aria-label={`${site.name} home`}>
          <Image
            src={site.logo}
            alt={`${site.name} — ${site.certification} certified industrial chemical supplier`}
            width={412}
            height={175}
            priority
          />
        </Link>

        <nav className="head-nav" aria-label="Primary">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="head-link tag-text"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="head-link-tag" aria-hidden="true">
                {String((i + 2) * 100).slice(0, 3)}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="head-actions">
          <ThemeToggle />
          <button
            type="button"
            className="head-burger tag-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="head-mobile" hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="head-mobile-link"
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="tag-sm head-link-tag">
                {String((i + 2) * 100).slice(0, 3)}
              </span>
              <span className="draft t3">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
