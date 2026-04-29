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
 *   - <div.sticky> sits at top:0 inside the stage, always 100vh tall, contains the
 *     header + the horizontal track + progress bar.
 *   - As user scrolls past stageTop, progress goes 0 → 1, track translates -X px.
 */
export default function WorkHorizontalScroll({ projects }) {
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const labelRef = useRef(null);
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

  // Compute stage height = viewport + horizontal-translate-distance, so
  // the user scrolls EXACTLY enough vertical pixels to expose all cards.
  useEffect(() => {
    if (!enabled) {
      setStageHeight(null);
      return;
    }
    const recompute = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackWidth = track.scrollWidth;
      const vw = window.innerWidth;
      // Distance the track needs to translate so the last card aligns to the
      // right edge of the viewport (with a small breathing-room margin).
      const translateDistance = Math.max(0, trackWidth - vw + 56);
      // Stage = 1 viewport (the pinned moment) + translate distance (scroll burned
      // while pinned). User feels: "I scroll, things slide left, then I'm released."
      setStageHeight(window.innerHeight + translateDistance);
    };
    recompute();
    window.addEventListener("resize", recompute);
    // Recompute after fonts/images settle
    const t = setTimeout(recompute, 200);
    return () => {
      window.removeEventListener("resize", recompute);
      clearTimeout(t);
    };
  }, [enabled, projects.length]);

  // Drive the transform + progress UI from window scroll position.
  useEffect(() => {
    if (!enabled) return;
    const stage = stageRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    const label = labelRef.current;
    if (!stage || !track) return;

    let raf = 0;
    const total = projects.length;

    const update = () => {
      raf = 0;
      const rect = stage.getBoundingClientRect();
      const stageH = stage.offsetHeight;
      const vh = window.innerHeight;
      const scrollableInside = stageH - vh;
      // -rect.top = how far past the stage top we've scrolled.
      const scrolled = -rect.top;
      let progress = 0;
      if (scrolled <= 0) progress = 0;
      else if (scrolled >= scrollableInside) progress = 1;
      else progress = scrolled / scrollableInside;

      const trackWidth = track.scrollWidth;
      const vw = window.innerWidth;
      const translateDistance = Math.max(0, trackWidth - vw + 56);
      const tx = -progress * translateDistance;
      track.style.transform = `translate3d(${tx}px, 0, 0)`;

      if (fill) fill.style.width = `${progress * 100}%`;
      if (label) {
        const idx = Math.min(total, Math.max(1, Math.ceil(progress * total) || 1));
        const pad = (n) => String(n).padStart(2, "0");
        label.textContent = `${pad(idx)} / ${pad(total)}`;
      }
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
  }, [enabled, projects.length]);

  // Fallback: vertical 3-col grid (existing pattern).
  // Used on mobile/tablet AND reduced-motion users.
  if (!enabled) {
    return (
      <section id="work" className="wrapper pt-12 pb-32">
        <div className="project-grid-3">
          {projects.map((p, i) => {
            const v2Project = { ...p, image: p.v2Image ?? p.image };
            return (
              <AnimateIn key={p.slug} delay={i * 0.06}>
                <ProjectCard project={v2Project} basePath="/v2/work" variant="outlined" />
              </AnimateIn>
            );
          })}
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
        <div className="hscroll-header">
          <p className="hscroll-eyebrow">Selected work</p>
          <p className="hscroll-subhead">
            Seven government platforms reshaping how Punjab works
          </p>
        </div>

        <div className="hscroll-track-wrap">
          <div ref={trackRef} className="hscroll-track">
            {projects.map((p) => {
              const v2Project = { ...p, image: p.v2Image ?? p.image };
              return (
                <div key={p.slug} className="hscroll-card">
                  <ProjectCard
                    project={v2Project}
                    basePath="/v2/work"
                    variant="outlined"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="hscroll-progress">
          <div className="hscroll-progress-bar">
            <div ref={fillRef} className="hscroll-progress-fill" />
          </div>
          <div className="hscroll-progress-meta">
            <span ref={labelRef}>
              01 / {String(projects.length).padStart(2, "0")}
            </span>
            <span className="hscroll-progress-hint">scroll &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
