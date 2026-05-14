"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LocalTime from "./LocalTime";

/**
 * Site nav.
 *
 * Simplified after the v18.30 reorganization: no v1/v2 toggle, no path-based
 * version awareness. There's one site now, all routes live at root.
 *
 * Stays a client component because of the scroll listener for the
 * scrolled-state background blur, and the mobile menu open/close state.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#work", label: "Work" },
    { href: "/#my-story", label: "My Story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-[var(--color-border)]" : "border-transparent"}`}>
      <div className="wrapper flex items-center justify-between" style={{ paddingTop: 0, paddingBottom: 0, height: "64px" }}>
        {/*
          Left side: logo + live local-time indicator.
          The time is wrapped in its own component to keep the clock interval
          isolated from the rest of the nav. It accepts `hidden` driven by the
          same `scrolled` state that triggers the nav's background blur — so
          when the user scrolls past 40px, the time fades and the nav becomes
          more compact in one synchronized transition.
        */}
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <Image src="/images/logo-aa.svg" alt="Arsalan Aslam" width={48} height={32} className="h-8 w-auto" />
          </Link>
          <LocalTime hidden={scrolled} />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              {l.label}
            </Link>
          ))}
          {/*
            Resume nav unit — visually one slot, two click targets.
            - "Resume" text → /resume page (same styling as other nav links)
            - Light grey vertical divider — communicates "two things here"
            - Down arrow icon → /resume.pdf direct download (with `download` attr)
            Hover: both elements darken from text-muted to text, matching the other links.
            Accessibility: icon link has aria-label so screen readers distinguish it from the page link.
          */}
          <div className="flex items-center gap-[10px]">
            <Link
              href="/resume"
              className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              Resume
            </Link>
            <span aria-hidden="true" className="block w-[1px] h-3 bg-[var(--color-border)]" />
            <a
              href="/resume.pdf"
              download
              aria-label="Download resume PDF"
              className="nav-link inline-flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="2" x2="7" y2="11" />
                <polyline points="3,7 7,11 11,7" />
              </svg>
            </a>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5" aria-label="Toggle menu">
          <span className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)] px-6 pb-6 pt-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="/resume" onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
