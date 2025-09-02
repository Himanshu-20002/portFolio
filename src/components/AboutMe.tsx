"use client"

import { useCallback, useEffect, useRef } from "react"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutMe() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const currentSlide = useRef(0)

  const highlights = [
    {
      image: "/img/highlight.png",
      title: "Full-Stack Applications",
      width: 400,
      height: 400
    },
    {
      image: "/img/highlight2.png",
      title: "Mobile-First Design",
      width: 400,
      height: 400
    },
    {
      image: "/img/highlight2.png",
      title: "Clean Code Architecture",
      width: 400,
      height: 400
    },
    {
      image: "/img/highlight2.png",
      title: "API Development",
      width: 400,
      height: 400
    },
  ]

 const nextSlide = useCallback(() => {
    if (!sliderRef.current) return
    currentSlide.current = (currentSlide.current + 1) % highlights.length
    const translateX = -currentSlide.current * 100
    sliderRef.current.style.transform = `translateX(${translateX}%)`
  }, [highlights.length])

  const prevSlide = () => {
    if (!sliderRef.current) return
    currentSlide.current = currentSlide.current === 0 ? highlights.length - 1 : currentSlide.current - 1
    const translateX = -currentSlide.current * 100
    sliderRef.current.style.transform = `translateX(${translateX}%)`
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=800&width=600"
    link.download = "Developer_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
   <section className="min-h-screen w-screen flex items-center justify-center px-4 bg-black pb-30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-screen">
          <div className="lg:col-span-2 space-y-8">
            <div className="group">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-500 group-hover:scale-96 hover:text-accent text-white">
                hi, I&apos;m <span className="text-violet-500 glow-text hover:animate-pulse">Himanshu</span>
              </h1>
              <div className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed space-y-6">
                <p className="transition-all duration-300 hover:text-white hover:translate-x-2 hover:scale-105 cursor-default">
                  A passionate full-stack developer with 3+ years of experience crafting digital experiences that blend
                  creativity with cutting-edge technology.
                </p>

                <p className="transition-all duration-300 hover:text-white hover:translate-x-2 hover:scale-105 cursor-default">
                  I specialize in crafting web/mobile apps with modern technology crafting stunning scroll animations cool effects &amp; scalable applications that
                  deliver exceptional user experiences and drive business growth.
                </p>

                <p className="transition-all duration-300 hover:text-violet-300 hover:translate-x-2 hover:scale-105 cursor-default">
                  When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to open-source projects or turning concept to reality
               </p>
              </div>
            </div>

            <div className="pt-4 gap-10 flex-row  flex" >
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/25 hover:shadow-2xl transition-all duration-300 hover:scale-105 glow-button"
              >
                <Download className="mr-2 h-5 w-5" />
                Download My CV
              </Button>
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/25 hover:shadow-2xl transition-all duration-300 hover:scale-105 glow-button"
              >
                {/* <Download className="mr-2 h-5 w-5" /> */}
                Let&apos;s talk
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50">
              <h3 className="text-lg font-semibold mb-3 text-center">Highlights</h3>

              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-muted">
                <div
                  ref={sliderRef}
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ width: `${highlights.length * 100}%` }}
                >
                  {highlights.map((highlight, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        width={highlight.width}
                        height={highlight.height}
                        className="object-fit w-auto h-auto"
                        priority={index === 0} // Load first image immediately
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <h4 className="text-white font-medium text-sm">{highlight.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="h-3 w-3" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>

              <div className="flex justify-center mt-3 space-x-1.5">
                {highlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      currentSlide.current = index
                      if (sliderRef.current) {
                        sliderRef.current.style.transform = `translateX(-${index * 100}%)`
                      }
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${index === currentSlide.current ? "bg-accent scale-125" : "bg-muted-foreground/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
