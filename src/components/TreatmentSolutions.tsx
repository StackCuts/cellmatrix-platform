"use client";

import React from "react";
import { Sparkles, Dna, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TreatmentSolutions() {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" as const },
    },
  };

  const card1Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" as const },
    },
  };

  const card2Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.15, ease: "easeInOut" as const },
    },
  };

  return (
    <section 
      id="solutions-section" 
      className="relative w-full bg-white px-6 py-24 md:py-36 lg:px-16 overflow-hidden"
    >
      {/* Blurred Ambient Backdrop for depth layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-zinc-50/50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div 
          className="mb-20 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            Targeted Protocols
          </span>
          <h2 className="text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl max-w-3xl leading-[1.15]">
            Precision treatment solutions designed for cellular restoration.
          </h2>
          <p className="max-w-xl text-zinc-600 font-light leading-relaxed">
            By targeting specific tissue matrices, our exosome signaling protocols stimulate your body&apos;s innate regenerative mechanism exactly where it is needed.
          </p>
        </motion.div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          
          {/* Card 1: Facial Rejuvenation (7/12 width) */}
          <motion.div 
            className="md:col-span-7 bg-iceblue p-10 md:p-12 rounded-sm flex flex-col justify-between space-y-12 shadow-sm hover:shadow-md transition-shadow duration-700 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card1Variants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" as const }}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-900 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-light text-zinc-900">
                  Advanced Facial Rejuvenation
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed max-w-lg">
                  Erases acne scarring, smooths fine lines, eliminates under-eye hollowing, and cuts post-laser recovery downtime from 7 days down to less than 24 hours.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-zinc-200/50">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    Target Indications
                  </h4>
                  <ul className="mt-2 text-sm text-zinc-600 font-light space-y-1">
                    <li>• Acne scarring & pitting</li>
                    <li>• Fine lines & creasing</li>
                    <li>• Under-eye hollowing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    Active Formulation
                  </h4>
                  <p className="mt-2 text-sm text-zinc-600 font-light">
                    5 Billion Pure Exosomes + Hyaluronic Acid Carrier
                  </p>
                </div>
              </div>

              <a 
                href="#lead-section" 
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group"
              >
                Inquire About Facial Protocol 
                <ArrowRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Scalp/Hair Restoration (5/12 width) */}
          <motion.div 
            className="md:col-span-5 bg-iceblue p-10 md:p-12 rounded-sm flex flex-col justify-between space-y-12 shadow-sm hover:shadow-md transition-shadow duration-700 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card2Variants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" as const }}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-900 shadow-sm">
                <Dna className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-light text-zinc-900">
                  Scalp & Hair Restoration
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  Awakens dormant hair follicles, reverses early to moderate hair thinning, and thickens hair shaft diameters completely painlessly—without blood draws.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-zinc-200/50">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    Target Indications
                  </h4>
                  <ul className="mt-2 text-sm text-zinc-600 font-light space-y-1">
                    <li>• Dormant follicle revival</li>
                    <li>• Early to moderate thinning</li>
                    <li>• Hair shaft miniaturization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    Active Formulation
                  </h4>
                  <p className="mt-2 text-sm text-zinc-600 font-light">
                    10 Billion Scalp-Optimized Exosomes + Biotin
                  </p>
                </div>
              </div>

              <a 
                href="#lead-section" 
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group"
              >
                Inquire About Hair Protocol 
                <ArrowRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
