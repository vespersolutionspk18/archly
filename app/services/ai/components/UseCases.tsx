"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

const UseCases = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const useCases = [
    {
      id: 1,
      number: "01",
      title: "KITCHEN LAYOUT OPTIMIZATION",
      description: "AI analyzes kitchen dimensions and suggests optimal work triangle configurations. Recommends cabinet placement, island sizing, and appliance positioning for maximum efficiency. Ensures ADA compliance and proper clearances.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      result: "25% more storage, 30% better workflow"
    },
    {
      id: 2,
      number: "02",
      title: "BATHROOM SPACE PLANNING",
      description: "Maximizes functionality in tight spaces. AI suggests fixture placement, storage solutions, and accessibility features. Checks plumbing feasibility and ensures proper ventilation requirements are met.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      result: "40% space efficiency gain"
    },
    {
      id: 3,
      number: "03",
      title: "COST OVERRUN PREVENTION",
      description: "AI monitors design changes and instantly recalculates costs. Alerts you when selections exceed budget and suggests comparable alternatives. Tracks cumulative impact of change orders.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
      result: "Reduces overruns by 35%"
    },
    {
      id: 4,
      number: "04",
      title: "PERMIT APPROVAL ACCELERATION",
      description: "Ensures drawings meet local requirements before submission. AI checks setbacks, egress requirements, and structural specifications. Dramatically reduces revision requests from building departments.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      result: "70% faster permit approval"
    },
    {
      id: 5,
      number: "05",
      title: "MATERIAL WASTE REDUCTION",
      description: "Optimizes material orders based on actual measurements. AI calculates exact quantities needed, factors in standard sizes, and minimizes cutting waste. Prevents both shortages and excess.",
      image: "https://images.unsplash.com/photo-1609205343107-e1ec9b1da2b1",
      result: "20% less material waste"
    },
    {
      id: 6,
      number: "06",
      title: "SCHEDULE CONFLICT RESOLUTION",
      description: "AI identifies scheduling conflicts before they happen. Coordinates trade sequences, accounts for material lead times, and suggests optimal work flow to prevent delays and bottlenecks.",
      image: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52",
      result: "30% fewer project delays"
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
        if (!target.closest('.usecase-item') && !target.closest('.mobile-card')) {
          setHoveredItem(null)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="usecases-section flex flex-col w-full pb-8 md:pb-16 lg:pb-26 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-16 bg-white text-black relative z-10">
        <h5 className="font-mono text-xl md:text-2xl mb-6 lg:mb-10">REAL-WORLD USE CASES</h5>
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className="usecase-item flex flex-row border-b-[1px] items-center border-black w-full gap-4 md:gap-6 lg:gap-10 py-4 md:py-5 lg:py-7 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(useCase.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(useCase.id)}
          >
              <h5 className="font-mono text-xl md:text-2xl lg:text-3xl min-w-[3rem] md:min-w-[4rem]">{useCase.number}</h5>
              <h5 className="font-sans text-lg md:text-2xl lg:text-4xl">{useCase.title}</h5>
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
              <div className="bg-white border border-black/20 rounded-lg p-5 shadow-2xl overflow-hidden">
                <div className="relative h-72 w-full">
                  <Image
                    src={useCases.find(useCase => useCase.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
                    alt="Use case preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="py-3">
                  <h3 className="text-black text-2xl font-mono font-semibold tracking-tighter mb-3">
                    {useCases.find(useCase => useCase.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-zinc-700 text-xl leading-tight mb-3">
                    {useCases.find(useCase => useCase.id === hoveredItem)?.description}
                  </p>
                  <p className="text-black text-lg font-mono font-semibold">
                    Result: {useCases.find(useCase => useCase.id === hoveredItem)?.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile click card */}
            <div
              className="mobile-card fixed inset-x-4 bottom-20 z-[99999] lg:hidden"
            >
              <div className="bg-white border border-black/20 rounded-lg p-4 shadow-2xl overflow-hidden">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={useCases.find(useCase => useCase.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
                    alt="Use case preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-black text-lg font-mono font-semibold tracking-tight mb-2">
                    {useCases.find(useCase => useCase.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                    {useCases.find(useCase => useCase.id === hoveredItem)?.description}
                  </p>
                  <p className="text-black text-sm font-mono font-semibold">
                    Result: {useCases.find(useCase => useCase.id === hoveredItem)?.result}
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

export default UseCases