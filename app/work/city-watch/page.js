import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "City Watch — Case Study | Arsalan Aslam",
  description: "Real-time surveillance and response platform for Punjab Safe City Authority. SUS score 78.25, 8,000+ cameras.",
};

function Stat({ value, label }) {
  return (
    <div className="py-3">
      <span className="text-3xl md:text-5xl font-semibold tracking-tight stat-number">{value}</span>
      <p className="text-xs text-[var(--color-text-muted)] mt-1.5">{label}</p>
    </div>
  );
}

function ImageBlock({ label, aspect = "aspect-[2/1]" }) {
  return (
    <div className={`full-bleed ${aspect} bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]`}>{label}</div>
  );
}

function Decision({ title, children }) {
  return (<AnimateIn><div className="mb-12"><h3 className="text-lg font-medium tracking-tight mb-3">{title}</h3><div className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] space-y-4">{children}</div></div></AnimateIn>);
}

export default function CityWatchCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn><Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">&larr; All projects</Link></AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}><h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">City Watch</h1></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">Real-time surveillance and response platform for Punjab Safe City Authority</p></AnimateIn>
        </section>

        <AnimateIn delay={0.3}><div className="full-bleed aspect-[2.2/1] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">Hero image &mdash; City Watch dashboard</div></AnimateIn>

        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-[var(--color-border)] py-6">
              {[{ l: "Client", v: "Punjab Safe City Authority" }, { l: "Role", v: "Principal UX/UI Designer" }, { l: "Team", v: "5–10 people" }, { l: "Platform", v: "Web Application" }, { l: "Timeline", v: "2022" }].map((m) => (
                <div key={m.l}><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">The challenge</p>
            <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">
              How do you give a single police officer situational awareness across 8,000+ cameras during a high-stakes public event where minutes matter?
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>PSCA had invested in a modern 8,000+ camera network through a third-party vendor, but that system was expensive and inflexible. Meanwhile, field inspectors coordinated by radio, tracked deployments on spreadsheets, and communicated through WhatsApp. The technology watching the city was modern. The humans coordinating the response were operating like it was 1995.</p>
              <p>City Watch was built to close that gap &mdash; a purpose-built platform giving PSCA full ownership of event coordination, deployment management, and threat detection without vendor lock-in.</p>
            </div>
          </AnimateIn>
        </section>

        <AnimateIn><ImageBlock label="Research insights &mdash; survey data, personas, card sorting" aspect="aspect-[2.5/1]" /></AnimateIn>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">What the research revealed</p></AnimateIn>
          <AnimateIn delay={0.05}>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <Stat value="79%" label="identified communication as critical" />
              <Stat value="84%" label="needed a unified dashboard" />
              <Stat value="73%" label="struggled coordinating teams" />
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Key design decisions</p></AnimateIn>
          <Decision title="Layered dashboard, not tabs or a dense single view">
            <p>84% wanted everything visible, but cognitive overload would be dangerous under pressure. We chose a map-centric default with expandable specialist panels &mdash; context without clutter.</p>
          </Decision>
          <Decision title="Two event types: procession vs. venue">
            <p>Stakeholder testing revealed that moving processions and fixed venues need fundamentally different security planning. This split cascaded through deployment templates, map visualizations, and alert logic.</p>
          </Decision>
          <Decision title="Expanded deployment categories">
            <p>Added contingency deployments (fire brigade, bomb squad, medical) alongside standard police deployments &mdash; rethinking map visualization and resource tracking for fundamentally different unit types.</p>
          </Decision>
        </section>

        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Dashboard overview", "Event management", "Deployment planning", "Alert monitoring"].map((label, i) => (
              <AnimateIn key={label} delay={i * 0.06}><div className="bg-[var(--color-bg-card)] rounded-2xl aspect-[4/3] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">{label}</div></AnimateIn>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Validation</p></AnimateIn>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <AnimateIn><Stat value="78.25" label="SUS score — above-average usability" /></AnimateIn>
            <AnimateIn delay={0.04}><Stat value="87.5%" label="rated usability as high" /></AnimateIn>
          </div>
          <AnimateIn delay={0.08}><p className="text-sm text-[var(--color-text-muted)] mt-6 italic">The platform was in active pilot testing with PSCA when I transitioned, built to integrate with the 8,000+ camera network.</p></AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75]">Design for stress, not comfort. Institutional complexity is a design material. And navigating stakeholders with competing priorities &mdash; field officers wanting simplicity, coordinators wanting data, leadership wanting visibility &mdash; was the most transferable skill I took from this project.</p>
          </AnimateIn>
        </section>

        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "Maryam Ki Dastak", subtitle: "Doorstep government services", href: "/work/dastak" }, { title: "Punjab Jobs", subtitle: "Employment platform redesign", href: "/work/punjab-jobs" }, { title: "Employee Self Service", subtitle: "Workplace community app", href: "/work/ess" }].map((p) => (
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
