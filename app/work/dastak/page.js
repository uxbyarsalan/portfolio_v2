import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Maryam Ki Dastak — Case Study | Arsalan Aslam",
  description: "Delivering government services to citizens' doorsteps. 2.1M+ requests, 87,000+ facilitators, 40 districts.",
};

function Stat({ value, label }) {
  return (
    <div className="py-3">
      <span className="text-3xl md:text-5xl font-semibold tracking-tight stat-number" style={{ whiteSpace: "nowrap" }}>{value}</span>
      <p className="text-xs text-[var(--color-text-muted)] mt-1.5">{label}</p>
    </div>
  );
}

function ImageBlock({ label, aspect = "aspect-[2/1]" }) {
  return (
    <div className={`full-bleed ${aspect} bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]`}>
      {label}
    </div>
  );
}

function Decision({ title, children }) {
  return (
    <AnimateIn>
      <div className="mb-12">
        <h3 className="text-lg font-medium tracking-tight mb-3">{title}</h3>
        <div className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] space-y-4">
          {children}
        </div>
      </div>
    </AnimateIn>
  );
}

export default function DastakCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        {/* Back link */}
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn>
            <Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">
              &larr; All projects
            </Link>
          </AnimateIn>
        </div>

        {/* Hero */}
        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              Maryam Ki<br />Dastak
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">
              Delivering government services to citizens&rsquo; doorsteps across Punjab
            </p>
          </AnimateIn>
        </section>

        {/* Hero image — full bleed */}
        <AnimateIn delay={0.3}>
          <div className="full-bleed aspect-[2.2/1] relative overflow-hidden">
            <Image
              src="/images/dastak/dastak_hero.jpg"
              alt="Maryam ki Dastak — citizen and facilitator apps"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </AnimateIn>

        {/* Meta — horizontal */}
        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-[var(--color-border)] py-6">
              {[
                { l: "Client", v: "Government of Punjab" },
                { l: "Role", v: "Principal UX/UI Designer" },
                { l: "Team", v: "20+ people" },
                { l: "Platforms", v: "Web, Mobile, CRM" },
                { l: "Timeline", v: "May–Aug 2023" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p>
                  <p className="text-sm font-medium">{m.v}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>

        {/* The Challenge — narrow */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">The challenge</p>
            <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">
              What if a single mother who needs a birth certificate didn&rsquo;t
              have to take a day off work, travel miles to a government office,
              and wait hours &mdash; only to be told she needs another document?
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>
                Before Dastak, accessing government services in Punjab meant one
                thing: going to a government office in person. No digital option
                existed. For 110 million citizens &mdash; especially in rural areas &mdash;
                this was a genuine barrier to accessing their rights.
              </p>
              <p>
                Dastak was designed to eliminate that barrier entirely: five
                interconnected platforms, built from scratch in three months, to
                deliver services directly to citizens&rsquo; doorsteps through a
                network of government-approved facilitators.
              </p>
            </div>
          </AnimateIn>
        </section>

        {/* Ecosystem diagram — between Challenge and Key Decisions */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">How Dastak works — end-to-end service delivery</p>
          </AnimateIn>

          {/* Flow steps */}
          <AnimateIn delay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { n: "1", title: "Citizen", sub: "Requests service", color: "bg-[#E1F5EE] text-[#04342C]", subColor: "text-[#0F6E56]" },
                { n: "2", title: "CRM", sub: "Routes & assigns", color: "bg-[#E6F1FB] text-[#042C53]", subColor: "text-[#185FA5]" },
                { n: "3", title: "Facilitator", sub: "Visits doorstep", color: "bg-[#FAEEDA] text-[#412402]", subColor: "text-[#854F0B]" },
                { n: "4", title: "Delivered", sub: "Verified & closed", color: "bg-[#E1F5EE] text-[#04342C]", subColor: "text-[#0F6E56]" },
              ].map((step) => (
                <div key={step.n} className={`${step.color} rounded-xl p-4`}>
                  <p className="text-sm font-semibold">{step.n}. {step.title}</p>
                  <p className={`text-xs mt-0.5 ${step.subColor}`}>{step.sub}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Context below each step */}
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { text: "Selects from 76 services. No login required — just CNIC & phone number.", note: "Accessibility-first" },
                { text: "Auto-assigns nearest facilitator by district, service type, and load.", note: "Like ride-hailing for government services" },
                { text: "Receives assignment on mobile app. Visits citizen, collects docs, processes.", note: "No office visit needed" },
                { text: "Document delivered to citizen's door. Status updated, feedback collected.", note: "No paperwork lost" },
              ].map((c, i) => (
                <div key={i}>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{c.text}</p>
                  <p className="text-xs text-[var(--color-text-subtle)] italic mt-2">{c.note}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Before vs After */}
          <AnimateIn delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              <div className="bg-[#FCEBEB] rounded-xl px-5 py-4 flex items-center gap-3">
                <span className="text-sm font-semibold text-[#501313]">Before</span>
                <span className="text-xs text-[#791F1F]">Visit office → wait in line → repeat</span>
              </div>
              <div className="bg-[#E1F5EE] rounded-xl px-5 py-4 flex items-center gap-3">
                <span className="text-sm font-semibold text-[#04342C]">After</span>
                <span className="text-xs text-[#0F6E56]">Request → facilitator visits → done</span>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* Key Decisions — narrow */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Key design decisions</p>
          </AnimateIn>

          <Decision title="No login required for service booking">
            <p>
              A deliberate accessibility decision. CNIC-based identification
              with SMS OTP removes every barrier for first-time digital users.
              Every additional registration step is a drop-off point for
              citizens who&rsquo;ve never booked a government service online.
            </p>
          </Decision>

          <Decision title="Automated dispatch with manual fallback">
            <p>
              Citizens book &rarr; nearby facilitators get alerts (like
              ride-hailing) &rarr; automated assignment. If no one accepts, the call
              center manually assigns. This ensured no request went unfulfilled,
              even in early stages with low facilitator density.
            </p>
          </Decision>

          <Decision title="Five modules, one design language">
            <p>
              As design strategist across 20+ people, I established a shared
              framework &mdash; common patterns, consistent terminology, unified
              information architecture &mdash; so that a citizen&rsquo;s booking
              flows seamlessly through CRM to facilitator to delivery.
            </p>
          </Decision>
        </section>

        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Citizen web portal", src: "/images/dastak/dastak_tile_1_web_portal.jpg" },
              { label: "Citizen mobile app", src: "/images/dastak/dastak_tile_2_citizen_app.jpg" },
              { label: "Facilitator / Muavin app", src: "/images/dastak/dastak_tile_3_facilitator_app.jpg" },
              { label: "CRM dashboard", src: "/images/dastak/dastak_tile_4_crm.jpg" },
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

        {/* Impact — narrow with big stats */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Impact</p>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            {[
              { v: "2.1M+", l: "citizen requests submitted" },
              { v: "87,000+", l: "facilitators registered" },
              { v: "40", l: "districts covered" },
              { v: "76", l: "services available" },
              { v: "1.7M+", l: "requests processed" },
              { v: "3 months", l: "from 1 to 22 districts" },
            ].map((s, i) => (
              <AnimateIn key={s.l} delay={i * 0.04}>
                <Stat value={s.v} label={s.l} />
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* Reflection — narrow */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              Design for the ecosystem, not the screen. In complex systems, the
              connections between modules matter more than any individual
              interface. And accessibility isn&rsquo;t a feature &mdash; it&rsquo;s the
              foundation: the no-login decision, the helpline alternative, the
              SMS verification were all deliberate choices to serve citizens
              who&rsquo;d never used a digital government service.
            </p>
          </AnimateIn>
        </section>

        {/* More projects */}
        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "City Watch", subtitle: "Surveillance platform", href: "/work/city-watch" },
                { title: "Punjab Jobs", subtitle: "Employment platform redesign", href: "/work/punjab-jobs" },
                { title: "Employee Self Service", subtitle: "Workplace community app", href: "/work/ess" },
              ].map((p) => (
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
