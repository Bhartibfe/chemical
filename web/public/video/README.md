# Hero background video

The hero video system is already built. It is **off** until you list clips in
`web/lib/hero.ts` — until then the gradient hero renders normally, so the site
is never broken while footage is in production.

## 1 · Generate the clips

Use Google Gemini (Veo), Runway, Kling, or Sora. Generate **4 clips at 8
seconds each, 16:9, 1920×1080, no text, no logos, no people's faces**.

Text is deliberately excluded — the headline lives in HTML above the video, so
it stays crisp, translatable, selectable, and readable by search engines. Text
burned into a video is invisible to all of those.

### Prompt 1 — Water treatment

> Slow cinematic aerial push-in over a modern industrial water treatment
> plant at golden hour. Large circular clarifier tanks with gently rotating
> arms, clean blue-green water, geometric concrete basins. Muted teal and
> steel-blue palette, soft haze, shallow depth of field. Smooth continuous
> camera motion, no cuts, no text, no people. Photorealistic, 8 seconds.

### Prompt 2 — Storage and pipework

> Slow dolly past rows of stainless steel chemical storage tanks and
> polished pipework in an industrial facility. Late afternoon light raking
> across metal surfaces, subtle steam drifting. Deep navy shadows with warm
> amber highlights. Steady tracking shot, shallow depth of field, no text,
> no people. Photorealistic, 8 seconds.

### Prompt 3 — Laboratory quality control

> Extreme close-up, macro. Clear liquid swirling in laboratory glassware on
> a clean white bench, a single drop falling into a beaker in slow motion.
> Crisp reflections, cool neutral lighting with a faint amber rim. Very
> shallow depth of field, slow drift of the camera. No text, no hands, no
> faces. Photorealistic, 8 seconds.

### Prompt 4 — Dispatch

> Slow lateral tracking shot along rows of sealed industrial chemical drums
> and pallets in a clean warehouse, shafts of daylight from high windows,
> dust motes in the air. Desaturated blue-grey palette with warm highlights.
> Smooth steady motion, no text, no logos, no people. Photorealistic,
> 8 seconds.

**One important caution.** These read as generic industrial footage, which is
fine. Do **not** prompt for anything that implies it is the Sardulgarh or
Chandigarh facility, and do not add signage or branding to the footage — an
AI-generated shot presented as your own plant is a misrepresentation a buyer
could hold against you. If you want the real plant on the page, film it; a
plain phone video of the actual site is more persuasive to a procurement
engineer than any generated shot.

## 2 · Encode for the web

Raw exports are far too heavy to autoplay. Target **under 2.5 MB per clip**.

```bash
# MP4 (H.264) — the universal fallback
ffmpeg -i raw-01.mp4 -vf "scale=1920:-2,fps=24" \
  -c:v libx264 -crf 30 -preset slow -profile:v high \
  -movflags +faststart -an hero-01-plant.mp4

# WebM (VP9) — smaller, served first where supported
ffmpeg -i raw-01.mp4 -vf "scale=1920:-2,fps=24" \
  -c:v libvpx-vp9 -crf 38 -b:v 0 -an hero-01-plant.webm
```

`-an` strips audio (the hero is muted anyway, and it saves weight).
`+faststart` moves the index to the front so playback begins before the file
finishes downloading.

### Poster frame — required

```bash
ffmpeg -i hero-01-plant.mp4 -vf "select=eq(n\,0)" -q:v 3 hero-poster.jpg
```

The poster is what Largest Contentful Paint actually measures, and it is what
shows on reduced-motion, data-saver, and slow connections. Never skip it.

## 3 · Wire it up

Put the encoded files in this folder, then edit `web/lib/hero.ts`:

```ts
export const heroClips: HeroClip[] = [
  { mp4: "/video/hero-01-plant.mp4", webm: "/video/hero-01-plant.webm",
    label: "Water treatment clarifier tanks" },
  { mp4: "/video/hero-02-tanks.mp4", webm: "/video/hero-02-tanks.webm",
    label: "Chemical storage tanks and pipework" },
  { mp4: "/video/hero-03-lab.mp4", webm: "/video/hero-03-lab.webm",
    label: "Laboratory quality testing" },
  { mp4: "/video/hero-04-dispatch.mp4", webm: "/video/hero-04-dispatch.webm",
    label: "Sealed drums ready for dispatch" },
];
```

One entry loops like the Tata Chemicals hero. Two or more cross-fade in
sequence. Tune `clipDuration` and `fadeDuration` in the same file.

Then `npm run build` and confirm the routes still report `○ (Static)`.

## What the system already handles

- **Reduced motion** — no video mounts at all; the poster stands in.
- **Data saver / 2G** — same; the clips are never fetched.
- **Autoplay refusal** — caught, poster remains.
- **Only the visible clip decodes** — a four-clip hero costs about what a
  one-clip hero costs.
- **No layout shift** — the section is sized by CSS, not by the video.
- **SEO** — the video is `aria-hidden` and decorative. Headline, lead, stats,
  and buttons are server-rendered HTML above it, so nothing a crawler or an
  AI answer engine needs is inside the video layer.

---

# Option B · A single video

You do not need four files. Three ways to end up with one, worst to best.

## B1 · One prompt, one scene (simplest)

Generate just **Prompt 1** and loop it. Lowest effort, lowest risk — a single
8-second clip is where these models are strongest. The hero loops it
automatically when `heroClips` has one entry.

Downside: the same 8 seconds repeating is noticeable if visitors linger.

## B2 · One prompt, one continuous take

Ask for a single unbroken camera move that travels through the whole plant.
Models handle continuous motion far better than they handle cuts, so describe
a journey, never a sequence of scenes:

> A single continuous cinematic tracking shot moving slowly forward through a
> modern industrial chemical facility at golden hour. The camera glides past
> large circular water treatment clarifier tanks with gently rotating arms,
> continues between tall stainless steel storage tanks and polished pipework
> with soft steam drifting, and finally moves along rows of sealed industrial
> drums in a clean warehouse lit by shafts of daylight. Muted steel-blue and
> teal palette with warm amber highlights, soft atmospheric haze, shallow
> depth of field. One unbroken take, slow steady forward motion, no cuts, no
> text, no logos, no people. Photorealistic, cinematic, 8 seconds.

Ask for "one unbroken take" explicitly. Without it the model invents cuts and
they look cheap.

## B3 · Generate four, stitch into one (recommended)

Best quality and the most control: generate the four scene prompts above,
then merge them into a single file with cross-fades. You get one video, and
each 8-second segment was generated at the length these models do well.

With four 8-second clips and 1-second cross-fades:

```bash
ffmpeg -i hero-01.mp4 -i hero-02.mp4 -i hero-03.mp4 -i hero-04.mp4 \
  -filter_complex \
  "[0][1]xfade=transition=fade:duration=1:offset=7[a]; \
   [a][2]xfade=transition=fade:duration=1:offset=14[b]; \
   [b][3]xfade=transition=fade:duration=1:offset=21[c]" \
  -map "[c]" -c:v libx264 -crf 30 -preset slow \
  -movflags +faststart -an hero-loop.mp4
```

Offsets are cumulative: each is `previous offset + clip length − fade`.
Result is roughly 29 seconds. Re-encode to WebM from that single file, pull
the poster from it, and list one entry in `lib/hero.ts`.

**For a clean loop point**, pick a first and last scene that end on similar
framing and brightness — a dark, slow frame at both ends makes the wrap
invisible. Mismatched ends produce a visible jump every 29 seconds.
