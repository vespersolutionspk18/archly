import React from 'react'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Quick Setup",
      description: "Import your existing contacts or start fresh. Customize your pipeline stages, set up your team, and configure automated workflows in under 30 minutes."
    },
    {
      number: "02",
      title: "Capture Every Lead",
      description: "Connect your website, social media, and phone system. Every inquiry automatically creates a lead in your CRM with full context and history."
    },
    {
      number: "03",
      title: "Nurture & Convert",
      description: "Automated follow-up sequences keep you top of mind. Send quotes, schedule consultations, and track every interaction until they sign."
    },
    {
      number: "04",
      title: "Manage Projects",
      description: "Convert won deals into active projects. Schedule work, coordinate teams, track progress, and keep clients updated automatically."
    },
    {
      number: "05",
      title: "Get Paid Faster",
      description: "Send professional invoices, accept multiple payment methods, and automate payment reminders. Reduce collection time by 50%."
    },
    {
      number: "06",
      title: "Grow Smarter",
      description: "Analytics show what's working and what's not. Identify your best lead sources, most profitable services, and optimize your business."
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-black text-white relative z-10">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">HOW IT WORKS</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter">
            From Lead to Loyal Customer in Six Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-mono text-zinc-500">{step.number}</span>
                <h3 className="text-xl md:text-2xl font-sans">{step.title}</h3>
              </div>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
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