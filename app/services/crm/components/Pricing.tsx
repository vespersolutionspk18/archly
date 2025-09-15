import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for solo contractors just getting started",
      features: [
        "Up to 100 active leads",
        "Basic pipeline management",
        "Quote & invoice generation",
        "Email automation",
        "Mobile app access",
        "5GB document storage",
        "Email support"
      ],
      cta: "START FREE TRIAL",
      featured: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "For growing remodeling businesses ready to scale",
      features: [
        "Unlimited leads & contacts",
        "Advanced pipeline automation",
        "Custom quote templates",
        "Payment processing included",
        "3 team member accounts",
        "Subcontractor management",
        "Project tracking & scheduling",
        "50GB document storage",
        "Priority phone support",
        "QuickBooks integration"
      ],
      cta: "START FREE TRIAL",
      featured: true
    },
    {
      name: "Enterprise",
      price: "$349",
      period: "per month",
      description: "Complete solution for established contractors",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Advanced profit analytics",
        "Custom workflow automation",
        "API access & integrations",
        "White-label options",
        "Dedicated account manager",
        "Custom training program",
        "Unlimited storage",
        "24/7 phone support"
      ],
      cta: "CONTACT SALES",
      featured: false
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-zinc-50 relative z-10">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4 text-center">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-black">SIMPLE PRICING</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-black">
            Choose the Plan That Fits Your Business
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            No setup fees. No hidden costs. Cancel anytime. All plans include free onboarding and data migration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border ${plan.featured ? 'border-black shadow-xl' : 'border-zinc-200'} p-6 md:p-8 flex flex-col gap-4 md:gap-6 relative ${plan.featured ? 'md:scale-105' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-mono">
                  MOST POPULAR
                </div>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-sans font-medium text-black">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-mono text-black">{plan.price}</span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
                <p className="text-sm md:text-base text-zinc-600">{plan.description}</p>
              </div>

              <ul className="flex flex-col gap-2 md:gap-3 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-sm md:text-base text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full text-center py-3 md:py-4 rounded font-mono text-sm md:text-base transition-all duration-300 ${
                  plan.featured
                    ? 'bg-black text-white hover:bg-zinc-800'
                    : 'bg-white text-black border border-black hover:bg-black hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-zinc-600 text-sm md:text-base">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing