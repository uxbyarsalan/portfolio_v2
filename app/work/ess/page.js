import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Employee Self Service — Case Study | Arsalan Aslam",
  description: "Workplace community platform for 3,500+ employees. 98% daily adoption, 120K+ leave requests processed.",
};

function Stat({ value, label }) {
  return (<div className="py-3"><span className="text-3xl md:text-5xl font-semibold tracking-tight stat-number">{value}</span><p className="text-xs text-[var(--color-text-muted)] mt-1.5">{label}</p></div>);
}

function ImageBlock({ label, aspect = "aspect-[2/1]" }) {
  return (<div className={`full-bleed ${aspect} bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]`}>{label}</div>);
}

function Decision({ title, children }) {
  return (<AnimateIn><div className="mb-12"><h3 className="text-lg font-medium tracking-tight mb-3">{title}</h3><div className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] space-y-4">{children}</div></div></AnimateIn>);
}

export default function ESSCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn><Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">&larr; All projects</Link></AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}><h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">Employee<br />Self Service</h1></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">Turning a clunky HR portal into a workplace community platform for 3,500+ employees</p></AnimateIn>
        </section>

        <AnimateIn delay={0.3}><div className="full-bleed aspect-[2.2/1] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">Hero image &mdash; ESS app screens</div></AnimateIn>

        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-[var(--color-border)] py-6">
              {[{ l: "Client", v: "PITB (internal)" }, { l: "Role", v: "Principal UX/UI Designer" }, { l: "Team", v: "5–10 people" }, { l: "Platform", v: "Native Mobile App" }, { l: "Timeline", v: "Jan–Mar 2022" }].map((m) => (
                <div key={m.l}><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">The challenge</p>
            <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">
              3,500+ employees relying on a desktop-only HRIS portal with terrible UX. What if we replaced it with something people actually wanted to open every morning?
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>We chose to go beyond the brief. Instead of just building a mobile HR tool, we deliberately designed an employee community platform &mdash; handling essential workflows (attendance, leave, tasks, approvals) alongside features that made colleagues&rsquo; daily lives better: carpooling, a marketplace, fundraising, blood donor matching, and lost &amp; found. The goal wasn&rsquo;t just efficiency. It was belonging.</p>
            </div>
          </AnimateIn>
        </section>

        <AnimateIn><ImageBlock label="User journey &mdash; employee persona, admin flows, community features" aspect="aspect-[2.5/1]" /></AnimateIn>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Key design decisions</p></AnimateIn>
          <Decision title="Community platform, not just HR tool">
            <p>Carpooling, marketplace, fundraising, blood donors, lost &amp; found &mdash; bundled under &ldquo;Help Buddy.&rdquo; An app that only handles admin tasks gets opened when you have to. One that helps you find a ride to work gets opened because you want to. The 98% check-in rate wasn&rsquo;t just about the mandate.</p>
          </Decision>
          <Decision title="Swipe to check-in">
            <p>The simplest possible interaction for the most frequent action. A 10-second improvement per check-in &times; 3,500 employees &times; twice daily = 400+ hours saved monthly.</p>
          </Decision>
          <Decision title="Role-based progressive disclosure">
            <p>Employees see their personal dashboard. Supervisors see their team. HODs see department patterns. HR sees the operational layer. Same data, four different views calibrated to each role&rsquo;s decision-making needs.</p>
          </Decision>
        </section>

        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Swipe check-in", "Leave management", "Help Buddy features", "Role-based views"].map((label, i) => (
              <AnimateIn key={label} delay={i * 0.06}><div className="bg-[var(--color-bg-card)] rounded-2xl aspect-[4/3] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">{label}</div></AnimateIn>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Impact</p></AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            {[{ v: "98%", l: "of daily check-ins through the app" }, { v: "120K+", l: "leave requests processed in 2 years" }, { v: "10,000+", l: "Google Play downloads" }, { v: "200+", l: "meeting room bookings monthly" }, { v: "3x faster", l: "leave processing vs. old portal" }, { v: "50+", l: "active carpoolers" }].map((s, i) => (
              <AnimateIn key={s.l} delay={i * 0.04}><Stat value={s.v} label={s.l} /></AnimateIn>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75]">Mandatory doesn&rsquo;t mean adopted. Attendance was required &mdash; but making the app genuinely useful between check-ins was the real challenge. And internal tools deserve the same design rigor as public products: when you apply user-centered thinking to an internal app, the results speak for themselves.</p>
          </AnimateIn>
        </section>

        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "PITB Official", subtitle: "Government portal redesign", href: "/work/pitb-official" }, { title: "Punjab AQI", subtitle: "Environmental monitoring", href: "/work/aqi" }, { title: "Maryam Ki Dastak", subtitle: "Doorstep government services", href: "/work/dastak" }].map((p) => (
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
