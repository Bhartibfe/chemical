import fs from "node:fs";
import path from "node:path";

/**
 * Which product photos actually exist.
 *
 * All 29 images will not land at once, so the card checks this instead of
 * pointing at a file and hoping. A missing photo falls back to a tinted
 * plate rather than a broken image icon, which means images can be dropped
 * in one at a time without the catalogue ever looking broken.
 *
 * Server-only — it must never be imported from a Client Component, or
 * `node:fs` ends up in the browser bundle and the build fails. Pages resolve
 * the images and pass them down as props.
 */
const dir = path.join(process.cwd(), "public", "products");

function read(): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/**
 * Production reads once — the set cannot change after a build, and 29 stat
 * calls per page render would be waste. Development re-reads every time, so
 * a newly dropped image shows up on refresh instead of needing a server
 * restart, which is exactly the trap this hit the first time.
 */
const production = process.env.NODE_ENV === "production";
const cached = production ? read() : null;
const files = () => cached ?? read();

const stems = (ext: string) =>
  new Set(
    files()
      .filter((f) => f.toLowerCase().endsWith(ext))
      .map((f) => f.slice(0, -ext.length)),
  );

export type ProductImage = { src: string; webp?: string };

export function productImage(slug: string): ProductImage | null {
  const jpg = stems(".jpg");
  const webp = stems(".webp");

  if (jpg.has(slug)) {
    return {
      src: `/products/${slug}.jpg`,
      webp: webp.has(slug) ? `/products/${slug}.webp` : undefined,
    };
  }
  if (webp.has(slug)) return { src: `/products/${slug}.webp` };
  return null;
}

/** Every available image keyed by slug, for passing into a Client Component. */
export function productImageMap(slugs: string[]) {
  const map: Record<string, ProductImage> = {};
  for (const slug of slugs) {
    const image = productImage(slug);
    if (image) map[slug] = image;
  }
  return map;
}
