import React from "react";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-black relative z-10">
      <h5 className="font-mono text-lg sm:text-xl md:text-2xl">INVESTMENT</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">BASIC PACKAGE</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$1,500 - $3,000</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Kitchen or bathroom remodel designs, simple room additions up to 500 sq ft.
            Includes floor plans and basic elevations. PDF deliverables.
            Perfect for single-room remodels. 5-7 business day turnaround.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">PROFESSIONAL</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$3,000 - $7,500</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Whole-home remodels, major additions, open concept conversions.
            Complete permit package with all required drawings. AutoCAD files included.
            Perfect for full home renovations and large additions up to 2,000 sq ft.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">ENTERPRISE</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$7,500+</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Complex multi-phase remodels, historic renovations, structural modifications.
            Complete documentation with engineering coordination. Permit assistance included.
            Priority support with 48-hour rush available. Perfect for high-end custom remodels.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-stone-800 pt-8">
        <p className="text-gray-400 text-base lg:text-lg">
          * Pricing varies based on project complexity, square footage, and location.
          All packages include code compliance review for your specific jurisdiction.
          Volume discounts available for contractors with multiple projects.
        </p>
      </div>
    </div>
  );
};

export default Pricing;