/**
 * Site-wide footer (bottom strip only).
 *
 * Contains: location/availability blurb, social links, copyright.
 *
 * The "Let's build something that matters" CTA block was split out into a
 * separate FooterCTA component in v18.31, so the contact page can render
 * just this strip without the redundant CTA.
 *
 * Usage:
 *   - Every page except /contact: render <FooterCTA /> then <Footer />
 *   - /contact: render only <Footer /> (plus a contact-specific Calendly CTA above it)
 *
 * Server component — no client interactivity needed.
 */
export default function Footer() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arsalanaslam1/" },
    { label: "Behance", href: "https://www.behance.net/arslanaslam" },
    { label: "Instagram", href: "https://www.instagram.com/3arslan.aslam/" },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="wrapper py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
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
