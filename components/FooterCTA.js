import Link from "next/link";
import AnimateIn from "./AnimateIn";

/**
 * FooterCTA — the "Let's build something that matters" call-to-action block.
 *
 * Used at the top of the footer on every page EXCEPT /contact (where it would
 * be self-referential — asking the user to "Get in touch" on the page where
 * they're literally already getting in touch).
 *
 * Split out from Footer in v18.31 so /contact can render just the bottom
 * row (location + socials + copyright) without the redundant CTA.
 */
export default function FooterCTA() {
  return (
    <div className="wrapper pt-20 pb-12">
      <AnimateIn>
        <p className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-[1.1]">
          Let&rsquo;s build something<br />that matters.
        </p>
        <Link href="/contact" className="btn-fill inline-block mt-8 text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5">
          Get in touch
        </Link>
      </AnimateIn>
    </div>
  );
}
