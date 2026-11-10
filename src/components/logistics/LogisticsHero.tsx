import Image from "next/image";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";

const HERO_IMAGE_SRC = "/homepage/hero/hero-logistics-clean.jpg";

const TRUST_ITEMS = [
  {
    title: "Local & Regional Service",
    support: "Serving West Haven and nearby Connecticut communities.",
    icon: "pin" as const,
  },
  {
    title: "Communication First",
    support: "Clear scheduling and updates from pickup to delivery.",
    icon: "chat" as const,
  },
  {
    title: "Hands-On Support",
    support: "A practical team focused on getting the job done right.",
    icon: "tools" as const,
  },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-tamay-accent";
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
  if (type === "chat") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h8M8 14h5m-9 6l2.5-3H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"
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
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.7 5.7 2.1 2.1 5.7-5.7a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.1-2.1 2.2-2.2z"
      />
    </svg>
  );
}

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const secondaryCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Logistics department Hero — same image as the Home Hero Logistics tile, Tamay navy/gold system. */
export function LogisticsHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#141c2b] lg:min-h-[78svh] lg:flex lg:items-center"
      aria-labelledby="logistics-hero-heading"
    >
      <div className="relative -z-20 aspect-[4/3] sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto" aria-hidden>
        <Image
          src={HERO_IMAGE_SRC}
          alt=""
          fill
          className="object-cover object-center sm:object-[center_30%] lg:object-[center_40%]"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,28,43,0.1) 0%, rgba(20,28,43,0) 40%, rgba(20,28,43,0.7) 80%, #141c2b 100%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 -z-10 hidden lg:block"
        aria-hidden
        style={{
          background:
            "linear-gradient(0deg, rgba(20,28,43,0.55) 0%, rgba(20,28,43,0) 32%), linear-gradient(90deg, rgba(20,28,43,0.94) 0%, rgba(20,28,43,0.88) 34%, rgba(20,28,43,0.62) 50%, rgba(20,28,43,0.2) 66%, rgba(20,28,43,0) 80%)",
        }}
      />
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 pb-10 lg:mt-0 lg:py-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
              Logistics &amp; Delivery
            </p>
            <span className="hidden sm:block h-px w-10 bg-[#c9a227]/70" aria-hidden />
          </div>

          <h1
            id="logistics-hero-heading"
            className="mt-4 font-heading text-[1.95rem] sm:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.1]"
          >
            Move It.
            <br />
            Deliver It.
            <br />
            <span className="text-[#c9a227]">Keep It Moving.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed max-w-md">
            Reliable local and regional logistics support for businesses, contractors, and individuals — coordinated
            with clear communication, dependable scheduling, and hands-on service.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <a href="#contact" className={primaryCtaClass}>
              Request a Logistics Quote
              <span aria-hidden>→</span>
            </a>
            <OpenLiveChatButton className={secondaryCtaClass}>Talk to Our Team</OpenLiveChatButton>
          </div>
        </div>

        <ul className="mt-8 md:mt-10 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 border-t border-white/15 pt-5 max-w-[46rem]">
          {TRUST_ITEMS.map((item, index) => (
            <li
              key={item.title}
              className={`flex items-start gap-2.5 min-w-0 ${
                index > 0 ? "sm:pl-5 sm:border-l sm:border-[#c9a227]/35" : "sm:pr-5"
              } ${index === 1 ? "sm:pr-5" : ""}`}
            >
              <span className="mt-0.5">
                <TrustIcon type={item.icon} />
              </span>
              <span className="min-w-0">
                <span className="block font-heading text-[12px] sm:text-[13px] font-semibold text-white leading-snug">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[12px] sm:text-[13px] text-white/72 leading-snug">{item.support}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
