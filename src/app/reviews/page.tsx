import type { Metadata } from "next";
import { ReviewsFeaturedSection } from "@/components/reviews/ReviewsFeaturedSection";
import { ReviewsFinalCTA } from "@/components/reviews/ReviewsFinalCTA";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsVideoTestimonialsSection } from "@/components/reviews/ReviewsVideoTestimonialsSection";
import { WriteReviewSection } from "@/components/reviews/WriteReviewSection";
import { buildSocialMetadata } from "@/lib/socialMetadata";

export const metadata: Metadata = buildSocialMetadata("reviews");

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />

      <ReviewsFeaturedSection />

      <ReviewsVideoTestimonialsSection />

      <WriteReviewSection />

      <ReviewsFinalCTA />
    </>
  );
}
