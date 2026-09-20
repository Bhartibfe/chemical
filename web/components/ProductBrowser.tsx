"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Entry from "./Entry";
import type { ProductImage } from "@/lib/productImages";
import {
  categories,
  categoryMeta,
  products,
  type Category,
} from "@/lib/products";

type Filter = Category | "All";
const filters: Filter[] = ["All", ...categories];

function matches(
  product: (typeof products)[number],
  query: string,
  filter: Filter,
) {
  if (filter !== "All" && product.category !== filter) return false;
  if (!query) return true;

  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.desc.toLowerCase().includes(q) ||
    product.tag.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q) ||
    (product.formula?.toLowerCase().includes(q) ?? false)
  );
}

export default function ProductBrowser({
  images = {},
}: {
  /** Resolved on the server — fs is not available in a Client Component. */
  images?: Record<string, ProductImage>;
}) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const initialFilter: Filter = filters.includes(requested as Filter)
    ? (requested as Filter)
    : "All";

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const reduced = useReducedMotion();

  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(
    () => products.filter((product) => matches(product, deferredQuery, filter)),
    [deferredQuery, filter],
  );

  return (
    <div className="product-browser-wrapper">
      <div className="finder">
        <div className="finder-search">
          <label htmlFor="product-search" className="finder-label">
            Search Chemicals &amp; Compounds
          </label>
          <div className="search-input-wrapper">
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by chemical name, formula (e.g. NaOH, H2SO4), or application..."
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="finder-filters" role="group" aria-label="Filter by category">
          {filters.map((option) => {
            const active = filter === option;
            const meta = option === "All" ? null : categoryMeta[option];
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className="finder-filter"
                data-active={active}
                aria-pressed={active}
              >
                {meta && (
                  <span
                    className="category-dot"
                    style={{ background: `var(${meta.token})` }}
                    aria-hidden="true"
                  />
                )}
                {option === "All" ? "All Categories" : option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="index-count-bar">
        <span className="index-count-text">
          Showing <strong>{visible.length}</strong> of {products.length} chemicals
          {filter !== "All" && <span className="filter-tag-label"> &bull; Category: {filter}</span>}
        </span>
      </div>

      {visible.length > 0 ? (
        <motion.div layout={!reduced} className="entry-card-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((product, position) => (
              <motion.div
                key={product.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{
                  duration: 0.24,
                  delay: reduced ? 0 : Math.min(position * 0.014, 0.24),
                  ease: "linear",
                }}
              >
                <Entry product={product} image={images[product.slug] ?? null} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="index-empty">
          <p className="title t3">No chemical found matching &ldquo;{query}&rdquo;.</p>
          <p className="prose">
            SHIV ENTERPRISES custom sources compounds beyond our primary catalogue. Contact our technical sales team directly at{" "}
            <a href="tel:+917814969998" className="link font-semibold">
              +91 78149 69998
            </a>{" "}
            for immediate availability.
          </p>
          <button
            type="button"
            className="btn btn-ink"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Reset Filters &amp; View All Products
          </button>
        </div>
      )}
    </div>
  );
}
