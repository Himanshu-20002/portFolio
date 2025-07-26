import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { body } from "motion/react-client";
gsap.registerPlugin(ScrollTrigger);
import TechStack from "@/src/components/TechStack";
import DarkVeil from "./animated/DarkVeil";
import GradientSpheres from "./animated/component/GradientSpheres";
import Particles from "./animated/StarfieldBackground";
import { useMediaQuery } from 'react-responsive';

const Experties = () => {
  const isMobile = useMediaQuery({maxWidth:767})
  const experienceRef = useRef(null);
  const techStackRef = useRef(null);

  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults:{
        ease:"power1.inOut"
      }
    });
    // tl.to(experienceRef.current, {
    //   opacity: 0,
    //   // x: isMobile ? 0 : "-100%", // No transform on mobile
    //   duration: 1.5, // Adjusted duration
    //   scrollTrigger: {
    //     trigger: "#parent",
    //     scroller: "body",
    //     start: "top 0%",
    //     end: "+=500",
    //     scrub: 2, // Adjusted scrub value
    //     pin: true,
    //   },
    // });

    // tl.to(techStackRef.current, {
    //   opacity: 1,
    //   // y: isMobile ? 0 : "-40%", // No transform on mobile
    //   duration: 1.5, // Adjusted duration
    //   scrollTrigger: {
    //     trigger: "#parent",
    //     scroller: "body",
    //     start: "top 10%",
    //     end: "+=500",
    //     scrub: 3, // Adjusted scrub value
    //   },
    // });
  }, []);

  return (
    <div
      id="parent"
      className="relative h-[100vh] w-screen bg-black mix-blend-hard-light"
    >
      
      <GradientSpheres
        spher1Class={" gradient-sphere  about-sphere-1"}
        spher2Class={"gradient-sphere  about-sphere-2"}
      />
      <TechStack ref={techStackRef} />
     

      {/* <h1
        id="Experience"
        ref={experienceRef}
        className="text-white text-[10vw] font-[600] opacity-0.2"
      >
    
        <span className="text-white">#TechStack</span>
        #TechStack
      </h1> */}
    </div>
      
  );
};

export default Experties;
