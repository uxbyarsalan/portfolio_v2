"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import AnimateIn from "@/components/AnimateIn";

/**
 * WorkHorizontalScroll
 *
 * v2 home: pins the work section vertically while translating cards horizontally.
 * Falls back to the standard 3-col vertical grid on:
 *   - viewports < 1024px (mobile/tablet)
 *   - users with `prefers-reduced-motion: reduce`
 *
 * Mechanism: sticky inner + transform driven by window scroll progress.
 * Browser does ALL the scrolling — we never preventDefault. Mouse, trackpad,
 * keyboard (PgUp/PgDn/arrows), and assistive tech all work natively.
 *
 * Layout:
 *   - <section> is the "pin stage" — its height equals viewport height + horizontal
 *     track length. Long stage → long scroll → cards translate over that distance.
 *   - <div.sticky> sits at top:64px inside the stage (below the fixed 64px nav),
 *     calc(100vh - 64px) tall, contains the
 *     header + the horizontal track + progress bar.
 *   - As user scrolls past stageTop, progress goes 0 → 1, track translates -X px.
 */
export default function WorkHorizontalScroll({ projects }) {
  // Hide projects flagged with `hidden: true` (e.g. drafts, paused, redacted).
  // Then sort by `order` so the grid can be reordered without rearranging
  // the source data. Projects without `order` fall back to Infinity (sort to end).
  // Filter applies to BOTH the desktop horizontal track AND the mobile/
  // reduced-motion fallback grid below — single source of truth.
  const visibleProjects = projects
    .filter((p) => !p.hidden)
    .slice()
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));

  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [stageHeight, setStageHeight] = useState(null);

  // Decide whether to enable horizontal-scroll behavior.
  // Only on desktop (>=1024px) AND user does not prefer reduced motion.
  useEffect(() => {
    const mqWidth = window.matchMedia("(min-width: 1024px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const evaluate = () => setEnabled(mqWidth.matches && !mqReduced.matches);
    evaluate();
    mqWidth.addEventListener("change", evaluate);
    mqReduced.addEventListener("change", evaluate);
    return () => {
      mqWidth.removeEventListener("change", evaluate);
      mqReduced.removeEventListener("change", evaluate);
    };
  }, []);

  // Compute stage height = (viewport - nav) + horizontal-translate-distance + settle.
  // Sticky lives below the 64px nav, so the math must use the reduced viewport.
  // SETTLE_PX gives the user a "pause moment" at the end where the last card
  // sits stationary while still pinned, before the section unlocks.
  useEffect(() => {
    if (!enabled) {
      setStageHeight(null);
      return;
    }
    const SETTLE_PX = 60;
    const recompute = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackWidth = track.scrollWidth;
      const vw = window.innerWidth;
      // Distance the track must translate so the LAST card is fully visible
      // with comfortable breathing room on both sides.
      // .hscroll-track-wrap has 56px left padding (track starts 56px from left).
      // We want last card's right edge to sit 80px from viewport's right edge.
      // → translate by (trackWidth - vw) + 56 (left pad) + 80 (right margin) = +136.
      const translateDistance = Math.max(0, trackWidth - vw + 136);
      // Stage = sticky height + translate distance + settle.
      // User feels: "I scroll, things slide left, last card lands and sits, then I'm released."
      const stickyH = window.innerHeight - 64;
      setStageHeight(stickyH + translateDistance + SETTLE_PX);
    };
    recompute();
    window.addEventListener("resize", recompute);
    // Recompute after fonts/images settle
    const t = setTimeout(recompute, 200);
    return () => {
      window.removeEventListener("resize", recompute);
      clearTimeout(t);
    };
  }, [enabled, visibleProjects.length]);

  // Drive the transform + progress UI from window scroll position.
  useEffect(() => {
    if (!enabled) return;
    const stage = stageRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!stage || !track) return;

    let raf = 0;

    const SETTLE_PX = 60;
    const update = () => {
      raf = 0;
      const rect = stage.getBoundingClientRect();
      const stageH = stage.offsetHeight;
      const stickyH = window.innerHeight - 64;
      // Effective scrollable distance for the transform = total stage scroll
      // minus the settle zone at the end where cards sit still.
      const scrollableInside = stageH - stickyH - SETTLE_PX;
      // -rect.top = how far past the stage top we've scrolled.
      // Add 64px because the sticky activates at top:64px (below nav), not 0.
      const scrolled = -rect.top - 64;
      let progress = 0;
      if (scrolled <= 0) progress = 0;
      else if (scrolled >= scrollableInside) progress = 1;
      else progress = scrolled / scrollableInside;

      const trackWidth = track.scrollWidth;
      const vw = window.innerWidth;
      const translateDistance = Math.max(0, trackWidth - vw + 136);
      const tx = -progress * translateDistance;
      track.style.transform = `translate3d(${tx}px, 0, 0)`;

      if (fill) fill.style.width = `${progress * 100}%`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, visibleProjects.length]);

  // Fallback: vertical 3-col grid (existing pattern).
  // Used on mobile/tablet AND reduced-motion users.
  if (!enabled) {
    return (
      <section id="work" className="wrapper pt-12 pb-32">
        <div className="project-grid-3">
          {visibleProjects.map((p, i) => (
            <AnimateIn key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} basePath="/work" variant="outlined" />
            </AnimateIn>
          ))}
        </div>
      </section>
    );
  }

  // Pinned horizontal-scroll layout.
  return (
    <section
      id="work"
      ref={stageRef}
      className="hscroll-stage"
      style={stageHeight ? { height: `${stageHeight}px` } : undefined}
    >
      <div className="hscroll-sticky">
        <div className="hscroll-track-wrap">
          <div ref={trackRef} className="hscroll-track">
            {visibleProjects.map((p) => (
              <div key={p.slug} className="hscroll-card">
                <ProjectCard
                  project={p}
                  basePath="/work"
                  variant="outlined"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hscroll-progress">
          <div className="hscroll-progress-bar">
            <div ref={fillRef} className="hscroll-progress-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}
