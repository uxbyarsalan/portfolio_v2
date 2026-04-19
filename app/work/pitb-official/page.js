import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "PITB Official — Project Spotlight | Arsalan Aslam",
  description: "Redesigning the flagship web portal for Punjab's technology authority. 13 screens, 30 hours of focused design.",
};

export default function PITBOfficialCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn><Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">&larr; All projects</Link></AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-subtle)] mb-4">Project spotlight</p>
          </AnimateIn>
          <AnimateIn delay={0.1}><h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">PITB Official</h1></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">Redesigning the flagship web portal for Punjab&rsquo;s technology authority</p></AnimateIn>
        </section>

        <AnimateIn delay={0.3}><div className="full-bleed aspect-[2.2/1] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">Hero image &mdash; PITB dark-themed homepage mockup</div></AnimateIn>

        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-[var(--color-border)] py-6">
              {[{ l: "Client", v: "PITB" }, { l: "Role", v: "Program Manager — Design" }, { l: "Team", v: "2–3 people" }, { l: "Scope", v: "13 screens" }, { l: "Timeline", v: "2025 (30 hours)" }].map((m) => (
                <div key={m.l}><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>PITB is the organization behind City Watch, Maryam Ki Dastak, Punjab Jobs, and dozens of other digital services serving millions. But its own website didn&rsquo;t reflect that ambition. The portal was outdated, with tangled navigation and inconsistent design patterns.</p>
              <p>The core tension: making a government portal feel genuinely modern without losing institutional gravitas. We chose a bold dark theme anchored by deep navy &mdash; an unusual choice for government that signals technical sophistication. Inter typeface for clean legibility. Periwinkle blue for warmth and interaction. The result is a portal that looks like it belongs to a technology organization, not a bureaucracy.</p>
              <p>30 hours of focused design work, backed by a decade of institutional knowledge. Speed doesn&rsquo;t mean shallow &mdash; sometimes the best work happens when you already know the institution deeply and can move with precision rather than exploration.</p>
            </div>
          </AnimateIn>
        </section>

        {/* Design showcase — visual-heavy */}
        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Full homepage design", "Highlights / News section", "Digital Footprint page", "Sector categories page"].map((label, i) => (
              <AnimateIn key={label} delay={i * 0.06}><div className="bg-[var(--color-bg-card)] rounded-2xl aspect-[4/3] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">{label}</div></AnimateIn>
            ))}
          </div>
        </section>

        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Design system</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Typography */}
              <div>
                <p className="text-[13px] text-[var(--color-text-muted)] mb-5">Typography</p>
                <p className="text-6xl md:text-7xl font-bold tracking-tight leading-none" style={{ color: "#05152F" }}>Inter</p>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mt-2" style={{ color: "#05152F" }}>AaBbCc123</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {["Regular 400", "Semi Bold 600", "Bold 700"].map((w) => (
                    <span key={w} className="text-[11px] text-[var(--color-text-subtle)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{w}</span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <p className="text-[13px] text-[var(--color-text-muted)] mb-5">Colors</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Deep Navy", role: "Primary surface", hex: "#05152F", bg: "#05152F", light: false },
                    { name: "Periwinkle Blue", role: "Interactive / accent", hex: "#7698F9", bg: "#7698F9", light: true },
                    { name: "Off-White", role: "Content / readability", hex: "#FAFAFA", bg: "#FAFAFA", light: true, border: true },
                    { name: "Slate Gray", role: "Secondary text / UI", hex: "#464E65", bg: "#464E65", light: false },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="rounded-xl px-5 py-4 flex items-center justify-between"
                      style={{
                        backgroundColor: c.bg,
                        border: c.border ? "1px solid rgba(0,0,0,0.08)" : "none",
                      }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium" style={{ color: c.light ? "#05152F" : "#FAFAFA" }}>{c.name}</span>
                        <span className="text-[11px]" style={{ color: c.light ? "rgba(5,21,47,0.4)" : "rgba(255,255,255,0.35)" }}>{c.role}</span>
                      </div>
                      <span className="text-[13px] font-mono" style={{ color: c.light ? "rgba(5,21,47,0.45)" : "rgba(255,255,255,0.5)" }}>{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75]">The biggest lesson: speed doesn&rsquo;t mean shallow. Thirty hours of focused design work, backed by years of understanding PITB&rsquo;s mission and audience, produced a result that&rsquo;s as considered as projects that took months. Sometimes the best design work happens when you already know the institution deeply and can move with precision rather than exploration.</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <p className="text-sm text-[var(--color-text-subtle)] mt-6 italic">Design delivered with full design system. Implementation was in progress when I transitioned from PITB.</p>
          </AnimateIn>
        </section>

        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "Punjab AQI", subtitle: "Environmental monitoring", href: "/work/aqi" }, { title: "City Watch", subtitle: "Surveillance platform", href: "/work/city-watch" }, { title: "Maryam Ki Dastak", subtitle: "Doorstep government services", href: "/work/dastak" }].map((p) => (
                <Link key={p.title} href={p.href} className="group block bg-[var(--color-bg-card)] rounded-xl p-6 hover:bg-[var(--color-bg-card-hover)] transition-colors">
                  <h4 className="text-base font-medium group-hover:opacity-70 transition-opacity">{p.title}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{p.subtitle}</p>
                  <span className="text-xs text-[var(--color-text-subtle)] mt-3 block">&rarr;</span>
                </Link>
              ))}
            </div>
          </AnimateIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
