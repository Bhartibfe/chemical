"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/lib/site";

/** Verso runs the book title; recto runs the chapter. */
const chapterOf: Record<string, string> = {
  "/": "Contents",
  "/products": "§ 01 · The Catalogue",
  "/industries": "§ 02 · Sectors",
  "/about": "§ 03 · The Company",
  "/contact": "§ 04 · Enquiries",
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

  const chapter = pathname.startsWith("/products/")
    ? "§ 01 · Entry"
    : (chapterOf[pathname] ?? "Reference Handbook");

  return (
    <header className="masthead">
      {/* Running head — book title left, chapter right, as a printed page. */}
      <div className="running-head">
        <div className="page running-head-inner apparatus-sm">
          <span>
            Shiv Enterprises · Industrial Chemicals · {site.certification}
          </span>
          <span className="running-head-chapter">{chapter}</span>
        </div>
      </div>

      <div className="page masthead-inner">
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
              className="masthead-link"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="folio masthead-link-num" aria-hidden="true">
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
            className="masthead-burger apparatus-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Contents"}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="masthead-mobile" hidden={!open}>
        <nav className="page" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="masthead-mobile-link"
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="folio">{String(i + 1).padStart(2, "0")}</span>
              <span className="title t3">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
