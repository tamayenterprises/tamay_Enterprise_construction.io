const STEPS = [
  {
    number: "01",
    title: "Choose Your Service",
    body: "Select the type of assembly or installation support you need.",
    icon: "M9 5.25H7.5A2.25 2.25 0 0 0 5.25 7.5v11.25A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V7.5A2.25 2.25 0 0 0 16.5 5.25H15M9 5.25a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5M9 5.25a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5M9 13.5l2 2 4-4",
  },
  {
    number: "02",
    title: "Estimate or Consult",
    body: "Use the estimator for supported smaller projects, or speak with our team when the scope needs review.",
    icon: "M7.5 3h9A1.5 1.5 0 0 1 18 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5v-15A1.5 1.5 0 0 1 7.5 3zm.75 3h7.5v3h-7.5V6zm0 6h.01M12 12h.01m3.74 0h.01M8.25 15h.01M12 15h.01m3.74 0h.01M8.25 18h.01M12 18h.01m3.74 0h.01",
  },
  {
    number: "03",
    title: "Schedule the Work",
    body: "We coordinate timing, access, project details, and the appropriate team.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
  {
    number: "04",
    title: "We Assemble & Complete",
    body: "Our technicians perform the work, confirm completion, and leave the space organized and client-ready.",
    icon: "M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.7 5.7 2.1 2.1 5.7-5.7a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.1-2.1 2.2-2.2z",
  },
] as const;

/** Assembly & Installation — How It Works: 4-step process (vertical on mobile, 2 × 2 on tablet, 4-across on desktop). */
export function AssemblyHowItWorksSection() {
  return (
    <section className="bg-[#faf8f5] border-y border-[#0b1628]/[0.06]" aria-labelledby="assembly-process-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              How It Works
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="assembly-process-heading"
            className="mt-4 sm:mt-5 mx-auto max-w-[40rem] lg:max-w-[46rem] font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            Simple to Start. Organized Through Completion.
          </h2>
          <p className="mt-4 sm:mt-5 mx-auto max-w-[38rem] text-[15px] sm:text-base text-[#0b1628]/80 leading-[1.7]">
            Whether you need one installation or coordinated support across multiple projects, we keep the process clear
            from the first request through completion.
          </p>
        </div>

        <ol className="mt-10 lg:mt-12 list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 md:gap-y-9 md:gap-x-10 xl:gap-x-8">
          {STEPS.map((step, index) => {
            const last = index === STEPS.length - 1;
            return (
              <li key={step.number} className="relative flex xl:block items-start gap-4">
                {!last ? (
                  <>
                    <span
                      className="md:hidden absolute left-[22px] top-12 -bottom-6 w-px bg-tamay-accent/35"
                      aria-hidden
                    />
                    <span
                      className="hidden xl:block absolute top-[22px] left-14 -right-8 h-px bg-tamay-accent/35"
                      aria-hidden
                    />
                  </>
                ) : null}
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-tamay-accent/50 shadow-[0_4px_12px_rgba(11,22,40,0.06)]">
                  <svg className="h-5 w-5 text-tamay-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                  </svg>
                </span>
                <div className="min-w-0 xl:mt-5">
                  <p className="font-heading text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] text-tamay-accent">
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-heading text-[16px] sm:text-[17px] font-semibold leading-snug text-[#0b1628]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] sm:text-[15px] text-[#0b1628]/72 leading-relaxed">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
