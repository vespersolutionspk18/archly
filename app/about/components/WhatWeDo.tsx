import React from "react";

const WhatWeDo = () => {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16 items-start pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-24 md:pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative z-10">
      <div className="w-full">
        <h5 className="font-mono text-white text-lg sm:text-xl md:text-2xl mb-6">
          WHAT WE DO
        </h5>
        <h5 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter leading-relaxed">
          We are a comprehensive design and technology company revolutionizing how contractors and interior designers work. Our white-labeled teams seamlessly integrate with your business - our designers and 3D artists join your client video calls, present as your employees, and become a true extension of your company. From initial concept to final construction, we handle every aspect while maintaining your brand identity.
        </h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 w-full">
        <div>
          <h6 className="font-mono text-white text-xl md:text-2xl mb-6">OUR MISSION</h6>
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
            To empower construction and design professionals with cutting-edge tools and services that transform how projects are conceived, presented, and delivered. We believe every contractor deserves access to professional design capabilities, advanced visualization, and business management tools that were once exclusive to large firms.
          </p>
        </div>
        <div>
          <h6 className="font-mono text-white text-xl md:text-2xl mb-6">OUR VISION</h6>
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
            To become the industry standard for design and visualization services, where every construction project begins with our comprehensive design solutions. We envision a future where miscommunication is eliminated, revision cycles are minimal, and clients can experience their spaces before construction begins.
          </p>
        </div>
        <div>
          <h6 className="font-mono text-white text-xl md:text-2xl mb-6">OUR APPROACH</h6>
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
            We combine traditional architectural expertise with white-label service delivery. Your dedicated team members join client video calls, answer questions in real-time, and present all work under your brand. Our designers become YOUR designers, creating precise technical drawings and Hollywood-quality visualizations while representing your company professionally in every interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;