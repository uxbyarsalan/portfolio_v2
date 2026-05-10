"use client";

import { useState } from "react";

export default function ContactFormV2() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus("Thanks for your message! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-transparent border-b border-[var(--color-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-text)] transition-colors rounded-none placeholder-[var(--color-text-subtle)]/50"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-transparent border-b border-[var(--color-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-text)] transition-colors rounded-none placeholder-[var(--color-text-subtle)]/50"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-text)] transition-colors rounded-none placeholder-[var(--color-text-subtle)]/50"
          placeholder="How can I help you?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--color-text)] transition-colors resize-none rounded-none placeholder-[var(--color-text-subtle)]/50"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="btn-fill text-[11px] uppercase tracking-[0.2em] border border-[var(--color-text)] px-8 py-4 mt-2 inline-block w-full sm:w-auto text-center"
      >
        Send Message
      </button>

      {status && (
        <p className="text-sm text-[var(--color-text-muted)] pt-2">
          {status}
        </p>
      )}
    </form>
  );
}
