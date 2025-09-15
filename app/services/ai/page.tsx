import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import AIHero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import UseCases from './components/UseCases'
import Integration from './components/Integration'

export default function AIAssistantPage() {
  return (
    <>
      <Header />
      <AIHero />
      <Overview />
      <Features />
      <UseCases />
      <Integration />
      <Footer />
    </>
  )
}