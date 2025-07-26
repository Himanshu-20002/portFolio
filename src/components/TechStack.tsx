import React from "react";
import StyleSheet from "react";
import ScrollVelocity from "./animated/AnimatedScrollText";
import { iconsList } from "../components/constants";
import TechIcon from "./animated/component/TechIcon";
import GradientSpheres from "./animated/component/GradientSpheres";
const TechStack = () => {
  return (
    <div id="TechStack" className="relative h-dvh w-screen overflow-hidden ">
      
      <div className=" z-100 mt-20 justify-center w-screen grid grid-cols-3 gap-10 items-center">
        {/* <div className="h-14 bg-violet-400"><p className='text-white 5xl:text-6xl uppercase'>html</p></div>
                <div className="h-14 bg-violet-500"><p>css</p></div>
                <div className="h-14 bg-violet-800"><p>react</p></div>
                <div className="h-14 bg-violet-900"><p>tailwind</p></div>
                <div className="h-14 bg-violet-100"><p>typescript</p></div>
                <div className="h-14 bg-violet-400"><p>rive</p></div>
                <div className="h-14 bg-violet-400"><p>gsap</p></div>
                <div className="h-14 bg-violet-400"><p>react-three-fiber</p></div>
                <div className="h-14 bg-violet-400"><p>three.js</p></div> */}

    
        
          <ScrollVelocity
            texts={["TechStack  TechStack", "Scroll Down  deapTech full-blown sass"]}
            velocity={200}
            className="custom-scroll-text  "
          />
        
      </div>
      <div className=" absolute z-99 top-120  bg-blue-300/30">
        <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
        <div className="marquee h-52">
          <div className="marquee-box mb:10 max-lg:scale-70 gap-12 gap-5">
            {iconsList.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {iconsList.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
