import React from 'react'
import Image from 'next/image'

const ShowroomHero = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28 md:pb-10 lg:pt-36 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative z-10">
        <h5 className="w-full font-mono text-white text-lg sm:text-xl md:text-2xl">
          DIGITAL SHOWROOM
        </h5>
        <h5 className="w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-normal">
          Interactive digital showrooms that let clients explore materials, finishes, and design options from anywhere. Showcase your portfolio with before/after galleries, 360° room tours, and virtual consultations. Built specifically for contractors to close deals faster with immersive, professional presentations.
        </h5>
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Digital showroom interface"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>
    </div>
  )
}

export default ShowroomHero