"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SpecialCardProps {
  title: string
  subtitle?: string
  className?: string
  variant?: "teamwork" | "efficiency"
  image?: string
  video?: string
  delay?: number
}

export function SpecialAnimatedCard({
  title,
  subtitle,
  className,
  variant,
  image,
  video,
  delay = 0,
}: SpecialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const borderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const titleEl = titleRef.current
    const subtitleEl = subtitleRef.current
    const particles = particlesRef.current
    const media = mediaRef.current
    const border = borderRef.current

    if (!card || !titleEl || !border) return

    // Set initial state
    gsap.set(card, { y: 60, opacity: 0, rotationX: 15 })
    gsap.set(border, { opacity: 0, scale: 0.9 })

    // Scroll animation with 3D effect
    gsap.to(card, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1,
      ease: "power2.out",
      delay: delay,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    })

    // Media parallax effect
    if (media) {
      gsap.to(media, {
        y: -30,
        scale: 1.1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      })
    }

    // Create floating particles
    if (particles) {
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div")
        particle.className = "absolute w-1 h-1 bg-blue-400/30 rounded-full"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particles.appendChild(particle)

        // Animate particles on scroll
        gsap.to(particle, {
          y: -Math.random() * 50,
          x: (Math.random() - 0.5) * 30,
          opacity: Math.random() * 0.8,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate position as percentage
      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100

      // Update CSS custom properties for the border position
      card.style.setProperty("--mouse-x", `${xPercent}%`)
      card.style.setProperty("--mouse-y", `${yPercent}%`)
    }

    const handleMouseEnter = () => {
      const tl = gsap.timeline()

      tl.to(card, {
        scale: 1.01,
        rotationY: 2,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000,
      })
        .to(
          titleEl,
          {
            scale: 1.05,
            color: "#60a5fa",
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        )
        .to(
          border,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0,
        )

      if (subtitleEl) {
        tl.to(
          subtitleEl,
          {
            y: -3,
            opacity: 0.8,
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        )
      }
    }

    const handleMouseLeave = () => {
      const tl = gsap.timeline()

      tl.to(card, {
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        ease: "power2.out",
      })
        .to(
          titleEl,
          {
            scale: 1,
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          border,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            ease: "power2.out",
          },
          0,
        )

      if (subtitleEl) {
        tl.to(
          subtitleEl,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
      }
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)
    card.addEventListener("mousemove", handleMouseMove)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
      card.removeEventListener("mousemove", handleMouseMove)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [delay])

  return (
    <Card
      ref={cardRef}
      className={`relative bg-gray-900/50 border-gray-800 p-6 flex flex-col justify-between cursor-pointer overflow-hidden ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Dynamic Border */}
      <div
        ref={borderRef}
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `
            radial-gradient(
              800px circle at var(--mouse-x) var(--mouse-y),
              rgba(59, 130, 246, 0.5),
              rgba(147, 51, 234, 0.3) 30%,
              transparent 50%
            )
          `,
          padding: "2px",
        }}
      >
        <div className="w-full h-full bg-gray-900/50 rounded-lg" />
      </div>

      {/* Media Background */}
      {(image || video) && (
        <div ref={mediaRef} className="absolute inset-0 opacity-15 rounded-lg overflow-hidden">
          {video ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          )}
        </div>
      )}

      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg" />

      <div className="relative z-10">
        <h3 ref={titleRef} className="text-white text-lg font-medium mb-2">
          {title}
        </h3>
        {subtitle && (
          <p ref={subtitleRef} className="text-gray-400 text-sm">
            {subtitle}
          </p>
        )}
      </div>
    </Card>
  )
}
