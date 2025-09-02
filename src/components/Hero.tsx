import { useRive } from "@rive-app/react-canvas";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { esp as Esp } from "../svg/index";
import { HeroCenter } from "../svg/index";

gsap.registerPlugin(ScrollTrigger);
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DecryptionText from "./animated/component/DecryptedText";




const Hero = () => {


  // Second Rive component
  const { RiveComponent: SecondHero, rive: SecondRive } = useRive({
    src: "/parallax_hero.riv",
    autoplay: true,
    stateMachines: "MainStateMachine",
  });

  // Background hero component
  // const { RiveComponent: BgHero, rive: BgRive } = useRive({
  //   src: "/herobg.riv",
  //   autoplay: true,
  //   stateMachines: "State Machine 1",
  // });


  return (
    <section className="relative min-h-screen flex  overflow-hidden  max-lg:items-center max-lg:justify-center  ">
      <div className="   absolute overflow-hidden -z-99 h-[100vh]  w-[100vw]  xl:right-0 ">
        <HeroCenter
          width="100%"
          height="100%"
          className="max-lg:scale-400 overflow-hidden scale-120 "
        />
        {/* <BgHero className=" w-full h-full max-lg:scale-400 overflow-hidden scale-120" /> */}
      </div>
      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2  items-center ">
          {/* Left Content - Text aligned left on desktop, center on mobile */}
          <div className=" text-center lg:text-left lg:pl-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 inline-flex">
                🚀 Available for Exciting Projects
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight  ">
                Designing Dompamine <span className="fiery-text">  Hits</span>
              </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-light text-text-muted block  text-white h-16  pt-8 wrap">
                  <DecryptionText />
                </div>

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
            <div className="relative h-[24vh] w-full overflow-hidden aspect-square lg:h-[100vh]  lg:w-[55vw] lg:mr-39   max-lg:pointer-events-none  2xl:translate-x-1/4">
              <SecondHero className=" w-full h-full max-lg:scale-160 pointer:none max-w-full max-h-full" />
            </div>

            <div className="grid grid-cols-4  gap-4 mt-12 max-w-lg mx-auto lg:mx-0 absolute   z-99 max-lg:-bottom-19 bottom-10 xl:right-0 2xl:-right-140">
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
