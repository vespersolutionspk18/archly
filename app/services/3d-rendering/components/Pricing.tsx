import React from "react";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-black relative z-10">
      <h5 className="font-mono text-lg sm:text-xl md:text-2xl">RENDERING PACKAGES</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">STARTER</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$500 - $1,500</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Perfect for single room visualizations. 3-5 photorealistic images, two viewing angles, basic furniture staging.
            Includes one round of revisions and material swaps. 48-hour delivery.
            Ideal for kitchen or bathroom remodels where clients need to see the final result.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">PROFESSIONAL</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$1,500 - $3,500</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Complete home visualization package. 10-15 renderings, FREE 4K walkthrough video, before/after comparisons.
            Unlimited revisions, multiple material options, day/night lighting.
            Perfect for whole-home remodels and major renovations. VR-ready files included.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">PREMIUM</h5>
          <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter mb-2">$3,500+</p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Luxury visualization experiences. Unlimited renderings, cinematic video production, interactive VR presentations.
            Real-time material selection tool, seasonal variations, lifestyle animations.
            White-glove service with dedicated project manager. 24-hour rush available.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-stone-800 pt-8">
        <p className="text-gray-400 text-base lg:text-lg">
          * All packages include FREE 4K walkthrough videos worth $500+.
          Multiple project discounts available. Volume pricing for contractors with regular rendering needs.
          Rush 24-hour service available for urgent bids at 50% premium.
        </p>
      </div>
    </div>
  );
};

export default Pricing;