import type { Metadata } from "next";
import { LogisticsHero } from "@/components/logistics/LogisticsHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

function whyChooseFor() {
  return [
    {
      title: "Professional appearance",
      text: "Professional appearance and courteous drivers",
      slot: "logistics.whyChoose.professional",
      alt: "Tamay logistics team member reviewing operations on a tablet in a warehouse",
    },
    {
      title: "On-time, communication-first operations",
      text: "Same-day or next-day transport for urgent materials and equipment.",
      slot: "logistics.whyChoose.delivery",
      alt: "Package delivery tracking with order delivery confirmation",
    },
    {
      title: "Problem-solving mindset",
      text: "Problem-solving mindset for tight windows and tricky sites",
      slot: "logistics.whyChoose.problemSolving",
      alt: "Strategic problem-solving approach from problem to solution",
    },
  ];
}

const supportAudience = [
  "Local businesses requiring dependable delivery solutions",
  "Contractors and service providers coordinating materials or equipment",
  "Individuals needing organized transportation support",
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
  const whyChoose = whyChooseFor();
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

      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <LogisticsPhoto
            slot="logistics.warehouseFleet"
            alt="Tamay Enterprises delivery vans at a warehouse loading dock"
            className="aspect-[16/10] mb-10"
          />
          <SectionHeading copyKey="logistics.reliability" title="Logistics Services Built on Reliability" />
          <div className="space-y-4 text-gray-600 leading-relaxed -mt-4 text-left md:text-center">
            <SiteText k="logistics.reliability.body1" as="p" multiline>
              At Tamay Enterprises, our logistics services are designed to support real-world needs where timing and execution matter. Whether coordinating scheduled deliveries or managing time-sensitive transportation, our team focuses on organized planning, route efficiency, and clear expectations from pickup to final delivery.
            </SiteText>
            <SiteText k="logistics.reliability.body2" as="p" multiline>
              We approach logistics the same way we approach our other divisions — with professionalism, preparation, and responsibility.
            </SiteText>
          </div>
          <Button href="#contact" variant="outline" className="mt-8">
            <SiteText k="logistics.reliability.cta">Contact us</SiteText>
          </Button>
        </div>
      </section>

      <section className="py-14 max-w-4xl mx-auto px-4">
        <SectionHeading copyKey="logistics.services" title="Our Logistics & Delivery Services" />
        <SiteText k="logistics.services.intro" as="p" className="text-gray-600 text-center mb-4 -mt-4">
          Tamay Enterprises provides logistics and delivery services including:
        </SiteText>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 max-w-xl mx-auto mb-8">
          {deliveryServices.map((s, index) => (
            <SiteText k={`logistics.services.item${index + 1}`} as="li" key={`logistics.services.item${index + 1}`}>
              {s}
            </SiteText>
          ))}
        </ul>
        <div className="bg-gray-50 rounded-sm p-6 max-w-xl mx-auto text-center">
          <SiteText k="logistics.quote.title" as="h3" className="font-heading text-lg text-tamay-primary font-semibold mb-3">
            Request a Quote
          </SiteText>
          <SiteText k="logistics.quote.body" as="p" className="text-sm text-gray-600 leading-relaxed mb-6" multiline>
            Each service is managed with attention to detail and operational consistency to support smooth execution and dependable outcomes.
          </SiteText>
          <Button href="#contact" variant="primary">
            <SiteText k="logistics.quote.cta">Request a Quote</SiteText>
          </Button>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading copyKey="logistics.why" title="Why Choose Tamay Logistics" />
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((w, index) => (
              <div key={w.slot} className="bg-white p-6 border-t-4 border-tamay-primary shadow-sm text-center">
                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden">
                  <SitePhoto slot={w.slot} alt={w.alt} sizes="160px" compact />
                </div>
                <SiteText k={`logistics.why.item${index + 1}.title`} as="h3" className="font-heading text-tamay-primary font-semibold mb-3">
                  {w.title}
                </SiteText>
                <SiteText k={`logistics.why.item${index + 1}.text`} as="p" className="text-sm text-gray-600 leading-relaxed" multiline>
                  {w.text}
                </SiteText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 max-w-4xl mx-auto px-4">
        <SectionHeading copyKey="logistics.support" title="Supporting Businesses & Individuals" />
        <SiteText k="logistics.support.intro" as="p" className="text-gray-600 text-center mb-4 -mt-4">
          Our logistics services support:
        </SiteText>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 max-w-xl mx-auto mb-6">
          {supportAudience.map((item, index) => (
            <SiteText k={`logistics.support.item${index + 1}`} as="li" key={`logistics.support.item${index + 1}`}>
              {item}
            </SiteText>
          ))}
        </ul>
        <SiteText k="logistics.support.closing" as="p" className="text-gray-600 text-center leading-relaxed" multiline>
          By combining planning with execution, we help reduce delays, miscommunication, and operational friction.
        </SiteText>
      </section>

      <section className="px-4 pb-10 max-w-5xl mx-auto">
        <LogisticsPhoto slot="logistics.routeMap" alt="Regional logistics route map" />
      </section>

      <section className="py-14 bg-tamay-primary text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading copyKey="logistics.area" light title="Serving West Haven & Nearby Communities" subtitle="Areas we serve:" />
          <SiteText k="logistics.area.body" as="p" className="text-gray-200 leading-relaxed -mt-4" multiline>
            Based in West Haven, CT, Tamay Enterprises proudly provides logistics and delivery services throughout Orange, Milford, New Haven, Woodbridge, Bethany, Fairfield, Trumbull, and surrounding areas. Our local presence allows us to respond efficiently while maintaining strong familiarity with regional routes and service expectations.
          </SiteText>
        </div>
      </section>

      <section className="py-14 max-w-4xl mx-auto px-4 text-center">
        <SectionHeading copyKey="logistics.approach" title="A Structured Approach to Logistics" />
        <SiteText k="logistics.approach.body" as="p" className="text-gray-600 leading-relaxed -mt-4" multiline>
          Logistics works best when systems are in place. Our team prioritizes clear scheduling, defined responsibilities, and consistent communication to ensure each delivery is completed as planned. This structured approach allows us to support both recurring logistics needs and one-time transportation requests with the same level of care and professionalism.
        </SiteText>
      </section>

      <ServiceAppointmentSection serviceId="logistics" />

      <SiteContactSection />
    </>
  );
}
