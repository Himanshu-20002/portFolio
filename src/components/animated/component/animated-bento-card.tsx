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

interface AnimatedBentoCardProps {
  title: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
  image?: string
  video?: string
  delay?: number
}

export function AnimatedBentoCard({
  title,
  subtitle,
  className,
  children,
  image,
  video,
  delay = 0,
}: AnimatedBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const borderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const content = contentRef.current
    const background = backgroundRef.current
    const media = mediaRef.current
    const border = borderRef.current

    if (!card || !content || !background || !border) return

    // Set initial states
    gsap.set(background, { scale: 1, opacity: 0 })
    gsap.set(content, { y: 0 })
    gsap.set(card, { y: 50, opacity: 0 })
    gsap.set(border, { opacity: 0, scale: 0.8 })

    // Scroll animation
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
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
        y: -20,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
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
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          background,
          {
            scale: 1.1,
            opacity: 0.1,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          content,
          {
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          border,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
    }

    const handleMouseLeave = () => {
      const tl = gsap.timeline()

      tl.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          background,
          {
            scale: 1,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          content,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          border,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
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
              600px circle at var(--mouse-x) var(--mouse-y),
              rgba(59, 130, 246, 0.4),
              transparent 40%
            )
          `,
          padding: "2px",
        }}
      >
        <div className="w-full h-full bg-gray-900/50 rounded-lg" />
      </div>

      {/* Media Background */}
      {(image || video) && (
        <div ref={mediaRef} className="absolute inset-0 opacity-20 rounded-lg overflow-hidden">
          {video ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          )}
        </div>
      )}

      {/* Animated background overlay */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
      />

      <div ref={contentRef} className="relative z-10">
        <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
        {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
        {children}
      </div>
    </Card>
  )
}
