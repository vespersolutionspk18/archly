import React from 'react'
import Image from 'next/image'

const OurDuty = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[880px] w-full relative">
      <Image
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        alt="Remodeling project visualization"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
        <h4 className="font-mono text-white text-xl md:text-2xl">TRUSTED BY REMODELING PROFESSIONALS</h4>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">12,000+ CONTRACTORS WINNING MORE PROJECTS</h3>
          <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">From kitchen layouts to permit drawings, we handle the design work so you can focus on building. Our photorealistic renderings eliminate miscommunication, reduce revision cycles by 60%, and help close deals 45% faster. Contractors report average project values increasing by $25,000 with our professional presentations.</h5>
        </div>

      </div>
    </div>
  )
}

export default OurDuty