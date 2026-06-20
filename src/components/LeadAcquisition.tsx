"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadAcquisition() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "dermal",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // IMPORTANT DATABASE SECURITY NOTE:
  // This form must be integrated with a HIPAA-compliant CRM or backend 
  // (e.g., a BAA-signed instance of Salesforce Health Cloud, HubSpot, or a secure encrypted database)
  // before capturing live patient data.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setLoading(true);
    // Simulate API Submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" as const },
    },
  };

  return (
    <section 
      id="lead-section" 
      className="relative w-full bg-white px-6 py-24 md:py-36 lg:px-16 overflow-hidden"
    >
      {/* Blurred ambient backdrop for depth layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-zinc-50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl relative">
        {/* Container Centered Card */}
        <motion.div 
          className="bg-iceblue border border-zinc-200/50 p-6 sm:p-8 md:p-16 rounded-sm text-center space-y-8 shadow-sm hover:shadow-md transition-shadow duration-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" as const }}
                className="space-y-8"
              >
                {/* Form Content */}
                <div className="space-y-4 max-w-2xl mx-auto">
                  <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                    Clinical Intake
                  </span>
                  <h2 className="text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl">
                    Ready to Reverse Your Cellular Clock?
                  </h2>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    Spaces for our advanced regenerative treatments are limited. Secure your personalized, in-depth skin or scalp analysis with our medical practitioners today. You may also purchase our authoritative 16-page <a href="#storefront-section" className="underline font-normal text-zinc-900 hover:text-zinc-700 transition-colors">Clinical Protocol Guide ($9)</a> detailing cell signaling pathways and nutrition guidelines.
                  </p>
                </div>

                {/* Form Block */}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alexis Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-sm border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. alexis@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-sm border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interest Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Area of Primary Interest
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full h-12 px-4 rounded-sm border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-500 transition-colors appearance-none"
                    >
                      <option value="dermal">Advanced Facial Rejuvenation</option>
                      <option value="follicular">Scalp & Hair Restoration</option>
                      <option value="both">Dual Matrix System (Comprehensive Consultation)</option>
                    </select>
                  </div>

                  {/* Consent Note */}
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    Your inquiry is processed through a secure, encrypted portal. We adhere to strict privacy standards to protect your medical interest data. By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-zinc-600 transition-colors">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="/terms-of-service" className="underline hover:text-zinc-600 transition-colors">Terms of Service</Link>.
                  </p>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-zinc-900 text-white rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3 disabled:bg-zinc-700 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeInOut" as const }}
                  >
                    {loading ? (
                      <span>Processing details...</span>
                    ) : (
                      <>
                        <span>Book Your Exosome Assessment</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" as const }}
                className="py-12 space-y-6 max-w-md mx-auto"
              >
                <motion.div 
                  className="flex justify-center text-zinc-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                  <CheckCircle2 className="w-16 h-16 stroke-[1.25]" />
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-zinc-900">Assessment Requested</h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. An intake specialist will review your request and reach out within 24 hours to schedule your compatibility assessment.
                  </p>
                </div>
                <div className="pt-4">
                  <motion.button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Another Consultation
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Financing Available Badge Section */}
          <div className="pt-8 border-t border-zinc-200/50 flex flex-col items-center justify-center gap-3">
            <p className="text-xs text-zinc-500 font-light tracking-wide">
              Flexible financing available for all regenerative treatment plans.
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] bg-white border border-zinc-200 text-zinc-600 rounded-full shadow-sm">
                CareCredit
              </span>
              <span className="px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] bg-white border border-zinc-200 text-zinc-600 rounded-full shadow-sm">
                Cherry
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
