import { categoryMeta, categories } from "@/lib/products";

/** Subject key, printed the way a reference book legends its classes. */
export default function CategoryKey() {
  return (
    <div className="subject-key">
      <p className="apparatus-sm subject-key-title">Subject classes</p>
      <ul className="subject-key-list">
        {categories.map((category) => {
          const meta = categoryMeta[category];
          return (
            <li key={category} className="subject-key-item">
              <span
                className="mark"
                style={{ background: `var(${meta.token})` }}
                aria-hidden="true"
              />
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
