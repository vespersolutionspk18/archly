import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start relative z-10">
       <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-1/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[880px] rounded-lg lg:rounded-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
          alt="Digital showroom planning"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 33vw"
          priority
          quality={100}
          unoptimized
        />
       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black px-2 sm:px-0">
       <h5 className="font-mono text-base sm:text-lg md:text-xl text-center lg:text-left">SELL SMARTER, NOT HARDER</h5>
       <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-snug">
        Your digital showroom becomes your most powerful sales tool - available 24/7, never takes a day off, and consistently delivers professional presentations. Clients can browse your portfolio, explore material options, and even start their project journey before your first meeting.

<br className="hidden sm:block"></br><br className="hidden sm:block"></br>We build showrooms that turn browsers into buyers. Interactive project galleries showcase your best work, while smart filtering helps clients find exactly what they&apos;re looking for. Material libraries with real pricing build trust, and integrated booking turns interest into appointments. This isn&apos;t just a gallery - it&apos;s a complete sales system designed for contractors.
       </h5>
      <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 text-center lg:text-left inline-block" href="/contact">BUILD YOUR SHOWROOM</a>
       </div>
    </div>
  )
}

export default Overview