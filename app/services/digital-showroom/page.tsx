import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ShowroomHero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import Process from './components/Process'
import Features from './components/Features'
import Pricing from './components/Pricing'

export default function DigitalShowroomPage() {
  return (
    <>
      <Header />
      <ShowroomHero />
      <Overview />
      <Process />
      <Services />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}