"use client";

import { useId, useState } from "react";
import { SiteText } from "@/components/copy/SiteText";

const AUDIENCES = [
  {
    title: "Businesses",
    summary: "Reliable logistics support to keep your operations running smoothly.",
    detail: "Local businesses requiring dependable delivery solutions",
    icon: "store" as const,
  },
  {
    title: "Contractors & Service Providers",
    summary: "Coordinated transportation for materials, equipment, and project needs.",
    detail: "Contractors and service providers coordinating materials or equipment",
    icon: "hardhat" as const,
  },
  {
    title: "Individuals",
    summary: "Convenient, organized transportation support for everyday and one-time needs.",
    detail: "Individuals needing organized transportation support",
    icon: "people" as const,
  },
] as const;

function AudienceIcon({ type }: { type: (typeof AUDIENCES)[number]["icon"] }) {
  const className = "h-6 w-6 shrink-0 text-tamay-accent";
  if (type === "store") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 11v9h16v-9" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 9.5L4.6 4.5h14.8L21 9.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M3 9.5a2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M10 20v-5h4v5" />
      </svg>
    );
  }
  if (type === "hardhat") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M2.5 18.5h19" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.5 18.5V14a7.5 7.5 0 0115 0v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M10 4.8V11M14 4.8V11" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M10 4.8h4" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <circle cx="9" cy="8" r="3" strokeWidth={1.4} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3.5 19a5.5 5.5 0 0111 0" />
      <circle cx="16.5" cy="9" r="2.4" strokeWidth={1.4} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M15.6 14.2A4.5 4.5 0 0120.5 19" />
    </svg>
  );
}

/** Logistics audiences — single-open accordion, all items start closed. */
export function LogisticsWhoWeSupportSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#faf8f5]" aria-labelledby="logistics-who-we-support-heading">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-11 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Who We Support
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="logistics-who-we-support-heading"
            className="mt-4 sm:mt-5 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            Logistics Support for Different Needs.
          </h2>
          <p className="mt-4 sm:mt-5 mx-auto max-w-[38rem] text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7]">
            Dependable delivery and transportation solutions for businesses, contractors, and individuals across our local
            and regional service area.
          </p>
        </div>

        <ul className="mt-8 sm:mt-10 list-none m-0 p-0 space-y-3">
          {AUDIENCES.map((audience, index) => {
            const open = openIndex === index;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <li
                key={audience.title}
                className={`rounded-lg border transition-colors motion-reduce:transition-none ${
                  open ? "border-tamay-accent/45 bg-white" : "border-[#0b1628]/10 bg-white/60 hover:bg-white"
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center gap-3 sm:gap-5 min-h-16 px-4 sm:px-6 py-3.5 sm:py-4 text-left rounded-lg focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
                  >
                    <AudienceIcon type={audience.icon} />
                    <span className="hidden sm:block h-10 w-px shrink-0 bg-tamay-accent/35" aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-[15px] sm:text-[17px] font-semibold text-[#0b1628] leading-snug">
                        {audience.title}
                      </span>
                      <span className="mt-0.5 block text-[13px] sm:text-sm text-[#0b1628]/65 leading-snug">
                        {audience.summary}
                      </span>
                    </span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-tamay-accent transition-transform duration-200 motion-reduce:transition-none ${
                        open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  inert={!open}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-[3.25rem] pr-4 sm:pr-6 pb-4 sm:pb-5 sm:pl-[5.55rem]">
                      <div className="border-t border-[#0b1628]/[0.08] pt-3 sm:pt-4">
                        <SiteText
                          k={`logistics.support.item${index + 1}`}
                          as="p"
                          className="text-[14px] sm:text-[15px] text-[#0b1628]/80 leading-relaxed"
                        >
                          {audience.detail}
                        </SiteText>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="hidden sm:block h-px w-10 bg-tamay-accent/60" aria-hidden />
          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-tamay-accent" aria-hidden />
          <p className="font-heading text-[14px] sm:text-[17px] text-[#0b1628] leading-snug max-w-[18rem] sm:max-w-none">
            Less delays. Clearer coordination. A smoother experience.
          </p>
          <span className="hidden sm:block h-1.5 w-1.5 shrink-0 rotate-45 bg-tamay-accent" aria-hidden />
          <span className="hidden sm:block h-px w-10 bg-tamay-accent/60" aria-hidden />
        </div>
      </div>
    </section>
  );
}
