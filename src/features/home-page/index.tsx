import React from "react";
import HeroSection from "./hero-section";
import ProjectsList from "./projects-list";
import PricingSection from "./pricing-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ProjectsList />

      <PricingSection />
    </>
  );
}
