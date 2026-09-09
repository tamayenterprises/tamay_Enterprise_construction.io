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

function PillarIcon({ type, className = "h-6 w-6 lg:h-7 lg:w-7 text-tamay-accent" }: { type: (typeof PILLARS)[number]["icon"]; className?: string }) {
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
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
      aria-hidden
      style={{
        background: "linear-gradient(to top, rgba(8,14,26,0.55) 0%, rgba(8,14,26,0.16) 60%, transparent 100%)",
      }}
    />
  );
}

/**
 * Home Hero — premium desktop editorial composition + intentional shorter mobile flow.
 * Locked approved photography assets.
 */
export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: NAVY }}
      aria-labelledby="home-hero-heading"
    >
      {/* Premium navy depth — subtle radial + faint blueprint lines */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(90% 70% at 18% 28%, rgba(53,85,143,0.22) 0%, transparent 55%),
            radial-gradient(70% 55% at 88% 72%, rgba(201,162,39,0.06) 0%, transparent 50%),
            linear-gradient(165deg, #0d1a30 0%, #0b1628 42%, #091321 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,0.55) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(105deg, black 0%, black 38%, transparent 62%)",
          WebkitMaskImage: "linear-gradient(105deg, black 0%, black 38%, transparent 62%)",
        }}
      />

      {/* ========== DESKTOP / TABLET (≥ md) ========== */}
      <div className="relative hidden md:grid md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:grid-cols-[minmax(0,0.40fr)_minmax(0,0.60fr)] gap-3 lg:gap-4 xl:gap-5 max-w-[1600px] mx-auto pl-5 lg:pl-8 xl:pl-10 pr-3 lg:pr-4 xl:pr-5 pt-7 lg:pt-9 pb-5 lg:pb-6 items-start">
        {/* LEFT content */}
        <div className="relative z-10 flex flex-col min-w-0 pt-0.5">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[11px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-tamay-accent">
              Tamay Enterprises
            </p>
            <span className="h-px w-12 lg:w-16 bg-tamay-accent/80" aria-hidden />
          </div>

          <h1
            id="home-hero-heading"
            className="mt-4 lg:mt-5 font-heading normal-case text-[2.95rem] lg:text-[3.55rem] xl:text-[4rem] font-normal leading-[1.05] tracking-normal"
          >
            <span className="text-white">One Company.</span>
            <br />
            <span className="text-tamay-accent whitespace-nowrap">Complete Solutions.</span>
          </h1>

          <p className="mt-4 lg:mt-5 text-[15px] lg:text-[17px] xl:text-lg text-white/90 leading-[1.72] max-w-[25rem] lg:max-w-[27rem]">
            Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
            with confidence.
          </p>

          <div className="mt-6 lg:mt-7 flex flex-row flex-wrap gap-3">
            <Link
              href="#our-services"
              className="group/cta inline-flex items-center justify-center gap-2 h-[3.15rem] px-7 font-semibold text-[15px] tracking-wide bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
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
              className="inline-flex items-center justify-center h-[3.15rem] px-7 font-semibold text-[15px] tracking-wide border border-white/80 text-white hover:border-tamay-accent/70 hover:bg-white/[0.05] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation
            </Link>
          </div>

          <ul className="mt-7 lg:mt-8 flex items-start list-none m-0 p-0">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.label}
                className={`min-w-0 flex-1 ${
                  index > 0 ? "border-l border-tamay-accent/40 pl-3.5 lg:pl-5" : "pr-3.5 lg:pr-5"
                }`}
              >
                <Link
                  href={sitePath(pillar.href)}
                  className="group block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
                >
                  <PillarIcon
                    type={pillar.icon}
                    className="h-7 w-7 text-tamay-accent transition-transform duration-200 motion-safe:group-hover:scale-105"
                  />
                  <p className="mt-2.5 font-heading text-[13px] lg:text-[15px] font-semibold uppercase tracking-[0.06em] text-white group-hover:text-tamay-accent transition-colors duration-200 leading-snug">
                    {pillar.label}
                  </p>
                  <p className="mt-1.5 text-[10px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-white/75 leading-snug">
                    {pillar.support}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 lg:mt-6 flex items-center gap-3">
            <span className="h-px w-9 bg-tamay-accent/65" aria-hidden />
            <p className="font-heading text-[10px] lg:text-[11px] font-semibold tracking-[0.24em] uppercase text-tamay-accent/95">
              From Our Family to Yours
            </p>
            <span className="h-px w-9 bg-tamay-accent/65" aria-hidden />
          </div>
        </div>

        {/* RIGHT — one integrated editorial composition (~58–60%) */}
        <div className="relative z-[1] min-w-0 grid grid-cols-[minmax(0,1fr)_3.25rem] xl:grid-cols-[minmax(0,1fr)_3.75rem] gap-2 items-stretch">
          <div
            className="min-w-0 grid gap-[3px] h-full overflow-hidden"
            style={{
              gridTemplateRows: "minmax(0,2fr) minmax(0,1fr)",
              boxShadow: "0 18px 48px rgba(0,0,0,0.28)",
            }}
          >
            {/* Dominant team image */}
            <div className="group relative overflow-hidden min-h-[360px] lg:min-h-[420px] xl:min-h-[480px]">
              <Image
                src={TEAM_SRC}
                alt="Tamay Enterprises team reviewing project plans together in a premium home"
                fill
                className="object-cover object-[center_38%] transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 58vw, 55vw"
                priority
              />
              {/* Soft seam into navy — does not wash faces */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-10 lg:w-14"
                aria-hidden
                style={{
                  background: "linear-gradient(90deg, rgba(11,22,40,0.55) 0%, rgba(11,22,40,0.18) 45%, transparent 100%)",
                }}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-tamay-accent/45" aria-hidden />
            </div>

            {/* Supporting RE | Logistics — same system, tight gap */}
            <div className="grid grid-cols-2 gap-[3px] min-h-[210px] lg:min-h-[240px] xl:min-h-[260px]">
              <div className="group relative overflow-hidden min-h-[210px]">
                <Image
                  src={REAL_ESTATE_SRC}
                  alt="Premium modern home at blue hour representing Tamay Real Estate"
                  fill
                  className="object-cover object-center transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 30vw, 28vw"
                />
                <CaptionScrim />
                <div className="absolute inset-x-0 bottom-0 p-3 lg:p-3.5">
                  <p className="font-heading text-[11px] lg:text-xs font-bold tracking-[0.18em] uppercase text-tamay-accent">
                    Real Estate
                  </p>
                  <p className="mt-1 text-[10px] lg:text-[11px] font-medium tracking-[0.1em] uppercase text-white leading-snug">
                    Properties for
                    <br />A Brighter Tomorrow
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-tamay-accent/30" aria-hidden />
              </div>

              <div className="group relative overflow-hidden min-h-[210px]">
                <Image
                  src={LOGISTICS_SRC}
                  alt="Tamay-branded logistics van and team member with delivery materials"
                  fill
                  className="object-cover object-[40%_center] transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 30vw, 28vw"
                />
                <CaptionScrim />
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
          </div>

          <div
            className="hidden lg:flex flex-col justify-start items-center gap-2.5 pt-5 pointer-events-none"
            aria-hidden
          >
            {["Spaces", "People", "Build", "Brighter", "Lives In"].map((word) => (
              <span
                key={word}
                className="font-heading text-[9px] xl:text-[10px] font-semibold tracking-[0.2em] uppercase text-tamay-accent/55 leading-tight text-center max-w-[3.75rem]"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========== MOBILE — shorter intentional journey ========== */}
      <div className="relative md:hidden px-4 pt-7 pb-8">
        <div className="flex items-center gap-3">
          <p className="font-heading text-[10px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
            Tamay Enterprises
          </p>
          <span className="h-px w-9 bg-tamay-accent/80" aria-hidden />
        </div>

        <h1 className="mt-3 font-heading normal-case text-[2.2rem] sm:text-[2.45rem] font-normal leading-[1.08] tracking-normal">
          <span className="text-white">One Company.</span>
          <br />
          <span className="text-tamay-accent">Complete Solutions.</span>
        </h1>

        <p className="mt-3.5 text-[15px] text-white/90 leading-[1.65] max-w-[34rem]">
          Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward with
          confidence.
        </p>

        {/* Team image immediately after copy */}
        <div className="relative mt-5 aspect-[16/10] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
          <Image
            src={TEAM_SRC}
            alt="Tamay Enterprises team reviewing project plans together in a premium home"
            fill
            className="object-cover object-[center_38%]"
            sizes="100vw"
            priority
          />
        </div>

        {/* Division swipe — first card full, next peek visible */}
        <div
          className="mt-5 -mx-4 pl-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          role="region"
          aria-label="Tamay division navigation"
          tabIndex={0}
        >
          <ul className="flex gap-3 list-none m-0 p-0 pr-4">
            {PILLARS.map((pillar) => (
              <li
                key={pillar.label}
                className="snap-start shrink-0 w-[78%] max-w-[19.5rem]"
              >
                <Link
                  href={sitePath(pillar.href)}
                  className="flex items-start gap-3 min-h-[4.75rem] border border-tamay-accent/35 bg-white/[0.03] px-4 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
                >
                  <PillarIcon type={pillar.icon} className="h-7 w-7 text-tamay-accent shrink-0 mt-0.5" />
                  <span className="min-w-0">
                    <span className="block font-heading text-[13px] font-semibold uppercase tracking-[0.06em] text-white">
                      {pillar.label}
                    </span>
                    <span className="block mt-1 text-[10px] font-semibold tracking-[0.1em] uppercase text-white/70">
                      {pillar.support}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs after divisions */}
        <div className="mt-5 flex flex-col gap-2.5">
          <Link
            href="#our-services"
            className="group/cta inline-flex items-center justify-center gap-2 min-h-11 font-semibold text-sm tracking-wide px-5 bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
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
            className="inline-flex items-center justify-center min-h-11 font-semibold text-sm tracking-wide px-5 border border-white/80 text-white hover:bg-white/[0.05] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </Link>
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
