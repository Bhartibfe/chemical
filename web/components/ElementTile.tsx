import Link from "next/link";
import { categoryMeta, type Product } from "@/lib/products";

/**
 * A catalogue entry drawn as a periodic-table cell: index number, category
 * stripe, formula, name, category code.
 *
 * Chemicals already have a universal visual language — formula and symbol —
 * so the tile uses that instead of decorative artwork. It reads correctly to a
 * procurement engineer, needs no image request, and scales to any width.
 */
export default function ElementTile({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const meta = categoryMeta[product.category];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="tile"
      style={{ "--stripe": `var(${meta.token})` } as React.CSSProperties}
    >
      <span className="tile-top">
        <span className="tile-num data">{String(index + 1).padStart(2, "0")}</span>
        <span className="tile-stripe" aria-hidden="true" />
      </span>

      <span className="tile-formula data">
        {product.formula ?? meta.abbr}
      </span>

      <span className="tile-name">{product.name}</span>

      <span className="tile-foot mono-sm">{meta.code}</span>
    </Link>
  );
}
