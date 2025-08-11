"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon1, Icon2, Icon3, Icon4,  Icon6 } from "../svg/index";
import { useGSAP } from "@gsap/react";

declare global {
  interface Window {
    duplicateIcons?: any[];
  }
}

gsap.registerPlugin(ScrollTrigger);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon6];
const TEXTS = [
  "Web Design   ",
  "That stand-Out  ",
  "Timeless  ",
  " EXPERIENCES ",
   "Lets ",
  "get INTO ",
  "real-deal",
];

const HeorAbout = () => {
  const heroHeaderRef = useRef(null);
  const animatedIconsContainerRef = useRef(null);
  const iconElementsRef = useRef<Array<HTMLDivElement | null>>([]);
  const textSegmentsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const placeholdersRef = useRef<Array<HTMLDivElement | null>>([]);
  const heroSectionRef = useRef(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const textAnimationOrder: {
      segment: HTMLElement;
      originalIndex: number;
    }[] = [];
    textSegmentsRef.current.forEach((segment, index) => {
      if (segment) textAnimationOrder.push({ segment, originalIndex: index });
    });

    // Shuffle text animation order
    for (let i = textAnimationOrder.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [textAnimationOrder[i], textAnimationOrder[j]] = [
        textAnimationOrder[j],
        textAnimationOrder[i],
      ];
    }

    const isMobile = window.innerWidth <= 1000;
    const headerIconSize = isMobile ? 30 : 60;

    const currentIconSize =
      iconElementsRef.current[0]?.getBoundingClientRect().width ||
      headerIconSize;
    const exactScale = headerIconSize / currentIconSize;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 8}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          // Animate text segments
          textSegmentsRef.current.forEach((segment) => {
            gsap.set(segment, { opacity: 0 });
          });
          // Animate header

          if (progress < 0.3) {
            const moveProgress = progress / 0.3;
            const containerMoveY = -window.innerHeight * 0.3 * moveProgress;

            if (progress < 0.15) {
              const headerProgress = progress / 0.15;
              const headerMoveY = -50 * headerProgress;
              const headerOpacity = 1 - headerProgress;
              gsap.set(heroHeaderRef.current, {
                transform: `translate(-50%,calc(-50% + ${headerMoveY}px))`,
                opacity: headerOpacity,
              });
            } else {
              gsap.set(heroHeaderRef.current, {
                transform: "translate(-50%,calc(-50% + -50px))",
                opacity: 0,
              });
            }

            // Animate icons container

            if (animatedIconsContainerRef.current) {
              gsap.set(animatedIconsContainerRef.current, {
                x: 0,
                y: containerMoveY,
                scale: 1,
                opacity: 1,
              });
            }

            iconElementsRef.current.forEach((icon, index) => {
              if (!icon) return;
              const staggerDelay = index * 0.1;
              const iconStart = staggerDelay;
              const iconEnd = staggerDelay + 0.5;

              const iconProgress = gsap.utils.mapRange(
                iconStart,
                iconEnd,
                0,
                1,
                moveProgress
              );
              const clampProgress = Math.max(0, Math.min(1, iconProgress));
              const startOffset = -containerMoveY;
              const individualY = startOffset * (1 - clampProgress);

              gsap.set(icon, {
                x: 0,
                y: individualY,
              });
            });
          } else if (progress < 0.65) {
            const scaleProgress = (progress - 0.3) / 0.3;
            gsap.set(heroHeaderRef.current, {
              transform: `translate(-50%,calc(-50% + -50px))`,
              opacity: 0,
            });

            if (scaleProgress > 0.5) {
              if (heroSectionRef.current) {
                heroSectionRef.current.style.backgroundColor = "#f3f31cff";
              }
            } else {
              heroSectionRef.current.style.backgroundColor = "#141414";
            }
          

            const targetCenterY = window.innerHeight / 2;
            const targetCenterX = window.innerWidth / 2;
            const containerRect =
              animatedIconsContainerRef.current.getBoundingClientRect();
            const currentCenterX = containerRect.left + containerRect.width / 2;
            const currentCenterY = containerRect.top + containerRect.height / 2;
            const deltaX = (targetCenterX - currentCenterX) * scaleProgress;
            const deltaY = (targetCenterY - currentCenterY) * scaleProgress;
            const baseY = -window.innerHeight * 0.3;
            const currentScale = 1 + (exactScale - 1) * scaleProgress;
            gsap.set(animatedIconsContainerRef.current, {
              x: deltaX,
              y: baseY + deltaY,
              scale: currentScale,
              opacity: 1,
            });
          /// icons scaled back 

             iconElementsRef.current.forEach((icon) => {
               if (icon) gsap.set(icon, { x: 0, y: 0 });
             });

          } else if (progress < 0.75) {
            const moveProgress = (progress - 0.6) / 0.15;
            gsap.set(heroHeaderRef.current, {
              transform: `translate(-50%,calc(-50% + -50px))`,
              opacity: 0,
            });
            if (heroSectionRef.current) {
              heroSectionRef.current.style.backgroundColor = "#e3e3db";
            }

            const targetCenterY = window.innerHeight / 2;
            const targetCenterX = window.innerWidth / 2;
            const containerRect = animatedIconsContainerRef.current.getBoundingClientRect();
            const currentCenterX = containerRect.left + containerRect.width / 2;
            const currentCenterY = containerRect.top + containerRect.height / 2;
            const deltaX = targetCenterX - currentCenterX;
            const deltaY = targetCenterY - currentCenterY;
            const baseY = -window.innerHeight * 0.3;

            gsap.set(animatedIconsContainerRef.current, {
              x: deltaX,
              y: baseY + deltaY,
              scale: exactScale,
              opacity: 0,
            });

            // Use this (correct)
            iconElementsRef.current.forEach((icon) => {
              if (icon) gsap.set(icon, { x: 0, y: 0 });
            });

          if (!window.duplicateIcons) {
            window.duplicateIcons = [];
            iconElementsRef.current.forEach((icon ,index) => {
              if (!icon) return;
              const duplicate = icon.cloneNode(true) as HTMLElement;
              duplicate.className = "duplicate-icon";
              duplicate.style.position = "absolute";
              duplicate.style.width = headerIconSize + "px";
              duplicate.style.height = headerIconSize + "px";

              document.body.appendChild(duplicate);
              window.duplicateIcons.push(duplicate);
            });
          }

            if (window.duplicateIcons) {
              // window.duplicateIcons.forEach((duplicate, index) => {
              //   if (index < placeholdersRef.current.length) {
              //     const iconRect = iconElementsRef.current[index].getBoundingClientRect();
              //     const startCenterX = iconRect.left + iconRect.width / 2;
              //     const startCenterY = iconRect.top + iconRect.height / 2;
              //     const startPageX = startCenterX + window.pageXOffset;
              //     const startPageY = startCenterY + window.pageYOffset;
              //     const targetRect = placeholdersRef.current[index].getBoundingClientRect();
              //     const targetCenterX = targetRect.left + targetRect.width / 2;
              //     const targetCenterY = targetRect.top + targetRect.height / 2;
              //     const targetPageX = targetCenterX + window.pageXOffset;
              //     const targetPageY = targetCenterY + window.pageYOffset;
              //     const moveX = targetPageX - startPageX;
              //     const moveY = targetPageY - startPageY;

              //     let currentX = 0;
              //     let currentY = 0;


          
              //     if (moveProgress < 0.5) {
              //       const verticalProgress = moveProgress / 0.5;
              //       currentY = moveY * verticalProgress;
              //     } else {
              //       const horizontalProgress = (moveProgress - 0.5) / 0.5;
              //       currentY = moveY;
              //       currentX = moveX * horizontalProgress;
              //     }
              //     const finalPageX = startPageX + currentX;
              //     const finalPageY = startPageY + currentY;

              //     duplicate.style.left = finalPageX - headerIconSize / 2 + "px";
              //     duplicate.style.top = finalPageY - headerIconSize / 2 + "px";
              //     duplicate.style.opacity = "1";
              //     duplicate.style.display = "flex";
              //   }
              // });
            }
          } else {
            gsap.set(heroHeaderRef.current, {
              transform: `translate(-50%,calc(-50% + -50px))`,
              opacity: 0,
            });

            heroSectionRef.current.style.backgroundColor = "#e3e3db";
            gsap.set(animatedIconsContainerRef.current, {
              opacity: 0,
            });

          //   //hiding the orignal icons
          
            // if (window.duplicateIcons) {
            //   window.duplicateIcons.forEach((duplicate, index) => {
            //     if (index < placeholdersRef.current.length) {
            //       const targetRect = placeholdersRef.current[index].getBoundingClientRect();
            //       const targetCenterX = targetRect.left + targetRect.width / 2;
            //       const targetCenterY = targetRect.top + targetRect.height / 2;
            //       const targetPageX = targetCenterX + window.pageXOffset;
            //       const targetPageY = targetCenterY + window.pageYOffset;

            //       duplicate.style.left = targetPageX - headerIconSize / 2 + "px";
            //       duplicate.style.top = targetPageY - headerIconSize / 2 + "px";
            //       duplicate.style.opacity = "1";
            //       duplicate.style.display = "flex";
            //     }
            //   });
            // }

            textAnimationOrder.forEach((item, randomIndex) => {
              const segementStart = 0.75 + randomIndex * 0.03;
              const segmentEnd = segementStart + 0.015;

              const segmentProgress = gsap.utils.mapRange(
                segementStart,
                segmentEnd,
                0,
                1,
                progress
              );
              const clampProgress = Math.max(0, Math.min(1, segmentProgress));

              gsap.set(item.segment, {
                opacity: clampProgress,
              });
            });
          }
        },
      },
    });
  }, []);
  return (
    <>
      <section
        ref={heroSectionRef}
        className="hero-about h-[100vh] w-full relative flex flex-col items-center justify-center overflow-hidden bg-black color-white"
      >
        <div className="hero-header" ref={heroHeaderRef}>
          <h1 className="hero-title">Creative</h1>
          <h1 className="hero-title">Developer</h1>
          <p className="text-[1.5rem] font-480 text-white">
            <span>Packed with</span>
            <br>
            </br>
            Endless web design
          </p>
        </div>
        <div className="animated-icons" ref={animatedIconsContainerRef}>
          {ICONS.map((IconComp, idx) => (
            <div
              className="animated-icon"
              key={idx}
              ref={(el) => (iconElementsRef.current[idx] = el)}
            >
              <IconComp className="icon-svg" />
            </div>
          ))}
        </div>
        <h1 className="animated-text">
          {TEXTS.map((text, idx) => (
            <span
              className="text-segment"
              key={idx}
              ref={(el) => (textSegmentsRef.current[idx] = el)}
            >
              {text}
            </span>
          ))}
        </h1>
        {/* Placeholders for icon animation targets */}
        <div className="placeholders object-contain">
          {ICONS.map((_, idx) => (
            <div
              className="placeholder-icon"
              key={idx}
              ref={(el) => (placeholdersRef.current[idx] = el)}
              style={{ width: 60, height: 60, opacity: 0 }}
            />
          ))}
        </div>
      </section>
      <section className="outro h-[100vh] w-full relative">
        <h1  className="text-4xl">Let's Link up</h1>
      </section>
    </>
  );
};

export default HeorAbout;
