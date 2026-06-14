import React from "react";
import HeroSection from "@/components/HeroSection";
import InvisibleConsult from "@/components/InvisibleConsult";
import TreatmentSolutions from "@/components/TreatmentSolutions";
import ProcessSequence from "@/components/ProcessSequence";
import SpecialistBio from "@/components/SpecialistBio";
import CarouselDisplayZone from "@/components/CarouselDisplayZone";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import DigitalStorefront from "@/components/DigitalStorefront";
import ReviewCarousel from "@/components/ReviewCarousel";
import LeadAcquisition from "@/components/LeadAcquisition";
import ClinicFooter from "@/components/ClinicFooter";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-200">
      {/* Editorial Navigation Header */}
      <header className="w-full border-b border-zinc-100 py-6 px-6 lg:px-16 flex items-center justify-between md:grid md:grid-cols-3 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center justify-start">
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-zinc-900">
            Cell Matrix Labs
          </span>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-10 text-[11px] font-light tracking-[0.2em] text-zinc-500 uppercase">
          <a href="#comparison-section" className="hover:text-zinc-900 transition-colors duration-300">Science</a>
          <a href="#solutions-section" className="hover:text-zinc-900 transition-colors duration-300">Solutions</a>
          <a href="#specialist-section" className="hover:text-zinc-900 transition-colors duration-300">Specialist</a>
          <a href="#reviews-section" className="hover:text-zinc-900 transition-colors duration-300">Reviews</a>
        </nav>
        <div className="flex items-center justify-end">
          <a 
            href="#lead-section" 
            className="inline-flex h-10 items-center justify-center rounded-sm bg-zinc-900 px-5 text-xs font-semibold tracking-wider text-white hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase"
          >
            Assessment
          </a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="w-full">
        <HeroSection />
        <InvisibleConsult />
        <TreatmentSolutions />
        <ProcessSequence />
        <SpecialistBio />
        <CarouselDisplayZone />
        <ComparisonMatrix />
        <DigitalStorefront />
        <ReviewCarousel />
        <LeadAcquisition />
      </main>

      {/* Clinic Footer */}
      <ClinicFooter />
    </div>
  );
}
