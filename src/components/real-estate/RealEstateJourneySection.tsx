import Image from "next/image";
import Link from "next/link";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { sitePath } from "@/lib/paths";
import { SiteText } from "@/components/copy/SiteText";

const BACKGROUND_SRC = "/homepage/hero/hero-real-estate-clean.jpg";

const STAGES = [
  {
    key: "FIND",
    title: "FIND IT",
    subtitle: "Real Estate Guidance",
    copy: "We help you search for a property that fits your needs today and has the potential to support your plans for tomorrow.",
    cta: {
      label: "Explore Properties",
      href: "#available-properties",
      chat: false,
    },
  },
  {
    key: "UNDERSTAND",
    title: "UNDERSTAND IT",
    subtitle: "Construction-Informed Perspective",
    copy: "We help you look beyond finishes and photos to think about layout, major systems, renovation possibilities, future maintenance, and long-term ownership.",
    cta: {
      label: "Talk to a Real Estate Advisor",
      href: "",
      chat: true,
    },
  },
  {
    key: "IMPROVE",
    title: "IMPROVE IT",
    subtitle: "Construction & Renovation",
    copy: "After closing, Tamay can help transform the property — kitchens, bathrooms, basements, flooring, electrical, plumbing, exterior improvements, and more.",
    cta: {
      label: "Explore Construction Services",
      href: "/construction",
      chat: false,
    },
  },
  {
    key: "MAINTAIN",
    title: "MAINTAIN IT",
    subtitle: "Home Preventive Services",
    copy: "Owning the home is the beginning of another journey. Preventive maintenance helps protect the property, identify small issues early, and plan for future needs.",
    cta: {
      label: "Explore Home Preventive Services",
      href: "/home-preventive-services",
      chat: false,
    },
  },
] as const;

/** Dividers: stacked rows on mobile, 2 × 2 on tablet (incl. landscape), 4 columns from xl. */
const STAGE_BORDERS = [
  "",
  "border-t md:border-t-0 md:border-l",
  "border-t xl:border-t-0 xl:border-l",
  "border-t md:border-l",
] as const;

const stageLinkClass =
  "inline text-left text-sm font-semibold text-white underline decoration-tamay-accent/50 underline-offset-4 transition-colors hover:text-tamay-accent hover:decoration-tamay-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

function StageIcon({ stage }: { stage: string }) {
  const className = "h-6 w-6 text-tamay-accent";
  if (stage === "FIND") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    );
  }
  if (stage === "UNDERSTAND") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.4} />
      </svg>
    );
  }
  if (stage === "IMPROVE") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 3l8 4v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z" />
    </svg>
  );
}

export function RealEstateJourneySection() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={BACKGROUND_SRC}
          alt=""
          fill
          className="object-cover object-[70%_45%]"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(11,22,40,0.9) 0%, rgba(11,22,40,0.78) 45%, rgba(11,22,40,0.88) 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[#0b1628]/10 md:hidden" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <SiteText
              k="realEstate.journey.eyebrow"
              as="p"
              className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent"
            >
              The Tamay Real Estate Approach
            </SiteText>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <SiteText
            k="realEstate.journey.headline"
            as="h2"
            className="mt-4 font-heading text-[1.75rem] sm:text-[2.15rem] lg:text-[2.5rem] font-normal leading-[1.15] text-white text-balance"
          >
            A Complete Real Estate Journey
          </SiteText>
          <SiteText
            k="realEstate.journey.intro"
            as="p"
            className="mt-4 mx-auto max-w-[36rem] text-[15px] sm:text-base text-white/75 leading-[1.7]"
          >
            From discovery to long-term care, we help you get more value from every property.
          </SiteText>
        </div>

        <ol
          className="mt-9 sm:mt-11 list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 rounded-xl border border-white/12 backdrop-blur-md shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
          style={{ backgroundColor: "rgba(11,22,40,0.55)" }}
        >
          {STAGES.map((stage, index) => {
            const key = stage.key.toLowerCase();
            return (
              <li
                key={stage.key}
                className={`flex flex-col px-6 py-6 sm:px-7 sm:py-7 xl:px-6 xl:py-8 border-white/10 ${STAGE_BORDERS[index]}`}
              >
                <StageIcon stage={stage.key} />
                <SiteText
                  k={`realEstate.journey.${key}.title`}
                  as="h3"
                  className="mt-4 font-heading text-lg sm:text-xl font-normal tracking-[0.04em] text-white"
                >
                  {stage.title}
                </SiteText>
                <SiteText
                  k={`realEstate.journey.${key}.subtitle`}
                  as="p"
                  className="mt-1.5 font-heading text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-tamay-accent"
                >
                  {stage.subtitle}
                </SiteText>
                <SiteText
                  k={`realEstate.journey.${key}.copy`}
                  as="p"
                  className="mt-3 text-[13.5px] sm:text-sm text-white/72 leading-relaxed"
                  multiline
                >
                  {stage.copy}
                </SiteText>
                <div className="mt-5 md:mt-auto md:pt-5">
                  {stage.cta.chat ? (
                    <OpenLiveChatButton className={stageLinkClass}>
                      {stage.cta.label}
                      <span aria-hidden className="ml-1.5 inline-block text-tamay-accent no-underline">
                        →
                      </span>
                    </OpenLiveChatButton>
                  ) : (
                    <Link
                      href={stage.cta.href.startsWith("#") ? stage.cta.href : sitePath(stage.cta.href)}
                      className={stageLinkClass}
                    >
                      {stage.cta.label}
                      <span aria-hidden className="ml-1.5 inline-block text-tamay-accent no-underline">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
