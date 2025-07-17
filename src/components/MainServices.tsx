import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedHeaderSection from "./animated/AnimatedHeaderSection";
import { servicesData } from "./constants/index";

gsap.registerPlugin(ScrollTrigger);

const MainServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<HTMLDivElement[]>([]);
  const hasMounted = useRef(false);

  const text = "hello there";

  // Detect desktop media query
  const [isDesktop, setIsDesktop] = React.useState(false);
  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    hasMounted.current = true;
  }, []);

  // ScrollTrigger + Animation Timeline
  useGSAP(() => {
    if (!hasMounted.current || !containerRef.current) return;

    // Optional: staggered spacing between service blocks only on desktop
    if (isDesktop) {
      serviceRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          y: i * 100, // stagger vertically by 100px
        });
      });
    }

    // GSAP Scroll Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 1,
        markers: true, // optional: enable during development
      },
    })
      .fromTo(
        serviceRefs.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: isDesktop ? 100 : 0, // Keep mobile view flat
          stagger: 0.3,
          duration: 1,
        }
      )
      .fromTo(
        "#no",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "<0.3"
      );
  }, [isDesktop]);

  return (
    <section
      ref={containerRef}
      className="relative w-screen min-h-screen bg-blue-400 mix-blend-hard-light"
    >
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-8 py-12">
        <AnimatedHeaderSection
          subTitle="Behind the scene, Beyond the screen"
          title="Services"
          text={text}
          textColor="text-white"
          withScrollTrigger={false}
        />

        <div className="w-full space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="relative bg-black text-white border-t-2 border-white/30 px-10 pt-6 pb-12"
            >
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl lg:text-2xl text-white/60">{service.description}</p>
                <div className="flex flex-col gap-2 text-2xl lg:text-3xl text-white/80">
                  {service.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <h3 className="flex">
                        <span className="mr-12 text-lg text-white/30">0{itemIndex + 1}</span>
                        {item.title}
                      </h3>
                      {itemIndex < service.items.length - 1 && (
                        <div className="w-full h-px my-2 bg-white/30" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          id="no"
          className="mt-12 text-center text-lg lg:text-xl max-w-xl text-white"
        >
          I build secure, dynamic full-stack apps with interactive, performance-optimized web / mobile apps
        </div>
      </div>
    </section>
  );
};

export default MainServices;