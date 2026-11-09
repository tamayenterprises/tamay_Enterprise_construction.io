"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { REVIEWS, type Review } from "@/lib/reviews";
import { REVIEW_VIDEO_PROJECTS } from "@/lib/reviewVideos";
import { sitePath } from "@/lib/paths";
import "@/components/reviews/tamay-video-gallery.css";

const NAVY = "#0b1628";

const JOE_PROJECT = REVIEW_VIDEO_PROJECTS.find((p) => p.id === "joe-testimonial");
const JOE_VIDEO_ID = JOE_PROJECT?.videos[0] ?? "";
const JOE_TITLE = JOE_PROJECT?.title ?? "Joe Testimonial";

/** Desktop shows both; mobile shows only the first. Exact REVIEWS entries — do not edit text. */
const FEATURED_REVIEW_IDS = ["bria-h", "maria-p"] as const;
const FEATURED_REVIEWS: Review[] = FEATURED_REVIEW_IDS.map((id) => REVIEWS.find((r) => r.id === id)).filter(
  (r): r is Review => Boolean(r),
);

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

function thumbCandidates(id: string) {
  return [
    `https://i.ytimg.com/vi/${id}/hq720.jpg`,
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
  ];
}

function VideoThumb({ youtubeId }: { youtubeId: string }) {
  const [index, setIndex] = useState(0);
  const candidates = thumbCandidates(youtubeId);
  const src = candidates[Math.min(index, candidates.length - 1)]!;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setIndex((i) => (i + 1 < candidates.length ? i + 1 : i))}
      onLoad={(e) => {
        const img = e.currentTarget;
        if (img.naturalWidth > 0 && img.naturalWidth <= 140 && index + 1 < candidates.length) {
          setIndex((i) => i + 1);
        }
      }}
    />
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-3.5 h-3.5 ${i < rating ? "text-tamay-accent" : "text-gray-300"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleReviewCard({ review }: { review: Review }) {
  return (
    <article className="h-full rounded-xl bg-white px-5 py-5 ring-1 ring-[#0b1628]/[0.07] shadow-[0_8px_22px_rgba(11,22,40,0.06)] flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <StarRating rating={review.rating} />
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500">
          <GoogleIcon className="w-3.5 h-3.5" />
          Google Review
        </span>
      </div>
      <blockquote className="mt-3 text-[14px] text-[#0b1628]/85 leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <p className="mt-3 text-xs text-gray-500">
        <span className="font-semibold text-[#0b1628]/80">{review.author}</span>
        {review.date ? <span className="text-gray-400"> · {review.date}</span> : null}
      </p>
    </article>
  );
}

/** Home Client Proof — Joe’s real testimonial + real Google reviews from REVIEWS. */
export function HomeClientProof() {
  const reactId = useId();
  const [playing, setPlaying] = useState(false);
  const close = useCallback(() => setPlaying(false), []);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("tamay-lock");
    document.body.classList.add("tamay-lock");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("tamay-lock");
      document.body.classList.remove("tamay-lock");
    };
  }, [playing, close]);

  return (
    <section
      id="client-proof"
      className="relative overflow-hidden bg-[#f7f4ef]"
      aria-labelledby="home-client-proof-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tamay-accent/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-tamay-accent/15"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Client Proof
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="home-client-proof-heading"
            className="mt-4 font-heading text-[1.65rem] sm:text-[2.05rem] lg:text-[2.35rem] font-normal leading-[1.15] text-balance"
            style={{ color: NAVY }}
          >
            Real Clients. Real Experiences.
          </h2>
          <p className="mt-3.5 mx-auto max-w-[36rem] text-[15px] sm:text-base text-[#0b1628]/75 leading-[1.7]">
            See what homeowners and clients have shared about working with Tamay Enterprises.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] gap-5 lg:gap-6 lg:items-stretch">
          {JOE_VIDEO_ID ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative w-full aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden rounded-xl sm:rounded-2xl bg-[#0b1628] text-left shadow-[0_12px_32px_rgba(11,22,40,0.12)] ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent"
              aria-label={`Play video: ${JOE_TITLE}`}
            >
              <VideoThumb youtubeId={JOE_VIDEO_ID} />
              <span
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
                aria-hidden
              />
              <span className="absolute left-3 top-3 inline-flex rounded-full border border-white/25 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                Client Testimonial
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span
                  className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-md"
                  aria-hidden
                >
                  <span className="ml-0.5 border-y-[7px] border-y-transparent border-l-[12px] border-l-[#0b1628]" />
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4">
                <span className="block font-heading text-lg sm:text-xl text-white leading-snug">{JOE_TITLE}</span>
              </span>
            </button>
          ) : null}

          <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {FEATURED_REVIEWS.map((review, index) => (
              <div key={review.id} className={index > 0 ? "hidden md:block" : undefined}>
                <GoogleReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 sm:mt-8 flex justify-center">
          <Link
            href={sitePath("/reviews")}
            className="group inline-flex items-center gap-2 font-semibold text-[15px] text-[#0b1628] underline decoration-tamay-accent/60 underline-offset-[6px] hover:decoration-tamay-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tamay-accent"
          >
            See More Client Reviews
            <span aria-hidden className="text-tamay-accent transition-transform duration-200 motion-safe:group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>

      <div
        className={`tamay-modal${playing ? " active" : ""}`}
        id={`${reactId}-modal`}
        aria-hidden={playing ? "false" : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="tamay-modal-video" id={`${reactId}-player`}>
          {playing && JOE_VIDEO_ID ? (
            <iframe
              title={JOE_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(JOE_VIDEO_ID)}?autoplay=1&mute=1&playsinline=1&rel=0&vq=hd1080&modestbranding=1`}
            />
          ) : null}
        </div>
      </div>
      <div
        className={`tamay-close${playing ? " show" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Close video"
        onClick={close}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") close();
        }}
      >
        ✕
      </div>
    </section>
  );
}
