"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

const IndustriesWeServe = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const industries = [
    {
      id: 1,
      number: "01",
      title: "GOURMET KITCHEN TRANSFORMATION",
      description: "Complete kitchen remodel with custom cabinet layouts and island design. Our 3D renderings showcased quartz countertops, professional appliances, and open shelving. Permit drawings approved in 5 days. Project value: $125,000. Zero design revisions needed.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      link: "/sunset-ridge"
    },
    {
      id: 2,
      number: "02",
      title: "MASTER BATH SPA RETREAT",
      description: "Luxury bathroom renovation with freestanding tub and walk-in shower. Our detailed tile specifications and plumbing layouts streamlined contractor workflow. AI-optimized design maximized space. Project value: $85,000. Closed in one client meeting.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      link: "/manhattan-penthouse"
    },
    {
      id: 3,
      number: "03",
      title: "OPEN CONCEPT CONVERSION",
      description: "Load-bearing wall removal with kitchen-living room integration. Our structural drawings and 3D walkthroughs helped clients visualize the transformation. Permit-ready plans included beam specifications. Project value: $175,000. Approved without revisions.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      link: "/coastal-villa"
    },
    {
      id: 4,
      number: "04",
      title: "TWO-STORY ADDITION",
      description: "Master suite addition above garage with bathroom and walk-in closet. Complete architectural drawings, elevations, and 3D renderings. Our CRM tracked all subcontractors and materials. Project value: $225,000. Finished 3 weeks early.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      link: "/urban-loft"
    },
    {
      id: 5,
      number: "05",
      title: "BASEMENT FINISHING PROJECT",
      description: "Full basement conversion with home theater, wet bar, and guest suite. Our 3D designs helped homeowners maximize every square foot. Included egress window plans for code compliance. Project value: $95,000. Design approval in 48 hours.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      link: "/wellness-spa"
    },
    {
      id: 6,
      number: "06",
      title: "WHOLE HOME RENOVATION",
      description: "Complete interior remodel including kitchen, three bathrooms, and flooring throughout. Our comprehensive design package included all specifications, 3D walkthroughs, and material selections. Project value: $350,000. Won against 4 competitors.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      link: "/tech-headquarters"
    }
  ]

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 1024) { // Only on desktop
      setHoveredItem(index)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only on desktop
      setHoveredItem(null)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleClick = (index: number) => {
    if (window.innerWidth < 1024) { // mobile/tablet
      setHoveredItem(hoveredItem === index ? null : index)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 1024) {
        const target = e.target as HTMLElement
        if (!target.closest('.pillar-item') && !target.closest('.mobile-card')) {
          setHoveredItem(null)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])


  return (
    <div className="industries-section flex flex-col w-full pb-8 md:pb-16 lg:pb-26 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-16 bg-black text-white relative z-10">
        <h5 className="font-mono text-xl md:text-2xl mb-6 lg:mb-10">RECENT REMODELING PROJECTS</h5>
        {industries.map((industry) => (
          <div 
            key={industry.id}
            className="pillar-item flex flex-row border-b-[1px] items-center border-white w-full gap-4 md:gap-6 lg:gap-10 py-4 md:py-5 lg:py-7 cursor-pointer" 
            onMouseEnter={() => handleMouseEnter(industry.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(industry.id)}
          >
              <h5 className="font-mono text-xl md:text-2xl lg:text-3xl min-w-[3rem] md:min-w-[4rem]">{industry.number}</h5>
              <h5 className="font-sans text-lg md:text-2xl lg:text-4xl">{industry.title}</h5>
          </div>
        ))}
       
        {mounted && hoveredItem && createPortal(
          <>
            {/* Desktop hover card */}
            <div 
              className="fixed pointer-events-none z-[99999] hidden lg:block"
              style={{
                left: `${window.innerWidth * 0.45 + (mousePos.x * 0.3)}px`,
                top: `${mousePos.y - 150}px`,
                width: '600px',
              }}
            >
              <div className="backdrop-blur-xs bg-white/3 border border-white/10 rounded-lg p-5 shadow-2xl overflow-hidden">
                <div className="relative h-72 w-full">
                  <Image
                    src={industries.find(industry => industry.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
                    alt="Industry preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="py-3">
                  <h3 className="text-white text-2xl font-mono font-semibold tracking-tighter mb-3">
                    {industries.find(industry => industry.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-gray-200 text-xl leading-tight">
                    {industries.find(industry => industry.id === hoveredItem)?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile click card */}
            <div 
              className="mobile-card fixed inset-x-4 bottom-20 z-[99999] lg:hidden"
            >
              <div className="backdrop-blur-md bg-black/90 border border-white/20 rounded-lg p-4 shadow-2xl overflow-hidden">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={industries.find(industry => industry.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
                    alt="Industry preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-mono font-semibold tracking-tight mb-2">
                    {industries.find(industry => industry.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industries.find(industry => industry.id === hoveredItem)?.description}
                  </p>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  )
}

export default IndustriesWeServe