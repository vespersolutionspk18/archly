import React from 'react'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up for CRM",
      description: "Start your free CRM trial and we'll begin building your custom website. Full access to all CRM features immediately."
    },
    {
      number: "02",
      title: "Share Your Details",
      description: "Provide your logo, company info, service areas, and project photos. Tell us your story and what makes you unique."
    },
    {
      number: "03",
      title: "We Design Your Site",
      description: "Our team creates a custom website specifically for your business. Professional design tailored to showcase your work and convert visitors."
    },
    {
      number: "04",
      title: "Connect Your Domain",
      description: "Use your existing domain or get a new one free. We handle all the technical setup, SSL certificates, and email configuration."
    },
    {
      number: "05",
      title: "Go Live in 24 Hours",
      description: "Your website launches automatically after review. Fully optimized, mobile-ready, and integrated with your CRM from day one."
    },
    {
      number: "06",
      title: "Grow Your Business",
      description: "Watch leads flow directly into your CRM. Update your portfolio anytime, track visitor analytics, and dominate local search."
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white relative z-10">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-black">SIMPLE SETUP PROCESS</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-black">
            From Zero to Live Website in 24 Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-mono text-zinc-500">{step.number}</span>
                <h3 className="text-xl md:text-2xl font-sans text-black">{step.title}</h3>
              </div>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Process