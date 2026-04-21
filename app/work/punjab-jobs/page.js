import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";

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

        <AnimateIn delay={0.3}>
          <div className="full-bleed aspect-[2.2/1] relative overflow-hidden">
            <Image
              src="/images/punjab-jobs/punjab_jobs_hero.jpg"
              alt="Punjab Jobs — two-sided platform for job seekers and recruiters"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </AnimateIn>

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

        {/* Before state + Personas + Two-sided platform */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-3">Before &mdash; what was broken</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <div className="grid grid-cols-2 gap-3 mb-12">
              <div className="bg-[#FCEBEB] rounded-xl px-5 py-4">
                <div className="text-xs text-[#791F1F] space-y-1.5">
                  <p>&bull; Job cards missing salary info</p>
                  <p>&bull; 10-tab CV builder</p>
                  <p>&bull; No mobile app</p>
                </div>
              </div>
              <div className="bg-[#FCEBEB] rounded-xl px-5 py-4">
                <div className="text-xs text-[#791F1F] space-y-1.5">
                  <p>&bull; No error handling during apply</p>
                  <p>&bull; Recruiters on spreadsheets</p>
                  <p>&bull; Cluttered layout with ads</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Two personas */}
          <AnimateIn delay={0.08}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">Two audiences, two personas</p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {/* Aryan Khan */}
            <AnimateIn delay={0.1}>
              <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden">
                <div className="bg-[#E1F5EE] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#5DCAA5] flex items-center justify-center text-sm font-medium text-[#04342C]">AK</div>
                    <div>
                      <p className="text-sm font-medium text-[#04342C]">Aryan Khan</p>
                      <p className="text-[11px] text-[#0F6E56]">Job seeker &middot; Early 30s</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#085041]">Tech: High &middot; Searches on phone</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">Tech-savvy professional searching for government jobs during his commute. Frustrated by inconsistent interfaces and zero feedback after applying.</p>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Goals</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Salary info upfront on job cards</p>
                    <p>&bull; Simple CV builder, not 10 tabs</p>
                    <p>&bull; Mobile app for search on the go</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Pain points</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; No feedback after applying</p>
                    <p>&bull; Can&rsquo;t identify what went wrong</p>
                    <p>&bull; Inconsistent interface wastes time</p>
                  </div>
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-3 border-l-2 border-[#5DCAA5]">
                    <p className="text-[11px] text-[var(--color-text-muted)] italic leading-relaxed">&ldquo;I search for jobs on my commute &mdash; the portal doesn&rsquo;t even work on my phone.&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Ahmed Adeel Sarwar */}
            <AnimateIn delay={0.13}>
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
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">Director HR managing recruitment across 168 departments. Lives in spreadsheets and email chains. Needs a centralized system.</p>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Goals</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; Full pipeline view (Pending/Rejected/Hired)</p>
                    <p>&bull; Coordinate with department hiring managers</p>
                    <p>&bull; Generate recruitment reports instantly</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-1">Pain points</p>
                  <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-0.5">
                    <p>&bull; No centralized application pipeline</p>
                    <p>&bull; Tracking candidates in spreadsheets</p>
                    <p>&bull; Can&rsquo;t collaborate with hiring managers</p>
                    <p>&bull; Reports take hours to generate</p>
                  </div>
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-3 border-l-2 border-[#AFA9EC]">
                    <p className="text-[11px] text-[var(--color-text-muted)] italic leading-relaxed">&ldquo;I manage hiring for 168 departments with Excel and email. Every position is a new spreadsheet.&rdquo;</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Two-sided solution */}
          <AnimateIn delay={0.15}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">After &mdash; two audiences, one design language, zero compromise</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="bg-[#E1F5EE] px-4 py-3">
                  <p className="text-sm font-medium text-[#04342C]">Job seeker experience</p>
                  <p className="text-[10px] text-[#085041] italic">Simplicity &amp; speed</p>
                </div>
                <div className="px-4 py-3 text-xs text-[var(--color-text-muted)] space-y-1">
                  <p>&bull; Redesigned cards with salary</p>
                  <p>&bull; Streamlined CV builder</p>
                  <p>&bull; Basic / Advanced filters</p>
                  <p>&bull; Native mobile app</p>
                </div>
              </div>
              <div className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="bg-[#EEEDFE] px-4 py-3">
                  <p className="text-sm font-medium text-[#26215C]">Recruiter experience</p>
                  <p className="text-[10px] text-[#3C3489] italic">Depth &amp; control</p>
                </div>
                <div className="px-4 py-3 text-xs text-[var(--color-text-muted)] space-y-1">
                  <p>&bull; Centralized applicant tracking</p>
                  <p>&bull; Pipeline view with statuses</p>
                  <p>&bull; Quick-view with PDF viewer</p>
                  <p>&bull; Bulk actions &amp; reporting</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Benchmarked against */}
          <AnimateIn delay={0.17}>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "LinkedIn", desc: "Salary, cards, save" },
                { name: "Indeed", desc: "Quick apply, filters" },
                { name: "Punjab Jobs (old)", desc: "Baseline — what to fix" },
              ].map((b) => (
                <div key={b.name} className="bg-[var(--color-bg-card)] rounded-xl px-4 py-3 text-center">
                  <p className="text-xs font-medium">{b.name}</p>
                  <p className="text-[10px] text-[var(--color-text-subtle)] mt-0.5">{b.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>

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
            {[
              { label: "Find jobs — citizen search", src: "/images/punjab-jobs/punjab_tile_1_find_jobs.jpg" },
              { label: "Candidate profile", src: "/images/punjab-jobs/punjab_tile_2_candidate_profile.jpg" },
              { label: "Applicants — Kanban view", src: "/images/punjab-jobs/punjab_tile_3_kanban.jpg" },
              { label: "Applicants \u2014 list view", src: "/images/punjab-jobs/punjab_tile_4_list.jpg" },
            ].map((tile, i) => (
              <AnimateIn key={tile.label} delay={i * 0.06}>
                <div className="bg-[var(--color-bg-card)] rounded-2xl aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={tile.src}
                    alt={tile.label}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </AnimateIn>
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
