# SHIV ENTERPRISES — Website

Marketing + lead-generation website for **SHIV ENTERPRISES**, an ISO 9001:2015
certified industrial chemical supplier based in Sardulgarh, Mansa, Punjab, with
a second office in Chandigarh. Sells to power plants, railways, defence, water
treatment, and textile sectors across India.

## Current state

| Path             | What it is                                                    |
| ---------------- | ------------------------------------------------------------- |
| `weeebbbb.html`  | The live single-file site (~1660 lines): inline CSS, inline JS, inline JSON-LD. **Source of truth for content, copy, and design.** |

A React migration is planned. Until it lands, `weeebbbb.html` stays the
reference — read it before changing anything, and never delete it.

### Sections (in order)
`hero` → `#about` → `#products` → `#industries` → `#testimonials` →
`#clients` → `#contact` + sticky WhatsApp float button.

Products (26) are rendered client-side from a `products` array in the inline
`<script>` (name / desc / icon / tag) with a live search filter, plus an
`IntersectionObserver` for scroll-reveal.

## Business facts (never invent or alter these)

- **Name:** SHIV ENTERPRISES
- **Domain:** https://theshiventerprises.co.in/
- **Phone / WhatsApp:** +91 78149 69998
- **Email:** shivventerprisess@gmail.com
- **Registered address:** Sardulgarh, Mansa, Punjab 151507, IN
- **Office:** 6th Floor, Elante Mall Offices, Industrial Area Phase-I, Chandigarh 160002, IN
- **Certification:** ISO 9001:2015
- **Stats shown on site:** 26+ products, 7+ major clients, 8+ industries, 100% quality assured

Contact details, addresses, certifications, and client names are real business
data. If a change would touch them, ask first.

## Non-negotiable rule: every word ships SEO + GEO ready

This is the owner's top priority. **No text goes into this site — heading, body
copy, alt text, button label, meta tag, or component string — unless it is
written for both search engines (SEO) and generative/AI engines (GEO/AEO).**
This applies to new copy and to copy you merely move during refactors.

**SEO floor for every page/route:**
- Unique `<title>` (≤60 chars) and `meta description` (≤155 chars) carrying a
  real keyword, not filler.
- One `<h1>` per page; `h2`/`h3` in a real hierarchy — never chosen for styling.
- Canonical URL, Open Graph + Twitter card, `geo.region` / `geo.placename`.
- Descriptive `alt` on every image; descriptive link text (never "click here").
- Valid JSON-LD. The site already ships `Organization`; keep and extend it
  (`LocalBusiness`, `Product`, `BreadcrumbList`, `FAQPage` where they fit).
- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), crawlable
  content, no text locked behind JS-only rendering.

**GEO/AEO floor (how AI engines quote you):**
- Lead with a direct, self-contained answer — an AI engine must be able to lift
  one sentence and have it stand alone.
- State entities explicitly. Write "SHIV ENTERPRISES supplies sodium
  hypochlorite for water treatment in Punjab", not "we supply it".
- Prefer specific, checkable facts (ISO 9001:2015, Sardulgarh Punjab, 26+
  products) over adjectives ("best", "world-class").
- Structure for extraction: short paragraphs, clear Q&A phrasing, comparison
  tables, definition-style openers.
- Keep the local signal strong and consistent — Punjab, Mansa, Sardulgarh,
  Chandigarh, India — matching the NAP data above exactly.

Use the `seo-optimizer`, `seo-aeo-audit`, and `generative-engine-optimization`
skills for anything copy- or metadata-shaped.

## Working rules

- **Never overwrite.** Prefer additive change. Don't rewrite a working file
  wholesale when an edit will do; don't replace `weeebbbb.html`.
- **Smallest reusable change.** Extract a shared component instead of pasting a
  second copy.
- **Keep code clean.** No dead code, no commented-out blocks, no stray
  `console.log`. Match the surrounding style.
- **Preserve the design.** The logo-derived navy/cyan palette and the Swiss
  minimal layout are the brand. Improve within it; don't restyle on a whim.
- Ask before touching real business data, pricing, or client names.

The original `weeebbbb.html` used a different, darker palette (`#060e1f` navy,
`#00c3ff` cyan, Inter). That file stays as a content reference only — the live
design system below supersedes it.

## The live app (`web/`)

Stack: **Next.js 16 + React 19 + TypeScript + Tailwind 4 + Motion + Lucide**.
All 39 routes are statically prerendered, so crawlers and AI engines receive
complete HTML — that is the whole reason for the framework choice. Keep it so.

```
web/
  app/       layout.tsx (fonts, theme script, global JSON-LD)
             page.tsx  products/  products/[slug]/  industries/  about/  contact/
             globals.css (tokens + base) · components.css (component styles)
             sitemap.ts · robots.ts
  components/ Header ThemeToggle Footer WhatsAppFab · Unit (the process line)
              ProductBrowser Vessel CategoryKey · Reveal JsonLd EnquiryForm
  lib/       site.ts (NAP single source of truth) · products.ts (29 items,
             slug + category + formula + applications + categoryMeta)
             content.ts · schema.ts · seo.ts
```

Client Components only where interaction demands it: `Header`, `ThemeToggle`,
`ProductBrowser`, `EnquiryForm`, `Reveal`. Everything else is server-rendered.
After any change run `npm run build` from `web/` and confirm routes still show
`○ (Static)` / `● (SSG)`.

### Design system — "The Process Flow Plant"

The site is drawn as a **piping & instrumentation diagram**. Material enters
at the top, is tested, stored, branched to sectors, and dispatched. Every
section is a tagged plant unit on one continuous process line. This is
deliberate and it is what keeps the site from looking generated. Hold it.

House rules, in order of importance:

1. **Every section is a `<Unit>`.** It takes an ISA-style equipment tag
   (`TK-301`), a service name, and an optional note. The component draws the
   pipework in the left gutter; new sections go through it, never around it.
2. **The pipework is decorative, the content is not.** All diagram elements
   are CSS with `aria-hidden`; every word is ordinary HTML beside them. Never
   put copy inside the diagram — it would hide it from crawlers, AI answer
   engines, and screen readers.
3. **No `border-radius`, no `box-shadow`** — except instrument bubbles and
   status lamps, which are round on a real P&ID. Structure comes from ruled
   lines.
4. **Every tag, code, unit, formula and value is monospace.** `IBM Plex Mono`
   sets all data; `Barlow Condensed`, uppercase, is the drafting lettering for
   headings.
5. **Sheet, not brand wash.** Light is vellum `#eef0ec`; dark is a backlit
   drawing board `#07131c`. The logo's navy `#00243C` is the line colour and
   cyan `#1496C8` is `--flow`, the product moving in the pipe.
6. **The catalogue is a tank farm.** `Vessel` draws each chemical as a tagged
   storage vessel hanging off a distribution header — nozzle stub, equipment
   number, formula, service class, level indicator. The formula is the
   artwork; no decorative illustration is invented.

Unit tags in use: `AN-201` quality, `TK-301` storage, `MN-401` distribution,
`PK-501` dispatch, `CP-601` control room, `ST-101`/`DS-102` stream sheets.
Keep new tags in the same ISA form.

Six service colours (`--svc-water`, `--svc-acid`, …) are the only permitted
accent hues; `CategoryKey` prints the legend.

**The flow animation is the concept**, so its reduced-motion path is explicit:
the pipework stays drawn, the product stops moving. Never animate anything
that would hide content if the animation failed.

Light and dark are both first-class. `data-theme` on `<html>` is the single
source of truth, set before first paint by the inline script in `layout.tsx`
and flipped by `ThemeToggle`. Define new colours as tokens in `globals.css`
under both `:root` and `:root[data-theme="dark"]` — never hardcode a hex in a
component.

**No icon library and no emoji.** Both were removed on purpose; the drawing
language uses tags, rules, and symbols. Do not reintroduce them.

### Standing rules

1. `weeebbbb.html` is read-only reference. Never edit or delete it.
2. Business facts change in `lib/site.ts` only — copy, metadata, and JSON-LD
   all read from it, which is what keeps NAP consistent.
3. Every page ships a unique title, description, and canonical via
   `pageMeta()` in `lib/seo.ts`. A new route without it is a bug.
4. Every meta tag, JSON-LD block, and heading level must survive any refactor.
   Losing SEO markup is a bug, not a detail.
5. Never make content client-only, and never hide it behind an animation start
   state — `Reveal` server-renders its children and no-ops under
   `prefers-reduced-motion`.

**Missing asset:** `web/public/brochure.pdf` is not in the repo. The logo is in
place at `web/public/logo.png`.

## Specialist agents

Delegate to these (defined in `.claude/agents/`):

| Agent | Use for |
| ----- | ------- |
| `ui-designer` | Layout, visual design, design tokens, component look |
| `motion-engineer` | Animation, scroll effects, micro-interactions |
| `react-architect` | React/Next structure, the HTML→React migration, performance |
| `seo-geo-specialist` | Copy, metadata, JSON-LD, AI-search visibility |
| `a11y-auditor` | WCAG 2.2 AA, keyboard, contrast, screen readers |
