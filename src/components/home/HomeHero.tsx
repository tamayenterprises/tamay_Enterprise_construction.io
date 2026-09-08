import Image from "next/image";
import Link from "next/link";
import { sitePath } from "@/lib/paths";

const NAVY = "#0b1628";

/** Existing approved clean assets — do not replace */
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

/** Subtle bottom-only caption scrim — does not wash the photo. */
function CaptionScrim() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]"
      aria-hidden
      style={{
        background: "linear-gradient(to top, rgba(8,14,26,0.62) 0%, rgba(8,14,26,0.22) 58%, transparent 100%)",
      }}
    />
  );
}

/**
 * Home Hero refinement — larger right visuals, tighter left rhythm, same approved assets.
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }} aria-labelledby="home-hero-heading">
      {/* ========== DESKTOP / TABLET ========== */}
      <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-5 xl:gap-6 max-w-[1600px] mx-auto pl-5 lg:pl-8 xl:pl-10 pr-4 lg:pr-5 xl:pr-6 pt-7 lg:pt-8 pb-5 lg:pb-6 items-start">
        {/* LEFT — compact vertical rhythm (no mt-auto stretch) */}
        <div className="relative z-10 flex flex-col min-w-0 pr-0 lg:pr-1 pt-0.5">
          <div className="flex items-center gap-3">
            <p className="font-heading text-[11px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-tamay-accent">
              Tamay Enterprises
            </p>
            <span className="h-px w-12 lg:w-14 bg-tamay-accent/80" aria-hidden />
          </div>

          <h1
            id="home-hero-heading"
            className="mt-3.5 lg:mt-4 font-heading normal-case text-[2.85rem] lg:text-[3.45rem] xl:text-[3.85rem] font-normal leading-[1.06] tracking-normal"
          >
            <span className="text-white">One Company.</span>
            <br />
            <span className="text-tamay-accent whitespace-nowrap">Complete Solutions.</span>
          </h1>

          <p className="mt-3.5 lg:mt-4 text-[15px] lg:text-[17px] text-white/90 leading-[1.7] max-w-[24.5rem] lg:max-w-[26.5rem]">
            Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward
            with confidence.
          </p>

          <div className="mt-5 lg:mt-6 flex flex-row flex-wrap gap-3">
            <Link
              href="#our-services"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 font-semibold text-[15px] tracking-wide bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
            >
              Explore Our Services
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={sitePath("/online-appointments")}
              className="inline-flex items-center justify-center h-12 px-7 font-semibold text-[15px] tracking-wide border border-white/80 text-white hover:bg-white/[0.06] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation
            </Link>
          </div>

          <ul className="mt-6 lg:mt-7 flex items-start list-none m-0 p-0">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.label}
                className={`min-w-0 flex-1 ${
                  index > 0 ? "border-l border-tamay-accent/35 pl-3.5 lg:pl-4" : "pr-3.5 lg:pr-4"
                }`}
              >
                <Link href={sitePath(pillar.href)} className="group block">
                  <PillarIcon type={pillar.icon} />
                  <p className="mt-2 font-heading text-[13px] lg:text-[15px] font-semibold uppercase tracking-[0.05em] text-white group-hover:text-tamay-accent transition-colors leading-snug">
                    {pillar.label}
                  </p>
                  <p className="mt-1 text-[10px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-white/75 leading-snug">
                    {pillar.support}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 lg:mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-tamay-accent/65" aria-hidden />
            <p className="font-heading text-[10px] lg:text-[11px] font-semibold tracking-[0.22em] uppercase text-tamay-accent/95">
              From Our Family to Yours
            </p>
            <span className="h-px w-8 bg-tamay-accent/65" aria-hidden />
          </div>
        </div>

        {/* RIGHT — dominant visual plane (~57–58%) */}
        <div className="relative min-w-0 grid grid-cols-[minmax(0,1fr)_3.5rem] xl:grid-cols-[minmax(0,1fr)_4rem] gap-2 items-stretch self-stretch">
          <div
            className="min-w-0 grid gap-2 h-full"
            style={{ gridTemplateRows: "minmax(0,1.95fr) minmax(0,1fr)" }}
          >
            {/* Team ~64–68% of right height */}
            <div className="relative overflow-hidden min-h-[340px] lg:min-h-[400px] xl:min-h-[460px]">
              <Image
                src={TEAM_SRC}
                alt="Tamay Enterprises team reviewing project plans together in a premium home"
                fill
                className="object-cover object-[center_38%]"
                sizes="(max-width: 1024px) 60vw, 55vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-px bg-tamay-accent/35"
                aria-hidden
              />
            </div>

            {/* Lower row ~32–36% — RE | Logistics with live captions */}
            <div className="grid grid-cols-2 gap-2 min-h-[200px] lg:min-h-[230px] xl:min-h-[250px]">
              <div className="relative overflow-hidden min-h-[200px]">
                <Image
                  src={REAL_ESTATE_SRC}
                  alt="Premium modern home at blue hour representing Tamay Real Estate"
                  fill
                  className="object-cover object-[center_center]"
                  sizes="(max-width: 1024px) 30vw, 27vw"
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
              </div>

              <div className="relative overflow-hidden min-h-[200px]">
                <Image
                  src={LOGISTICS_SRC}
                  alt="Tamay-branded logistics van and team member with delivery materials"
                  fill
                  className="object-cover object-[40%_center]"
                  sizes="(max-width: 1024px) 30vw, 27vw"
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

          {/* Decorative strip — readable, outside faces */}
          <div
            className="hidden lg:flex flex-col justify-start items-center gap-2 pt-4 pointer-events-none"
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

      {/* ========== MOBILE — intentional stack ========== */}
      <div className="md:hidden px-4 pt-7 pb-7">
        <div className="flex items-center gap-3">
          <p className="font-heading text-[10px] font-semibold tracking-[0.28em] uppercase text-tamay-accent">
            Tamay Enterprises
          </p>
          <span className="h-px w-9 bg-tamay-accent/80" aria-hidden />
        </div>

        <h1 className="mt-3 font-heading normal-case text-[2.15rem] sm:text-[2.4rem] font-normal leading-[1.08] tracking-normal">
          <span className="text-white">One Company.</span>
          <br />
          <span className="text-tamay-accent">Complete Solutions.</span>
        </h1>

        <p className="mt-3.5 text-[15px] text-white/90 leading-[1.65]">
          Real Estate, Construction, and Logistics — coordinated to help you buy, build, improve, and move forward with
          confidence.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <Link
            href="#our-services"
            className="inline-flex items-center justify-center gap-2 min-h-12 font-semibold text-[15px] tracking-wide px-5 bg-tamay-accent hover:bg-tamay-accent-hover text-[#0b1628] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent"
          >
            Explore Our Services
            <span aria-hidden>→</span>
          </Link>
          <Link
            href={sitePath("/online-appointments")}
            className="inline-flex items-center justify-center min-h-12 font-semibold text-[15px] tracking-wide px-5 border border-white/80 text-white hover:bg-white/[0.06] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="relative mt-5 aspect-[16/10] overflow-hidden">
          <Image
            src={TEAM_SRC}
            alt="Tamay Enterprises team reviewing project plans together in a premium home"
            fill
            className="object-cover object-[center_38%]"
            sizes="100vw"
            priority
          />
        </div>

        {/* Horizontally scrollable division chips — readable & tappable */}
        <div className="mt-5 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-2.5 min-w-max list-none m-0 p-0">
            {PILLARS.map((pillar) => (
              <li key={pillar.label}>
                <Link
                  href={sitePath(pillar.href)}
                  className="inline-flex items-center gap-2.5 border border-tamay-accent/30 px-3.5 py-2.5"
                >
                  <PillarIcon type={pillar.icon} />
                  <span>
                    <span className="block font-heading text-[12px] font-semibold uppercase tracking-[0.04em] text-white">
                      {pillar.label}
                    </span>
                    <span className="block mt-0.5 text-[9px] font-semibold tracking-[0.1em] uppercase text-white/70">
                      {pillar.support}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 space-y-3">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={REAL_ESTATE_SRC}
              alt="Premium modern home at blue hour representing Tamay Real Estate"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <CaptionScrim />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-heading text-[11px] font-bold tracking-[0.16em] uppercase text-tamay-accent">
                Real Estate
              </p>
              <p className="mt-1 text-[10px] font-medium tracking-[0.08em] uppercase text-white">
                Properties for a Brighter Tomorrow
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={LOGISTICS_SRC}
              alt="Tamay-branded logistics van and team member with delivery materials"
              fill
              className="object-cover object-[40%_center]"
              sizes="100vw"
            />
            <CaptionScrim />
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

        <div className="mt-5 flex items-center justify-center gap-3">
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
