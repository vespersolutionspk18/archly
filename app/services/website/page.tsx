import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import WebsiteHero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import Process from './components/Process'

export default function FreeWebsitePage() {
  return (
    <>
      <Header />
      <WebsiteHero />
      <Overview />
      <Features />
      <Process />
      <Footer />
    </>
  )
}