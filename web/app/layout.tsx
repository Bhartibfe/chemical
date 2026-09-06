import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { allSchemas } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title:
    "Industrial Chemical Supplier in Punjab & Chandigarh India | SHIV ENTERPRISES",
  description:
    "Shiv Enterprises is a trusted industrial chemical supplier in Punjab, India. We supply water treatment chemicals, acids, alkalis, boiler chemicals, textile chemicals, and industrial raw materials across India.",
  keywords: [
    "industrial chemicals Punjab",
    "chemical supplier India",
    "water treatment chemicals",
    "sulphuric acid supplier",
    "caustic soda flakes",
    "Shiv Enterprises",
    "Sardulgarh chemical supplier",
    "Chandigarh chemical supplier",
    "industrial chemicals Chandigarh",
    "textile chemicals India",
    "boiler chemicals supplier",
    "industrial raw materials Punjab",
    "hydrochloric acid supplier India",
  ],
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "SHIV ENTERPRISES — Industrial Chemical Solutions",
    description:
      "Premium industrial chemical supplier serving power plants, railways, defence, textile and water treatment sectors.",
    url: `${site.url}/`,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/logo.jpg", alt: `${site.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIV ENTERPRISES — Industrial Chemical Solutions",
    description: "Trusted supplier of industrial chemicals across India.",
    images: ["/logo.jpg"],
  },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Punjab, Chandigarh",
    language: "English",
    distribution: "global",
    rating: "general",
  },
};

export const viewport: Viewport = {
  themeColor: "#060e1f",
  width: "device-width",
  initialScale: 1,
};

/** Marks JS as available before first paint, so the scroll-reveal start state
 *  never applies to crawlers or no-JS visitors. */
const jsFlag = `document.documentElement.classList.add("js")`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
