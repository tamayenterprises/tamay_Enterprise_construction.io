/**
 * Compact editorial About intro — sits directly below Home Hero.
 * Text-only: no icons, cards, photos, or CTAs.
 */
export function HomeAboutIntro() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-[#f7f4ef]"
      aria-labelledby="home-about-intro-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tamay-accent/45 to-transparent"
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[min(1100px,140%)] h-auto text-[#0b1628] opacity-[0.045]"
        viewBox="0 0 1100 260"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M0 250h1100" />
        <path d="M90 250V150l110-80 110 80v100" />
        <path d="M170 250v-60h60v60" />
        <path d="M380 250V120l170-100 170 100v130" />
        <path d="M470 250V170h160v80" />
        <path d="M550 20v-10" />
        <path d="M790 250V160l110-75 110 75v90" />
        <path d="M870 250v-55h60v55" />
      </svg>

      <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="flex items-center justify-center gap-3">
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent text-center">
            About Tamay Enterprises
          </p>
          <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
        </div>

        <h2
          id="home-about-intro-heading"
          className="mt-4 sm:mt-5 font-heading text-[1.65rem] sm:text-[2.1rem] lg:text-[2.5rem] font-normal leading-[1.15] tracking-normal text-center"
        >
          <span className="block text-[#0b1628]">One Trusted Team.</span>
          <span className="block text-tamay-accent">Multiple Service Areas.</span>
        </h2>

        <p className="mt-5 sm:mt-6 mx-auto max-w-[42rem] lg:max-w-[46rem] text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7] text-center">
          Tamay Enterprises is a West Haven, CT–based multi-service company providing construction and home renovation
          services, real estate solutions, and local logistics support. We help homeowners, property owners, businesses,
          and investors simplify their needs by working with one trusted team across multiple service areas, serving West
          Haven and nearby Connecticut communities.
        </p>
      </div>
    </section>
  );
}
