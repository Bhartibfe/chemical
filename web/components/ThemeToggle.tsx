"use client";

/**
 * Light/dark switch, set as a small-cap apparatus label rather than an icon —
 * the handbook has no pictograms.
 *
 * `data-theme` on <html> is the single source of truth, set before first paint
 * by the inline script in the root layout and flipped here. No React state is
 * involved: CSS shows the label for the active setting, so the control cannot
 * disagree with the screen and there is nothing to hydrate.
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
      className="stock-switch apparatus-sm"
      aria-label="Switch between light and dark theme"
    >
      <span className="stock-light" aria-hidden="true">
        Cream stock
      </span>
      <span className="stock-dark" aria-hidden="true">
        Dark stock
      </span>
    </button>
  );
}
