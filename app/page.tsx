import BrandRevealV2 from "@/components/intro/BrandRevealV2";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyKangiten from "@/components/home/WhyKangiten";
import Process from "@/components/home/Process";
import FeaturedSolutions from "@/components/home/FeaturedSolutions";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <BrandRevealV2 />

      <Hero />

      <Services />

      <WhyKangiten />

      <Process />

      <FeaturedSolutions />

      <FAQ />

      <CTA />
    </>
  );
}