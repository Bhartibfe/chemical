import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductVisual from "./ProductVisual";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card card-interactive product-card"
    >
      <div className="product-visual">
        <ProductVisual name={product.name} category={product.category} />
      </div>

      <div className="product-body">
        <div className="product-head">
          <h3 className="product-name">{product.name}</h3>
          {product.formula && (
            <span className="product-formula">{product.formula}</span>
          )}
        </div>

        <p className="product-desc">{product.desc}</p>

        <div className="product-foot">
          <span className="chip chip-accent">{product.tag}</span>
          <ArrowUpRight size={16} className="product-arrow" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
