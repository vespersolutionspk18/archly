import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start py-12 sm:py-16 md:py-24 lg:py-36 px-4 sm:px-6 md:px-8 lg:px-16 bg-white relative z-10">
        <h5 className="w-full lg:w-1/3 font-mono text-black text-lg sm:text-xl md:text-2xl">
          WHY CHOOSE US
        </h5>
        <h5 className="w-full lg:w-2/3 text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-normal">
          Designed specifically for contractors and remodelers. We know you need practical designs that work with existing structures, clear dimensions that eliminate guesswork, and details that actually help on the job site. Our team has worked with contractors for over 15 years - we speak your language and understand your challenges. Every design is optimized for buildability, cost-effectiveness, and client satisfaction.
        </h5>
    </div>
  )
}

export default Features