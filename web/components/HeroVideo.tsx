"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { clipDuration, fadeDuration, heroClips, heroPoster } from "@/lib/hero";

/**
 * Background video for the hero.
 *
 * Decorative only. Every word of the hero — headline, lead, stats, buttons —
 * is server-rendered HTML sitting above this layer, so crawlers, AI answer
 * engines, and anyone on a slow line get the full message whether or not a
 * single frame ever plays. The element is `aria-hidden` for the same reason.
 *
 * Playback is suppressed, leaving the poster, when any of these hold:
 *   · the visitor prefers reduced motion
 *   · the browser reports Save-Data or a 2G/slow-3G connection
 *   · no clips are configured yet
 *
 * Nothing is rendered on the server: the poster is painted by CSS on the
 * section itself, so there is no layout shift when video takes over.
 */

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

function shouldSuppress() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const connection = (
    navigator as Navigator & { connection?: NetworkInfo }
  ).connection;
  if (!connection) return false;
  if (connection.saveData) return true;
  return (
    connection.effectiveType === "slow-2g" || connection.effectiveType === "2g"
  );
}

/** Re-evaluate if the visitor changes their motion preference mid-visit. */
function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function HeroVideo() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Server always renders nothing; the client decides once it can read the
  // motion preference and the connection. Using an external store rather than
  // state-in-effect avoids a cascading render on every mount.
  const enabled = useSyncExternalStore(
    subscribeToMotion,
    () => heroClips.length > 0 && !shouldSuppress(),
    () => false,
  );

  // Advance through the clips, cross-fading. A single clip just loops and
  // never enters this rotation.
  useEffect(() => {
    if (!enabled || heroClips.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroClips.length);
    }, clipDuration);

    return () => window.clearInterval(timer);
  }, [enabled]);

  // Only the visible clip decodes frames; the rest stay paused so a
  // four-clip hero costs roughly what a one-clip hero costs.
  useEffect(() => {
    if (!enabled) return;

    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        video.currentTime = 0;
        void video.play().catch(() => {
          // Autoplay refused (some mobile low-power modes). The poster stays,
          // which is a perfectly good hero.
        });
      } else {
        video.pause();
      }
    });
  }, [active, enabled]);

  if (!enabled) return null;

  return (
    <div className="hero-video" aria-hidden="true">
      {heroClips.map((clip, i) => (
        <video
          key={clip.mp4}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className="hero-video-clip"
          data-active={i === active}
          style={{ transitionDuration: `${fadeDuration}ms` }}
          poster={heroPoster}
          muted
          playsInline
          loop={heroClips.length === 1}
          preload={i === 0 ? "auto" : "none"}
          autoPlay={i === 0}
          tabIndex={-1}
        >
          {clip.webm && <source src={clip.webm} type="video/webm" />}
          <source src={clip.mp4} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
