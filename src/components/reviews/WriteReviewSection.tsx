"use client";

import { useEffect, useId, useState } from "react";
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

const WRITE_REVIEW_HASH = "#write-review";

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

function PencilIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M16.86 4.49l2.65 2.65M4 20l4.2-.95 10.9-10.9a1.87 1.87 0 000-2.65l-.6-.6a1.87 1.87 0 00-2.65 0L4.95 15.8 4 20z"
      />
    </svg>
  );
}

export function WriteReviewSection() {
  const panelId = `${useId()}-panel`;
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
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

  // Floating "Leave a Review" and other #write-review links open the panel.
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === WRITE_REVIEW_HASH) setOpen(true);
    };
    const onLinkClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.(`a[href$="${WRITE_REVIEW_HASH}"]`);
      if (link) setOpen(true);
    };
    const frame = window.requestAnimationFrame(openFromHash);
    window.addEventListener("hashchange", openFromHash);
    document.addEventListener("click", onLinkClick);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openFromHash);
      document.removeEventListener("click", onLinkClick);
    };
  }, []);

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
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-12 lg:py-14">
        <div
          className={`rounded-xl bg-white ring-1 shadow-[0_10px_28px_rgba(11,22,40,0.07)] transition-shadow ${
            open ? "ring-tamay-accent/45" : "ring-[#0b1628]/[0.07] hover:ring-tamay-accent/45"
          }`}
        >
          <h2 id="write-review-heading" className="m-0">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group flex w-full items-center gap-4 rounded-xl px-5 py-5 sm:px-7 sm:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tamay-accent/15 text-tamay-accent ring-1 ring-tamay-accent/40">
                <PencilIcon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-xl sm:text-2xl font-normal leading-tight text-[#0b1628]">
                  Write a Review
                </span>
                <span className="mt-1 block text-sm sm:text-[15px] text-[#0b1628]/70 leading-snug">
                  Share your experience with Tamay Enterprises — it only takes a minute.
                </span>
              </span>
              <span
                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-colors ${
                  open
                    ? "border-tamay-accent bg-tamay-accent text-[#0b1628]"
                    : "border-tamay-accent/60 text-tamay-accent group-hover:bg-tamay-accent group-hover:text-[#0b1628]"
                }`}
                aria-hidden
              >
                {open ? "−" : "+"}
              </span>
            </button>
          </h2>

          <div id={panelId} hidden={!open}>
            <div className="border-t border-[#0b1628]/[0.08] px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
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
      </div>
    </section>
  );
}
