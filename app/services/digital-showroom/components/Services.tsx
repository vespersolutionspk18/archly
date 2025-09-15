import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "PROJECT GALLERIES",
      description: (
        <>
          <p className="mb-3">Professional portfolio galleries that showcase your best work with style. High-resolution before/after sliders, project details, and cost ranges help clients understand your capabilities. Smart categorization by room type, project size, and budget makes browsing intuitive.</p>
          <p>Every project includes material lists, completion timelines, and client testimonials. SEO-optimized galleries help you rank locally and attract quality leads searching for your specific expertise.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
    },
    {
      title: "360° ROOM TOURS",
      description: (
        <>
          <p className="mb-3">Immersive 360-degree tours that let clients explore completed projects as if they&apos;re standing in the room. Navigate between spaces, zoom in on details, and experience the quality of your work from every angle. Perfect for showcasing complex renovations.</p>
          <p>Compatible with all devices including VR headsets. Embedded hotspots highlight special features, materials used, and craftsmanship details that set your work apart from competitors.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea"
    },
    {
      title: "MATERIAL LIBRARY",
      description: (
        <>
          <p className="mb-3">Comprehensive material selection tool with real samples, pricing, and availability. Clients can browse countertops, cabinets, flooring, and fixtures with confidence. Filter by price, style, and brand to find perfect matches for any budget.</p>
          <p>Integrated with supplier catalogs for accurate pricing and lead times. Save material combinations to project boards, making design consultations more productive and decisions faster.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87"
    },
    {
      title: "VIRTUAL CONSULTATIONS",
      description: (
        <>
          <p className="mb-3">Built-in video consultation platform that brings the showroom experience to your clients&apos; homes. Screen share capabilities let you walk through designs together, while collaborative tools allow real-time material selection and note-taking.</p>
          <p>Automatic recording and transcription create detailed meeting summaries. Calendar integration, reminder emails, and follow-up automation keep projects moving forward without manual effort.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    {
      title: "ESTIMATE BUILDER",
      description: (
        <>
          <p className="mb-3">Interactive estimation tools that let clients explore options and understand costs. Adjust project scope, material selections, and timelines to see real-time price updates. Transparency builds trust and helps clients make informed decisions.</p>
          <p>Generate professional proposals directly from the showroom with your branding. Include payment terms, project phases, and detailed line items. Clients can approve and sign electronically, speeding up the sales cycle.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      title: "LEAD CAPTURE",
      description: (
        <>
          <p className="mb-3">Smart forms and chat widgets capture visitor information at the perfect moment. Progressive profiling learns about prospects over time without overwhelming them. Automated lead scoring identifies hot prospects for immediate follow-up.</p>
          <p>Integration with your CRM ensures no lead falls through the cracks. Automated email sequences nurture prospects with relevant content, keeping your company top-of-mind until they&apos;re ready to start their project.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black relative z-10">
      <h5 className="font-mono text-xl md:text-2xl mb-10 lg:mb-14 text-white">SHOWROOM FEATURES</h5>
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