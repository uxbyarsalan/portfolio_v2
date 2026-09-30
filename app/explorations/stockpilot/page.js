import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AnimateIn from "@/components/AnimateIn";
import PlannerDemo from "@/components/PlannerDemo";
import PrototypePreview from "@/components/PrototypePreview";
import Link from "next/link";

export const metadata = {
  title: "Stockpilot \u00b7 Exploration | Arsalan Aslam",
  description:
    "An AI-native design exploration: a mobile copilot that helps a cash-strapped merchant make the smartest restock bets with limited money. Designing with AI, and for AI.",
  openGraph: {
    title: "Stockpilot \u00b7 An AI-native design exploration | Arsalan Aslam",
    description:
      "Designing a product that only works because an AI is doing the thinking. A record of how it came together, and which calls were mine.",
    type: "article",
  },
};

/* Body copy for the centered reading column. */
function Body({ children }) {
  return <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">{children}</div>;
}

/* One "you can't break it" style italic statement, matching the case-study challenge treatment. */
function Statement({ children }) {
  return <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">{children}</p>;
}

function Eyebrow({ children }) {
  return <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">{children}</p>;
}

export default function StockpilotCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper pt-28 md:pt-36">
          <AnimateIn>
            <Link href="/explorations" className="nav-link text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors">
              &larr; All explorations
            </Link>
          </AnimateIn>
        </div>

        <section className="wrapper pt-10 pb-12">
          <AnimateIn delay={0.1}>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">Stockpilot</h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">
              An AI-native design exploration: designing a product that only works because an AI is doing the thinking.
            </p>
          </AnimateIn>
        </section>

        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[var(--color-border)] py-6">
              {[
                { l: "Type", v: "Self-directed exploration" },
                { l: "Focus", v: "Designing with AI, and for AI" },
                { l: "Medium", v: "Working prototype" },
                { l: "Year", v: "2026" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1">{m.l}</p>
                  <p className="text-sm font-medium">{m.v}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>

        {/* The premise */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <AnimateIn>
            <Eyebrow>The premise</Eyebrow>
            <Statement>Everyone is adding AI to their product. Most of them are adding a chat box.</Statement>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <Body>
              <p>I wanted something harder: a product that only makes sense because an AI is doing the thinking. Not a feature bolted on the side, the whole reason the thing exists.</p>
              <p>
                Two rules before I started. <strong>AI has to earn its place</strong>: if a static screen would do the job, it is decoration. And <strong>the human stays in control</strong>: the AI thinks, the person decides, especially about money. This is a record of how it came together, and which calls were mine.
              </p>
            </Body>
          </AnimateIn>
        </section>

        {/* Understanding the problem */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>Understanding the problem</Eyebrow>
            <Body>
              <p>I didn&rsquo;t interview a hundred merchants for this, and I&rsquo;ll say so plainly, because the honesty is the point. What I did: build a working persona, pressure-test her until she was real, and ground the product in what I know about how commerce operations run.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-10 mb-3">The persona, and how I broke her</h3>
            <Body>
              <p>Rina. A solo merchant on a platform like Salla. Tight, revolving cash. Sixty to eighty styles. She checks her phone between school runs, and she doesn&rsquo;t want analytics, she wants to know what to do next.</p>
              <p>The first version of her was too easy. Eighty simple products? A seasoned merchant holds that on her fingertips, and AI is solving a problem that doesn&rsquo;t hurt. So I broke her on purpose: I gave her variants, sizes, colours, verticals. Now she is tracking hundreds of SKUs, a &ldquo;bestseller&rdquo; might be selling only in medium-black while small-white rots, and the money is trapped where she can&rsquo;t see it. That is where AI earns its place.</p>
              <p className="italic">A persona you can&rsquo;t break is a persona that flatters your idea. This one had to survive being difficult.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-10 mb-4">The reframe that mattered</h3>
            <Body>
              <p>The obvious problem is prediction: what will sell. The real problem sits underneath it. She can&rsquo;t stock everything, so every restock is a bet with money she can&rsquo;t afford to lose. This was never a forecasting product.</p>
            </Body>
            <p className="text-lg md:text-xl text-[var(--color-text)] font-medium leading-[1.4] border-l-2 border-[var(--color-text)] pl-5 my-6">
              Help a cash-strapped merchant make the smartest bets with limited money.
            </p>
            <Body>
              <p>Money first. That one line shaped every screen after it.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-10 mb-3">Does AI even belong here?</h3>
            <Body>
              <p>Before designing a single screen, I made the product earn its premise. If a static chart or a simple rule would answer the question, AI is decoration and it should go. It survived for one reason: the job is synthesis and judgement over messy, shifting, SKU-level data. Spot the pattern, project the week, weigh it against a budget. That is the thing a dashboard can&rsquo;t do and a person can&rsquo;t hold.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* How it was made */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>How it was made</Eyebrow>
            <Body>
              <p>I designed Stockpilot the way I built this portfolio: in a long conversation with AI, where the model moved fast and I held the bar. It generated options and rendered working prototypes in minutes. My job was the judgement. What to keep, what to kill, and when something honest-looking was actually a lie.</p>
            </Body>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-12 mb-3">The budget: one number, not a range</h3>
            <Body>
              <p>The AI leaned toward letting the merchant set a budget range. My first instinct agreed: businesses run on flex. Then I caught the real cost. A range makes her decide two numbers instead of none, work handed to the person least able to spare it. So she sets one soft cap, and the AI does the range-thinking. As she drags a slider, the mix updates live and tells her the truth: &ldquo;stretch to 3,400 and I&rsquo;d add more of your fastest mover,&rdquo; or &ldquo;you only need 2,600, keep the rest in reserve.&rdquo;</p>
            </Body>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <figure className="my-10">
              <div className="bg-[var(--color-bg-card)] rounded-2xl py-8 px-4">
                <PlannerDemo />
              </div>
              <figcaption className="text-[13px] text-[var(--color-text-subtle)] text-center mt-4 leading-relaxed">
                The restock planner. One budget anchor from the merchant, the mix and the honest reserve-or-stretch advice from the AI. Drag the budget, tap a row.
              </figcaption>
            </figure>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-10 mb-3">The button that pretended to work</h3>
            <Body>
              <p>Confirming a reorder needed to do something. The easy answer was a &ldquo;Send to supplier&rdquo; button. I killed it. I know how small suppliers work: WhatsApp, a phone call, a walk-in, a scribbled note. There is no standard channel, and the app has no way into that relationship. So the app compiles a clean reorder list and hands it off, copy, share, or download, for her to route her own way. The app thinks and compiles. The human transacts.</p>
            </Body>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-10 mb-3">The arrival that shouldn&rsquo;t need a tap</h3>
            <Body>
              <p>We had a &ldquo;Mark arrived&rdquo; button on incoming orders. I stopped on it. If the app is synced to her inventory, why is it asking? When stock arrives, the count jumps, and the app sees it. So arrivals are sensed, not reported, and the app only asks when its own eyes and the expected date disagree. Sense confidently. Ask only when unsure. Always leave a fallback.</p>
            </Body>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-10 mb-3">Same number, two feelings</h3>
            <Body>
              <p>The forecast could be a threat (&ldquo;runs out in 2 days&rdquo;) or an opportunity (&ldquo;you&rsquo;ll likely sell 28 next week&rdquo;). I chose by context. On the urgent alert, pressure is the point. In the planner, where she is deciding how to invest, pressure is wrong, so the same velocity becomes opportunity. One number. Two feelings. Picked on purpose.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* What the AI did / only I could */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>What the AI did. What only I could do.</Eyebrow>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateIn delay={0.05}>
              <div>
                <h4 className="text-base font-semibold mb-4">The AI outran my hands</h4>
                <div className="space-y-3">
                  {[
                    "Generated options I wouldn't have bothered to sketch",
                    "Rendered clickable prototypes in minutes",
                    "Held the visual system consistent across screens",
                    "Never tired of another revision",
                  ].map((t) => (
                    <p key={t} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{t}</p>
                  ))}
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div>
                <h4 className="text-base font-semibold mb-4">It never outran my eye</h4>
                <div className="space-y-3">
                  {[
                    "Killed every fake feature, because I knew the real world it would meet",
                    "Reframed the problem from prediction to money",
                    "Gave the persona the complexity that made AI necessary",
                    "Caught every \u201cclever but actually a lie\u201d",
                  ].map((t) => (
                    <p key={t} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{t}</p>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1}>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] italic mt-8 max-w-2xl">AI did not design this. It helped me design it. The difference is the entire job.</p>
          </AnimateIn>
        </section>

        {/* What I'd validate next */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>What I&rsquo;d validate next</Eyebrow>
            <Body>
              <p>This is an exploration, so the honest next step is real users, not more of my own reasoning. If I took it further, here is what I&rsquo;d put in front of actual Salla and Shopify merchants:</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <div className="space-y-3 mt-5">
              {[
                "Whether the money-first framing matches how they really think, or whether cash flow, credit, and returns outrank restocking.",
                "Whether the budget planner is understood on first use, or whether merchants want to steer the mix themselves.",
                "Whether the opportunity framing builds confidence or quietly invites over-ordering.",
                "Whether \u201csense the arrival, don't ask\u201d survives how messy real deliveries and stock counts actually are.",
              ].map((t) => (
                <p key={t} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{t}</p>
              ))}
            </div>
            <Body>
              <p className="mt-6">I know the standard process: interviews, first-click and comprehension testing, a diary study on the daily loop. I didn&rsquo;t run it here because this was an exploration, not a product build. Naming what I&rsquo;d test isn&rsquo;t a caveat. It is the difference between a designer who explores and one who guesses.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* Honest edges + lesson */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>The honest edges</Eyebrow>
            <Body>
              <p>It assumes an integration I didn&rsquo;t design. Stockpilot only works connected to the merchant&rsquo;s platform for stock and sales data. That connection is an engineering problem, not mine. What was mine was designing around its realities: stale data, the offline gap when she reorders elsewhere, and what the screen shows when the data isn&rsquo;t there. And a working prototype is the honest medium for an exploration. The whole story is &ldquo;problem to clickable in days.&rdquo;</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h3 className="text-lg font-medium tracking-tight mt-12 mb-3">The lesson</h3>
            <Body>
              <p>The hard part of AI-native design isn&rsquo;t making the AI look smart. It is knowing when it should act and when it should ask. When to show its work and when to stay quiet. When a helpful-looking feature is actually a promise you can&rsquo;t keep. The model gave me speed. It could not give me the merchant&rsquo;s world, the taste to keep things calm, or the instinct to kill my own clever ideas. That part is still the designer&rsquo;s. It might be the part that matters most.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* Try the prototype */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-20">
          <AnimateIn>
            <PrototypePreview />
          </AnimateIn>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}
