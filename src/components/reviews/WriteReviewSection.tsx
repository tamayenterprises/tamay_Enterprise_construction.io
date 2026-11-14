"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { submitReview, type ReviewSubmission } from "@/lib/reviewSubmission";

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) {
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating">
      {Array.from({ length: 5 }).map((_, index) => {
        const star = index + 1;
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} star${star === 1 ? "" : "s"}`}
            onClick={() => onChange(star)}
            className={`inline-flex h-11 w-10 items-center justify-center rounded-md text-[1.75rem] leading-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent ${
              star <= value ? "text-tamay-accent" : "text-[#0b1628]/20 hover:text-tamay-accent/60"
            }`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

const emptyForm: ReviewSubmission = {
  name: "",
  email: "",
  rating: 5,
  text: "",
};

const labelClass = "block text-sm font-semibold text-[#0b1628] mb-1.5";
const inputClass =
  "w-full rounded-md border border-[#0b1628]/15 bg-white px-3.5 py-2.5 text-[15px] text-[#0b1628] placeholder:text-[#0b1628]/40 transition-colors focus:outline-none focus:border-tamay-accent focus:ring-2 focus:ring-tamay-accent/35";
const goldButtonClass =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap min-h-12 w-full sm:w-auto px-8 font-bold text-sm tracking-wide transition-colors bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

function RequiredMark() {
  return (
    <span className="text-tamay-accent" aria-hidden>
      *
    </span>
  );
}

export function WriteReviewSection() {
  const { user } = useAuth();
  const [form, setForm] = useState<ReviewSubmission>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    const fullName = `${user.firstName} ${user.lastName}`.trim();
    setForm((current) => ({
      ...current,
      name: current.name || fullName,
      email: current.email || user.email,
    }));
  }, [user]);

  const update = (patch: Partial<ReviewSubmission>) => {
    setForm((current) => ({ ...current, ...patch }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.text.trim()) {
      setError("Please write your review.");
      return;
    }
    if (form.rating < 1) {
      setError("Please select a star rating.");
      return;
    }

    setSubmitting(true);

    try {
      await submitReview(form);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit your review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="write-review" className="bg-[#f7f4ef] scroll-mt-24" aria-labelledby="write-review-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 lg:gap-14 lg:items-start">
          <div className="max-w-xl lg:pt-2">
            <div className="flex items-center gap-3">
              <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
                Share Your Experience
              </p>
              <span className="h-px w-8 bg-tamay-accent/70" aria-hidden />
            </div>
            <h2
              id="write-review-heading"
              className="mt-4 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
            >
              Share Your Experience
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-base text-[#0b1628]/75 leading-[1.7]">
              Have you worked with Tamay Enterprises? We’d love to hear about your experience.
            </p>
            <div className="mt-6 h-px w-16 bg-tamay-accent/70" aria-hidden />
          </div>

          <div className="rounded-xl bg-white ring-1 ring-[#0b1628]/[0.07] shadow-[0_10px_28px_rgba(11,22,40,0.07)] p-5 sm:p-7 lg:p-8">
            {submitted ? (
              <div className="text-center space-y-4 py-4" role="status">
                <p className="font-heading text-xl text-[#0b1628] font-semibold">Thank you!</p>
                <p className="text-[15px] text-[#0b1628]/75 leading-relaxed">
                  Your review has been submitted. Once our team approves it, it will appear in the reviews on this
                  page.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(emptyForm);
                  }}
                  className={goldButtonClass}
                >
                  Write Another Review
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="review-name" className={labelClass}>
                      Your Name <RequiredMark />
                    </label>
                    <input
                      id="review-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) => update({ name: event.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="review-email" className={labelClass}>
                      Email (optional)
                    </label>
                    <input
                      id="review-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) => update({ email: event.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <p className={labelClass}>
                    Rating <RequiredMark />
                  </p>
                  <StarPicker value={form.rating} onChange={(rating) => update({ rating })} />
                </div>

                <div>
                  <label htmlFor="review-text" className={labelClass}>
                    Your Review <RequiredMark />
                  </label>
                  <textarea
                    id="review-text"
                    name="review"
                    rows={5}
                    required
                    value={form.text}
                    onChange={(event) => update({ text: event.target.value })}
                    className={inputClass}
                    placeholder="Tell us about your project experience..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-700" role="alert">
                    {error}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                  <button type="submit" disabled={submitting} className={goldButtonClass}>
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>
                  <p className="text-xs text-[#0b1628]/60 leading-relaxed">
                    Reviews are moderated before they appear publicly on our website.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
