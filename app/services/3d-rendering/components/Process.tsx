import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[880px] w-full relative">
      <Image
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
        alt="3D rendering process and workflow"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
        <h4 className="font-mono text-white text-xl md:text-2xl">RENDERING PROCESS</h4>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">FIRST DRAFT IN 48 HOURS</h3>
          <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">
            Speed wins contracts. Upload your floor plans or rough sketches, we model the space in 3D within 24 hours, and deliver photorealistic renderings by day two.
            Unlimited revisions ensure perfection. Every project includes a FREE cinematic walkthrough video that clients love sharing with friends and family.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Process