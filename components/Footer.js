"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateIn from "./AnimateIn";

/**
 * Site-wide footer.
 *
 * Version-aware via usePathname: on v2 routes (`/v2/*`) the X social link
 * is hidden, leaving LinkedIn / Behance / Instagram. On v1 routes the
 * full 4-social list is shown.
 *
 * Becoming a client component (because usePathname is a client hook) is
 * lossless here — the footer doesn't use any server-only APIs and is
 * already lightweight enough that hydration cost is negligible.
 */
export default function Footer() {
  const pathname = usePathname() || "";
  const isV2 = pathname.startsWith("/v2");

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arsalanaslam1/" },
    { label: "Behance", href: "https://www.behance.net/arslanaslam" },
    { label: "Instagram", href: "https://www.instagram.com/3arslan.aslam/" },
    // X is hidden on v2 surfaces. Keep the entry available for v1 only.
    ...(isV2 ? [] : [{ label: "X", href: "https://x.com/ArslanSulehria" }]),
  ];

  // CTA target also follows the route version so the user stays in their
  // chosen experience when clicking the footer's "Get in touch" button.
  const contactHref = isV2 ? "/v2/contact" : "/contact";

  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="wrapper py-20">
        <AnimateIn>
          <p className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-[1.1]">
            Let&rsquo;s build something<br />that matters.
          </p>
          <Link href={contactHref} className="btn-fill inline-block mt-8 text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5">
            Get in touch
          </Link>
        </AnimateIn>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-16 mt-16 border-t border-[var(--color-border)]">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Arsalan Aslam &mdash; Gothenburg, Sweden</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">Open to freelance &amp; full-time opportunities</p>
          </div>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-link text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-[11px] text-[var(--color-text-subtle)] mt-8">&copy; {new Date().getFullYear()} Arsalan Aslam. All rights reserved.</p>
      </div>
    </footer>
  );
}
