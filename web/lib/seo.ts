import type { Metadata } from "next";
import { site } from "./site";

type PageMetaInput = {
  /** Unique, keyword-bearing, ≤60 chars once the brand suffix is added. */
  title: string;
  /** ≤155 chars, answer-first, names the entity and the place. */
  description: string;
  /** Path only, e.g. "/products". Becomes the canonical URL. */
  path: string;
  keywords?: string[];
};

/**
 * Trims to a character budget on a word boundary. Search engines cut long
 * descriptions themselves, but they cut mid-word — doing it here keeps the
 * snippet readable.
 */
export function clampWords(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "")}…`;
}

/**
 * Builds page metadata so no route can ship without a unique title,
 * description, and canonical — the three things a duplicate-content
 * penalty is usually made of.
 */
export function pageMeta({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: site.logo, alt: `${site.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [site.logo],
    },
  };
}
