import Image from "next/image";
import Link from "next/link";
import { appointmentScheduleHref } from "@/lib/onlineAppointments";
import { SITE } from "@/lib/site";

const HERO_IMAGE_SRC = "/construction/project-cost-estimator.png";

const TRUST_ITEMS = [
  {
    title: "Professional Technicians",
    support: "Skilled, respectful, and prepared.",
    icon: "hardHat" as const,
  },
  {
    title: "Clean & Organized Work",
    support: "Careful execution from setup to completion.",
    icon: "shieldCheck" as const,
  },
  {
    title: "Single Projects to Multi-Unit Work",
    support: "Support for individual installations and larger coordinated jobs.",
    icon: "boxes" as const,
  },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-tamay-accent";
  if (type === "hardHat") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 18h18M5 18v-3a7 7 0 0 1 14 0v3M10 8.3V6h4v2.3M12 8v5"
        />
      </svg>
    );
  }
  if (type === "shieldCheck") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3zm-3 9l2 2 4-4"
        />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 13.5h7.5V21H3.5v-7.5zm9.5 0h7.5V21H13v-7.5zM8.25 3h7.5v7.5h-7.5V3z"
      />
    </svg>
  );
}

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const secondaryCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Assembly & Installation Hero — same navy/gold split system as the Logistics and Construction heroes. */
export function AssemblyHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#141c2b] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:flex [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:items-center [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:min-h-[clamp(460px,calc(100svh-81px),680px)]"
      aria-labelledby="assembly-hero-heading"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-10 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:static [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:py-10 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:py-12">
        <div className="absolute z-10 top-6 sm:top-8 inset-x-4 sm:inset-x-6 flex items-center gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden">
          <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
            Assembly &amp; Installation
          </p>
          <span className="h-px w-10 bg-[#c9a227]/70" aria-hidden />
        </div>

        <div
          className="relative -z-10 -mx-4 sm:-mx-6 h-[min(115vw,29rem)] sm:h-[34rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:absolute [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:inset-y-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:right-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:m-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:h-full [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:aspect-[3/2] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:w-auto [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[62%] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[57%] [@media(min-width:80rem)_and_(min-aspect-ratio:1/1)]:max-w-[64%] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.3)_22%,black_50%)]"
          aria-hidden
        >
          <Image
            src={HERO_IMAGE_SRC}
            alt=""
            fill
            className="object-cover object-[65%_40%] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:object-[72%_40%]"
            sizes="(max-width: 768px) 100vw, 64vw"
            priority
          />
          <div
            className="absolute inset-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden"
            style={{
              background: [
                "linear-gradient(180deg, #141c2b 0%, rgba(20,28,43,0.6) 9%, rgba(20,28,43,0) 24%, rgba(20,28,43,0) 54%, rgba(20,28,43,0.55) 70%, rgba(20,28,43,0.9) 85%, #141c2b 97%)",
                "linear-gradient(90deg, rgba(20,28,43,0.45) 0%, rgba(20,28,43,0) 18%, rgba(20,28,43,0) 82%, rgba(20,28,43,0.45) 100%)",
              ].join(", "),
            }}
          />
          <div
            className="absolute inset-0 hidden [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:block"
            style={{
              background: "linear-gradient(0deg, rgba(20,28,43,0.35) 0%, rgba(20,28,43,0) 30%)",
            }}
          />
        </div>

        <div className="relative -mt-[6.25rem] sm:-mt-[8rem] max-w-xl [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[27rem] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[31rem]">
          <div className="hidden items-center gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:flex">
            <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
              Assembly &amp; Installation
            </p>
            <span className="h-px w-10 bg-[#c9a227]/70" aria-hidden />
          </div>

          <h1
            id="assembly-hero-heading"
            className="font-heading text-[1.9rem] sm:text-[2.3rem] lg:text-[2.5rem] text-white font-semibold leading-[1.1] [text-shadow:0_2px_18px_rgba(20,28,43,0.55)] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:text-[2.1rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:[text-shadow:none] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-4 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:text-[2.5rem]"
          >
            Professional <br className="sm:hidden" />
            Assembly.
            <br />
            <span className="text-[#c9a227]">Done Right.</span>
          </h1>

          <p className="mt-3 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-4 text-sm sm:text-[15px] text-white/85 leading-relaxed max-w-md [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:text-sm [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:text-[15px]">
            Furniture, storage systems, office setups, wall-mounted installations, and multi-unit projects — assembled
            with precision, care, and professional execution.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-5 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-6">
            <a
              href={SITE.estimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryCtaClass} md:max-lg:px-4 md:whitespace-nowrap`}
            >
              Estimate My Project
              <span aria-hidden>→</span>
            </a>
            <Link
              href={appointmentScheduleHref("assembly-installation")}
              className={`${secondaryCtaClass} md:max-lg:px-4 md:whitespace-nowrap`}
            >
              Book an Assembly Consultation
            </Link>
          </div>
        </div>

        <ul className="relative mt-8 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3 divide-y divide-white/10 sm:divide-y-0 border-t border-white/15 sm:pt-5 max-w-[46rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-7 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:pt-4 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[29rem] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[40rem]">
          {TRUST_ITEMS.map((item, index) => (
            <li
              key={item.title}
              className={`flex items-start gap-3 sm:gap-2.5 min-w-0 py-3.5 sm:py-0 ${
                index > 0 ? "sm:pl-4 lg:pl-5 sm:border-l sm:border-[#c9a227]/35" : "sm:pr-4 lg:pr-5"
              } ${index === 1 ? "sm:pr-4 lg:pr-5" : ""}`}
            >
              <span className="mt-0.5">
                <TrustIcon type={item.icon} />
              </span>
              <span className="min-w-0">
                <span className="block font-heading text-[13px] sm:text-[12px] lg:text-[13px] font-semibold text-white leading-snug">
                  {item.title}
                </span>
                <span className="mt-0.5 block [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:block text-[13px] sm:text-[12px] text-white/72 leading-snug">
                  {item.support}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
