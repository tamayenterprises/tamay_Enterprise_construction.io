import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryPhotoHighlights } from "@/components/gallery/GalleryPhotoHighlights";
import { GalleryPromotionSection } from "@/components/gallery/GalleryPromotionSection";
import { GalleryVideoShowcase } from "@/components/gallery/GalleryVideoShowcase";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { buildSocialMetadata } from "@/lib/socialMetadata";

export const metadata: Metadata = buildSocialMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />

      <GalleryPromotionSection />

      <GalleryVideoShowcase />

      <GalleryPhotoHighlights />

      <SiteContactSection />
    </>
  );
}
