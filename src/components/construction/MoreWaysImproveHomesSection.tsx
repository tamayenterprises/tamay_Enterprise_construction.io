import { OpenLiveChatButton } from "@/components/layout/OpenLiveChatButton";
import { SitePhoto } from "@/components/images/SitePhoto";

const MORE_WAY_CATEGORIES = [
  {
    title: "Exterior Upgrades",
    body: "Siding, trim, and finishes that boost curb appeal and protect for years to come.",
    icon: ExteriorIcon,
  },
  {
    title: "Windows & Doors",
    body: "Energy-efficient windows and quality doors for comfort, security, and style.",
    icon: WindowIcon,
  },
  {
    title: "Decks & Outdoor Living",
    body: "Custom decks and outdoor spaces designed for relaxation and everyday living.",
    icon: DeckIcon,
  },
  {
    title: "Painting & Finishes",
    body: "Interior and exterior painting with meticulous prep and a polished finish.",
    icon: PaintIcon,
  },
  {
    title: "Repairs & Maintenance",
    body: "Reliable repairs and preventive work that help keep your home in top shape.",
    icon: RepairIcon,
  },
] as const;

const primaryCtaClass =
  "inline-flex items-center justify-center min-h-10 font-semibold text-xs sm:text-sm tracking-wide px-5 py-2.5 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-white";

const outlineCtaClass =
  "inline-flex items-center justify-center min-h-10 font-semibold text-xs sm:text-sm tracking-wide px-5 py-2.5 transition-colors text-center border-2 border-tamay-primary text-tamay-primary hover:bg-tamay-primary hover:text-white";

function ExteriorIcon() {
  return (
    <svg className="h-5 w-5 text-tamay-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20V10l8-6 8 6v10M9 20v-6h6v6" />
    </svg>
  );
}

function WindowIcon() {
  return (
    <svg className="h-5 w-5 text-tamay-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 4h14v16H5V4zm7 0v16M5 12h14" />
    </svg>
  );
}

function DeckIcon() {
  return (
    <svg className="h-5 w-5 text-tamay-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14h16M6 14v6M18 14v6M8 10h8M4 18h16" />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg className="h-5 w-5 text-tamay-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 4h10l4 4v4H9L5 8V4zm4 8v3a3 3 0 1 1-6 0v-1" />
    </svg>
  );
}

function RepairIcon() {
  return (
    <svg className="h-5 w-5 text-tamay-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 7a4 4 0 0 0 5.7 5.7L12 20.4 3.6 12 11.3 4.3A4 4 0 0 0 14 7z" />
    </svg>
  );
}

function SplitPhoto({
  slot,
  alt,
  objectPosition,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 58vw",
}: {
  slot: string;
  alt: string;
  objectPosition: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`relative w-full h-full min-h-0 ${className}`}>
      <div className="relative w-full overflow-hidden shadow-sm ring-1 ring-black/5 aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[400px] rounded-tl-[4.5rem] sm:rounded-tl-[6.5rem] lg:rounded-tl-[8.5rem] rounded-br-[1.5rem] sm:rounded-br-[2rem] rounded-tr-none rounded-bl-none">
        <SitePhoto slot={slot} alt={alt} className={`object-cover ${objectPosition}`} sizes={sizes} />
      </div>
    </figure>
  );
}

function ServiceList({ className = "" }: { className?: string }) {
  return (
    <ul id="more-ways-categories" className={`divide-y divide-gray-200/80 border-y border-gray-200/80 scroll-mt-24 ${className}`}>
      {MORE_WAY_CATEGORIES.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="flex items-start gap-2.5 py-2.5 sm:py-3">
            <Icon />
            <span className="min-w-0">
              <span className="block font-heading text-tamay-primary text-sm font-semibold leading-snug">{item.title}</span>
              <span className="mt-0.5 block text-[12px] sm:text-[13px] text-gray-600 leading-snug">{item.body}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * “More Ways We Improve Homes”.
 * Desktop: content left / house image center / services right.
 */
export function MoreWaysImproveHomesSection() {
  return (
    <section id="construction-services" className="bg-[#faf8f5] border-b border-gray-200/60 scroll-mt-24">
      {/* More Ways — desktop 3-zone; mobile stacked */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16">
        {/* Desktop: left content | center image | right services */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.24fr)_minmax(0,0.52fr)_minmax(0,0.24fr)] lg:gap-5 xl:gap-6 lg:items-stretch">
          <div className="min-w-0 flex flex-col justify-center">
            <p className="text-tamay-accent font-heading font-bold tracking-[0.16em] uppercase text-[11px] sm:text-xs">
              Tamay Enterprises Construction
            </p>
            <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />
            <h2 className="mt-3 font-heading text-[1.65rem] xl:text-[1.9rem] text-tamay-primary font-semibold leading-[1.12] text-balance">
              More Ways We Improve Homes
            </h2>
            <p className="mt-3 text-gray-600 text-sm leading-snug">
              Thoughtful improvements that elevate comfort, enhance durability, and bring lasting beauty to every part of
              your home.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="#more-ways-categories" className={`${primaryCtaClass} w-full`}>
                Explore Our Services
              </a>
              <OpenLiveChatButton className={`${outlineCtaClass} w-full`}>Talk to Our Team</OpenLiveChatButton>
            </div>
          </div>

          <SplitPhoto
            slot="construction.approvedMoreWays"
            alt="Premium home exterior upgrades including siding, trim, windows, doors, and outdoor living details"
            objectPosition="object-[42%_58%]"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />

          <div className="min-w-0 flex flex-col justify-center">
            <ServiceList />
          </div>
        </div>

        {/* Mobile / tablet stack */}
        <div className="lg:hidden">
          <p className="text-tamay-accent font-heading font-bold tracking-[0.16em] uppercase text-[11px] sm:text-xs">
            Tamay Enterprises Construction
          </p>
          <div className="mt-2 h-px w-10 bg-tamay-accent/70" aria-hidden />
          <h2 className="mt-3 font-heading text-[1.65rem] sm:text-[1.85rem] text-tamay-primary font-semibold leading-[1.12] text-balance">
            More Ways We Improve Homes
          </h2>
          <p className="mt-3 text-gray-600 text-sm leading-snug max-w-md">
            Thoughtful improvements that elevate comfort, enhance durability, and bring lasting beauty to every part of
            your home.
          </p>

          <SplitPhoto
            className="mt-5"
            slot="construction.approvedMoreWays"
            alt="Premium home exterior upgrades including siding, trim, windows, doors, and outdoor living details"
            objectPosition="object-[42%_58%]"
          />

          <ServiceList className="mt-6" />

          <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5">
            <a href="#more-ways-categories" className={`${primaryCtaClass} w-full sm:w-auto`}>
              Explore Our Services
            </a>
            <OpenLiveChatButton className={`${outlineCtaClass} w-full sm:w-auto`}>Talk to Our Team</OpenLiveChatButton>
          </div>
        </div>
      </div>
    </section>
  );
}
