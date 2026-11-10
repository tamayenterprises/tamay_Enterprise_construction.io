import { SiteText } from "@/components/copy/SiteText";

export function ServicesSectionTitle() {
  return (
    <div id="our-services" className="bg-[#faf8f5] px-5 pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8">
      <div className="flex items-center justify-center gap-3">
        <span className="hidden sm:block h-px w-10 bg-tamay-accent/70" aria-hidden />
        <SiteText
          k="home.services.title"
          as="h2"
          className="font-heading text-[1.85rem] sm:text-[2.2rem] lg:text-[2.5rem] font-normal leading-[1.15] tracking-[0.04em] text-center text-[#0b1628]"
        >
          Our Services
        </SiteText>
        <span className="hidden sm:block h-px w-10 bg-tamay-accent/70" aria-hidden />
      </div>
      <div className="mx-auto mt-3 h-px w-12 bg-tamay-accent/60 sm:hidden" aria-hidden />
    </div>
  );
}
