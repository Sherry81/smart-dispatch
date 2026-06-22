"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-6 max-w-xl">

        <h2 className="text-4xl font-bold text-center mb-8 text-teal-700">
          Request Early Access
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-8 rounded-xl shadow"
        >
          <input
            required
            placeholder="Name"
            className="w-full border rounded-lg p-3 text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />

          <input
            placeholder="Company"
            className="w-full border rounded-lg p-3 text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg"
          >
            Request Access
          </button>

          {submitted && (
            <p className="text-teal-600">
              Thank you! We will contact you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}