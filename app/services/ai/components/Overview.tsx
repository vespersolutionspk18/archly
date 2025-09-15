import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start relative z-10">
       <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-1/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[880px] rounded-lg lg:rounded-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
          alt="Architectural plans and construction blueprints"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 33vw"
          priority
          quality={100}
          unoptimized
        />
       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black px-2 sm:px-0">
       <h5 className="font-mono text-base sm:text-lg md:text-xl text-center lg:text-left">SMARTER DESIGN DECISIONS</h5>
       <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-snug">
        Our AI assistant analyzes thousands of successful remodeling projects to provide intelligent recommendations. It suggests optimal layouts based on space dimensions, estimates costs with 95% accuracy, and checks designs against building codes in real-time.

<br className="hidden sm:block"></br><br className="hidden sm:block"></br>This isn&apos;t generic AI - it&apos;s specifically trained on residential remodeling data. It understands load-bearing walls, plumbing constraints, electrical requirements, and local building codes. The assistant helps you catch issues before they become expensive problems, suggests value engineering opportunities, and ensures design consistency across your entire project.
       </h5>
      <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 text-center lg:text-left inline-block" href="/contact">TRY AI ASSISTANT</a>
       </div>
    </div>
  )
}

export default Overview