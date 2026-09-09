import Image from "next/image";
import Link from "next/link";
import { sitePath } from "@/lib/paths";

const NAVY = "#0b1628";

/** Locked approved assets — do not replace */
const TEAM_SRC = "/homepage/hero/hero-team-clean.jpg";
const REAL_ESTATE_SRC = "/homepage/hero/hero-real-estate-clean.jpg";
const LOGISTICS_SRC = "/homepage/hero/hero-logistics-clean.jpg";

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

function PillarIcon({
  type,
  className = "h-6 w-6 text-tamay-accent shrink-0",
}: {
  type: (typeof PILLARS)[number]["icon"];
  className?: string;
}) {
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

function CaptionScrim() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%]"
      aria-hidden
      style={{
        background: "linear-gradient(to top, rgba(8,14,26,0.58) 0%, rgba(8,14,26,0.15) 65%, transparent 100%)",
      }}
    />
  );
}

/**
 * Home Hero — message-first editorial composition (approved desktop + mobile).
 * Locked approved photography assets.
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }} aria-labelledby="home-hero-heading">
      {/* Subtle navy depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(80% 60% at 16% 30%, rgba(53,85,143,0.18) 0%, transparent 55%),
            linear-gradient(165deg, #0d1a30 0%, #0b1628 45%, #091321 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(100deg, black 0%, black 42%, transparent 68%)",
          WebkitMaskImage: "linear-gradient(100deg, black 0%, black 42%, transparent 68%)",
        }}
      />

      {/* ========== DESKTOP / TABLET ========== */}
      <div className="relative hidden md:grid md:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] gap-5 lg:gap-6 xl:gap-8 max-w-[1400px] mx-auto px-6 lg:px-10 xl:px-12 pt-8 lg:pt-10 pb-7 lg:pb-8 items-start">
        {/* LEFT — message is the Hero (~46–48%) */}
        <div className="relative z-10 flex flex-col min-w-0 overflow-hidden pr-1 lg:pr-2">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[11px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Tamay Enterprises
            </p>
            <span className="h-px w-11 lg:w-14 bg-tamay-accent/80" aria-hidden />
          </div>

          <h1
            id="home-hero-heading"
            className="mt-4 lg:mt-5 font-heading normal-case text-[2.45rem] lg:text-[2.95rem] xl:text-[3.25rem] font-normal leading-[1.1] tracking-normal max-w-full"
          >
            <span className="block text-white">One Company.</span>
            <span className="block text-tamay-accent">Complete Solutions.</span>
          </h1>

          <p className="mt-4 text-[14px] lg:text-[15px] xl:text-base text-white/88 leading-[1.7] max-w-[26rem]">
            Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
            with confidence.
          </p>

          <div className="mt-5 lg:mt-6 flex flex-row flex-wrap gap-2.5 lg:gap-3">
            <Link
              href="#our-services"
              className="group/cta inline-flex items-center justify-center gap-2 h-11 px-5 lg:px-6 font-semibold text-sm tracking-wide bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              Explore Our Services
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 motion-safe:group-hover/cta:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <Link
              href={sitePath("/online-appointments")}
              className="inline-flex items-center justify-center h-11 px-5 lg:px-6 font-semibold text-sm tracking-wide border border-white/75 text-white hover:border-tamay-accent/60 hover:bg-white/[0.05] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation
            </Link>
          </div>

          <ul className="mt-6 lg:mt-7 flex items-start list-none m-0 p-0">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.label}
                className={`min-w-0 flex-1 ${
                  index > 0 ? "border-l border-tamay-accent/35 pl-3 lg:pl-4" : "pr-3 lg:pr-4"
                }`}
              >
                <Link
                  href={sitePath(pillar.href)}
                  className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
                >
                  <PillarIcon type={pillar.icon} className="h-6 w-6 text-tamay-accent" />
                  <p className="mt-2 font-heading text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.05em] text-white group-hover:text-tamay-accent transition-colors leading-snug">
                    {pillar.label}
                  </p>
                  <p className="mt-1 text-[9px] lg:text-[10px] font-semibold tracking-[0.1em] uppercase text-white/70 leading-snug">
                    {pillar.support}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 lg:mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-tamay-accent/65" aria-hidden />
            <p className="font-heading text-[10px] font-semibold tracking-[0.22em] uppercase text-tamay-accent/95">
              From Our Family to Yours
            </p>
            <span className="h-px w-8 bg-tamay-accent/65" aria-hidden />
          </div>
        </div>

        {/* RIGHT — supporting imagery (~52–54%) */}
        <div className="relative z-[1] min-w-0 grid grid-cols-[minmax(0,1fr)_2.75rem] xl:grid-cols-[minmax(0,1fr)_3.25rem] gap-2 items-start">
          <div className="min-w-0 flex flex-col gap-2.5">
            <div className="relative overflow-hidden rounded-sm aspect-[16/10] lg:aspect-[16/9.5] ring-1 ring-white/10">
              <Image
                src={TEAM_SRC}
                alt="Tamay Enterprises team reviewing project plans together in a premium home"
                fill
                className="object-cover object-[center_38%]"
                sizes="(max-width: 1024px) 52vw, 48vw"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="relative overflow-hidden rounded-sm aspect-[16/11] ring-1 ring-white/10">
                <Image
                  src={REAL_ESTATE_SRC}
                  alt="Premium modern home at blue hour representing Tamay Real Estate"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 26vw, 24vw"
                />
                <CaptionScrim />
                <div className="absolute inset-x-0 bottom-0 p-2.5 lg:p-3">
                  <p className="font-heading text-[10px] lg:text-[11px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
                    Real Estate
                  </p>
                  <p className="mt-0.5 text-[9px] lg:text-[10px] font-medium tracking-[0.08em] uppercase text-white leading-snug">
                    Properties for
                    <br />A Brighter Tomorrow
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-sm aspect-[16/11] ring-1 ring-white/10">
                <Image
                  src={LOGISTICS_SRC}
                  alt="Tamay-branded logistics van and team member with delivery materials"
                  fill
                  className="object-cover object-[40%_center]"
                  sizes="(max-width: 1024px) 26vw, 24vw"
                />
                <CaptionScrim />
                <div className="absolute inset-x-0 bottom-0 p-2.5 lg:p-3">
                  <p className="font-heading text-[10px] lg:text-[11px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
                    Logistics
                  </p>
                  <p className="mt-0.5 text-[9px] lg:text-[10px] font-medium tracking-[0.08em] uppercase text-white leading-snug">
                    Delivering Progress
                    <br />
                    Every Step of the Way
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden lg:flex flex-col justify-start items-center gap-2 pt-3 pointer-events-none"
            aria-hidden
          >
            {["Spaces", "People", "Build", "Brighter", "Lives In"].map((word) => (
              <span
                key={word}
                className="font-heading text-[8px] xl:text-[9px] font-semibold tracking-[0.18em] uppercase text-tamay-accent/50 leading-tight text-center max-w-[3.5rem]"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========== MOBILE — compact approved flow ========== */}
      <div className="relative md:hidden px-4 pt-7 pb-7">
        <div className="flex items-center gap-3">
          <p className="font-heading text-[10px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
            Tamay Enterprises
          </p>
          <span className="h-px w-8 bg-tamay-accent/80" aria-hidden />
        </div>

        <h1 className="mt-3 font-heading normal-case text-[1.7rem] sm:text-[1.85rem] font-normal leading-[1.12] tracking-normal">
          <span className="block text-white">One Company.</span>
          <span className="block text-tamay-accent whitespace-nowrap">Complete Solutions.</span>
        </h1>

        <p className="mt-3 text-[14px] text-white/88 leading-[1.6]">
          Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward with
          confidence.
        </p>

        {/* Main team — medium landscape */}
        <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-white/10">
          <Image
            src={TEAM_SRC}
            alt="Tamay Enterprises team reviewing project plans together in a premium home"
            fill
            className="object-cover object-[center_38%]"
            sizes="100vw"
            priority
          />
        </div>

        {/* Compact supporting RE | Logistics thumbnails — NOT giant stacked cards */}
        <div className="mt-2.5 grid grid-cols-2 gap-2.5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-white/10">
            <Image
              src={REAL_ESTATE_SRC}
              alt="Premium modern home at blue hour representing Tamay Real Estate"
              fill
              className="object-cover object-center"
              sizes="45vw"
            />
            <CaptionScrim />
            <div className="absolute inset-x-0 bottom-0 p-2">
              <p className="font-heading text-[9px] font-bold tracking-[0.14em] uppercase text-tamay-accent">
                Real Estate
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-white/10">
            <Image
              src={LOGISTICS_SRC}
              alt="Tamay-branded logistics van and team member with delivery materials"
              fill
              className="object-cover object-[40%_center]"
              sizes="45vw"
            />
            <CaptionScrim />
            <div className="absolute inset-x-0 bottom-0 p-2">
              <p className="font-heading text-[9px] font-bold tracking-[0.14em] uppercase text-tamay-accent">
                Logistics
              </p>
            </div>
          </div>
        </div>

        {/* All 3 divisions visible — stacked rows, no swipe */}
        <nav className="mt-4" aria-label="Tamay divisions">
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {PILLARS.map((pillar) => (
              <li key={pillar.label}>
                <Link
                  href={sitePath(pillar.href)}
                  className="flex items-center gap-3 min-h-12 border border-tamay-accent/30 bg-white/[0.03] px-3.5 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
                >
                  <PillarIcon type={pillar.icon} className="h-6 w-6 text-tamay-accent shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-[13px] font-semibold uppercase tracking-[0.04em] text-white">
                      {pillar.label}
                    </span>
                    <span className="block mt-0.5 text-[9px] font-semibold tracking-[0.1em] uppercase text-white/65">
                      {pillar.support}
                    </span>
                  </span>
                  <span className="text-tamay-accent/80 text-sm shrink-0" aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTAs after divisions */}
        <div className="mt-4 flex flex-col gap-2.5">
          <Link
            href="#our-services"
            className="inline-flex items-center justify-center gap-2 min-h-11 font-semibold text-sm tracking-wide px-5 bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
          >
            Explore Our Services
            <span aria-hidden>→</span>
          </Link>
          <Link
            href={sitePath("/online-appointments")}
            className="inline-flex items-center justify-center min-h-11 font-semibold text-sm tracking-wide px-5 border border-white/75 text-white hover:bg-white/[0.05] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-tamay-accent/60" aria-hidden />
          <p className="font-heading text-[10px] font-semibold tracking-[0.2em] uppercase text-tamay-accent/90">
            From Our Family to Yours
          </p>
          <span className="h-px w-7 bg-tamay-accent/60" aria-hidden />
        </div>
      </div>
    </section>
  );
}
