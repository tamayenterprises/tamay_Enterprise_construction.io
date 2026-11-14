import { SitePhoto } from "@/components/images/SitePhoto";
import { SITE } from "@/lib/site";

/**
 * Assembly & Installation entry point to the external Small Project Estimator (SITE.estimateUrl).
 * The estimator app does not read a preselected project from the URL, so project selection
 * happens inside the estimator itself.
 */
export function AssemblyEstimatorSection() {
  return (
    <section
      id="assembly-estimator"
      className="relative isolate overflow-hidden bg-[#0b1628] scroll-mt-24"
      aria-labelledby="assembly-estimator-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{ background: "radial-gradient(ellipse 70% 55% at 75% 0%, rgba(201,162,39,0.10), transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-7">
        <div className="min-w-0 lg:col-start-2 lg:row-start-1 lg:self-end">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Quick Project Estimate
            </p>
            <span className="h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="assembly-estimator-heading"
            className="mt-4 font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.1rem] font-normal leading-[1.18] text-white text-balance"
          >
            Get a Starting Estimate for Assembly &amp; Installation
          </h2>
          <p className="mt-4 max-w-[34rem] text-[15px] sm:text-base text-white/80 leading-[1.7]">
            Choose a supported assembly or installation service to get a preliminary starting estimate before scheduling
            your project.
          </p>
        </div>

        <figure className="relative m-0 min-w-0 lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[420px] ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            <SitePhoto
              slot="assembly.whiteGloveVanity"
              alt="Tamay Enterprises technician assembling a vanity with LED mirror in a client home"
              className="object-cover object-[38%_55%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-2 -left-2 h-14 w-14 border-b-2 border-l-2 border-tamay-accent/60 rounded-bl-xl" aria-hidden />
        </figure>

        <div className="min-w-0 lg:col-start-2 lg:row-start-2 lg:self-start">
          <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-5 py-6 sm:px-7 sm:py-7">
            <div className="h-0.5 w-12 bg-tamay-accent" aria-hidden />
            <h3 className="mt-4 font-heading text-xl sm:text-[1.35rem] font-normal leading-snug text-white">
              Estimate Your Project
            </h3>
            <p className="mt-2 text-[14px] sm:text-[15px] text-white/75 leading-relaxed">
              Select an available assembly or installation service to get started.
            </p>

            <a
              href={SITE.estimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 min-h-12 px-6 font-bold text-[15px] tracking-wide text-[#141c2b] bg-tamay-accent transition-colors hover:bg-tamay-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              Start My Estimate
              <span aria-hidden className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5">
                →
              </span>
              <span className="sr-only">(opens the estimator in a new tab)</span>
            </a>

            <p className="mt-5 pt-4 border-t border-white/10 text-[12px] sm:text-[13px] text-white/60 leading-relaxed">
              Estimates are preliminary and may vary based on project conditions, access, materials, quantity, and final
              scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
