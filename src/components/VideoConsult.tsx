"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoConsult() {
  const containerVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      id="video-section" 
      className="relative w-full overflow-hidden bg-iceblue px-6 py-24 md:py-36 lg:px-16"
    >
      {/* Blurred Ambient Backdrop for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl relative">
        <motion.div 
          className="space-y-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header block */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Educational Seminar
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl leading-[1.15]">
              Watch: The Science of Cellular Repair
              <span className="block mt-2 font-medium text-zinc-950 font-sans">
                (The Invisible Consult)
              </span>
            </h2>
            <p className="font-sans max-w-xl mx-auto text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              Take a look inside the cellular mechanisms that govern tissue regeneration, collagen synthesization, and real-time dermal recovery.
            </p>
          </div>

          {/* Thumbnail-style Video Placeholder */}
          <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 shadow-xl border border-zinc-200/50 group">
            {/* Background Image (dark blurred medical lab) */}
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Video Thumbnail Placeholder"
              fill
              sizes="(max-w-5xl) 100vw, 1024px"
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for extra contrast */}
            <div className="absolute inset-0 bg-zinc-900/40 transition-opacity duration-500" />
            
            {/* Centered Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                <Play className="h-8 w-8 ml-1 fill-white" />
              </div>
            </div>
            
            {/* Status Label */}
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold tracking-widest uppercase rounded-sm border border-white/10">
                Video Coming Soon
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
