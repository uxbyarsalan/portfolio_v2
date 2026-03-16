import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Punjab Jobs — Case Study | Arsalan Aslam",
  description: "Redesigning Punjab's employment platform. 500K+ users, 2M+ applications, 168 government departments.",
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

export default function PunjabJobsCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn><Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">&larr; All projects</Link></AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}><h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">Punjab Jobs</h1></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">Redesigning Punjab&rsquo;s employment platform for 500,000+ job seekers</p></AnimateIn>
        </section>

        <AnimateIn delay={0.3}><div className="full-bleed aspect-[2.2/1] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">Hero image &mdash; Before/after comparison</div></AnimateIn>

        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-[var(--color-border)] py-6">
              {[{ l: "Client", v: "PITB" }, { l: "Role", v: "Program Manager — Design" }, { l: "Team", v: "2–5 people" }, { l: "Scope", v: "Web, Recruiter Module, App" }, { l: "Timeline", v: "May–Aug 2024" }].map((m) => (
                <div key={m.l}><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">The challenge</p>
            <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">
              A portal with 2 million applications and a terrible experience. 500,000+ registered users, 168 government departments, 11,000+ job postings &mdash; and an interface that made finding a job harder, not easier.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>The demand was never the problem. Citizens depended on jobs.punjab.gov.pk because there was no alternative for government employment. But the experience was actively hostile: cluttered job cards missing salary info, a 10-tab CV builder, no mobile app, and recruiters managing everything through spreadsheets and email.</p>
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-8">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Pre-design baseline</p></AnimateIn>
          <div className="grid grid-cols-3 gap-6">
            <AnimateIn><Stat value="500K+" label="registered job seekers" /></AnimateIn>
            <AnimateIn delay={0.04}><Stat value="2M+" label="applications submitted since 2017" /></AnimateIn>
            <AnimateIn delay={0.08}><Stat value="11,000+" label="postings from 168 departments" /></AnimateIn>
          </div>
        </section>

        <AnimateIn><ImageBlock label="Before/after &mdash; old homepage vs. redesigned homepage, old CV builder vs. new" aspect="aspect-[2.5/1]" /></AnimateIn>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Key design decisions</p></AnimateIn>
          <Decision title="Redesigned job cards with salary, icons, and full clickability">
            <p>Competitive benchmarking against LinkedIn and Indeed revealed salary info as the biggest gap. New cards show title, location, deadline, and compensation with intuitive iconography. The entire card is clickable.</p>
          </Decision>
          <Decision title="Built a recruitment module that replaces spreadsheets">
            <p>Categorized applications (Pending/Rejected/Hired), quick-view with PDF viewer, full candidate timeline, and simplified scheduling. This wasn&rsquo;t a feature &mdash; it was filling a product gap that was crippling hiring efficiency.</p>
          </Decision>
          <Decision title="Two audiences, zero compromise">
            <p>Job seekers get simplicity (clean cards, Basic/Advanced filters, streamlined CV builder). Recruiters get power (dense applicant views, collaboration tools, bulk actions). Same design language, different information densities.</p>
          </Decision>
        </section>

        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Redesigned homepage", "Job listing cards", "Streamlined CV builder", "Recruiter dashboard"].map((label, i) => (
              <AnimateIn key={label} delay={i * 0.06}><div className="bg-[var(--color-bg-card)] rounded-2xl aspect-[4/3] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">{label}</div></AnimateIn>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Status</p>
            <p className="text-sm text-[var(--color-text-muted)] italic leading-relaxed">Design completed and handed off for implementation. The baseline metrics &mdash; 500K+ users, 2M+ applications, 168 departments &mdash; serve as the benchmark against which the redesign&rsquo;s impact will be measured.</p>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75]">Redesign is harder than greenfield. Every decision is measured against what already exists. And competitive benchmarking is underrated as a research method &mdash; in resource-constrained projects, patterns validated by billions of interactions on LinkedIn and Indeed are a pragmatic and defensible foundation.</p>
          </AnimateIn>
        </section>

        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "Employee Self Service", subtitle: "Workplace community app", href: "/work/ess" }, { title: "PITB Official", subtitle: "Government portal redesign", href: "/work/pitb-official" }, { title: "City Watch", subtitle: "Surveillance platform", href: "/work/city-watch" }].map((p) => (
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
