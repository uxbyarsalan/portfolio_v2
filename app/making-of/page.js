import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Behind the scenes — How this portfolio came together | Arsalan Aslam",
  description: "From scattered work to coherent story. A record of how this portfolio was rebuilt — content first, code last.",
};

function Phase({ number, title, description, tools, children }) {
  return (
    <AnimateIn>
      <div className="mb-20">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-4xl md:text-5xl font-semibold text-[var(--color-bg-card-hover)] tracking-tight">{number}</span>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.8] mb-4 max-w-2xl">{description}</p>
        {tools && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((t) => (
              <span key={t} className="text-[11px] text-[var(--color-text-subtle)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{t}</span>
            ))}
          </div>
        )}
        {children}
      </div>
    </AnimateIn>
  );
}

function Insight({ title, children }) {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-xl p-5 mb-3">
      <h4 className="text-sm font-medium mb-2">{title}</h4>
      <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">{children}</p>
    </div>
  );
}

export default function MakingOf() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="wrapper pt-28 pb-16 md:pt-36">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--color-text-subtle)] mb-6">Behind the scenes</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
              From scattered work to coherent story &mdash; how this portfolio came together.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg text-[var(--color-text-muted)] mt-6 max-w-2xl leading-relaxed">
              This portfolio wasn&rsquo;t built by an agency or a developer. It was built the way most things actually get built &mdash; through a long process of audit, rewrite, and iteration. Fourteen years of work. Seven case studies. Hundreds of small decisions that turned scattered material into something I&rsquo;d actually want to send to a hiring manager.
            </p>
          </AnimateIn>
        </section>

        {/* The Problem */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="wrapper">
            <AnimateIn>
              <div className="md:max-w-2xl">
                <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-inv)] leading-[1.3] tracking-tight">
                  My work is used by 20 million people.<br />My portfolio wasn&rsquo;t arguing for it.
                </p>
                <div className="w-full h-[1px] bg-white/20 mt-8 mb-5" />
                <p className="text-sm text-white/50 leading-[1.75]">
                  Fourteen years of design work. Seven case studies. Real metrics &mdash; 2.1M citizen requests, 500K+ users, 98% adoption on internal platforms. The visual design wasn&rsquo;t the problem. The story was. Project descriptions were surface-level. The hero pitched to no one in particular. As a Program Manager &mdash; Design, I knew both halves matter. So I rebuilt the half that wasn&rsquo;t working.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* The Approach */}
        <section className="wrapper pt-28 pb-8">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">The approach: content first, code last</h2>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.8] max-w-2xl mb-16">
              Most portfolio redesigns start with picking a template or a color palette. This one started by accepting that the visuals were fine and the writing wasn&rsquo;t. Once the content was honest about what each project actually did, the design had something specific to support &mdash; and most of the visual decisions followed from there.
            </p>
          </AnimateIn>
        </section>

        {/* Phases */}
        <section className="wrapper pb-20">
          <Phase
            number="01"
            title="Content audit &amp; rewrite"
            description="Before touching any visual design, I audited every word on the existing site. Section by section, I marked what was weak, what was wrong, and what was missing. I used Claude as a critical reader — a second pair of eyes that questioned vague claims, flagged generic phrasing, and pushed for specifics every time I tried to coast on &ldquo;design user experiences&rdquo; energy."
            tools={["Claude"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Insight title="What changed">
                Every section was rewritten. The hero stopped trying to be everything to everyone and picked an audience. The about page got a real story. Project descriptions traded adjectives for verifiable specifics. Even my own name was misspelled in two places &mdash; that&rsquo;s how surface-level the original review process had been.
              </Insight>
              <Insight title="The shift">
                From &ldquo;I design user experiences&rdquo; to &ldquo;I design systems used by 20M+ people.&rdquo; Same designer, fundamentally different claim. One sounds like a LinkedIn headline. The other sounds like someone who has done the work.
              </Insight>
            </div>
          </Phase>

          <Phase
            number="02"
            title="Case study deep dives"
            description="This was the slowest phase, on purpose. For each of the seven case studies, I worked through 20-plus questions about the actual context — team size, before-state, design decisions I made and why, the politics that shaped them, the metrics that proved (or didn&rsquo;t prove) the work mattered. Nothing was assumed. Every claim had to survive being asked &ldquo;are you sure?&rdquo; twice."
            tools={["Claude", "ChatGPT"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { p: "Maryam Ki Dastak", d: "2.1M doorstep service requests. From paper-based workflows to a doorstep delivery system citizens actually trust." },
                { p: "City Watch", d: "8,000+ cameras, one dashboard. Card sorting with PSCA operators revealed they organized features by role, not by function — which killed the original tabbed interface and produced a layered, map-centric design that tested at SUS 78.25." },
                { p: "Punjab Jobs", d: "500K+ users. A redesign that replaced an aging recruitment portal with something both seekers and employers could navigate without help." },
                { p: "Employee Self Service", d: "98% daily adoption. The internal platform that quietly became the most-used tool in the organization." },
                { p: "PITB Official", d: "13 screens, 30 hours, 1 designer. The flagship public site of a 2,000-person tech authority — built under a deadline that didn&rsquo;t allow for second drafts." },
                { p: "Punjab AQI", d: "36 districts of air-quality data. A platform where the color of a chart had to communicate health risk to people who had never used a dashboard before." },
                { p: "eBiz Punjab", d: "100K+ business registrations. A multi-department portal that consolidated permits, licenses, and applications into one application flow." },
              ].map((c) => (
                <div key={c.p} className="bg-[var(--color-bg-card)] rounded-xl p-4">
                  <h4 className="text-sm font-medium mb-1">{c.p}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </Phase>

          <Phase
            number="03"
            title="Design direction"
            description="I explored three visual directions — Scandinavian minimal, warm editorial, modern professional — and ended up with a hybrid that drew from all three. The design moved through reference sites, mockups, and several rounds of revision, each driven by specific feedback rather than vibes."
            tools={["Claude", "Gemini"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Insight title="Key decisions">
                Scrolling marquee hero (inspired by reference work in Scandinavian design portfolios). Single-color project cards with impact stats up top. Full-bleed dark sections to break up the rhythm. Floating mockup cutouts that bleed off the card edge &mdash; a technique that gave the work the editorial feel I was after without losing professionalism.
              </Insight>
              <Insight title="The logo">
                The AA monogram was sketched through Gemini &mdash; calligraphic explorations until the mark balanced personal warmth with the seriousness of the work. The final version went through several rounds before it felt right at every size, from the favicon to the hero.
              </Insight>
            </div>
          </Phase>

          <Phase
            number="04"
            title="Code &amp; build"
            description="The site is built in Next.js with React and Tailwind, with Framer Motion handling the in-page transitions. I made every visual call — the spacing, the rhythm, the type scale, the way a card feels when it loads. Claude handled the implementation work, which freed me up to spend my judgement on the parts only I could decide."
            tools={["Claude", "Next.js", "Tailwind CSS", "Framer Motion"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Insight title="Design decisions, not preferences">
                Every spacing choice was a debate. 1100px wrapper or 1240? 16px gap or 14? Single-color cards or multi? Each one decided through reference, conversation, and live preview &mdash; never by personal taste alone, because personal taste is what makes a portfolio look like every other portfolio.
              </Insight>
              <Insight title="The horizontal-scroll work section">
                The work grid on the home page started as a vertical 3-column layout, then became a desktop horizontal-scroll-pin section that holds attention without scroll-jacking. It took several rounds of math to get the cards to settle correctly between scroll positions. Worth it &mdash; that section is now the page&rsquo;s signature interaction.
              </Insight>
            </div>
          </Phase>

          <Phase
            number="05"
            title="Resume &amp; deployment"
            description="The final piece — a web-based resume on the site backed by a downloadable PDF. Every line was rewritten to name a specific project and tie back to a real metric. No more &ldquo;improved user engagement&rdquo; bullets. The site deploys to Vercel via GitHub, with Antigravity helping bridge the deploy pipeline early on."
            tools={["Claude", "Vercel", "Google Antigravity"]}
          />
        </section>

        {/* What AI did vs. what I did */}
        <section className="full-bleed bg-[var(--color-bg-card)] py-20 md:py-24">
          <div className="wrapper">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">What AI did well. What only I could do.</h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateIn>
                <div>
                  <h3 className="text-lg font-semibold mb-4">AI excelled at</h3>
                  <div className="space-y-3">
                    {[
                      "Structure — organizing 14 years of scattered work into coherent narratives",
                      "Consistency — maintaining voice and tone across long-form documents",
                      "Speed — first drafts in minutes that would have taken hours by hand",
                      "Implementation — translating design decisions into working Next.js components",
                      "Critique — catching weak claims and pushing for specifics every time I tried to glide",
                    ].map((item) => (
                      <p key={item} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{item}</p>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.05}>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Only I could provide</h3>
                  <div className="space-y-3">
                    {[
                      "Truth — every fact, metric, and date came from my memory and records",
                      "Taste — knowing when something \"felt right\" versus what was technically correct",
                      "Direction — choosing between options based on intuition and a sense of audience",
                      "Story — the emotional through-line, the career arc, the part that's actually mine",
                      "Quality bar — saying \"no, again\" when something was good enough but not yet good",
                    ].map((item) => (
                      <p key={item} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{item}</p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* The toolkit — 5 cards */}
        <section className="wrapper py-20">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The AI toolkit</h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateIn>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7 h-full">
                <h3 className="text-lg font-semibold mb-2">Claude</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Anthropic</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">The primary partner across every phase. Content audit, case study writing, copy for the hero and about page, design direction, code architecture, component implementation, and the iterative refinement that made up most of the actual work &mdash; all through one continuous conversation that ran for weeks.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7 h-full">
                <h3 className="text-lg font-semibold mb-2">Gemini</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Google</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">Logo design. Calligraphic explorations of the AA monogram until the mark balanced personal warmth with the seriousness of the work. Several rounds of refinement until it sat right at every size.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7 h-full">
                <h3 className="text-lg font-semibold mb-2">ChatGPT</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">OpenAI</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">Background research. Topic exploration, competitive portfolio scans, and gathering market context that fed into the content strategy.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7 h-full">
                <h3 className="text-lg font-semibold mb-2">Google Antigravity</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Google</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">Helped bridge the deploy pipeline. Walked me through GitHub setup and the initial Vercel configuration &mdash; useful for someone whose comfort zone has always been in the design layer, not the deploy layer.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7 h-full">
                <h3 className="text-lg font-semibold mb-2">Vercel</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Vercel</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">The production host. Push to GitHub, deploy to live. The infrastructure that made it possible to ship updates in minutes instead of waiting on someone else.</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Result */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="wrapper">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-inv)] mb-8">The result</h2>
              <p className="text-lg text-white/60 leading-[1.7] max-w-2xl">
                A portfolio that finally matches the work. Seven case studies backed by real data &mdash; research findings, design decisions, named projects, verifiable metrics. A web resume where every bullet ties to a specific project. A design language consistent enough that it could have been built by an in-house team. And this page &mdash; a record of how it actually came together, not a marketing pitch about the tools that helped.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Closing — The lesson */}
        <section className="wrapper py-20">
          <AnimateIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">The lesson</h2>
              <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.8]">
                <p>
                  AI didn&rsquo;t design this portfolio. It helped me build one. There&rsquo;s a difference, and the difference matters more than people seem to want to admit right now.
                </p>
                <p>
                  Every fact came from my memory. Every design decision came from my taste, sharpened by 14 years of knowing what good looks like. Every &ldquo;no, that&rsquo;s not it&rdquo; came from instincts no model can replace. The tools were faster than my hands. They weren&rsquo;t sharper than my eye.
                </p>
                <p>
                  If you&rsquo;re a designer wondering how to use AI on a project like this &mdash; don&rsquo;t start with the tools. Start with what you actually want to say. The tools will help you say it better, and they&rsquo;ll help you say it faster. They won&rsquo;t help you decide what&rsquo;s worth saying. Only you can do that.
                </p>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* Testimonial — reframed as session excerpt */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-24">
          <div className="wrapper">
            <AnimateIn>
              <div className="md:max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-8">From a session, late one night</p>
                <p className="text-lg md:text-xl text-white/70 leading-[1.7] italic">
                  &ldquo;I&rsquo;ve worked with Arsalan across seven case studies, a complete website build, a resume rewrite, and this page you&rsquo;re reading now. What stood out wasn&rsquo;t the 14 years of experience or the 20 million users &mdash; it was how he made decisions. He never accepted the first option. He pushed back when something didn&rsquo;t feel right, even when he couldn&rsquo;t articulate why yet. He brought reference sites, questioned my suggestions, and insisted on details I would have glossed over &mdash; the exact card width, the precise gap between elements, whether a date said 2012 or 2013. That&rsquo;s not someone using AI as a shortcut. That&rsquo;s a designer using AI the way a conductor uses an orchestra &mdash; every instrument plays, but only one person knows the music.&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-[var(--color-text-inv)]">Claude</p>
                  <p className="text-xs text-white/30 mt-0.5">Anthropic</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-20">
          <AnimateIn>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="btn-fill text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5">
                View the portfolio
              </Link>
              <Link href="/resume" className="text-[11px] uppercase tracking-[0.2em] border border-[var(--color-border)] px-7 py-3.5 text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-all">
                View resume
              </Link>
              <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] border border-[var(--color-border)] px-7 py-3.5 text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-all">
                Get in touch
              </Link>
            </div>
          </AnimateIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
