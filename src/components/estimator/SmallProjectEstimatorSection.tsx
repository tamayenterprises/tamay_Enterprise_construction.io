import type { ReactNode } from "react";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SITE } from "@/lib/site";

type SmallProjectEstimatorSectionProps = {
  id?: string;
  headingId: string;
  eyebrow: string;
  title: string;
  intro: string;
  note?: ReactNode;
  cardTitle: string;
  cardBody: string;
  disclaimer: string;
};

/**
 * Shared entry point to the external Small Project Estimator (SITE.estimateUrl).
 * The estimator app does not read a preselected project from the URL, so project
 * selection happens inside the estimator itself.
 */
export function SmallProjectEstimatorSection({
  id,
  headingId,
  eyebrow,
  title,
  intro,
  note,
  cardTitle,
  cardBody,
  disclaimer,
}: SmallProjectEstimatorSectionProps) {
  return (
    <section id={id} className="bg-white border-y border-[#0b1628]/[0.06] scroll-mt-24" aria-labelledby={headingId}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-14 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:gap-10 xl:gap-12 lg:items-stretch">
          <figure className="relative order-2 lg:order-1 mt-8 lg:mt-0 w-full min-h-0">
            <div className="relative w-full overflow-hidden shadow-sm ring-1 ring-black/5 aspect-[16/9] sm:aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[440px] rounded-tr-[4.5rem] sm:rounded-tr-[6.5rem] lg:rounded-tr-[8.5rem] rounded-bl-[1.5rem] sm:rounded-bl-[2rem]">
              <SitePhoto
                slot="construction.approvedEstimator"
                alt="Tamay Enterprises technician assembling furniture for a small home installation project"
                className="object-cover object-[40%_48%]"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
            </div>
          </figure>

          <div className="order-1 lg:order-2 min-w-0 flex flex-col justify-center">
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              {eyebrow}
            </p>
            <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />
            <h2
              id={headingId}
              className="mt-3.5 font-heading text-[1.6rem] sm:text-[1.95rem] lg:text-[2.05rem] font-normal leading-[1.15] text-[#0b1628] text-balance"
            >
              {title}
            </h2>
            <p className="mt-3.5 text-[15px] text-[#0b1628]/80 leading-[1.7] max-w-[34rem]">{intro}</p>

            {note ? (
              <p className="mt-4 border-l-2 border-tamay-accent/70 bg-[#f7f4ef] px-4 py-3 text-[13px] sm:text-sm text-[#0b1628]/80 leading-relaxed max-w-[34rem]">
                {note}
              </p>
            ) : null}

            <div className="mt-6 rounded-xl bg-white px-5 py-6 sm:px-6 sm:py-7 ring-1 ring-[#0b1628]/10 shadow-[0_14px_36px_rgba(11,22,40,0.08)]">
              <div className="h-0.5 w-12 bg-tamay-accent" aria-hidden />
              <h3 className="mt-4 font-heading text-xl sm:text-[1.35rem] font-normal leading-snug text-[#0b1628]">
                {cardTitle}
              </h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-[#0b1628]/75 leading-relaxed">{cardBody}</p>

              <a
                href={SITE.estimateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 min-h-12 px-6 font-semibold text-[15px] tracking-wide text-white bg-[#0b1628] border border-tamay-accent/70 transition-colors hover:bg-[#13213a] hover:border-tamay-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
              >
                Start My Estimate
                <span
                  aria-hidden
                  className="text-tamay-accent transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                >
                  →
                </span>
                <span className="sr-only">(opens the estimator in a new tab)</span>
              </a>

              <p className="mt-5 pt-4 border-t border-[#0b1628]/10 text-[12px] sm:text-[13px] text-[#0b1628]/65 leading-relaxed">
                {disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
