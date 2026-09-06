"use client";

/**
 * Light/dark switch, drawn as a two-position selector on the drawing header —
 * SHEET (vellum) or BOARD (backlit CAD screen).
 *
 * `data-theme` on <html> is the single source of truth, set before first paint
 * by the inline script in the root layout and flipped here. No React state is
 * involved: CSS shows the label for the active mode, so the control cannot
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
      className="mode-switch tag-sm"
      aria-label="Switch between light and dark theme"
    >
      <span className="mode-lamp" aria-hidden="true" />
      <span className="mode-light" aria-hidden="true">
        Sheet
      </span>
      <span className="mode-dark" aria-hidden="true">
        Board
      </span>
    </button>
  );
}
