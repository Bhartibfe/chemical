import Link from "next/link";
import { categories, categoryMeta, products } from "@/lib/products";

/**
 * Browse-by-category grid.
 *
 * Replaces the passive colour legend that used to sit here. Each tile is a
 * real entry point into the filtered catalogue, so it earns its space twice:
 * it gives a reader something to click, and it gives crawlers six internal
 * links to the category views.
 *
 * Counts are derived, never hand-written, so adding a chemical to
 * lib/products.ts updates the grid on its own.
 */
export default function CategoryGrid() {
  return (
    <ul className="cat-grid">
      {categories.map((category) => {
        const meta = categoryMeta[category];
        const count = products.filter((p) => p.category === category).length;

        return (
          <li key={category}>
            <Link
              href={`/products?category=${encodeURIComponent(category)}`}
              className="cat-tile"
              style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}
            >
              <span className="cat-tile-bar" aria-hidden="true" />
              <span className="cat-tile-body">
                <span className="cat-tile-name">{category}</span>
                <span className="cat-tile-count">
                  {count} {count === 1 ? "product" : "products"}
                </span>
              </span>
              <span className="cat-tile-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
