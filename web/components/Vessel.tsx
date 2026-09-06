import Link from "next/link";
import { categoryMeta, type Product } from "@/lib/products";

/**
 * A catalogue entry drawn as a storage vessel on the tank farm.
 *
 * The nozzle stub on top and the service stripe below match the way a P&ID
 * tags a vessel: equipment number, contents, service class. The formula is the
 * contents label — chemicals already have a universal visual language, so no
 * decorative artwork is invented for them.
 */
export default function Vessel({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const meta = categoryMeta[product.category];
  const tag = `V-${String(index + 1).padStart(3, "0")}`;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="vessel"
      style={{ "--svc": `var(${meta.token})` } as React.CSSProperties}
    >
      <span className="vessel-nozzle" aria-hidden="true" />

      <span className="vessel-shell">
        <span className="vessel-head">
          <span className="tag-sm vessel-tag">{tag}</span>
          <span className="tag-sm vessel-svc">{meta.code}</span>
        </span>

        <span className="data vessel-formula">
          {product.formula ?? meta.abbr}
        </span>

        <span className="vessel-name">{product.name}</span>

        <span className="vessel-level" aria-hidden="true">
          <span className="vessel-fill" />
        </span>
      </span>
    </Link>
  );
}
