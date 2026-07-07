import dynamic from "next/dynamic";
import Hero from "@/src/components/Hero";
import React from "react";
import LenisProvider from "@/src/components/LenisProvider";
import LazySection from "@/src/components/LazySection";

// Dynamically import heavy components
const Services = dynamic(() => import("@/src/components/Services"));
const Footer = dynamic(() => import("@/src/components/Footer"));
const Contact = dynamic(() => import("@/src/components/Contact"));
const Projects = dynamic(() => import("@/src/components/Project"));
const HeroSlider = dynamic(() => import("@/src/components/HeroSlider"));
const AboutMe = dynamic(() => import("@/src/components/AboutMe").then(mod => mod.AboutMe));
const TechStack = dynamic(() => import("@/src/components/TechStack"));

export default function Home() {
  return (
    <LenisProvider>
      <Hero />
      <LazySection>
        <AboutMe />
      </LazySection>
      <LazySection>
        <HeroSlider />
      </LazySection>
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <TechStack />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
    </LenisProvider>
  );
}

