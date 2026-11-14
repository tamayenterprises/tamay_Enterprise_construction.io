import Image from "next/image";
import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";

const HERO_IMAGE_SRC = "/reviews/reviews-hero-consultation.jpg";

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 min-h-11 font-bold text-sm tracking-wide px-6 py-3 transition-colors text-center bg-tamay-accent hover:bg-tamay-accent-hover text-[#141c2b] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tamay-accent";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 rounded-full bg-white p-[1px]" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

/** Reviews Hero — same navy/gold split system as the Assembly, Logistics, and Construction heroes. */
export function ReviewsHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#141c2b] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:flex [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:items-center [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:min-h-[clamp(420px,calc(100svh-81px),600px)]"
      aria-labelledby="reviews-hero-heading"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:static [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:py-12 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:py-14">
        <div className="absolute z-10 top-6 sm:top-8 inset-x-4 sm:inset-x-6 flex items-center gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden">
          <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227] [text-shadow:0_1px_10px_rgba(20,28,43,0.9)]">
            Client Reviews
          </p>
          <span className="h-px w-10 bg-[#c9a227]/70" aria-hidden />
        </div>

        <div
          className="relative -z-10 -mx-4 sm:-mx-6 h-[min(100vw,26rem)] sm:h-[32rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:absolute [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:inset-y-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:right-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:m-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:h-full [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:aspect-[4/3] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:w-auto [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[62%] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[58%] [@media(min-width:80rem)_and_(min-aspect-ratio:1/1)]:max-w-[60%] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_10%,black_28%)]"
          aria-hidden
        >
          <Image
            src={HERO_IMAGE_SRC}
            alt=""
            fill
            className="object-cover object-[50%_20%] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:object-[50%_30%]"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          <div
            className="absolute inset-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:hidden"
            style={{
              background: [
                "linear-gradient(180deg, #141c2b 0%, rgba(20,28,43,0.55) 7%, rgba(20,28,43,0) 15%, rgba(20,28,43,0) 52%, rgba(20,28,43,0.55) 68%, rgba(20,28,43,0.9) 84%, #141c2b 97%)",
                "linear-gradient(90deg, rgba(20,28,43,0.45) 0%, rgba(20,28,43,0) 18%, rgba(20,28,43,0) 82%, rgba(20,28,43,0.45) 100%)",
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

        <div className="relative -mt-[5.5rem] sm:-mt-[7rem] max-w-xl [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-0 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:max-w-[26rem] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:max-w-[30rem]">
          <div className="hidden items-center gap-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:flex">
            <p className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#c9a227]">
              Client Reviews
            </p>
            <span className="h-px w-10 bg-[#c9a227]/70" aria-hidden />
          </div>

          <h1
            id="reviews-hero-heading"
            className="font-heading text-[1.9rem] sm:text-[2.3rem] lg:text-[2.5rem] text-white font-semibold leading-[1.1] [text-shadow:0_2px_18px_rgba(20,28,43,0.55)] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-3 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:text-[2.1rem] [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:[text-shadow:none] [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-4 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:text-[2.5rem]"
          >
            Real Clients.
            <br />
            <span className="text-[#c9a227]">Real Experiences.</span>
          </h1>

          <p className="mt-3 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-4 text-sm sm:text-[15px] text-white/85 leading-relaxed max-w-md [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:text-sm [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:text-[15px]">
            See what homeowners, property owners, and clients have shared about working with Tamay Enterprises.
          </p>

          <div className="mt-6 [@media(min-width:48rem)_and_(min-aspect-ratio:1/1)]:mt-6 [@media(min-width:64rem)_and_(min-aspect-ratio:1/1)]:mt-7">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={primaryCtaClass}>
              <GoogleIcon />
              See Our Google Reviews
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
