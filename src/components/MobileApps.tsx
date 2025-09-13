"use client";

import type React from "react";
import { Badge } from "@/components/ui/badge";
import {

  CardContent,

} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProjectPreview } from '../components/hook/useProjectPreview';
import ProjectPreview from './ProjectPreview';
gsap.registerPlugin(ScrollTrigger);

export default function MobileApps() {
  const { isPreviewOpen, openPreview, closePreview } = useProjectPreview()
const [selectedImages, setSelectedImages] = useState([] as { src: string; alt: string }[]);

   const Ecommerce = [
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643581/.trashed-1737034100-Screenshot_20241217-185356.blinkit_kbpjjy.png',
      alt: 'Project 1 Homepage',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643564/Screenshot_20241220-060148.blinkit_yeit01.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643564/Screenshot_20241220-060221.blinkit_jt1fet.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643559/Screenshot_20241217-185402.blinkit_1_mpppnp.png',
      alt: 'Project 1 Dashboard',
    },
    // {
    //   src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643558/Screenshot_20241217-185337.blinkit_zpqmes.png',
    //   alt: 'Project 1 Dashboard',
    // },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643556/Screenshot_20241217-184803.blinkit_pw78bs.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643552/.trashed-1737034007-Screenshot_20241217-185425.blinkit_zelvsi.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643579/Screenshot_20241220-091256.blinkit_nwwjid.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643577/Screenshot_20241220-091340.blinkit_s87mxy.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643564/Screenshot_20241220-091308.blinkit_btxmo7.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643574/Screenshot_20241220-091316.blinkit_t1errx.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643574/Screenshot_20241220-091320.blinkit_oztdqs.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643559/Screenshot_20241220-060111.blinkit_kytjbn.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643559/Screenshot_20241220-033615.blinkit_lcqtp3.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643575/Screenshot_20241220-092731.blinkit_qh9mud.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643575/Screenshot_20241220-092736.blinkit_wip0hz.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757643574/Screenshot_20241220-091326.blinkit_rllrla.png',
      alt: 'Project 1 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Blinkit_1_gnw2m5.png',
      alt: 'Project 1 Dashboard',
    },
 
    // Add more images as needed
  ];


  const kcart =[

    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Kcart_1_mxqz4h.png',
      alt: 'Project 2 Homepage',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Kcart_2_xo3v4u.png',
      alt: 'Project 2 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Kcart_3_hxqz7m.png',
      alt: 'Project 2 Dashboard',
    },
  ]


  const screens =[
    {      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Kcart_1_mxqz4h.png',
      alt: 'Project 2 Homepage',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Kcart_2_xo3v4u.png',
      alt: 'Project 2 Dashboard',
    },
    {
      src: 'https://res.cloudinary.com/duyyhs6ef/image/upload/v1757644741/Kcart_3_hxqz7m.png',
      alt: 'Project 2 Dashboard',
    },
  ]



  const mobileApps = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A seamless shopping experience with real-time inventory and secure payments.",
      videoUrl:
        "/videos/v1.mp4", // Placeholder video URL
      technologies: ["React Native", "Redux", "Stripe", "Firebase"],
      images: Ecommerce,
    },
    {
      title: "Fitness Tracker",
      description:
        "Track workouts, monitor progress, and set goals with an intuitive interface.",
      videoUrl:
        "/videos/v2.mp4", // Placeholder video URL
      technologies: ["React Native", "Expo", "GraphQL", "PostgreSQL"],
      images: kcart,
    },
    {
      title: "Recipe Finder",
      description:
        "Discover new recipes, manage meal plans, and create shopping lists on the go.",
      videoUrl:
        "/videos/v3.mp4", // Placeholder video URL
      technologies: ["React Native", "TypeScript", "REST API", "SQLite"],
      images: screens,
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
  const IPhoneMockup = ({ children, onClick }: { children: React.ReactNode; onClick?: React.MouseEventHandler<HTMLDivElement> }) => (
    <div
      className="relative w-full  sm::max-w-[220px]  lg:max-w-[220px] xl:max-w-[280px] mx-auto aspect-[9/19] rounded-[1.2rem] sm:rounded-[1.4rem] lg:rounded-[3rem] border-[1px] sm:border-[1px] md:border-[3px] border-gray-200 bg-gray-100 shadow-2xl overflow-hidden"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : undefined }}
    >
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
              <div key={index} className="relative" style={{ position: 'relative', top: `${yOffset}px` }}
                ref={(el: HTMLDivElement | null) => {
                  if (cardRefs.current && el) {
                    cardRefs.current[index] = el;
                  }
                }}>

                <CardContent className=" flex items-center justify-center p-0 ">
                 <IPhoneMockup 
                   onClick={() => {
                  setSelectedImages(app.images); // Set the selected images
                  openPreview(); // Open the preview
                }}
              >
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

       <ProjectPreview
        images={selectedImages} // Use selectedImages instead of projectImages
        isOpen={isPreviewOpen}
        onClose={closePreview}
      />




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