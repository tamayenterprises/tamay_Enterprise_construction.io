import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";

type LogisticsHowWeHelpSectionProps = {
  services: readonly string[];
};

/** Logistics services intro — existing fleet photo as proof, existing service list kept visible (short items, no accordion). */
export function LogisticsHowWeHelpSection({ services }: LogisticsHowWeHelpSectionProps) {
  return (
    <section
      className="relative bg-[#f7f4ef] border-t border-[#0b1628]/[0.06]"
      aria-labelledby="logistics-how-we-help-heading"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-11 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <SiteText
              k="logistics.howWeHelp.eyebrow"
              as="p"
              className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent"
            >
              Logistics Services
            </SiteText>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="logistics-how-we-help-heading"
            className="mt-4 sm:mt-5 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628]"
          >
            <SiteText k="logistics.howWeHelp.title">How We Help You</SiteText>
          </h2>
          <SiteText
            k="logistics.howWeHelp.body"
            as="p"
            multiline
            className="mt-4 sm:mt-5 mx-auto max-w-[40rem] text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7]"
          >
            From local delivery support to moving help and coordinated transport, Tamay Enterprises provides dependable logistics services designed to keep your day moving forward.
          </SiteText>
        </div>

        <figure className="relative mt-8 sm:mt-10 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2048/852] overflow-hidden rounded-xl bg-[#0b1628]/5 ring-1 ring-[#0b1628]/10">
          <SitePhoto
            slot="logistics.warehouseFleet"
            alt="Tamay Enterprises delivery vans at a warehouse loading dock"
            className="object-cover object-[60%_center] lg:object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </figure>

        <div className="mt-10 sm:mt-12 text-center">
          <h3 className="font-heading text-[1.3rem] sm:text-[1.6rem] font-normal leading-[1.2] text-[#0b1628]">
            <SiteText k="logistics.howWeHelp.servicesTitle">What We Help With</SiteText>
          </h3>
          <span className="mt-3 mx-auto block h-px w-10 bg-tamay-accent/80" aria-hidden />
        </div>

        <ul className="mt-6 sm:mt-7 list-none m-0 p-0 flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {services.map((service, index) => (
            <li
              key={`logistics.services.item${index + 1}`}
              className="basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.67rem)] flex items-center gap-3 rounded-lg border border-[#0b1628]/10 bg-white/80 px-4 py-3 sm:px-5 sm:py-4"
            >
              <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-tamay-accent" aria-hidden />
              <SiteText
                k={`logistics.services.item${index + 1}`}
                className="text-[15px] font-medium text-[#0b1628] leading-snug"
              >
                {service}
              </SiteText>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
