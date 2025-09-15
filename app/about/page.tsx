import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import AboutEthos from './components/AboutEthos';
import AboutHero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';


export default function Home() {
  return (
    <>
    <Header />
    <AboutHero/>
    <WhatWeDo/>
    <AboutEthos/>
    <Footer />
    </>
    );
}