import React from 'react'
import Image from 'next/image'

const Integration = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-black relative z-10">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
          <h5 className="font-mono text-base sm:text-lg md:text-xl text-white">SEAMLESS INTEGRATION</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tighter text-white">
            Works With Your Entire Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Our AI assistant isn&apos;t a standalone tool - it&apos;s deeply integrated with every aspect of our platform. Design suggestions flow directly into your 3D renderings. Cost estimates automatically update your quotes. Code compliance checks appear in real-time as you design.
          </p>

          <div className="grid grid-cols-1 gap-4 md:gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <h6 className="font-mono text-white text-xl">Design Services Integration</h6>
              <p className="text-gray-400">AI-optimized layouts go straight to our design team for detailed drawings and 3D rendering.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-mono text-white text-xl">CRM Integration</h6>
              <p className="text-gray-400">Cost estimates and project timelines sync automatically with your quotes and invoices.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-mono text-white text-xl">3D Rendering Integration</h6>
              <p className="text-gray-400">AI suggestions instantly visualized in photorealistic 3D for client presentations.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-mono text-white text-xl">Project Management Integration</h6>
              <p className="text-gray-400">Schedule optimizations and material lists flow directly into your project workflow.</p>
            </div>
          </div>

          <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 inline-block mt-4 text-white" href="/contact">
            EXPERIENCE AI INTEGRATION
          </a>
        </div>

        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="Modern kitchen remodel project planning"
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

export default Integration