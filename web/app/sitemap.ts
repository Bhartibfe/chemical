import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/products", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    // One entry per chemical — these are the pages that rank for
    // "<chemical> supplier Punjab" style searches.
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
