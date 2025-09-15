import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import RenderingHero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import Process from './components/Process'
import Features from './components/Features'
import Pricing from './components/Pricing'

export default function RenderingServicesPage() {
  return (
    <>
      <Header />
      <RenderingHero />
      <Overview />
      <Process />
      <Services />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}