import Image from "next/image";
import Link from "next/link";
import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { IMAGES } from "@/lib/images";
import { appointmentScheduleHref } from "@/lib/onlineAppointments";
import { SITE } from "@/lib/site";

const NAVY = "#141c2b";

const COLLAGE = [
  {
    src: "/gallery/gallery-hero-kitchen.png",
    alt: "Completed premium kitchen renovation with navy island, white cabinetry, and gold accents",
    featured: true,
  },
  {
    src: "/gallery/gallery-hero-bathroom.png",
    alt: "Finished bathroom renovation with wood vanity, glass shower, and freestanding tub",
  },
  {
    src: "/gallery/photos/photo-6.png",
    alt: "Completed home exterior with board-and-batten siding, stone accents, and landscaped driveway",
  },
  {
    src: "/gallery/gallery-hero-exterior.png",
    alt: "Exterior home improvement and modern addition at dusk with illuminated patio",
  },
] as const;

const TRUST_ITEMS = [
  { title: "Family Owned", support: "Built on trust.", icon: "family" as const },
  { title: "Fully Insured", support: "Your project, protected.", icon: "shield" as const },
  { title: "Serving Connecticut", support: "Our home. Our community.", icon: "pin" as const },
  {
    title: "Quality-Focused Workmanship",
    support: "Results that last.",
    icon: "craft" as const,
  },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const className = "h-5 w-5 shrink-0 text-tamay-accent";
  if (type === "shield") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l8 4v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  if (type === "family") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
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
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16.5 9.5 4.5h5L20 16.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 12h11" />
    </svg>
  );
}

const bookCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-5 sm:px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

const chatCtaClass =
  "inline-flex items-center justify-center min-h-11 font-bold text-sm tracking-wide px-5 sm:px-6 py-3 transition-colors text-center border-2 border-white/85 text-white hover:bg-white/10 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/**
 * Gallery final conversion CTA — navy panel + project collage + warm brand band.
 */
export function GalleryFinalCta() {
  const featured = COLLAGE[0]!;
  const supporting = COLLAGE.slice(1);

  return (
    <section className="relative" aria-labelledby="gallery-final-cta-heading">
      {/* Main composition */}
      <div className="bg-[#141c2b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-8 xl:gap-10 lg:items-stretch">
            {/* Left — navy conversion panel */}
            <div className="flex flex-col min-w-0">
              <p className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-tamay-accent">
                Ready When You Are
              </p>
              <div className="mt-2 h-px w-10 bg-tamay-accent/75" aria-hidden />

              <h2
                id="gallery-final-cta-heading"
                className="mt-4 font-heading text-[1.85rem] sm:text-3xl lg:text-[2.35rem] text-white font-semibold leading-[1.12] text-balance"
              >
                Let’s Build What’s Next.
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] text-white/78 leading-relaxed max-w-lg">
                Inspired by what you’ve seen? Tell us what you’re planning and let’s talk about how we can bring it to
                life. From small updates to full renovations, we’re here to help.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <Link href={appointmentScheduleHref("construction")} className={bookCtaClass}>
                  Book a Consultation
                  <span aria-hidden>→</span>
                </Link>
                <OpenLiveChatButton className={chatCtaClass}>Chat With Our Team</OpenLiveChatButton>
              </div>

              <div className="mt-3">
                <a
                  href={SITE.estimateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 min-h-10 px-4 text-sm text-white/75 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Estimate a Small Project
                  <span aria-hidden>→</span>
                </a>
              </div>

              <ul className="mt-9 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 list-none m-0 p-0">
                {TRUST_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <TrustIcon type={item.icon} />
                    <div className="min-w-0">
                      <p className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-white">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] sm:text-[13px] text-white/65 leading-snug">{item.support}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — project collage + brand statement */}
            <div className="min-w-0 flex flex-col gap-3 sm:gap-3.5">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[16/10] bg-[#0f1520] ring-1 ring-white/10">
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {supporting.map((img) => (
                  <div
                    key={img.src}
                    className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] bg-[#0f1520] ring-1 ring-white/10"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 33vw, 15vw"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-1 sm:mt-2 rounded-xl bg-[#f4f0e8] px-5 py-5 sm:px-6 sm:py-6">
                <p
                  className="font-heading text-xl sm:text-2xl lg:text-[1.65rem] font-semibold leading-[1.2] tracking-wide"
                  style={{ color: NAVY }}
                >
                  BETTER
                  <br />
                  SPACES
                  <br />
                  <span className="text-tamay-accent">BRIGHTER</span>
                  <br />
                  <span className="text-tamay-accent">FUTURES.</span>
                </p>
                <div className="mt-4 h-px w-10 bg-tamay-accent/60" aria-hidden />
                <p className="mt-3 font-heading text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-[#141c2b]/70">
                  Real Estate <span className="text-tamay-accent/80">|</span> Construction{" "}
                  <span className="text-tamay-accent/80">|</span> Logistics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warm closing brand band — not a second site footer */}
      <div className="bg-[#f4f0e8] border-t border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
          <div className="relative mx-auto h-10 sm:h-11 w-[180px] sm:w-[210px]">
            <Image
              src={IMAGES.logo}
              alt={`${SITE.legalName} logo`}
              fill
              className="object-contain"
              sizes="210px"
              unoptimized
            />
          </div>

          <p className="mt-5 font-heading text-xl sm:text-2xl font-semibold leading-snug" style={{ color: NAVY }}>
            From Our <span className="italic text-tamay-accent">Family</span> to Yours.
          </p>

          <p className="mt-3 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#141c2b]/70">
            Real People. Real Projects. A Stronger Tomorrow.
          </p>

          <div className="mx-auto mt-4 h-px w-12 bg-tamay-accent/50" aria-hidden />

          <p className="mt-4 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-tamay-accent/90">
            Building Better Lives at Home.
          </p>
        </div>
      </div>
    </section>
  );
}
