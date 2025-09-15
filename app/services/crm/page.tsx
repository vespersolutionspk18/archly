import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CRMHero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import Process from './components/Process'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'

export default function ContractorCRMPage() {
  return (
    <>
      <Header />
      <CRMHero />
      <Overview />
      <Process />
      <Features />
      <Benefits />
      <Pricing />
      <Footer />
    </>
  )
}