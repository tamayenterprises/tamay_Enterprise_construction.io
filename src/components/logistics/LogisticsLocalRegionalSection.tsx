import Image from "next/image";

const COMMUNITIES = [
  "West Haven",
  "New Haven",
  "Milford",
  "Orange",
  "Woodbridge",
  "Fairfield",
  "Trumbull",
  "Nearby Communities",
] as const;

/** Compact local trust band — replaces the old long service-area block. No CTA, no accordion. */
export function LogisticsLocalRegionalSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7f4ef] border-t border-[#0b1628]/[0.06]"
      aria-labelledby="logistics-local-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden md:block w-[48%] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.6)_55%,black_100%)]"
        aria-hidden
      >
        <Image
          src="/homepage/community-connecticut-town.webp"
          alt=""
          fill
          className="object-cover object-[70%_center] opacity-[0.22]"
          sizes="50vw"
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
            Local &amp; Regional
          </p>
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
        </div>

        <h2
          id="logistics-local-heading"
          className="mt-4 mx-auto max-w-[44rem] font-heading text-[1.5rem] sm:text-[1.9rem] lg:text-[2.2rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
        >
          <span className="sm:block">Based in West Haven.</span>{" "}
          <span className="sm:block">Built to Move Across Connecticut.</span>
        </h2>

        <p className="mt-3 sm:mt-4 mx-auto max-w-[40rem] text-balance text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7]">
          Tamay Logistics proudly serves West Haven and nearby communities throughout Connecticut.
        </p>

        <div className="mt-6 sm:mt-7">
          <ul className="list-none m-0 p-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
            {COMMUNITIES.map((community, index) => (
              <li key={community} className="flex items-center gap-2">
                {index === 0 ? (
                  <svg className="h-4 w-4 shrink-0 text-tamay-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <span className="text-tamay-accent text-[10px] leading-none" aria-hidden>
                    •
                  </span>
                )}
                <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0b1628] whitespace-nowrap">
                  {community}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
