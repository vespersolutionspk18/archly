import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurDutyAfter = () => {
  const features = [
    {
      title: "DESIGN SERVICES",
      href: "/services/design",
      description: (
        <>
          <p className="mb-3">Professional architectural design services including detailed floor plans, elevations, sections, and construction drawings. Our expert designers create optimized layouts that maximize space utility while maintaining aesthetic appeal. Every design includes precise measurements, material specifications, and compliance with local building codes.</p>
          <p>From initial concept sketches to final construction documents, we handle all phases of design. Our iterative process ensures client satisfaction with unlimited revisions during the design phase. Receive AutoCAD files, PDF blueprints, and 3D models ready for permits and construction.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },
    {
      title: "3D RENDERING",
      href: "/services/3d-rendering",
      description: (
        <>
          <p className="mb-3">Transform your designs into photorealistic 3D visualizations that sell projects before breaking ground. Every rendering includes multiple angles, day/night lighting options, and FREE 4K cinematic walkthrough videos. Our Hollywood-grade production quality makes clients feel like they&apos;re already living in their dream space.</p>
          <p>Interactive features let clients explore materials, finishes, and furniture in real-time. Export to VR for immersive presentations, share web links for remote viewing, and download high-resolution images for marketing. Projects typically close 45% faster with our renderings eliminating all guesswork.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    {
      title: "CONTRACTOR CRM",
      href: "/services/crm",
      description: (
        <>
          <p className="mb-3">Purpose-built CRM system designed specifically for contractors and designers. Manage your entire business from lead capture to project completion in one unified platform. Track every client interaction, automate follow-ups that convert 3x better, and never miss another opportunity with intelligent reminders.</p>
          <p>Features include automated quote generation, integrated invoicing, payment processing, subcontractor management, material tracking, and detailed profit analytics. Built-in client portal keeps everyone informed while reducing calls and emails by 70%. Mobile app lets you manage everything from the job site.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },
    {
      title: "FREE WEBSITE",
      href: "/services/website",
      description: (
        <>
          <p className="mb-3">Get a professional website launched in 24 hours at absolutely no cost. Your custom site includes portfolio galleries, client testimonials, service pages, and an integrated booking system. Mobile-responsive design ensures perfect display on all devices while SEO optimization helps you rank #1 locally.</p>
          <p>Automatic lead capture forms feed directly into your CRM. Features blog integration, social media feeds, and Google Business Profile sync. Your website works 24/7 generating qualified leads while you focus on projects.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
    },
    {
      title: "DIGITAL SHOWROOM",
      href: "/services/digital-showroom",
      description: (
        <>
          <p className="mb-3">Create an immersive digital showroom that showcases your best work and design capabilities. Feature interactive before/after galleries, 360° room tours, and categorized project portfolios. Clients can browse your work anytime, anywhere, sharing their favorites with family and friends to accelerate decision-making.</p>
          <p>Integrated material library lets clients explore options with instant pricing. Virtual consultations through the showroom save hours of in-person meetings. Analytics show you exactly what clients are interested in, helping you tailor proposals that win. Updates sync automatically across all your digital platforms.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87"
    },
    {
      title: "AI ASSISTANT",
      href: "/services/ai",
      description: (
        <>
          <p className="mb-3">Leverage artificial intelligence to design smarter and faster. Our AI analyzes thousands of successful projects to suggest optimal layouts, color schemes that increase property value, and material combinations proven to sell. Generate multiple design variations in seconds while maintaining your unique style.</p>
          <p>Get instant accurate cost estimates, code compliance checks, and structural feasibility analysis. The AI learns your preferences over time, helping maintain consistency across projects. Automated scheduling optimization ensures projects finish on time. Save 10+ hours per project while delivering superior results.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {features.map((feature, index) => (
          <Link key={index} href={feature.href}>
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-4 lg:p-5 cursor-pointer transition-all duration-300 hover:bg-stone-800 hover:border-stone-700 hover:scale-[1.02] h-full">
              <div className="relative h-64 lg:h-72 w-full mb-5 rounded-2xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="px-2">
                <h5 className="font-mono text-white text-xl lg:text-2xl mb-4">{feature.title}</h5>
                <div className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurDutyAfter;