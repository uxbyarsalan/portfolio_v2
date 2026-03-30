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

        {/* Personas + Journey + Community */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">User research</p>
          </AnimateIn>

          {/* Two personas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {/* Zohaib */}
            <AnimateIn delay={0.05}>
              <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden">
                <div className="bg-[#E6F1FB] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#85B7EB] flex items-center justify-center text-sm font-medium text-[#042C53]">ZN</div>
                    <div>
                      <p className="text-sm font-medium text-[#042C53]">Zohaib Naeem</p>
                      <p className="text-[11px] text-[#185FA5]">Software Developer &middot; PITB</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#0C447C]">Age: Late 20s &middot; Tech: High</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">Tech-savvy developer who wants workplace tools that match consumer apps. Uses ESS daily for check-ins but stays for the community features.</p>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Goals</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Quick daily check-in without hassle</p>
                    <p>&bull; Apply for leave without paperwork</p>
                    <p>&bull; Access HR services on the go</p>
                    <p>&bull; Find a carpool ride to work</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Pain points</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Desktop-only portal, can&rsquo;t use on phone</p>
                    <p>&bull; Paper leave forms take days</p>
                    <p>&bull; No visibility into request status</p>
                    <p>&bull; No community connection with colleagues</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Before ESS</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {["Desktop HRIS", "Paper forms", "WhatsApp", "Email"].map((t) => (
                      <span key={t} className="text-[10px] text-[#0C447C] bg-[#E6F1FB] rounded-full px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-3 border-l-2 border-[#85B7EB]">
                    <p className="text-[11px] text-[var(--color-text-muted)] italic leading-relaxed">&ldquo;I build apps for citizens all day &mdash; why is the app I use at work worse than what I build?&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Ahmed Adeel */}
            <AnimateIn delay={0.1}>
              <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden">
                <div className="bg-[#EEEDFE] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#AFA9EC] flex items-center justify-center text-sm font-medium text-[#26215C]">AS</div>
                    <div>
                      <p className="text-sm font-medium text-[#26215C]">Ahmed Adeel Sarwar</p>
                      <p className="text-[11px] text-[#534AB7]">Director HR &middot; PITB</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#3C3489]">Age: Mid 30s &middot; Tech: Medium</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">Director HR managing attendance, leave, and resources for 3,500+ employees. Needs real-time visibility and reporting.</p>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Goals</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Approve/reject leave requests efficiently</p>
                    <p>&bull; Monitor team attendance in real-time</p>
                    <p>&bull; Generate reports without manual counting</p>
                    <p>&bull; Track employee performance metrics</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Pain points</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Processing paper leave forms manually</p>
                    <p>&bull; Reports from scattered data sources</p>
                    <p>&bull; Approvals buried in email chains</p>
                    <p>&bull; Managing resource escalations</p>
                  </div>
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-3 border-l-2 border-[#AFA9EC]">
                    <p className="text-[11px] text-[var(--color-text-muted)] italic leading-relaxed">&ldquo;I spend my mornings chasing attendance data instead of making HR decisions.&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Role-based views */}
          <AnimateIn delay={0.12}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">Role-based progressive disclosure &mdash; same data, four views</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {[
                { role: "Employee", desc: "Personal dashboard, own attendance, leave balance" },
                { role: "Supervisor", desc: "Team view, approve leave, team attendance" },
                { role: "HOD", desc: "Department patterns, escalations, reports" },
                { role: "HR", desc: "Org-wide ops, analytics, policy management" },
              ].map((r) => (
                <div key={r.role} className="bg-[var(--color-bg-card)] rounded-xl p-4 text-center">
                  <p className="text-sm font-medium">{r.role}</p>
                  <p className="text-[10px] text-[var(--color-text-subtle)] mt-1 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Daily journey */}
          <AnimateIn delay={0.14}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">Employee daily journey</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {[
                { time: "Morning", items: ["Swipe to check-in", "View daily tasks", "Check carpool rides"] },
                { time: "Midday", items: ["Book meeting room", "Browse marketplace", "Check announcements"] },
                { time: "When needed", items: ["Apply for leave", "Request approval", "Report lost item"] },
                { time: "Evening", items: ["Swipe to check-out", "Offer carpool ride", "View leave status"] },
              ].map((j) => (
                <div key={j.time} className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <div className="bg-[#E6F1FB] px-3 py-2">
                    <p className="text-[11px] font-medium text-[#042C53]">{j.time}</p>
                  </div>
                  <div className="px-3 py-2">
                    {j.items.map((item) => (
                      <p key={item} className="text-[10px] text-[var(--color-text-muted)] leading-relaxed">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Help Buddy */}
          <AnimateIn delay={0.16}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">Help Buddy &mdash; community features that drove voluntary engagement</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {[
                { name: "Carpooling", desc: "Share rides to work", bg: "bg-[#E1F5EE]", tc: "text-[#04342C]", sc: "text-[#085041]" },
                { name: "Marketplace", desc: "Buy & sell among staff", bg: "bg-[#FAEEDA]", tc: "text-[#412402]", sc: "text-[#633806]" },
                { name: "Blood donors", desc: "Emergency donor match", bg: "bg-[#FCEBEB]", tc: "text-[#501313]", sc: "text-[#791F1F]" },
                { name: "Fundraising", desc: "Collective support", bg: "bg-[#EEEDFE]", tc: "text-[#26215C]", sc: "text-[#3C3489]" },
                { name: "Lost & found", desc: "Recover lost items", bg: "bg-[#E6F1FB]", tc: "text-[#042C53]", sc: "text-[#0C447C]" },
              ].map((f) => (
                <div key={f.name} className={`${f.bg} rounded-xl p-3 text-center`}>
                  <p className={`text-[11px] font-medium ${f.tc}`}>{f.name}</p>
                  <p className={`text-[10px] ${f.sc} mt-0.5`}>{f.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--color-text-subtle)] italic text-center">An app that only handles admin tasks gets opened when you have to. One that helps you find a ride gets opened because you want to.</p>
          </AnimateIn>
        </section>

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
