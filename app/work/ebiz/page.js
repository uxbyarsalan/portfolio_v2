import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "eBiz Punjab — Case Study | Arsalan Aslam",
  description: "One portal for business registration, licenses, and permits across multiple Punjab government departments. 100,000+ businesses registered, 7-day process reduced to 2.",
};

function Stat({ value, label }) {
  return (<div className="py-3"><span className="text-3xl md:text-5xl font-semibold tracking-tight stat-number">{value}</span><p className="text-xs text-[var(--color-text-muted)] mt-1.5">{label}</p></div>);
}

function Decision({ title, children }) {
  return (<AnimateIn><div className="mb-12"><h3 className="text-lg font-medium tracking-tight mb-3">{title}</h3><div className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] space-y-4">{children}</div></div></AnimateIn>);
}

export default function EBizCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn><Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">&larr; All projects</Link></AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}><h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">eBiz Punjab</h1></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">An entrepreneur shouldn&rsquo;t need to understand government structure to start a business</p></AnimateIn>
        </section>

        <AnimateIn delay={0.3}>
          <div className="full-bleed aspect-[2.2/1] relative overflow-hidden">
            <Image
              src="/images/ebiz/v2/ebiz_hero.jpg"
              alt="eBiz Punjab — gateway portal for business registration and licensing"
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
              {[{ l: "Client", v: "Government of Punjab" }, { l: "Role", v: "Program Manager — Design" }, { l: "Team", v: "5–10 people" }, { l: "Platform", v: "Web Portal + Admin CRM" }, { l: "Timeline", v: "2024–2025" }].map((m) => (
                <div key={m.l}><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>
              ))}
            </div>
          </AnimateIn>
        </section>

        {/* The Challenge */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">The challenge</p>
            <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">
              Starting a business in Punjab used to mean visiting multiple government offices, submitting the same documents to different departments, paying separate fees at separate counters, and waiting weeks without knowing which department was holding things up.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>
                Punjab already had a Business Registration Portal (BRP), launched in 2018. It worked &mdash; over 100,000 businesses registered through it, and the model was replicated by Sindh and Balochistan. But the BRP only handled registration. Once a business was registered, the owner still needed to visit separate departments for trade licenses, NOCs, labour permits, environmental clearances, and construction approvals.
              </p>
              <p>
                eBiz was built to replace that fragmented experience with a unified platform covering the complete lifecycle of Registrations, Licenses, Certificates, and Other Permits (RLCOs). The scope was fundamentally broader than the old BRP &mdash; not just &ldquo;register your business&rdquo; but &ldquo;start, operate, and grow your business through one digital interface.&rdquo;
              </p>
            </div>
          </AnimateIn>
        </section>

        {/* Signature visual — Parallel Routing Diagram */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-3">Parallel routing &mdash; one application, multiple departments</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-10">The user submits once. The system routes simultaneously. The dashboard shows every status in real time.</p>
          </AnimateIn>

          {/* Input node */}
          <AnimateIn delay={0.05}>
            <div className="flex justify-center mb-2">
              <div className="bg-[#E6F1FB] rounded-xl px-6 py-4 text-center w-full md:w-80">
                <p className="text-[10px] uppercase tracking-widest text-[#185FA5] mb-1">Input</p>
                <p className="text-sm font-semibold text-[#042C53]">One application</p>
                <p className="text-[11px] text-[#185FA5] mt-0.5">One form, one payment, one submit</p>
              </div>
            </div>
            <div className="flex justify-center mb-3">
              <div className="w-px h-6 bg-[var(--color-border)]"></div>
            </div>
          </AnimateIn>

          {/* Branching arrow label */}
          <AnimateIn delay={0.08}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] text-center mb-3">Routes simultaneously to</p>
          </AnimateIn>

          {/* Parallel department tracks */}
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              {[
                { dept: "Industries", time: "2 days", bg: "bg-[#E1F5EE]", text: "text-[#04342C]", sub: "text-[#0F6E56]" },
                { dept: "Labour", time: "5 days", bg: "bg-[#FAEEDA]", text: "text-[#412402]", sub: "text-[#854F0B]" },
                { dept: "PESSI", time: "3 days", bg: "bg-[#EEEDFE]", text: "text-[#26215C]", sub: "text-[#534AB7]" },
                { dept: "Environment", time: "4 days", bg: "bg-[#FCEBEB]", text: "text-[#501313]", sub: "text-[#791F1F]" },
              ].map((d) => (
                <div key={d.dept} className={`${d.bg} rounded-xl p-4 text-center`}>
                  <p className={`text-sm font-semibold ${d.text}`}>{d.dept}</p>
                  <p className={`text-[10px] ${d.sub} mt-0.5`}>{d.time}</p>
                  <p className={`text-[9px] ${d.sub} italic mt-1`}>Receives only what they need</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Integrations */}
          <AnimateIn delay={0.12}>
            <div className="flex flex-wrap justify-center gap-1.5 mb-3">
              {["NADRA", "SECP", "FBR"].map((i) => (
                <span key={i} className="text-[10px] text-[var(--color-text-muted)] bg-[var(--color-bg-card)] rounded-full px-2.5 py-1">{i}</span>
              ))}
              <span className="text-[10px] text-[var(--color-text-subtle)] self-center">&mdash; integrated for identity, company, and tax data</span>
            </div>
          </AnimateIn>

          {/* Converge */}
          <AnimateIn delay={0.14}>
            <div className="flex justify-center mb-3">
              <div className="w-px h-6 bg-[var(--color-border)]"></div>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] text-center mb-3">Converges into</p>
            <div className="flex justify-center">
              <div className="bg-[#E1F5EE] rounded-xl px-6 py-4 text-center w-full md:w-80">
                <p className="text-[10px] uppercase tracking-widest text-[#0F6E56] mb-1">Output</p>
                <p className="text-sm font-semibold text-[#04342C]">One dashboard</p>
                <p className="text-[11px] text-[#0F6E56] mt-0.5">Unified status, real-time, all departments</p>
              </div>
            </div>
          </AnimateIn>

          {/* Key insight */}
          <AnimateIn delay={0.18}>
            <p className="text-xs text-[var(--color-text-subtle)] italic text-center mt-8 max-w-lg mx-auto">
              The user sees one progress bar. Behind it, multiple departments work in parallel on the same application &mdash; each seeing only the documents relevant to their approval.
            </p>
          </AnimateIn>
        </section>

        {/* Key design decisions */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Key design decisions</p></AnimateIn>

          <Decision title="The business type wizard — translating government language into user language">
            <p>Users didn&rsquo;t know which departments they needed. A restaurant owner doesn&rsquo;t think in terms of &ldquo;Shops &amp; Establishment Registration with Labour Department.&rdquo; They think: &ldquo;I want to open a restaurant.&rdquo; Asking users to identify the right government services was asking them to do the government&rsquo;s job.</p>
            <p>The wizard starts with a single question: &ldquo;What kind of business are you starting?&rdquo; The system auto-identifies every registration, license, certificate, and permit required for that specific type &mdash; presented in plain language. The user never sees department names during this step.</p>
            <p>This was the single most important design decision on the project. It transformed the portal from a government-structured system (organized by departments) into a user-structured system (organized by intent). Every subsequent design decision &mdash; the document upload, the routing, the dashboard &mdash; built on this foundation.</p>
          </Decision>

          <Decision title="Multi-department routing — parallel approvals, unified tracker">
            <p>Different departments had different approval timelines. In the old system, applicants tracked each department separately, followed up individually, and had no visibility into which approval was pending. A single slow department could stall an entire business launch without the owner knowing why.</p>
            <p>The system routes a single application to every required department simultaneously. Each department receives only the documents relevant to their approval. Approvals happen in parallel, not in sequence. The user sees a unified progress tracker showing the status of each department&rsquo;s review in real time.</p>
            <p>This was the hardest UX challenge on the project. The routing logic is complex &mdash; different departments need different subsets of documents, have different workflows, and operate on different timelines. But the user-facing interface had to be simple: one progress bar, one status page. The design challenge was absorbing the backend complexity so thoroughly that the user experience feels effortless.</p>
          </Decision>

          <Decision title="Progressive forms — designing against abandonment">
            <p>Document requirements varied dramatically by business type. A sole proprietorship needs different documents than a factory. The old approach showed every possible field and let users figure out which ones applied. Users abandoned these forms midway &mdash; they&rsquo;d start, hit a field they didn&rsquo;t understand, and leave.</p>
            <p>Three features addressed this: conditional fields that only show requirements relevant to the selected business type (reducing form length by 40–60%); auto-save with resume-later for applicants gathering documents over several days; and clear stage indicators that reduce the anxiety of &ldquo;how much more is there?&rdquo;</p>
            <p>Not a revolutionary pattern, but applying it correctly to a government form with 30+ business types and varying requirements across multiple departments required careful information architecture.</p>
          </Decision>
        </section>

        {/* Solution screens */}
        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Sector highlights and main sectors", src: "/images/ebiz/ebiz_tile_1.jpg" },
              { label: "Application landing with comprehensive guidance", src: "/images/ebiz/ebiz_tile_2.jpg" },
              { label: "Documents proof upload", src: "/images/ebiz/ebiz_tile_3.jpg" },
              { label: "Multi-step application flow", src: "/images/ebiz/ebiz_tile_4.jpg" },
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

        {/* The 5-part solution */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">The solution &mdash; a single journey through multiple departments</p></AnimateIn>

          <AnimateIn delay={0.05}>
            <div className="space-y-6">
              {[
                { n: "1", title: "Business type selection & service wizard", desc: "Users select their business type; the system auto-identifies required registrations, licenses, and permits. Plain-language descriptions replace bureaucratic terminology. Supports 30+ business types." },
                { n: "2", title: "Progressive application form", desc: "Multi-stage form that adapts to the selected business type. Conditional fields reduce length by 40–60%. Auto-save and resume-later. CNIC verification through NADRA pulls basic profile data automatically." },
                { n: "3", title: "Unified payment", desc: "All fees across all departments consolidated into a single payment. Supports JazzCash, EasyPaisa, and debit/credit cards. Digital receipts linked to the application." },
                { n: "4", title: "Applicant dashboard & tracking", desc: "One dashboard showing every department's review status in real time. SMS and email notifications at every status change. Downloadable certificates upon approval." },
                { n: "5", title: "Admin CRM for department officers", desc: "Department officers see only applications routed to them, with relevant documents pre-organized. Approve, reject, or request additional documents. Processing timelines tracked for accountability." },
              ].map((s) => (
                <div key={s.n} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center text-xs font-semibold">{s.n}</div>
                  <div>
                    <p className="text-sm font-medium mb-1">{s.title}</p>
                    <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>

        {/* Impact */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Impact &amp; scale</p></AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            <AnimateIn><Stat value="100K+" label="business registrations" /></AnimateIn>
            <AnimateIn delay={0.04}><Stat value="7→2" label="days processing time" /></AnimateIn>
            <AnimateIn delay={0.08}><Stat value="30+" label="business types supported" /></AnimateIn>
            <AnimateIn delay={0.12}><Stat value="3" label="national systems integrated: NADRA, SECP, FBR" /></AnimateIn>
            <AnimateIn delay={0.16}><Stat value="Multi" label="departments, one login, parallel processing" /></AnimateIn>
          </div>
          <AnimateIn delay={0.2}><p className="text-sm text-[var(--color-text-muted)] mt-6 italic">Live at ebiz.punjab.gov.pk. The platform continues to expand as additional business types, departments, and service categories are added.</p></AnimateIn>
        </section>

        {/* Benchmarking */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Benchmarking &amp; standards</p></AnimateIn>
          <AnimateIn delay={0.05}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>The design was informed by two reference frameworks. The old BRP provided the baseline &mdash; with 100,000+ registrations, it validated the core concept of online business registration in Punjab, and its limitation (registration only, no licenses or permits) defined the opportunity space for eBiz.</p>
              <p>World Bank Ease of Doing Business standards informed the design principles &mdash; particularly around processing time reduction, elimination of physical visits, single-window approaches, and transparent tracking. These standards provided a defensible framework in stakeholder discussions, especially when navigating scope and complexity debates.</p>
            </div>
          </AnimateIn>
        </section>

        {/* Reflection */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>eBiz was fundamentally different from every other project in my portfolio. It wasn&rsquo;t about designing screens &mdash; it was about designing across organizational boundaries. The hardest design work happened before any interface was drawn: mapping which departments needed what, understanding how approval workflows differed, and finding the right abstraction layer that would let users interact with one system while multiple departments operated independently behind it.</p>
              <p>The business type wizard is the simplest screen on the entire platform &mdash; a dropdown and a list. But behind that simplicity is a mapping of 30+ business types to hundreds of department-specific requirements. The user sees &ldquo;You need 3 approvals.&rdquo; The system knows which 3 departments, which documents each needs, which fees apply, and how to route the application to all of them simultaneously. The measure of good service design is how much complexity the user never has to encounter.</p>
              <p>NADRA, SECP, FBR &mdash; these aren&rsquo;t just technical integrations. Each one is a design decision about what the user does and doesn&rsquo;t have to provide manually. Designing around government APIs isn&rsquo;t backend work &mdash; it&rsquo;s user experience work.</p>
            </div>
          </AnimateIn>
        </section>

        {/* More projects */}
        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "Maryam Ki Dastak", subtitle: "Doorstep government services", href: "/work/dastak" }, { title: "Punjab Jobs", subtitle: "Employment platform redesign", href: "/work/punjab-jobs" }, { title: "Punjab AQI", subtitle: "Environmental monitoring", href: "/work/aqi" }].map((p) => (
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
