"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SpecialistBio() {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      id="specialist-section" 
      className="relative w-full bg-white px-6 py-24 md:py-36 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      {/* Blurred Ambient Backdrop */}
      <div className="absolute top-1/3 right-10 -z-10 h-72 w-72 rounded-full bg-zinc-50/50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio Details (7/12 width) */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                Meet Your Specialist
              </span>
              <h2 className="text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl leading-[1.15]">
                Dr. Elena Vance, MD
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-zinc-600 font-light max-w-xl">
              With over 10 years of pioneering experience in Regenerative Medicine, Dr. Vance has dedicated her career to advanced cellular repair and non-surgical aesthetic tissue healing.
            </p>
            
            <p className="text-zinc-600 font-light leading-relaxed max-w-xl">
              Her clinical protocols focus on bridging molecular biology with cosmetic longevity, enabling patients to unlock innate healing pathways and achieve natural-looking, structurally restored skin and hair. She has authored multiple papers on exosome-mediated signaling and lectures internationally on cellular therapies.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100 max-w-md">
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  Specialty
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-800">
                  Regenerative Aesthetics
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  Experience
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-800">
                  10+ Years Clinical Practice
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Headshot (5/12 width) */}
          <motion.div 
            className="relative w-full lg:col-span-5 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative aspect-[4/5] w-full max-w-md">
              {/* Elegant thin border accent behind headshot */}
              <div className="absolute -inset-4 rounded-sm border border-zinc-100 translate-x-2 translate-y-2 pointer-events-none -z-10" />
              
              {/* Image Container with clipping, background, and shadow */}
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-zinc-50 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                  alt="Dr. Elena Vance, MD - Regenerative Specialist"
                  fill
                  sizes="(max-w-7xl) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
