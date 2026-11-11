import type { Metadata } from "next";
import { LogisticsHero } from "@/components/logistics/LogisticsHero";
import { LogisticsHowWeHelpSection } from "@/components/logistics/LogisticsHowWeHelpSection";
import { LogisticsWhyChooseSection } from "@/components/logistics/LogisticsWhyChooseSection";
import { LogisticsWhoWeSupportSection } from "@/components/logistics/LogisticsWhoWeSupportSection";
import { LogisticsProcessSection } from "@/components/logistics/LogisticsProcessSection";
import { LogisticsLocalRegionalSection } from "@/components/logistics/LogisticsLocalRegionalSection";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { Button } from "@/components/ui/Button";
import { ServiceAppointmentSection } from "@/components/appointments/ServiceAppointmentSection";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";
import { buildSocialMetadata } from "@/lib/socialMetadata";

export const metadata: Metadata = buildSocialMetadata("logistics");

const deliveryServices = [
  "Local and regional delivery services",
  "Business logistics support",
  "Scheduled and coordinated transportation",
  "Time-sensitive deliveries",
  "Project-based logistics coordination",
];

function LogisticsPhoto({
  slot,
  alt,
  className = "aspect-[2/1]",
}: {
  slot: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`relative ${className} max-w-5xl mx-auto overflow-hidden rounded-sm`}>
      <SitePhoto slot={slot} alt={alt} sizes="(max-width: 768px) 100vw, 1280px" />
    </figure>
  );
}

export default async function LogisticsPage() {
  return (
    <>
      <LogisticsHero />

      <section className="relative bg-[#faf8f5]" aria-labelledby="logistics-about-heading">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tamay-accent/45 to-transparent"
          aria-hidden
        />
        <div className="max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10 py-11 sm:py-14 lg:py-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <SiteText
              k="logistics.intro.eyebrow"
              as="p"
              className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent"
            >
              About Us
            </SiteText>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="logistics-about-heading"
            className="mt-4 sm:mt-5 mx-auto max-w-[40rem] font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            <SiteText k="logistics.intro.title">Logistics &amp; Delivery Services in West Haven, CT</SiteText>
          </h2>
          <SiteText
            k="logistics.intro.body"
            as="p"
            multiline
            className="mt-5 sm:mt-6 mx-auto max-w-[40rem] lg:max-w-[44rem] text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7]"
          >
            Reliable logistics is not just about moving items from one location to another — it&apos;s about coordination, timing, and accountability. Tamay Enterprises provides professional logistics and delivery services in West Haven, CT and nearby towns, supporting businesses and individuals with dependable local and regional transportation solutions. Our logistics team operates with structure, clear communication, and a focus on efficiency to ensure every delivery is handled with care.
          </SiteText>
          <div className="mt-7 sm:mt-8">
            <Button href="#contact" variant="accent">
              <SiteText k="logistics.intro.cta">Get a Fast Quote</SiteText>
            </Button>
          </div>
        </div>
      </section>

      <LogisticsHowWeHelpSection services={deliveryServices} />

      <LogisticsWhyChooseSection />

      <LogisticsWhoWeSupportSection />

      <LogisticsProcessSection />

      <section className="px-4 pt-10 pb-10 max-w-5xl mx-auto">
        <LogisticsPhoto slot="logistics.routeMap" alt="Regional logistics route map" />
      </section>

      <LogisticsLocalRegionalSection />

      <ServiceAppointmentSection serviceId="logistics" />

      <SiteContactSection />
    </>
  );
}
