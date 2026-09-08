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
  const className = "h-[22px] w-[22px] lg:h-6 lg:w-6 text-tamay-accent";
  if (type === "home") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.35}
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
          strokeWidth={1.35}
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
        strokeWidth={1.35}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.35}
        d="M13 16V6a1 1 0 011-1h3.5l3 5H18v6M5 16H3v-5a1 1 0 011-1h9"
      />
    </svg>
  );
}

/**
 * Home landing Hero — premium editorial collage matching the approved mockup.
 * Exact provided Team / Real Estate / Logistics assets; live HTML copy only.
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden isolate" style={{ backgroundColor: NAVY }} aria-labelledby="home-hero-heading">
      {/* ========== DESKTOP / TABLET — one integrated composition ========== */}
      <div className="hidden md:block relative min-h-[600px] lg:min-h-[680px] xl:min-h-[720px]">
        {/* Dominant team plane — upper right, soft-edged into navy */}
        <div
          className="absolute z-[1] overflow-hidden"
          style={{
            top: 0,
            right: 0,
            width: "62%",
            height: "64%",
            clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 88%)",
          }}
        >
          <Image
            src={TEAM_SRC}
            alt="Tamay Enterprises team reviewing project plans together in a premium home"
            fill
            className="object-cover object-[center_28%]"
            sizes="(max-width: 1024px) 65vw, 58vw"
            priority
          />
          {/* Soft left feather into navy — not a hard column edge */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            aria-hidden
            style={{
              background:
                "linear-gradient(90deg, rgba(11,22,40,0.92) 0%, rgba(11,22,40,0.55) 12%, rgba(11,22,40,0.12) 28%, transparent 42%), linear-gradient(180deg, transparent 70%, rgba(11,22,40,0.35) 100%)",
            }}
          />
          {/* Subtle gold edge along the lower diagonal of the team plane */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            aria-hidden
            style={{
              boxShadow: `inset 0 0 0 1px ${GOLD}33`,
            }}
          />
        </div>

        {/* Vertical secondary message — far right, restrained */}
        <p
          className="hidden lg:block absolute z-[4] right-2 xl:right-4 top-[6%] font-heading text-[9px] xl:text-[10px] font-semibold tracking-[0.38em] uppercase text-tamay-accent/50"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-hidden
        >
          Spaces · People · Build · Brighter · Lives · In
        </p>

        {/* Lower-right editorial mosaic — Real Estate + Logistics with diagonal gold geometry */}
        <div
          className="absolute z-[2] bottom-0 right-0 grid grid-cols-2 gap-0"
          style={{ width: "58%", height: "42%" }}
        >
          {/* Real Estate — diagonal cut + gold leading edge */}
          <div className="relative h-full overflow-hidden" style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <Image
              src={REAL_ESTATE_SRC}
              alt="Premium modern home at blue hour representing Tamay Real Estate"
              fill
              className="object-cover object-[70%_center]"
              sizes="(max-width: 1024px) 32vw, 26vw"
            />
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              aria-hidden
              style={{
                background: "linear-gradient(to top, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.35) 42%, transparent 70%)",
              }}
            />
            {/* Thin gold diagonal edge (left cut) */}
            <div
              className="absolute z-[3] pointer-events-none"
              aria-hidden
              style={{
                left: "13%",
                top: 0,
                bottom: 0,
                width: 1.5,
                background: `linear-gradient(180deg, ${GOLD} 0%, ${GOLD}cc 55%, ${GOLD}66 100%)`,
                transform: "skewX(-8deg)",
                transformOrigin: "top left",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 z-[2] p-3.5 lg:p-5 pr-4">
              <p className="font-heading text-[11px] lg:text-xs font-bold tracking-[0.2em] uppercase text-tamay-accent">
                Real Estate
              </p>
              <p className="mt-1 font-heading text-[10px] lg:text-[11px] tracking-[0.12em] uppercase text-white/92 leading-snug">
                Properties for
                <br />A Brighter Tomorrow
              </p>
            </div>
          </div>

          {/* Logistics */}
          <div
            className="relative h-full overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              boxShadow: `inset 1px 0 0 ${GOLD}55`,
            }}
          >
            <Image
              src={LOGISTICS_SRC}
              alt="Tamay-branded logistics van and team member with delivery materials"
              fill
              className="object-cover object-[55%_center]"
              sizes="(max-width: 1024px) 32vw, 26vw"
            />
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              aria-hidden
              style={{
                background: "linear-gradient(to top, rgba(8,14,26,0.9) 0%, rgba(8,14,26,0.38) 45%, transparent 72%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 z-[2] p-3.5 lg:p-5">
              <p className="font-heading text-[11px] lg:text-xs font-bold tracking-[0.2em] uppercase text-tamay-accent">
                Logistics
              </p>
              <p className="mt-1 font-heading text-[10px] lg:text-[11px] tracking-[0.12em] uppercase text-white/92 leading-snug">
                Delivering Progress
                <br />
                Every Step of the Way
              </p>
            </div>
          </div>
        </div>

        {/* Soft navy field wash so left content stays readable against the collage */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(105deg, #0b1628 0%, #0b1628 36%, rgba(11,22,40,0.92) 44%, rgba(11,22,40,0.35) 58%, transparent 72%)",
          }}
        />

        {/* Left content — ~40–44% */}
        <div className="relative z-10 max-w-[42%] xl:max-w-[40%] pl-6 lg:pl-10 xl:pl-14 pr-4 pt-10 lg:pt-12 xl:pt-14 pb-10 lg:pb-12 flex flex-col min-h-[600px] lg:min-h-[680px] xl:min-h-[720px]">
          <div className="flex items-center gap-3.5">
            <p className="font-heading text-[10px] lg:text-[11px] font-bold tracking-[0.32em] uppercase text-tamay-accent">
              Tamay Enterprises
            </p>
            <span className="h-px flex-1 max-w-[4.5rem] bg-tamay-accent/75" aria-hidden />
          </div>

          <h1
            id="home-hero-heading"
            className="mt-5 lg:mt-6 font-heading text-[2.35rem] lg:text-[3rem] xl:text-[3.35rem] font-semibold leading-[1.05] tracking-tight text-balance"
          >
            <span className="text-white">One Company.</span>
            <br />
            <span className="text-tamay-accent">Complete Solutions.</span>
          </h1>

          <p className="mt-5 lg:mt-6 text-[13px] lg:text-[15px] text-white/82 leading-relaxed max-w-[22.5rem] lg:max-w-md font-normal">
            Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
            with confidence.
          </p>

          <div className="mt-7 lg:mt-8 flex flex-row flex-wrap gap-3">
            <Link
              href="#our-services"
              className="inline-flex items-center justify-center gap-2 min-h-[42px] lg:min-h-11 font-semibold text-[13px] lg:text-sm tracking-wide px-5 lg:px-6 py-2.5 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              Explore Our Services
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
            <Link
              href={sitePath("/online-appointments")}
              className="inline-flex items-center justify-center min-h-[42px] lg:min-h-11 font-semibold text-[13px] lg:text-sm tracking-wide px-5 lg:px-6 py-2.5 transition-colors text-center border border-white/70 text-white hover:bg-white/[0.07] hover:border-tamay-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Compact three-division row — integrated, not cards */}
          <ul className="mt-9 lg:mt-11 flex items-start list-none m-0 p-0">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.label}
                className={`min-w-0 flex-1 ${
                  index > 0 ? "border-l border-tamay-accent/25 pl-3.5 lg:pl-5" : "pr-3.5 lg:pr-5"
                }`}
              >
                <Link href={sitePath(pillar.href)} className="group block">
                  <PillarIcon type={pillar.icon} />
                  <p className="mt-2.5 font-heading text-[12px] lg:text-[13px] font-semibold text-white group-hover:text-tamay-accent transition-colors leading-snug">
                    {pillar.label}
                  </p>
                  <p className="mt-1.5 text-[9px] lg:text-[10px] font-semibold tracking-[0.12em] uppercase text-tamay-accent/75 leading-snug">
                    {pillar.support}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 lg:pt-12 flex items-center gap-3.5">
            <span className="h-px w-7 lg:w-9 bg-tamay-accent/60" aria-hidden />
            <p className="font-heading text-[9px] lg:text-[10px] font-bold tracking-[0.26em] uppercase text-tamay-accent/90">
              From Our Family to Yours
            </p>
            <span className="h-px w-7 lg:w-9 bg-tamay-accent/60" aria-hidden />
          </div>
        </div>
      </div>

      {/* ========== MOBILE — same story, intentional stack ========== */}
      <div className="md:hidden px-4 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <p className="font-heading text-[10px] font-bold tracking-[0.3em] uppercase text-tamay-accent">
            Tamay Enterprises
          </p>
          <span className="h-px w-9 bg-tamay-accent/80" aria-hidden />
        </div>

        <h1 className="mt-4 font-heading text-[1.95rem] sm:text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-balance">
          <span className="text-white">One Company.</span>
          <br />
          <span className="text-tamay-accent">Complete Solutions.</span>
        </h1>

        <p className="mt-4 text-[13px] text-white/82 leading-relaxed">
          Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward with
          confidence.
        </p>

        <div className="mt-5 flex flex-col gap-2.5">
          <Link
            href="#our-services"
            className="inline-flex items-center justify-center gap-2 min-h-11 font-semibold text-sm tracking-wide px-5 py-2.5 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
          >
            Explore Our Services
            <span aria-hidden>→</span>
          </Link>
          <Link
            href={sitePath("/online-appointments")}
            className="inline-flex items-center justify-center min-h-11 font-semibold text-sm tracking-wide px-5 py-2.5 transition-colors text-center border border-white/70 text-white hover:bg-white/[0.07] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="relative mt-6 aspect-[16/10] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}55` }}>
          <Image
            src={TEAM_SRC}
            alt="Tamay Enterprises team reviewing project plans together in a premium home"
            fill
            className="object-cover object-[center_30%]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="mt-5 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-2.5 min-w-max list-none m-0 p-0">
            {PILLARS.map((pillar) => (
              <li key={pillar.label}>
                <Link
                  href={sitePath(pillar.href)}
                  className="inline-flex items-center gap-2.5 border border-tamay-accent/25 bg-white/[0.03] px-3.5 py-2.5"
                >
                  <PillarIcon type={pillar.icon} />
                  <span>
                    <span className="block font-heading text-[11px] font-semibold text-white">{pillar.label}</span>
                    <span className="block mt-0.5 text-[9px] font-semibold tracking-[0.1em] uppercase text-tamay-accent/75">
                      {pillar.support}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 space-y-3">
          <div className="relative aspect-[16/10] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}66` }}>
            <Image
              src={REAL_ESTATE_SRC}
              alt="Premium modern home at blue hour representing Tamay Real Estate"
              fill
              className="object-cover object-[70%_center]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-heading text-[11px] font-bold tracking-[0.18em] uppercase text-tamay-accent">
                Real Estate
              </p>
              <p className="mt-1 font-heading text-[10px] tracking-[0.1em] uppercase text-white/90">
                Properties for a Brighter Tomorrow
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}44` }}>
            <Image
              src={LOGISTICS_SRC}
              alt="Tamay-branded logistics van and team member with delivery materials"
              fill
              className="object-cover object-[55%_center]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/22 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-heading text-[11px] font-bold tracking-[0.18em] uppercase text-tamay-accent">
                Logistics
              </p>
              <p className="mt-1 font-heading text-[10px] tracking-[0.1em] uppercase text-white/90">
                Delivering Progress Every Step of the Way
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3.5">
          <span className="h-px w-8 bg-tamay-accent/60" aria-hidden />
          <p className="font-heading text-[10px] font-bold tracking-[0.22em] uppercase text-tamay-accent/90">
            From Our Family to Yours
          </p>
          <span className="h-px w-8 bg-tamay-accent/60" aria-hidden />
        </div>
      </div>
    </section>
  );
}
