"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ComparisonMatrix() {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  } as const;

  const col1Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  } as const;

  const col2Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.1, ease: "easeInOut" },
    },
  } as const;

  return (
    <section 
      id="comparison-section" 
      className="relative w-full bg-zinc-950 px-6 py-24 md:py-36 text-zinc-100 lg:px-16 overflow-hidden"
    >
      {/* Blurred Ambient Backdrop for depth layers */}
      <div className="absolute right-10 top-1/3 -z-10 h-80 w-80 rounded-full bg-zinc-900/40 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-zinc-900/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div 
          className="mb-20 space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">
            Comparative Science
          </span>
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            Natural Rejuvenation vs. Artificial Volume
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400 font-light leading-relaxed">
            Exosomes do not hide aging; they rewrite the cellular clock. See how traditional fillers compare to native exosomal signaling.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          {/* Column 1: Traditional Fillers */}
          <motion.div 
            className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-6 sm:p-8 md:p-12 space-y-8 flex flex-col justify-between hover:border-zinc-800 transition-colors duration-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={col1Variants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: "easeInOut" as const }}
          >
            <div className="space-y-6">
              <div className="pb-6 border-b border-zinc-900 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block mb-1">
                    Traditional Approach
                  </span>
                  <h4 className="text-2xl font-light text-zinc-300">
                    Traditional Fillers
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-900/80 flex items-center justify-center text-red-400">
                  <X className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-medium text-zinc-300">Synthetic Volume</h5>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Synthetic volume. Temporarily plumps skin gaps from the outside, paralyzes muscles, and requires constant upkeep without ever repairing actual tissue health.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-900/50 space-y-2 text-xs text-zinc-500 font-mono">
              <div>• EXTERNAL INFLATION ONLY</div>
              <div>• DEGRADES IN 6-12 MONTHS</div>
              <div>• NO BIOLOGICAL TISSUE REPAIR</div>
            </div>
          </motion.div>

          {/* Column 2: Exosome Therapy */}
          <motion.div 
            className="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 md:p-12 space-y-8 ring-1 ring-zinc-800 flex flex-col justify-between hover:ring-zinc-700 transition-shadow duration-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={col2Variants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: "easeInOut" as const }}
          >
            <div className="space-y-6">
              <div className="pb-6 border-b border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-1">
                    Advanced Bio-Signal
                  </span>
                  <h4 className="text-2xl font-medium text-white">
                    Exosome Therapy
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-950">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-medium text-zinc-200">Cellular Reprogramming</h5>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Cellular reprogramming. Floods your skin with 100x more growth factors than traditional PRP, triggering your body to build its own genuine collagen and elastin.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 space-y-2 text-xs text-zinc-400 font-mono">
              <div>• GENUINE CELLULAR REMODELING</div>
              <div>• CUMULATIVE & LONG-LASTING</div>
              <div>• 100X MORE GROWTH FACTORS THAN PRP</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
