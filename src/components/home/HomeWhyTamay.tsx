const BENEFITS = [
  {
    title: "One Point of Contact",
    description: "Less back-and-forth between different providers.",
    icon: "contact" as const,
  },
  {
    title: "Coordinated Services",
    description: "Real Estate, Construction, and Logistics can work together when the project calls for it.",
    icon: "layers" as const,
  },
  {
    title: "Local Knowledge",
    description: "Based in West Haven and serving nearby Connecticut communities.",
    icon: "pin" as const,
  },
  {
    title: "Long-Term Support",
    description: "A team you can return to as your property needs change.",
    icon: "support" as const,
  },
] as const;

function BenefitIcon({ type }: { type: (typeof BENEFITS)[number]["icon"] }) {
  const className = "h-6 w-6 text-tamay-accent";
  if (type === "contact") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.5 20a7.5 7.5 0 0115 0" />
      </svg>
    );
  }
  if (type === "layers") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 3l9 5-9 5-9-5 9-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 12.5l9 5 9-5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 16.5l9 5 9-5" />
      </svg>
    );
  }
  if (type === "pin") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M5 11.5L12 6l7 5.5V19a1 1 0 01-1 1H6a1 1 0 01-1-1v-7.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M14.5 14a2.5 2.5 0 11-1-2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M13.5 10.5V12h1.5" />
    </svg>
  );
}

/** Home trust band — why work with Tamay. No photos, no CTAs. */
export function HomeWhyTamay() {
  return (
    <section
      id="why-tamay"
      className="relative overflow-hidden bg-[#0b1628]"
      aria-labelledby="home-why-tamay-heading"
    >
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
      <div
        className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full border border-tamay-accent/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-tamay-accent/10"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-11 sm:py-14 lg:py-16">
        <div className="flex items-center justify-center gap-3">
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent text-center">
            Why Tamay
          </p>
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
        </div>

        <h2
          id="home-why-tamay-heading"
          className="mt-4 font-heading text-[1.65rem] sm:text-[2.05rem] lg:text-[2.4rem] font-normal leading-[1.15] text-center text-white"
        >
          <span className="block sm:inline">Different Needs.</span>{" "}
          <span className="block sm:inline text-tamay-accent">One Trusted Team.</span>
        </h2>

        <p className="mt-4 sm:mt-5 mx-auto max-w-[42rem] text-[15px] sm:text-base text-white/78 leading-[1.7] text-center">
          Whether you’re improving a home, evaluating a property, or coordinating the logistics around a project, Tamay
          Enterprises brings multiple service areas together under one relationship.
        </p>

        <ul className="mt-9 sm:mt-11 list-none m-0 p-0 grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-8 lg:gap-x-0">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.title}
              className={`min-w-0 text-center lg:px-6 ${
                index >= 2 ? "mt-6 pt-6 border-t border-tamay-accent/20 lg:mt-0 lg:pt-0 lg:border-t-0" : ""
              } ${index > 0 ? "lg:border-l lg:border-tamay-accent/35" : ""}`}
            >
              <div className="flex justify-center">
                <BenefitIcon type={benefit.icon} />
              </div>
              <h3 className="mt-3 font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white leading-snug">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[13px] sm:text-sm text-white/70 leading-relaxed">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
