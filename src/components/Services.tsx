'use client'

import React, { useRef, useEffect } from "react";
import AnimatedHeaderSection from "./animated/AnimatedHeaderSection";
import { servicesData } from "./constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplashCursor from "./Cursor";
import GradientSpheres from "./animated/component/GradientSpheres";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);// Reference to the section itself
  const serviceHeaders = useRef<Element[]>([]); // <h2> elements
  const serviceDescriptions = useRef<Element[]>([]); // <p> elements
  const serviceItems = useRef<Element[]>([]); // <h3> elements
  const text = `I build secure, dynamic full-stack apps
   with   interactive,performance-optimized web / mobile apps`
  const hasMounted = useRef(false);

  // 1. Avoid mediaQuery issue by using manual query
  const [isDesktop, setIsDesktop] = React.useState(false);

 useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    hasMounted.current = true;

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  //nimate the services on scroll
   useGSAP(() => {
    
    if (!hasMounted.current) return;
   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:  "#service",
        start: "top 0%",
        end: "+=300%",
        scrub: 5,
        pin: true,
        markers:true
        
    
       
      },
    })
    tl.from(serviceHeaders.current, {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      scrub:2,
      duration: 1,
    }, 0)
    tl.from(serviceDescriptions.current, {
      opacity: 0,
      y: 80,
      stagger: 0.3,
      scrub:2,
      duration: 1,
    }, 0.3)
    tl.from(serviceItems.current, {
      opacity: 0,
      y: 60,
      stagger: 0.1,
      scrub:2,
      duration: 0.8,
    }, 0.6);
  }, []);

  return (
    <section id="services" className=" bg-black  relative  h-[420dvh]  ">
<GradientSpheres  spher1Class={"about-gradient-sphere about-sphere-1  "} spher2Class={'gradient-sphere  sphere-4 '}/>
<>
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  // marginBottom: `${(servicesData.length - index - 1) * 1}rem`,
                }
              : {top: `calc(10vh + ${index * 5}em)`,}
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    </section>
  );
};


export default Services;