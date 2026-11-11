import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Request",
    description: "Tell us what needs to move, where it needs to go, and any timing requirements.",
    icon: "clipboard" as const,
  },
  {
    number: "02",
    title: "Schedule",
    description: "We coordinate timing, access, responsibilities, and pickup/delivery details.",
    icon: "calendar" as const,
  },
  {
    number: "03",
    title: "Transport",
    description: "Our team handles the move with clear communication and organized execution.",
    icon: "truck" as const,
  },
  {
    number: "04",
    title: "Confirm",
    description: "We verify completion and make sure the delivery or logistics task is properly closed out.",
    icon: "package" as const,
  },
] as const;

function StepIcon({ type }: { type: (typeof STEPS)[number]["icon"] }) {
  const className = "h-5 w-5 text-tamay-accent";
  if (type === "clipboard") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9 4.5h6v2.5H9z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M15 5.5h2.5a1 1 0 011 1V20a1 1 0 01-1 1h-11a1 1 0 01-1-1V6.5a1 1 0 011-1H9"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M8.5 12l1.5 1.5 2.5-2.5M14 12.5h2M8.5 17h7.5" />
      </svg>
    );
  }
  if (type === "calendar") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" strokeWidth={1.4} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3.5 9.5h17M8 3v4M16 3v4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 12.5v3l2 1.25" />
      </svg>
    );
  }
  if (type === "truck") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M2.5 6h11v9h-11z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M13.5 9h4l3 3.2V15h-7" />
        <circle cx="6.5" cy="17" r="1.75" strokeWidth={1.4} />
        <circle cx="16.5" cy="17" r="1.75" strokeWidth={1.4} />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 3l8 4v6.5M12 3L4 7v10l8 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 7l8 4 8-4M12 11v10" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M15 18l1.75 1.75L20.5 16" />
    </svg>
  );
}

/** Logistics process — navy band, existing warehouse loading photo, four always-visible steps. No CTAs. */
export function LogisticsProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1628]" aria-labelledby="logistics-process-heading">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(70% 80% at 50% 0%, rgba(53,85,143,0.22) 0%, transparent 60%),
            linear-gradient(180deg, #0d1a30 0%, #0b1628 55%, #091321 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tamay-accent/50 to-transparent"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-11 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
                How We Work
              </p>
              <span className="h-px w-10 bg-tamay-accent/70" aria-hidden />
            </div>
            <h2
              id="logistics-process-heading"
              className="mt-4 font-heading text-[1.6rem] sm:text-[2.05rem] lg:text-[2.4rem] font-normal leading-[1.15] text-[#faf8f5]"
            >
              <span className="block">A Clear Process.</span>
              <span className="block">Better Logistics.</span>
            </h2>
            <p className="mt-4 sm:mt-5 max-w-[34rem] text-[15px] sm:text-base text-white/78 leading-[1.7]">
              From the first request to final delivery, we keep the process organized, communicated, and easy to follow.
            </p>
          </div>

          <figure className="relative aspect-[2/1] overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5">
            <Image
              src="/logistics/warehouse-fleet.png"
              alt="Tamay Enterprises team loading branded delivery vans at a warehouse dock"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </figure>
        </div>

        <ol className="mt-10 sm:mt-12 lg:mt-14 list-none m-0 p-0 grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 md:gap-y-9 lg:gap-x-6">
          {STEPS.map((step, index) => {
            const last = index === STEPS.length - 1;
            return (
              <li key={step.number} className="flex gap-4 lg:block min-w-0">
                <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-tamay-accent/45">
                    <StepIcon type={step.icon} />
                  </span>
                  {!last ? (
                    <span
                      className="mt-2 w-px flex-1 bg-tamay-accent/40 md:hidden lg:block lg:mt-0 lg:h-px lg:w-auto"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className={`min-w-0 ${last ? "" : "pb-7"} md:pb-0 lg:mt-4 lg:pr-2`}>
                  <p className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-tamay-accent">
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-heading text-[16px] sm:text-[17px] font-semibold uppercase tracking-[0.08em] text-[#faf8f5] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-sm text-white/70 leading-relaxed max-w-[22rem]">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
