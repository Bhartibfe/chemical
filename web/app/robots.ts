import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Search crawlers and AI answer engines are both allowed — blocking the
 *  latter would remove the site from ChatGPT, Perplexity, and AI Overviews. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
