"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, X } from "lucide-react";
import ProductCard from "./ProductCard";
import { categories, products, type Category } from "@/lib/products";

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

export default function ProductBrowser() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const initialFilter: Filter = filters.includes(requested as Filter)
    ? (requested as Filter)
    : "All";

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const reduced = useReducedMotion();

  // Keeps typing responsive while the 29-card grid re-renders.
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(
    () => products.filter((p) => matches(p, deferredQuery, filter)),
    [deferredQuery, filter],
  );

  return (
    <>
      <div className="browser-controls">
        <div className="search-field">
          <Search size={18} aria-hidden="true" className="search-icon" />
          <label htmlFor="product-search" className="visually-hidden">
            Search industrial chemicals by name, formula, or use
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, formula or use…"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="search-clear"
              aria-label="Clear search"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="filter-row" role="group" aria-label="Filter by category">
          {filters.map((option) => {
            const active = filter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className="filter-chip"
                data-active={active}
                aria-pressed={active}
              >
                {option}
                {active && !reduced && (
                  <motion.span
                    layoutId="filter-pill"
                    className="filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen readers get the result count; the original page changed
          silently. */}
      <p className="result-count" role="status" aria-live="polite">
        Showing {visible.length} of {products.length} chemicals
      </p>

      {visible.length > 0 ? (
        <motion.ul layout={!reduced} className="product-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((product, i) => (
              <motion.li
                key={product.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.32,
                  delay: reduced ? 0 : Math.min(i * 0.03, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProductCard product={product} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="empty-state">
          <p className="h3">No chemical matches “{query}”.</p>
          <p className="prose-muted">
            SHIV ENTERPRISES sources beyond this catalogue. Call{" "}
            <a href="tel:+917814969998">+91 78149 69998</a> and we will confirm
            availability.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
