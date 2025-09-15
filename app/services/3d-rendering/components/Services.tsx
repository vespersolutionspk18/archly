import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "INTERIOR RENDERINGS",
      description: (
        <>
          <p className="mb-3">Photorealistic interior visualizations that showcase every detail of your remodeling project. We capture the exact lighting, materials, and finishes to help clients envision their new space. From cozy kitchens to luxurious bathrooms, our renderings make decision-making easy.</p>
          <p>Includes multiple camera angles, furniture staging, and accurate material representation. We match exact paint colors, tile patterns, and fixture models to ensure what clients see is what they get.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },
    {
      title: "EXTERIOR VISUALIZATIONS",
      description: (
        <>
          <p className="mb-3">Stunning exterior renderings for additions, facades, and outdoor living spaces. We show how new additions blend with existing structures, complete with landscaping, lighting, and seasonal variations. Perfect for HOA approvals and neighbor buy-in.</p>
          <p>Delivered with day and dusk lighting options, multiple weather conditions, and landscape maturity stages. We include accurate shadows and reflections that bring realism to every image.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
    },
    {
      title: "BEFORE & AFTER",
      description: (
        <>
          <p className="mb-3">Dramatic before-and-after visualizations that showcase the transformation potential. We photograph existing spaces and create matching angle renderings of the proposed design. These powerful comparisons are your best sales tool for convincing hesitant clients.</p>
          <p>Includes slider presentations for websites, side-by-side print materials, and animated transitions for digital presentations. Nothing sells a remodel better than seeing the dramatic improvement.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    {
      title: "3D WALKTHROUGHS",
      description: (
        <>
          <p className="mb-3">Cinematic video tours that guide clients through their future space. Our 4K walkthrough videos create an emotional connection that static images can&apos;t match. FREE with every rendering package - these videos close deals.</p>
          <p>Professional camera movements, ambient music, and smooth transitions between rooms. Videos are optimized for sharing on social media, embedding in proposals, and playing during consultations.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea"
    },
    {
      title: "MATERIAL OPTIONS",
      description: (
        <>
          <p className="mb-3">Show multiple design options without creating separate renderings. We prepare your 3D model to swap materials instantly - change countertops, cabinets, flooring, and paint colors in real-time during client meetings. Let clients see their choices immediately.</p>
          <p>Includes material library setup, real-time rendering capabilities, and training on the presentation system. Perfect for design consultations where clients want to explore different finish combinations.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1531685250784-7569952593d2"
    },
    {
      title: "VR EXPERIENCES",
      description: (
        <>
          <p className="mb-3">Immersive virtual reality presentations that let clients walk through their remodel before construction begins. Using affordable VR headsets, clients can experience the scale, flow, and feel of their new space. This premium service eliminates surprises and change orders.</p>
          <p>Compatible with Quest, Vive, and smartphone VR systems. Includes interactive elements like opening cabinets, changing lighting, and measuring distances. The ultimate tool for high-end remodeling projects.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9"
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black relative z-10">
      <h5 className="font-mono text-xl md:text-2xl mb-10 lg:mb-14 text-white">RENDERING SERVICES</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-stone-900 border border-stone-800 rounded-3xl p-4 lg:p-5">
            <div className="relative h-64 lg:h-72 w-full mb-5 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-2">
              <h5 className="font-mono text-white text-xl lg:text-2xl mb-4">{service.title}</h5>
              <div className="text-gray-300 text-base lg:text-lg leading-relaxed">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;