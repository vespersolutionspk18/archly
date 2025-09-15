import React from 'react'
import Image from 'next/image'

const Benefits = () => {
  const benefits = [
    {
      stat: "45%",
      label: "Faster Deal Closing",
      description: "Close deals nearly twice as fast with automated follow-ups and professional proposals"
    },
    {
      stat: "60%",
      label: "Less Admin Time",
      description: "Spend more time on job sites and less time on paperwork with automated workflows"
    },
    {
      stat: "$25K",
      label: "Average Project Increase",
      description: "Professional presentations and organized processes lead to higher-value projects"
    },
    {
      stat: "3x",
      label: "More Repeat Business",
      description: "Better communication and service delivery turns clients into lifetime customers"
    }
  ]

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white relative z-10">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-black">PROVEN RESULTS</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-black">
            Real Impact on Your Bottom Line
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            Our CRM isn&apos;t just about organization - it&apos;s about growing your business. Contractors using our platform report significant improvements across every metric that matters.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl lg:text-5xl font-mono text-black">{benefit.stat}</span>
                <span className="text-sm md:text-base font-sans font-medium text-black">{benefit.label}</span>
                <span className="text-xs md:text-sm text-zinc-500">{benefit.description}</span>
              </div>
            ))}
          </div>

          <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 inline-block mt-4" href="/contact">
            SEE CRM IN ACTION
          </a>
        </div>

        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Business growth and analytics dashboard"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

export default Benefits