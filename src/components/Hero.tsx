import { useRive } from "@rive-app/react-canvas";
import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GradientSpheres from "./animated/component/GradientSpheres";
import Particles from "./animated/StarfieldBackground";
import DecryptedText from "./animated/component/DecryptedText";
import { esp as Esp } from "../svg/index";
import { HeroCenter } from "../svg/index";
import StarfieldBackground from "./animated/StarfieldBackground";
gsap.registerPlugin(ScrollTrigger);
import {
  ArrowRight,
  Badge,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DecryptionText from "./animated/component/DecryptedText";

const Hero = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const texts = ["Himanshu", "glizzbot"];
  // Second Rive component
  const { RiveComponent: SecondHero, rive: SecondRive } = useRive({
    src: "/hero.riv",
    autoplay: true,
    stateMachines: "MainStateMachine",
  });

  // Background hero component
  const { RiveComponent: BgHero, rive: BgRive } = useRive({
    src: "/herobg.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#title", {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      x: 10,
    });
    tl.to("#developer", {
      duration: 0.5,
      opacity: 1,
      x: 10,
      ease: "power1.inOut",
    });
    tl.to("#description", {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      x: -20,
    });
  });

  const projects = [
    {
      title: "E-Commerce App",
      description: "React Native + Redux",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+App",
      tech: ["React Native", "Redux", "Stripe"],
    },
    {
      title: "3D Portfolio",
      description: "Three.js + GSAP",
      image: "/placeholder.svg?height=300&width=400&text=3D+Portfolio",
      tech: ["Three.js", "GSAP", "WebGL"],
    },
    {
      title: "AI Dashboard",
      description: "Next.js + OpenAI",
      image: "/placeholder.svg?height=300&width=400&text=AI+Dashboard",
      tech: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
      title: "Chat Application",
      description: "React + Socket.io",
      image: "/placeholder.svg?height=300&width=400&text=Chat+App",
      tech: ["React", "Socket.io", "Node.js"],
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    // <div className=" h-[100vh] w-screen overflow-hidden bg-black">
    //   <div className=" inset-0 z-10 overflow-hidden  mix-blend-hard-light">
    //     <BgHero className="w-full h-full object-cover" />

    //     <GradientSpheres
    //       spher1Class={" gradient-sphere  about-sphere-1"}
    //       spher2Class={"gradient-sphere  about-sphere-2"}
    //     />
    //   </div>

    //     <div className="absolute z-20 h-dvh p-10 m-10 w-screen   overflow-hidden  ">
    //       <HeroCenter
    //         width="100%"
    //         height="100%"
    //         className="max-lg:scale-400 overflow-hidden"
    //       />
    //     </div>

    //   {/* Main content wrapper with responsive padding */}
    //   <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-10">
    //     {/* Text content */}
    //     <div className="mb-8 w-full max-w-md text-center md:mb-0 md:w-1/2 md:text-left">
    //       <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
    //         hi,<span className="text-red-600">I'm </span>
    //       </h1>

    //       <DecryptedText
    //         text={"Himanshu"}
    //         speed={100}
    //         maxIterations={20}
    //         characters="ABCD1234!?"
    //         className="revealed sm:text-5xl text-white text-4xl font-[670]"
    //         parentClassName="all-letters"
    //         encryptedClassName="text-violet-200 text-4xl font-[600]"
    //       />
    //       <h3
    //         id="title"
    //         className="mb-4 -ml-2 opacity-0 text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]"
    //       >
    //         A.{" "}
    //         <span id="developer" className="text-white text-4xl ">
    //           developer
    //         </span>{" "}
    //         and{" "}
    //         <span id="designer" className="hover:text-yellow-300">
    //           Web designer
    //         </span>
    //       </h3>
    //       <p
    //         id="description"
    //         className="mb-6 ml-6  opacity-0 text-lg text-white sm:text-base"
    //       >
    //         "Designer by day, developer by night—basically a Batman who fights
    //         bad UX instead of criminals."
    //       </p>
    //     </div>

    //     {/* Rive animation with responsive sizing */}

    //     <Button className="  sm:mt-10 absolute bottom-60 bg-gradient-to-tl from-purple-900 via-violet-400 to-blue-800 hover:bg-red-500 px-6 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
    //       Get in touch
    //     </Button>
    //     <div className=" h-dvh w-screen  max-lg:scale-150 max-lg:-bottom-85">
    //       <Esp width="100%" height="108%" styles={{ objectFit: "contain" }} />
    //     </div>
    //     <div className=" z-99 relative h-[40vh] w-full overflow-hidden aspect-square md:h-[100vh]">
    //       <SecondHero className=" w-full h-full point:none max-w-full max-h-full" />
    //     </div>

    //     {/* <div className="-z-91 absolute top-0 left-0 h-full w-full  ">
    //     <StarfieldBackground />
    //   </div> */}
    //   </div>
    // </div>
    <section className="relative min-h-screen flex  overflow-hidden  max-lg:items-center max-lg:justify-center">
      <div className="   absolute overflow-hidden -z-99 h-[100vh]  w-[100vw]  ">
        <HeroCenter
          width="100%"
          height="100%"
          className="max-lg:scale-400 overflow-hidden scale-120"
        />
      </div>
      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2  items-center ">
          {/* Left Content - Text aligned left on desktop, center on mobile */}
          <div className=" text-center lg:text-left lg:pl-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 inline-flex">
                🚀 Available for Exciting Projects
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
               Designing Dompamine Hits"
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-light text-text-muted block  h-16  pt-8 wrap">
            <DecryptionText />
          </div>

                {/* <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 block mt-2">
                  That Inspire
                </span> */}
              </h1>

              <p className="text-xl text-gray-200 max-w-[600px] mx-auto lg:mx-0 leading-relaxed pt-9">
                “Full-stack dev with main character energy in terminal window
                React | Node | MongoDB | Delulu brilliance"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 ">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-3"
              >
                Let's Talk
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 p-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-yellow-400 hover:bg-white/10"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-yellow-400 hover:bg-white/10"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-yellow-400 hover:bg-white/10"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>

            {/* Stats - visible on mobile too */}
          </div>

          {/* Right Content - Dynamic Project Slider */}
          <div className="relative ">
            <div className="relative h-[24vh] w-full overflow-hidden aspect-square lg:h-[100vh]  lg:w-[55vw] lg:mr-39   max-lg:pointer-events-none">
              <SecondHero className=" w-full h-full max-lg:scale-160 pointer:none max-w-full max-h-full" />
            </div>

            <div className="grid grid-cols-4  gap-4 mt-12 max-w-lg mx-auto lg:mx-0 absolute right-2   z-99 max-lg:-bottom-19 bottom-10  ">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center lg:block">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-300">Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center lg:block">
                <div className="text-2xl font-bold text-white">7+</div>
                <div className="text-sm text-gray-300">Tech Stack</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-screen  max-lg:scale-170 max-lg:bottom-8  absolute  left-0 -z-99 -bottom-13">
          <Esp width="100%" height="108%" styles={{ objectFit: "contain" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
