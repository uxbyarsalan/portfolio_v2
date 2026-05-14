import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Arsalan Aslam",
  description: "Get in touch for freelance projects or full-time opportunities.",
  openGraph: {
    title: "Contact — Arsalan Aslam",
    description: "Get in touch for freelance projects or full-time opportunities.",
    type: "website",
    images: [{ url: "/og/og-contact.png", width: 1200, height: 630, alt: "Contact Arsalan Aslam" }],
  },
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="wrapper pt-28 pb-24 md:pt-36">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--color-text-subtle)] mb-8">Get in touch</p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] max-w-2xl mb-8">
            Let&rsquo;s build something<br />that matters.
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed mb-16">
            Whether you&rsquo;re hiring for a product team or need a design partner for your next platform, I&rsquo;d love to hear from you.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimateIn delay={0.25}>
            <div className="space-y-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mb-2">Location</p>
                <p className="text-sm">Gothenburg, Sweden</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mb-2">Email</p>
                <a href="mailto:arsalanaslam.se@gmail.com" className="text-sm hover:underline">arsalanaslam.se@gmail.com</a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mb-2">Social</p>
                <div className="space-y-2.5">
                  {[
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/arsalanaslam1/" },
                    { label: "Behance", href: "https://www.behance.net/arslanaslam" },
                    { label: "Instagram", href: "https://www.instagram.com/3arslan.aslam/" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                      {s.label} &rarr;
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mb-2">Resume</p>
                <a href="/resume.pdf" download="Arsalan-Aslam-Resume.pdf" className="text-sm hover:underline">
                  Download PDF &rarr;
                </a>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="md:pl-8">
              <ContactForm />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.1}>
          <div className="border-t border-[var(--color-border)] mt-20 pt-16 pb-4">
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl font-medium tracking-tight leading-[1.2]">
                Prefer a quick call?
              </p>
              <p className="text-sm md:text-base text-[var(--color-text-muted)] mt-4 max-w-xl leading-relaxed">
                Sometimes a 15-minute call is faster than typing it out. Book a time below &mdash; works for roles, opportunities, or just a chat about my work.
              </p>
              <a
                href="https://calendly.com/arsalanaslam-se/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill inline-block mt-8 text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5"
              >
                Book 15 minutes
              </a>
            </div>
          </div>
        </AnimateIn>
      </main>
      <Footer />
    </>
  );
}
