"use client";

import { useId, useState } from "react";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { realEstateChatButtonClass } from "@/components/real-estate/realEstateCtaStyles";
import { SitePhoto } from "@/components/images/SitePhoto";
import { SiteText } from "@/components/copy/SiteText";

const AREAS = [
  {
    title: "Layout & Expansion Potential",
    question: "Could the layout work better for your future needs?",
    text: "We consider possibilities such as additional bedrooms, home offices, finished basements, additions, or more functional living space.",
  },
  {
    title: "Kitchen & Bathroom Potential",
    question: "What could be improved later?",
    text: "We help you look beyond dated finishes and think about whether kitchens, bathrooms, and living areas could realistically be transformed.",
  },
  {
    title: "Major Home Systems",
    question: "What may require attention over time?",
    text: "Roofing, HVAC, plumbing, electrical systems, windows, siding, and other major components all have a lifecycle.",
  },
  {
    title: "Basement & Unused Space",
    question: "Is there value hiding in space you’re not using yet?",
    text: "A basement, attic, garage, or underused room may offer possibilities for future living space, storage, recreation, or workspace.",
  },
  {
    title: "Exterior & Property Potential",
    question: "The opportunity may extend beyond the walls.",
    text: "Decks, patios, driveways, entrances, exterior improvements, and outdoor living can also influence how the property works for you long term.",
  },
  {
    title: "Future Cost Awareness",
    question: "The purchase price is only part of homeownership.",
    text: "We help clients think about future improvements, maintenance, and potential renovation priorities before those decisions become urgent.",
  },
];

export function BuildersEyesSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <SiteText k="realEstate.builders.title" as="h2" className="font-heading text-2xl sm:text-3xl lg:text-4xl text-tamay-primary font-semibold leading-tight">
            See the Property Through a Builder’s Eyes
          </SiteText>
          <SiteText k="realEstate.builders.body" as="p" className="mt-4 text-gray-600 leading-relaxed" multiline>
            When we look at a property, we don’t only see finishes, square footage, and curb appeal. We also think about how the home is built, how its major systems may age, what can realistically be changed, and where future opportunities may exist.
          </SiteText>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 items-center">
          <figure className="relative m-0 w-full aspect-[1672/941] bg-[#f4f1ea]">
            <SitePhoto
              slot="realEstate.approvedBuildersEyes"
              alt="Builder-informed view of a property with callouts for layout, kitchen and bath, systems, basement, exterior, and future costs"
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 640px"
            />
          </figure>

          <ul className="list-none m-0 p-0 border-t border-gray-200">
            {AREAS.map((area, index) => {
              const open = openIndex === index;
              const triggerId = `${baseId}-trigger-${index}`;
              const panelId = `${baseId}-panel-${index}`;
              return (
                <li key={area.title} className="border-b border-gray-200">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className={`flex w-full items-center gap-3 min-h-14 py-3.5 pl-4 pr-1 text-left border-l-2 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent ${
                        open ? "border-tamay-accent bg-white" : "border-transparent"
                      }`}
                    >
                      <span className="w-5 shrink-0 font-heading text-xs font-bold tracking-widest text-tamay-accent" aria-hidden>
                        {index + 1}
                      </span>
                      <SiteText
                        k={`realEstate.builders.item${index + 1}.title`}
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
                      <div
                        className={`pl-12 pr-6 pb-4 border-l-2 ${open ? "border-tamay-accent bg-white" : "border-transparent"}`}
                      >
                        <SiteText
                          k={`realEstate.builders.item${index + 1}.question`}
                          as="p"
                          className="text-sm font-semibold text-gray-800"
                        >
                          {area.question}
                        </SiteText>
                        <SiteText
                          k={`realEstate.builders.item${index + 1}.text`}
                          as="p"
                          className="mt-1.5 text-sm text-gray-600 leading-relaxed"
                          multiline
                        >
                          {area.text}
                        </SiteText>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <SiteText k="realEstate.builders.disclaimer" as="p" className="mt-8 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-3xl" multiline>
          Construction insight is not a substitute for a licensed home inspection. We encourage clients to obtain all appropriate professional inspections and evaluations before purchasing a property.
        </SiteText>

        <div className="mt-6">
          <OpenLiveChatButton className={realEstateChatButtonClass}>
            <SiteText k="realEstate.builders.chat">Talk to a Real Estate Advisor</SiteText>
          </OpenLiveChatButton>
        </div>
      </div>
    </section>
  );
}
