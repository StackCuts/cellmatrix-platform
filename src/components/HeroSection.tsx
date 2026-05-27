"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeInOut" as const },
    },
  };

  return (
    <section 
      id="hero-section" 
      className="relative w-full overflow-hidden bg-white px-6 pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 lg:px-16 flex items-center min-h-[calc(100vh-90px)]"
    >
      {/* Blurred Ambient Backdrops for Depth Layers */}
      <div className="absolute top-12 left-1/4 -z-10 h-72 w-72 rounded-full bg-zinc-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 -z-10 h-80 w-80 rounded-full bg-zinc-200/40 blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl relative">
        {/* Asymmetric 12-column grid layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Split (7/12 width on large screens) */}
          <motion.div 
            className="flex flex-col justify-center space-y-8 lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.span 
                className="inline-block text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase"
                variants={itemVariants}
              >
                The New Era of Bio-Regenerative Longevity
              </motion.span>
              <motion.h1 
                className="text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl md:text-6xl leading-[1.25]"
                variants={itemVariants}
              >
                Don&apos;t just hide aging skin.
                <span className="block mt-2 font-medium text-zinc-950">
                  Rewrite its cellular code.
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="max-w-xl text-lg leading-relaxed text-zinc-600 font-light"
              variants={itemVariants}
            >
              Experience Exosome Therapy—the ultimate breakthrough in non-surgical cellular repair. 
              Turn back the clock on aging skin, erase deep texture, and accelerate your body’s natural 
              healing systems by up to 300% with virtually zero downtime.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#lead-section"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-zinc-900 px-8 text-sm font-medium text-white transition-colors duration-300 hover:bg-zinc-800 tracking-wider uppercase shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" as const }}
              >
                Request a Cellular Consultation
              </motion.a>
              <motion.a
                href="#comparison-section"
                className="inline-flex h-14 items-center justify-center rounded-sm border border-zinc-200 bg-transparent px-8 text-sm font-medium text-zinc-800 transition-colors duration-300 hover:bg-zinc-50 hover:text-zinc-950 tracking-wider uppercase"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" as const }}
              >
                Explore the Science ↓
              </motion.a>
            </motion.div>

            {/* Micro details / Social proof / Clinical stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-12 border-t border-zinc-100"
              variants={itemVariants}
            >
              <div>
                <p className="text-3xl font-light text-zinc-900">300%</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Healing Acceleration</p>
              </div>
              <div>
                <p className="text-3xl font-light text-zinc-900">10B+</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Exosomes/ml</p>
              </div>
              <div>
                <p className="text-3xl font-light text-zinc-900">0.0%</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Downtime</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Luxury Editorial Image (5/12 width on large screens) */}
          <motion.div 
            className="relative w-full lg:col-span-5 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            {/* Design accents: behind the image */}
            <div className="absolute -inset-4 rounded-sm border border-zinc-100/80 -z-10 translate-x-2 translate-y-2 pointer-events-none" />
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm bg-zinc-50 shadow-2xl">
              <Image
                src="/cell.jpeg"
                alt="Luxury cellular science representing bio-regenerative longevity"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
