# Product image prompts — all 29 chemicals

Generate one image per chemical. Filenames must match the slug exactly, or
the card will fall back to a plain tint.

## Spec

| | |
| --- | --- |
| Aspect | **1:1 square** |
| Size | **1024 × 1024** |
| Format | JPG from the generator; convert to WebP before committing |
| Filename | `<slug>.jpg` — slugs listed below, e.g. `sodium-hypochlorite.jpg` |
| Location | this folder, `web/public/products/` |

## The style block — paste this after every subject line

This is what makes 29 separately generated images look like one set. Do not
vary it, and do not let the generator "improve" it between runs.

> Studio product photograph on a clean seamless background. Soft diffused
> daylight from the upper left, gentle shadow falling to the lower right.
> Shot at eye level, subject centred, filling about 70% of the frame with
> clear space around it. Shallow depth of field, background softly out of
> focus. Bright, clean, high-key. No text, no labels, no branding, no hands,
> no people. Photorealistic, sharp focus on the subject, 1:1 square.

## Background tint per category

Append the tint line for that chemical's category, so each card's photo
agrees with its formula pill.

| Category | Append |
| --- | --- |
| Water Treatment | `Background tinted very pale blue.` |
| Acids | `Background tinted very pale rose pink.` |
| Alkalis & Salts | `Background tinted very pale lavender.` |
| Bleaching & Oxidising | `Background tinted very pale mint green.` |
| Surfactants | `Background tinted very pale magenta.` |
| Specialty | `Background tinted very pale amber.` |

Keep the tint *pale* — it sits behind a white card and a coloured pill, and a
saturated background will fight both.

---

## Subject lines

Colours below are the genuine appearance of each chemical. Using them keeps
the catalogue honest and makes the set look like real product photography
rather than stock.

### Water Treatment — pale blue tint

**`sodium-hypochlorite.jpg`**
> A tall glass laboratory beaker holding a pale greenish-yellow transparent liquid.

**`poly-aluminium-chloride.jpg`**
> A shallow white ceramic dish holding pale yellow-white free-flowing powder.

**`hydrazine-hydrate.jpg`**
> A clear glass reagent bottle with a ground-glass stopper holding a colourless transparent liquid.

**`polyacrylamide-pam.jpg`**
> A shallow white ceramic dish holding translucent white coarse granules, like fine gravel.

**`ferrous-sulphate.jpg`**
> A shallow white ceramic dish holding pale blue-green crystalline granules.

**`sodium-sulphite.jpg`**
> A shallow white ceramic dish holding fine white powder, softly mounded.

**`calcium-hypochlorite.jpg`**
> A shallow white ceramic dish holding white compressed granules and small round tablets.

**`ferric-alum.jpg`**
> A shallow white ceramic dish holding pale straw-yellow chunky crystals.

### Acids — pale rose pink tint

**`sulphuric-acid.jpg`**
> A conical glass Erlenmeyer flask holding a colourless, slightly oily-looking transparent liquid.

**`hydrochloric-acid.jpg`**
> A straight-sided glass beaker holding a colourless transparent liquid, faint vapour above the surface.

**`acetic-acid.jpg`**
> A clear glass reagent bottle with a glass stopper holding a colourless transparent liquid.

**`phosphoric-acid.jpg`**
> A glass beaker holding a colourless, thick, syrupy transparent liquid, slow viscous surface.

**`nitric-acid.jpg`**
> An amber glass reagent bottle beside a small glass beaker of pale yellow transparent liquid.

### Alkalis & Salts — pale lavender tint

**`caustic-lye.jpg`**
> A glass beaker holding a clear colourless liquid, slightly viscous, faint meniscus.

**`caustic-soda-flakes.jpg`**
> A white ceramic bowl holding bright white flat irregular flakes.

**`sodium-chloride.jpg`**
> A white ceramic bowl holding coarse white crystalline salt, individual cubic crystals visible.

**`soda-ash-light.jpg`**
> A shallow white ceramic dish holding very fine, light, fluffy white powder.

**`soda-ash-dense.jpg`**
> A shallow white ceramic dish holding dense white granules, coarser and heavier than powder.

**`hydrated-lime.jpg`**
> A shallow white ceramic dish holding ultra-fine chalky white powder, smoothly mounded.

**`calcium-chloride.jpg`**
> A white ceramic bowl holding white pellets and small round prills.

### Bleaching & Oxidising — pale mint green tint

**`hydrogen-peroxide.jpg`**
> A clear glass beaker holding a colourless transparent liquid with fine bubbles rising.

**`sodium-hydrosulphite.jpg`**
> A shallow white ceramic dish holding off-white to very pale cream fine powder.

**`sodium-metabisulphite.jpg`**
> A shallow white ceramic dish holding white crystalline powder with a slight sparkle.

**`sodium-bisulphite.jpg`**
> A glass beaker holding a colourless transparent liquid beside a small mound of white powder.

### Surfactants — pale magenta tint

**`labsa-96-percent.jpg`**
> A glass beaker holding a thick dark amber-brown viscous liquid, slow heavy pour texture.

**`cocamidopropyl-betaine.jpg`**
> A glass beaker holding a pale straw-yellow viscous liquid with light foam on the surface.

### Specialty — pale amber tint

**`sulphur.jpg`**
> A shallow white ceramic dish holding vivid bright yellow powder and small granules.

**`ammonia.jpg`**
> A clear glass reagent bottle with a stopper holding a colourless transparent liquid.

**`green-acid.jpg`**
> A glass beaker holding a clear green transparent liquid.

---

## Worked example

Full prompt for `sulphur.jpg`:

> A shallow white ceramic dish holding vivid bright yellow powder and small
> granules. Studio product photograph on a clean seamless background. Soft
> diffused daylight from the upper left, gentle shadow falling to the lower
> right. Shot at eye level, subject centred, filling about 70% of the frame
> with clear space around it. Shallow depth of field, background softly out
> of focus. Bright, clean, high-key. No text, no labels, no branding, no
> hands, no people. Photorealistic, sharp focus on the subject, 1:1 square.
> Background tinted very pale amber.

## Before committing

Generated files are far too heavy to ship 29 of. Convert and resize:

Generators usually hand back a PNG of 1-2 MB. Drop the raw files in this
folder under their slug name and run this once. It takes any `.png` or
`.jpg`, writes the optimised pair, and removes the heavy original:

```bash
# from web/public/products/
for f in *.png *.jpg; do
  [ -e "$f" ] || continue
  base="${f%.*}"
  ffmpeg -v error -i "$f" -vf "scale=640:640" -q:v 6 "$base.out.jpg" -y
  ffmpeg -v error -i "$f" -vf "scale=640:640" -c:v libwebp -quality 72 "$base.webp" -y
  rm -f "$f"; mv "$base.out.jpg" "$base.jpg"
done
```

Measured on the first image: **1.27 MB PNG became 20 KB JPEG and 9 KB WebP**,
with no visible loss at the size the card renders it.

640px is ample — the card renders these at roughly 200px, and the browser
picks the WebP where supported. Target **under 60 KB each**; 29 images at
that size is under 1.8 MB for the whole catalogue, and they lazy-load below
the fold.

## Two rules

- **No labels or branding in frame.** A generated label is a fake product
  label, and on a supplier's own catalogue that reads as misrepresentation.
- **Keep the real colour.** Sulphur is yellow, ferrous sulphate is blue-green,
  LABSA is dark brown. A procurement engineer knows what these look like, and
  getting it wrong costs more credibility than a missing photo would.
