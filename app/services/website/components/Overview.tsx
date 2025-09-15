import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start relative z-10">
       <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-1/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[880px] rounded-lg lg:rounded-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555421689-491a97ff2040"
          alt="Professional website design and development"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 33vw"
          priority
          quality={100}
          unoptimized
        />
       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black px-2 sm:px-0">
       <h5 className="font-mono text-base sm:text-lg md:text-xl text-center lg:text-left">NO CATCH, TRULY FREE</h5>
       <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-snug">
        We believe every contractor deserves a professional online presence. That&apos;s why we include a complete website package with our CRM subscription. No setup fees, no hosting charges, no hidden costs - ever. Your website launches in 24 hours and remains free as long as you&apos;re a CRM subscriber.

<br className="hidden sm:block"></br><br className="hidden sm:block"></br>This isn&apos;t a basic template site. You get a fully customized, SEO-optimized website that ranks locally, converts visitors into leads, and integrates seamlessly with your CRM. Every lead captured goes directly into your pipeline, every form submission triggers automated follow-ups, and your portfolio updates automatically as you complete projects.
       </h5>
      <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 text-center lg:text-left inline-block" href="/contact">GET YOUR FREE WEBSITE</a>
       </div>
    </div>
  )
}

export default Overview