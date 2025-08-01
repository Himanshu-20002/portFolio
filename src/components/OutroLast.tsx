import React from "react";
import AnimatedBentoGrid from "./animated/component/animated-bento-grid";
import Particles from "./animated/StarfieldBackground";
import GradientSpheres from "./animated/component/GradientSpheres";
// import MagicBento from "./animated/Bento";

const OutroLast = () => {
  return (
    <div className="relative w-screen h-[210vh] max-lg:h-[140vh] overflow-hidden flex  items-center justify-center  bg-gradient-to-b from-black from-10% via-sky-500 via-30% to-white w-screen h-200 ">
 
      <div className="w-full max-w-[90vw] h-[100vh]  items-center absolute t-0 l-0 justify-center">
      <GradientSpheres spher1Class={"gradient-sphere sphere-1"} spher2Class={'gradient-sphere  sphere-2'}/>

        <AnimatedBentoGrid />
      </div>
      
    </div>
  );
};

export default OutroLast;
