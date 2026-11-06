import { Hero } from "@/components/sections/Hero";
import { WhatWeEngineer } from "@/components/sections/WhatWeEngineer";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TransformationOutcomes } from "@/components/sections/TransformationOutcomes";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechnicalCredibility } from "@/components/sections/TechnicalCredibility";
import { AgencySection } from "@/components/sections/AgencySection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeEngineer />
      <IndustriesSection />
      <TransformationOutcomes />
      <SelectedWork />
      <TechnicalCredibility />
      <AgencySection />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
