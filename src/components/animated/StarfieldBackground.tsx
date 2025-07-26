"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  speed: number
  blinkSpeed: number
  blinkOffset: number
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = canvasRef.current
    if (!container) return

    // Generate stars
    const generateStars = () => {
      const stars: Star[] = []
      const starCount = 200

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 2 + 2,
          blinkSpeed: Math.random() * 0.02 + 0.005,
          blinkOffset: Math.random() * Math.PI * 2,
        })
      }
      return stars
    }

    // Create star elements
    const createStarElements = () => {
      container.innerHTML = ""
      starsRef.current = generateStars()

      starsRef.current.forEach((_, index) => {
        const starElement = document.createElement("div")
        starElement.className = "star"
        starElement.style.position = "absolute"
        starElement.style.backgroundColor = "white"
        starElement.style.borderRadius = "50%"
        starElement.style.pointerEvents = "none"
        container.appendChild(starElement)
      })
    }

    // Animation loop
    const animate = (time: number) => {
      const stars = starsRef.current
      const starElements = container.children

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        const element = starElements[i] as HTMLElement

        // Move star forward (Z-axis)
        star.z -= star.speed

        // Reset star when it goes behind the camera
        if (star.z <= 0) {
          star.z = 1000
          star.x = (Math.random() - 0.5) * 2000
          star.y = (Math.random() - 0.5) * 2000
        }

        // Calculate 3D projection
        const centerX = container.offsetWidth / 2
        const centerY = container.offsetHeight / 2
        const focalLength = 300

        const x = (star.x / star.z) * focalLength + centerX
        const y = (star.y / star.z) * focalLength + centerY
        const size = (1 - star.z / 1000) * star.size * 3

        // Calculate blinking opacity
        const blinkValue = Math.sin(time * star.blinkSpeed + star.blinkOffset)
        const opacity = 0.3 + (blinkValue + 1) * 0.35

        // Update star element
        if (x >= 0 && x <= container.offsetWidth && y >= 0 && y <= container.offsetHeight) {
          element.style.left = `${x}px`
          element.style.top = `${y}px`
          element.style.width = `${size}px`
          element.style.height = `${size}px`
          element.style.opacity = opacity.toString()
          element.style.display = "block"
        } else {
          element.style.display = "none"
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    createStarElements()
    animationRef.current = requestAnimationFrame(animate)

    // Handle resize
    const handleResize = () => {
      createStarElements()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={canvasRef} className="absolute inset-0 overflow-hidden " style={{ perspective: "1000px" }} />
}
