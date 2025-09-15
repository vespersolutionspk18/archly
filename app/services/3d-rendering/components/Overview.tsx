import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start relative z-10">
       <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-1/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[880px] rounded-lg lg:rounded-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="3D rendering workstation and visualization"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 33vw"
          priority
          quality={100}
          unoptimized
        />
       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black px-2 sm:px-0">
       <h5 className="font-mono text-base sm:text-lg md:text-xl text-center lg:text-left">VISUALIZATION THAT SELLS</h5>
       <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-snug">
        We create photorealistic 3D renderings that transform your design concepts into compelling visual stories. Our white-labeled visualization team joins your client calls, presents renderings under your brand, and handles all technical questions as YOUR employees - building trust and credibility for your business.

<br className="hidden sm:block"></br><br className="hidden sm:block"></br>Every rendering package includes multiple viewing angles, material options, and real-time modifications during video presentations. Your dedicated 3D artist becomes part of your team, joining sales calls, making live adjustments, and helping you close deals. Clients never know you&apos;re working with us - they only see your brand&apos;s excellence.
       </h5>
      <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 text-center lg:text-left inline-block" href="/contact">START YOUR PROJECT</a>
       </div>
    </div>
  )
}

export default Overview