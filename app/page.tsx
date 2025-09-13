"use client"
import Cards from "@/src/components/Cards";
import Hero from "@/src/components/Hero";
import React, { useEffect, useState } from "react";
import HeorAbout from "@/src/components/HeorAbout";
import Services from "@/src/components/Services";
import ReactLenis from "lenis/react"
import MobileApps from "@/src/components/MobileApps";
import Footer from "@/src/components/Footer";
import Contact from "@/src/components/Contact";
import Projects from "@/src/components/Project";
import HeroSlider from "@/src/components/HeroSlider";

import { AboutMe } from '@/src/components/AboutMe';

import TechStack from "@/src/components/TechStack";
import Section from "@/src/components/Section";


export default function Home() {

   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lenisOptions = {
    duration: isMobile ? 1.4 : 1.2, // Slower duration for mobile
    smoothWheel: true,
    wheelMultiplier: isMobile ? 0.2 : 1, // Reduced wheel multiplier for mobile
    touchMultiplier: 0.2, // Reduced touch sensitivity
    infinite: false,
  };
  return (
    <ReactLenis root  options={lenisOptions} className="  w-screen overflow-x-hidden bg-black ">
      <Hero />

      <div className="sm:h-[500dvh]" style={{ minHeight: '505vh', position: 'relative', zIndex: 2 }}>
        <HeorAbout />
      </div>

     
      
      <HeroSlider />
     

    
      <AboutMe />
      <Services />






      <Cards />
      <MobileApps />
      <Projects />

      <TechStack />

      <Section />



      <Contact />
      <Footer />
    </ReactLenis>
  );
}
