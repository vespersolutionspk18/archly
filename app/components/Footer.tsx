"use client";
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false)

  const services = [
    { name: 'Design Services', href: '/services/design' },
    { name: '3D Rendering', href: '/services/3d-rendering' },
    { name: 'Contractor CRM', href: '/services/crm' },
    { name: 'Free Website', href: '/services/website' },
    { name: 'Digital Showroom', href: '/services/digital-showroom' },
    { name: 'AI Assistant', href: '/services/ai' }
  ]

  const handleSectorsClick = () => {
    if (pathname === '/') {
      const industriesSection = document.querySelector('.industries-section')
      if (industriesSection) {
        industriesSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/')
      setTimeout(() => {
        const industriesSection = document.querySelector('.industries-section')
        if (industriesSection) {
          industriesSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <>
      <div className="flex flex-col border-t-white/10 border-t-[2px] w-full pb-6 md:pb-8 lg:pb-10 pt-8 md:pt-12 lg:pt-16 px-4 md:px-6 lg:px-10 bg-black text-white relative z-20">
          <Link href="/">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white cursor-pointer">
              Archuviz
            </span>
          </Link>
          <div className="flex flex-col gap-8 md:gap-16 lg:gap-26 py-8 md:py-12 lg:py-16">
              <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
                  <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-[30%]">
                      <div className="flex flex-col">
                          <h5 className="font-mono text-white text-lg md:text-xl lg:text-2xl">HEADQUARTERS:</h5>
                          <p className="text-base lg:text-lg">15260 Ventura Blvd, Suite 1200<br/>Sherman Oaks, CA 91403</p>
                      </div>
                      <div className="flex flex-col">
                          <h5 className="font-mono text-white text-lg md:text-xl lg:text-2xl">CONTACT:</h5>
                          <p className="text-base lg:text-lg">(818) 925-7842</p>
                          <p className="text-base lg:text-lg">hello@archuviz.co</p>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3 w-full lg:w-[14%] text-2xl md:text-3xl lg:text-4xl font-mono">
                      <Link href="/" className="cursor-pointer hover:text-gray-300 transition-colors">HOME</Link>
                      <Link href="/about" className="cursor-pointer hover:text-gray-300 transition-colors">ABOUT</Link>
                      <a onClick={() => setIsServicesModalOpen(true)} className="cursor-pointer hover:text-gray-300 transition-colors">SERVICES</a>
                      <a onClick={handleSectorsClick} className="cursor-pointer hover:text-gray-300 transition-colors">SECTORS</a>
                      <Link href="/contact" className="cursor-pointer hover:text-gray-300 transition-colors">CONTACT</Link>
                  </div>
              </div>
          </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
          <h5 className="text-sm md:text-base lg:text-lg font-mono">
              ARCHUVIZ 2025. ALL RIGHTS RESERVED.
          </h5>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 underline text-sm md:text-base lg:text-lg font-mono">
          <a className="cursor-pointer hover:text-gray-300 transition-colors">PRIVACY POLICY</a>
          <a className="cursor-pointer hover:text-gray-300 transition-colors">TERMS OF SERVICE</a>
          <a className="cursor-pointer hover:text-gray-300 transition-colors">COOKIE POLICY</a>
          </div>
      </div>
      </div>

      {/* Services Modal */}
      {isServicesModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsServicesModalOpen(false)} />
          <div className="relative bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-mono text-2xl text-white">SERVICES</h2>
                <button
                  onClick={() => setIsServicesModalOpen(false)}
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={() => setIsServicesModalOpen(false)}
                    className="text-white hover:text-gray-400 transition-colors py-2 text-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer