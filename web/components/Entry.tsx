import Link from "next/link";
import { categoryMeta, type Product } from "@/lib/products";

export default function Entry({ product }: { product: Product }) {
  const meta = categoryMeta[product.category];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="entry-card"
      style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}
    >
      <div className="entry-card-header">
        <span className="entry-card-cat-badge" style={{ backgroundColor: `var(${meta.token})` }}>
          {product.category}
        </span>
        {product.formula && (
          <span className="entry-card-formula">
            {product.formula}
          </span>
        )}
      </div>

      <div className="entry-card-body">
        <h3 className="entry-card-title">{product.name}</h3>
        <p className="entry-card-applications">
          {product.applications[0]}
          {product.applications.length > 1 ? ` · +${product.applications.length - 1} applications` : ''}
        </p>
      </div>

      <div className="entry-card-footer">
        <span className="entry-card-action">
          View Specifications &rarr;
        </span>
      </div>
    </Link>
  );
}
