import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFab from "@/components/WhatsAppFab";
import { globalSchemas } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

/** Source Serif 4 is a book face — it sets the running text and every
 *  heading. Source Sans 3 carries only the apparatus: running heads, folios,
 *  and small-cap labels. */
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Industrial Chemical Supplier in Punjab & Chandigarh | SHIV ENTERPRISES",
    template: `%s | ${site.name}`,
  },
  description:
    "SHIV ENTERPRISES is an ISO 9001:2015 certified industrial chemical supplier in Sardulgarh, Punjab. Water treatment chemicals, acids, alkalis and surfactants delivered across India.",
  keywords: [
    "industrial chemicals Punjab",
    "chemical supplier India",
    "water treatment chemicals",
    "sulphuric acid supplier",
    "caustic soda flakes",
    "Shiv Enterprises",
    "Sardulgarh chemical supplier",
    "Chandigarh chemical supplier",
    "textile chemicals India",
    "boiler chemicals supplier",
    "hydrochloric acid supplier India",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Sardulgarh, Punjab, Chandigarh",
    language: "English",
    distribution: "global",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#14110e" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Resolves the theme before first paint so there is no flash of the wrong
 *  palette. Runs ahead of hydration and owns `data-theme` outright. */
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      data-theme="light"
      className={`${sourceSerif.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd schema={globalSchemas} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
