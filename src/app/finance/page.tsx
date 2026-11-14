import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FinanceBenefitsSection } from "@/components/finance/FinanceBenefitsSection";
import { FinanceHero } from "@/components/finance/FinanceHero";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { SITE } from "@/lib/site";
import { buildSocialMetadata } from "@/lib/socialMetadata";
import { SiteText } from "@/components/copy/SiteText";

export const metadata: Metadata = buildSocialMetadata("finance");

export default function FinancePage() {
  return (
    <>
      <FinanceHero />

      <FinanceBenefitsSection />

      <section className="py-14 max-w-3xl mx-auto px-4 text-center">
        <SectionHeading
          copyKey="finance.ready"
          title="Ready to Check Your Options?"
          subtitle="Apply through our secure financing partner to see what plans may be available for your project."
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <Button href={SITE.financingUrl} variant="primary" external>
            <SiteText k="finance.ready.apply">Check Financing Options</SiteText>
          </Button>
          <Button href="#contact" variant="outline">
            <SiteText k="finance.ready.contact">Contact Us</SiteText>
          </Button>
        </div>
      </section>

      <SiteContactSection />
    </>
  );
}
