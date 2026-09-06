"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { products, type Product } from "@/lib/products";

function matches(product: Product, query: string) {
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.desc.toLowerCase().includes(q) ||
    product.tag.toLowerCase().includes(q)
  );
}

export default function Products() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => (query ? products.filter((p) => matches(p, query)) : products),
    [query],
  );

  return (
    <section id="products">
      <div className="container">
        <p className="section-label">What We Supply</p>
        <h2 className="section-title">Our Product Range</h2>
        <p className="section-sub">
          SHIV ENTERPRISES supplies {products.length} industrial chemicals for
          water treatment, manufacturing, power generation and more — delivered
          across India.
        </p>

        <div className="search-bar">
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <label className="visually-hidden" htmlFor="product-search">
            Search industrial chemicals
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        {/* Announces filtering to screen readers — the original page changed
            the grid silently. */}
        <p className="visually-hidden" role="status" aria-live="polite">
          {filtered.length} of {products.length} products shown
        </p>

        {filtered.length > 0 ? (
          <ul className="products-grid">
            {filtered.map((product) => (
              <Reveal as="li" className="product-card" key={product.name}>
                <span className="product-icon" aria-hidden="true">
                  {product.icon}
                </span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <span className="product-tag">{product.tag}</span>
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="no-results">
            No products match “{query}”. Call {""}
            <a href="tel:+917814969998">+91 78149 69998</a> and we will source it
            for you.
          </p>
        )}
      </div>
    </section>
  );
}
