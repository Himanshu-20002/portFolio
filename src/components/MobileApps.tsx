"use client";

import { Button } from "@/components/ui/button";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
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
        "/placeholder.mp4?height=600&width=300&query=e-commerce-app-screen-recording", // Placeholder video URL
      technologies: ["React Native", "Redux", "Stripe", "Firebase"],
    },
    {
      title: "Fitness Tracker",
      description:
        "Track workouts, monitor progress, and set goals with an intuitive interface.",
      videoUrl:
        "/placeholder.mp4?height=600&width=300&query=fitness-tracker-app-screen-recording", // Placeholder video URL
      technologies: ["React Native", "Expo", "GraphQL", "PostgreSQL"],
    },
    {
      title: "Recipe Finder",
      description:
        "Discover new recipes, manage meal plans, and create shopping lists on the go.",
      videoUrl:
        "/placeholder.mp4?height=600&width=300&query=recipe-finder-app-screen-recording", // Placeholder video URL
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
    <div className="relative w-full  sm::max-w-[220px]  lg:max-w-[220px] xl:max-w-[280px] mx-auto aspect-[9/19] rounded-[1.2rem] sm:rounded-[1.4rem] lg:rounded-[3rem] border-[3px] sm:border-[4px] md:border-[3px] border-gray-200 bg-gray-100 shadow-2xl overflow-hidden">
      {/* Dynamic Island */}
      <div className="absolute top-2.5 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 w-[30%] h-5 sm:h-6 md:h-7 bg-gray-800 rounded-full z-10 flex items-center justify-center">
        {/* Optional: Add small camera/sensor dots inside if desired for more detail */}
        <div className="w-1 h-1 bg-gray-600 rounded-full mr-0.5" />
        <div className="w-0.5 h-0.5 bg-gray-600 rounded-full" />
      </div>
      {/* Screen */}
      <div className="absolute inset-[3px] sm:inset-[4px] md:inset-[5px] rounded-[1.2rem] sm:rounded-[1.2rem] overflow-hidden bg-black lg:rounded-[3rem]">
        {children}
      </div>
      {/* Buttons (decorative - silver color) */}
      <div className="absolute top-1/4 -left-[5px] sm:-left-[6px] md:-left-[7px] w-1 sm:w-1.5 md:w-2 h-5 sm:h-6 md:h-8 bg-gray-300 rounded-l-lg" />
      <div className="absolute top-1/2 -left-[5px] sm:-left-[6px] md:-left-[7px] w-1 sm:w-1.5 md:w-2 h-8 sm:h-10 md:h-12 bg-gray-300 rounded-l-lg" />
      <div className="absolute top-1/3 -right-[5px] sm:-right-[6px] md:-right-[7px] w-1 sm:w-1.5 md:w-2 h-8 sm:h-10 md:h-12 bg-gray-300 rounded-r-lg" />
    </div>
  );

  return (
    <section
      id="mobile-apps"
      className="py-20 md:py-32 bg-black text-white"
      ref={sectionRef}
    >
       <div className="container mx-auto lg:px-59 p-20">
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