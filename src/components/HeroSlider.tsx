// components/HeroSlider.tsx
"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { sliderData } from "../components/constants/index";
import Image from "next/image";

const COPIES = 5; // keep small but enough for infinite feel
const config = {
  SCROLL_SPEED: 1.75,
  LERP_FACTOR: 0.05,
  MAX_VELOCITY: 150,
  PARALLAX_FACTOR: -0.25,
  IMAGE_SCALE: 2.25,
};

export interface SliderItem {
  title: string;
  img: string;
  url?: string;
}

type ImageRefType = HTMLImageElement & { 
  style: CSSStyleDeclaration 
};

export default function HeroSlider(): JSX.Element {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibleSlides = useRef<Set<number>>(new Set());

  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mutable runtime state (no re-renders per frame)
  const stateRef = useRef({
    currentX: 0,
    targetX: 0,
    slideWidth: 390,
    isDragging: false,
    startX: 0,
    lastX: 0,
    lastMouseX: 0,
    lastScrollTime: Date.now(),
    velocity: 0,
    lastCurrentX: 0,
    dragDistance: 0,
    hasActuallyDragged: false,
  });

  // Build rendered slide list by repeating original data COPIES times
const renderedSlides = useMemo(() => {
  const arr: (SliderItem & { key: string })[] = [];
  for (let c = 0; c < COPIES; c++) {
    for (let i = 0; i < sliderData.length; i++) {
      arr.push({ 
        title: sliderData[i].title, 
        img: sliderData[i].img, 
        url: sliderData[i].url, 
        key: `${c}-${i}` 
      });
    }
  }
  return arr;
}, []);

  // client + mobile detection
  useEffect(() => {
    setIsClient(true);
    const onResize = () => setIsMobile(window.innerWidth <= 1000);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // slideWidth exactly like original version
  const slideWidth = isMobile ? 175 : 390;

  useEffect(() => {
    if (!isClient) return;
    const s = stateRef.current;
    s.slideWidth = slideWidth;

    const totalSliderCount = sliderData.length;
    const sequenceWidth = totalSliderCount * s.slideWidth;

    // same starting offset as original: center within repeated sequences
    const startOffset = -(sequenceWidth * 2);
    s.currentX = startOffset;
    s.targetX = startOffset;

    // ensure track width fits all repeated slides
    if (trackRef.current) {
      trackRef.current.style.width = `${renderedSlides.length * s.slideWidth}px`;
    }

    // Setup IntersectionObserver to track which slide indices are "active"
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute("data-idx");
          if (!idxAttr) return;
          const idx = parseInt(idxAttr, 10);
          if (Number.isNaN(idx)) return;
          if (entry.isIntersecting) visibleSlides.current.add(idx);
          else visibleSlides.current.delete(idx);
        });
      },
      {
        root: sliderRef.current,
        rootMargin: "600px", // observe slides when they come within 600px of viewport
        threshold: 0.01,
      }
    );

    // Observe current slide DOM nodes
    slideRefs.current.forEach((el, idx) => {
      if (el && observerRef.current) {
        el.setAttribute("data-idx", String(idx));
        observerRef.current.observe(el);
      }
    });

    // Helper: determine if we are stable enough to perform the invisible wrap
    const isStableForWrap = () => {
      const now = Date.now();
      const notDragging = !s.isDragging;
      const lowVelocity = Math.abs(s.velocity) < 0.6; // tuned threshold
      const quiet = now - s.lastScrollTime > 160; // no wheel recently
      return notDragging && lowVelocity && quiet;
    };

    // Update slider transform, but only wrap when stable (so no visible jump mid-drag)
    const updateSliderPosition = () => {
      // Only wrap when stable (no user interaction & low velocity)
      if (isStableForWrap()) {
        if (s.currentX > -sequenceWidth * 1) {
          s.currentX -= sequenceWidth;
          s.targetX -= sequenceWidth;
        } else if (s.currentX < -sequenceWidth * (COPIES - 1)) {
          s.currentX += sequenceWidth;
          s.targetX += sequenceWidth;
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${s.currentX}px,0,0)`;
      }
    };

    // Parallax: only update slides that IntersectionObserver marked visible
    const updateParallax = () => {
      const viewportCenter = window.innerWidth / 2;
      // If no visible slides set yet, fallback to a small sweep to avoid blankness
      if (visibleSlides.current.size === 0) {
        // update only a small neighborhood around center for first few frames
        const centerIndex = Math.floor((-s.currentX) / s.slideWidth);
        for (let i = Math.max(0, centerIndex - 3); i <= Math.min(renderedSlides.length - 1, centerIndex + 3); i++) {
          const img = imageRefs.current[i];
          if (!img) continue;
          const slideCenter = s.currentX + i * s.slideWidth + s.slideWidth / 2;
          const distance = slideCenter - viewportCenter;
          const offset = distance * config.PARALLAX_FACTOR;
          img.style.transform = `translateX(${offset}px) scale(${config.IMAGE_SCALE})`;
        }
        return;
      }

      visibleSlides.current.forEach((i) => {
        const img = imageRefs.current[i];
        if (!img) return;
        const slideCenter = s.currentX + i * s.slideWidth + s.slideWidth / 2;
        const distance = slideCenter - viewportCenter;
        const offset = distance * config.PARALLAX_FACTOR;
        img.style.transform = `translateX(${offset}px) scale(${config.IMAGE_SCALE})`;
        img.style.willChange = "transform";
      });
    };

    // update velocity and lastCurrentX
    const updateVelocity = () => {
      s.velocity = Math.abs(s.currentX - s.lastCurrentX);
      s.lastCurrentX = s.currentX;
    };

    // RAF loop
    const animate = () => {
      s.currentX += (s.targetX - s.currentX) * config.LERP_FACTOR; // LERP preserved
      updateVelocity();
      updateSliderPosition();
      updateParallax();
      rafRef.current = requestAnimationFrame(animate);
    };

    // --- Event Handlers (keep original behavior) ---
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // ignore horizontal wheel
      e.preventDefault();
      s.lastScrollTime = Date.now();
      const delta = e.deltaY * config.SCROLL_SPEED;
      s.targetX -= Math.max(Math.min(delta, config.MAX_VELOCITY), -config.MAX_VELOCITY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      s.isDragging = true;
      s.startX = e.touches[0].clientX;
      s.lastX = s.targetX;
      s.dragDistance = 0;
      s.hasActuallyDragged = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!s.isDragging) return;
      const dx = (e.touches[0].clientX - s.startX) * 1.5;
      s.targetX = s.lastX + dx;
      s.dragDistance = Math.abs(dx);
      if (s.dragDistance > 5) s.hasActuallyDragged = true;
    };

    const handleTouchEnd = () => {
      s.isDragging = false;
      setTimeout(() => (s.hasActuallyDragged = false), 100);
    };

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      s.isDragging = true;
      s.startX = e.clientX;
      s.lastMouseX = e.clientX;
      s.lastX = s.targetX;
      s.dragDistance = 0;
      s.hasActuallyDragged = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!s.isDragging) return;
      const dx = (e.clientX - s.lastMouseX) * 2;
      s.targetX += dx;
      s.lastMouseX = e.clientX;
      s.dragDistance += Math.abs(dx);
      if (s.dragDistance > 5) s.hasActuallyDragged = true;
    };

    const handleMouseUp = () => {
      s.isDragging = false;
      setTimeout(() => (s.hasActuallyDragged = false), 100);
    };

    // attach events and start RAF
    const sliderEl = sliderRef.current!;
    sliderEl.addEventListener("wheel", handleWheel, { passive: false });
    sliderEl.addEventListener("touchstart", handleTouchStart);
    sliderEl.addEventListener("touchmove", handleTouchMove);
    sliderEl.addEventListener("touchend", handleTouchEnd);
    sliderEl.addEventListener("mousedown", handleMouseDown);
    sliderEl.addEventListener("mouseleave", handleMouseUp);
    sliderEl.addEventListener("dragstart", (ev) => ev.preventDefault());

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    rafRef.current = requestAnimationFrame(animate);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (observerRef.current) observerRef.current.disconnect();

      sliderEl.removeEventListener("wheel", handleWheel);
      sliderEl.removeEventListener("touchstart", handleTouchStart);
      sliderEl.removeEventListener("touchmove", handleTouchMove);
      sliderEl.removeEventListener("touchend", handleTouchEnd);
      sliderEl.removeEventListener("mousedown", handleMouseDown);
      sliderEl.removeEventListener("mouseleave", handleMouseUp);
      sliderEl.removeEventListener("dragstart", (ev) => ev.preventDefault());

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    // re-run effect if slideWidth or renderedSlides length changes
  }, [isClient, slideWidth, renderedSlides.length]);

  // preserve click vs drag behaviour
  const onSlideClick = (i: number, url?: string) => (e: React.MouseEvent) => {
    const s = stateRef.current;
    if (s.dragDistance < 10 && !s.hasActuallyDragged) {
      if (url) window.location.href = url;
    } else {
      e.preventDefault();
    }
  };

  // keep ref arrays sized
  slideRefs.current = new Array(renderedSlides.length).fill(null);
  imageRefs.current = new Array(renderedSlides.length).fill(null);

  return (
    <div
      ref={sliderRef}
      className="slider relative overflow-hidden w-screen h-[130vh] p-10 bg-black select-none"
      style={{ touchAction: "pan-y" }}
    >
      <div
        ref={trackRef}
        className="slide-track absolute left-0 top-0 h-full flex"
        style={{ willChange: "transform" }}
      >
        {renderedSlides.map((slide, i) => (
          <div
            key={slide.key}
            ref={(el) => (slideRefs.current[i] = el)}
            className="slide"
            onClick={onSlideClick(i, slide.url)}
            style={{
              width: `${slideWidth}px`,
              flex: "0 0 auto",
              height: isMobile ? "275px" : "700px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="slide-image" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                ref={(img: ImageRefType | null) => (imageRefs.current[i] = img)}
                src={slide.img}
                alt={slide.title}
                fill
                sizes="(max-width: 1000px) 175px, 390px"
                style={{
                  objectFit: "cover",
                  transform: `translateX(0px) scale(${config.IMAGE_SCALE})`,
                  willChange: "transform",
                }}
                priority={i < 3} // Load first few images immediately
                draggable={false}
              />
            </div>

            <div
              className="slide-overlay"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 24,
                paddingLeft: 20,
                paddingRight: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <p className="slide-title" style={{ color: "white", pointerEvents: "auto" }}>
                {slide.title}
              </p>
              <div
                className="project-arrow"
                style={{ pointerEvents: "auto" }}
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .slider {
          --slider-moving: 0;
        }
        .slide img {
          transition: transform 0.12s linear;
        }
      `}</style>
    </div>
  );
}
