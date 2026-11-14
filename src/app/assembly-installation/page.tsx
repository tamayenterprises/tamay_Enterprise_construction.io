import type { Metadata } from "next";
import { AssemblyBuiltForScaleSection } from "@/components/assembly/AssemblyBuiltForScaleSection";
import { AssemblyEstimatorSection } from "@/components/assembly/AssemblyEstimatorSection";
import { AssemblyHero } from "@/components/assembly/AssemblyHero";
import { AssemblyHowItWorksSection } from "@/components/assembly/AssemblyHowItWorksSection";
import { AssemblyServicesSection } from "@/components/assembly/AssemblyServicesSection";
import { AssemblyWhoWeSupportSection } from "@/components/assembly/AssemblyWhoWeSupportSection";
import { SiteContactSection } from "@/components/ui/SiteContactSection";
import { Button } from "@/components/ui/Button";
import { ServiceAppointmentSection } from "@/components/appointments/ServiceAppointmentSection";
import { ASSEMBLY_INTRO } from "@/lib/assemblyInstallation";
import { buildSocialMetadata } from "@/lib/socialMetadata";
import { SiteText } from "@/components/copy/SiteText";

export const metadata: Metadata = buildSocialMetadata("assembly");

export default function AssemblyInstallationPage() {
  return (
    <>
      <AssemblyHero />

      <section className="bg-[#faf8f5]" aria-labelledby="assembly-about-heading">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10 py-11 sm:py-14 lg:py-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
            <SiteText
              k="assembly.intro.eyebrow"
              as="p"
              className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-tamay-accent"
            >
              About Us
            </SiteText>
            <span className="hidden sm:block h-px w-8 bg-tamay-accent/70" aria-hidden />
          </div>
          <h2
            id="assembly-about-heading"
            className="mt-4 sm:mt-5 mx-auto max-w-[40rem] lg:max-w-[52rem] font-heading text-[1.55rem] sm:text-[2rem] lg:text-[2.35rem] font-normal leading-[1.18] text-[#0b1628] text-balance"
          >
            <SiteText k="assembly.intro.heading">{ASSEMBLY_INTRO.heading}</SiteText>
          </h2>
          <div className="mt-5 sm:mt-6 mx-auto max-w-[40rem] lg:max-w-[44rem] space-y-4 text-[15px] sm:text-base text-[#0b1628]/82 leading-[1.7]">
            {ASSEMBLY_INTRO.paragraphs.map((p, index) => (
              <SiteText k={`assembly.intro.body${index + 1}`} as="p" key={`assembly.intro.body${index + 1}`} multiline>
                {p}
              </SiteText>
            ))}
          </div>
          <div className="mt-7 sm:mt-8">
            <Button href="#contact" variant="accent">
              <SiteText k="assembly.intro.cta">Partner With Our Team</SiteText>
            </Button>
          </div>
        </div>
      </section>

      <AssemblyWhoWeSupportSection />

      <AssemblyServicesSection />

      <AssemblyEstimatorSection />

      <AssemblyBuiltForScaleSection />

      <AssemblyHowItWorksSection />

      <ServiceAppointmentSection serviceId="assembly-installation" />

      <SiteContactSection />
    </>
  );
}
