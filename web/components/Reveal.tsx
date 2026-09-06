"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  /** Rendered element. Use "li" inside a list so the markup stays semantic. */
  as?: "div" | "li";
  className?: string;
  children: ReactNode;
};

/**
 * Scroll-reveal wrapper.
 *
 * The children are always server-rendered into the HTML — only the visual
 * start state is applied, and only when JS is confirmed (see the `html.js`
 * rules in globals.css). Crawlers, AI answer engines, and no-JS visitors get
 * the full content regardless, and `prefers-reduced-motion` disables the
 * movement entirely.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
