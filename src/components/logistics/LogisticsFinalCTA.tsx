import Image from "next/image";
import Link from "next/link";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { appointmentScheduleHref } from "@/lib/onlineAppointments";

const TRUST_ITEMS = [
  { title: "Reliable Service", icon: "handshake" as const },
  { title: "Safe & Organized", icon: "shield" as const },
  { title: "Local & Regional Support", icon: "pin" as const },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-5 w-5";
  if (type === "handshake") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.5 11.5l3-3.5h3.5l3 2.5M21.5 11.5l-3-3.5H15l-4.2 3.6a1.4 1.4 0 001.9 2.05L15 12l4.5 3.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5.5 14l3.5 3.2a1.3 1.3 0 001.85-.1M9.5 14.8l2.6 2.4a1.3 1.3 0 001.85-.1M12.5 13.8l2.8 2.6a1.3 1.3 0 001.85-.1l2.35-2.3"
        />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.75 12.25l2.25 2.25 4.25-4.5" />
      </svg>
    );
  }
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

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const secondaryCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Logistics final CTA — same visual system as HomeFinalCTA / ConstructionFinalCTA / RealEstateFinalCTA. */
export function LogisticsFinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-center scroll-mt-24"
      aria-labelledby="logistics-final-cta-heading"
    >
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src="/homepage/hero/hero-logistics-clean.jpg"
          alt=""
          fill
          className="object-cover object-[68%_center] lg:object-[center_40%]"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(20,28,43,0.95) 0%, rgba(20,28,43,0.91) 32%, rgba(20,28,43,0.7) 50%, rgba(20,28,43,0.28) 68%, rgba(20,28,43,0.12) 100%)",
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
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
              Ready When You Are
            </p>
            <span className="hidden sm:block h-px w-10 bg-[#c9a227]/70" aria-hidden />
          </div>

          <h2
            id="logistics-final-cta-heading"
            className="mt-4 font-heading text-[1.85rem] sm:text-3xl lg:text-[2.45rem] text-white font-semibold leading-[1.12] text-balance"
          >
            Need Logistics Support?
            <br className="hidden sm:block" /> We’re Ready to Help.
          </h2>

          <p className="mt-4 text-sm sm:text-[15px] text-white/82 leading-relaxed max-w-md">
            From moving and delivery to transport, junk removal, and project logistics, our team provides reliable,
            organized, and professional service.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <OpenLiveChatButton className={primaryCtaClass}>
              Chat with Us Live
              <span aria-hidden>→</span>
            </OpenLiveChatButton>
            <Link href={appointmentScheduleHref("logistics")} className={secondaryCtaClass}>
              Schedule a Logistics Consultation
            </Link>
          </div>

          <ul className="mt-8 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-[auto_auto_auto] sm:justify-start gap-3 sm:gap-0 border-t border-white/15 pt-5 sm:w-max sm:max-w-full">
            {TRUST_ITEMS.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-center gap-2.5 min-w-0 ${
                  index > 0 ? "sm:pl-4 sm:border-l sm:border-[#c9a227]/35" : ""
                } ${index < TRUST_ITEMS.length - 1 ? "sm:pr-4" : ""}`}
              >
                <span className="shrink-0 text-[#c9a227]">
                  <TrustIcon type={item.icon} />
                </span>
                <span className="font-heading text-[13px] font-semibold text-white leading-snug sm:whitespace-nowrap">{item.title}</span>
              </li>
            ))}
          </ul>
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
