"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

/**
 * The original site posted this form to a `mailto:` address, which silently
 * fails in most browsers. Until a form backend exists, this composes a
 * pre-filled email the visitor can actually send — and says so plainly, rather
 * than pretending a message was delivered.
 */
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const subject = `Chemical enquiry — ${data.get("product") || "General"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Chemical: ${data.get("product")}`,
      `Quantity: ${data.get("quantity")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form-row">
        <div className="field">
          <label htmlFor="name" className="mono">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone" className="mono">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email" className="mono">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="product" className="mono">
            Chemical
          </label>
          <input
            id="product"
            name="product"
            list="product-options"
            placeholder="e.g. Caustic Soda Flakes"
          />
          <datalist id="product-options">
            {products.map((product) => (
              <option key={product.slug} value={product.name} />
            ))}
          </datalist>
        </div>
        <div className="field">
          <label htmlFor="quantity" className="mono">
            Quantity
          </label>
          <input id="quantity" name="quantity" placeholder="e.g. 5 MT / month" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message" className="mono">
          Requirement
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Grade, packing, delivery location and timeline…"
          required
        />
      </div>

      <button type="submit" className="btn btn-solid form-submit">
        Send enquiry
      </button>

      <p className="form-note mono-sm" role="status" aria-live="polite">
        {sent
          ? `Your email app should now be open with the enquiry filled in. If nothing happened, email ${site.email} directly.`
          : `Opens your email app with the details filled in. Prefer to talk? Call ${site.phone}.`}
      </p>
    </form>
  );
}
