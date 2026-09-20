import { categoryMeta, categories } from "@/lib/products";

export default function CategoryKey() {
  return (
    <div className="category-key-container">
      <span className="category-key-label">Chemical Subject Categories:</span>
      <div className="category-key-pills">
        {categories.map((category) => {
          const meta = categoryMeta[category];
          return (
            <span key={category} className="category-key-pill">
              <span
                className="category-dot"
                style={{ background: `var(${meta.token})` }}
                aria-hidden="true"
              />
              {category}
            </span>
          );
        })}
      </div>
    </div>
  );
}
