"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedBentoCard } from "./animated-bento-card"
import { SpecialAnimatedCard } from "./special-animated-cards"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AnimatedBentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const header = headerRef.current

    if (!container || !header) return

    // Header animation
    gsap.fromTo(
      header,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div ref={headerRef} className="text-center py-16 px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Interactive Bento Grid</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our features with smooth scroll animations and interactive hover effects
        </p>
      </div>

      <div className="px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div
            ref={containerRef}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 h-[800px]"
          >
            {/* Insights */}
            <AnimatedBentoCard
              title="Insights"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              delay={0.1}
            />

            {/* Overview */}
            <AnimatedBentoCard
              title="Overview"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              delay={0.2}
            />

            {/* Teamwork - Special large card */}
            <SpecialAnimatedCard
              title="Teamwork"
              variant="teamwork"
              className="lg:col-span-2 xl:col-span-4 row-span-2"
              image="/placeholder.svg?height=600&width=800"
              delay={0.3}
            />

            {/* Analytics */}
            <AnimatedBentoCard
              title="Analytics"
              subtitle="Track user behavior"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              // image="/placeholder.svg?height=300&width=400"
              video="/videos/feature-3.mp4"
              delay={0.4}
            />

            {/* Dashboard */}
            <AnimatedBentoCard
              title="Dashboard"
              subtitle="Centralized data view"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              delay={0.5}
            />

            {/* Efficiency - Special large card */}
            <SpecialAnimatedCard
              title="Efficiency"
              variant="efficiency"
              className="lg:col-span-2 xl:col-span-2 row-span-2"
              image="/placeholder.svg?height=600&width=600"
              delay={0.6}
            />

            {/* Collaboration */}
            <AnimatedBentoCard
              title="Collaboration"
              subtitle="Work together seamlessly"
              className="lg:col-span-2 xl:col-span-2 row-span-1"
              image="/placeholder.svg?height=300&width=600"
              delay={0.7}
            />

            {/* Automation */}
            <AnimatedBentoCard
              title="Automation"
              subtitle="Streamline workflows"
              className="lg:col-span-1 xl:col-span-2 row-span-1"
              image="/placeholder.svg?height=300&width=500"
              delay={0.8}
            />

            {/* Connectivity */}
            <AnimatedBentoCard
              title="Connectivity"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              delay={0.9}
            />

            {/* Protection */}
            <AnimatedBentoCard
              title="Protection"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              delay={1.0}
            />

            {/* Integration */}
            <AnimatedBentoCard
              title="Integration"
              subtitle="Connect favorite tools"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              delay={1.1}
            />

            {/* Security */}
            <AnimatedBentoCard
              title="Security"
              subtitle="Enterprise-grade protection"
              className="lg:col-span-1 xl:col-span-1 row-span-1"
              image="/placeholder.svg?height=300&width=400"
              
              delay={1.2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
