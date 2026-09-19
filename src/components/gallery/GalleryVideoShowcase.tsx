"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import {
  GALLERY_SHOWCASE_VIDEOS,
  GALLERY_VIDEO_FILTERS,
  orderGalleryVideosForFilter,
  type GalleryShowcaseVideo,
  type GalleryVideoFilter,
} from "@/lib/galleryVideos";
import "@/components/reviews/tamay-video-gallery.css";

const NAVY = "#141c2b";
const INITIAL_DESKTOP = 6;
const INITIAL_MOBILE = 4;
const LOAD_MORE_DESKTOP = 6;
const LOAD_MORE_MOBILE = 4;

/** Curated diverse openers for mobile “All” — existing real videos only */
const MOBILE_ALL_CURATED_IDS = [
  "complete-basement-renovation-0",
  "full-bathroom-renovation-0",
  "home-exterior-upgrade-fairfield-0",
  "full-home-lighting-0",
] as const;

function orderMobileAll(videos: GalleryShowcaseVideo[]): GalleryShowcaseVideo[] {
  const preferred: GalleryShowcaseVideo[] = [];
  for (const id of MOBILE_ALL_CURATED_IDS) {
    const found = videos.find((v) => v.id === id);
    if (found) preferred.push(found);
  }
  const preferredIds = new Set(preferred.map((v) => v.id));
  const rest = videos.filter((v) => !preferredIds.has(v.id));
  return [...preferred, ...rest];
}

function thumbCandidates(id: string) {
  return [
    `https://i.ytimg.com/vi/${id}/hq720.jpg`,
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/default.jpg`,
  ];
}

function PlayIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-white shadow-md ${className}`}
      aria-hidden
    >
      <span className="ml-0.5 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#141c2b]" />
    </span>
  );
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
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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

function VideoCard({
  video,
  featured = false,
  onPlay,
}: {
  video: GalleryShowcaseVideo;
  featured?: boolean;
  onPlay: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(video.youtubeId)}
      className={`group relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#141c2b] text-left shadow-[0_10px_28px_rgba(20,28,43,0.12)] ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent ${
        featured ? "aspect-[16/9]" : "aspect-video"
      }`}
      aria-label={`Play ${video.title}`}
    >
      <VideoThumb youtubeId={video.youtubeId} />
      <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" aria-hidden />
      <span className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] rounded-full border border-white/25 bg-black/35 px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm truncate">
        {video.category}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <PlayIcon className={featured ? "h-14 w-14 sm:h-16 sm:w-16" : "h-11 w-11 sm:h-12 sm:w-12"} />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span
          className={`block font-heading font-semibold text-white leading-snug ${
            featured ? "text-base sm:text-lg md:text-xl" : "text-sm"
          }`}
        >
          {video.title}
        </span>
        {video.partLabel ? (
          <span className="mt-1 block text-[11px] sm:text-xs text-white/75 tracking-wide">{video.partLabel}</span>
        ) : null}
      </span>
    </button>
  );
}

/**
 * Video-first Gallery showcase.
 * Desktop: chip filters + featured layout. Mobile: accordion + 4-up + Load More.
 */
export function GalleryVideoShowcase() {
  const reactId = useId();
  const [filter, setFilter] = useState<GalleryVideoFilter>("All");
  const [visibleDesktop, setVisibleDesktop] = useState(INITIAL_DESKTOP);
  const [visibleMobile, setVisibleMobile] = useState(INITIAL_MOBILE);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [browseOpen, setBrowseOpen] = useState(false);

  const availableFilters = useMemo(() => {
    return GALLERY_VIDEO_FILTERS.filter((key) => {
      if (key === "All") return true;
      if (key === "Commercial") {
        return GALLERY_SHOWCASE_VIDEOS.some((v) => v.category === "Commercial");
      }
      return GALLERY_SHOWCASE_VIDEOS.some((v) => v.category === key);
    });
  }, []);

  const filteredDesktop = useMemo(
    () => orderGalleryVideosForFilter(GALLERY_SHOWCASE_VIDEOS, filter),
    [filter],
  );

  const filteredMobile = useMemo(() => {
    const ordered = orderGalleryVideosForFilter(GALLERY_SHOWCASE_VIDEOS, filter);
    return filter === "All" ? orderMobileAll(ordered) : ordered;
  }, [filter]);

  const featured = filteredDesktop[0] ?? null;
  const desktopSupporting = filteredDesktop.slice(1).slice(0, Math.max(0, visibleDesktop - 1));
  const desktopHasMore = visibleDesktop < filteredDesktop.length;

  const mobileVisible = filteredMobile.slice(0, visibleMobile);
  const mobileHasMore = visibleMobile < filteredMobile.length;

  const close = useCallback(() => setActiveId(null), []);
  const play = useCallback((id: string) => setActiveId(id), []);

  useEffect(() => {
    setVisibleDesktop(INITIAL_DESKTOP);
    setVisibleMobile(INITIAL_MOBILE);
  }, [filter]);

  useEffect(() => {
    if (!activeId) return;
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
  }, [activeId, close]);

  const selectFilter = (key: GalleryVideoFilter) => {
    setFilter(key);
    setBrowseOpen(false);
  };

  return (
    <section
      id="featured-projects"
      className="relative scroll-mt-24 bg-[#f7f5f1] border-b border-gray-200/80"
      aria-labelledby="gallery-videos-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 lg:pt-16 pb-4 sm:pb-6">
        <div className="max-w-2xl">
          <p className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-tamay-accent">
            Project Videos
          </p>
          <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />
          <h2
            id="gallery-videos-heading"
            className="mt-3 font-heading text-2xl sm:text-[1.75rem] lg:text-[2rem] font-semibold leading-[1.15] text-balance"
            style={{ color: NAVY }}
          >
            See projects in motion.
          </h2>
          <p className="mt-3.5 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
            Explore real Tamay renovations and builds through project walkthroughs — crafted spaces, finished details,
            and the standard behind the work.
          </p>
        </div>

        {/* Desktop / tablet filters */}
        <div
          className="mt-7 sm:mt-8 hidden md:flex gap-2 flex-wrap"
          role="tablist"
          aria-label="Filter project videos"
        >
          {availableFilters.map((key) => {
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(key)}
                className={`shrink-0 min-h-10 px-3.5 sm:px-4 py-2 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                  active
                    ? "bg-[#141c2b] text-white"
                    : "bg-white text-[#141c2b]/75 ring-1 ring-black/10 hover:text-[#141c2b]"
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Mobile accordion */}
        <div className="mt-6 md:hidden">
          <button
            type="button"
            aria-expanded={browseOpen}
            aria-controls={`${reactId}-browse-panel`}
            id={`${reactId}-browse-trigger`}
            onClick={() => setBrowseOpen((o) => !o)}
            className="flex w-full items-center justify-between gap-3 min-h-11 px-4 py-2.5 bg-white ring-1 ring-black/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent"
          >
            <span className="min-w-0">
              <span className="block font-heading text-[11px] font-bold tracking-[0.12em] uppercase text-[#141c2b]">
                Browse by Project Type
              </span>
              {filter !== "All" ? (
                <span className="mt-0.5 block text-[12px] text-gray-600 truncate">{filter}</span>
              ) : (
                <span className="mt-0.5 block text-[12px] text-gray-500">All projects</span>
              )}
            </span>
            <svg
              className={`h-4 w-4 shrink-0 text-[#141c2b] transition-transform duration-200 ${browseOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {browseOpen ? (
            <ul
              id={`${reactId}-browse-panel`}
              role="listbox"
              aria-labelledby={`${reactId}-browse-trigger`}
              className="mt-2 list-none m-0 p-0 bg-white ring-1 ring-black/10 divide-y divide-black/[0.06]"
            >
              {availableFilters.map((key) => {
                const active = filter === key;
                return (
                  <li key={key} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onClick={() => selectFilter(key)}
                      className={`w-full text-left px-4 py-3 min-h-11 font-heading text-[11px] font-bold tracking-[0.1em] uppercase transition-colors focus:outline-none focus-visible:bg-[#f7f5f1] ${
                        active ? "bg-[#141c2b] text-white" : "text-[#141c2b]/80 hover:bg-[#f7f5f1]"
                      }`}
                    >
                      {key}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        {/* Desktop featured layout */}
        <div className="hidden md:block mt-8 sm:mt-9">
          {featured ? (
            <>
              <p className="font-heading text-[10px] font-bold tracking-[0.16em] uppercase text-tamay-accent/90 mb-3">
                Featured
              </p>
              <VideoCard video={featured} featured onPlay={play} />

              {desktopSupporting.length > 0 ? (
                <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {desktopSupporting.map((video) => (
                    <VideoCard key={video.id} video={video} onPlay={play} />
                  ))}
                </div>
              ) : null}

              {desktopHasMore ? (
                <div className="mt-8 sm:mt-9 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleDesktop((n) => n + LOAD_MORE_DESKTOP)}
                    className="min-h-11 px-6 py-2.5 font-bold text-sm tracking-wide border-2 border-[#141c2b]/80 text-[#141c2b] hover:bg-[#141c2b] hover:text-white transition-colors"
                  >
                    Load More Videos
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <p className="mt-10 text-sm text-gray-600">No videos in this category yet.</p>
          )}
        </div>

        {/* Mobile compact grid */}
        <div className="md:hidden mt-6">
          {mobileVisible.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {mobileVisible.map((video) => (
                <VideoCard key={`m-${video.id}`} video={video} onPlay={play} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600">No videos in this category yet.</p>
          )}

          {mobileHasMore ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleMobile((n) => n + LOAD_MORE_MOBILE)}
                className="min-h-11 px-6 py-2.5 font-bold text-sm tracking-wide border-2 border-[#141c2b]/80 text-[#141c2b] hover:bg-[#141c2b] hover:text-white transition-colors w-full"
              >
                Load More Videos
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="h-8 sm:h-12 lg:h-14" aria-hidden />

      <div
        className={`tamay-modal${activeId ? " active" : ""}`}
        id={`${reactId}-modal`}
        aria-hidden={activeId ? "false" : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="tamay-modal-video" id={`${reactId}-player`}>
          {activeId ? (
            <iframe
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(activeId)}?autoplay=1&mute=1&playsinline=1&rel=0&vq=hd1080&modestbranding=1`}
            />
          ) : null}
        </div>
      </div>
      <div
        className={`tamay-close${activeId ? " show" : ""}`}
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
