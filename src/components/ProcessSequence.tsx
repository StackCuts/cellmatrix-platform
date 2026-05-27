"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProcessSequence() {
  const steps = [
    {
      number: "01",
      title: "Micro-Channel Activation",
      timeline: "Step 1",
      desc: "We create microscopic, painless channels in the skin or scalp using premium microneedling or gentle laser energy.",
    },
    {
      number: "02",
      title: "The Exosome Infusion",
      timeline: "Step 2",
      desc: "Billions of chilled, ultra-pure exosome vesicles are applied topically, sinking directly into the open dermal matrix.",
    },
    {
      number: "03",
      title: "Tissue Remodeling",
      timeline: "Step 3",
      desc: "The exosomes merge with your cells, delivering a genetic software update that boosts your natural collagen production by up to 690%.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  } as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  } as const;

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  } as const;

  return (
    <section 
      id="process-section" 
      className="w-full bg-zinc-50 px-6 py-24 md:py-36 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="mb-24 space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            The Treatment Journey
          </span>
          <h2 className="text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            The 3-Step Cellular Transformation
          </h2>
          <p className="mx-auto max-w-xl text-zinc-600 font-light leading-relaxed">
            Cellular remodeling operates on a precise biological timeline. Here is how the restoration process is executed.
          </p>
        </motion.div>

        {/* Timeline Sequence Container */}
        <div className="relative">
          {/* Horizontal connecting line (hidden on mobile, shown on desktop) */}
          <motion.div 
            className="absolute top-[28px] left-[5%] right-[5%] hidden h-[1px] bg-zinc-200 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" as const }}
          />

          {/* Steps Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-row items-start text-left space-x-6 md:flex-col md:space-x-0 md:space-y-6 group"
                variants={stepVariants}
              >
                
                {/* Number Circle */}
                <motion.div 
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-900 shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.05, borderColor: "#18181b" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" as const }}
                >
                  {step.number}
                </motion.div>

                {/* Content Block */}
                <div className="space-y-2 max-w-sm md:max-w-none">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 className="text-xl font-medium text-zinc-900">
                      {step.title}
                    </h3>
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed pt-2">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile vertical line helper */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="absolute bottom-[-48px] top-[56px] left-[27px] w-[1px] bg-zinc-200 md:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    style={{ originY: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 * index, ease: "easeInOut" as const }}
                  />
                )}

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
