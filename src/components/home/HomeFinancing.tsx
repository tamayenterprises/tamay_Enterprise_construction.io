import { SITE } from "@/lib/site";

const NAVY = "#0b1628";

const BENEFITS = [
  {
    title: "Explore Without Pressure",
    description: "Review available financing options before deciding how to move forward.",
    icon: "explore" as const,
  },
  {
    title: "Compare Lending Options",
    description: "See potential offers from participating lending partners.",
    icon: "compare" as const,
  },
  {
    title: "Flexible Payment Possibilities",
    description: "Find financing structures designed for different project sizes and qualifying profiles.",
    icon: "calendar" as const,
  },
] as const;

function BenefitIcon({ type }: { type: (typeof BENEFITS)[number]["icon"] }) {
  const className = "h-6 w-6 shrink-0 text-tamay-accent";
  if (type === "explore") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }
  if (type === "compare") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
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
        d="M8 7V3m8 4V3M4 11h16M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
      />
    </svg>
  );
}

/** Home financing intro — Acorn is the partner network; Tamay remains the primary brand. */
export function HomeFinancing() {
  return (
    <section
      id="financing"
      className="relative overflow-hidden bg-[#faf8f5]"
      aria-labelledby="home-financing-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tamay-accent/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full border border-[#0b1628]/[0.06]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.41fr)_minmax(0,0.59fr)] gap-7 lg:gap-10 items-center">
          {/* Navy message panel */}
          <div className="relative overflow-hidden rounded-2xl rounded-tr-[3rem] bg-[#0b1628] px-6 py-8 sm:px-8 sm:py-9">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background: "radial-gradient(80% 70% at 0% 0%, rgba(53,85,143,0.28) 0%, transparent 60%)",
              }}
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-tamay-accent/25"
              aria-hidden
            />

            <div className="relative">
              <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
                Financing Options
              </p>
              <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />

              <h2
                id="home-financing-heading"
                className="mt-4 font-heading text-[1.75rem] sm:text-[2.1rem] lg:text-[2.3rem] font-normal leading-[1.12] text-white"
              >
                <span className="block">Build Now.</span>
                <span className="block text-tamay-accent">Pay Over Time.</span>
              </h2>

              <p className="mt-4 text-[15px] text-white/80 leading-[1.7] max-w-[26rem]">
                Explore financing options through our lending partners and find a payment approach that may fit your
                project and budget.
              </p>

              <a
                href={SITE.financingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 min-h-12 px-7 font-semibold text-[15px] tracking-wide bg-tamay-accent text-[#0b1628] transition-colors hover:bg-tamay-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
              >
                Check Financing Options
                <span aria-hidden className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5">
                  →
                </span>
                <span className="sr-only">(opens our financing partner’s site in a new tab)</span>
              </a>
            </div>
          </div>

          {/* Benefits */}
          <ul className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <li
                key={benefit.title}
                className={`flex md:block gap-3.5 py-4 md:py-0 md:px-5 lg:px-6 ${
                  index > 0 ? "border-t border-[#0b1628]/10 md:border-t-0 md:border-l md:border-tamay-accent/40" : "pt-0"
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <BenefitIcon type={benefit.icon} />
                <div className="min-w-0 md:mt-3">
                  <h3
                    className="font-heading text-[13px] sm:text-sm font-semibold uppercase tracking-[0.06em] leading-snug"
                    style={{ color: NAVY }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-sm text-[#0b1628]/70 leading-relaxed">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclosure */}
        <div className="mt-7 lg:mt-9 flex items-start gap-2.5 rounded-lg bg-[#f1ede5] px-4 py-3">
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-tamay-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 16v-4m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[12px] sm:text-[13px] text-[#0b1628]/70 leading-relaxed">
            Financing options are provided through Tamay’s third-party financing partner network. Eligibility, rates,
            terms, and approvals are determined by participating lenders.
          </p>
        </div>
      </div>
    </section>
  );
}
