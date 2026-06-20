"use client";

import React from "react";
import { BookOpen, Check, Download } from "lucide-react";
import Script from "next/script";
import { motion } from "framer-motion";

// Extend global Window interface to support LemonSqueezy SDK type safety
declare global {
  interface Window {
    LemonSqueezy?: {
      Setup: () => void;
      Url: {
        Open: (url: string) => void;
        Close: () => void;
      };
    };
  }
}

export default function DigitalStorefront() {
  const highlights = [
    "Biological Terrain Preparation Plan",
    "Pre-treatment Micro-needling Checklist",
    "Clinical Exosome Absorption Optimization",
    "Anti-inflammatory Dietary Guidelines",
  ];

  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const sandboxCheckoutUrl = "https://cellmatrix.lemonsqueezy.com/buy/f2e5eb98-7578-43bb-a53b-fde5ee5a1a15?embed=1";
    if (typeof window !== "undefined" && window.LemonSqueezy?.Url) {
      window.LemonSqueezy.Url.Open(sandboxCheckoutUrl);
    } else {
      window.open(sandboxCheckoutUrl, "_blank");
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  } as const;

  return (
    <section 
      id="storefront-section" 
      className="relative w-full bg-zinc-950 px-6 py-24 md:py-36 text-zinc-100 lg:px-16 overflow-hidden"
    >
      {/* Inject Lemon Squeezy Overlay Script */}
      <Script
        src="https://lmsqueezy.com/media/eggs.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.LemonSqueezy) {
            window.LemonSqueezy.Setup();
          }
        }}
      />

      {/* Ambient background blur for depth layers */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-zinc-900/30 blur-3xl pointer-events-none" />

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
            Digital Resources
          </span>
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            Prepare Your Biology at Home
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400 font-light leading-relaxed">
            Unlock the full potential of your clinical treatments. This comprehensive digital blueprint guides you step-by-step on how to prep your skin, optimize your nutrition, and care for your skin post-treatment to guarantee maximum results.
          </p>
        </motion.div>

        {/* Product Card Split Layout */}
        <motion.div 
          className="mx-auto max-w-5xl rounded-sm border border-zinc-800 bg-zinc-900/30 overflow-hidden shadow-2xl relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Side: Editorial Book Mockup (5/12) */}
            <div className="md:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-12 flex flex-col justify-center items-center border-b border-zinc-800 md:border-b-0 md:border-r relative">
              <div className="absolute inset-0 bg-radial-gradient from-zinc-800/10 to-transparent pointer-events-none" />
              
              <motion.div 
                className="relative aspect-[3/4] w-full max-w-[240px] bg-white text-zinc-900 p-8 flex flex-col justify-between rounded shadow-2xl select-none cursor-pointer"
                whileHover={{ scale: 1.04, y: -6, rotateY: -8, rotateZ: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" as const }}
              >
                {/* Book header */}
                <div className="space-y-2">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase block">
                    Cell Matrix Labs
                  </span>
                  <div className="h-[2px] w-8 bg-zinc-900" />
                </div>

                {/* Book title */}
                <div className="space-y-3">
                  <h3 className="text-xl font-light tracking-tight leading-snug text-zinc-800">
                    The Molecular Matrix
                  </h3>
                  <p className="text-[9px] text-zinc-500 font-light leading-relaxed">
                    A clinical protocol guide to cellular dermal & follicular matrix regeneration.
                  </p>
                </div>

                {/* Book footer */}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <span className="text-[8px] font-mono text-zinc-400">VOL. 04 / REV. D</span>
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                </div>
              </motion.div>
            </div>

            {/* Right Side: Product Details & Purchase CTA (7/12) */}
            <div className="md:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300">
                      Digital Blueprint (PDF)
                    </span>
                    <h3 className="text-xl md:text-2xl font-light text-white mt-3 leading-snug">
                      The Molecular Matrix: A Clinical Protocol for Cellular Dermal & Follicular Regeneration
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl font-semibold text-white">$9</p>
                    <p className="text-xs text-zinc-500 uppercase">USD</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Unlock the full potential of your clinical treatments. This comprehensive digital blueprint guides you step-by-step on how to prep your skin, optimize your nutrition, and care for your skin post-treatment to guarantee maximum results.
                </p>

                {/* Value list */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {highlights.map((highlight, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      variants={itemVariants}
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-zinc-300 font-light">{highlight}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Lemon Squeezy simulated checkout button */}
              <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-zinc-500 max-w-xs font-light">
                  Secured payment processed via Lemon Squeezy. Access link delivered instantly to your inbox.
                </p>
                <motion.a
                  href="https://cellmatrix.lemonsqueezy.com/buy/f2e5eb98-7578-43bb-a53b-fde5ee5a1a15?embed=1"
                  className="lemon-squeezy-button inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 text-sm font-medium text-zinc-950 transition-colors duration-300 hover:bg-zinc-100 tracking-wider uppercase whitespace-nowrap cursor-pointer"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeInOut" as const }}
                >
                  <Download className="w-4 h-4" />
                  Download the Blueprint
                </motion.a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
