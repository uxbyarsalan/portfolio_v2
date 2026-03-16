import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Using .wrapper class from globals.css

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ============================================ */}
        {/* HERO — Marquee + value prop, one viewport    */}
        {/* ============================================ */}
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-[4.5rem] pb-6">
          <div className="overflow-hidden mb-6">
            <div className="marquee-track">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="marquee-text">
                  I&rsquo;m Arsalan Aslam,&nbsp;
                </span>
              ))}
            </div>
          </div>

          <div className="wrapper">
            <AnimateIn>
              <h1 className="hero-heading max-w-4xl">
                Turning complex government workflows into clear, accessible digital experiences &mdash; used by 20M+ citizens
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8">
                {[
                  { n: "14+", l: "years in design" },
                  { n: "76", l: "services digitized" },
                  { n: "22+", l: "platforms shipped" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-1.5">
                    <span className="text-base font-semibold tracking-tight stat-number">{s.n}</span>
                    <span className="text-[12px] text-[var(--color-text-muted)]">{s.l}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* WORK — 2-col, 550px, single color, cutout    */}
        {/* ============================================ */}
        <section id="work" className="wrapper pt-12 pb-32">
          <div className="project-grid">
            {projects.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} />
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ============================================ */}
        {/* DARK STATEMENT — Right-aligned, green dot    */}
        {/* ============================================ */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="wrapper">
            <AnimateIn>
              <div className="md:ml-auto md:max-w-2xl">
                <p className="text-2xl md:text-4xl font-semibold text-[var(--color-text-inv)] leading-[1.25] tracking-tight">
                  When 20 million people use what you designed, every pixel carries responsibility.
                </p>

                <div className="w-full h-[1px] bg-white/20 mt-10 mb-6" />

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#A3E635] mt-1 shrink-0" />
                  <p className="text-sm text-white/50 leading-[1.75]">
                    I pursue opportunities where my work can create real impact, bringing full focus, passion, and relentless drive to every project.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* MY STORY — Photo + text                      */}
        {/* ============================================ */}
        <section id="my-story" className="wrapper py-28 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <AnimateIn>
                <div className="bg-[var(--color-bg-card)] rounded-2xl aspect-[3/4] overflow-hidden flex items-center justify-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.2em]">
                  Your photo
                </div>
              </AnimateIn>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <AnimateIn>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.2] mb-8">
                  Born curious. Trained restless.<br />Designing for millions.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="space-y-5 text-[var(--color-text-muted)] leading-[1.8] text-[15px]">
                  <p>
                    I started my career building web interfaces in Lahore, and over the years grew into
                    leading design strategy for Punjab&rsquo;s largest government technology organization.
                    At PITB, I led UX across 10+ platforms touching everything from police operations to
                    employment services to environmental monitoring &mdash; systems used by over 20 million people.
                  </p>
                  <p>
                    What I bring to every project is an ability to navigate institutional complexity while
                    keeping the end user&rsquo;s experience simple and clear. I&rsquo;m now based in
                    Gothenburg, bringing that same approach to new challenges.
                  </p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <a href="/resume" className="btn-fill inline-block mt-8 text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5">
                  Download resume
                </a>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* EXPERIENCE — Compressed, two bold lines       */}
        {/* ============================================ */}
        <section id="experience" className="wrapper pb-32">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Experience</h2>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <div className="mb-8">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-lg font-semibold">9 years at Punjab Information Technology Board</span>
                <span className="text-[var(--color-text-muted)]">&mdash;</span>
                <span className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  from UX Designer to Program Manager, leading design across 10+ government platforms serving 20M+ citizens
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-4">
                {["Program Manager — Design", "Principal UX/UI", "Sr. UX/UI", "UX/UI Designer"].map((role) => (
                  <span key={role} className="text-[11px] text-[var(--color-text-subtle)] border border-[var(--color-border)] rounded-full px-3.5 py-1.5">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="h-[1px] bg-[var(--color-border)] mb-6" />
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">Previously</span>
              <span className="text-[14px] text-[var(--color-text-muted)]">Sport.CC (2012–16)</span>
              <span className="text-[14px] text-[var(--color-border-hover)]">|</span>
              <span className="text-[14px] text-[var(--color-text-muted)]">Sixlogics (2010–13)</span>
            </div>
          </AnimateIn>
        </section>

        {/* ============================================ */}
        {/* TESTIMONIALS — Dark, featured quote           */}
        {/* ============================================ */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="wrapper">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-inv)] mb-14">Endorsements</h2>
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <div className="mb-14">
                <p className="text-xl md:text-2xl font-medium text-[var(--color-text-inv)] leading-[1.4] max-w-3xl italic">
                  &ldquo;Arsalan&rsquo;s thoughtful leadership and focus on user-centered design have elevated our projects.
                  His dedication has been vital to our team&rsquo;s success.&rdquo;
                </p>
                <div className="mt-5">
                  <p className="text-sm font-medium text-[var(--color-text-inv)]">Adil Iqbal Khan</p>
                  <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">Chief Technology Officer, PITB</p>
                </div>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              {[
                { q: "Arsalan\u2019s design expertise enhanced the Safe City project, improving both system effectiveness and user experience.", n: "M. Ahsan Younas", t: "Managing Director, PSCA" },
                { q: "Arsalan\u2019s contributions have been instrumental in translating complex environmental challenges into clear, actionable solutions.", n: "Imran Hamid Sheikh", t: "Director General, EPD" },
                { q: "Arsalan and his team delivered a seamless online hall booking system that has greatly improved accessibility and efficiency.", n: "Razi Ahmed", t: "Chairman, Lahore Arts Council" },
              ].map((t, i) => (
                <AnimateIn key={t.n} delay={i * 0.06}>
                  <div>
                    <p className="text-sm text-white/60 leading-[1.75] italic mb-4">&ldquo;{t.q}&rdquo;</p>
                    <p className="text-sm font-medium text-[var(--color-text-inv)]">{t.n}</p>
                    <p className="text-[11px] text-[var(--color-text-subtle)] mt-0.5">{t.t}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* MAKING OF — Above footer                     */}
        {/* ============================================ */}
        <section className="wrapper py-20">
          <AnimateIn>
            <Link href="/making-of" className="group block bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] rounded-2xl p-8 md:p-10 transition-all duration-500">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-subtle)] mb-3">Behind the scenes</p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 group-hover:opacity-70 transition-opacity">
                Curious how this portfolio was built?
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 max-w-xl">
                From content audit to live site &mdash; a human-AI collaboration using Claude, Gemini, ChatGPT, and Google Antigravity.
              </p>
              <span className="text-sm font-medium text-[var(--color-text)] group-hover:translate-x-1 inline-block transition-transform">
                Read the story &rarr;
              </span>
            </Link>
          </AnimateIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
