import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedTextLine } from "./AnimatedTextLines";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: withScrollTrigger ? contextRef.current : undefined,
        scrub: 1,
        //   markers:true,
        start: "top +=110%",
        end: "+=200",
      },
    });
    tl.from(contextRef.current, {
      y: "40vh",
      duration: 0.7,
      ease: "circ.out",
    });
    tl.from(headerRef.current, {
      y: "20",
      opacity: 0,
      duration: 0.9,
      ease: "circ.out",
    });
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0,100% 0,100% 100%, 0 100%" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-15 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col text-6xl font-bold flex-wrap gap-12  uppercase sm:gap-15 md:block text-transparent bg-clip-text`}
              style={{
                backgroundImage:
                  "linear-gradient(120deg,rgb(235, 223, 250),rgb(176, 0, 211),rgb(226, 202, 43))",
                textShadow: "1px 0 8px rgba(223, 255, 18, 0.06)",
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className="relative px-10 tex-black">
        <div className="absolute inset-x-10 border-t-2 border-white/50 " />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLine
            text={text}
            className="font-light uppercase value-text-responsive text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
