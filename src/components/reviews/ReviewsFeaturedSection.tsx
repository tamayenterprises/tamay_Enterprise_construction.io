"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { fetchPublishedSiteReviews, mergeCarouselReviews } from "@/lib/reviewSubmission";
import { REVIEWS, type Review } from "@/lib/reviews";

/** Exact REVIEWS entries — do not edit text, names, ratings, or dates. */
const FEATURED_REVIEW_IDS = ["bria-h", "maria-p", "lisa-r"] as const;
const FEATURED_REVIEWS: Review[] = FEATURED_REVIEW_IDS.map((id) => REVIEWS.find((r) => r.id === id)).filter(
  (r): r is Review => Boolean(r),
);

const LONG_REVIEW_CHARS = 240;

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? "text-tamay-accent" : "text-[#0b1628]/15"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isGoogle = review.source !== "site";
  const isLong = review.text.length > LONG_REVIEW_CHARS;

  return (
    <article className="h-full flex flex-col rounded-xl bg-white px-5 py-5 sm:px-6 sm:py-6 ring-1 ring-[#0b1628]/[0.07] shadow-[0_8px_22px_rgba(11,22,40,0.06)]">
      <div className="flex items-center justify-between gap-3">
        <StarRating rating={review.rating} />
        {isGoogle ? (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#0b1628]/55">
            <GoogleIcon className="w-3.5 h-3.5" />
            Google Review
          </span>
        ) : (
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#0b1628]/55">Website Review</span>
        )}
      </div>
      <blockquote
        className={`mt-4 flex-1 text-[15px] text-[#0b1628]/85 leading-relaxed ${isLong && !expanded ? "line-clamp-6" : ""}`}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 self-start text-sm font-semibold text-[#0b1628] underline decoration-tamay-accent/60 underline-offset-4 hover:decoration-tamay-accent"
        >
          {expanded ? "Show less" : "Read full review"}
        </button>
      ) : null}
      <div className="mt-5 pt-4 border-t border-[#0b1628]/[0.08] flex items-center gap-2.5">
        <span className="h-px w-5 bg-tamay-accent/70" aria-hidden />
        <p className="text-sm">
          <span className="font-heading font-semibold text-[#0b1628]">{review.author}</span>
          {review.date ? <span className="text-[#0b1628]/50"> · {review.date}</span> : null}
        </p>
      </div>
    </article>
  );
}

const cardSlotClass = "w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]";

/** Reviews — 3 featured Google reviews + one expandable list of all remaining reviews (closed by default). */
export function ReviewsFeaturedSection() {
  const listId = `${useId()}-all-reviews`;
  const [siteReviews, setSiteReviews] = useState<Review[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    void fetchPublishedSiteReviews()
      .then(setSiteReviews)
      .catch(() => setSiteReviews([]));
  }, []);

  const remaining = useMemo(
    () =>
      mergeCarouselReviews(REVIEWS, siteReviews).filter(
        (r) => !(FEATURED_REVIEW_IDS as readonly string[]).includes(r.id),
      ),
    [siteReviews],
  );

  return (
    <section className="bg-[#faf8f5]" aria-labelledby="reviews-featured-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Featured Reviews
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="reviews-featured-heading"
            className="mt-4 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            What Our Clients Are Saying
          </h2>
          <p className="mt-3.5 mx-auto max-w-[36rem] text-[15px] sm:text-base text-[#0b1628]/75 leading-[1.7]">
            A few reviews from homeowners and clients who trusted Tamay Enterprises with their projects.
          </p>
        </div>

        <ul className="mt-9 sm:mt-10 list-none m-0 p-0 flex flex-wrap justify-center gap-6">
          {FEATURED_REVIEWS.map((review) => (
            <li key={review.id} className={cardSlotClass}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>

        {remaining.length > 0 ? (
          <>
            <div className="mt-9 sm:mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls={listId}
                className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-tamay-accent/70 px-6 py-2.5 font-heading text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#0b1628] transition-colors hover:bg-tamay-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf8f5]"
              >
                {expanded ? "Hide Reviews" : "View All Reviews"}
                <span aria-hidden className="text-base leading-none text-tamay-accent group-hover:text-[#0b1628]">
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </div>

            <div id={listId} hidden={!expanded} className="mt-9 sm:mt-10 border-t border-[#0b1628]/[0.08] pt-9 sm:pt-10">
              {expanded ? (
                <ul className="list-none m-0 p-0 flex flex-wrap justify-center gap-6">
                  {remaining.map((review) => (
                    <li key={review.id} className={cardSlotClass}>
                      <ReviewCard review={review} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
