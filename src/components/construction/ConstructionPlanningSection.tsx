"use client";

import { useId, useState } from "react";

const SERVICE_GROUPS = [
  {
    title: "Renovate a Space",
    items: ["Kitchens", "Bathrooms", "Basements", "Interior Remodeling"],
    icon: RenovateIcon,
  },
  {
    title: "Add or Build",
    items: ["Home Additions", "New Rooms", "Structural Improvements", "Decks / Outdoor Living"],
    icon: AddBuildIcon,
  },
  {
    title: "Repair or Upgrade",
    items: ["Drywall", "Flooring", "Doors & Windows", "Painting / Repairs"],
    icon: RepairIcon,
  },
  {
    title: "Improve Home Systems",
    items: ["Electrical", "Plumbing", "HVAC-related Work", "Installations"],
    icon: SystemsIcon,
  },
] as const;

function RenovateIcon() {
  return (
    <svg className="h-6 w-6 text-tamay-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M4 19V9l4-4h8l4 4v10M9 19v-6h6v6M12 9v3"
      />
    </svg>
  );
}

function AddBuildIcon() {
  return (
    <svg className="h-6 w-6 text-tamay-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M5 19V9l7-5 7 5v10M9 19v-4h6v4M12 7v6m-3-3h6"
      />
    </svg>
  );
}

function RepairIcon() {
  return (
    <svg className="h-6 w-6 text-tamay-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.7 5.7 2.1 2.1 5.7-5.7a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.1-2.1 2.2-2.2z"
      />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg className="h-6 w-6 text-tamay-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M18.4 5.6l-1.4 1.4M6.8 17.2l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
      />
    </svg>
  );
}

/**
 * Service-discovery section — single-open accordion of the four planning groups.
 */
export function ConstructionPlanningSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-[#faf8f5] border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl sm:text-3xl text-tamay-primary font-semibold leading-tight">
            What Are You Planning For Your Home?
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Start with what you want to change. We&apos;ll help you understand the right next step.
          </p>
        </div>

        <ul className="mt-7 md:mt-9 max-w-3xl list-none m-0 p-0 border-t border-gray-200/80">
          {SERVICE_GROUPS.map((group, index) => {
            const Icon = group.icon;
            const open = openIndex === index;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <li key={group.title} className="border-b border-gray-200/80">
                <h3 className="m-0">
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center gap-3 min-h-14 py-3.5 text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
                  >
                    <Icon />
                    <span
                      className={`flex-1 font-heading text-base sm:text-lg font-semibold leading-snug transition-colors ${
                        open ? "text-tamay-primary" : "text-tamay-primary/85"
                      }`}
                    >
                      {group.title}
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
                    <ul className="list-none m-0 pl-9 pr-1 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-tamay-accent/80" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
