"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/lib/site";

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

  return (
    <header className="masthead">
      <div className="page masthead-inner">
        <Link href="/" className="masthead-logo" aria-label={`${site.name} home`}>
          <Image
            src={site.logo}
            alt={`${site.name} — ${site.certification} certified industrial chemical supplier`}
            width={360}
            height={150}
            priority
          />
        </Link>

        <nav className="masthead-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="masthead-link"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="masthead-actions">
          <Link href="/contact" className="btn btn-ink header-cta-btn">
            Request Quote
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="masthead-burger apparatus-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="masthead-mobile" hidden={!open}>
        <nav className="page" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="masthead-mobile-link"
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="title t3">{link.label}</span>
            </Link>
          ))}
          <div className="mobile-cta-wrapper">
            <Link href="/contact" className="btn btn-ink w-full" onClick={() => setOpen(false)}>
              Request Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
