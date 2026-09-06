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
- **Preserve the design.** The navy/cyan palette, the Inter typeface, and the
  existing layout are the brand. Improve within it; don't restyle on a whim.
- Ask before touching real business data, pricing, or client names.

## Design system (from the existing site — keep these tokens)

```
--navy    #060e1f      --accent   #00c3ff     --text   #e8edf5
--navy2   #0b1a35      --accent2  #0080ff     --muted  #7a90b0
--navy3   #102248      --green    #00e676     --radius 14px
```
Typeface: **Inter** (300–800). Dark theme, cyan accent, glass-style cards
(`rgba(255,255,255,.04)` on a `rgba(0,195,255,.12)` border).

## React migration (planned, not started)

Target: **Vite + React + TypeScript**, or **Next.js** if SSR/SSG is wanted —
and for a content site whose whole point is SEO/GEO, Next.js static export is
the stronger default because the crawler gets real HTML.

Rules for the migration when it happens:
1. `weeebbbb.html` is read-only input. Build alongside it; delete nothing.
2. One component per section, mirroring the existing IDs.
3. Move the `products` array to a typed data module — don't scatter it.
4. Every meta tag, JSON-LD block, and heading level survives the port intact.
   Losing SEO markup in a refactor is a bug, not a detail.
5. Content must be server-rendered or pre-rendered — never client-only.

## Specialist agents

Delegate to these (defined in `.claude/agents/`):

| Agent | Use for |
| ----- | ------- |
| `ui-designer` | Layout, visual design, design tokens, component look |
| `motion-engineer` | Animation, scroll effects, micro-interactions |
| `react-architect` | React/Next structure, the HTML→React migration, performance |
| `seo-geo-specialist` | Copy, metadata, JSON-LD, AI-search visibility |
| `a11y-auditor` | WCAG 2.2 AA, keyboard, contrast, screen readers |
