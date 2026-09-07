"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { StaffPhotoEditor } from "@/components/images/StaffPhotoEditor";
import { useResolvedSiteMedia } from "@/components/images/SiteImagesProvider";
import {
  GALLERY_PHOTO_HIGHLIGHTS,
  type GalleryPhotoHighlight,
} from "@/lib/galleryPhotos";
import { mediaSrc } from "@/lib/siteImages";

const NAVY = "#141c2b";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

function PhotoSlide({
  photo,
  src,
  active,
  onOpen,
}: {
  photo: GalleryPhotoHighlight;
  src: string;
  active: boolean;
  onOpen: () => void;
}) {
  const image = (
    <Image
      src={src}
      alt={photo.alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 28vw"
      unoptimized
    />
  );

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative shrink-0 snap-center overflow-hidden rounded-lg sm:rounded-xl bg-[#eceae6] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-tamay-accent transition-[width,transform,opacity] duration-300 ease-out ${
        active
          ? "w-[85vw] max-w-[340px] sm:w-[46%] sm:max-w-none lg:w-[31%] xl:w-[28%] aspect-[4/3] opacity-100 scale-100 ring-1 ring-[#c9a227]/35"
          : "w-[72vw] max-w-[280px] sm:w-[40%] sm:max-w-none lg:w-[26%] xl:w-[24%] aspect-[4/3] opacity-80 scale-[0.97] ring-1 ring-black/[0.04]"
      }`}
      aria-label={`View larger: ${photo.title}`}
      aria-current={active ? "true" : undefined}
    >
      {photo.slotKey ? <StaffPhotoEditor slot={photo.slotKey}>{image}</StaffPhotoEditor> : image}
      <span
        className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none"
        aria-hidden
      />
      <span className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
        <span className="block font-heading text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
          {photo.category}
        </span>
        <span className="mt-0.5 block font-heading text-[11px] sm:text-xs font-semibold text-white leading-snug line-clamp-1">
          {photo.title}
        </span>
      </span>
    </button>
  );
}

function PhotoLightbox({
  photos,
  index,
  srcFor,
  onClose,
  onPrev,
  onNext,
}: {
  photos: readonly GalleryPhotoHighlight[];
  index: number;
  srcFor: (photo: GalleryPhotoHighlight) => string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#141c2b]/88 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#141c2b] text-lg leading-none shadow-sm hover:bg-white"
        aria-label="Close"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
        aria-label="Previous photo"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
        aria-label="Next photo"
      >
        <Chevron dir="right" />
      </button>

      <figure className="relative w-full max-w-5xl aspect-[16/10] max-h-[80vh]">
        <Image
          src={srcFor(photo)}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="100vw"
          unoptimized
          priority
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <p className="font-heading text-[10px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
              {photo.category}
            </p>
            <p className="mt-0.5 font-heading text-sm sm:text-base font-semibold text-white">{photo.title}</p>
          </div>
          <p className="text-xs text-white/70 shrink-0">
            {index + 1} / {photos.length}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

/**
 * Gallery Photo Highlights — lighter editorial horizontal carousel below Project Stories.
 * Manual browse preferred; lightweight scroll-snap (no new carousel library).
 */
export function GalleryPhotoHighlights() {
  const media = useResolvedSiteMedia();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = GALLERY_PHOTO_HIGHLIGHTS;
  const srcFor = useCallback(
    (photo: GalleryPhotoHighlight) => mediaSrc(media, photo.slotKey) || photo.src,
    [media],
  );

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => {
    const next = Math.max(0, activeIndex - 1);
    setActiveIndex(next);
    scrollToIndex(next);
  }, [activeIndex, scrollToIndex]);

  const goNext = useCallback(() => {
    const next = Math.min(photos.length - 1, activeIndex + 1);
    setActiveIndex(next);
    scrollToIndex(next);
  }, [activeIndex, photos.length, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        let best: { index: number; ratio: number } | null = null;
        for (const entry of entries) {
          const index = slides.indexOf(entry.target as HTMLElement);
          if (index < 0) continue;
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { index, ratio: entry.intersectionRatio };
          }
        }
        if (best && best.ratio > 0.45) setActiveIndex(best.index);
      },
      { root: track, threshold: [0.45, 0.6, 0.75] },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % photos.length));
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("tamay-lock");
    document.body.classList.add("tamay-lock");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("tamay-lock");
      document.body.classList.remove("tamay-lock");
    };
  }, [lightboxIndex, photos.length]);

  if (photos.length === 0) return null;

  return (
    <section
      id="photo-highlights"
      className="relative bg-[#faf8f5] border-b border-gray-200/70"
      aria-labelledby="photo-highlights-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-14 lg:pt-16 pb-3 sm:pb-4">
        <div className="max-w-2xl">
          <p className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-tamay-accent">
            Photo Highlights
          </p>
          <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />
          <h2
            id="photo-highlights-heading"
            className="mt-3 font-heading text-2xl sm:text-[1.75rem] lg:text-[2rem] font-semibold leading-[1.15] text-balance"
            style={{ color: NAVY }}
          >
            Details Worth a Closer Look.
          </h2>
          <p className="mt-3.5 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
            A closer look at the craftsmanship, finishes, and spaces that bring each project together.
          </p>
        </div>

        <div className="mt-6 sm:mt-7 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="inline-flex h-8 w-8 items-center justify-center border border-[#141c2b]/25 text-[#141c2b] hover:border-tamay-accent hover:text-tamay-accent disabled:opacity-35 disabled:pointer-events-none transition-colors"
            aria-label="Previous photos"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={activeIndex >= photos.length - 1}
            className="inline-flex h-8 w-8 items-center justify-center border border-[#141c2b]/25 text-[#141c2b] hover:border-tamay-accent hover:text-tamay-accent disabled:opacity-35 disabled:pointer-events-none transition-colors"
            aria-label="Next photos"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-3 sm:gap-3.5 lg:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pb-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        aria-label="Photo highlights carousel"
      >
        {photos.map((photo, index) => (
          <PhotoSlide
            key={photo.slotKey}
            photo={photo}
            src={srcFor(photo)}
            active={index === activeIndex}
            onOpen={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pb-12 lg:pb-14">
        <p className="text-center text-[11px] sm:text-xs text-gray-500 tracking-wide">
          {activeIndex + 1} / {photos.length}
        </p>
      </div>

      {lightboxIndex !== null ? (
        <PhotoLightbox
          photos={photos}
          index={lightboxIndex}
          srcFor={srcFor}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))}
          onNext={() => setLightboxIndex((i) => (i === null ? i : (i + 1) % photos.length))}
        />
      ) : null}
    </section>
  );
}
