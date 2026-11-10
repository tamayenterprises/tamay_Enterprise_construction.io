"use client";

import { useId, useState } from "react";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { realEstateChatButtonClass } from "@/components/real-estate/realEstateCtaStyles";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";

const SCENARIOS = [
  {
    title: "First-Time Buyers",
    message: "Buying your first home is also planning for what comes next.",
    today: ["2 bedrooms", "a simple kitchen", "enough space for two"],
    tomorrow: [
      "another bedroom",
      "nursery",
      "home office",
      "more storage",
      "larger kitchen",
      "outdoor space",
    ],
    support:
      "We help you ask whether the property can grow with you — not just whether it fits today.",
  },
  {
    title: "Growing Families",
    message: "Your home should be able to evolve with your family.",
    consider: [
      "future bedrooms",
      "finished basement potential",
      "play space",
      "home office",
      "larger gathering areas",
      "storage",
      "safer or more functional layouts",
    ],
    support:
      "Sometimes the right property is not the one with everything finished today, but the one with the right structure and potential for tomorrow.",
  },
  {
    title: "Investors",
    message: "A property should be evaluated for more than appearance.",
    consider: [
      "renovation potential",
      "layout efficiency",
      "future maintenance",
      "value-add opportunities",
      "rental functionality",
      "systems that may require investment",
      "how improvements may affect long-term positioning",
    ],
    support:
      "The goal is to understand not only what the property costs today, but what it may require and what opportunity it may hold.",
  },
];

const listItemClass =
  "relative pl-3.5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-tamay-accent/80";

export function PlanForTomorrowSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-10 gap-y-7">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <SiteText k="realEstate.tomorrow.title" as="h2" className="font-heading text-2xl sm:text-3xl lg:text-4xl text-tamay-primary font-semibold leading-tight">
              Buy for Today. Plan for Tomorrow.
            </SiteText>
            <SiteText k="realEstate.tomorrow.body" as="p" className="mt-4 text-gray-600 leading-relaxed" multiline>
              The right home should work for your life today — and still make sense as your needs change. We help you think beyond the immediate purchase and consider how the property may support your plans over the next five, ten, or even fifteen years.
            </SiteText>
          </div>

          <figure className="relative m-0 aspect-[4/3] overflow-hidden bg-gray-100 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
            <SitePhoto
              slot="realEstate.approvedPlanTomorrow"
              alt="Today to tomorrow storytelling for first-time buyers, growing families, and investors"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>

          <div className="min-w-0 lg:col-start-1 lg:row-start-2">
            <ul className="list-none m-0 p-0 border-t border-gray-200">
              {SCENARIOS.map((scenario, index) => {
                const open = openIndex === index;
                const triggerId = `${baseId}-trigger-${index}`;
                const panelId = `${baseId}-panel-${index}`;
                return (
                  <li key={scenario.title} className="border-b border-gray-200">
                    <h3 className="m-0">
                      <button
                        type="button"
                        id={triggerId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className={`flex w-full items-center gap-3 min-h-14 py-3.5 pl-4 pr-1 text-left border-l-2 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent ${
                          open ? "border-tamay-accent bg-gray-50" : "border-transparent"
                        }`}
                      >
                        <SiteText
                          k={`realEstate.tomorrow.item${index + 1}.title`}
                          className="flex-1 font-heading text-lg sm:text-xl text-tamay-primary font-semibold leading-snug"
                        >
                          {scenario.title}
                        </SiteText>
                        <svg
                          className={`h-4 w-4 shrink-0 text-tamay-accent transition-transform duration-200 motion-reduce:transition-none ${
                            open ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
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
                        <div className={`pl-4 pr-4 pb-5 border-l-2 ${open ? "border-tamay-accent bg-gray-50" : "border-transparent"}`}>
                          <p className="text-xs font-bold tracking-widest uppercase text-tamay-accent">
                            <SiteText k={`realEstate.tomorrow.item${index + 1}.ribbon`}>Today → Tomorrow</SiteText>
                          </p>
                          <SiteText k={`realEstate.tomorrow.item${index + 1}.message`} as="p" className="mt-2 text-sm font-semibold text-gray-800">
                            {scenario.message}
                          </SiteText>
                          {"today" in scenario && scenario.today ? (
                            <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <SiteText k={`realEstate.tomorrow.item${index + 1}.todayLabel`} as="p" className="font-bold text-tamay-primary mb-1.5">
                                  Today
                                </SiteText>
                                <ul className="space-y-1 text-gray-600 list-none p-0 m-0">
                                  {scenario.today.map((item, itemIndex) => (
                                    <SiteText
                                      k={`realEstate.tomorrow.item${index + 1}.today${itemIndex + 1}`}
                                      as="li"
                                      key={`${index}-today-${itemIndex}`}
                                      className={listItemClass}
                                    >
                                      {item}
                                    </SiteText>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <SiteText k={`realEstate.tomorrow.item${index + 1}.tomorrowLabel`} as="p" className="font-bold text-tamay-primary mb-1.5">
                                  Tomorrow
                                </SiteText>
                                <ul className="space-y-1 text-gray-600 list-none p-0 m-0">
                                  {scenario.tomorrow?.map((item, itemIndex) => (
                                    <SiteText
                                      k={`realEstate.tomorrow.item${index + 1}.tomorrow${itemIndex + 1}`}
                                      as="li"
                                      key={`${index}-tomorrow-${itemIndex}`}
                                      className={listItemClass}
                                    >
                                      {item}
                                    </SiteText>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ) : (
                            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-600 list-none p-0 m-0">
                              {scenario.consider?.map((item, itemIndex) => (
                                <SiteText
                                  k={`realEstate.tomorrow.item${index + 1}.consider${itemIndex + 1}`}
                                  as="li"
                                  key={`${index}-consider-${itemIndex}`}
                                  className={listItemClass}
                                >
                                  {item}
                                </SiteText>
                              ))}
                            </ul>
                          )}
                          <SiteText k={`realEstate.tomorrow.item${index + 1}.support`} as="p" className="mt-3 text-sm text-gray-600 leading-relaxed" multiline>
                            {scenario.support}
                          </SiteText>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <OpenLiveChatButton className={realEstateChatButtonClass}>
            <SiteText k="realEstate.tomorrow.chat">Tell Us What You’re Planning For</SiteText>
          </OpenLiveChatButton>
        </div>
      </div>
    </section>
  );
}
