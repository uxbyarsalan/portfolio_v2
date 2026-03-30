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

        {/* Research insights + Personas */}
        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">What the research revealed</p>
          </AnimateIn>

          {/* Survey stats */}
          <AnimateIn delay={0.05}>
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { v: "79%", l: "identified communication as critical", color: "bg-[#E6F1FB]", tc: "text-[#042C53]", lc: "text-[#185FA5]" },
                { v: "84%", l: "needed a unified dashboard", color: "bg-[#E6F1FB]", tc: "text-[#042C53]", lc: "text-[#185FA5]" },
                { v: "73%", l: "struggled coordinating teams", color: "bg-[#E6F1FB]", tc: "text-[#042C53]", lc: "text-[#185FA5]" },
              ].map((s) => (
                <div key={s.l} className={`${s.color} rounded-xl p-5`}>
                  <span className={`text-2xl md:text-3xl font-semibold ${s.tc}`}>{s.v}</span>
                  <p className={`text-xs mt-1 ${s.lc}`}>{s.l}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Personas */}
          <AnimateIn delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-3">Personas</p>
            <p className="text-xs text-[var(--color-text-subtle)] italic mb-6">Fictional names representing real PSCA personnel</p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {/* Ali Khan */}
            <AnimateIn delay={0.12}>
              <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden">
                <div className="bg-[#E1F5EE] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#5DCAA5] flex items-center justify-center text-sm font-medium text-[#04342C]">AK</div>
                    <div>
                      <p className="text-sm font-medium text-[#04342C]">Ali Khan</p>
                      <p className="text-[11px] text-[#0F6E56]">Field Inspector</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#085041]">Age: 40+ &middot; Exp: 10-15 yrs &middot; Tech: Medium</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">Veteran inspector managing on-ground deployments. Comfortable with basic apps but not a power user.</p>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Goals</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Respond to threats with real-time data</p>
                    <p>&bull; Monitor zone without being everywhere</p>
                    <p>&bull; Seamless control room coordination</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Pain points</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Managing large areas manually</p>
                    <p>&bull; No real-time information in the field</p>
                    <p>&bull; Identifying threats without live support</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Current tools</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {["Radio", "WhatsApp", "Phone calls", "Paper plans"].map((t) => (
                      <span key={t} className="text-[10px] text-[#085041] bg-[#E1F5EE] rounded-full px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-3 border-l-2 border-[#5DCAA5]">
                    <p className="text-[11px] text-[var(--color-text-muted)] italic leading-relaxed">&ldquo;I need to know what&rsquo;s happening in my zone without calling 10 people. By the time I get answers, the situation has already changed.&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Sarah Ahmed */}
            <AnimateIn delay={0.15}>
              <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden">
                <div className="bg-[#FAEEDA] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#EF9F27] flex items-center justify-center text-sm font-medium text-[#412402]">SA</div>
                    <div>
                      <p className="text-sm font-medium text-[#412402]">Sarah Ahmed</p>
                      <p className="text-[11px] text-[#854F0B]">Operations Coordinator</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#633806]">Age: Late 20s &middot; Exp: 2-5 yrs &middot; Tech: High</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">Young coordinator managing event planning and multi-team deployments. Tech-savvy — frustrated by outdated systems.</p>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Goals</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Full visibility of all resources during events</p>
                    <p>&bull; Track deployments without calling each team</p>
                    <p>&bull; Learn from past events to improve planning</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Pain points</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; No unified view of all deployments</p>
                    <p>&bull; Spreadsheets failing at scale</p>
                    <p>&bull; Can&rsquo;t track multiple teams at once</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Current tools</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {["Vendor system", "Excel", "WhatsApp", "Phone calls"].map((t) => (
                      <span key={t} className="text-[10px] text-[#633806] bg-[#FAEEDA] rounded-full px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-3 border-l-2 border-[#EF9F27]">
                    <p className="text-[11px] text-[var(--color-text-muted)] italic leading-relaxed">&ldquo;I manage 15 teams with a spreadsheet and a phone. During a live event, that&rsquo;s not coordination &mdash; that&rsquo;s guessing.&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Card sorting insight */}
          <AnimateIn delay={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#EEEDFE] rounded-xl px-5 py-4">
                <p className="text-sm font-medium text-[#26215C]">Field operations</p>
                <p className="text-xs text-[#534AB7] mt-0.5">Live map, deployment, alerts</p>
              </div>
              <div className="bg-[#FAECE7] rounded-xl px-5 py-4">
                <p className="text-sm font-medium text-[#4A1B0C]">Control room</p>
                <p className="text-xs text-[#993C1D] mt-0.5">Monitoring, coordination, planning</p>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-subtle)] italic text-center mb-2">Hybrid card sort: users grouped features by role, not by function</p>
            <p className="text-sm text-[var(--color-text-muted)] text-center">This shaped the layered dashboard &mdash; map-centric default with role-specific panels</p>
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
