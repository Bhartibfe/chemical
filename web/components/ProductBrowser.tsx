"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Vessel from "./Vessel";
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

  // Keeps typing responsive while the tank farm re-renders.
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
      {/* Isolation valves — the filter row, drawn as a valve manifold. */}
      <div className="manifold">
        <div className="manifold-search">
          <label htmlFor="product-search" className="tag-sm">
            Search stream
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

        <div
          className="manifold-valves"
          role="group"
          aria-label="Filter by service class"
        >
          {filters.map((option) => {
            const active = filter === option;
            const meta = option === "All" ? null : categoryMeta[option];
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className="valve tag-sm"
                data-active={active}
                aria-pressed={active}
              >
                <span className="valve-symbol" aria-hidden="true">
                  <span
                    className="valve-body"
                    style={
                      meta
                        ? ({ background: `var(${meta.token})` } as React.CSSProperties)
                        : undefined
                    }
                  />
                </span>
                {meta ? meta.code : "ALL"}
              </button>
            );
          })}
        </div>
      </div>

      <p className="tag-sm stream-count" role="status" aria-live="polite">
        {String(visible.length).padStart(2, "0")} / {products.length} vessels
        online
        {filter !== "All" && ` · ${filter}`}
      </p>

      {visible.length > 0 ? (
        <div className="farm">
          {/* Distribution header the vessels hang from. */}
          <span className="farm-header" aria-hidden="true" />
          <motion.ul layout={!reduced} className="farm-grid">
            <AnimatePresence mode="popLayout">
              {visible.map(({ product, index }, position) => (
                <motion.li
                  key={product.slug}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{
                    duration: 0.26,
                    delay: reduced ? 0 : Math.min(position * 0.02, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Vessel product={product} index={index} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      ) : (
        <div className="no-flow">
          <p className="draft t3">No vessel matches “{query}”</p>
          <p className="prose">
            SHIV ENTERPRISES sources beyond this plant inventory. Call{" "}
            <a href="tel:+917814969998" className="data link">
              +91 78149 69998
            </a>{" "}
            and we will confirm availability.
          </p>
          <button
            type="button"
            className="btn btn-line"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Reopen all valves
          </button>
        </div>
      )}
    </>
  );
}
