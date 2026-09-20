# Hero background video

The hero video system is already built. It is **off** until you list clips in
`web/lib/hero.ts` — until then the gradient hero renders normally, so the site
is never broken while footage is in production.

## The rule that decides every prompt below

SHIV ENTERPRISES is a **chemical supply business with two offices**, not a
manufacturer with a plant. So:

> **Shoot tight, never wide.**

Wide shots — aerial views of treatment works, rows of stainless tank farms,
cavernous warehouses — advertise scale you do not have. A procurement buyer
who sees that footage and then deals with a two-office supplier feels misled,
and that costs you the account.

Close-ups do the opposite. Macro of the product, the drum lid, the sample
bottle, the light on a liquid — these say *care, purity, handling*, which is
exactly what a good supplier competes on and what a big distributor cannot
claim as convincingly. Tight footage is both the honest choice and the
better-looking one.

Also: **no branding, no signage, no readable documents, no faces.** Nothing
that implies the footage is your Sardulgarh or Chandigarh premises.

## Choose the wash first — it decides the prompt

`heroScrim` in `web/lib/hero.ts` controls how the footage blends in:

| Mode | Look | Footage it needs |
| --- | --- | --- |
| `"light"` *(default)* | Near-white veil; video is a soft ghost behind dark navy text. Hero stays part of the white page. | **Bright, high-key, pale.** Shot on white, minimal shadows. |
| `"dark"` | Deep navy veil; text flips to white. The Tata treatment. | Almost anything. Moody and contrasty works best. |

Get this backwards and the hero looks muddy: dark footage under a light wash
turns grey, and pale footage under a dark wash loses all detail. Pick the
mode, then use the matching prompts below.

## Option A · Four clips — LIGHT wash (matches the white theme)

Generate **8 seconds each, 16:9, 1920×1080**. Every prompt asks explicitly
for high-key lighting and a white background, because that is what keeps the
hero bright.

### Prompt 1 — Liquid, macro, high-key

> Extreme macro close-up of clear liquid swirling gently in a glass beaker
> standing on a bright white surface. High-key lighting, soft diffused
> daylight from above, pale airy palette, almost no shadows, clean white
> background. A faint cool blue tint in the liquid is the only colour in
> frame. Very shallow depth of field, slow steady camera, no cuts, no text,
> no hands, no branding. Photorealistic, 8 seconds.

### Prompt 2 — Crystals, macro, high-key

> Extreme macro close-up of white chemical crystals and flakes on a white
> surface, shifting and settling very slowly. Bright diffused studio
> lighting, high-key, white on white with only the faintest grey shadows
> defining the grains. Very shallow depth of field, slow gentle motion, no
> cuts, no text, no hands. Photorealistic, 8 seconds.

### Prompt 3 — Glassware, macro, high-key

> Slow macro tracking shot past clean laboratory glassware — a beaker, a
> measuring cylinder, a stoppered sample bottle — arranged on a white
> surface against a white background. Bright soft daylight, high-key, pale
> and airy, delicate highlights on the glass edges. Very shallow depth of
> field, slow lateral motion, no cuts, no text, no hands, no labels.
> Photorealistic, 8 seconds.

### Prompt 4 — Pour, macro, high-key

> Extreme macro close-up of a clear liquid being poured slowly into a glass
> beaker on a white surface. High-key lighting, bright and airy, white
> background, soft highlights catching the falling stream and the ripples.
> Very shallow depth of field, slow steady camera, no cuts, no text, no
> hands, no branding. Photorealistic, 8 seconds.

**Keywords that do the work here:** *high-key, bright diffused light, white
background, pale airy palette, minimal shadows.* Leave them out and the model
defaults to a dark moody studio look, which is the opposite of what the light
wash needs.

## Option A2 · Four clips — DARK wash

Use these only if you set `heroScrim = "dark"`.

Generate **8 seconds each, 16:9, 1920×1080**.

### Prompt 1 — Liquid, macro

> Extreme macro close-up of a clear chemical liquid being poured slowly into
> a glass laboratory beaker on a plain dark surface. Light catches the
> falling stream and the ripples spreading across the surface. Soft neutral
> daylight from one side, uncluttered background falling out of focus. Very
> shallow depth of field, slow steady camera, no cuts, no text, no hands, no
> branding. Photorealistic, 8 seconds.

### Prompt 2 — Solid product, macro

> Extreme macro close-up of white chemical flakes and crystals slowly
> shifting and settling, filling the frame. Crisp texture detail, individual
> grains catching the light. Cool neutral lighting with a faint warm rim,
> dark background. Very shallow depth of field, slow gentle motion, no cuts,
> no text, no hands. Photorealistic, 8 seconds.

### Prompt 3 — Sealed drums, tight

> Slow close-up tracking shot moving across the tops of sealed blue HDPE
> chemical drums, focusing on the ribbed lids and metal clamp rings. Plain
> unbranded drums, no labels. Warm side light, soft shadows, neutral
> background falling out of focus. Slow lateral motion, shallow depth of
> field, no text, no logos, no people. Photorealistic, 8 seconds.

### Prompt 4 — Sample and paperwork, tight

> Close-up of a small glass sample bottle of clear liquid on a clean work
> surface beside a folded paper document, lit by soft daylight from a window
> off frame. Faint dust visible in the light. The camera drifts slowly
> closer. Shallow depth of field, no legible text, no faces, no branding.
> Photorealistic, 8 seconds.

## Option B · A single video

You do not need four files. Three ways to one, worst to best.

### B1 · One prompt, one scene

Generate **Prompt 1** alone and loop it. Lowest effort, lowest risk — eight
seconds is where these models are strongest, and a macro pour loops well
because there is no establishing geography to jump. The hero loops
automatically when `heroClips` has one entry.

### B2 · One prompt, one continuous take

Describe a **journey across a surface**, never a list of scenes. Models
handle continuous motion far better than cuts:

> A single continuous macro tracking shot moving slowly across a clean work
> surface: past a glass bottle of clear liquid, over a small heap of white
> chemical crystals catching the light, and ending on the ribbed lid of a
> sealed blue drum. Soft daylight from one side, plain dark background
> falling out of focus. One unbroken take, slow steady motion, very shallow
> depth of field, no cuts, no text, no logos, no people, no branding.
> Photorealistic, cinematic, 8 seconds.

For the **light wash** (the default), use this instead:

> A single continuous macro tracking shot moving slowly across a clean white
> surface: past a glass bottle of clear liquid, over a small heap of white
> chemical crystals catching the light, ending on a glass beaker. High-key
> lighting, bright diffused daylight, pale airy palette, white background,
> almost no shadows. One unbroken take, slow steady motion, very shallow
> depth of field, no cuts, no text, no logos, no people, no branding.
> Photorealistic, cinematic, 8 seconds.

Keep "one unbroken take" in the prompt. Without it the model invents cuts and
they look cheap.

### B3 · Generate four, stitch into one (recommended)

Best quality and control: generate the four prompts above, then merge with
cross-fades. One file, but each segment generated at the length these models
handle well.

```bash
ffmpeg -i hero-01.mp4 -i hero-02.mp4 -i hero-03.mp4 -i hero-04.mp4 \
  -filter_complex \
  "[0][1]xfade=transition=fade:duration=1:offset=7[a]; \
   [a][2]xfade=transition=fade:duration=1:offset=14[b]; \
   [b][3]xfade=transition=fade:duration=1:offset=21[c]" \
  -map "[c]" -c:v libx264 -crf 30 -preset slow \
  -movflags +faststart -an hero-loop.mp4
```

Offsets are cumulative: `previous offset + clip length − fade`. Result is
roughly 29 seconds. For a clean loop, pick first and last shots with similar
brightness and framing — mismatched ends give a visible jump on every wrap.

## Option C · No AI video at all

Worth considering seriously. A short clip filmed on a phone — actual stock on
your shelves, a drum being sealed, product poured into a sample jar, an order
going onto a vehicle — will out-persuade any generated footage with a
procurement engineer, because it is real and it is *yours*. Shoot it tight,
hold the phone steady, 10 seconds is plenty, and the same encoding recipe
below applies.

The gradient hero also stands on its own. Video is an enhancement here, not a
requirement.

## Encode for the web

Raw exports are far too heavy to autoplay. Target **under 2.5 MB per clip**.

```bash
# MP4 (H.264) — the universal fallback
ffmpeg -i raw-01.mp4 -vf "scale=1920:-2,fps=24" \
  -c:v libx264 -crf 30 -preset slow -profile:v high \
  -movflags +faststart -an hero-01.mp4

# WebM (VP9) — smaller, served first where supported
ffmpeg -i raw-01.mp4 -vf "scale=1920:-2,fps=24" \
  -c:v libvpx-vp9 -crf 38 -b:v 0 -an hero-01.webm
```

`-an` strips audio (the hero is muted anyway). `+faststart` moves the index to
the front so playback begins before the file finishes downloading.

### Poster frame — required

```bash
ffmpeg -i hero-01.mp4 -vf "select=eq(n\,0)" -q:v 3 hero-poster.jpg
```

The poster is what Largest Contentful Paint actually measures, and it is what
shows under reduced motion, data saver, and slow connections. Never skip it.

## Wire it up

Put the encoded files here, then edit `web/lib/hero.ts`:

```ts
export const heroClips: HeroClip[] = [
  { mp4: "/video/hero-01.mp4", webm: "/video/hero-01.webm",
    label: "Chemical liquid poured into a beaker" },
];
```

One entry loops. Two or more cross-fade in sequence; tune `clipDuration` and
`fadeDuration` in the same file. Then `npm run build` and confirm the routes
still report `○ (Static)`.

## What the system already handles

- **Reduced motion** — no video mounts at all; the poster stands in.
- **Data saver / 2G** — same; the clips are never fetched.
- **Autoplay refusal** — caught, poster remains.
- **Only the visible clip decodes** — four clips cost about what one costs.
- **No layout shift** — the section is sized by CSS, not by the video.
- **SEO** — the video is `aria-hidden` and decorative. Headline, lead, stats,
  and buttons are server-rendered HTML above it, so nothing a crawler or an
  AI answer engine needs sits inside the video layer.
