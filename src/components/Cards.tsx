"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { i, object, svg } from "motion/react-client";
import { Postr1 } from "../svg/index";
import { nb as Nb } from "../svg/index";
import Image from "next/image";
// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const cardArray = [
  {
    id: 1,
    image: (
     <Image
        src="/img/1.png"
        alt="3D Image"
        width={600}
        height={600}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    id: 2,
    image: <Image
        src="/img/2.png"
        alt="3D Image"
        width={600}
        height={620}
        style={{ objectFit: "cover" }}
      />
  },
  {
    id: 3,
    image: (
      <Image
        src="/img/3.png"
        alt="3D Image"
        width={500}
        height={520}
        style={{ objectFit: "cover" }}
      />
    ),
  },
];
const Cards = () => {
  //card array

  const [activeIndex, setActiveIndex] = useState(0);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const cardsRef = useRef(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const countContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement[]>([]); // Ref to store all card elements
  const totalCards = 3;

  const getRadius = () => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      return window.innerWidth < 900
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5;
    }
    return 500; // Default value if window is not defined
  };

  const arcAngle = Math.PI * 0.3; //wide determine
  const startArc = Math.PI / 2 - arcAngle / 3;

  const positionCards = (progress: number) => {
    const radius = getRadius();
    const totalTravel = 2 + totalCards / 7.5;
    const adjustedProgress = (progress * totalTravel - 1) * 0.75;

    // Position cards as before
    cardRef.current.forEach((el, i) => {
      const normalizedProgress = (totalCards - 1 - i) / totalCards;
      const cardProgress = normalizedProgress + adjustedProgress;
      const angle = startArc + arcAngle * cardProgress;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

      gsap.set(el, {
        x,
        y: -y + radius,
        rotation: -rotation,
        transformOrigin: "center center",
      });
    });

    // Optimized: Only check card positions every frame, not on scroll events
    // Find the card whose center is closest to 30% of viewport height
    if (typeof window !== "undefined") {
      const targetY = window.innerHeight * 0.4;
      let minDist = Infinity;
      let active = 0;
      cardRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - targetY);
        if (dist < minDist) {
          minDist = dist;
          active = i;
        }
      });
      setActiveIndex(active);
    }
  };

  useGSAP(() => {
    // Define SVG path for more complex motion
    //  const path = `M100,200 C100,100 400,100 400,200 c100,200 400,100 300,0`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#steps",
        start: "top 0%",
        end: "+=300%",
        scrub: 3,
        pin: true,
        

        onUpdate: (self) => {
          positionCards(self.progress);
        },
      },
    });

  
  }, []);
  useEffect(() => {
    // Access elements only after component is mounted
    if (stepsRef.current) {
      const stickyHeight = window.innerHeight * 7;
      positionCards(0);
    }
  }, []);
  // Animate number reveal with GSAP
  useEffect(() => {
    numberRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === activeIndex) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(el, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power3.in",
          pointerEvents: "none",
        });
      }
    });
  }, [activeIndex]);
  return (
    <section className="flex-1 w-screen overflow-x-hidden  h-[325dvh] bg-black">
      <div id="steps" ref={stepsRef} className="relative">
        <div className="step-counter">
          <div className="counter-title">
            <h1 className="text-white  rubik-moonrocks-regular max-lg:3xl   ">STEPS</h1>
          </div>
          <div className="count">
            <div className="count-container" ref={countContainerRef}>
              {[1, 2, 3, 4, 5].map((num, idx) => (
                <h1
                  key={num}
                  ref={el => numberRefs.current[idx] = el}
                  style={{
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: idx === activeIndex ? "translateY(0)" : "translateY(40px)",
                    position: "absolute",
                    left: 0,
                    top: -40,
                    width: "100%",
                    textAlign: "left",
                  
                    pointerEvents: idx === activeIndex ? "auto" : "none",
                  }}
                >
                  {`0${num}`}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div ref={cardsRef} className="cards  max-lg:scale-60 ">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              id="card"
              className="card transform-gpu w-72 h-96 bg-white  rounded-xl shadow-lg overflow-hidden"
              ref={(el) => (cardRef.current[index] = el)}
            >
              <div className="card-image contain-content w-full h-full">
                {cardArray[index % cardArray.length].image}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
