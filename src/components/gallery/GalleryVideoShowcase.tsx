"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { StaffPhotoEditor } from "@/components/images/StaffPhotoEditor";
import { useResolvedSiteMedia } from "@/components/images/SiteImagesProvider";
import {
  GALLERY_SHOWCASE_VIDEOS,
  type GalleryShowcaseVideo,
  type GalleryVideoCategory,
} from "@/lib/galleryVideos";
import { mediaSrc } from "@/lib/siteImages";
import "@/components/reviews/tamay-video-gallery.css";

const NAVY = "#141c2b";
const INITIAL_VISIBLE = 6;
const LOAD_MORE_STEP = 6;

type FilterKey = "All" | GalleryVideoCategory;

type PhotoItem = {
  title: string;
  src: string;
  slotKey?: string;
};

type GalleryVideoShowcaseProps = {
  photos: readonly PhotoItem[];
};

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
      <span className="absolute left-3 top-3 inline-flex rounded-full border border-white/25 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
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

function PhotoStrip({ photos }: { photos: readonly PhotoItem[] }) {
  const media = useResolvedSiteMedia();

  if (photos.length === 0) return null;

  return (
    <div className="mt-14 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 border-t border-[#c9a227]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-tamay-accent">
          Project Photos
        </p>
        <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />
        <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold leading-snug" style={{ color: NAVY }}>
          Additional project photos
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xl">
          A lighter look at selected finished work — scroll to browse.
        </p>
      </div>

      <div
        className="mt-6 sm:mt-7 flex gap-3 sm:gap-3.5 overflow-x-auto px-4 sm:px-6 pb-2 scrollbar-hide snap-x snap-mandatory"
        aria-label="Project photo strip"
      >
        {photos.map((photo, index) => {
          const src = photo.slotKey ? mediaSrc(media, photo.slotKey) : photo.src;
          const image = (
            <Image
              src={src}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 70vw, 280px"
              unoptimized
            />
          );

          return (
            <figure
              key={photo.slotKey ?? `${photo.src}-${index}`}
              className="group relative h-40 w-[70vw] max-w-[280px] sm:h-44 sm:w-[260px] shrink-0 overflow-hidden rounded-xl bg-[#f3f1ed] ring-1 ring-black/[0.04] snap-start shadow-[0_6px_18px_rgba(20,28,43,0.06)]"
            >
              {photo.slotKey ? <StaffPhotoEditor slot={photo.slotKey}>{image}</StaffPhotoEditor> : image}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2.5">
                <p className="font-heading text-[11px] sm:text-xs font-semibold text-white leading-snug line-clamp-2">
                  {photo.title}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Video-first Gallery showcase — featured spotlight, filters, grid, load more, photo strip.
 * Keeps Hero / Promotion untouched; replaces the former photo+video gallery blocks.
 */
export function GalleryVideoShowcase({ photos }: GalleryVideoShowcaseProps) {
  const reactId = useId();
  const [filter, setFilter] = useState<FilterKey>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return GALLERY_SHOWCASE_VIDEOS;
    return GALLERY_SHOWCASE_VIDEOS.filter((v) => v.category === filter);
  }, [filter]);

  const featured = filtered[0] ?? null;
  const supporting = filtered.slice(1);
  const visibleSupporting = supporting.slice(0, Math.max(0, visibleCount - 1));
  const hasMore = visibleCount < filtered.length;

  const close = useCallback(() => setActiveId(null), []);
  const play = useCallback((id: string) => setActiveId(id), []);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
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

  const filters: FilterKey[] = ["All", "Residential", "Commercial"];

  return (
    <section
      id="featured-projects"
      className="relative scroll-mt-24 bg-[#f7f5f1] border-b border-gray-200/80"
      aria-labelledby="gallery-videos-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-14 lg:pt-16 pb-4 sm:pb-6">
        {/* Intro */}
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

        {/* Filters */}
        <div
          className="mt-7 sm:mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter project videos"
        >
          {filters.map((key) => {
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(key)}
                className={`min-h-10 px-4 py-2 font-heading text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase transition-colors ${
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

        {/* Featured + supporting */}
        {featured ? (
          <div className="mt-8 sm:mt-9">
            <p className="font-heading text-[10px] font-bold tracking-[0.16em] uppercase text-tamay-accent/90 mb-3">
              Featured
            </p>
            <VideoCard video={featured} featured onPlay={play} />

            {visibleSupporting.length > 0 ? (
              <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {visibleSupporting.map((video) => (
                  <VideoCard key={video.id} video={video} onPlay={play} />
                ))}
              </div>
            ) : null}

            {hasMore ? (
              <div className="mt-8 sm:mt-9 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((n) => n + LOAD_MORE_STEP)}
                  className="min-h-11 px-6 py-2.5 font-bold text-sm tracking-wide border-2 border-[#141c2b]/80 text-[#141c2b] hover:bg-[#141c2b] hover:text-white transition-colors"
                >
                  Load More Videos
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <p className="mt-10 text-sm text-gray-600">No videos in this category yet.</p>
        )}
      </div>

      <PhotoStrip photos={photos} />

      <div className="h-10 sm:h-12 lg:h-14" aria-hidden />

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
