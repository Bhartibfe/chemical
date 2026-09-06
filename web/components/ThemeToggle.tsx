"use client";

/**
 * Light/dark switch, set as a mono field rather than an icon button so it
 * reads as part of the document furniture.
 *
 * `data-theme` on <html> is the single source of truth — set before first
 * paint by the inline script in the root layout, and flipped here. No React
 * state is involved: CSS shows the label for the active theme, so the control
 * cannot disagree with the screen and there is nothing to hydrate.
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
      className="theme-toggle mono"
      aria-label="Switch between light and dark theme"
    >
      <span className="theme-label-light" aria-hidden="true">
        ○ Light
      </span>
      <span className="theme-label-dark" aria-hidden="true">
        ● Dark
      </span>
    </button>
  );
}
