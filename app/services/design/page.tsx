import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import DesignHero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import Process from './components/Process'
import Features from './components/Features'
import Pricing from './components/Pricing'

export default function DesignServicesPage() {
  return (
    <>
      <Header />
      <DesignHero />
      <Overview />
      <Process />
      <Services />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}