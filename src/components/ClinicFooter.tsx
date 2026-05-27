import React from "react";

export default function ClinicFooter() {
  return (
    <footer className="w-full bg-alabaster text-charcoal border-t border-sage/20 py-16 px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        
        {/* Clinic Branding */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold tracking-wider uppercase text-charcoal">
            Cell Matrix Labs
          </h3>
          <p className="text-sm text-charcoal/80 leading-relaxed max-w-sm">
            Pioneering biological excellence through high-fidelity exosome treatments and cellular rejuvenation.
          </p>
        </div>

        {/* Clinic Hours & Contact Info */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-semibold tracking-wide text-charcoal">
            Hours & Contact
          </h3>
          <div className="space-y-2 text-sm text-charcoal/80">
            <p className="font-semibold text-charcoal">Operating Hours:</p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM, Sat: By Appointment Only</p>
            <div className="pt-2">
              <span className="font-semibold text-charcoal">Phone: </span>
              <a 
                href="tel:+18005550199" 
                className="text-sage hover:text-sage/80 transition-colors font-semibold underline underline-offset-4"
              >
                +1 (800) 555-0199
              </a>
            </div>
          </div>
        </div>

        {/* Location Column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold tracking-wide text-charcoal">
              Our Location
            </h3>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              405 Regenerative Way, Suite 100
              <br />
              Beverly Hills, CA 90210
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Financing Available
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] bg-white border border-zinc-200 text-zinc-600 rounded-sm shadow-sm select-none">
                CareCredit
              </span>
              <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] bg-white border border-zinc-200 text-zinc-600 rounded-sm shadow-sm select-none">
                Cherry
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Legal Links & Copyright */}
      <div className="max-w-7xl mx-auto border-t border-charcoal/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal/60">
        <p>© {new Date().getFullYear()} Cell Matrix Labs. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-charcoal transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-charcoal transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
