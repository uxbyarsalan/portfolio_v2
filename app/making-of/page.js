import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Making Of — How This Portfolio Was Built | Arsalan Aslam",
  description: "My work served 20 million people. My portfolio didn't. So I fixed it with AI.",
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
              14 Years of Design. One Conversation That Changed How I Tell My Story.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg text-[var(--color-text-muted)] mt-6 max-w-2xl leading-relaxed">
              This portfolio wasn&rsquo;t designed by an agency. It wasn&rsquo;t built by a developer. It was created through a human-AI collaboration &mdash; a continuous conversation that went from content audit to live website, rethinking how I present 14 years of work along the way.
            </p>
          </AnimateIn>
        </section>

        {/* The Problem */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="wrapper">
            <AnimateIn>
              <div className="md:max-w-2xl">
                <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-inv)] leading-[1.3] tracking-tight">
                  My work served 20 million people.<br />My portfolio didn&rsquo;t do it justice.
                </p>
                <div className="w-full h-[1px] bg-white/20 mt-8 mb-5" />
                <p className="text-sm text-white/50 leading-[1.75]">
                  I had 14 years of design work, 6 major government platforms, metrics that most designers would dream of &mdash; 2.1M citizen requests, 98% adoption rates, 500K+ users. But my portfolio was a generic dark-themed site with surface-level descriptions that could have belonged to anyone. The work deserved better. I deserved better.
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
              Most portfolio redesigns start with picking a template or a color palette. This one started with a question: &ldquo;What&rsquo;s actually wrong with my content?&rdquo; The answer changed everything.
            </p>
          </AnimateIn>
        </section>

        {/* Phases */}
        <section className="wrapper pb-20">
          <Phase
            number="01"
            title="Content audit &amp; rewrite"
            description="Before touching any design, I audited every word on my existing site. Section by section, I identified what was weak, what was wrong, and what was missing. The AI acted as a critical reviewer — questioning claims, flagging vague language, and pushing for specifics."
            tools={["Claude"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Insight title="What changed">
                Every section was rewritten. Hero positioning for dual audience (clients + employers). About section with personal story. Experience descriptions tightened. Pricing popup removed. Spelling of my own name corrected.
              </Insight>
              <Insight title="The shift">
                From generic descriptions to specific, verifiable claims. &ldquo;I design user experiences&rdquo; became &ldquo;I design public-sector platforms used by 20M+ citizens.&rdquo;
              </Insight>
            </div>
          </Phase>

          <Phase
            number="02"
            title="Case study deep dives"
            description="This was the most intensive phase. For each of my 6 projects, I answered 15–20 questions about the real context — team size, before state, design decisions, stakeholder politics, impact data. Nothing was assumed. Everything was verified through conversation."
            tools={["Claude", "ChatGPT"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { p: "Maryam Ki Dastak", d: "2.1M requests. From paper workflows to digital doorstep delivery." },
                { p: "City Watch", d: "8,000 cameras. Research-led dashboard design under pressure." },
                { p: "Punjab Jobs", d: "500K users. Before/after redesign with real screenshots." },
                { p: "Employee Self Service", d: "98% adoption. The community platform nobody expected." },
                { p: "PITB Official", d: "13 screens in 30 hours. Speed as a design skill." },
                { p: "Punjab AQI", d: "36 districts. When color is the interface." },
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
            description="I explored three visual directions — Scandinavian minimal, warm editorial, and modern professional — then picked a hybrid. The design evolved through reference sites, mockups, and 6 iterations, each driven by specific feedback and design principles."
            tools={["Claude", "Gemini"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Insight title="Key decisions">
                Scrolling marquee hero (inspired by Jastin Design). Colored project cards with impact stats. Full-bleed dark sections for rhythm. Pratibha-style cutout mockups. 550px card width for tall, elegant proportions.
              </Insight>
              <Insight title="The logo">
                The AA monogram was designed using Gemini — exploring calligraphic styles that balance personal warmth with professional confidence. Multiple iterations until it felt right.
              </Insight>
            </div>
          </Phase>

          <Phase
            number="04"
            title="Code &amp; build"
            description="The entire site was built in Next.js with React and Tailwind CSS through conversation. I directed every design decision — layout, spacing, typography, animations — while AI handled the code architecture, component structure, and implementation."
            tools={["Claude", "Google Antigravity", "Next.js", "Tailwind CSS", "Framer Motion"]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Insight title="6 iterations">
                v1 was too plain. v2 added drama but was flat. v3 varied the rhythm. v4 added Pratibha-style cards. v5 added the marquee hero. v6 refined everything — single-color cards, cutout mockups, compressed experience, right-aligned dark statement.
              </Insight>
              <Insight title="Every pixel was a decision">
                1240px wrapper or 1400px? 550px cards or 750px? 45px gap or 28px? Multi-color cards or single? Each choice was debated, visualized, and decided through conversation.
              </Insight>
            </div>
          </Phase>

          <Phase
            number="05"
            title="Resume &amp; deployment"
            description="The final piece — a web-based resume that lives on the site with a downloadable PDF. Every bullet was rewritten to name specific projects with real metrics, replacing generic percentages with verifiable impact data. Deployed on Vercel in minutes."
            tools={["Claude", "Vercel"]}
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
                      "Consistency — maintaining voice, tone, and formatting across 8 documents",
                      "Speed — producing first drafts in minutes that would take hours manually",
                      "Code — translating design decisions into working Next.js components",
                      "Critique — questioning weak claims, flagging vague language, pushing for specifics",
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
                      "Truth — every fact, metric, and context came from my memory and records",
                      "Taste — knowing when a design \"felt right\" versus technically correct",
                      "Direction — choosing between options based on intuition and market awareness",
                      "Emotional truth — the personal story, the motivation, the career arc",
                      "Quality bar — rejecting good-enough in favor of genuinely good",
                    ].map((item) => (
                      <p key={item} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{item}</p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* The tools */}
        <section className="wrapper py-20">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The AI toolkit</h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateIn>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7">
                <h3 className="text-lg font-semibold mb-2">Claude</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Anthropic</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">The primary creative partner. Content strategy, case study writing, design direction, code architecture, component building, and iterative refinement &mdash; all through one continuous conversation.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7">
                <h3 className="text-lg font-semibold mb-2">Gemini</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Google</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">Logo design &mdash; the AA monogram. Explored calligraphic styles and iterative refinements until the mark balanced personal warmth with professional confidence.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7">
                <h3 className="text-lg font-semibold mb-2">ChatGPT</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">OpenAI</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">General research &mdash; exploring topics, understanding market context, researching competitive portfolios, and gathering background information for content strategy.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-[var(--color-bg-card)] rounded-2xl p-7">
                <h3 className="text-lg font-semibold mb-2">Google Antigravity</h3>
                <p className="text-xs text-[var(--color-text-subtle)] mb-4">Google</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.7]">The development environment. All code was written, tested, and iterated in Antigravity &mdash; an AI-native IDE that made the build process seamless from first component to deployment.</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Result */}
        <section className="full-bleed bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="wrapper">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-inv)] mb-8">The result</h2>
              <p className="text-lg text-white/60 leading-[1.7] max-w-2xl mb-10">
                A portfolio that finally matches the work. 6 detailed case studies backed by real data. A design system that speaks the Scandinavian design language I now live in. A web resume with every bullet tied to a named project and a real metric. And this page &mdash; proof that AI isn&rsquo;t replacing designers. It&rsquo;s giving us a thinking partner that helps us do our best work.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { n: "8", l: "documents written" },
                  { n: "6", l: "case studies" },
                  { n: "6", l: "iterations" },
                  { n: "1", l: "conversation" },
                ].map((s) => (
                  <div key={s.l}>
                    <span className="text-3xl font-semibold text-[var(--color-text-inv)] stat-number">{s.n}</span>
                    <p className="text-xs text-white/40 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Closing */}
        <section className="wrapper py-20">
          <AnimateIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">The lesson</h2>
              <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.8]">
                <p>
                  AI didn&rsquo;t design this portfolio. I did. AI helped me think clearer, move faster, and maintain quality across a scope that would have taken months alone. It challenged my assumptions, proposed alternatives I hadn&rsquo;t considered, and never got tired of iteration number six.
                </p>
                <p>
                  But every fact came from my memory. Every design choice came from my taste. Every &ldquo;that doesn&rsquo;t feel right&rdquo; came from 14 years of knowing what good looks like. The AI was the instrument. I was the musician.
                </p>
                <p>
                  If you&rsquo;re a designer wondering how to use AI &mdash; don&rsquo;t start with the tools. Start with what you want to say. The tools will help you say it better.
                </p>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* CTA */}
        <section className="wrapper pb-20">
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
