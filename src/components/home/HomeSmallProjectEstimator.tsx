import Link from "next/link";
import { appointmentScheduleHref } from "@/lib/onlineAppointments";
import { SITE } from "@/lib/site";

const NAVY = "#0b1628";

const MICRO_CATEGORIES = ["Small Repairs", "Assembly & Installation", "Individual Installations"] as const;

/**
 * Home entry point to the existing external Small Project Estimator (SITE.estimateUrl).
 * The estimator does not accept a preselected project type, so project selection
 * happens inside the estimator itself.
 */
export function HomeSmallProjectEstimator() {
  return (
    <section
      id="small-project-estimator"
      className="relative overflow-hidden bg-[#eef2f6]"
      aria-labelledby="home-small-estimator-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(11,22,40,0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,22,40,0.55) 1px, transparent 1px),
            linear-gradient(rgba(11,22,40,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,22,40,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px, 96px 96px, 24px 24px, 24px 24px",
          maskImage: "linear-gradient(90deg, black 0%, black 45%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(90deg, black 0%, black 45%, transparent 85%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] gap-8 lg:gap-12 items-center">
        {/* Left — explanation */}
        <div className="min-w-0">
          <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
            Small Project Estimator
          </p>
          <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />

          <h2
            id="home-small-estimator-heading"
            className="mt-3.5 font-heading text-[1.6rem] sm:text-[1.95rem] lg:text-[2.15rem] font-normal leading-[1.15] text-balance"
            style={{ color: NAVY }}
          >
            Need Help With a Small Home Project?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-[#0b1628]/80 leading-[1.7] max-w-[34rem]">
            Use our estimator for smaller repairs, assemblies, and individual installations — such as TV mounting,
            vanity installation, drywall patching, painting, faucet replacement, and lighting installation.
          </p>

          <ul className="mt-5 list-none m-0 p-0 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {MICRO_CATEGORIES.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: NAVY }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-tamay-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-l-2 border-tamay-accent/70 bg-[#f7f4ef] px-4 py-3 text-[13px] sm:text-sm text-[#0b1628]/80 leading-relaxed max-w-[34rem]">
            For full kitchen, bathroom, addition, or renovation projects, please{" "}
            <Link
              href={appointmentScheduleHref("construction")}
              className="font-semibold text-[#0b1628] underline decoration-tamay-accent/60 underline-offset-4 hover:decoration-tamay-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              schedule a consultation
            </Link>{" "}
            with our team.
          </p>
        </div>

        {/* Right — estimator entry card */}
        <div className="min-w-0">
          <div className="rounded-xl bg-white px-5 py-6 sm:px-7 sm:py-8 ring-1 ring-[#0b1628]/10 shadow-[0_14px_36px_rgba(11,22,40,0.08)]">
            <div className="h-0.5 w-12 bg-tamay-accent" aria-hidden />
            <h3 className="mt-4 font-heading text-xl sm:text-[1.4rem] font-normal leading-snug" style={{ color: NAVY }}>
              Try Our Small Project Estimator
            </h3>
            <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#0b1628]/75 leading-relaxed">
              Select a small repair, assembly, or individual installation to get a starting estimate.
            </p>

            <a
              href={SITE.estimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 min-h-12 px-6 font-semibold text-[15px] tracking-wide text-white bg-[#0b1628] border border-tamay-accent/70 transition-colors hover:bg-[#13213a] hover:border-tamay-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              Start My Estimate
              <span
                aria-hidden
                className="text-tamay-accent transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
              >
                →
              </span>
              <span className="sr-only">(opens the estimator in a new tab)</span>
            </a>

            <p className="mt-5 pt-4 border-t border-[#0b1628]/10 text-[12px] sm:text-[13px] text-[#0b1628]/65 leading-relaxed">
              Estimates are preliminary and intended for smaller projects only. Full renovations and larger
              construction projects require a consultation and project-specific review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
