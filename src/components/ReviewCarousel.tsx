"use client";

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  name: string;
  treatment: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sarah J.",
    treatment: "Facial Rejuvenation",
    text: "The acne scars I've struggled with for a decade are completely gone. My skin texture is smooth, even, and radiant. Exosome therapy did what laser resurfacing never could, and with zero downtime."
  },
  {
    name: "Michael R.",
    treatment: "Scalp & Hair Restoration",
    text: "After 3 sessions of follicle revival, the early thinning at my crown has visibly reversed. My hair feels thicker and healthier. The treatment was painless and required no blood draws or downtime."
  },
  {
    name: "Jessica L.",
    treatment: "Dual Matrix System",
    text: "Truly transformative. The lines around my eyes and mouth have softened significantly, and my skin feels deeply hydrated and firm. It's like my skin is acting ten years younger."
  },
  {
    name: "David K.",
    treatment: "Follicular Treatment",
    text: "The speed of cell recovery was what amazed me. I was back at work the same afternoon. In less than 2 months, my hair density is noticeably higher and the texture has completely revitalized."
  }
];

export default function ReviewCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 350;
      
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      id="reviews-section" 
      className="relative w-full bg-zinc-50 px-6 py-24 md:py-36 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Blurred Ambient Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-72 w-72 rounded-full bg-zinc-100/50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="space-y-16">
          
          {/* Header Block with controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                The Trust Engine
              </span>
              <h2 className="text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                Patient Experiences
              </h2>
              <p className="text-zinc-600 font-light leading-relaxed">
                Clinical outcomes validated by patient stories of transformative tissue repair and cellular healing.
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={() => scroll("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:border-zinc-300 hover:text-zinc-950 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => scroll("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:border-zinc-300 hover:text-zinc-950 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Horizontal scroll container */}
          <motion.div 
            ref={scrollContainerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reviews.map((review, i) => (
              <motion.div 
                key={i} 
                className="bg-white border border-zinc-200/50 p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300 min-w-[280px] sm:min-w-[340px] md:min-w-[380px] max-w-[400px] flex-shrink-0 snap-start"
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-sm leading-relaxed text-zinc-600 font-light italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-zinc-900">{review.name}</span>
                  <span className="text-[11px] font-medium text-zinc-400 tracking-wider uppercase bg-zinc-50 px-2 py-0.5 rounded-sm shrink-0">
                    {review.treatment}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
