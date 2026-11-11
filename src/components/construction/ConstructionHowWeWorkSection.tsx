import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Consult & Understand",
    description: "We learn about your goals, priorities, space, budget, and what you want the project to accomplish.",
    icon: "consult" as const,
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "We develop the direction, define scope, coordinate selections, and prepare the project before work begins.",
    icon: "plan" as const,
  },
  {
    number: "03",
    title: "Supply & Prepare",
    description:
      "Materials, scheduling, site preparation, logistics, and project coordination are organized before construction moves forward.",
    icon: "supply" as const,
  },
  {
    number: "04",
    title: "Build & Coordinate",
    description: "Tamay manages the work, communication, quality checks, and coordination throughout construction.",
    icon: "build" as const,
  },
  {
    number: "05",
    title: "Complete & Support",
    description: "Final walkthrough, project completion, closeout, and continued support after the work is finished.",
    icon: "complete" as const,
  },
] as const;

function StepIcon({ type }: { type: (typeof STEPS)[number]["icon"] }) {
  const className = "h-5 w-5 text-tamay-accent";
  if (type === "consult") {
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
  if (type === "plan") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 20V5.5A1.5 1.5 0 015.5 4H15" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 20h14.5a1.5 1.5 0 001.5-1.5V11" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M8 16v-4h4v4M8 12l2-2 2 2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M14.5 10.5l5-5a1.4 1.4 0 012 2l-5 5-2.5.5.5-2.5z" />
      </svg>
    );
  }
  if (type === "supply") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3.5 12.5h7.5V20H3.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M13 12.5h7.5V20H13z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M8.25 5h7.5v7.5h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M6.5 12.5v2.5M16 12.5v2.5M11.25 5v2.5" />
      </svg>
    );
  }
  if (type === "build") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M2.5 18.5h19" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.5 18.5V14a7.5 7.5 0 0115 0v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M10 4.8V11M14 4.8V11" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M10 4.8h4" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M3.5 10.5L12 3.5l8.5 7V20a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9.5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M8.75 14.25l2.25 2.25 4.25-4.5" />
    </svg>
  );
}

const TABLET_POSITION = ["", "", "", "md:col-start-2", "md:col-start-4"] as const;

/** Unified Construction process — replaces “How We Bring It Together” + “What to Expect”. No CTA, no accordion. */
export function ConstructionHowWeWorkSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7f4ef] border-y border-[#0b1628]/[0.06]"
      aria-labelledby="construction-how-we-work-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10 hidden lg:block h-[340px] w-[46%] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.6)_45%,black_100%),linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
        aria-hidden
      >
        <Image
          src="/construction/one-team-blueprint-transition.png"
          alt=""
          fill
          className="object-cover object-right opacity-[0.16]"
          sizes="46vw"
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              How We Work
            </p>
            <span className="h-px w-10 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="construction-how-we-work-heading"
            className="mt-4 font-heading text-[1.6rem] sm:text-[2.05rem] lg:text-[2.4rem] font-normal leading-[1.15] text-[#0b1628]"
          >
            <span className="block">One Clear Process.</span>
            <span className="block">One Coordinated Team.</span>
          </h2>
          <p className="mt-4 sm:mt-5 max-w-[36rem] text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7]">
            From the first conversation to long-term support, we design, plan, supply, build, and maintain with a clear
            process that keeps your project organized, on schedule, and built to last.
          </p>
        </div>

        <ol className="mt-10 sm:mt-12 lg:mt-14 list-none m-0 p-0 grid md:grid-cols-6 xl:grid-cols-5 md:gap-x-8 md:gap-y-10 xl:gap-x-6">
          {STEPS.map((step, index) => {
            const last = index === STEPS.length - 1;
            return (
              <li
                key={step.number}
                className={`flex gap-4 md:block min-w-0 md:col-span-2 xl:col-span-1 xl:col-start-auto ${TABLET_POSITION[index]}`}
              >
                <div className="flex flex-col items-center md:flex-row md:items-center md:gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-tamay-accent/45 bg-white/70">
                    <StepIcon type={step.icon} />
                  </span>
                  {!last ? (
                    <span
                      className="mt-2 w-px flex-1 bg-tamay-accent/40 md:hidden xl:block xl:mt-0 xl:h-px xl:w-auto"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className={`min-w-0 ${last ? "" : "pb-7"} md:pb-0 md:mt-4 xl:pr-2`}>
                  <p className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-tamay-accent">
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-heading text-[16px] font-semibold text-[#0b1628] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-sm text-[#0b1628]/72 leading-relaxed">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
