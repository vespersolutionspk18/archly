import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start relative z-10">
       <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-1/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[880px] rounded-lg lg:rounded-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
          alt="Architectural blueprints and design tools"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 33vw"
          priority
          quality={100}
          unoptimized
        />
       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black px-2 sm:px-0">
       <h5 className="font-mono text-base sm:text-lg md:text-xl text-center lg:text-left">REMODELING DESIGN EXPERTS</h5>
       <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-snug">
        We specialize in residential remodeling design that helps contractors win more bids and execute projects smoothly. Our white-labeled team acts as YOUR in-house design department - jumping on video calls with your clients, presenting as part of your company, and wearing your brand throughout the entire process.

<br className="hidden sm:block"></br><br className="hidden sm:block"></br>Every design package includes detailed dimensions, material specifications, and clear construction notes. Your dedicated designer joins client meetings remotely, handles all design questions directly, and presents themselves as your team member. We know what contractors need: not just great designs, but a seamless extension of their business.
       </h5>
      <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 text-center lg:text-left inline-block" href="/contact">GET A QUOTE</a>
       </div>
    </div>
  )
}

export default Overview