"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { church } from "@/lib/site";

export function PrayerRequestForm() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const preference = String(form.get("preference") ?? "Pastoral team only");
    const request = String(form.get("request") ?? "").trim();
    const subject = `Prayer request from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Sharing preference: ${preference}`,
      "",
      "Prayer or praise:",
      request,
    ].join("\n");

    window.location.href = `mailto:${church.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="prayer-form" onSubmit={prepareEmail}>
      <div className="form-row">
        <label>
          Name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Sharing preference
          <select name="preference" defaultValue="Pastoral team only">
            <option>Pastoral team only</option>
            <option>May be shared with the prayer community</option>
          </select>
        </label>
      </div>
      <label>
        How may we pray with you? <span aria-hidden="true">*</span>
        <textarea name="request" rows={8} required />
      </label>
      <p className="form-note">Selecting “Continue to email” opens your email app so you can review and send your request privately to the church office.</p>
      <button className="button button-gold" type="submit">Continue to email <Send size={17} /></button>
    </form>
  );
}
