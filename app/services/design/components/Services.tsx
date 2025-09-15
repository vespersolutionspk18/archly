import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "KITCHEN DESIGN",
      description: (
        <>
          <p className="mb-3">Complete kitchen remodel designs with detailed cabinet layouts, appliance placement, and island configurations. We optimize workflow with the work triangle concept while maximizing storage and counter space. Every design includes electrical and plumbing rough-in locations.</p>
          <p>Delivered with cabinet elevations, countertop dimensions, backsplash layouts, and lighting plans. We specify exact cabinet sizes and provide cut lists that save contractors time and reduce material waste.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
    },
    {
      title: "BATHROOM DESIGN",
      description: (
        <>
          <p className="mb-3">Detailed bathroom layouts optimized for space and functionality. We design around existing plumbing when possible to reduce costs, while creating luxurious spaces with smart storage solutions. Includes tile layouts, fixture placement, and ventilation requirements.</p>
          <p>Every bathroom design comes with elevation views, shower/tub details, and finish schedules. We ensure ADA compliance when needed and specify water-resistant materials for longevity.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"
    },
    {
      title: "ROOM ADDITIONS",
      description: (
        <>
          <p className="mb-3">Seamless addition designs that blend perfectly with existing structures. We consider roof lines, foundation requirements, and exterior materials to ensure additions look original. Includes structural considerations and connection details to the existing home.</p>
          <p>Complete packages with foundation plans, framing layouts, and tie-in details. We coordinate HVAC extensions, electrical loads, and ensure proper permits for square footage increases.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
    },
    {
      title: "BASEMENT FINISHING",
      description: (
        <>
          <p className="mb-3">Transform unfinished basements into valuable living space. We design around existing mechanicals, posts, and low ceilings to maximize usability. Includes egress window placement, moisture management details, and proper insulation specifications.</p>
          <p>Complete with lighting plans for low ceilings, HVAC modifications, and bathroom rough-ins. We ensure proper permits for bedroom additions and include all fire safety requirements.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    },
    {
      title: "OPEN CONCEPT DESIGN",
      description: (
        <>
          <p className="mb-3">Remove walls and create modern open floor plans. We identify load-bearing walls and design proper support beams or columns. Our plans maximize sight lines and natural light while maintaining structural integrity.</p>
          <p>Includes beam sizing calculations, support post placement, and detailed drawings for contractors. We ensure kitchen islands have proper electrical and plumbing rough-ins while maintaining clean, modern aesthetics.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3"
    },
    {
      title: "PERMIT PACKAGES",
      description: (
        <>
          <p className="mb-3">Complete permit packages that get approved fast. We know what building departments want: clear dimensions, structural details, and code compliance notes. Our drawings meet requirements in all 50 states with jurisdiction-specific details.</p>
          <p>Includes all required sheets, energy calculations, and structural details. We provide revision support if the building department requests changes, ensuring your project stays on schedule.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black relative z-10">
      <h5 className="font-mono text-xl md:text-2xl mb-10 lg:mb-14 text-white">WHAT WE DELIVER</h5>
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