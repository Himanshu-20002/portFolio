"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const lenisOptions = {
    duration: isMobile ? 1.5 : 1.2, // Larger duration = slower, smoother scroll
    smoothWheel: true,
    wheelMultiplier: isMobile ? 0.5 : 1,
    touchMultiplier: isMobile ? 1.5 : 2, // Natural touch sensitivity for mobile
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions} className="w-screen overflow-x-hidden bg-black">
      {children}
    </ReactLenis>
  );
}
