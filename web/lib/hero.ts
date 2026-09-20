/**
 * Hero background video configuration.
 *
 * Drop encoded clips into `web/public/video/` and list them here. The hero
 * adapts automatically:
 *
 *   []                  → no video layer at all; the designed gradient hero
 *                         renders exactly as it does today. Nothing breaks
 *                         while the clips are still being produced.
 *   [one clip]          → that clip loops, the way tatachemicals.com does it.
 *   [three or four]     → they play in sequence, cross-fading between each.
 *
 * See `web/public/video/README.md` for the generation prompts and the ffmpeg
 * encoding recipe that keeps these files small enough to autoplay.
 */

export type HeroClip = {
  /** Path under /public. Supply webm first — browsers pick the first they can play. */
  webm?: string;
  mp4: string;
  /** Spoken-word-free description, used for the accessible label. */
  label: string;
};

export const heroClips: HeroClip[] = [
  {
    mp4: "/video/hero-samples.mp4",
    webm: "/video/hero-samples.webm",
    label:
      "Amber, blue and yellow chemical samples in laboratory glassware on a white surface",
  },
];

/**
 * First frame of the first clip, shown before playback starts and wherever
 * video is suppressed (reduced motion, data saver, no JS). Always set — it is
 * what the Largest Contentful Paint actually measures.
 */
export const heroPoster = "/video/hero-poster.jpg";

/**
 * How the video is blended into the hero.
 *
 *   "light" — a near-white wash over the footage; the video reads as a soft
 *             ghost behind dark navy text. Matches the white site theme, and
 *             needs bright, high-key footage to look intentional.
 *   "dark"  — a deep navy wash; text flips to white. The Tata Chemicals
 *             treatment. Works with almost any footage, but the hero becomes
 *             a dark band above a white page.
 */
export const heroScrim: "light" | "dark" = "light";

/** Milliseconds each clip holds before cross-fading to the next. */
export const clipDuration = 6000;

/** Cross-fade length. Kept long enough to read as a dissolve, not a cut. */
export const fadeDuration = 1200;
