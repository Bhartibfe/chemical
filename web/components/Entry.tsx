import Link from "next/link";
import { categoryMeta, type Product } from "@/lib/products";
import type { ProductImage } from "@/lib/productImages";

/**
 * Catalogue card.
 *
 * Formula pill and photo tint are both keyed to the product's category, so
 * the card reads as belonging to a class at a glance. The photo bleeds to the
 * right edge; until one exists for this chemical the same space becomes a
 * tinted plate carrying the formula, so the grid never shows a gap or a
 * broken image while the set is being produced.
 */
export default function Entry({
  product,
  image = null,
}: {
  product: Product;
  /** Resolved by the page, not looked up here — this component renders
   *  inside a Client Component on /products, where fs is unavailable. */
  image?: ProductImage | null;
}) {
  const meta = categoryMeta[product.category];
  // The lead line and the tick list must not repeat the same application.
  const [lead, ...rest] = product.applications;
  const uses = rest.slice(0, 3);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="pcard"
      style={{ "--subject": `var(${meta.token})` } as React.CSSProperties}
    >
      <div className="pcard-body">
        <span className="pcard-pill">{product.formula ?? product.category}</span>

        <h3 className="pcard-name">{product.name}</h3>
        <p className="pcard-use">For {lead.toLowerCase()}</p>

        <ul className="pcard-uses">
          {uses.map((use) => (
            <li key={use}>
              <svg className="pcard-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3.5 8.5l3 3 6-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{use}</span>
            </li>
          ))}
        </ul>

        <span className="pcard-link">
          View Details <span aria-hidden="true">&rarr;</span>
        </span>
      </div>

      <div className="pcard-media">
        {image ? (
          <picture>
            {image.webp && <source srcSet={image.webp} type="image/webp" />}
            <img
              src={image.src}
              alt={`${product.name} supplied by SHIV ENTERPRISES`}
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <span className="pcard-media-fallback" aria-hidden="true">
            {product.formula ?? meta.abbr}
          </span>
        )}
      </div>
    </Link>
  );
}
