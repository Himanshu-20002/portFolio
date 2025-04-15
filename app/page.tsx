'use client'
import About from '@/src/components/About'
import Cards from '@/src/components/Cards'
import Hero from '@/src/components/Hero'
import React from 'react'
import Experties from '@/src/components/Experties'
import Canvas from '@/src/components/Canvas'
import Section from '@/src/components/Section'
import OutroLast from '@/src/components/OutroLast'
import HeorAbout from '@/src/components/HeorAbout'



export default function Home() {
  return (
    <main className='relative min-h-screen w-screen overflow-hidden bg-black '>
      <Hero />
      <HeorAbout />
      <Cards />
      <Experties />
      <About />
      <Canvas />
      <Section />
      <OutroLast />
    
     



    </main>
  )
}
