"use client"
import dynamic from "next/dynamic";
import Hero from "@/src/components/Hero";
import React, { useEffect, useState } from "react";
import ReactLenis from "lenis/react";

// Dynamically import heavy components
const Services = dynamic(() => import("@/src/components/Services"), { ssr: false });
const Footer = dynamic(() => import("@/src/components/Footer"), { ssr: false });
const Contact = dynamic(() => import("@/src/components/Contact"), { ssr: false });
const Projects = dynamic(() => import("@/src/components/Project"), { ssr: false });
const HeroSlider = dynamic(() => import("@/src/components/HeroSlider"), { ssr: false });
const AboutMe = dynamic(() => import("@/src/components/AboutMe").then(mod => mod.AboutMe), { ssr: false });
const TechStack = dynamic(() => import("@/src/components/TechStack"), { ssr: false });




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
    duration: isMobile ? 1.5 : 1.2, // Larger duration = slower, smoother scroll
    smoothWheel: true,
    wheelMultiplier: isMobile ? 0.5 : 1,
    touchMultiplier: isMobile ? 1.5 : 2, // Natural touch sensitivity for mobile
    infinite: false,
  };
  return (
    <ReactLenis root options={lenisOptions} className="  w-screen overflow-x-hidden bg-black ">
      <Hero />
      <AboutMe />
      <HeroSlider />
      <Services />

      {/* <MobileApps /> */}
      <Projects />

      <TechStack />





      <Contact />
      <Footer />
    </ReactLenis>
  );
}
