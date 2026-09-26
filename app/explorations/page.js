import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Explorations | Arsalan Aslam",
  description:
    "Self-directed design explorations, where I work through emerging problems like AI-native product design in the open. Thinking-forward pieces, shown as working prototypes.",
  openGraph: {
    title: "Explorations | Arsalan Aslam",
    description:
      "Self-directed design explorations, where I work through emerging problems like AI-native product design in the open.",
    type: "website",
  },
};

const explorations = [
  {
    slug: "stockpilot",
    title: "Stockpilot",
    meta: "2026 \u00b7 AI-native \u00b7 Working prototype",
    blurb:
      "A mobile copilot that helps a cash-strapped merchant make the smartest restock bets with limited money. An exploration into designing with AI, and for AI, where the model moved fast and the judgement stayed mine.",
  },
];

export default function ExplorationsIndex() {
  return (
    <>
      <Nav />
      <main>
        <section className="wrapper pt-28 pb-10 md:pt-36">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--color-text-subtle)] mb-6">Explorations</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
              Where I work through what&rsquo;s next, in the open.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg text-[var(--color-text-muted)] mt-6 max-w-2xl leading-relaxed">
              My case studies are work that shipped. This is the other half: self-directed explorations of emerging problems, like AI-native product design, where the point is the thinking, not the polish. Each one is shown as a working prototype, because that is the honest medium for it.
            </p>
          </AnimateIn>
        </section>

        <section className="wrapper py-10">
          <div className="grid grid-cols-1 gap-5">
            {explorations.map((e, i) => (
              <AnimateIn key={e.slug} delay={0.05 * i}>
                <Link
                  href={`/explorations/${e.slug}`}
                  className="group block border border-[var(--color-border)] rounded-2xl p-8 md:p-10 hover:border-[var(--color-border-hover)] transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">{e.meta}</p>
                  <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">{e.title}</h2>
                  <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">{e.blurb}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] mt-7 group-hover:gap-3 transition-all">
                    Read the exploration <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}
