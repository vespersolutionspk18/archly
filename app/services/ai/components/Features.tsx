import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Layout Optimization",
      description: "AI analyzes your space dimensions and suggests optimal furniture placement, traffic flow patterns, and functional zones. Maximizes usable square footage while maintaining building codes and accessibility requirements."
    },
    {
      title: "Cost Estimation",
      description: "Predict project costs with 95% accuracy. AI factors in local labor rates, material prices, complexity factors, and historical data from similar projects. Get instant budget adjustments as you modify designs."
    },
    {
      title: "Code Compliance",
      description: "Real-time checking against local building codes and regulations. AI flags potential violations, suggests compliant alternatives, and ensures your designs meet all safety and legal requirements."
    },
    {
      title: "Style Consistency",
      description: "Maintains design coherence across your entire project. AI ensures color palettes, materials, and fixtures work harmoniously together. Suggests alternatives that match your selected style and budget."
    },
    {
      title: "Material Selection",
      description: "Smart recommendations for materials based on durability, cost, availability, and client preferences. AI considers maintenance requirements, warranty periods, and compatibility with existing structures."
    },
    {
      title: "Schedule Optimization",
      description: "Intelligent project scheduling that considers trade dependencies, material lead times, and crew availability. AI identifies potential bottlenecks and suggests timeline adjustments to keep projects on track."
    },
    {
      title: "Value Engineering",
      description: "Identifies opportunities to reduce costs without sacrificing quality. AI suggests alternative materials, methods, or designs that deliver the same outcome for less money."
    },
    {
      title: "Clash Detection",
      description: "Automatically identifies conflicts between plumbing, electrical, and HVAC systems. AI prevents costly rework by catching issues during the design phase rather than during construction."
    },
    {
      title: "Energy Efficiency",
      description: "Analyzes designs for energy performance and suggests improvements. AI recommends insulation upgrades, efficient fixtures, and optimal window placement to reduce utility costs."
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-black relative z-10">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-white">AI CAPABILITIES</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-white">
            Intelligent Features That Transform Your Workflow
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