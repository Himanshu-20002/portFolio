import { useRive } from "@rive-app/react-canvas";
import React from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DecryptionText from "./animated/component/DecryptedText";
import { StarField } from "./animated/component/StarField";


const Hero = () => {


  const { RiveComponent: SecondHero, } = useRive({
    src: "/parallax_hero.riv",
    autoplay: true,
    stateMachines: "MainStateMachine",
  });




  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-13 pb-10 lg:py-0 overflow-hidden bg-black">

      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2  items-center ">
          {/* Left Content - Text aligned left on desktop, center on mobile */}
          <div className="text-center lg:text-left lg:pl-8">
            <div className="space-y-2 sm:space-y-6">
              <Badge className="bg-white/10 text-white/70 border-white/20 hover:bg-white/20 inline-flex text-[10px] sm:text-[14px] py-1 px-2">
                🚀 Available for Exciting Projects
              </Badge>

              <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-4 uppercase break-words">
                Designing <br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-purple-500">Digital</span> <br />
                <span className="fiery-text">Delight</span>
              </h1>

              <div className="text-sm sm:text-lg md:text-2xl font-mono text-purple-400/80 h-8 flex items-center justify-center lg:justify-start">
                <DecryptionText />
              </div>

              <p className="text-sm sm:text-lg text-gray-400 max-w-[500px] mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
                Full-stack Engineer & Creative Designer building premium digital products for ambitious brands and high-performing apps.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-3 ">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3"
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-2"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let&apos;s Talk
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-3 p-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://github.com/Himanshu-20002", "_blank", "noopener,noreferrer")}
                className="text-white/60 hover:text-white transition-colors h-8 w-8 p-0"
                aria-label="View my GitHub profile"
              >
                <Github className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://www.linkedin.com/in/himanshu-devdesign/", "_blank", "noopener,noreferrer")}
                className="text-white/60 hover:text-white transition-colors h-8 w-8 p-0"
                aria-label="View my LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => (window.location.href = "mailto:webuxhimanshu@gmail.com")}
                className="text-white/60 hover:text-white transition-colors h-8 w-8 p-0"
                aria-label="Send me an email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Stats - visible on mobile too */}
          </div>

          {/* Right Content - Dynamic Rive Animation or Secondary Visual */}
          <div className="relative flex flex-col items-center lg:items-end lg:mt-0 max-lg:pointer-events-none">
            <div className="relative max-lg:scale-[1.2] w-full h-[30dvh] aspect-square max-w-[460px] lg:max-w-none lg:h-[75vh] lg:w-[45vw]  transition-transform hover:scale-105 duration-700">
              {/* StarField Background */}
              <div className="absolute inset-0 z-0">
                <StarField className="w-full h-full" />
              </div>
              <SecondHero className="relative z-1000 w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="absolute lg:bottom-10 bottom-0 left-2/4 max-lg:scale-150  -translate-x-1/2 translate-y-0   w-full max-w-[1200px] lg:mx-18 px-6 flex justify-center lg:justify-end pointer-events-none">
          <div className="flex flex-row items-center gap-x-4 sm:gap-x-12 opacity-160 hover:opacity-100 transition-opacity duration-500 pointer-events-auto">
            {[
              { label: 'PROJECTS', val: '25+' },
              { label: 'EXP.', val: '03+' },
              { label: 'CLIENTS', val: '30+' },
              { label: 'STACK', val: '12' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-start group">
                <span className="text-[6px] sm:text-[8px] font-mono text-purple-400 tracking-[0.3em] group-hover:text-purple-300 transition-colors">
                  {stat.label}
                </span>
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="h-3 w-[1px] bg-purple-500/20 group-hover:bg-purple-500/50" />
                  <span className="text-sm sm:text-3xl font-black font-mono text-white tracking-widest leading-none">
                    {stat.val}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
