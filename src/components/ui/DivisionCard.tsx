import Image from "next/image";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";
import { Button } from "./Button";

type DivisionCardProps = {
  image: string;
  slotKey?: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  discoverHref: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaOpensLiveChat?: boolean;
  reverse?: boolean;
  copyKey?: string;
  /** Tighter top spacing when directly under the Our Services title */
  alignTop?: boolean;
};

export function DivisionCard({
  image,
  slotKey,
  eyebrow,
  title,
  tagline,
  description,
  bullets,
  discoverHref,
  ctaLabel,
  ctaHref,
  ctaOpensLiveChat = false,
  reverse,
  copyKey,
  alignTop = false,
}: DivisionCardProps) {
  const eyebrowClass =
    "font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-tamay-accent";
  const titleClass =
    "mt-3 font-heading text-[1.6rem] sm:text-[1.95rem] lg:text-[2.2rem] font-normal leading-[1.15] text-balance text-[#0b1628]";
  const taglineClass =
    "mt-4 font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#0b1628]/80";
  const descriptionClass = "mt-3 text-[15px] sm:text-base leading-[1.7] max-w-xl text-[#0b1628]/75";

  return (
    <section
      className={`bg-[#faf8f5] border-b border-[#0b1628]/[0.06] ${
        alignTop ? "pt-2 sm:pt-4 lg:pt-6" : "pt-10 sm:pt-12 lg:pt-16"
      } pb-10 sm:pb-12 lg:pb-16`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-7 sm:gap-8 lg:gap-12 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] ring-1 ring-[#0b1628]/[0.06] shadow-[0_12px_30px_rgba(11,22,40,0.10)]">
            {slotKey ? (
              <SitePhoto
                slot={slotKey}
                alt={title}
                className="object-cover object-center"
                sizes="(max-width:1023px) 100vw, 50vw"
              />
            ) : (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="(max-width:1023px) 100vw, 50vw"
                unoptimized
              />
            )}
          </div>

          <div className="min-w-0 md:max-w-2xl lg:max-w-none">
            {copyKey ? (
              <SiteText k={`${copyKey}.eyebrow`} as="p" className={eyebrowClass}>
                {eyebrow}
              </SiteText>
            ) : (
              <p className={eyebrowClass}>{eyebrow}</p>
            )}
            {copyKey ? (
              <SiteText k={`${copyKey}.title`} as="h2" className={titleClass}>
                {title}
              </SiteText>
            ) : (
              <h2 className={titleClass}>{title}</h2>
            )}
            <div className="mt-4 h-px w-10 bg-tamay-accent/70" aria-hidden />
            {copyKey ? (
              <SiteText k={`${copyKey}.tagline`} as="p" className={taglineClass}>
                {tagline}
              </SiteText>
            ) : (
              <p className={taglineClass}>{tagline}</p>
            )}
            {copyKey ? (
              <SiteText k={`${copyKey}.description`} as="p" className={descriptionClass} multiline>
                {description}
              </SiteText>
            ) : (
              <p className={descriptionClass}>{description}</p>
            )}
            <ul className="mt-4 space-y-1.5 list-none p-0 text-[#0b1628]/80">
              {bullets.map((b, index) => (
                <li key={`${copyKey ?? "bullet"}-${index}`} className="text-[14px] sm:text-[15px] leading-snug">
                  {copyKey ? <SiteText k={`${copyKey}.bullet${index + 1}`}>{b}</SiteText> : b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={discoverHref} variant="outline">
                {copyKey ? <SiteText k={`${copyKey}.discover`}>Discover More</SiteText> : "Discover More"}
              </Button>
              {ctaOpensLiveChat ? (
                <OpenLiveChatButton className="inline-block font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-[#0b1628] hover:bg-[#13213a] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent">
                  {copyKey ? <SiteText k={`${copyKey}.cta`}>{ctaLabel}</SiteText> : ctaLabel}
                </OpenLiveChatButton>
              ) : (
                <Button href={ctaHref ?? discoverHref} variant="primary">
                  {copyKey ? <SiteText k={`${copyKey}.cta`}>{ctaLabel}</SiteText> : ctaLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
