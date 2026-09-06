"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Entry from "./Entry";
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
      <div className="finder">
        <div className="finder-search">
          <label htmlFor="product-search" className="apparatus-sm">
            Search the index
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Headword, formula or application…"
            autoComplete="off"
          />
        </div>

        <div className="finder-filters" role="group" aria-label="Filter by subject">
          {filters.map((option) => {
            const active = filter === option;
            const meta = option === "All" ? null : categoryMeta[option];
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className="finder-filter apparatus-sm"
                data-active={active}
                aria-pressed={active}
              >
                {meta && (
                  <span
                    className="mark"
                    style={{ background: `var(${meta.token})` }}
                    aria-hidden="true"
                  />
                )}
                {option === "All" ? "All subjects" : option}
              </button>
            );
          })}
        </div>
      </div>

      <p className="apparatus-sm index-count" role="status" aria-live="polite">
        {visible.length} of {products.length} entries
        {filter !== "All" && ` · ${filter}`}
      </p>

      {visible.length > 0 ? (
        <motion.div layout={!reduced} className="index-list">
          <AnimatePresence mode="popLayout">
            {visible.map(({ product, index }, position) => (
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
                <Entry product={product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="index-empty">
          <p className="title t3">No entry under “{query}”.</p>
          <p className="prose">
            SHIV ENTERPRISES sources beyond this handbook. Call{" "}
            <a href="tel:+917814969998" className="link">
              +91 78149 69998
            </a>{" "}
            and we will confirm availability.
          </p>
          <button
            type="button"
            className="btn btn-plain"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Show all entries
          </button>
        </div>
      )}
    </>
  );
}
