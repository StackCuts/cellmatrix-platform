"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ClinicalSpace {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string[];
}

interface PatientOutcome {
  id: string;
  patient: string;
  protocol: string;
  observations: string[];
  beforeImage: string;
  afterImage: string;
  durationLabel: string;
}

const spaces: ClinicalSpace[] = [
  {
    id: "space-1",
    name: "ISO-Class 5 Clean Room",
    description: "Our sterile processing environment engineered for the ultra-purification of cellular exosomes.",
    image: "/assets/clean_room.webp",
    details: ["99.99% particulate filtration", "Positive air pressure cascade", "Active HEPA containment"]
  },
  {
    id: "space-2",
    name: "Dermal Treatment Suite 04",
    description: "Designed for luxury patient comfort and sterile clinical precision during exosome treatment applications.",
    image: "/assets/treatment_suite.webp",
    details: ["Soft-ambient medical lighting", "Zero-gravity treatment chair", "Integrated skin telemetry screens"]
  },
  {
    id: "space-3",
    name: "Exosome Extraction Laboratory",
    description: "Where advanced molecular separation occurs to isolate high-potency regenerative proteins.",
    image: "/assets/extraction_lab.webp",
    details: ["Ultracentrifugation isolation", "Spectrometric quality control", "Cryopreservation at -80°C"]
  }
];

const outcomes: PatientOutcome[] = [
  {
    id: "outcome-1",
    patient: "Patient A.R. — Age 44",
    protocol: "Dermal Matrix Protocol",
    durationLabel: "8 Weeks Post-Treatment",
    observations: [
      "+38% measured collagen density",
      "Visible periorbital fine line reduction",
      "Restored dermal elasticity and glow"
    ],
    beforeImage: "/assets/patient_1_before.webp",
    afterImage: "/assets/patient_1_after.webp"
  },
  {
    id: "outcome-2",
    patient: "Patient M.K. — Age 51",
    protocol: "Follicular Matrix Protocol",
    durationLabel: "12 Weeks Post-Treatment",
    observations: [
      "Significant hair density increase",
      "Visible crown coverage restoration",
      "Strengthened follicular anchorages"
    ],
    beforeImage: "/assets/patient_2_before.webp",
    afterImage: "/assets/patient_2_after.webp"
  },
  {
    id: "outcome-3",
    patient: "Patient S.J. — Age 38",
    protocol: "Dual Matrix Protocol",
    durationLabel: "10 Weeks Post-Treatment",
    observations: [
      "Comprehensive skin tone normalization",
      "Noticeable reduction in dermal redness",
      "Restored skin-barrier hydration metrics"
    ],
    beforeImage: "/assets/patient_3_before.webp",
    afterImage: "/assets/patient_3_after.webp"
  }
];

export default function CarouselDisplayZone() {
  const [activeTab, setActiveTab] = useState<"spaces" | "outcomes">("spaces");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 32
        : 400;

      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.4, ease: "easeIn" as const } }
  };

  return (
    <section 
      id="carousel-display-zone" 
      className="relative w-full overflow-hidden bg-zinc-50 border-y border-zinc-100 py-24 md:py-36 px-6 lg:px-16"
    >
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Ambient backdrop for layout depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-zinc-200/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="space-y-16">
          
          {/* Header & Toggle Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                Clinical Evidence
              </span>
              <h2 className="font-serif text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl leading-[1.15]">
                Visual Proof of Regenerative Excellence
              </h2>
              <p className="text-sm text-zinc-600 font-light leading-relaxed font-sans">
                Explore our state-of-the-art biological suites and the actual, unretouched transformations achieved through exosome matrix protocols.
              </p>
            </div>

            {/* Slider Switcher & Nav Control Group */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Tab Selector */}
              <div className="bg-white border border-zinc-200/60 p-1.5 rounded-full flex relative shadow-sm">
                <button
                  onClick={() => setActiveTab("spaces")}
                  className={`relative px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full z-10 transition-colors duration-300 cursor-pointer ${
                    activeTab === "spaces" ? "text-white" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {activeTab === "spaces" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  Clinical Spaces
                </button>
                <button
                  onClick={() => setActiveTab("outcomes")}
                  className={`relative px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full z-10 transition-colors duration-300 cursor-pointer ${
                    activeTab === "outcomes" ? "text-white" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {activeTab === "outcomes" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  Patient Outcomes
                </button>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-sm cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel View Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === "spaces" ? (
                <motion.div
                  key="spaces-carousel"
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  ref={scrollContainerRef}
                  className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 select-none cursor-grab active:cursor-grabbing"
                >
                  {spaces.map((space) => (
                    <div
                      key={space.id}
                      className="flex-shrink-0 w-[290px] sm:w-[380px] md:w-[420px] bg-white border border-zinc-200/50 rounded-sm overflow-hidden snap-start shadow-sm hover:shadow-md transition-all duration-500 flex flex-col group"
                    >
                      {/* Image Frame */}
                      <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
                        <Image
                          src={space.image}
                          alt={space.name}
                          fill
                          sizes="(max-w-768px) 300px, 450px"
                          className="object-cover transition-transform duration-700 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      
                      {/* Content Frame */}
                      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                          <h3 className="font-serif text-xl font-light text-zinc-900">
                            {space.name}
                          </h3>
                          <p className="text-xs text-zinc-500 font-light leading-relaxed">
                            {space.description}
                          </p>
                        </div>

                        {/* Specs checklist */}
                        <div className="pt-4 border-t border-zinc-100 space-y-2">
                          {space.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-wider">
                              <Check className="h-3 w-3 text-zinc-400 stroke-[2.5]" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="outcomes-carousel"
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  ref={scrollContainerRef}
                  className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 select-none cursor-grab active:cursor-grabbing"
                >
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome.id}
                      className="flex-shrink-0 w-[310px] sm:w-[500px] md:w-[560px] bg-white border border-zinc-200/50 rounded-sm overflow-hidden snap-start shadow-sm hover:shadow-md transition-all duration-500 flex flex-col p-6 md:p-8 space-y-6"
                    >
                      {/* Before / After Dual Columns */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Before Column */}
                        <div className="space-y-2">
                          <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-sm bg-zinc-100 border border-zinc-150">
                            <Image
                              src={outcome.beforeImage}
                              alt="Before treatment"
                              fill
                              sizes="(max-w-768px) 150px, 250px"
                              className="object-cover transition-transform duration-700 hover:scale-102"
                            />
                            <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/55 backdrop-blur-md rounded-sm border border-white/10 text-[9px] font-semibold text-white tracking-wider uppercase">
                              Week 0
                            </div>
                          </div>
                          <span className="block text-[10px] font-medium text-zinc-400 text-center uppercase tracking-widest">
                            Baseline (Before)
                          </span>
                        </div>

                        {/* After Column */}
                        <div className="space-y-2">
                          <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-sm bg-zinc-100 border border-zinc-150">
                            <Image
                              src={outcome.afterImage}
                              alt="After treatment"
                              fill
                              sizes="(max-w-768px) 150px, 250px"
                              className="object-cover transition-transform duration-700 hover:scale-102"
                            />
                            <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/80 backdrop-blur-md rounded-sm border border-zinc-200 text-[9px] font-semibold text-zinc-900 tracking-wider uppercase">
                              Active Result
                            </div>
                          </div>
                          <span className="block text-[10px] font-medium text-zinc-900 text-center uppercase tracking-widest">
                            {outcome.durationLabel}
                          </span>
                        </div>
                      </div>

                      {/* Info & Metrics Column */}
                      <div className="pt-2 flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-1.5 max-w-xs">
                          <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                            {outcome.protocol}
                          </span>
                          <h3 className="font-serif text-lg font-light text-zinc-900">
                            {outcome.patient}
                          </h3>
                        </div>

                        {/* Observational list */}
                        <div className="flex-1 space-y-1.5">
                          {outcome.observations.map((obs, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 font-light leading-snug">
                              <Check className="h-3.5 w-3.5 text-zinc-500 mt-0.5 stroke-[2]" />
                              <span>{obs}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
