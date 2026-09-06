import Link from "next/link";
import { categoryMeta, type Product } from "@/lib/products";

/**
 * One indexed entry, set as a line of a printed index: entry number,
 * headword, dot leader, formula. Scanning a column of these is how a reader
 * actually uses a reference handbook.
 */
export default function Entry({
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
      className="entry"
      style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}
    >
      <span className="folio entry-number">{String(index + 1).padStart(2, "0")}</span>

      <span className="entry-head">
        <span className="entry-word">{product.name}</span>
        <span className="apparatus-sm entry-subject">{product.category}</span>
      </span>

      <span className="entry-leader" aria-hidden="true" />

      <span className="entry-formula">{product.formula ?? meta.abbr}</span>
    </Link>
  );
}
