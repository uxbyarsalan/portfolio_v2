import Nav from "@/components/Nav";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

export const metadata = {
  title: "Privacy Policy · Arsalan Aslam",
  description: "What this site collects, how it's used, and your rights as a visitor.",
  openGraph: {
    title: "Privacy Policy · Arsalan Aslam",
    description: "What this site collects, how it's used, and your rights as a visitor.",
    type: "website",
  },
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="wrapper pt-28 pb-20 md:pt-36">
        <AnimateIn>
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-6">Privacy Policy</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-8">
              How this site handles your data.
            </h1>
            <p className="text-sm text-[var(--color-text-muted)] mb-12">
              Last updated: May 2026
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <div className="max-w-2xl space-y-12 text-[15px] leading-[1.75] text-[var(--color-text)]">
            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                The short version
              </p>
              <p>
                This is a personal portfolio site. It collects almost nothing about you. The two exceptions are anonymous traffic analytics and what you choose to send through the contact form. I don&rsquo;t sell, share, or trade any of it. If you want anything I have about you deleted, send me an email and I&rsquo;ll do it.
              </p>
            </section>

            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                What gets collected
              </p>
              <p className="mb-4">
                <strong className="font-semibold">Contact form submissions.</strong> If you fill out the contact form, I receive your name, email address, optional company name, and your message. These come to my personal Gmail inbox. I read them, respond if appropriate, and keep them in my inbox like any other email correspondence.
              </p>
              <p className="mb-4">
                <strong className="font-semibold">Anonymous traffic analytics.</strong> This site uses Vercel Analytics, which counts page views, referrers, and country-level locations, without cookies, without fingerprinting, and without identifying individual visitors. It tells me &ldquo;15 people viewed the Dastak case study this week,&rdquo; not who they were.
              </p>
              <p>
                <strong className="font-semibold">Nothing else.</strong> No advertising trackers, no third-party data brokers, no email harvesting. The contact form is the only place where you actively give me your data, and only if you choose to.
              </p>
            </section>

            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                Who else sees this data
              </p>
              <p className="mb-4">
                Contact form submissions pass through Web3Forms, the service that delivers form data to my email. They keep submissions temporarily on their servers to deliver the email. Their privacy policy is at <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">web3forms.com/privacy</a>.
              </p>
              <p>
                Analytics data is processed by Vercel. Their privacy policy is at <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">vercel.com/legal/privacy-policy</a>.
              </p>
            </section>

            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                Cookies
              </p>
              <p>
                This site doesn&rsquo;t set tracking cookies. Vercel Analytics is cookie-free by design. The only cookies you might encounter are functional ones set by your browser, not by me.
              </p>
            </section>

            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                Your rights
              </p>
              <p className="mb-4">
                If you&rsquo;re in the EU, EEA, or UK, GDPR gives you the right to access, correct, or delete any personal data I have about you. If you&rsquo;re elsewhere, your local privacy law probably gives you something similar.
              </p>
              <p>
                In practice: if you want me to delete a form submission you sent, or have any other question about your data, email me at <a href="mailto:arsalanaslam.se@gmail.com" className="underline hover:no-underline">arsalanaslam.se@gmail.com</a>. I&rsquo;ll respond within a few days.
              </p>
            </section>

            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                Changes to this policy
              </p>
              <p>
                If I change how data is handled, I&rsquo;ll update this page and adjust the &ldquo;Last updated&rdquo; date at the top. The current version is what applies right now.
              </p>
            </section>

            <section>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-subtle)] mb-4">
                Contact
              </p>
              <p>
                Arsalan Aslam, Lahore, Pakistan. Reachable at <a href="mailto:arsalanaslam.se@gmail.com" className="underline hover:no-underline">arsalanaslam.se@gmail.com</a>.
              </p>
            </section>
          </div>
        </AnimateIn>
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}
