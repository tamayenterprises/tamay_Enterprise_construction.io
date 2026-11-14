"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { REVIEW_VIDEO_PROJECTS, type ReviewVideoProject } from "@/lib/reviewVideos";
import "@/components/reviews/tamay-video-gallery.css";

type VideoItem = { key: string; name: string; youtubeId: string };

const FEATURED_IDS = ["joe-testimonial", "hamden-ceiling-restoration", "wilton-bathroom-remodeling"] as const;

function toItems(project: ReviewVideoProject): VideoItem[] {
  const name = project.clientName ?? project.title?.trim() ?? "Client Testimonial";
  return project.videos.map((youtubeId, index) => ({
    key: `${project.id}-${index}`,
    name,
    youtubeId,
  }));
}

const FEATURED: VideoItem[] = FEATURED_IDS.flatMap((id) => {
  const project = REVIEW_VIDEO_PROJECTS.find((p) => p.id === id);
  return project ? toItems(project) : [];
});

const REMAINING: VideoItem[] = REVIEW_VIDEO_PROJECTS.filter(
  (p) => !(FEATURED_IDS as readonly string[]).includes(p.id),
).flatMap(toItems);

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
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
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

function VideoCard({ item, onPlay }: { item: VideoItem; onPlay: (item: VideoItem, el: HTMLElement) => void }) {
  return (
    <button
      type="button"
      onClick={(e) => onPlay(item, e.currentTarget)}
      className="group block w-full text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b1628]"
      aria-label={`Play video testimonial: ${item.name}`}
    >
      <span className="relative block aspect-video overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/10 transition-shadow group-hover:ring-tamay-accent/45">
        <VideoThumb youtubeId={item.youtubeId} />
        <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" aria-hidden />
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-tamay-accent shadow-[0_8px_22px_rgba(0,0,0,0.35)] transition-transform duration-200 motion-safe:group-hover:scale-105">
            <span className="ml-1 border-y-[7px] border-y-transparent border-l-[12px] border-l-[#0b1628]" />
          </span>
        </span>
      </span>
      <span className="mt-3 flex items-center gap-2.5">
        <span className="h-px w-5 bg-tamay-accent/70" aria-hidden />
        <span className="font-heading text-[15px] sm:text-base font-semibold text-white leading-snug">{item.name}</span>
      </span>
    </button>
  );
}

/** Reviews — 3 featured video testimonials + one expandable gallery for the rest (closed by default). */
export function ReviewsVideoTestimonialsSection() {
  const reactId = useId();
  const galleryId = `${reactId}-gallery`;
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState<VideoItem | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const play = useCallback((item: VideoItem, el: HTMLElement) => {
    returnFocusRef.current = el;
    setPlaying(item);
  }, []);

  const close = useCallback(() => {
    setPlaying(null);
    returnFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("tamay-lock");
    document.body.classList.add("tamay-lock");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("tamay-lock");
      document.body.classList.remove("tamay-lock");
    };
  }, [playing, close]);

  if (FEATURED.length === 0 && REMAINING.length === 0) return null;

  return (
    <section className="relative bg-[#0b1628]" aria-labelledby="reviews-video-testimonials-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tamay-accent/45 to-transparent"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Video Testimonials
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="reviews-video-testimonials-heading"
            className="mt-4 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#faf8f5] text-balance"
          >
            Hear It Directly From Our Clients.
          </h2>
          <p className="mt-3.5 mx-auto max-w-[36rem] text-[15px] sm:text-base text-white/75 leading-[1.7]">
            Real stories from homeowners and clients who have worked with Tamay Enterprises.
          </p>
        </div>

        <ul className="mt-9 sm:mt-10 list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {FEATURED.map((item, index) => (
            <li key={item.key} className={index === 0 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <VideoCard item={item} onPlay={play} />
            </li>
          ))}
        </ul>

        {REMAINING.length > 0 ? (
          <>
            <div className="mt-9 sm:mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls={galleryId}
                className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-tamay-accent/60 px-6 py-2.5 font-heading text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-tamay-accent transition-colors hover:bg-tamay-accent hover:text-[#0b1628] focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b1628]"
              >
                {expanded ? "Hide Video Testimonials" : "View All Video Testimonials"}
                <span aria-hidden className="text-base leading-none">
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </div>

            <div id={galleryId} hidden={!expanded} className="mt-9 sm:mt-10 border-t border-white/10 pt-9 sm:pt-10">
              {expanded ? (
                <ul className="list-none m-0 p-0 flex flex-wrap justify-center gap-x-6 gap-y-8">
                  {REMAINING.map((item) => (
                    <li
                      key={item.key}
                      className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                    >
                      <VideoCard item={item} onPlay={play} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </>
        ) : null}
      </div>

      <div
        className={`tamay-modal${playing ? " active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={playing ? `Video testimonial: ${playing.name}` : undefined}
        aria-hidden={playing ? "false" : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="tamay-modal-video">
          {playing ? (
            <iframe
              title={`Video testimonial: ${playing.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(playing.youtubeId)}?autoplay=1&mute=1&playsinline=1&rel=0&vq=hd1080&modestbranding=1`}
            />
          ) : null}
        </div>
      </div>
      <button
        ref={closeRef}
        type="button"
        className={`tamay-close${playing ? " show" : ""}`}
        aria-label="Close video"
        onClick={close}
      >
        ✕
      </button>
    </section>
  );
}
