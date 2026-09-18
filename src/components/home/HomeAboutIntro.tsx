/**
 * Compact editorial About intro — sits directly below Home Hero.
 * Text-only: no icons, cards, photos, or CTAs.
 */
export function HomeAboutIntro() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f4ef]"
      aria-labelledby="home-about-intro-heading"
    >
      {/* Extremely faint geometric lines — left side only */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(11,22,40,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,22,40,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(115deg, black 0%, black 35%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(115deg, black 0%, black 35%, transparent 70%)",
        }}
      />

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
          className="mt-4 sm:mt-5 font-heading text-[1.65rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.15] tracking-normal text-center text-balance"
        >
          <span className="text-[#0b1628]">One Trusted Team.</span>{" "}
          <span className="text-tamay-accent">Multiple Service Areas.</span>
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
