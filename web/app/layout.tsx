import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFab from "@/components/WhatsAppFab";
import { globalSchemas } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
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
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd schema={globalSchemas} />
      </head>
      <body className="antialiased selection:bg-amber-500 selection:text-slate-950">
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
