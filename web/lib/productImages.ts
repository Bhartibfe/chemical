import fs from "node:fs";
import path from "node:path";

/**
 * Which product photos actually exist, resolved once at build time.
 *
 * All 29 images will not land at once, so the card checks this instead of
 * pointing at a file and hoping. A missing photo falls back to a tinted
 * plate rather than a broken image icon, which means images can be dropped
 * in one at a time without the catalogue ever looking broken.
 *
 * Server-only — it must never be imported from a Client Component, or
 * `node:fs` ends up in the browser bundle and the build fails. Pages resolve
 * the images and pass them down as props instead.
 */
const dir = path.join(process.cwd(), "public", "products");

const files = (() => {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
})();

const byExtension = (ext: string) =>
  new Set(
    files
      .filter((f) => f.toLowerCase().endsWith(ext))
      .map((f) => f.slice(0, -ext.length)),
  );

const webp = byExtension(".webp");
const jpg = byExtension(".jpg");

export type ProductImage = { src: string; webp?: string };

export function productImage(slug: string): ProductImage | null {
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
