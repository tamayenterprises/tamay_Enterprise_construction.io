"use client";

import { useId, useState } from "react";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";

const AREAS = [
  {
    title: "Can This Home Grow With You?",
    text: "Think beyond today — future bedrooms, a home office, a finished basement, an addition, or changing family needs.",
  },
  {
    title: "What Will It Need Over Time?",
    text: "Roofing, HVAC, plumbing, electrical, windows, siding, and other major systems all have a lifecycle. We help you think about what ownership may look like beyond closing day.",
  },
  {
    title: "Can Your Renovation Ideas Work Here?",
    text: "Open kitchen? Larger bathroom? Additional bedroom? Finished basement? We help you think realistically about whether the property can support the changes you may want later.",
  },
  {
    title: "What Happens After Closing?",
    text: "Our relationship does not have to end when you get the keys. Tamay can help with construction improvements, repairs, and preventive home services as your property evolves.",
  },
];

export function TamayDifferenceSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <figure className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <SitePhoto
              slot="realEstate.approvedDifference"
              alt="A family evaluating a property with visual layers for growth, systems, renovation possibilities, and long-term ownership planning"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
          <div>
            <SiteText k="realEstate.difference.title" as="h2" className="font-heading text-2xl sm:text-3xl lg:text-4xl text-tamay-primary font-semibold leading-tight">
              We Help You Look Beyond the Listing
            </SiteText>
            <SiteText k="realEstate.difference.body" as="p" className="mt-4 text-gray-600 leading-relaxed" multiline>
              A home is more than its price, finishes, and number of bedrooms. We help you think about how the property fits your life today, what it may require over time, and what opportunities it may offer in the future.
            </SiteText>
            <ul className="mt-7 list-none m-0 p-0 border-t border-gray-200/80">
              {AREAS.map((area, index) => {
                const open = openIndex === index;
                const triggerId = `${baseId}-trigger-${index}`;
                const panelId = `${baseId}-panel-${index}`;
                return (
                  <li key={area.title} className="border-b border-gray-200/80">
                    <h3 className="m-0">
                      <button
                        type="button"
                        id={triggerId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className={`flex w-full items-center gap-3 min-h-14 py-3.5 pl-4 text-left border-l-2 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent ${
                          open ? "border-tamay-accent" : "border-transparent"
                        }`}
                      >
                        <SiteText
                          k={`realEstate.difference.item${index + 1}.title`}
                          className="flex-1 font-heading text-base sm:text-lg text-tamay-primary font-semibold leading-snug"
                        >
                          {area.title}
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
                        <SiteText
                          k={`realEstate.difference.item${index + 1}.text`}
                          as="p"
                          className={`pl-4 pr-6 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed border-l-2 ${
                            open ? "border-tamay-accent" : "border-transparent"
                          }`}
                          multiline
                        >
                          {area.text}
                        </SiteText>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
