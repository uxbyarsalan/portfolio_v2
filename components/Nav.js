"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Link href="/" className="hover:opacity-60 transition-opacity">
          <Image src="/images/logo-aa.svg" alt="Arsalan Aslam" width={48} height={32} className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="/resume" className="btn-fill text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-5 py-2.5">
            Resume
          </a>
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
