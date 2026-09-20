# Product image prompts — all 29, ready to paste

Every prompt below is **complete**. Copy one, paste it into the generator,
save the result under the filename above it. Nothing to assemble.

## What to generate

| | |
| --- | --- |
| Aspect | **2:3 portrait** (1024 x 1536) — what the generator returns by default |
| Filename | `<slug>.png`, exactly as shown above each prompt |
| Save to | `web/public/products/` |

1:2 is the ideal shape for the card slot, but 2:3 is close enough that the
conversion crops it cleanly, and it is what the generator gives without a
fight. Do not hand-resize — the command below handles it.

## Composition, and why it matters

Subject in the **right two thirds**, left third **clean empty background**.

```
 +--------+------------------+
 | empty  |                  |
 | left   |     SUBJECT      |
 | third  |                  |
 +--------+------------------+
   fades        stays visible
```

The card runs the photo *under* the copy and dissolves its left side into
the card. That dissolve covers roughly the left third — keep it empty and it
lands on background rather than eating the subject. Proven already with
sodium hypochlorite.

## After generating — one command

Drop the raw PNGs into `web/public/products/` named by slug, then from that
folder run:

```bash
CROP="scale=512:1024:force_original_aspect_ratio=increase,crop=512:1024:iw-512:(ih-1024)/2"
for f in *.png; do
  [ -e "$f" ] || continue
  base="${f%.*}"
  ffmpeg -v error -i "$f" -vf "$CROP" -q:v 6 "$base.jpg" -y
  ffmpeg -v error -i "$f" -vf "$CROP" -c:v libwebp -quality 72 "$base.webp" -y
  rm -f "$f"
done
```

It **crops, never scales to fit**. Scaling a 2:3 source into 1:2 squashes the
subject 25% narrower — that was caught on the first image. `iw-512` takes the
whole reduction off the empty left band.

Result per image: about **24 KB JPEG and 11 KB WebP** from a ~1.5 MB PNG.

## Two rules

- **No labels or branding in frame.** A generated label is a fake product
  label, and on a supplier's own catalogue that reads as misrepresentation.
- **Keep the real colour.** Sulphur is yellow, ferrous sulphate is blue-green,
  LABSA is dark brown. A procurement engineer knows what these look like;
  getting it wrong costs more credibility than no photo would.

---

## Water Treatment

### `sodium-hypochlorite.png` — Sodium Hypochlorite

> A tall glass laboratory beaker holding a pale greenish-yellow transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `poly-aluminium-chloride.png` — Poly Aluminium Chloride

> A shallow white ceramic dish holding pale yellow-white free-flowing powder. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `hydrazine-hydrate.png` — Hydrazine Hydrate

> A clear glass reagent bottle with a ground-glass stopper holding a colourless transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `polyacrylamide-pam.png` — Polyacrylamide (PAM)

> A shallow white ceramic dish holding translucent white coarse granules, like fine gravel. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `ferrous-sulphate.png` — Ferrous Sulphate

> A shallow white ceramic dish holding pale blue-green crystalline granules. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `sodium-sulphite.png` — Sodium Sulphite

> A shallow white ceramic dish holding fine white powder, softly mounded. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `calcium-hypochlorite.png` — Calcium Hypochlorite

> A shallow white ceramic dish holding white compressed granules and small round tablets. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

### `ferric-alum.png` — Ferric Alum

> A shallow white ceramic dish holding pale straw-yellow chunky crystals. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale blue.

## Acids

### `sulphuric-acid.png` — Sulphuric Acid

> A conical glass Erlenmeyer flask holding a colourless, slightly oily-looking transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale rose pink.

### `hydrochloric-acid.png` — Hydrochloric Acid

> A straight-sided glass beaker holding a colourless transparent liquid, faint vapour above the surface. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale rose pink.

### `acetic-acid.png` — Acetic Acid

> A clear glass reagent bottle with a glass stopper holding a colourless transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale rose pink.

### `phosphoric-acid.png` — Phosphoric Acid

> A glass beaker holding a colourless, thick, syrupy transparent liquid with a slow viscous surface. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale rose pink.

### `nitric-acid.png` — Nitric Acid

> An amber glass reagent bottle beside a small glass beaker of pale yellow transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale rose pink.

## Alkalis & Salts

### `caustic-lye.png` — Caustic Lye

> A glass beaker holding a clear colourless slightly viscous liquid with a faint meniscus. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

### `caustic-soda-flakes.png` — Caustic Soda Flakes

> A white ceramic bowl holding bright white flat irregular flakes. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

### `sodium-chloride.png` — Sodium Chloride

> A white ceramic bowl holding coarse white crystalline salt with individual cubic crystals visible. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

### `soda-ash-light.png` — Soda Ash Light

> A shallow white ceramic dish holding very fine, light, fluffy white powder. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

### `soda-ash-dense.png` — Soda Ash Dense

> A shallow white ceramic dish holding dense white granules, coarser and heavier than powder. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

### `hydrated-lime.png` — Hydrated Lime

> A shallow white ceramic dish holding ultra-fine chalky white powder, smoothly mounded. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

### `calcium-chloride.png` — Calcium Chloride

> A white ceramic bowl holding white pellets and small round prills. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale lavender.

## Bleaching & Oxidising

### `hydrogen-peroxide.png` — Hydrogen Peroxide

> A clear glass beaker holding a colourless transparent liquid with fine bubbles rising. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale mint green.

### `sodium-hydrosulphite.png` — Sodium Hydrosulphite

> A shallow white ceramic dish holding off-white to very pale cream fine powder. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale mint green.

### `sodium-metabisulphite.png` — Sodium Metabisulphite

> A shallow white ceramic dish holding white crystalline powder with a slight sparkle. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale mint green.

### `sodium-bisulphite.png` — Sodium Bisulphite

> A glass beaker holding a colourless transparent liquid beside a small mound of white powder. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale mint green.

## Surfactants

### `labsa-96-percent.png` — LABSA 96%

> A glass beaker holding a thick dark amber-brown viscous liquid with a slow heavy pour texture. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale magenta.

### `cocamidopropyl-betaine.png` — Cocamidopropyl Betaine

> A glass beaker holding a pale straw-yellow viscous liquid with light foam on the surface. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale magenta.

## Specialty

### `sulphur.png` — Sulphur

> A shallow white ceramic dish holding vivid bright yellow powder and small granules. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale amber.

### `ammonia.png` — Ammonia

> A clear glass reagent bottle with a stopper holding a colourless transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale amber.

### `green-acid.png` — Green Acid

> A glass beaker holding a clear green transparent liquid. Studio product photograph. Soft diffused daylight from the upper left, gentle shadow falling to the lower right. Shot at eye level. Subject placed in the right two thirds of the frame, filling about 70% of the height, with the left third left as clean empty background. Shallow depth of field, background softly out of focus. Bright, clean, high-key. No text, no labels, no branding, no hands, no people. Photorealistic, sharp focus on the subject, tall 2:3 portrait. Background tinted very pale amber.
