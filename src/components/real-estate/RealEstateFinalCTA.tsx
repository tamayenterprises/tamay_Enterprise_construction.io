import Image from "next/image";
import Link from "next/link";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";

const TRUST_ITEMS = [
  {
    title: "Real Estate + Construction Perspective",
    support: "Understand more than what appears in the listing.",
    icon: "eye" as const,
  },
  {
    title: "Local Connecticut Knowledge",
    support: "Guidance rooted in the communities we serve.",
    icon: "pin" as const,
  },
  {
    title: "See the Property’s Potential",
    support: "Understand what a property is today — and what it could become.",
    icon: "home" as const,
  },
  {
    title: "One Team Beyond the Transaction",
    support: "Real Estate, Construction, and ongoing property support.",
    icon: "layers" as const,
  },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-5 w-5";
  if (type === "eye") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    );
  }
  if (type === "pin") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (type === "home") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
        />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 5-9 5-9-5 9-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12.5l9 5 9-5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5l9 5 9-5" />
    </svg>
  );
}

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const secondaryCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Real Estate final CTA — same visual system as HomeFinalCTA / ConstructionFinalCTA. */
export function RealEstateFinalCTA() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-center"
      aria-labelledby="real-estate-final-cta-heading"
    >
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src="/homepage/hero/hero-real-estate-clean.jpg"
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
                Ready for What’s Next
              </p>
              <span className="hidden sm:block h-px w-10 bg-[#c9a227]/70" aria-hidden />
            </div>

            <h2
              id="real-estate-final-cta-heading"
              className="mt-4 font-heading text-[1.85rem] sm:text-3xl lg:text-[2.45rem] text-white font-semibold leading-[1.12] text-balance"
            >
              Your Next Property
              <br className="hidden sm:block" /> Should Fit More
              <br className="hidden sm:block" /> Than Today.
            </h2>

            <p className="mt-4 text-sm sm:text-[15px] text-white/82 leading-relaxed max-w-md">
              Whether you’re buying, selling, investing, or planning what comes next, Tamay Enterprises helps you look
              beyond the listing and make confident property decisions.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <OpenLiveChatButton className={primaryCtaClass}>
                Talk to a Real Estate Advisor
                <span aria-hidden>→</span>
              </OpenLiveChatButton>
              <Link href="#available-properties" className={secondaryCtaClass}>
                Explore Properties
              </Link>
            </div>
          </div>

          <aside className="lg:justify-self-end w-full max-w-md lg:max-w-sm" aria-label="Why work with Tamay Real Estate">
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
