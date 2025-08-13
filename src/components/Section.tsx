'use client'
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ModelCanvas } from "@/src/components/3d/Model2";
import { FaGooglePlay } from "react-icons/fa6";
import { BsAndroid } from "react-icons/bs";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

import Rive, { useRive } from "@rive-app/react-canvas";
import {
  useGLTF,
  Text,
  MeshTransmissionMaterial,
  Center,
  Text3D,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const header1Ref = useRef<HTMLHeadingElement>(null); // for ".header-1 h1"
  const titleH2Ref = useRef<HTMLHeadingElement>(null); // for ".tooltip .title h2"
  const descriptionPRef = useRef<HTMLParagraphElement>(null); // for ".tooltip .description p"

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    if (!header1Ref.current || !titleH2Ref.current || !descriptionPRef.current)
      return;

    const header1Split = new SplitText(header1Ref.current, {
      type: "chars",
      charsClass: "char",
    });

    const titleSplits = new SplitText(titleH2Ref.current, {
      type: "lines",
      linesClass: "line",
    });

    const descriptionSplits = new SplitText(descriptionPRef.current, {
      type: "lines",
      linesClass: "line",
    });

    header1Split.chars.forEach((char) => {
      char.innerHTML = `<span>${char.innerHTML}</span>`;
    });

    [...titleSplits.lines, ...descriptionSplits.lines].forEach((line) => {
      line.innerHTML = `<span>${line.innerHTML}</span>`;
    });

    // Cache for animations down the line?
    // gsap.set(header1Split.chars, { yPercent: 100 });
    // gsap.set([...titleSplits.lines, ...descriptionSplits.lines].flatMap(line => line.children), {
    //   yPercent: 100,
    // });
    const animOptions = { duration: 1, ease: "power3.out", stagger: 0.025 };
    const tooltipSelectors = [
      {
        trigger: 0.65,
        elements: [
          ".tooltip:nth-child(1) .icon ion-icon",
          ".tooltip:nth-child(1) .title .line >span",
          ".tooltip:nth-child(1) .description .line > span",
        ],
      },
      {
        trigger: 0.65,
        elements: [
          ".tooltip:nth-child(2) .icon ion-icon",
          ".tooltip:nth-child(2) .title .line > span",
          ".tooltip:nth-child(2) .description .line > span",
        ],
      },
    ];

    ScrollTrigger.create({
      trigger: ".product-overview",
      start: "75% bottom",
      markers: true,
      onEnter: () =>
        gsap.to(".header-1 h1 .char > span", {
          y: "10%",
          duration: 1,
          ease: "power3.out",
          stagger: 0.025,
        }),
      onLeaveBack: () =>
        gsap.to(".header-1 h1 .char > span", {
          y: "100%",
          duration: 1,
          ease: "power3.out",
          stagger: 0.025,
        }),
    });

    ScrollTrigger.create({
      trigger: ".product-overview",
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: ({ progress }) => {
        const headerProgress = Math.max(
          0,
          Math.min(1, (progress - 0.05) / 0.3)
        );
        gsap.to(".header-1", {
          xPercent:
            progress < 0.09
              ? 0
              : progress > 0.35
                ? -100
                : -100 * headerProgress,
        });

        const maskSize =
          progress < 0.33
            ? 0
            : progress > 0.3
              ? 100
              : 100 * ((progress - 0.2) / 0.1);
        gsap.to(".circular-mask", {
          clipPath: `circle(${maskSize}% at 50% 50%)`,
        });
        const header2Progress = (progress - 0.15) / 0.35;
        const header2Xpercent =
          progress < 0.15
            ? 100
            : progress > 0.5
              ? -200
              : 100 - 300 * header2Progress;
        gsap.to(".header-2", {
          xPercent: header2Xpercent,
          y: "100%",
        });

        const scaleX =
          progress < 0.45
            ? 0
            : progress > 0.65
              ? 100
              : 100 * ((progress - 0.45) / 0.2);
        gsap.to(".tooltip .divider", { scaleX: `${scaleX}%`, ...animOptions });
        tooltipSelectors.forEach(({ trigger, elements }) => {
          gsap.to(elements, {
            y: progress > trigger ? "0%" : "125%",
            ...animOptions,
          });
        });
      },
    });

    return () => {
      // Cleanup
      header1Split.revert();
      titleSplits.revert();
      descriptionSplits.revert();
    };
  }, []);

  const titleClass =
    "text-6xl font-bold text-white justify-center item-center ";
  const h1 =
    "text-black absolute top-50% left-50% text-[9vw] italic will-change-transform   translate(-50%, -50%)";
  return (
    <div>
      {/* <section className="intro">
        <h1 className={titleClass}>concept</h1>
      </section> */}

      <section className="product-overview bg-white">
        <div className="header-1">
          <h1 ref={header1Ref}>Showcase real</h1>
          <h1>
            when desi<span className="text-red-400">g</span>n Meets
          </h1>
          <h1>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              Code
            </span>
          </h1>

          <h1>stunning 🌀visual </h1>
        </div>
        <div className="header-2">
          <h2 className="mr-70">🎠transition</h2>
          <h2>crafting pixel perfect 🧨</h2>

          <h2>  experiences

          </h2>

          {/* <h2>.node.close</h2> */}
        </div>
        <div className="circular-mask"></div>
        <div className="tooltips">
          <div className="tooltip">
            <div className="icon flex-row">
              <div className="flex flex-row justify-start gap-10 ">
                <FaGooglePlay />
                <BsAndroid />
                <IoLogoAppleAppstore />
              </div>
            </div>
            <div className="divider"></div>
            <div className="title">
              <h2 ref={titleH2Ref}>Android / ios apps</h2>
            </div>
            <div className="description">
              <p ref={descriptionPRef}>
                Designed to match your pace, GRAND run all week on a single
                charge .No interruptions, no slowing down.
              </p>
            </div>
          </div>
          <div className="tooltip">
            <div className="icon">
              <div className="flex flex-row justify-start gap-10 ">
                <SiExpress /> <SiNextdotjs /> <IoLogoNodejs />
              </div>
            </div>
            <div className="divider"></div>
            <div className="title">
              <h2>web / applications</h2>
            </div>
            <div className="description">
              <p>
                Designed to match your pace, GRAND run all week on a single
                charge .No interruptions, no slowing down.
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="  max-lg:pointer-events-none -z-99 w-full  absolute top-0    left-44 h-full">
          <ModelCanvas />
        </div> */}
      </section>

      <section className="intro">
        <h1 className="text-6xl font-bold text-white justify-center item-center p-8 ">
          (That's a wrap)
        </h1>
      </section>
    </div>
  );
};

export default Section;
