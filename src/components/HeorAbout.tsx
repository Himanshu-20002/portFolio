"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { icon1, icon3, } from '@/public/icon';
import Image from "next/image";


const ICONS = [icon3, icon1, icon1, icon3,];
const TEXTS = [
  "Web Design   ",
  "That stand-Out  ",
  "Timeless  ",
  "EXPERIENCE ",
  "Let's ",
  "get INTO ",
  "real-deal",
];

export default function HeroAbout() {
  const heroHeaderRef = useRef<HTMLDivElement>(null);
  const animatedIconsRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLSpanElement[]>([]);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 1000;
    const headerIconSize = isMobile ? 30 : 60;

    // Precompute scale
    const currentIconSize =
      iconRefs.current[0]?.getBoundingClientRect().width || headerIconSize;
    const exactScale = headerIconSize / currentIconSize;

    // Reset animations before building
    gsap.set(textRefs.current, { opacity: 0 });
    gsap.set(animatedIconsRef.current, { scale: 1, opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 7}`,
        //${window.innerHeight * 8}
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1️⃣ Header moves up & fades
    tl.to(heroHeaderRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    });

    // 2️⃣ Icons move and rotate in
    tl.to(animatedIconsRef.current, {
      y: -window.innerHeight * 0.3,
      duration: 0.3,
      ease: "none",
    }, "<");

    tl.to(iconRefs.current, {
      rotate: 180,
      stagger: 0.05,
      ease: "none",
    }, "<");

    // 3️⃣ Icons scale toward center
    tl.to(animatedIconsRef.current, {
      scale: exactScale,
      ease: "power2.inout",
      duration: 0.3,
    });


    tl.to(iconRefs.current, {
      opacity: 0,
      ease: "none",
    });

    // 4️⃣ Change background
    tl.to(heroSectionRef.current, {
      backgroundColor: "#e3e3db",
      duration: 0.2,
    });

    // 5️⃣ Show text segments one by one
    tl.to(textRefs.current, {
      opacity: 1,
      stagger: 0.1,

    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className=" h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      <div ref={heroHeaderRef} className="absolute  top-20 items-center justify-center  text-center">
        <h1 className="hero-title">Creative</h1>
        <h1 className="hero-title">Developer</h1>
        <p className="text-xl font-medium text-white">
          Packed with<br />Endless web design
        </p>
      </div>

      <div ref={animatedIconsRef} className="animated-icons flex gap-4">
        {ICONS.map((icon, idx) => (
          <div
            key={idx}
            ref={(el: HTMLDivElement | null) => {
              if (iconRefs.current && el) {
                iconRefs.current[idx] = el;
              }
            }}
            className="animated-icon"
          >
            <Image
              src={icon}
              alt={`Icon ${idx + 1}`}
              width={100}
              height={100}
              className="icon-svg"
            />
          </div>
        ))}
      </div>

      <h1 className="animated-text mt-4">
        {TEXTS.map((text, idx) => (
          <span
            key={idx}
            ref={(el: HTMLDivElement | null) => {
              if (textRefs.current && el) {
                textRefs.current[idx] = el;
              }
            }}
            className={`text-segment ${text.trim() === 'EXPERIENCE' ? 'text-red-400' : 'text-black'}`}
          >
            {text}
          </span>
        ))}
      </h1>
    </section>
  );
}
