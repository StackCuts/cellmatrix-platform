"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultPhase {
  phase: string;
  title: string;
  description: string;
  image: string;
  timeline: string;
  points: string[];
}

const phases: ConsultPhase[] = [
  {
    phase: "PHASE 01",
    title: "Deep Cellular Mapping",
    timeline: "Baseline Assessment",
    description: "Using advanced bio-telemetry sensors, we analyze your dermal or follicular density, locating specific cellular depletion zones that require activation.",
    image: "/assets/consult_1.webp",
    points: [
      "High-resolution scalp & skin scan",
      "Identification of collagen depletion sites",
      "Custom exosome dosage calculation"
    ]
  },
  {
    phase: "PHASE 02",
    title: "Matrix Infusion",
    timeline: "Treatment Application",
    description: "Billions of ultra-pure exosome vesicles are introduced directly into the activated dermal matrix using microscopic channels, setting off immediate cell signaling.",
    image: "/assets/consult_2.webp",
    points: [
      "Painless micro-channel activation",
      "Topical delivery of 10B+ pure exosome vesicles",
      "Immediate absorption into deep tissue layers"
    ]
  },
  {
    phase: "PHASE 03",
    title: "Neo-Synthesis Activation",
    timeline: "Tissue Remodeling",
    description: "The exosome vesicles fuse with target cells, executing a biological software update that boosts collagen and hair matrix protein synthesis over the following weeks.",
    image: "/assets/consult_3.webp",
    points: [
      "Up to 690% increased collagen synthesis",
      "Continuous cellular repair and remodeling",
      "Natural-looking structural restoration"
    ]
  }
];

export default function InvisibleConsult() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % phases.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + phases.length) % phases.length);
  };

  const activePhase = phases[currentIdx];

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4, ease: "easeIn" as const } }
  };

  return (
    <section 
      id="video-section" // Keep id same so smooth scroll links aren't broken
      className="relative w-full overflow-hidden bg-iceblue px-6 py-24 md:py-36 lg:px-16"
    >
      {/* Blurred Ambient Backdrop for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="space-y-16">
          
          {/* Header block */}
          <div className="space-y-4 max-w-4xl text-center mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Clinical Methodology
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl leading-[1.15]">
              Watch: The Science of Cellular Repair
              <span className="block mt-2 font-medium text-zinc-950 font-sans">
                (The Invisible Consult)
              </span>
            </h2>
            <p className="font-sans max-w-xl mx-auto text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              Step inside our step-by-step biological methodology for cellular tissue restoration and anti-aging recovery, or download our complete <a href="/Cell_Matrix_Clinical_Protocol_Guide.pdf" download className="underline font-normal text-zinc-900 hover:text-zinc-700 transition-colors">Clinical Protocol Guide (PDF)</a>.
            </p>
          </div>

          {/* Interactive Split Grid Slide */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-zinc-200/60 p-6 sm:p-10 md:p-16 rounded-sm shadow-sm">
            
            {/* Left Column: Text description of the Active Phase */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                      {activePhase.phase} — {activePhase.timeline}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-zinc-900">
                      {activePhase.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-zinc-600 font-light leading-relaxed font-sans">
                    {activePhase.description}
                  </p>

                  <div className="space-y-2.5 pt-4">
                    {activePhase.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-zinc-700 font-light font-sans">
                        <Check className="h-4 w-4 text-zinc-500 stroke-[2.5]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows & Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-zinc-150">
                <div className="flex items-center gap-3">
                  {phases.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIdx === idx ? "w-6 bg-zinc-900" : "w-2 bg-zinc-200 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous methodology step"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 hover:scale-[1.05] active:scale-[0.95] transition-all cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next methodology step"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 hover:scale-[1.05] active:scale-[0.95] transition-all cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Slide WebP Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 shadow-xl border border-zinc-200/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activePhase.image}
                      alt={activePhase.title}
                      fill
                      sizes="(max-w-5xl) 100vw, 800px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent pointer-events-none" />
                
                {/* Visual method indicator overlay */}
                <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-[10px] font-semibold text-white tracking-widest uppercase">
                  Cellular Scan
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
