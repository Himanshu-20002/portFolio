"use client";

import type React from "react";
import { Badge } from "@/components/ui/badge";
import {

  CardContent,

} from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobileApps() {
  const mobileApps = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A seamless shopping experience with real-time inventory and secure payments.",
      videoUrl:
        "/videos/v1.mp4", // Placeholder video URL
      technologies: ["React Native", "Redux", "Stripe", "Firebase"],
    },
    {
      title: "Fitness Tracker",
      description:
        "Track workouts, monitor progress, and set goals with an intuitive interface.",
      videoUrl:
        "/videos/v2.mp4", // Placeholder video URL
      technologies: ["React Native", "Expo", "GraphQL", "PostgreSQL"],
    },
    {
      title: "Recipe Finder",
      description:
        "Discover new recipes, manage meal plans, and create shopping lists on the go.",
      videoUrl:
        "/videos/v3.mp4", // Placeholder video URL
      technologies: ["React Native", "TypeScript", "REST API", "SQLite"],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: 2,
            markers: false,
          },
        }
      );
    }
  }, []);

  // Modern iPhone Mockup Component with Dynamic Island
  const IPhoneMockup = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full  sm::max-w-[220px]  lg:max-w-[220px] xl:max-w-[280px] mx-auto aspect-[9/19] rounded-[1.2rem] sm:rounded-[1.4rem] lg:rounded-[3rem] border-[1px] sm:border-[1px] md:border-[3px] border-gray-200 bg-gray-100 shadow-2xl overflow-hidden">
      {/* Screen */}
      <div className="absolute inset-[3px] sm:inset-[1px] md:inset-[5px] rounded-[1.2rem] sm:rounded-[1.2rem] overflow-hidden bg-black lg:rounded-[3rem]">
        {children}
      </div>
    </div>
  );

  return (
    <section
      id="mobile-apps"
      className="py-20 md:py-32 bg-black text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto lg:px-59 p-5">
        <div className="grid grid-cols-3 items-center justify-center gap-5">
          {mobileApps.map((app, index) => {
            let yOffset = 0;
            if (index === 0 || index === 2) {
              yOffset = 30; // Adjust for the side mockups
            } else if (index === 1) {
              yOffset = -20; // Adjust for the middle mockup
            }
            return (
              <div key={index} className="relative" style={{ position: 'relative', top: `${yOffset}px` }} ref={(el) => (cardRefs.current[index] = el)}>
                <CardContent className=" flex items-center justify-center p-0 ">
                  <IPhoneMockup>
                    {/* Using a video element for screen recording */}
                    <video
                      src={app.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      aria-label={`Screen recording of ${app.title}`}
                    ></video>
                  </IPhoneMockup>
                </CardContent>
              </div>
            );
          })}
        </div>




        <div className="text-center space-y-4 mt-16">
          <Badge className="bg-purple-600 text-white">Mobile Apps</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Mobile App Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            Showcasing a selection of cross-platform mobile applications built with React Native and other frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}