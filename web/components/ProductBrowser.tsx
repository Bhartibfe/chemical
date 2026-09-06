"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ElementTile from "./ElementTile";
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

export default function ProductBrowser() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const initialFilter: Filter = filters.includes(requested as Filter)
    ? (requested as Filter)
    : "All";

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const reduced = useReducedMotion();

  // Keeps typing responsive while the full index re-renders.
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(
    () =>
      products
        .map((product, index) => ({ product, index }))
        .filter(({ product }) => matches(product, deferredQuery, filter)),
    [deferredQuery, filter],
  );

  return (
    <>
      <div className="index-controls">
        <div className="index-search">
          <label htmlFor="product-search" className="mono index-search-label">
            Search
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Name, formula or application…"
            autoComplete="off"
            className="data"
          />
        </div>

        <div className="index-filters" role="group" aria-label="Filter by category">
          {filters.map((option) => {
            const active = filter === option;
            const meta = option === "All" ? null : categoryMeta[option];
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className="index-filter mono"
                data-active={active}
                aria-pressed={active}
              >
                {meta && (
                  <span
                    className="swatch"
                    style={{ background: `var(${meta.token})` }}
                    aria-hidden="true"
                  />
                )}
                {meta ? meta.code : "ALL"}
              </button>
            );
          })}
        </div>
      </div>

      <p className="index-count mono" role="status" aria-live="polite">
        {String(visible.length).padStart(2, "0")} / {products.length} entries
        {filter !== "All" && ` · ${filter}`}
      </p>

      {visible.length > 0 ? (
        <motion.ul layout={!reduced} className="tile-grid">
          <AnimatePresence mode="popLayout">
            {visible.map(({ product, index }, position) => (
              <motion.li
                key={product.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{
                  duration: 0.24,
                  delay: reduced ? 0 : Math.min(position * 0.018, 0.28),
                  ease: "linear",
                }}
              >
                <ElementTile product={product} index={index} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="index-empty">
          <p className="display d3">No entry matches “{query}”</p>
          <p className="prose">
            SHIV ENTERPRISES sources beyond this index. Call{" "}
            <a href="tel:+917814969998" className="data link">
              +91 78149 69998
            </a>{" "}
            and we will confirm availability.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Reset index
          </button>
        </div>
      )}
    </>
  );
}
