import Image from "next/image";
import Link from "next/link";
import { sitePath } from "@/lib/paths";

const NAVY = "#0b1628";

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
  const className = "h-5 w-5 sm:h-6 sm:w-6 text-tamay-accent";
  if (type === "home") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
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
          strokeWidth={1.5}
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
        strokeWidth={1.5}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 16V6a1 1 0 011-1h3.5l3 5H18v6M5 16H3v-5a1 1 0 011-1h9"
      />
    </svg>
  );
}

/**
 * Home landing Hero — rebuilt to the approved editorial mockup.
 * Exact provided Team / Real Estate / Logistics assets; live HTML copy only.
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden isolate" style={{ backgroundColor: NAVY }} aria-labelledby="home-hero-heading">
      {/* Atmospheric field matching approved navy + soft right glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 70% at 72% 38%, rgba(53,85,143,0.28) 0%, transparent 58%), linear-gradient(105deg, #0b1628 0%, #0b1628 38%, rgba(11,22,40,0.88) 52%, rgba(11,22,40,0.45) 72%, rgba(11,22,40,0.2) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12">
        {/* ========== DESKTOP / TABLET COMPOSITION ========== */}
        <div className="hidden md:grid md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-6 lg:gap-8 xl:gap-10 items-stretch min-h-[520px] lg:min-h-[560px]">
          {/* Left navy content (~40–45%) */}
          <div className="relative z-20 flex flex-col min-w-0 py-1 lg:py-2">
            <div className="flex items-center gap-3">
              <p className="font-heading text-[10px] lg:text-[11px] font-bold tracking-[0.28em] uppercase text-tamay-accent">
                Tamay Enterprises
              </p>
              <span className="h-px w-10 lg:w-14 bg-tamay-accent/80" aria-hidden />
            </div>

            <h1
              id="home-hero-heading"
              className="mt-4 lg:mt-5 font-heading text-[2.2rem] lg:text-[2.85rem] xl:text-[3.1rem] font-semibold leading-[1.08] text-balance"
            >
              <span className="text-white">One Company.</span>
              <br />
              <span className="text-tamay-accent">Complete Solutions.</span>
            </h1>

            <p className="mt-4 lg:mt-5 text-sm lg:text-[15px] text-white/80 leading-relaxed max-w-[22rem] lg:max-w-md">
              Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
              with confidence.
            </p>

            <div className="mt-6 lg:mt-7 flex flex-row flex-wrap gap-2.5 lg:gap-3">
              <Link
                href="#our-services"
                className="inline-flex items-center justify-center gap-2 min-h-10 lg:min-h-11 font-bold text-sm tracking-wide px-5 lg:px-6 py-2.5 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
              >
                Explore Our Services
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={sitePath("/online-appointments")}
                className="inline-flex items-center justify-center min-h-10 lg:min-h-11 font-bold text-sm tracking-wide px-5 lg:px-6 py-2.5 transition-colors text-center border border-white/80 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Compact three-division treatment — not cards */}
            <ul className="mt-8 lg:mt-10 flex items-start gap-0 list-none m-0 p-0">
              {PILLARS.map((pillar, index) => (
                <li
                  key={pillar.label}
                  className={`min-w-0 flex-1 ${index > 0 ? "border-l border-white/15 pl-3 lg:pl-4" : "pr-3 lg:pr-4"}`}
                >
                  <Link href={sitePath(pillar.href)} className="group block">
                    <PillarIcon type={pillar.icon} />
                    <p className="mt-2 font-heading text-[12px] lg:text-sm font-semibold text-white group-hover:text-tamay-accent transition-colors leading-snug">
                      {pillar.label}
                    </p>
                    <p className="mt-1 text-[9px] lg:text-[10px] font-semibold tracking-[0.1em] uppercase text-white/55 leading-snug">
                      {pillar.support}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 lg:pt-10 flex items-center gap-3">
              <span className="h-px w-8 bg-tamay-accent/55" aria-hidden />
              <p className="font-heading text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase text-tamay-accent/90">
                From Our Family to Yours
              </p>
              <span className="h-px w-8 bg-tamay-accent/55" aria-hidden />
            </div>
          </div>

          {/* Right visual composition — one integrated editorial plane */}
          <div className="relative min-w-0 min-h-[480px] lg:min-h-[520px]">
            {/* Dominant team image */}
            <div
              className="absolute inset-x-0 top-0 h-[64%] lg:h-[66%] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              style={{
                clipPath: "polygon(6% 0, 100% 0, 100% 92%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-[#c9a227]/35 pointer-events-none z-10" aria-hidden />
              <Image
                src={TEAM_SRC}
                alt="Tamay Enterprises team reviewing project plans together in a premium home"
                fill
                className="object-cover object-[center_32%]"
                sizes="(max-width: 1024px) 60vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0 z-[1]"
                aria-hidden
                style={{
                  background: "linear-gradient(90deg, rgba(11,22,40,0.5) 0%, transparent 22%)",
                }}
              />
            </div>

            {/* Lower integrated RE + Logistics */}
            <div className="absolute inset-x-0 bottom-0 h-[42%] lg:h-[40%] grid grid-cols-2 gap-2.5 lg:gap-3 items-end">
              <div
                className="relative h-[88%] overflow-hidden shadow-[0_14px_32px_rgba(0,0,0,0.4)]"
                style={{
                  clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
                  transform: "translateY(-4%)",
                }}
              >
                <div className="absolute inset-0 ring-1 ring-inset ring-[#c9a227]/65 pointer-events-none z-10" aria-hidden />
                <Image
                  src={REAL_ESTATE_SRC}
                  alt="Premium modern home at blue hour representing Tamay Real Estate"
                  fill
                  className="object-cover object-[72%_center]"
                  sizes="(max-width: 1024px) 30vw, 24vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent z-[1]" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 z-[2] p-2.5 lg:p-3.5">
                  <p className="font-heading text-[10px] lg:text-[11px] font-bold tracking-[0.16em] uppercase text-white">
                    Real Estate
                  </p>
                  <p className="mt-0.5 text-[9px] lg:text-[10px] tracking-[0.08em] uppercase text-white/88 leading-snug">
                    Properties for
                    <br />A Brighter Tomorrow
                  </p>
                </div>
              </div>

              <div className="relative h-full overflow-hidden shadow-[0_14px_32px_rgba(0,0,0,0.4)] ring-1 ring-white/15">
                <Image
                  src={LOGISTICS_SRC}
                  alt="Tamay-branded logistics van and team member with delivery materials"
                  fill
                  className="object-cover object-[58%_center]"
                  sizes="(max-width: 1024px) 30vw, 24vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/25 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-2.5 lg:p-3.5">
                  <p className="font-heading text-[10px] lg:text-[11px] font-bold tracking-[0.16em] uppercase text-white">
                    Logistics
                  </p>
                  <p className="mt-0.5 text-[9px] lg:text-[10px] tracking-[0.08em] uppercase text-white/88 leading-snug">
                    Delivering Progress
                    <br />
                    Every Step of the Way
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary vertical architectural message */}
            <p
              className="hidden xl:block absolute -right-0.5 top-10 font-heading text-[9px] font-bold tracking-[0.38em] uppercase text-white/30"
              style={{ writingMode: "vertical-rl" }}
              aria-hidden
            >
              Spaces People Build Brighter Lives In
            </p>
          </div>
        </div>

        {/* ========== MOBILE — intentional stack (same story) ========== */}
        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[10px] font-bold tracking-[0.28em] uppercase text-tamay-accent">
              Tamay Enterprises
            </p>
            <span className="h-px w-8 bg-tamay-accent/80" aria-hidden />
          </div>

          <h1 className="mt-3 font-heading text-[1.9rem] font-semibold leading-[1.1] text-balance">
            <span className="text-white">One Company.</span>
            <br />
            <span className="text-tamay-accent">Complete Solutions.</span>
          </h1>

          <p className="mt-3.5 text-[13px] text-white/80 leading-relaxed">
            Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
            with confidence.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href="#our-services"
              className="inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-5 py-2.5 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full"
            >
              Explore Our Services
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={sitePath("/online-appointments")}
              className="inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-5 py-2.5 transition-colors text-center border border-white/80 text-white hover:bg-white/10 w-full"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Dominant team image */}
          <div className="relative mt-6 aspect-[16/10] overflow-hidden ring-1 ring-[#c9a227]/40">
            <Image
              src={TEAM_SRC}
              alt="Tamay Enterprises team reviewing project plans together in a premium home"
              fill
              className="object-cover object-[center_30%]"
              sizes="100vw"
              priority
            />
          </div>

          {/* Compact division navigation */}
          <div className="mt-5 -mx-4 px-4 overflow-x-auto scrollbar-hide">
            <ul className="flex gap-2 min-w-max list-none m-0 p-0">
              {PILLARS.map((pillar) => (
                <li key={pillar.label}>
                  <Link
                    href={sitePath(pillar.href)}
                    className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-3 py-2.5"
                  >
                    <PillarIcon type={pillar.icon} />
                    <span>
                      <span className="block font-heading text-[11px] font-semibold text-white">{pillar.label}</span>
                      <span className="block text-[9px] font-semibold tracking-[0.1em] uppercase text-white/55">
                        {pillar.support}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RE then Logistics stacked */}
          <div className="mt-4 space-y-3">
            <div className="relative aspect-[16/10] overflow-hidden ring-1 ring-[#c9a227]/55">
              <Image
                src={REAL_ESTATE_SRC}
                alt="Premium modern home at blue hour representing Tamay Real Estate"
                fill
                className="object-cover object-[70%_center]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-heading text-[11px] font-bold tracking-[0.14em] uppercase text-white">Real Estate</p>
                <p className="mt-0.5 text-[10px] tracking-[0.08em] uppercase text-white/88">
                  Properties for a Brighter Tomorrow
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden ring-1 ring-white/15">
              <Image
                src={LOGISTICS_SRC}
                alt="Tamay-branded logistics van and team member with delivery materials"
                fill
                className="object-cover object-[55%_center]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-heading text-[11px] font-bold tracking-[0.14em] uppercase text-white">Logistics</p>
                <p className="mt-0.5 text-[10px] tracking-[0.08em] uppercase text-white/88">
                  Delivering Progress Every Step of the Way
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-tamay-accent/55" aria-hidden />
            <p className="font-heading text-[10px] font-bold tracking-[0.18em] uppercase text-tamay-accent/90">
              From Our Family to Yours
            </p>
            <span className="h-px w-8 bg-tamay-accent/55" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
