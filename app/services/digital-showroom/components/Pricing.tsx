import React from "react";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-black relative z-10">
      <h5 className="font-mono text-lg sm:text-xl md:text-2xl">SHOWROOM PACKAGES</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">ESSENTIAL</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$299/month</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Perfect for getting started. 50 project gallery slots, basic before/after tools, material library access.
            Mobile-responsive design, SEO optimization, and lead capture forms.
            Ideal for contractors doing 2-5 projects monthly. 72-hour setup included.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">PROFESSIONAL</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$599/month</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Complete showroom solution. Unlimited projects, 360° room tours, virtual consultations.
            Interactive estimate builder, CRM integration, automated follow-ups.
            Perfect for established contractors. Priority support and monthly analytics reports.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">ENTERPRISE</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$999/month</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Full-featured powerhouse. Multiple user accounts, advanced analytics, A/B testing.
            Custom branding, API access, dedicated account manager.
            White-label options available. Perfect for multi-location or franchise operations.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-stone-800 pt-8">
        <p className="text-gray-400 text-base lg:text-lg">
          * All packages include free setup, training, and first month&apos;s hosting.
          Annual billing saves 20%. Custom enterprise solutions available.
          No contracts - cancel anytime with 30 days notice.
        </p>
      </div>
    </div>
  );
};

export default Pricing;