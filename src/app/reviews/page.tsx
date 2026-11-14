import type { Metadata } from "next";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ReviewsVideoTestimonialsSection } from "@/components/reviews/ReviewsVideoTestimonialsSection";
import { WriteReviewSection } from "@/components/reviews/WriteReviewSection";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { buildSocialMetadata } from "@/lib/socialMetadata";

export const metadata: Metadata = buildSocialMetadata("reviews");

export default function ReviewsPage() {
  return (
    <>
      <ReviewsSection />

      <WriteReviewSection />

      <ReviewsVideoTestimonialsSection />

      <SiteContactSection />
    </>
  );
}
