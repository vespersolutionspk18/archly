import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[880px] w-full relative">
      <Image
        src="https://images.unsplash.com/photo-1503594384566-461fe158e797"
        alt="Design process workflow"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
        <h4 className="font-mono text-white text-xl md:text-2xl">OUR PROCESS</h4>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">REMODEL DESIGNS IN 5-7 BUSINESS DAYS</h3>
          <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">
            We know contractors can&apos;t wait weeks for designs. Upload your measurements and photos, our team starts immediately, and receive permit-ready drawings within a week.
            Perfect for keeping projects moving and clients happy. Rush service available for those last-minute bids.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Process