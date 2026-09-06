import { categoryMeta, categories } from "@/lib/products";

/** Line-service key, printed the way a drawing legends its service classes. */
export default function CategoryKey() {
  return (
    <div className="legend">
      <span className="tag-sm legend-title">Service key</span>
      <ul className="legend-list">
        {categories.map((category) => {
          const meta = categoryMeta[category];
          return (
            <li key={category} className="legend-item tag-sm">
              <span
                className="swatch"
                style={{ background: `var(${meta.token})` }}
                aria-hidden="true"
              />
              {meta.code} · {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
