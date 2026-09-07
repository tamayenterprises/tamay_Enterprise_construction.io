import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryPromotionSection } from "@/components/gallery/GalleryPromotionSection";
import { GalleryVideoShowcase } from "@/components/gallery/GalleryVideoShowcase";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { GALLERY_PHOTO_SLOTS } from "@/lib/siteImageSlots";
import { getResolvedSiteMedia, mediaSrc } from "@/lib/siteImages";
import { buildSocialMetadata } from "@/lib/socialMetadata";

export const metadata: Metadata = buildSocialMetadata("gallery");

export default async function GalleryPage() {
  const media = await getResolvedSiteMedia();
  const photos = GALLERY_PHOTO_SLOTS.map((slot) => ({
    title: slot.title,
    src: mediaSrc(media, slot.key),
    slotKey: slot.key,
  }));
  return (
    <>
      <GalleryHero />

      <GalleryPromotionSection />

      <GalleryVideoShowcase photos={photos} />

      <SiteContactSection />
    </>
  );
}
