import React from "react";
import { iconsList } from "../components/constants";
import TechIcon from "./animated/component/TechIcon";


const TechStack = () => {
  return (
    <div
      id="TechStack"
      className="relative w-full min-h-[220px] overflow-hidden mix-blend-plus-darker"
    >
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-blue-300/30">
        {/* <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div> */}
        <div className="marquee h-52 flex items-center">
          <div className="marquee-box gap-5 flex">
            {iconsList.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
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