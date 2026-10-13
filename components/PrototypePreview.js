"use client";
import { useState, useEffect } from "react";

/**
 * PrototypePreview — the "try it on your phone" block at the end of an
 * exploration case study.
 *
 * The explorations are mobile products, so the honest way to show one is on a
 * real phone, not in a frame on a laptop. This block adapts:
 *   - Desktop: a QR code that opens the live prototype on the viewer's phone,
 *     plus a small "or open on this screen" link.
 *   - Mobile: no QR (you can't scan your own screen), a button that opens the
 *     prototype full-screen on the same device.
 *
 * Props (all optional; defaults are Stockpilot's, so the existing page keeps
 * working unchanged):
 *   url      the prototype route
 *   qr       the QR image path
 *   blurb    one line about what to try
 */
export default function PrototypePreview({
  url = "/explorations/stockpilot/prototype",
  qr = "/explorations/stockpilot-qr.svg",
  blurb = "Reorder a product from the Today screen and watch the state carry across the planner and the reorder tracker.",
}) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="bg-[var(--color-bg-card)] rounded-2xl p-8 md:p-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Try it yourself</p>

      {isMobile === null && <div className="h-[150px]" aria-hidden="true" />}

      {isMobile === true && (
        <div>
          <p className="text-lg font-medium mb-2">You&rsquo;re on the right device.</p>
          <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.7] mb-6 max-w-md">Open the full prototype and walk it. {blurb}</p>
          <a href={url} className="btn-fill inline-block text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5">
            Open the prototype
          </a>
        </div>
      )}

      {isMobile === false && (
        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          <div className="bg-white rounded-xl p-4 border border-[var(--color-border)] shrink-0">
            <img src={qr} alt="QR code to open the prototype on your phone" width={140} height={140} className="block w-[140px] h-[140px]" />
          </div>
          <div>
            <p className="text-lg font-medium mb-2">Best viewed on your phone.</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.7] mb-4 max-w-sm">This is a mobile product. Scan the code to open the live prototype on your device, then walk it. {blurb}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--color-text-muted)] underline underline-offset-4 hover:text-[var(--color-text)] transition-colors">
              or open on this screen
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
