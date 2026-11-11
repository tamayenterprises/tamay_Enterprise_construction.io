import Image from "next/image";
import type { ReactNode } from "react";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";
import { Button } from "./Button";

type DivisionCardProps = {
  image: string;
  slotKey?: string;
  eyebrow: string;
  title: string;
  tagline?: string;
  description: string;
  bullets?: string[];
  discoverHref: string;
  discoverLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaOpensLiveChat?: boolean;
  copyKey?: string;
};

/** Homepage "Our Services" grid: 1 column on mobile, 2 × 2 from tablet up. */
export function DivisionCardGrid({ children }: { children: ReactNode }) {
  return (
    <section className="bg-[#faf8f5] border-b border-[#0b1628]/[0.06] pt-2 sm:pt-4 lg:pt-6 pb-12 sm:pb-14 lg:pb-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-12 lg:gap-y-14">
        {children}
      </div>
    </section>
  );
}

export function DivisionCard({
  image,
  slotKey,
  eyebrow,
  title,
  tagline,
  description,
  bullets = [],
  discoverHref,
  discoverLabel = "Discover More",
  ctaLabel,
  ctaHref,
  ctaOpensLiveChat = false,
  copyKey,
}: DivisionCardProps) {
  const eyebrowClass =
    "font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-tamay-accent";
  const titleClass =
    "mt-3 font-heading text-[1.5rem] sm:text-[1.65rem] lg:text-[1.85rem] font-normal leading-[1.15] text-balance text-[#0b1628]";
  const taglineClass =
    "mt-4 font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#0b1628]/80";
  const descriptionClass = "mt-3 text-[15px] leading-[1.7] text-[#0b1628]/75";

  return (
    <article className="flex h-full min-w-0 flex-col">
      <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] ring-1 ring-[#0b1628]/[0.06] shadow-[0_12px_30px_rgba(11,22,40,0.10)]">
        {slotKey ? (
          <SitePhoto
            slot={slotKey}
            alt={title}
            className="object-cover object-center"
            sizes="(max-width:767px) 100vw, 50vw"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width:767px) 100vw, 50vw"
            unoptimized
          />
        )}
      </div>

      <div className="mt-6 sm:mt-7 flex flex-1 flex-col min-w-0">
        {copyKey ? (
          <SiteText k={`${copyKey}.eyebrow`} as="p" className={eyebrowClass}>
            {eyebrow}
          </SiteText>
        ) : (
          <p className={eyebrowClass}>{eyebrow}</p>
        )}
        {copyKey ? (
          <SiteText k={`${copyKey}.title`} as="h3" className={titleClass}>
            {title}
          </SiteText>
        ) : (
          <h3 className={titleClass}>{title}</h3>
        )}
        <div className="mt-4 h-px w-10 bg-tamay-accent/70" aria-hidden />
        {tagline ? (
          copyKey ? (
            <SiteText k={`${copyKey}.tagline`} as="p" className={taglineClass}>
              {tagline}
            </SiteText>
          ) : (
            <p className={taglineClass}>{tagline}</p>
          )
        ) : null}
        {copyKey ? (
          <SiteText k={`${copyKey}.description`} as="p" className={descriptionClass} multiline>
            {description}
          </SiteText>
        ) : (
          <p className={descriptionClass}>{description}</p>
        )}
        {bullets.length > 0 ? (
          <ul className="mt-4 space-y-1.5 list-none p-0 text-[#0b1628]/80">
            {bullets.map((b, index) => (
              <li key={`${copyKey ?? "bullet"}-${index}`} className="text-[14px] sm:text-[15px] leading-snug">
                {copyKey ? <SiteText k={`${copyKey}.bullet${index + 1}`}>{b}</SiteText> : b}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto pt-6 flex flex-wrap gap-3">
          <Button href={discoverHref} variant="outline">
            {copyKey ? <SiteText k={`${copyKey}.discover`}>{discoverLabel}</SiteText> : discoverLabel}
          </Button>
          {ctaLabel ? (
            ctaOpensLiveChat ? (
              <OpenLiveChatButton className="inline-block font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-[#0b1628] hover:bg-[#13213a] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent">
                {copyKey ? <SiteText k={`${copyKey}.cta`}>{ctaLabel}</SiteText> : ctaLabel}
              </OpenLiveChatButton>
            ) : (
              <Button href={ctaHref ?? discoverHref} variant="primary">
                {copyKey ? <SiteText k={`${copyKey}.cta`}>{ctaLabel}</SiteText> : ctaLabel}
              </Button>
            )
          ) : null}
        </div>
      </div>
    </article>
  );
}
