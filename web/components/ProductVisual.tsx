import type { Category } from "@/lib/products";

/**
 * Generated product artwork.
 *
 * Real product photography does not exist for this catalogue, and stock photos
 * of unrelated glassware would be worse than nothing. Instead each chemical
 * gets a deterministic vector illustration: a category glyph plus a molecular
 * node pattern seeded by the product name, so every card looks distinct while
 * the set still reads as one system.
 *
 * Vectors also mean no image requests, no layout shift, and colours that
 * follow the active theme through `currentColor` and the accent token.
 */

/** Stable per-name seed, so a product's artwork never changes between builds. */
function seedFrom(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const glyphs: Record<Category, React.ReactNode> = {
  "Water Treatment": (
    <>
      <path
        d="M100 44c0 0-19 21-19 33a19 19 0 0 0 38 0c0-12-19-33-19-33Z"
        fill="none"
        strokeWidth="2.5"
      />
      <path d="M74 96a34 34 0 0 0 52 0" fill="none" strokeWidth="1.5" opacity=".5" />
      <path d="M64 108a54 54 0 0 0 72 0" fill="none" strokeWidth="1.5" opacity=".28" />
    </>
  ),
  Acids: (
    <>
      <path
        d="M88 40v22L69 100a10 10 0 0 0 9 15h44a10 10 0 0 0 9-15l-19-38V40"
        fill="none"
        strokeWidth="2.5"
      />
      <path d="M82 40h36" strokeWidth="2.5" />
      <path d="M77 92h46" strokeWidth="1.5" opacity=".55" />
      <circle cx="92" cy="102" r="3" strokeWidth="0" fill="currentColor" opacity=".5" />
      <circle cx="108" cy="105" r="2" strokeWidth="0" fill="currentColor" opacity=".4" />
    </>
  ),
  "Alkalis & Salts": (
    <>
      <rect x="76" y="52" width="24" height="24" fill="none" strokeWidth="2.2" />
      <rect x="100" y="52" width="24" height="24" fill="none" strokeWidth="2.2" opacity=".6" />
      <rect x="76" y="76" width="24" height="24" fill="none" strokeWidth="2.2" opacity=".6" />
      <rect x="100" y="76" width="24" height="24" fill="none" strokeWidth="2.2" />
      <circle cx="100" cy="76" r="3.5" fill="currentColor" strokeWidth="0" />
    </>
  ),
  "Bleaching & Oxidising": (
    <>
      <circle cx="100" cy="78" r="20" fill="none" strokeWidth="2.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="100"
          y1="46"
          x2="100"
          y2="54"
          strokeWidth="2.2"
          strokeLinecap="round"
          transform={`rotate(${deg} 100 78)`}
          opacity={deg % 90 === 0 ? 0.9 : 0.45}
        />
      ))}
    </>
  ),
  Surfactants: (
    <>
      <circle cx="88" cy="82" r="16" fill="none" strokeWidth="2.4" />
      <circle cx="115" cy="70" r="11" fill="none" strokeWidth="2.2" opacity=".7" />
      <circle cx="116" cy="95" r="7" fill="none" strokeWidth="2" opacity=".5" />
      <circle cx="83" cy="76" r="3.5" fill="currentColor" strokeWidth="0" opacity=".45" />
    </>
  ),
  Specialty: (
    <>
      <path
        d="M100 50l22 13v26l-22 13-22-13V63z"
        fill="none"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="76" r="6" fill="none" strokeWidth="2.2" />
      <path d="M100 50v14M122 63l-16 9M122 89l-16-9M100 102V88M78 89l16-9M78 63l16 9" strokeWidth="1.4" opacity=".45" />
    </>
  ),
};

type Props = {
  name: string;
  category: Category;
  className?: string;
};

export default function ProductVisual({ name, category, className }: Props) {
  const seed = seedFrom(name);
  const gradientId = `pv-${seed.toString(36)}`;

  // Three orbiting nodes, positioned deterministically per product.
  const nodes = [0, 1, 2].map((i) => {
    const angle = ((seed >> (i * 4)) % 360) * (Math.PI / 180);
    const radius = 44 + ((seed >> (i * 3)) % 16);
    return {
      cx: 100 + Math.cos(angle) * radius,
      cy: 78 + Math.sin(angle) * radius * 0.62,
      r: 2.5 + ((seed >> i) % 3),
    };
  });

  return (
    <svg
      viewBox="0 0 200 156"
      className={className}
      role="img"
      aria-label={`${name} — ${category} illustration`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.13" />
          <stop offset="100%" stopColor="var(--brand-cyan)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <rect width="200" height="156" fill={`url(#${gradientId})`} />

      <g stroke="var(--accent)" opacity="0.35">
        {nodes.map((node, i) => (
          <circle key={i} cx={node.cx} cy={node.cy} r={node.r} fill="var(--accent)" strokeWidth="0" />
        ))}
        <path
          d={`M${nodes[0].cx} ${nodes[0].cy}L${nodes[1].cx} ${nodes[1].cy}L${nodes[2].cx} ${nodes[2].cy}`}
          fill="none"
          strokeWidth="1"
        />
      </g>

      <g stroke="var(--accent)" color="var(--accent)" strokeLinecap="round">
        {glyphs[category]}
      </g>
    </svg>
  );
}
