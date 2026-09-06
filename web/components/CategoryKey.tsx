import { categoryMeta, categories } from "@/lib/products";

/** The chart legend. Printed under the index the way a real key would be. */
export default function CategoryKey() {
  return (
    <ul className="cat-key">
      {categories.map((category) => {
        const meta = categoryMeta[category];
        return (
          <li key={category} className="tag">
            <span
              className="swatch"
              style={{ background: `var(${meta.token})` }}
              aria-hidden="true"
            />
            {meta.code} — {category}
          </li>
        );
      })}
    </ul>
  );
}
