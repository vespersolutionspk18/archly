import React from 'react'
import Image from 'next/image'

const AIHero = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28 md:pb-10 lg:pt-36 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative z-10">
        <h5 className="w-full font-mono text-white text-lg sm:text-xl md:text-2xl">
          AI DESIGN ASSISTANT
        </h5>
        <h5 className="w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-normal">
          Intelligent design optimization powered by AI. Get layout suggestions, cost estimations, code compliance checking, and style consistency maintenance. Our AI assistant learns from thousands of successful projects to help you design better, bid smarter, and deliver faster.
        </h5>
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="AI-powered design assistant for contractors"
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

export default AIHero