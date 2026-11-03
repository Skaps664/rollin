"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const topics = ["Collab / sponsorship", "Shop order", "Ride along", "Gear or bike question", "Something else"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = `[${d.get("topic")}] from ${d.get("name")}`;
    const body = `${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`;
    // No backend yet: hand the message to the visitor's mail app.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 block w-full border border-line bg-ink-2 px-4 py-3 text-base text-bone placeholder:text-mute/60 transition-colors hover:border-bone/30 focus:border-olive";
  const label = "text-xs tracking-[0.25em] text-mute uppercase";

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name…" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            placeholder="you@example.com"
            className={field}
          />
        </label>
      </div>
      <fieldset>
        <legend className={label}>What&apos;s it about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t, i) => (
            <label
              key={t}
              className="cursor-pointer border border-line px-4 py-2 text-sm transition-colors hover:border-bone/40 has-checked:border-olive has-checked:bg-olive has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-olive"
            >
              <input type="radio" name="topic" value={t} defaultChecked={i === 0} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className={label}>Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about the ride, the gear or the idea…"
          className={`${field} resize-y`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="h-12 bg-bone px-8 text-sm font-semibold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-olive"
        >
          Send message
        </button>
        <p className="text-sm text-mute" aria-live="polite">
          {sent ? "Your mail app should open with the message ready to send." : "Opens your mail app to send."}
        </p>
      </div>
    </form>
  );
}
