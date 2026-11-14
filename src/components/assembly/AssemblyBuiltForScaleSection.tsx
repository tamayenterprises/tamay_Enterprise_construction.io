import { SitePhoto } from "@/components/images/SitePhoto";

const PROOF_POINTS = [
  {
    title: "Multiple Technicians",
    body: "The right team can be coordinated based on project size and workload.",
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z",
  },
  {
    title: "Parallel Execution",
    body: "Multiple installations or units can move forward in an organized sequence.",
    icon: "M3.75 6.75h12m0 0-3-3m3 3-3 3M3.75 12h12m0 0-3-3m3 3-3 3M3.75 17.25h12m0 0-3-3m3 3-3 3M20.25 4.5v15",
  },
  {
    title: "Structured Scheduling",
    body: "Clear coordination helps keep access, timing, and responsibilities organized.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
  {
    title: "Consistent Standards",
    body: "The same expectations for workmanship, communication, documentation, and completion apply across every job.",
    icon: "M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3zm-3 9l2 2 4-4",
  },
] as const;

/** Assembly & Installation — Built for Scale: image + intro + 2 × 2 proof points (trust only, no CTA). */
export function AssemblyBuiltForScaleSection() {
  return (
    <section className="bg-[#faf8f5] border-b border-[#0b1628]/[0.06]" aria-labelledby="assembly-scale-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-8 lg:gap-12 items-center">
        <figure className="m-0 min-w-0">
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] ring-1 ring-[#0b1628]/[0.06] shadow-[0_12px_30px_rgba(11,22,40,0.10)]">
            <SitePhoto
              slot="assembly.flatPackAssembly"
              alt="Technicians assembling flat-pack furniture in a furnished apartment"
              className="object-cover object-[60%_45%]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </figure>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Built for Scale
            </p>
            <span className="h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="assembly-scale-heading"
            className="mt-4 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.2rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            One Project or Many. Same Standard.
          </h2>
          <p className="mt-4 max-w-[36rem] text-[15px] sm:text-base text-[#0b1628]/80 leading-[1.7]">
            Our team can coordinate individual installations, recurring service needs, and multi-unit projects with
            consistent scheduling, communication, and quality control.
          </p>

          <ul className="mt-7 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {PROOF_POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-3.5 border-t border-[#0b1628]/10 pt-4">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-tamay-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={point.icon} />
                </svg>
                <div className="min-w-0">
                  <h3 className="font-heading text-[15px] sm:text-base font-semibold leading-snug text-[#0b1628]">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#0b1628]/72 leading-relaxed">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
