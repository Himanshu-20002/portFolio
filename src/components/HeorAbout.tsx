import { useGSAP } from "@gsap/react";
import React, { use } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRive } from "@rive-app/react-canvas";
import Image from "next/image";
const HeorAbout = () => {
  const { RiveComponent: FirstHero, rive: firstRive } = useRive({
    src: "/character_test.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });
  const { RiveComponent: Main, rive: mainRive } = useRive({
    src: "/space.riv",
    autoplay: true,
    stateMachines: "SM",
  });

  const { RiveComponent:Skull, rive:secondRive } = useRive({
          src: '/bouncing_spider.riv',
          autoplay: true,
          stateMachines: "State Machine 1",
      }); 

      
  useGSAP(() => {
    gsap.to("#face", {
      transform: "translateY(-200%)",
      opacity: 1,
      scrollTrigger: {
        trigger: "#tc",
        // pin:true,
        scrub: 5,
        start: "top -35%",
        end: "+=500",
        markers: true,
      },
    });
    gsap.to("#aboutHero", {
      transform: "translateY(100%)",
      scrollTrigger: {
        trigger: "#tc",

        scrub: 1,
        start: "top 90%",
        end: "+=500",
        markers: true,
      },
    });

    gsap.to("#aboutHero", {
      opacity: 1,
      ease: "power1.inOut",
    });

    gsap.set("#revealer-1", {
      clipPath:
        "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    });

    // ScrollTrigger.create({
    //     trigger: '#revealer',
    //     start: 'top 0%',
    //     end: '+=500',
    //     endTrigger: '#main',
    //     markers: true,
    //     pin:true,
    //     scrub: 1,
    //     pinSpacing:false,

    //  })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tc1",
        start: "top 0%",
        end: "+=500",
        markers: true,
        pin: true,

        scrub: 5,
      },
    });

    tl.to("#revealer", {
      clipPath:
        "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%, 100% 100%, 100% 100%, 100% 0%, 100% 0%)",
      rotation: 360,
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
      transform: "translateX(100%)",
      scrollTrigger: {
        trigger: "#tc1",
        start: "top 20%",
        end: "+=500",
        markers: true,
        scrub: 1,
      },
    });
  });
  return (
    <div
      id="tc1"
      className="relative w-screen px-8 h-[250vh]  mix-blend-hard-light bg-gradient-to-t from-purple-900 via-10% via-blue-600 via-35% to-blue-600 to-10% "
    >
      <div
        id="tc"
        className="flex  justify-center  items-center  max-w-7xl gap-88  pt-20"
      >
        <span
          id="face"
          className="absolute top-90 left-200 font-serif text-md lg:text-xl max-w-xl text-center lg:text-left"
        >
          | .A passionate software engineer and creative designer who thrives at
          the intersection of code and visual storytelling. I build immersive
          web/mobile apps with modern tools like React and Next.js,
          <br></br> while crafting dynamic 3D interactive experiences and
          animations using Rive.
          <br></br> "Debugging by day, debating by night. My hobbies include hex
          codes and existential crises."
        </span>

        <div className="absolute top-200 left-20 z-30  w-120 h-200 overflow-hidden">
          <span className="text-emerald-500 font-serif text-md lg:text-xl max-w-2xl text-center lg:text-left">
            Helping with :{" "}
          </span>
          <span className="text-amber-50 font-serif text-md lg:text-xl max-w-2xl text-center lg:text-left">
            Creative ideas/Redesigns Brand Marketing <br></br>Strategy UI/UX
            design & Development Social Media design<br></br> Motion Graphic &
            3D
          </span>
        </div>
        {/* <div className='absolute top-140 left-200 z-30  w-120 h-200 overflow-hidden'>


                </div> */}
        <div className="absolute top-260 left-20 z-30  w-120 h-200 overflow-hidden">
          <span className="text-amber-50 font-serif text-md lg:text-xl max-w-2xl text-center lg:text-left">
            {" "}
            I specialize in developing React Native apps that deliver smooth,
            responsive user experiences I am using ReactNative, NextJs, and
            Angular with Typescript along with Backend using NodeJs, ExpressJs ,
            Zustand and MongoDB or MySql for Database with mkv fast storage
            architecture
          </span>
        </div>
        <div className="absolute top-320 left-20 z-30  w-120 h-200 overflow-hidden">
          <span className="text-amber-50 font-serif text-md lg:text-xl max-w-2xl text-center lg:text-left">
            My toolbox: Development: React, Next.js, React Native (for mobile)
            Design & Animation: Rive, Figma, 3D modeling tools
            (Blender/Spline?), WebGL Mindset: Curiosity-first. I love bridging
            the gap between technical precision and creative experimentation.
          </span>
        </div>
      </div>
      <section id="pinned">
        <div
          id="revealer"
          className="absolute top-130 left-145 z-10 w-[120px] h-[120px] opacity-1"
        >
          <div
            id="revealer-1"
            className="absolute top-0 left-0 z-10 w-100% h-100% "
          >
           
            sdfsdfks
        
          
           
          </div>
          <div id="revealer-2"></div>
        </div>
      </section>

      <div className="absolute top-9 left-0 z-30  w-120 h-200 overflow-hidden">
        <FirstHero />
      </div>
      <div
        id="main"
        className="absolute top-190 left-190 z-30  w-120 h-200 overflow-hidden"
      >
        <Main />
      </div>
      <div
        id="aboutHero"
        className="absolute  w-full h-[300px] -top-80  left-0 "
      >
        <Skull />
        
      </div>
    </div>
  );
};

export default HeorAbout;
