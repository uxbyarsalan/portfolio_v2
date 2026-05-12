"use client";

import { useState } from "react";

/**
 * ContactForm
 *
 * Client component for the v2 contact page form.
 * Submits to Web3Forms (third-party form-to-email service).
 *
 * Fields: Name (required), Email (required), Company (optional), Message (required)
 * Spam protection: built-in honeypot field (`botcheck`) — Web3Forms drops submissions
 *   where it's filled, since real users never see/touch hidden inputs.
 *
 * Success behavior: form replaced inline with a thank-you message.
 * Error behavior: inline error message above the submit button, form preserved.
 *
 * Note: the access key is intentionally client-visible. Web3Forms keys are
 * submission-only — they cannot be used to read submissions or escalate access.
 * If we ever want a key-rotation story, we can move this to a Next.js API route
 * proxy and put the key in env vars; for now this is the standard Web3Forms pattern.
 */

const ACCESS_KEY = "2bd148ae-9f8e-4e6c-815a-ab32ca2e4efc";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.target;
    const formData = new FormData(form);

    // Augment with Web3Forms required fields
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message from uxbyarsalan.com");
    formData.append("from_name", "uxbyarsalan.com contact form");

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          (data && data.message) ||
            "Something went wrong. Please try again or email me directly."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or email me directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="py-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mb-3">
          Message sent
        </p>
        <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.15] mb-4">
          Thanks &mdash; I&rsquo;ll be in touch within 24 hours.
        </p>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          In the meantime, feel free to connect with me on LinkedIn or
          browse some of my recent work.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="cf-name" className="block text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-sm outline-none focus:border-[var(--color-text)] transition-colors duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-sm outline-none focus:border-[var(--color-text)] transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="cf-company" className="block text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
          Company <span className="lowercase tracking-normal text-[var(--color-text-subtle)]">(optional)</span>
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-sm outline-none focus:border-[var(--color-text)] transition-colors duration-300"
          placeholder="Where you&rsquo;re reaching out from"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-sm outline-none focus:border-[var(--color-text)] transition-colors duration-300 resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {/* Honeypot — hidden from real users, bots fill it, Web3Forms drops the submission */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="text-xs text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-fill text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-7 py-3.5 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
