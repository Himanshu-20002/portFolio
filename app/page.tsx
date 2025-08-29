"use client"
import Cards from "@/src/components/Cards";
import Hero from "@/src/components/Hero";
import React from "react";
import HeorAbout from "@/src/components/HeorAbout";
import Services from "@/src/components/Services";
import ReactLenis from "lenis/react"
import MobileApps from "@/src/components/MobileApps";
import Footer from "@/src/components/Footer";
import Contact from "@/src/components/Contact";
import Projects from "@/src/components/Project";
import HeroSlider from "@/src/components/HeroSlider";
import Features from "@/src/components/Features";
import {AboutMe} from '@/src/components/AboutMe';
import Experties from "@/src/components/Experties";


export default function Home() {
  return (
    <ReactLenis root className="  w-screen overflow-x-hidden bg-black ">
      <Hero />
{/* 
      <div style={{ minHeight: '800vh', position: 'relative', zIndex: 2 }}>
        <HeorAbout />
      </div> */}
      <HeroSlider />
      <AboutMe/>
      <Services />






      <Cards />
      <MobileApps />
      <Projects />
      <Features />
      {/* <OutroLast /> */}
      {/* <Experties /> */}

      {/* <About /> */}
      {/* <Canvas /> */}
      {/* <Section /> */}




      {/* <div style={{ position: "relative", zIndex: 10 }}>
        <Scene />
         
      </div> */}
      <Contact />
      <Footer />
    </ReactLenis>
  );
}
