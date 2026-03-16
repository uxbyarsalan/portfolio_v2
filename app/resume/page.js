import Nav from "@/components/Nav";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Resume — Arsalan Aslam",
  description: "Lead Product Designer with 14+ years designing government platforms used by 20M+ citizens.",
};

function Section({ label, children }) {
  return (
    <div className="mb-14">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">{label}</p>
      {children}
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <Nav />
      <main className="wrapper pt-28 pb-20 md:pt-36">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">Arsalan Aslam</h1>
              <p className="text-lg text-[var(--color-text-muted)] mt-3">Lead Product Designer &middot; Design Strategist</p>
              <p className="text-sm text-[var(--color-text-subtle)] mt-2">Gothenburg, Sweden &middot; +46 76 4348 222 &middot; 3arslan.aslam@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <a href="/resume.pdf" download className="btn-fill text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-6 py-3">Download PDF</a>
              <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] border border-[var(--color-border)] px-6 py-3 text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-all">Contact</Link>
            </div>
          </div>
        </AnimateIn>

        <div className="h-[1px] bg-[var(--color-border)] mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-8">
            <AnimateIn>
              <Section label="Summary">
                <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.8]">
                  Lead Product Designer with 14+ years of experience designing public-sector platforms used by over 20 million citizens. Progressed from UX Designer to Program Manager &mdash; Design at Punjab Information Technology Board, leading design strategy across 10+ government platforms and driving the digital transformation of 76 government services across 168 departments. Experienced in designing AI-powered interfaces &mdash; from automated citizen dispatch to environmental health prediction &mdash; and leveraging AI tools to accelerate design workflows. Now based in Gothenburg, bringing a decade of large-scale design leadership to new challenges.
                </p>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <Section label="Experience">
                <div className="mb-12">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                    <h3 className="text-lg font-semibold">Punjab Information Technology Board</h3>
                    <span className="text-xs text-[var(--color-text-subtle)]">Lahore, Pakistan</span>
                  </div>

                  {[
                    {
                      title: "Program Manager — Design",
                      period: "2023–2025",
                      bullets: [
                        "Led UX strategy and design operations across 10+ government platforms, managing a team of 10–12 designers, researchers, and developers serving 168 government departments.",
                        "Drove Maryam Ki Dastak from concept to 2.1M+ citizen service requests — a 5-module ecosystem (web portal, citizen app, facilitator app, CRM, company registration) built in 3 months, scaled from 1 to 40 districts with 87,000+ facilitators and 76 services.",
                        "Directed Punjab Jobs redesign for a platform with 500,000+ registered users and 2M+ job applications — redesigned job cards with salary data, built a recruitment module replacing spreadsheet-based hiring, and designed a native mobile app.",
                        "Managed Punjab AQI environmental monitoring platform for 36 districts — designed condition-specific health advisories (Asthma, Heart Issues, COPD), heatmap calendar visualization, and real-time dashboard tracking 6 pollutants.",
                        "Led PITB Official website redesign — 13 screens in 30 hours, bold dark theme anchored by a custom design system.",
                      ],
                    },
                    {
                      title: "Principal UX/UI Designer",
                      period: "2020–2023",
                      bullets: [
                        "Designed City Watch, a real-time surveillance platform for Punjab Safe City Authority integrating 8,000+ cameras — achieved SUS score of 78.25 with 87.5% of users rating usability as high.",
                        "Created Employee Self Service app for 3,500+ employees — 98% daily check-in adoption, 120,000+ leave requests processed in 2 years, 10,000+ Play Store downloads, plus community features (carpooling, marketplace, blood donors).",
                        "Introduced PITB\u2019s first design system, reducing visual inconsistencies and developer revision cycles across all products.",
                      ],
                    },
                    {
                      title: "Sr. UX/UI Designer",
                      period: "2019–2020",
                      bullets: [
                        "Conducted 50+ user interviews, heuristic evaluations, and contextual inquiries across citizen-facing services.",
                        "Implemented A/B testing and usability evaluations, improving form completion rates and reducing task completion times.",
                      ],
                    },
                    {
                      title: "UX/UI Designer",
                      period: "2016–2018",
                      bullets: [
                        "Designed 200+ responsive screens across 20+ government applications serving 20M+ citizens.",
                        "Produced interactive prototypes that accelerated stakeholder approvals and reduced design iteration cycles.",
                      ],
                    },
                  ].map((role) => (
                    <div key={role.title} className="mb-8 last:mb-0">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h4 className="text-[15px] font-medium">{role.title}</h4>
                        <span className="text-[11px] text-[var(--color-text-subtle)]">{role.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {role.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-[var(--color-text-muted)] leading-[1.7] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-border-hover)]">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-[var(--color-border)]">
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                      <h4 className="text-[15px] font-medium">Sport.CC &mdash; Web &amp; UX/UI Designer</h4>
                      <span className="text-[11px] text-[var(--color-text-subtle)]">Denmark &middot; 2012–2016</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Designed and optimized web application interfaces through UX research, user journeys, wireframing, and prototyping. Improved accessibility and cross-platform compatibility across desktop and mobile.</p>
                  </div>
                </div>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <Section label="Key projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Maryam Ki Dastak", stat: "2.1M+ requests", desc: "Doorstep govt services, 5 modules, 40 districts" },
                    { name: "City Watch", stat: "SUS 78.25", desc: "Surveillance platform, 8,000+ cameras" },
                    { name: "Punjab Jobs", stat: "500K+ users", desc: "Employment platform redesign, 168 departments" },
                    { name: "Employee Self Service", stat: "98% adoption", desc: "Community workplace app, 3,500+ employees" },
                    { name: "PITB Official", stat: "13 screens", desc: "Government portal redesign, 30 hours" },
                    { name: "Punjab AQI", stat: "36 districts", desc: "Environmental monitoring, health advisories" },
                  ].map((p) => (
                    <Link key={p.name} href={`/work/${p.name.toLowerCase().replace(/ /g, "-").replace("maryam-ki-", "")}`} className="group bg-[var(--color-bg-card)] rounded-xl p-4 hover:bg-[var(--color-bg-card-hover)] transition-colors">
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="text-sm font-medium group-hover:opacity-70 transition-opacity">{p.name}</h4>
                        <span className="text-[11px] font-semibold text-[var(--color-text)]">{p.stat}</span>
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)]">{p.desc}</p>
                    </Link>
                  ))}
                </div>
              </Section>
            </AnimateIn>
          </div>

          <div className="md:col-span-4">
            <AnimateIn delay={0.05}>
              <Section label="Impact at a glance">
                <div className="space-y-4">
                  {[
                    { n: "20M+", l: "citizens impacted" },
                    { n: "76", l: "government services digitized" },
                    { n: "168", l: "departments served" },
                    { n: "22+", l: "platforms shipped" },
                    { n: "14+", l: "years in design" },
                  ].map((s) => (
                    <div key={s.l} className="flex items-baseline gap-2">
                      <span className="text-xl font-semibold tracking-tight stat-number">{s.n}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">{s.l}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <Section label="Design skills">
                <div className="flex flex-wrap gap-2">
                  {["UX Strategy", "Product Design", "Design Systems", "User Research", "Information Architecture", "Interaction Design", "Prototyping", "Usability Testing", "Conversion Optimization", "Data Visualization", "Responsive Design", "Accessibility"].map((s) => (
                    <span key={s} className="text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{s}</span>
                  ))}
                </div>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <Section label="Leadership">
                <div className="flex flex-wrap gap-2">
                  {["Team Management", "Stakeholder Alignment", "Cross-Functional Collaboration", "Agile & Scrum", "Design Ops", "Workshop Facilitation"].map((s) => (
                    <span key={s} className="text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{s}</span>
                  ))}
                </div>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <Section label="Tools">
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Miro", "WordPress", "Webflow", "Jira", "Trello", "GitLab", "Confluence", "Notion"].map((t) => (
                    <span key={t} className="text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{t}</span>
                  ))}
                </div>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.17}>
              <Section label="AI & emerging tools">
                <div className="flex flex-wrap gap-2">
                  {["Claude", "ChatGPT", "Gemini", "Midjourney", "GitHub Copilot", "Google Antigravity"].map((t) => (
                    <span key={t} className="text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{t}</span>
                  ))}
                </div>
                <p className="text-xs text-[var(--color-text-subtle)] mt-3 leading-relaxed">AI-assisted prototyping, prompt engineering for design workflows, designing interfaces for AI-powered systems</p>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <Section label="Education">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Bachelor of Fine Arts in Graphic Design</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">University of the Punjab, Lahore (2014)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Diploma in Fine Arts</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Naqsh School of Arts, Lahore (2008)</p>
                  </div>
                </div>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.22}>
              <Section label="Languages">
                <p className="text-sm text-[var(--color-text-muted)]">English &mdash; Fluent</p>
                <p className="text-sm text-[var(--color-text-muted)]">Urdu, Hindi, Punjabi &mdash; Native</p>
              </Section>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <Section label="Links">
                <div className="space-y-2">
                  {[
                    { label: "Portfolio", href: "/" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/arsalanaslam1/" },
                    { label: "Behance", href: "https://www.behance.net/arslanaslam" },
                  ].map((l) => (
                    <a key={l.label} href={l.href} className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                      {l.label} &rarr;
                    </a>
                  ))}
                </div>
              </Section>
            </AnimateIn>
          </div>
        </div>
      </main>
    </>
  );
}
