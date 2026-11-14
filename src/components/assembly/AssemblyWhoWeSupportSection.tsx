const AUDIENCES = [
  {
    title: "Furniture Retailers & Logistics Partners",
    body: "Reliable assembly support for delivery-driven and scheduled installation programs.",
    icon: "truck" as const,
  },
  {
    title: "Service Platforms",
    body: "Structured execution for marketplace and platform-based assembly requests.",
    icon: "network" as const,
  },
  {
    title: "Property Managers & Multi-Unit Properties",
    body: "Organized support for apartment, condo, and recurring unit installation needs.",
    icon: "building" as const,
  },
  {
    title: "Short-Term Rentals & Furnished Apartments",
    body: "Assembly and setup support for occupied, furnished, and turnover environments.",
    icon: "bed" as const,
  },
  {
    title: "Real Estate Staging & Model Units",
    body: "Professional assembly for staging, furnished listings, and model properties.",
    icon: "chair" as const,
  },
] as const;

const ICON_PATHS: Record<(typeof AUDIENCES)[number]["icon"], string> = {
  truck:
    "M3 6.75h10.5v9H3v-9zm10.5 3h3.75L21 13.5v2.25h-7.5M6.75 18.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  network:
    "M12 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM5.25 21a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm13.5 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM12 7.5V12m0 0-5.25 4.5M12 12l5.25 4.5",
  building:
    "M4.5 21V4.5h9V21m0-12h6v12M3 21h18M7.5 8.25h3m-3 3h3m-3 3h3m6-1.5h.75m-.75 3h.75",
  bed: "M3 18V7.5m0 6h18V18m0-4.5V12a2.25 2.25 0 0 0-2.25-2.25h-7.5v3.75M7.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  chair:
    "M6 11V8.25A2.25 2.25 0 0 1 8.25 6h7.5A2.25 2.25 0 0 1 18 8.25V11M4.5 11.25a1.5 1.5 0 0 1 3 0v2.25h9v-2.25a1.5 1.5 0 0 1 3 0v5.25h-15v-5.25zM6 16.5V19m12-2.5V19",
};

/** Assembly & Installation — Who We Support: centered intro, 5 compact audience cards (3 + 2 on desktop). */
export function AssemblyWhoWeSupportSection() {
  return (
    <section
      className="bg-[#f7f4ef] border-y border-[#0b1628]/[0.06]"
      aria-labelledby="assembly-support-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Who We Support
            </p>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="assembly-support-heading"
            className="mt-4 sm:mt-5 mx-auto max-w-[40rem] lg:max-w-[48rem] font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            Built to Support Different Types of Projects.
          </h2>
          <p className="mt-4 sm:mt-5 mx-auto max-w-[38rem] text-[15px] sm:text-base text-[#0b1628]/80 leading-[1.7]">
            From individual installations to recurring multi-unit and partner-based work, our team adapts to the needs
            and scale of each project.
          </p>
        </div>

        <ul className="mt-9 sm:mt-10 lg:mt-12 list-none m-0 p-0 flex flex-wrap justify-center gap-4 lg:gap-5">
          {AUDIENCES.map((item) => (
            <li
              key={item.title}
              className="w-full md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)] flex gap-4 rounded-xl bg-white px-5 py-5 sm:px-6 ring-1 ring-[#0b1628]/[0.07] shadow-[0_8px_24px_rgba(11,22,40,0.05)]"
            >
              <svg
                className="mt-0.5 h-6 w-6 shrink-0 text-tamay-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_PATHS[item.icon]} />
              </svg>
              <span className="w-px shrink-0 self-stretch bg-tamay-accent/35" aria-hidden />
              <div className="min-w-0">
                <h3 className="font-heading text-[15px] sm:text-base font-semibold leading-snug text-[#0b1628]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-[#0b1628]/72 leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-9 sm:mt-10 lg:mt-12 mx-auto max-w-[44rem] text-center font-heading text-[15px] sm:text-lg leading-snug text-balance">
          <span className="text-[#0b1628]">Flexible across different environments.</span>{" "}
          <span className="text-tamay-accent">Consistent in how the work gets done.</span>
        </p>
      </div>
    </section>
  );
}
