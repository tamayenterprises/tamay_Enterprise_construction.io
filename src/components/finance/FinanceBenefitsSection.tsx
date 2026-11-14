const BENEFITS = [
  {
    title: "Move Forward Sooner",
    description: "Explore options without waiting to cover the full project cost upfront.",
    icon: "forward" as const,
  },
  {
    title: "Flexible Payment Options",
    description: "Compare available terms and payment structures from participating lenders.",
    icon: "layers" as const,
  },
  {
    title: "Options for Different Project Sizes",
    description:
      "Financing may be available for qualifying repairs, improvements, remodels, and larger renovation projects.",
    icon: "home" as const,
  },
  {
    title: "Simple Online Process",
    description:
      "Review financing options through the partner network without turning the project process into something complicated.",
    icon: "laptop" as const,
  },
] as const;

function BenefitIcon({ type }: { type: (typeof BENEFITS)[number]["icon"] }) {
  const className = "h-5 w-5";
  if (type === "forward") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }
  if (type === "layers") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 5-9 5-9-5 9-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12.5l9 5 9-5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5l9 5 9-5" />
      </svg>
    );
  }
  if (type === "home") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
        />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="5" width="16" height="11" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 19h19M9.5 10.5l1.75 1.75L14.5 9" />
    </svg>
  );
}

/** Financing — why financing can help: centered intro + 4 light benefit points (no CTA, no photo). */
export function FinanceBenefitsSection() {
  return (
    <section className="bg-[#faf8f5]" aria-labelledby="finance-benefits-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Why Financing Can Help
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="finance-benefits-heading"
            className="mt-4 mx-auto max-w-[40rem] font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            More Flexibility for the Project You’re Planning.
          </h2>
          <p className="mt-3.5 mx-auto max-w-[38rem] text-[15px] sm:text-base text-[#0b1628]/75 leading-[1.7]">
            Financing can help qualified homeowners move forward with improvements while keeping project costs more
            manageable over time.
          </p>
        </div>

        <ul className="mt-9 sm:mt-11 list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-x-10 md:gap-y-9 xl:gap-x-0">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="flex gap-4 py-5 border-t border-[#0b1628]/[0.08] first:border-t-0 first:pt-0 last:pb-0 md:py-0 md:border-t-0 xl:flex-col xl:gap-4 xl:px-7 xl:border-l xl:border-[#0b1628]/[0.08] xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-tamay-accent ring-1 ring-tamay-accent/45 bg-tamay-accent/[0.08]">
                <BenefitIcon type={benefit.icon} />
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-[16px] sm:text-[17px] font-semibold leading-snug text-[#0b1628]">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-[14px] sm:text-[15px] text-[#0b1628]/72 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
