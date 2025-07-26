import { useGSAP } from "@gsap/react";
import React, { use } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRive } from "@rive-app/react-canvas";
import Image from "next/image";
import Ribbons from "./Cursor";
import GradientSpheres from "../components/animated/component/GradientSpheres";
const HeorAbout = () => {
  const { RiveComponent: FirstHero, rive: firstRive } = useRive({
    src: "/interactive_flower.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  const { RiveComponent: Skull, rive: secondRive } = useRive({
    src: "/bouncing_spider.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  useGSAP(() => {
    gsap.to("#face", {
      transform: "translateY(-100%)",
      opacity: 1,
      duration: 10,
      scrollTrigger: {
        trigger: "#tc",

        scrub: 5,
        start: "top -39%",
        end: "+=500",
      },
    });
    gsap.to("#aboutHero", {
      transform: "translateY(100%)",
      scrollTrigger: {
        trigger: "#tc",

        scrub: 1,
        start: "top 90%",
        end: "+=500",
      },
    });

    gsap.to("#aboutHero", {
      opacity: 1,
      ease: "power1.inOut",
    });

    gsap.set("#revealer-1", {
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      clipPath:
        "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%, 50% 0%)",
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
        end: "+=900",

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
        trigger: "#tc",
        start: "top 20",
        end: "+=500",

        scrub: 1,
      },
    });
  });
  return (
    <div
      id="tc1"
      className="relative w-screen px-8 h-[250vh] bg-black  mix-blend-hard-light overflow-hidden "
    >
      <GradientSpheres
        spher1Class={"gradient-sphere sphere-1"}
        spher2Class={"gradient-sphere  sphere-2"}
      />
      <div
        id="tc"
        className="flex  justify-center  items-center  max-w-7xl gap-88  pt-20"
      >
        <span
          id="face"
          className="p-10 absolute top-90 left-200 font-serif text-md text-left lg:text-xl text-white max-w-xl t ext-center max-lg:left-0"
        >
          A passionate software engineer and creative designer who thrives at
          the intersection of code and visual storytelling. I build immersive
          web/mobile apps with modern tools like React and Next.js,
          <br></br> while crafting dynamic 3D interactive experiences and
          animations using Rive.
          <br></br>
          <br></br> "Debugging by day, debating by night. My hobbies include hex
          codes and existential crises."
        </span>

        {/* <div className="absolute top-200 left-20 z-30  w-120 h-200 overflow-hidden">
          <span className="text-amber-50 font-serif text-md lg:text-xl max-w-2xl text-center lg:text-left">
            Creative ideas/Redesigns Brand Marketing <br></br>Strategy UI/UX
            design & Development Social Media design<br></br> Motion Graphic &
            3D
          </span>
        </div> */}

        <div className="relative top-200 left-20 z-30  w-120 h-200 overflow-hidden">
          <span className="text-amber-50 font-serif text-lg lg:text-3xl max-w-2xl text-center lg:text-left">
            {" "}
            What You'll Find Below
          </span>
        </div>
        <div className="absolute top-320 left-20 z-30  w-120 h-200 overflow-hidden">
          <span className="text-amber-50 font-serif text-md lg:text-xl max-w-2xl text-center lg:text-left">
            From the services I offer to the projects I've built—this portfolio
            is here to give you a clear picture of what I do and how I can help.
          </span>
        </div>
      </div>

      {/* <div className="absolute top-9 left-20 z-30  w-120 h-200 overflow-hidden">
        <FirstHero />
      </div> */}
      {/* <div
        id="main"
        className="absolute top-190 left-190 -z-30  w-120 h-200 overflow-hidden"
      >
        <Main />
      </div> */}
      {/* <div
        id="aboutHero"
        className="absolute  w-full h-[300px] -top-80  left-0 "
      >
        <Skull />
      </div> */}
      <section id="pinned">
        <div
          id="revealer"
          className="absolute top-0 left-145 z-10 w-[120px] h-[120px] opacity-1"
        >
          <div
            id="revealer-1"
            className="absolute top-0 left-0 z-10 w-full h-full bg-red-500 "
          >
            sdfsdfks
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeorAbout;
