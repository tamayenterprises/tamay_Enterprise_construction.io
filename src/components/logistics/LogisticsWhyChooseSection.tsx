const BENEFITS = [
  {
    title: "Professional Appearance",
    description: "A well-prepared team that respects your time, property, and materials.",
    icon: "truck" as const,
  },
  {
    title: "Communication-First Service",
    description: "Clear coordination and timely updates throughout the process.",
    icon: "chat" as const,
  },
  {
    title: "Problem-Solving Mindset",
    description: "A practical, solutions-oriented team that helps keep your project moving.",
    icon: "gear" as const,
  },
] as const;

function BenefitIcon({ type }: { type: (typeof BENEFITS)[number]["icon"] }) {
  const className = "h-6 w-6 sm:h-7 sm:w-7 text-tamay-accent";
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
  if (type === "chat") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M4 4.5h10a1 1 0 011 1v6a1 1 0 01-1 1H8.5l-3 2.5v-2.5H4a1 1 0 01-1-1v-6a1 1 0 011-1z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M15 8.5h5a1 1 0 011 1v6a1 1 0 01-1 1h-1.5V19l-3-2.5H11a1 1 0 01-1-1v-1"
        />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9.5 12.2l1.7 1.7 3.3-3.4" />
    </svg>
  );
}

/** Logistics navy trust band — three always-visible benefits, no photos, no CTAs. */
export function LogisticsWhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1628]" aria-labelledby="logistics-why-heading">
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
        <div className="flex items-center justify-center gap-3">
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent text-center">
            Why Tamay Logistics
          </p>
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
        </div>

        <h2
          id="logistics-why-heading"
          className="mt-4 font-heading text-[1.6rem] sm:text-[2.05rem] lg:text-[2.4rem] font-normal leading-[1.15] text-center text-[#faf8f5]"
        >
          <span className="block sm:inline">Reliable Service.</span>{" "}
          <span className="block sm:inline">Clear Communication.</span>
        </h2>

        <p className="mt-4 sm:mt-5 mx-auto max-w-[40rem] text-[15px] sm:text-base text-white/78 leading-[1.7] text-center">
          A professional and practical logistics team focused on your needs, your schedule, and a smooth, dependable
          experience from start to finish.
        </p>

        <ul className="mt-9 sm:mt-11 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.title}
              className={`min-w-0 text-center sm:px-4 lg:px-5 xl:px-8 ${
                index > 0
                  ? "mt-6 pt-6 border-t border-tamay-accent/20 sm:mt-0 sm:pt-0 sm:border-t-0 sm:border-l sm:border-tamay-accent/35"
                  : ""
              }`}
            >
              <div className="flex justify-center">
                <BenefitIcon type={benefit.icon} />
              </div>
              <h3 className="mt-3 font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white leading-snug">
                {benefit.title}
              </h3>
              <p className="mt-2 mx-auto max-w-[19rem] text-[13px] sm:text-sm text-white/70 leading-relaxed">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
