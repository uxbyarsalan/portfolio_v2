import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AnimateIn from "@/components/AnimateIn";
import PrototypePreview from "@/components/PrototypePreview";
import Link from "next/link";

export const metadata = {
  title: "Sambhal · Exploration | Arsalan Aslam",
  description:
    "An AI-native design exploration: a second brain for a design lead who holds too many threads. Intake, triage, and a project memory built to be for the people it watches.",
  openGraph: {
    title: "Sambhal · An AI-native design exploration | Arsalan Aslam",
    description:
      "Designing an AI copilot for a design lead, from nine years in the chair. What it should do, and what it should refuse to pretend.",
    type: "article",
  },
};

function Body({ children }) {
  return <div className="space-y-5 text-[15px] text-[var(--color-text-muted)] leading-[1.75]">{children}</div>;
}
function Statement({ children }) {
  return <p className="text-xl md:text-2xl text-[var(--color-text)] leading-[1.5] font-medium italic mb-8">{children}</p>;
}
function Eyebrow({ children }) {
  return <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">{children}</p>;
}
function H3({ children }) {
  return <h3 className="text-lg font-medium tracking-tight mt-10 mb-3">{children}</h3>;
}
function Bullet({ children }) {
  return (
    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text)]">{children}</p>
  );
}

export default function SambhalCaseStudy() {
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
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]">Sambhal</h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-6 max-w-xl leading-relaxed">
              An AI-native design exploration: a second brain for a design lead who holds too many threads.
            </p>
            <p className="text-sm text-[var(--color-text-subtle)] mt-4 max-w-xl leading-relaxed italic">
              Sambhal (&#1587;&#1606;&#1576;&#1726;&#1575;&#1604;) is the Urdu word for holding it all together: to handle, to catch something before it falls, to take care of. It is what a lead does at four in the afternoon with ten threads in the air.
            </p>
          </AnimateIn>
        </section>

        <section className="wrapper py-10">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[var(--color-border)] py-6">
              {[
                { l: "Type", v: "Self-directed exploration" },
                { l: "Focus", v: "Designing for people, not just with AI" },
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
            <Body>
              <p>Picture a design lead with ten designers and a dozen products in flight. Every product has its own stakeholder, with their own taste and their own way of working. Asks arrive all day, by email, by WhatsApp, by a call, by someone stopping at the desk. Half say &ldquo;by Thursday.&rdquo;</p>
              <p>The lead is hands-on, so they are buried in one project when a meeting call drops for another, and they have sixty seconds to reload that project&rsquo;s whole state in their head. They hand work to a designer and ask to be kept in the loop, and the designer forgets, because reporting isn&rsquo;t the designer&rsquo;s job. The designer&rsquo;s job is design.</p>
              <p>Every design lead I know lives some version of this. I chose it because I lived the loudest version: nine years leading design in a large government technology organization, serving a dozen departments at once, health, police, motorway, education, each with its own head and its own coordinator. Nothing in this case study is invented about the problem. <strong>The setting is specific; the problem isn&rsquo;t.</strong></p>
              <p>After Stockpilot, I wanted a second exploration in a different domain, with the same two rules. <strong>AI has to earn its place:</strong> if a dashboard would do, AI is decoration. And <strong>the human stays in control</strong>, especially over other humans. This time the humans being decided about were my own team, which made the second rule the whole product.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* Understanding the problem */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>Understanding the problem</Eyebrow>
            <H3>Four pains, from the chair</H3>
            <Body>
              <p>I started with the four things that actually hurt, in the order they hurt.</p>
              <p><strong>Too many ad-hoc asks.</strong> Daily, with no warning, with &ldquo;yesterday&rdquo; deadlines. This is the trigger for everything else.</p>
              <p><strong>Context-switching.</strong> Ten designers on ten projects for ten departments, and the lead holds the context of all of them, because nowhere else does.</p>
              <p><strong>Invisible load.</strong> You cannot see who is carrying what. You trust people, and sometimes trust is the only information you have.</p>
              <p><strong>Heads with taste.</strong> Some are friendly, some are brusque, some never give a minute extra. The designers everyone wants are already the busiest.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The reframe</H3>
            <Body>
              <p>My first brief was a team workload dashboard. Then I noticed that every pain on the list belonged to the lead, not the team. The team&rsquo;s load was invisible <em>to the lead</em>. The context lived <em>in the lead&rsquo;s head</em>. The ad-hoc asks landed <em>on the lead</em>.</p>
            </Body>
            <p className="text-lg md:text-xl text-[var(--color-text)] font-medium leading-[1.4] border-l-2 border-[var(--color-text)] pl-5 my-6">
              Not &ldquo;see your team&rsquo;s capacity.&rdquo; A second brain for one person who is holding too much.
            </p>
            <Body>
              <p>That one move decided the rest: heads never log in, designers touch it in two taps, and the whole thing can be adopted by a single lead without moving the organization onto a new platform.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The scarce resource isn&rsquo;t hours</H3>
            <Body>
              <p>Here is the detail only someone who ran the team would know. Not every designer can take ambiguous, high-stakes, brand-new work. Of ten, three or four could. The rest were fast executors or visual specialists, excellent at what they did, wrong for a blank-page portal concept.</p>
              <p>So the real constraint on any ask isn&rsquo;t capacity. It is craft fit first, then capacity, then who knows the department, then who already holds the project&rsquo;s context, then fairness. Five things. No lead can hold all five for ten people and fifteen projects at four in the afternoon. That is where AI earns its place.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>Does AI belong here?</H3>
            <Body>
              <p>I ran the same test as Stockpilot. If a static view or a rule answers the question, AI goes. It survived for one reason: the job is synthesis over messy, shifting signals, an all-teams email with one line that&rsquo;s ours, a Figma file that went quiet, a head&rsquo;s working style, a deadline with four days of slack. Spot it, weigh it, propose. A dashboard can&rsquo;t, and a person can&rsquo;t hold it.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* How it was made */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>How it was made</Eyebrow>
            <Body>
              <p>I built Sambhal the way I built Stockpilot: in a long conversation with AI, where the model moved fast and I held the bar. Screens in minutes. My job was the judgment, and this time a lot of the judgment was about my own team.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The intake that reads the whole email</H3>
            <Body>
              <p>At my organization an email was mandatory for every real task. Many went to all teams: six bullets, one for backend, one for QA, one for design. Everyone scanned for their line.</p>
              <p>Sambhal reads the email and pulls out only the design items, labeled ones with confidence, unlabeled ones as &ldquo;possibly design, here&rsquo;s why.&rdquo; Nothing becomes an ask until the lead confirms with a tap. And it does something a filter wouldn&rsquo;t: it keeps every other team&rsquo;s points in the project&rsquo;s brief, because the lead responsible for the whole product&rsquo;s experience needs to know what backend is shipping, not just what design owes.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>One recommendation, with its reasoning laid bare</H3>
            <Body>
              <p>The triage screen shows one pick and the five reasons, honestly: craft and domain green, capacity and fairness amber. It says the uncomfortable thing in its own voice: <em>best fit, but he&rsquo;s close to the edge.</em> Then it offers the honest alternative. The lead decides. It never assigns.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The no-clean-answer case</H3>
            <Body>
              <p>A Ministry wants a new portal concept by Monday. It needs a deep problem-solver. All three are spoken for.</p>
              <p>A workload tool would assign it to whoever has the lowest load and call it done. Sambhal says there is no clean answer, shows the three plates so you can see it for yourself, and lays out the real options with their costs: trade a deadline with another head who has slack, pair a senior with a junior, shift a defined task to free someone, buy time.</p>
              <p>And a fifth, which I almost left out: assign it anyway, on top of someone&rsquo;s week. Sometimes nothing can move and the honest option is extra hours. A tool that only offered the options it approved of would be preachy, not humane. So the extra-hours path exists, and it is said out loud to the person, counted toward fairness so it isn&rsquo;t the same designer next time, and visible on their plate.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>Two deadlines, not one</H3>
            <Body>
              <p>Every lead I know does this and no tool models it. The stakeholder says Friday. The lead tells the team Wednesday. The buffer is for review, polish and surprises, and sometimes the lead simply doesn&rsquo;t share the real date. Sambhal keeps both: the stakeholder&rsquo;s date for the lead&rsquo;s eyes, the team date for the designer&rsquo;s.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>Sense, don&rsquo;t ask, applied to people</H3>
            <Body>
              <p>The designer who forgot to keep me in the loop wasn&rsquo;t lazy. Reporting wasn&rsquo;t his job. So Sambhal never asks designers to report. It watches the work: a Figma file touched, a handoff made, an approval email. The designer&rsquo;s whole interface is two taps, &ldquo;got it&rdquo; and a capacity flag. The flag has teeth: raising it pauses new asks to them immediately, and nobody asks why.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The commitments ledger</H3>
            <Body>
              <p>The thing that blindsides a lead in a cross-team meeting is never the project status. It is a person from iOS standing up and saying &ldquo;you committed that to me.&rdquo; So the project brief leads with what we promised to whom, and what is owed to us, with honest slipping markers. Unglamorous, and probably the most used screen in the product.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The AI says less as you learn</H3>
            <Body>
              <p>On day one, a paragraph explains why there&rsquo;s no clean answer. By day thirty, the three amber pills say it and the paragraph has moved behind an info icon. Most AI products add more voice with time. A copilot that respects that you&rsquo;ve learned should add less.</p>
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
                  <Bullet>Generated options I wouldn&rsquo;t have bothered to sketch</Bullet>
                  <Bullet>Rendered connected prototypes in minutes</Bullet>
                  <Bullet>Held the visual system across a dozen screens</Bullet>
                  <Bullet>Never tired of another revision</Bullet>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div>
                <h4 className="text-base font-semibold mb-4">It never outran the chair</h4>
                <div className="space-y-3">
                  <Bullet>Knew asks arrived by mandatory email and WhatsApp couldn&rsquo;t be integrated, so intake was built on what was real</Bullet>
                  <Bullet>Knew which designers could take blank-page work, so craft fit became the first filter</Bullet>
                  <Bullet>Knew heads negotiated with each other, so the trade became an option</Bullet>
                  <Bullet>Knew extra hours happen, so the tool stopped pretending they don&rsquo;t</Bullet>
                  <Bullet>Knew what it feels like to be watched by a tool, so designers see only their own plate and nothing is scored</Bullet>
                </div>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1}>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] italic mt-8 max-w-2xl">AI did not design this. It helped me design it. The difference is the entire job.</p>
          </AnimateIn>
        </section>

        {/* What already exists */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>What already exists</Eyebrow>
            <Body>
              <p>I checked before I built. Asana and ClickUp assign by capacity and skills. Shortwave and Microsoft Copilot turn emails into tasks. Copilot preps you for meetings from your mail and files. Viva Insights flags burnout from activity metadata. Float and Runn schedule people in hours.</p>
              <p>Every piece of Sambhal&rsquo;s plumbing exists somewhere. What doesn&rsquo;t exist is the judgment layer on top: fit that includes domain and fairness, honesty when there&rsquo;s no fit, a commitments ledger, two deadlines, and rules that protect the people being assigned. Incumbents optimize allocation. Sambhal supports one person&rsquo;s judgment and protects the people under it.</p>
              <p>The clearest evidence of the gap is a job posting. A 2026 Design Operations role at a well-known software company reads like Sambhal&rsquo;s feature list: redesign intake, maintain a live view of capacity, minimize overload, act as liaison to internal clients. Organizations that can afford a person do this by hand. Most teams of ten do it in the lead&rsquo;s head.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* What I'd validate next */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>What I&rsquo;d validate next</Eyebrow>
            <Body>
              <p>This is an exploration, so the honest next step is other leads, not more of my reasoning.</p>
            </Body>
            <div className="space-y-3 mt-5">
              <Bullet>Whether leads outside government technology recognize the two-tier stakeholder model, or whether it&rsquo;s specific to where I worked.</Bullet>
              <Bullet>Whether designers trust the capacity flag, or game it, or never touch it.</Bullet>
              <Bullet>Whether &ldquo;possibly design&rdquo; items get confirmed or ignored once the novelty wears off.</Bullet>
              <Bullet>Whether the extra-hours path gets used honestly or becomes the default.</Bullet>
              <Bullet>Whether the commitments ledger stays current from email alone, or needs the lead to maintain it.</Bullet>
            </div>
          </AnimateIn>
        </section>

        {/* Honest edges + lesson */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-border)]">
          <AnimateIn>
            <Eyebrow>The honest edges</Eyebrow>
            <Body>
              <p><strong>Progress sensing is a proxy.</strong> A quiet Figma file is not a stuck designer. People think, sketch on paper, work in a second file. So &ldquo;gone quiet&rdquo; needs two signals to agree and sits low on the day&rsquo;s list, and the designer&rsquo;s own flag outranks every estimate.</p>
              <p><strong>Domain fit is from past projects; working styles are the lead&rsquo;s tags.</strong> I first modeled which head preferred which designer, learned from approvals. It read as favoritism tracking and the data wouldn&rsquo;t exist for months. The version that shipped is simpler and truer: Ahmed knows Police work because he has shipped two Police projects. A head&rsquo;s style (&ldquo;decides fast,&rdquo; &ldquo;flexible on dates&rdquo;) is a tag the lead writes.</p>
              <p><strong>It is designed for a team of about ten,</strong> the size a lead can actually know. At forty, the grouped team view and the fit logic would break.</p>
              <p><strong>The memory layer is not the product.</strong> Microsoft and Google already read the same email and files. Sambhal would sit on top of them, and its value is the triage and the ledger, not the search box.</p>
              <p><strong>It assumes integrations I didn&rsquo;t design.</strong> Figma, GitHub and email are feasible. WhatsApp is not, so important messages get pasted in, and that&rsquo;s named on the screen.</p>
            </Body>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <H3>The lesson</H3>
            <Body>
              <p>Stockpilot taught me when an AI should act and when it should ask. Sambhal taught me something harder: what an AI should refuse to pretend.</p>
              <p>It should not pretend there is a clean answer when three people are at the edge. It should not pretend it knows a designer is stuck because a file went quiet. It should not pretend extra hours don&rsquo;t happen, and it should not pretend they&rsquo;re free. And it should not pretend it knows your people better than you do.</p>
              <p>The model gave me speed. It could not give me nine years in the chair, the instinct to protect the three people everyone wanted, or the taste to make a tool that watches a team feel like it is on their side. That part is still the designer&rsquo;s. It might be the part that matters most.</p>
            </Body>
          </AnimateIn>
        </section>

        {/* Try the prototype */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-20">
          <AnimateIn>
            <PrototypePreview
              url="/explorations/sambhal/prototype"
              qr="/explorations/sambhal-qr.svg"
              blurb="Start from Today, decide the Ministry's hard case, take the trade or the extra hours, hand it off, then see the designer's side and come back. The app remembers."
            />
          </AnimateIn>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}
