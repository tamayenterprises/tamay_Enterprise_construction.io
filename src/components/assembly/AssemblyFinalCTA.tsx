import Image from "next/image";
import Link from "next/link";
import { ASSEMBLY_SERVICE_IMAGES } from "@/lib/assemblyImages";
import { appointmentScheduleHref } from "@/lib/onlineAppointments";
import { SITE } from "@/lib/site";

const TRUST_ITEMS = [
  {
    title: "Professional Technicians",
    support: "Skilled, respectful, and prepared.",
    icon: "wrench" as const,
  },
  {
    title: "Clean & Organized Work",
    support: "Careful execution from setup to completion.",
    icon: "sparkle" as const,
  },
  {
    title: "Flexible Project Scale",
    support: "From individual installations to multi-unit work.",
    icon: "layers" as const,
  },
  {
    title: "Clear Coordination",
    support: "Organized scheduling, communication, and completion.",
    icon: "calendar" as const,
  },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-5 w-5";
  if (type === "wrench") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.7 6.3a4 4 0 015.2 5.2l-2.1-2.1-2.3.6-.6 2.3 2.1 2.1a4 4 0 01-5.2-5.2M13.8 10.2L4.6 19.4a1.4 1.4 0 01-2-2l9.2-9.2"
        />
      </svg>
    );
  }
  if (type === "sparkle") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"
        />
      </svg>
    );
  }
  if (type === "layers") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 5-9 5-9-5 9-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12.5l9 5 9-5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5l9 5 9-5" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3v4M16 3v4M3.5 10h17M9 15l2 2 4-4" />
    </svg>
  );
}

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const secondaryCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Assembly & Installation final CTA — same visual system as HomeFinalCTA / ConstructionFinalCTA / RealEstateFinalCTA. */
export function AssemblyFinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-center scroll-mt-24"
      aria-labelledby="assembly-final-cta-heading"
    >
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={ASSEMBLY_SERVICE_IMAGES.furnitureAssembly}
          alt=""
          fill
          className="object-cover object-[68%_center] lg:object-right"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(20,28,43,0.94) 0%, rgba(20,28,43,0.88) 28%, rgba(20,28,43,0.62) 48%, rgba(20,28,43,0.28) 68%, rgba(20,28,43,0.12) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 lg:hidden"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(20,28,43,0.72) 0%, rgba(20,28,43,0.82) 45%, rgba(20,28,43,0.9) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 xl:gap-12 lg:items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
                Ready When You Are
              </p>
              <span className="hidden sm:block h-px w-10 bg-[#c9a227]/70" aria-hidden />
            </div>

            <h2
              id="assembly-final-cta-heading"
              className="mt-4 font-heading text-[1.85rem] sm:text-3xl lg:text-[2.45rem] text-white font-semibold leading-[1.12] text-balance"
            >
              Ready to Get It
              <br className="hidden sm:block" /> Assembled Right?
            </h2>

            <p className="mt-4 text-sm sm:text-[15px] text-white/82 leading-relaxed max-w-md">
              Tell us what you need assembled or installed. We’ll help you estimate the work, coordinate the details,
              and schedule the right team.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a href={SITE.estimateUrl} target="_blank" rel="noopener noreferrer" className={primaryCtaClass}>
                Estimate My Project
                <span aria-hidden>→</span>
              </a>
              <Link href={appointmentScheduleHref("assembly-installation")} className={secondaryCtaClass}>
                Book an Assembly Consultation
              </Link>
            </div>
          </div>

          <aside
            className="lg:justify-self-end w-full max-w-md lg:max-w-sm"
            aria-label="Why clients trust Tamay Assembly & Installation"
          >
            <div
              className="rounded-2xl border border-white/15 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.28)] px-5 py-5 sm:px-6 sm:py-6"
              style={{ backgroundColor: "rgba(20,28,43,0.58)" }}
            >
              <ul className="list-none m-0 p-0 divide-y divide-white/12">
                {TRUST_ITEMS.map((item) => (
                  <li key={item.title} className="flex gap-3 py-3.5 first:pt-0 last:pb-0">
                    <span className="mt-0.5 shrink-0 text-[#c9a227]">
                      <TrustIcon type={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold text-white leading-snug">{item.title}</p>
                      <p className="mt-1 text-[13px] text-white/70 leading-snug">{item.support}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14 flex items-center justify-center gap-4">
          <span className="hidden sm:block h-px w-12 md:w-16 bg-[#c9a227]/55" aria-hidden />
          <p className="font-heading text-base sm:text-lg text-white/95 text-center leading-snug">
            From Our <span className="italic text-[#c9a227]">Family</span> to Yours.
          </p>
          <span className="hidden sm:block h-px w-12 md:w-16 bg-[#c9a227]/55" aria-hidden />
        </div>
      </div>
    </section>
  );
}
