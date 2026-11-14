import Image from "next/image";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { SITE } from "@/lib/site";

const HERO_IMAGE_SRC = "/construction/financing-homeowners.png";

const TRUST_ITEMS = [
  { title: "Multiple Lending Options", icon: "layers" as const },
  { title: "Flexible Project Sizes", icon: "home" as const },
  { title: "Simple Online Process", icon: "laptop" as const },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-tamay-accent";
  if (type === "layers") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 5-9 5-9-5 9-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12.5l9 5 9-5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5l9 5 9-5" />
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
      <rect x="4" y="5" width="16" height="11" rx="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 19h19M9.5 10.5l1.75 1.75L14.5 9" />
    </svg>
  );
}

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const secondaryCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Financing Hero — same navy/gold split system as the Assembly, Reviews, Logistics, and Construction heroes. */
export function FinanceHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#141c2b] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:flex [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:items-center [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:min-h-[clamp(460px,calc(100svh-81px),640px)]"
      aria-labelledby="finance-hero-heading"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-10 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:static [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:py-10 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:py-12">
        <div className="absolute z-10 top-6 sm:top-8 inset-x-4 sm:inset-x-6 flex items-center gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden">
          <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227] [text-shadow:0_1px_10px_rgba(20,28,43,0.9)]">
            Project Financing
          </p>
          <span className="h-px w-10 bg-[#c9a227]/70" aria-hidden />
        </div>

        <div
          className="relative -z-10 -mx-4 sm:-mx-6 h-[min(100vw,26rem)] sm:h-[32rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:absolute [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:inset-y-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:right-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:m-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:h-full [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:aspect-[16/9] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:w-auto [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[58%] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[55%] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_8%,black_20%)]"
          aria-hidden
        >
          <Image
            src={HERO_IMAGE_SRC}
            alt=""
            fill
            className="object-cover object-[8%_30%] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:object-[20%_50%]"
            sizes="(max-width: 768px) 100vw, 56vw"
            priority
          />
          <div
            className="absolute inset-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden"
            style={{
              background: [
                "linear-gradient(180deg, #141c2b 0%, rgba(20,28,43,0.72) 7%, rgba(20,28,43,0) 14%, rgba(20,28,43,0) 54%, rgba(20,28,43,0.55) 70%, rgba(20,28,43,0.9) 85%, #141c2b 97%)",
                "linear-gradient(90deg, rgba(20,28,43,0.4) 0%, rgba(20,28,43,0) 16%, rgba(20,28,43,0) 84%, rgba(20,28,43,0.4) 100%)",
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

        <div className="relative -mt-[5.5rem] sm:-mt-[7rem] max-w-xl [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[25rem] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[29rem]">
          <div className="hidden items-center gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:flex">
            <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
              Project Financing
            </p>
            <span className="h-px w-10 bg-[#c9a227]/70" aria-hidden />
          </div>

          <h1
            id="finance-hero-heading"
            className="font-heading text-[1.9rem] sm:text-[2.3rem] lg:text-[2.5rem] text-white font-semibold leading-[1.1] [text-shadow:0_2px_18px_rgba(20,28,43,0.55)] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:text-[2.1rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:[text-shadow:none] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-4 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:text-[2.5rem]"
          >
            Build Now.
            <br />
            <span className="text-[#c9a227]">Pay Over Time.</span>
          </h1>

          <p className="mt-3 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-4 text-sm sm:text-[15px] text-white/85 leading-relaxed max-w-md [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:text-sm [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:text-[15px]">
            Explore financing options for qualifying construction, renovation, repair, and home improvement projects
            through our financing partner network.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-5 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-6">
            <a
              href={SITE.financingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryCtaClass} md:max-lg:px-4 md:whitespace-nowrap`}
            >
              Check My Financing Options
              <span aria-hidden>→</span>
            </a>
            <OpenLiveChatButton className={`${secondaryCtaClass} md:max-lg:px-4 md:whitespace-nowrap`}>
              Talk to Our Team
            </OpenLiveChatButton>
          </div>
        </div>

        <ul className="relative mt-8 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3 divide-y divide-white/10 sm:divide-y-0 border-t border-white/15 sm:pt-5 max-w-[40rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-7 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:pt-4 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[27rem] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[34rem]">
          {TRUST_ITEMS.map((item, index) => (
            <li
              key={item.title}
              className={`flex items-center gap-3 sm:gap-2.5 min-w-0 py-3 sm:py-0 ${
                index > 0 ? "sm:pl-4 lg:pl-5 sm:border-l sm:border-[#c9a227]/35" : "sm:pr-4 lg:pr-5"
              } ${index === 1 ? "sm:pr-4 lg:pr-5" : ""}`}
            >
              <TrustIcon type={item.icon} />
              <span className="font-heading text-[13px] sm:text-[12px] lg:text-[13px] font-semibold text-white leading-snug">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
