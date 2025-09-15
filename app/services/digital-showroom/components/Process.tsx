import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[880px] w-full relative">
      <Image
        src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
        alt="Digital showroom analytics dashboard"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
        <h4 className="font-mono text-white text-xl md:text-2xl">SHOWROOM SETUP</h4>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">LIVE IN 72 HOURS</h3>
          <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">
            We launch your complete digital showroom in just three days. Upload your project photos, we organize and optimize them, then deploy your interactive showroom with all features active.
            No technical knowledge needed - we handle everything from setup to training, ensuring you&apos;re confident using your new sales tool from day one.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Process