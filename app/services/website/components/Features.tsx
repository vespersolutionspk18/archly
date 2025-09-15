import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Portfolio Galleries",
      description: "Showcase your best work with stunning before/after sliders, project galleries, and 360° room tours. Upload directly from your phone, organize by project type, and let your work speak for itself."
    },
    {
      title: "SEO Optimization",
      description: "Built-in local SEO that gets you found. Automatic schema markup, fast loading speeds, and mobile-first design. We handle the technical details so you rank higher in local searches."
    },
    {
      title: "Integrated Booking",
      description: "Let clients schedule consultations directly from your website. Syncs with your calendar, sends automatic confirmations, and adds new appointments straight to your CRM pipeline."
    },
    {
      title: "Lead Capture Forms",
      description: "Smart forms that convert visitors into leads. Every submission goes directly to your CRM with full context. Automatic follow-up emails keep prospects engaged until you respond."
    },
    {
      title: "Customer Testimonials",
      description: "Display reviews from Google, Facebook, and past clients. Video testimonials, star ratings, and project-specific feedback build trust and close more deals."
    },
    {
      title: "Service Pages",
      description: "Dedicated pages for each service you offer. Kitchen remodels, bathroom renovations, additions - each with targeted content that attracts the right clients."
    },
    {
      title: "Mobile Responsive",
      description: "Looks perfect on every device. Your website automatically adjusts for phones, tablets, and desktops. Fast loading, touch-friendly, and optimized for on-the-go browsing."
    },
    {
      title: "Blog & Content",
      description: "Share project updates, design tips, and industry insights. Built-in blog platform helps establish you as the local expert while improving your search rankings."
    },
    {
      title: "Analytics Dashboard",
      description: "See who's visiting, what they're viewing, and where they're coming from. Track form submissions, phone calls, and conversion rates to optimize your marketing."
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-black relative z-10">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-white">WEBSITE FEATURES</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-white">
            Everything You Need to Dominate Online
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 w-full">
          {features.map((feature, index) => (
            <div key={index}>
              <h6 className="font-mono text-white text-xl md:text-2xl mb-6">{feature.title}</h6>
              <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features