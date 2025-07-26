"use client";
import About from "@/src/components/About";
import Cards from "@/src/components/Cards";
import Hero from "@/src/components/Hero";
import React from "react";
import Experties from "@/src/components/Experties";
import Canvas from "@/src/components/Canvas";
import Section from "@/src/components/Section";
import OutroLast from "@/src/components/OutroLast";
import HeorAbout from "@/src/components/HeorAbout";

import dynamic from "next/dynamic";
import Scene from "@/src/components/3d/Scene";
import Ribbons from "@/src/components/Cursor";
import SplashCursor from "@/src/components/Cursor";
import Services from "@/src/components/Services";
import ReactLenis from "lenis/react"
import MainServices from "@/src/components/MainServices";


export default function Home() {
  return (
    <ReactLenis root className=" min-h-screen w-screen overflow-x-hidden bg-black ">
      <Hero />
      <HeorAbout />
      <Services/>
      {/* <OutroLast /> */}
      
      

   

    
      {/* <Cards /> */}
      <Experties />

      {/* <About /> */}
      {/* <Canvas /> */}
      {/* <Section /> */}
      
      
      

      {/* <div style={{ position: "relative", zIndex: 10 }}>
        <Scene />
         
      </div> */}
    </ReactLenis>
  );
}
