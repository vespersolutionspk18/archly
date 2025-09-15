import React from "react";

const AboutPrinciples = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-black relative z-10">
      <h5 className="font-mono text-lg sm:text-xl md:text-2xl">OUR CORE VALUES</h5>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">DESIGN EXCELLENCE</h5>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Every project reflects our commitment to architectural precision and aesthetic excellence. From initial sketches to final renderings, we maintain the highest standards of design quality, ensuring every detail serves both form and function.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">CLIENT SUCCESS</h5>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Your success is our success. We measure our achievements by the projects you win, the time you save, and the growth of your business. Every tool we build, every service we provide is designed to help you close more deals and deliver exceptional results.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">INNOVATION & TECHNOLOGY</h5>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We continuously push boundaries by integrating cutting-edge technology with traditional design expertise. Our AI-powered tools, photorealistic rendering engines, and comprehensive digital platform represent the future of architectural services.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">ACCESSIBILITY & SUPPORT</h5>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Professional design services shouldn&apos;t be exclusive to large firms. We democratize access to enterprise-level tools, provide comprehensive training, and offer ongoing support to ensure every contractor can compete at the highest level.
          </p>
        </div>
      </div>
    </div>
  );                                                                                                                                                                    
};

export default AboutPrinciples;