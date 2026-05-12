import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Punjab AQI — Case Study | Arsalan Aslam",
  description: "Environmental monitoring platform making air quality actionable across 36 districts. Health precautions by condition.",
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

export default function AQICaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn><Link href="/#work" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">&larr; All projects</Link></AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}><h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">Punjab AQI</h1></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">Making invisible air visible &mdash; real-time environmental monitoring for 36 districts</p></AnimateIn>
        </section>

        <AnimateIn delay={0.3}>
          <div className="full-bleed aspect-[2.2/1] relative overflow-hidden">
            <Image
              src="/images/aqi/v2/aqi_hero.jpg"
              alt="Punjab AQI — real-time air quality dashboard for 36 districts"
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
              {[{ l: "Client", v: "EPD, Government of Punjab" }, { l: "Role", v: "Program Manager — Design" }, { l: "Team", v: "2–5 people" }, { l: "Platform", v: "Web Dashboard" }, { l: "Coverage", v: "36 districts" }].map((m) => (
                <div key={m.l}><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">The challenge</p>
            <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">
              Lahore&rsquo;s AQI regularly exceeds 250 &mdash; &ldquo;Very Unhealthy.&rdquo; But what does that mean for a mother deciding whether to send her children to school? For an asthma patient planning their day? Raw numbers don&rsquo;t protect people. Understanding does.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">
              <p>Punjab had no comprehensive government-backed air quality platform. Basic tools existed, but nothing that gave citizens a unified, district-level view of what they were breathing, how it compared across cities, how it changed over time, or what they should do about it based on their personal health conditions.</p>
            </div>
          </AnimateIn>
        </section>

        {/* Data to Action Pipeline */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-3">The design challenge &mdash; bridging three gaps</p>
          </AnimateIn>

          {/* Three gaps */}
          <AnimateIn delay={0.05}>
            <div className="grid grid-cols-3 gap-3 mb-12">
              <div className="bg-[var(--color-bg-card)] rounded-xl p-5 text-center">
                <p className="text-3xl font-semibold tracking-tight mb-1">194</p>
                <p className="text-[10px] text-[var(--color-text-subtle)]">Raw number</p>
                <p className="text-[10px] text-[var(--color-text-subtle)] italic mt-1">Means nothing to citizens</p>
              </div>
              <div className="rounded-xl p-5 text-center" style={{ background: "#FFCCBC" }}>
                <p className="text-3xl font-semibold tracking-tight mb-1" style={{ color: "#4A1B0C" }}>194</p>
                <p className="text-[10px]" style={{ color: "#712B13" }}>Color = severity</p>
                <p className="text-[10px] italic mt-1" style={{ color: "#712B13" }}>Instant comprehension</p>
              </div>
              <div className="bg-[#FCEBEB] rounded-xl p-5 text-center">
                <p className="text-lg font-semibold text-[#501313] mb-1">Asthma alert</p>
                <p className="text-[10px] text-[#791F1F]">Personalized action</p>
                <p className="text-[10px] text-[#791F1F] italic mt-1">Protects people</p>
              </div>
            </div>
          </AnimateIn>

          {/* Color severity system */}
          <AnimateIn delay={0.08}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">Color as communication &mdash; the universal language</p>
            <div className="grid grid-cols-6 gap-1.5 mb-12">
              {[
                { label: "Good", range: "0–50", bg: "#9DF9B7", tc: "#173404" },
                { label: "Moderate", range: "51–100", bg: "#F7CA5E", tc: "#412402" },
                { label: "USG", range: "101–150", bg: "#F96424", tc: "#fff" },
                { label: "Unhealthy", range: "151–200", bg: "#E24B4A", tc: "#fff" },
                { label: "Very bad", range: "201–300", bg: "#7F77DD", tc: "#fff" },
                { label: "Hazardous", range: "300+", bg: "#501313", tc: "#fff" },
              ].map((c) => (
                <div key={c.label} className="rounded-lg px-3 py-2.5 text-center" style={{ background: c.bg }}>
                  <p className="text-xs font-medium" style={{ color: c.tc }}>{c.label}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: c.tc, opacity: 0.8 }}>{c.range}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Health conditions */}
          <AnimateIn delay={0.1}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">Health precautions by condition &mdash; design that protects people</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
              {["Asthma", "Heart", "Allergies", "Sinus", "Cold/Flu", "COPD"].map((condition) => (
                <div key={condition} className="border border-[var(--color-border)] rounded-xl px-3 py-3 text-center">
                  <p className="text-xs font-medium">{condition}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[var(--color-text-subtle)] italic text-center mb-12">Same AQI level, different advice per condition. Designed with EPD domain experts.</p>
          </AnimateIn>

          {/* 5 Modules */}
          <AnimateIn delay={0.12}>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">5 modules &mdash; layered information disclosure</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              {[
                { name: "Dashboard", desc: "Real-time map, city cards", audience: "everyone" },
                { name: "Historical", desc: "Heatmap calendar, daily AQI", audience: "pattern seekers" },
                { name: "Statistics", desc: "Station-level pollutants", audience: "researchers" },
                { name: "Safeguards", desc: "Health precautions", audience: "patients" },
                { name: "Trends", desc: "Annual calendar, patterns", audience: "policymakers" },
              ].map((m) => (
                <div key={m.name} className="bg-[var(--color-bg-card)] rounded-xl p-3">
                  <p className="text-xs font-medium">{m.name}</p>
                  <p className="text-[10px] text-[var(--color-text-subtle)] mt-0.5 leading-relaxed">{m.desc}</p>
                  <p className="text-[9px] text-[var(--color-text-subtle)] italic mt-1">For: {m.audience}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Pollutants */}
          <AnimateIn delay={0.14}>
            <div className="flex flex-wrap gap-1.5">
              {["PM2.5", "PM10", "CO", "SO₂", "NO₂", "O₃"].map((p) => (
                <span key={p} className="text-[10px] text-[var(--color-text-muted)] bg-[var(--color-bg-card)] rounded-full px-2.5 py-1">{p}</span>
              ))}
              <span className="text-[10px] text-[var(--color-text-subtle)] ml-2 self-center">tracked in real-time across 36 districts</span>
            </div>
          </AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Key design decisions</p></AnimateIn>

          <Decision title="Color as communication">
            <p>Every AQI reading is wrapped in a severity color (green &rarr; yellow &rarr; orange &rarr; red &rarr; purple &rarr; maroon) following international standards. Applied consistently across every module &mdash; dashboard, statistics, historical calendar, health advisories. A citizen never needs to memorize what &ldquo;194&rdquo; means; the color tells them instantly.</p>
          </Decision>

          <Decision title="The heatmap calendar">
            <p>365 data points in a single view &mdash; every day of the year colored by AQI severity. Citizens can instantly see that November through February is a wall of red (smog season). Alongside: average AQI, maximum, minimum, and days above standard. Pattern recognition without instruction.</p>
          </Decision>

          <Decision title="Health precautions by condition">
            <p>The hardest design challenge. Condition-specific advice for Asthma, Heart Issues, Allergies, Sinus, Cold/Flu, and COPD &mdash; calibrated to current AQI levels. This transforms the platform from a monitoring tool into a health advisory service. Designed with EPD&rsquo;s domain experts to ensure accuracy.</p>
          </Decision>
        </section>

        <section className="wrapper pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "AQI statistics table", src: "/images/aqi/aqi_tile_1.jpg" },
              { label: "Health precautions by condition", src: "/images/aqi/aqi_tile_2.jpg" },
              { label: "Air quality safeguards detail", src: "/images/aqi/aqi_tile_3.jpg" },
              { label: "Historical air quality data", src: "/images/aqi/aqi_tile_4.jpg" },
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
          <AnimateIn><p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-10">Coverage</p></AnimateIn>
          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
            <AnimateIn><Stat value="36" label="districts monitored" /></AnimateIn>
            <AnimateIn delay={0.04}><Stat value="6" label="pollutants tracked in real-time" /></AnimateIn>
            <AnimateIn delay={0.08}><Stat value="5" label="modules: dashboard, history, stats, health, trends" /></AnimateIn>
          </div>
          <AnimateIn delay={0.1}><p className="text-sm text-[var(--color-text-muted)] mt-6 italic">Design completed and delivered as implementation-ready specifications. In active development when I transitioned from PITB.</p></AnimateIn>
        </section>

        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Reflection</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75]">The gap between data and action is where design lives. Showing someone AQI is 271 is data. Coloring it purple is communication. Telling an asthma patient to keep rescue medication accessible &mdash; that&rsquo;s actionable design. Environmental design carries moral weight: when you&rsquo;re designing for a region with some of the worst air pollution on earth, every decision affects people&rsquo;s respiratory health.</p>
          </AnimateIn>
        </section>

        <section className="wrapper py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-8">More projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "City Watch", subtitle: "Surveillance platform", href: "/work/city-watch" }, { title: "Maryam Ki Dastak", subtitle: "Doorstep government services", href: "/work/dastak" }, { title: "Punjab Jobs", subtitle: "Employment platform redesign", href: "/work/punjab-jobs" }].map((p) => (
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
