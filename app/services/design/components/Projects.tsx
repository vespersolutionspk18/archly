"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: 1,
      number: "01",
      title: "MODERN HILLSIDE RESIDENCE",
      description: "5,200 sq ft custom home in San Francisco. Complete architectural package including structural coordination. Challenging hillside lot with panoramic bay views. Project approved by planning department in first submission.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      number: "02",
      title: "MIXED-USE DEVELOPMENT",
      description: "12-unit apartment complex with ground floor retail in Austin. Full construction documentation, MEP coordination, and permit assistance. Project completed under budget and ahead of schedule.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      location: "Austin, TX"
    },
    {
      id: 3,
      number: "03",
      title: "HISTORIC RENOVATION",
      description: "Conversion of 1920s warehouse into modern lofts in Brooklyn. Preserved historic facade while modernizing interiors. Worked with landmarks commission for approvals.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      location: "Brooklyn, NY"
    },
    {
      id: 4,
      number: "04",
      title: "BOUTIQUE HOTEL",
      description: "28-room boutique hotel in Miami Beach. Art Deco inspired design meeting strict historic district requirements. Complete documentation for complex hospitality project.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      location: "Miami, FL"
    },
    {
      id: 5,
      number: "05",
      title: "CORPORATE HEADQUARTERS",
      description: "45,000 sq ft office building for tech company in Seattle. LEED Gold certified design with innovative workspace solutions. Open floor plans with collaboration zones.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      location: "Seattle, WA"
    },
    {
      id: 6,
      number: "06",
      title: "LUXURY ESTATE",
      description: "8,500 sq ft oceanfront estate in Malibu. Includes main house, guest house, and pool pavilion. Coastal commission approval obtained for sensitive beachfront site.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      location: "Malibu, CA"
    }
  ]

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 1024) {
      setHoveredItem(index)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setHoveredItem(null)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleClick = (index: number) => {
    if (window.innerWidth < 1024) {
      setHoveredItem(hoveredItem === index ? null : index)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 1024) {
        const target = e.target as HTMLElement
        if (!target.closest('.project-item') && !target.closest('.mobile-card')) {
          setHoveredItem(null)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="projects-section flex flex-col w-full pb-8 md:pb-16 lg:pb-26 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-16 bg-black text-white relative z-10">
        <h5 className="font-mono text-xl md:text-2xl mb-6 lg:mb-10">RECENT PROJECTS</h5>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item flex flex-row border-b-[1px] items-center border-white w-full gap-4 md:gap-6 lg:gap-10 py-4 md:py-5 lg:py-7 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(project.id)}
          >
              <h5 className="font-mono text-xl md:text-2xl lg:text-3xl min-w-[3rem] md:min-w-[4rem]">{project.number}</h5>
              <h5 className="font-sans text-lg md:text-2xl lg:text-4xl">{project.title}</h5>
              <p className="text-gray-500 text-sm md:text-base ml-auto">{project.location}</p>
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
                    src={projects.find(project => project.id === hoveredItem)?.image || ""}
                    alt="Project preview"
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="py-3">
                  <h3 className="text-white text-2xl font-mono font-semibold tracking-tighter mb-3">
                    {projects.find(project => project.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-gray-200 text-xl leading-tight">
                    {projects.find(project => project.id === hoveredItem)?.description}
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
                    src={projects.find(project => project.id === hoveredItem)?.image || ""}
                    alt="Project preview"
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-mono font-semibold tracking-tight mb-2">
                    {projects.find(project => project.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {projects.find(project => project.id === hoveredItem)?.description}
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

export default Projects