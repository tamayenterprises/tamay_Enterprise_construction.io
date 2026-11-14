"use client";

import { useId, useState } from "react";
import { SitePhoto } from "@/components/images/SitePhoto";
import { Button } from "@/components/ui/Button";
import {
  ASSEMBLY_CABINET_FEATURE,
  ASSEMBLY_IMPORTANT_NOTE,
  ASSEMBLY_SERVICE_GROUPS,
} from "@/lib/assemblyInstallation";
import { appointmentScheduleHref } from "@/lib/onlineAppointments";

const ICON_PATHS = [
  "M4 11V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V11M3 12.5a1.5 1.5 0 0 1 3 0V14h12v-1.5a1.5 1.5 0 0 1 3 0V18H3v-5.5zM5 18v2m14-2v2",
  "M5 3.75h14v16.5H5V3.75zm0 5.5h14m-14 5.5h14M10.5 6.5h3m-3 5.5h3m-3 5.5h3",
  "M3 8.25h18M4.5 8.25V19.5m15-11.25V19.5M4.5 13.5h6v6M6.75 16.5h1.5",
  "M3.75 5.25h16.5v10.5H3.75V5.25zM9 19.5h6M12 15.75v3.75",
  "M4.5 21V4.5h9V21m0-12h6v12M3 21h18M7.5 8.25h3m-3 3h3m-3 3h3m6-1.5h.75m-.75 3h.75",
  "M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.7 5.7 2.1 2.1 5.7-5.7a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.1-2.1 2.2-2.2z",
  "M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z",
] as const;

/** Assembly & Installation — Types of Projects: split intro, 7 single-open accordions (all closed by default), one CTA. */
export function AssemblyServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className="bg-[#faf8f5] border-b border-[#0b1628]/[0.06]" aria-labelledby="assembly-services-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] gap-8 lg:gap-12 items-center">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
                Assembly &amp; Installation Services
              </p>
              <span className="h-px w-8 bg-tamay-accent/70" aria-hidden />
            </div>
            <h2
              id="assembly-services-heading"
              className="mt-4 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.2rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
            >
              Types of Assembly and Installation Projects We Handle
            </h2>
            <p className="mt-4 max-w-[34rem] text-[15px] sm:text-base text-[#0b1628]/80 leading-[1.7]">
              We handle a variety of assembly and installation work requested by retailers, logistics providers, and
              service platforms, with attention to detail, proper alignment, and client-ready results.
            </p>
          </div>

          <figure className="min-w-0 m-0">
            <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl ring-1 ring-[#0b1628]/[0.06] shadow-[0_12px_30px_rgba(11,22,40,0.10)]">
              <SitePhoto
                slot="assembly.cabinetInstall"
                alt={ASSEMBLY_CABINET_FEATURE.imageAlt}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <figcaption className="mt-2.5 text-[13px] text-[#0b1628]/65 leading-snug">
              {ASSEMBLY_CABINET_FEATURE.caption}
            </figcaption>
          </figure>
        </div>

        <ul className="mt-10 lg:mt-12 list-none m-0 p-0 space-y-2.5">
          {ASSEMBLY_SERVICE_GROUPS.map((group, index) => {
            const open = openIndex === index;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <li
                key={group.title}
                className={`overflow-hidden rounded-lg bg-white ring-1 transition-shadow ${
                  open ? "ring-tamay-accent/45 shadow-[0_8px_24px_rgba(11,22,40,0.06)]" : "ring-[#0b1628]/[0.08]"
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tamay-accent"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-tamay-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_PATHS[index]} />
                    </svg>
                    <span className="h-6 w-px shrink-0 bg-tamay-accent/35" aria-hidden />
                    <span className="flex-1 min-w-0 font-heading text-[15px] sm:text-base font-semibold leading-snug text-[#0b1628]">
                      {group.title}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-tamay-accent transition-transform duration-200 motion-reduce:transition-none ${
                        open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m6 9 6 6 6-6" />
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
                    <ul className="list-none m-0 border-t border-[#0b1628]/[0.06] bg-[#f7f4ef] px-4 sm:px-5 sm:pl-[4.25rem] py-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#0b1628]/80 leading-snug">
                          <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45 bg-tamay-accent" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 lg:mt-12 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="max-w-[40rem] font-heading text-[15px] sm:text-[17px] leading-snug text-[#0b1628] text-balance">
              {ASSEMBLY_IMPORTANT_NOTE}
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <div className="mt-6">
            <Button href={appointmentScheduleHref("assembly-installation")} variant="accent">
              Request Assembly Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
