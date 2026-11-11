import type { Metadata } from "next";
import { ConstructionFinancingSection } from "@/components/construction/ConstructionFinancingSection";
import { ServicesSectionTitle } from "@/components/home/ServicesSectionTitle";
import { HomeAboutIntro } from "@/components/home/HomeAboutIntro";
import { HomeClientProof } from "@/components/home/HomeClientProof";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLocationMap } from "@/components/home/HomeLocationMap";
import { HomeWhyTamay } from "@/components/home/HomeWhyTamay";
import { DivisionCard, DivisionCardGrid } from "@/components/ui/DivisionCard";
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

      <DivisionCardGrid>
        <DivisionCard
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
        />

        <DivisionCard
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

        <DivisionCard
          image={images.divisions.assembly}
          slotKey="divisions.assembly"
          copyKey="home.division.assembly"
          eyebrow="ASSEMBLY & INSTALLATION"
          title="Professional Assembly & Installation"
          description="From furniture and storage systems to wall-mounted installations and multi-unit projects, our team provides careful, organized, and professional execution."
          discoverHref="/assembly-installation"
          discoverLabel="Explore Assembly & Installation →"
        />
      </DivisionCardGrid>

      <HomeWhyTamay />

      <ConstructionFinancingSection />

      <HomeClientProof />

      <HomeFinalCTA />

      <HomeLocationMap />
    </>
  );
}
