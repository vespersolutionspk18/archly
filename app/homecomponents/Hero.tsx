import Button from '../components/Button'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        className="object-cover lg:scale-120 lg:translate-x-8 scale-110 translate-x-0"
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        alt="Kitchen remodel design visualization"
        fill
        priority
        quality={100}
        sizes="100vw"
        unoptimized
      />
     <div className="absolute inset-0 bg-black/40 z-10"></div>
     <div className="absolute inset-0 flex items-center w-full  justify-center z-20">
         <div className="text-center px-4 md:px-8 w-3/4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tighter mb-8">
               COMPLETE DESIGN SOLUTIONS FOR REMODELING PROFESSIONALS
            </h1>
            <div className="space-y-4">
                <h5 className="text-sm md:text-lg lg:text-xl text-white font-mono mb-5" >KITCHEN & BATH DESIGNS • 3D WALKTHROUGHS • FREE WEBSITE & CRM • CLOSE DEALS 45% FASTER</h5>
                {/*<h5 className="text-sm md:text-lg lg:text-xl text-white font-mono">INTEGRATED. STRATEGIC. ARCANE.</h5>*/}
                <div className="flex gap-4 justify-center">
                    <Button text="GET A DEMO" variant="white" route="/contact" />
                    <Button text="ABOUT US" variant="glass" route="/about" />
                </div>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Hero