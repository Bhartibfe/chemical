"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Light/dark switch.
 *
 * `data-theme` on <html> is the single source of truth — set before first
 * paint by the inline script in the root layout, and flipped here. No React
 * state is involved: CSS swaps the icon off the same attribute, so the button
 * cannot disagree with what is on screen and there is nothing to hydrate.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage — the choice just will not persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label="Switch between light and dark theme"
    >
      <Sun size={18} strokeWidth={2} className="icon-light" aria-hidden="true" />
      <Moon size={18} strokeWidth={2} className="icon-dark" aria-hidden="true" />
    </button>
  );
}
