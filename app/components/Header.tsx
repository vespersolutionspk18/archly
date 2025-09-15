"use client";
import Button from './Button';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [leftDarkMode, setLeftDarkMode] = useState(false)
  const [centerDarkMode, setCenterDarkMode] = useState(false)
  const [rightDarkMode, setRightDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const services = [
    { name: 'Design Services', href: '/services/design' },
    { name: '3D Rendering', href: '/services/3d-rendering' },
    { name: 'Contractor CRM', href: '/services/crm' },
    { name: 'Free Website', href: '/services/website' },
    { name: 'Digital Showroom', href: '/services/digital-showroom' },
    { name: 'AI Assistant', href: '/services/ai' }
  ]


  useEffect(() => {
    const detectPointBrightness = (x: number, y: number) => {
      try {
        // Get all elements at this point
        const elementsAtPoint = document.elementsFromPoint(x, y)
        
        for (const element of elementsAtPoint) {
          if (element.closest('[data-header]')) continue
          if (element === document.documentElement || element === document.body) continue
          
          // For image elements, analyze the actual pixels
          if (element.tagName.toLowerCase() === 'img') {
            return analyzeImageBrightness(element as HTMLImageElement)
          }
          
          // For elements with background images
          const style = window.getComputedStyle(element)
          const bgImage = style.backgroundImage
          
          if (bgImage && bgImage !== 'none') {
            // Try to analyze background image
            const imageUrl = bgImage.match(/url\(['"]?(.+?)['"]?\)/)?.[1]
            if (imageUrl) {
              const img = document.createElement('img') as HTMLImageElement
              img.crossOrigin = 'anonymous'
              img.src = imageUrl
              if (img.complete) {
                return analyzeImageBrightness(img)
              }
            }
            // If we can't analyze the bg image, assume it's dark
            continue
          }
          
          // For solid background colors
          const backgroundColor = style.backgroundColor
          if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
            const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch.map(Number)
              const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
              return brightness > 128
            }
          }
        }
        
        // Fallback
        return false
        
      } catch {
        return false
      }
    }
    
    const analyzeImageBrightness = (imgElement: HTMLImageElement) => {
      try {
        // Check if image is loaded
        if (!imgElement.complete || imgElement.naturalWidth === 0) {
          return false
        }
        
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return false
        
        // Use smaller sample for performance
        const sampleSize = 20
        canvas.width = sampleSize
        canvas.height = sampleSize
        
        // Draw the image to canvas
        ctx.drawImage(imgElement, 0, 0, sampleSize, sampleSize)
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize)
        const data = imageData.data
        
        let totalBrightness = 0
        let pixelCount = 0
        
        // Sample every pixel
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
          totalBrightness += brightness
          pixelCount++
        }
        
        const averageBrightness = totalBrightness / pixelCount
        return averageBrightness > 140 // Slightly higher threshold for images
        
      } catch {
        return false
      }
    }

    const detectElementBrightness = (element: Element | null) => {
      if (!element) return false
      
      const rect = element.getBoundingClientRect()
      const samplePoints = []
      
      // Create a grid of sample points within the element bounds
      const rows = Math.max(2, Math.floor(rect.height / 20))
      const cols = Math.max(3, Math.floor(rect.width / 30))
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = rect.left + (rect.width / cols) * (col + 0.5)
          const y = rect.top + (rect.height / rows) * (row + 0.5)
          samplePoints.push({ x, y })
        }
      }
      
      // Sample brightness at each point
      let lightPoints = 0
      let validPoints = 0
      
      samplePoints.forEach(point => {
        const isLight = detectPointBrightness(point.x, point.y)
        if (isLight) lightPoints++
        validPoints++
      })
      
      // Use majority vote: if more than half the points are on light background, use dark mode
      return validPoints > 0 ? (lightPoints / validPoints) > 0.5 : false
    }

    const detectBackgroundBrightness = () => {
      // Get actual element references
      const logoElement = document.querySelector('[data-header] [data-logo]')
      const navElement = document.querySelector('[data-header] [data-nav]')
      const buttonElement = document.querySelector('[data-header] [data-button]')
      
      // Detect brightness for each actual element
      try {
        const logoResult = detectElementBrightness(logoElement)
        const navResult = detectElementBrightness(navElement)
        const buttonResult = detectElementBrightness(buttonElement)
        
        setLeftDarkMode(logoResult)
        setCenterDarkMode(navResult)
        setRightDarkMode(buttonResult)
      } catch {
        // Fallback to simple scroll-based detection
        const heroHeight = window.innerHeight
        const scrollY = window.scrollY
        const fallbackDark = scrollY > heroHeight
        setLeftDarkMode(fallbackDark)
        setCenterDarkMode(fallbackDark)
        setRightDarkMode(fallbackDark)
      }
    }

    const throttledDetect = (() => {
      let timeoutId: ReturnType<typeof setTimeout>
      return () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(detectBackgroundBrightness, 16) // ~60fps
      }
    })()

    // Initial detection
    detectBackgroundBrightness()
    
    window.addEventListener('scroll', throttledDetect)
    window.addEventListener('resize', throttledDetect)
    
    return () => {
      window.removeEventListener('scroll', throttledDetect)
      window.removeEventListener('resize', throttledDetect)
    }
  }, [])

  return (
    <>
      <div data-header className="fixed top-2 left-2 right-2 flex flex-row justify-between p-2 items-center rounded-md" style={{
        zIndex: 9999,
        background: 'rgba(0,0,0,0.1)',
        backdropFilter: 'blur(4px) saturate(180%) contrast(120%)',
        WebkitBackdropFilter: 'blur(04px) saturate(180%) contrast(120%)',
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.1),
          inset 0 -1px 0 rgba(0,0,0,0.1),
          0 4px 12px rgba(0,0,0,0.15)
        `
      }}>
         <Link href="/" data-logo className="lg:w-1/5 w-auto transition-all duration-150 ease-out">
           <span className={`text-2xl md:text-3xl font-bold tracking-tight ${leftDarkMode ? 'text-black' : 'text-white'}`}>
             Archuviz
           </span>
         </Link>
         
         {/* Desktop Navigation */}
          <div data-nav className={`hidden lg:flex w-3/5 flex-row gap-10 font-medium text-md justify-center transition-colors duration-150 ease-out ${centerDarkMode ? 'text-black' : 'text-white'}`}>
              <Link href="/" className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                Home
              </Link>
              <Link href="/about" className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                About
              </Link>
              <div
                className="relative"
                data-services-dropdown
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}
                >
                  Services
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <>
                    {/* Invisible bridge to prevent gap */}
                    <div className="absolute top-full left-0 right-0 h-2" />
                    <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 w-48">
                      <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ zIndex: 10000 }}>
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block px-4 py-3 text-black hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <Link href="/contact" className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                Contact
              </Link>
          </div>

          {/* Desktop Button */}
          <div data-button className="hidden lg:flex w-1/5 flex-row gap-3 justify-end transition-all duration-150 ease-out">
            <Button route="/contact" text="GET IN TOUCH" variant={rightDarkMode ? "black" : "white"}/>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-150 ${centerDarkMode ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-16 left-2 right-2 bg-white rounded-lg shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col py-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-black hover:bg-gray-100 transition-colors cursor-pointer border-b border-gray-100">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-black hover:bg-gray-100 transition-colors cursor-pointer border-b border-gray-100">
                About
              </Link>
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full px-6 py-4 text-black hover:bg-gray-100 transition-colors cursor-pointer border-b border-gray-100 flex items-center justify-between"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileServicesOpen && (
                  <div className="bg-gray-50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                        className="block pl-12 pr-6 py-3 text-black hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-black hover:bg-gray-100 transition-colors cursor-pointer border-b border-gray-100">
                Contact
              </Link>
              <div className="px-6 py-4">
                <Button route="/contact" text="GET IN TOUCH" variant="black"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header