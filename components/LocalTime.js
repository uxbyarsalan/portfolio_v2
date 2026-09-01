"use client";
import { useState, useEffect } from "react";

/**
 * LocalTime — live clock showing current time in Lahore (Asia/Karachi).
 *
 * Renders nothing on the server (returns null until mounted client-side) to
 * prevent React hydration mismatches — the server doesn't know "now" the same
 * way the client does, and even a second's difference causes a hydration error.
 *
 * The clock ticks every second using a setInterval. When the parent passes
 * `hidden={true}` (set by Nav when scroll > 40px), the indicator fades out
 * and stops taking layout space. Same threshold as the rest of the nav's
 * scroll-state transition for synchronized motion.
 *
 * Uses Intl.DateTimeFormat with timeZone: "Asia/Karachi" so the time is
 * always accurate to Lahore regardless of where the visitor is. A recruiter
 * in San Francisco viewing the page at 4am their time sees the actual current
 * time in Lahore — that's the whole point of the indicator.
 *
 * Desktop only: hidden on mobile (md: breakpoint) because the nav is tight.
 *
 * Props:
 *   hidden - when true, fades out and collapses (opacity 0 + max-width 0)
 */
export default function LocalTime({ hidden = false }) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);

    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update(); // initial paint

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pre-mount: render nothing to avoid hydration mismatch.
  // The space this would occupy gets revealed once the client takes over.
  if (!mounted) return null;

  return (
    <div
      // `hidden` collapses the element smoothly. We use opacity + max-width
      // (rather than display:none) so the transition is animated.
      // pointer-events-none when hidden so it doesn't intercept clicks during fade.
      className={`hidden md:flex items-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] overflow-hidden transition-all duration-300 ease-out ${
        hidden ? "opacity-0 max-w-0 ml-0 pointer-events-none" : "opacity-100 max-w-[220px] ml-8"
      }`}
      aria-label={`Local time in Lahore, Pakistan: ${time}`}
    >
      {/* Whitespace inside spans prevents text from being wrapped mid-character
          when the max-width animates. The whole label is one phrase, no wrap. */}
      <span className="whitespace-nowrap">Lahore / {time}</span>
    </div>
  );
}
