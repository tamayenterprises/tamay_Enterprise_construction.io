import Image from "next/image";
import Link from "next/link";
import { sitePath } from "@/lib/paths";

const NAVY = "#0b1628";
const GOLD = "#c9a227";

const TEAM_SRC = "/homepage/hero/hero-main-team.jpg";
const REAL_ESTATE_SRC = "/homepage/hero/hero-real-estate.jpg";
const LOGISTICS_SRC = "/homepage/hero/hero-logistics.jpg";

const PILLARS = [
  {
    label: "Real Estate",
    support: "BUY • INVEST • GROW",
    href: "/real-estate",
    icon: "home" as const,
  },
  {
    label: "Construction",
    support: "PLAN • BUILD • IMPROVE",
    href: "/construction",
    icon: "build" as const,
  },
  {
    label: "Logistics",
    support: "MOVE • DELIVER • SUPPORT",
    href: "/logistics",
    icon: "truck" as const,
  },
] as const;

function PillarIcon({ type }: { type: (typeof PILLARS)[number]["icon"] }) {
  const className = "h-6 w-6 lg:h-7 lg:w-7 text-tamay-accent";
  if (type === "home") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M3 10.5 12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
        />
      </svg>
    );
  }
  if (type === "build") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
        />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M13 16V6a1 1 0 011-1h3.5l3 5H18v6M5 16H3v-5a1 1 0 011-1h9"
      />
    </svg>
  );
}

/**
 * Home landing Hero — corrected to match the approved editorial mockup.
 * Clean CSS-grid collage (no stacked duplicate overlays). Exact approved assets.
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }} aria-labelledby="home-hero-heading">
      {/* ========== DESKTOP / TABLET ========== */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] gap-5 lg:gap-6 xl:gap-7 max-w-[1400px] mx-auto px-6 lg:px-10 xl:px-12 pt-9 lg:pt-11 pb-8 lg:pb-9 items-start">
        {/* LEFT — content stack with tight vertical rhythm (no mt-auto stretch) */}
        <div className="relative z-10 flex flex-col min-w-0 pr-1 lg:pr-2 pt-1">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[11px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Tamay Enterprises
            </p>
            <span className="h-px w-12 lg:w-16 bg-tamay-accent/80" aria-hidden />
          </div>

          <h1
            id="home-hero-heading"
            className="mt-4 lg:mt-5 font-heading normal-case text-[2.75rem] lg:text-[3.35rem] xl:text-[3.75rem] font-normal leading-[1.08] tracking-normal text-balance"
          >
            <span className="text-white">One Company.</span>
            <br />
            <span className="text-tamay-accent">Complete Solutions.</span>
          </h1>

          <p className="mt-4 lg:mt-5 text-[15px] lg:text-base text-white/88 leading-[1.65] max-w-[26rem] lg:max-w-[28rem]">
            Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
            with confidence.
          </p>

          <div className="mt-6 lg:mt-7 flex flex-row flex-wrap gap-3">
            <Link
              href="#our-services"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 font-semibold text-sm tracking-wide bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              Explore Our Services
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={sitePath("/online-appointments")}
              className="inline-flex items-center justify-center h-11 px-6 font-semibold text-sm tracking-wide border border-white/75 text-white hover:bg-white/[0.06] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation
            </Link>
          </div>

          <ul className="mt-8 lg:mt-9 flex items-start list-none m-0 p-0">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.label}
                className={`min-w-0 flex-1 ${
                  index > 0 ? "border-l border-tamay-accent/30 pl-3.5 lg:pl-4" : "pr-3.5 lg:pr-4"
                }`}
              >
                <Link href={sitePath(pillar.href)} className="group block">
                  <PillarIcon type={pillar.icon} />
                  <p className="mt-2.5 font-heading text-[13px] lg:text-sm font-semibold uppercase tracking-[0.06em] text-white group-hover:text-tamay-accent transition-colors leading-snug">
                    {pillar.label}
                  </p>
                  <p className="mt-1.5 text-[10px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70 leading-snug">
                    {pillar.support}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 lg:mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-tamay-accent/65" aria-hidden />
            <p className="font-heading text-[10px] lg:text-[11px] font-semibold tracking-[0.22em] uppercase text-tamay-accent/95">
              From Our Family to Yours
            </p>
            <span className="h-px w-8 bg-tamay-accent/65" aria-hidden />
          </div>
        </div>

        {/* RIGHT — single integrated visual column (grid only; no absolute stacking) */}
        <div className="relative min-w-0 grid grid-rows-[minmax(280px,1.55fr)_minmax(168px,1fr)] gap-2.5 lg:gap-3 pr-8 xl:pr-10">
          {/* Soft left feather so navy/content edge feels continuous — does NOT cover lower mosaic text */}
          <div
            className="pointer-events-none absolute inset-y-0 -left-8 w-16 z-[1]"
            aria-hidden
            style={{
              background: "linear-gradient(90deg, #0b1628 0%, rgba(11,22,40,0.55) 45%, transparent 100%)",
            }}
          />

          {/* Main team image */}
          <div
            className="relative overflow-hidden min-h-[280px] lg:min-h-[320px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 94%)",
              boxShadow: `inset 0 0 0 1px ${GOLD}40`,
            }}
          >
            <Image
              src={TEAM_SRC}
              alt="Tamay Enterprises team reviewing project plans together in a premium home"
              fill
              className="object-cover object-[center_42%]"
              sizes="(max-width: 1024px) 55vw, 48vw"
              priority
            />
          </div>

          {/* Lower mosaic: exactly one RE + one Logistics — no overlapping copies */}
          <div className="grid grid-cols-2 gap-2.5 lg:gap-3 min-h-[168px] lg:min-h-[190px]">
            <div
              className="relative overflow-hidden"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                boxShadow: `inset 0 0 0 1px ${GOLD}70`,
              }}
            >
              <Image
                src={REAL_ESTATE_SRC}
                alt="Premium modern home at blue hour representing Tamay Real Estate"
                fill
                className="object-cover object-[68%_center]"
                sizes="(max-width: 1024px) 28vw, 24vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[48%] pointer-events-none"
                aria-hidden
                style={{
                  background: "linear-gradient(to top, rgba(8,14,26,0.82) 0%, rgba(8,14,26,0.28) 55%, transparent 100%)",
                }}
              />
              {/* Single gold leading edge */}
              <div
                className="absolute top-0 bottom-0 w-px pointer-events-none"
                aria-hidden
                style={{
                  left: "9%",
                  background: `linear-gradient(180deg, ${GOLD} 0%, ${GOLD}99 100%)`,
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 lg:p-3.5 pl-5 lg:pl-6">
                <p className="font-heading text-[11px] lg:text-xs font-bold tracking-[0.18em] uppercase text-tamay-accent">
                  Real Estate
                </p>
                <p className="mt-1 text-[10px] lg:text-[11px] font-medium tracking-[0.1em] uppercase text-white leading-snug">
                  Properties for
                  <br />A Brighter Tomorrow
                </p>
              </div>
            </div>

            <div
              className="relative overflow-hidden"
              style={{ boxShadow: `inset 0 0 0 1px ${GOLD}55` }}
            >
              <Image
                src={LOGISTICS_SRC}
                alt="Tamay-branded logistics van and team member with delivery materials"
                fill
                className="object-cover object-[52%_center]"
                sizes="(max-width: 1024px) 28vw, 24vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[48%] pointer-events-none"
                aria-hidden
                style={{
                  background: "linear-gradient(to top, rgba(8,14,26,0.84) 0%, rgba(8,14,26,0.28) 55%, transparent 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 lg:p-3.5">
                <p className="font-heading text-[11px] lg:text-xs font-bold tracking-[0.18em] uppercase text-tamay-accent">
                  Logistics
                </p>
                <p className="mt-1 text-[10px] lg:text-[11px] font-medium tracking-[0.1em] uppercase text-white leading-snug">
                  Delivering Progress
                  <br />
                  Every Step of the Way
                </p>
              </div>
            </div>
          </div>

          {/* Decorative right-side text — stacked words, padded from edge, not clipped */}
          <div
            className="hidden lg:flex absolute right-0 top-4 xl:top-6 flex-col items-end gap-1.5 z-[2] pointer-events-none"
            aria-hidden
          >
            {["Spaces", "People", "Build", "Brighter", "Lives In"].map((word) => (
              <span
                key={word}
                className="font-heading text-[9px] xl:text-[10px] font-semibold tracking-[0.22em] uppercase text-tamay-accent/55 leading-none"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden px-4 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <p className="font-heading text-[10px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
            Tamay Enterprises
          </p>
          <span className="h-px w-9 bg-tamay-accent/80" aria-hidden />
        </div>

        <h1 className="mt-3.5 font-heading normal-case text-[2.05rem] sm:text-[2.25rem] font-normal leading-[1.1] tracking-normal text-balance">
          <span className="text-white">One Company.</span>
          <br />
          <span className="text-tamay-accent">Complete Solutions.</span>
        </h1>

        <p className="mt-3.5 text-[14px] text-white/88 leading-[1.6]">
          Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward with
          confidence.
        </p>

        <div className="mt-5 flex flex-col gap-2.5">
          <Link
            href="#our-services"
            className="inline-flex items-center justify-center gap-2 h-11 font-semibold text-sm tracking-wide px-5 bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
          >
            Explore Our Services
            <span aria-hidden>→</span>
          </Link>
          <Link
            href={sitePath("/online-appointments")}
            className="inline-flex items-center justify-center h-11 font-semibold text-sm tracking-wide px-5 border border-white/75 text-white hover:bg-white/[0.06] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="relative mt-6 aspect-[16/10] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}55` }}>
          <Image
            src={TEAM_SRC}
            alt="Tamay Enterprises team reviewing project plans together in a premium home"
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
            priority
          />
        </div>

        <ul className="mt-5 grid grid-cols-3 gap-0 list-none m-0 p-0">
          {PILLARS.map((pillar, index) => (
            <li
              key={pillar.label}
              className={`min-w-0 ${index > 0 ? "border-l border-tamay-accent/30 pl-2.5" : "pr-2"}`}
            >
              <Link href={sitePath(pillar.href)} className="block">
                <PillarIcon type={pillar.icon} />
                <p className="mt-2 font-heading text-[11px] font-semibold uppercase tracking-[0.04em] text-white leading-snug">
                  {pillar.label}
                </p>
                <p className="mt-1 text-[8px] font-semibold tracking-[0.08em] uppercase text-white/65 leading-snug">
                  {pillar.support}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4 space-y-3">
          <div className="relative aspect-[16/10] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}66` }}>
            <Image
              src={REAL_ESTATE_SRC}
              alt="Premium modern home at blue hour representing Tamay Real Estate"
              fill
              className="object-cover object-[68%_center]"
              sizes="100vw"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
              aria-hidden
              style={{
                background: "linear-gradient(to top, rgba(8,14,26,0.8) 0%, transparent 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-heading text-[11px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
                Real Estate
              </p>
              <p className="mt-1 text-[10px] font-medium tracking-[0.08em] uppercase text-white">
                Properties for a Brighter Tomorrow
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}55` }}>
            <Image
              src={LOGISTICS_SRC}
              alt="Tamay-branded logistics van and team member with delivery materials"
              fill
              className="object-cover object-[52%_center]"
              sizes="100vw"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
              aria-hidden
              style={{
                background: "linear-gradient(to top, rgba(8,14,26,0.82) 0%, transparent 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-heading text-[11px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
                Logistics
              </p>
              <p className="mt-1 text-[10px] font-medium tracking-[0.08em] uppercase text-white">
                Delivering Progress Every Step of the Way
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-tamay-accent/60" aria-hidden />
          <p className="font-heading text-[10px] font-semibold tracking-[0.2em] uppercase text-tamay-accent/90">
            From Our Family to Yours
          </p>
          <span className="h-px w-8 bg-tamay-accent/60" aria-hidden />
        </div>
      </div>
    </section>
  );
}
