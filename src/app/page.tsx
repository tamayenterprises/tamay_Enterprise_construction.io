import type { Metadata } from "next";
import { ServicesSectionTitle } from "@/components/home/ServicesSectionTitle";
import { HomeAboutIntro } from "@/components/home/HomeAboutIntro";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeImageShowcase } from "@/components/home/HomeImageShowcase";
import { HomeLocationMap } from "@/components/home/HomeLocationMap";
import { HomeSmallProjectEstimator } from "@/components/home/HomeSmallProjectEstimator";
import { HomeWhyTamay } from "@/components/home/HomeWhyTamay";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { DivisionCard } from "@/components/ui/DivisionCard";
import { SERVICE_AREAS } from "@/lib/site";
import { getResolvedSiteMedia } from "@/lib/siteImages";
import { buildSocialMetadata } from "@/lib/socialMetadata";
export const metadata: Metadata = buildSocialMetadata("home");

export default async function HomePage() {
  const { images } = await getResolvedSiteMedia();
  return (
    <>
      <HomeHero />

      <HomeAboutIntro />

      <ServicesSectionTitle />

      <DivisionCard
        fullScreen
        alignTop
        image={images.divisions.construction}
        slotKey="divisions.construction"
        copyKey="home.division.construction"
        eyebrow="RELIABLE. EXPERIENCED. FULLY INSURED"
        title="Construction & Home Renovation"
        tagline="We Design, Supply, Build & Maintain"
        description="Our construction division delivers high-quality home renovations, remodeling, additions, and long-term property improvement services for homeowners and property owners in West Haven and surrounding Connecticut towns."
        bullets={[
          "* Flexible Financing Options",
          "* 7-Year Warranty on eligible renovations",
          "* Complimentary Kitchen + Bathroom Tune-Up (with qualifying projects)",
        ]}
        discoverHref="/construction"
        ctaLabel="Talk to a Project Advisor"
        ctaOpensLiveChat
      />

      <DivisionCard
        fullScreen
        image={images.divisions.realEstate}
        slotKey="divisions.realEstate"
        copyKey="home.division.realEstate"
        eyebrow="YOUR TRUSTED PARTNER IN REAL ESTATE"
        title="Real Estate Services & Property Solutions"
        tagline="Experience. Network. Results."
        description="Our real estate services are designed to support buyers, sellers, and property owners with clarity and confidence. We focus on practical guidance, smooth coordination, and informed decision-making to help clients protect and grow their real estate investments throughout West Haven and nearby Connecticut markets."
        bullets={["Helping first-time homeowners and investors buy, sell, and grow with confidence"]}
        discoverHref="/real-estate"
        ctaLabel="Talk to a Real Estate Advisor"
        ctaOpensLiveChat
        reverse
      />

      <DivisionCard
        fullScreen
        image={images.divisions.logistics}
        slotKey="divisions.logistics"
        copyKey="home.division.logistics"
        eyebrow="DELIVERING MORE THAN MILES -- WE DELIVER TRUST."
        title="Local & Regional Logistics Services"
        tagline="Proudly serving Connecticut and nearby regions."
        description="Our logistics division provides reliable local and regional delivery services for businesses and individuals. Based in West Haven, CT, we focus on efficiency, communication, and dependable execution to support day-to-day operations and time-sensitive needs across surrounding communities."
        bullets={["Fleet of ProMaster vans and a hands-on team ready to serve you"]}
        discoverHref="/logistics"
        ctaLabel="Talk to Dispatch"
        ctaOpensLiveChat
      />

      <HomeSmallProjectEstimator />

      <HomeWhyTamay />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            copyKey="home.serviceArea"
            title="Proudly Serving West Haven & Nearby Connecticut Communities"
            subtitle={`Based in West Haven, CT, Tamay Enterprises proudly serves clients in ${SERVICE_AREAS.slice(0, 8).join(", ")}, and surrounding Connecticut communities. Our local presence allows us to provide responsive service while supporting projects throughout the region.`}
          />
        </div>
      </section>

      <HomeImageShowcase />

      <ReviewsSection showVideoTestimonials />

      <SiteContactSection />

      <HomeLocationMap />
    </>
  );
}
