"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const projects = [
  {
    title: "PM_Manager",
    description: "Team Project & Task Management System",
    image: "/img/image.png",
    technologies: ["next.js", "tailwind", "Firebase", "GSAP"],
    type: "Web App",
    icon: <Globe className="h-4 w-4" />,
    github: "https://github.com/Himanshu-20002/PM_Manager",
    live: "https://pm-manager-eight.vercel.app/",
    featured: true,
  },
  {
    title: "EventGo ",
    description: "AI-Integrated Event Planner",
    image: "/img/eventgo.png",
    technologies: ["react-native", "node-js", "firebase", "google-gemini-api"],
    type: "Mobile App",
    icon: <Smartphone className="h-4 w-4" />,
    github: "https://github.com/Himanshu-20002/eventGo",
    live: "#",
    featured: true,
  },
  {
    title: "Interactive Game Dashboard",
    description: "A full-featured Emersive gaming dashboard packed with scroll Transition, leaderboards and animated data visualizations.",
    image: "/img/projectImg1.png",
    technologies: ["React", "Redux", "Firebase", "GSAP"],
    type: "Web App",
    icon: <Smartphone className="h-4 w-4" />,
    github: "https://github.com/Himanshu-20002/gaming-webapp.git",
    live: "https://next-valorant.vercel.app/",
    featured: true,
  },
  {
    title: "Webberry Digital Agency",
    description: "A high-end digital agency website featuring glassmorphic UI, smooth GSAP animations, and a premium aesthetic.",
    image: "/img/webberry.png",
    technologies: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    type: "Web App",
    icon: <Globe className="h-4 w-4" />,
    github: "https://github.com/Himanshu-20002/webberry-frontend.git",
    live: "https://webberry-frontend.vercel.app/",
    featured: false,
  },
  {
    title: "Grocery Delivery App",
    description: "A scalable grocery app with real-time loc tracking admin dashBord sockets, inspired by blinkit.",
    image: "/img/mobb1.png",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    type: "Mobile App",
    icon: <Smartphone className="h-4 w-4" />,
    github: "#",
    live: "",
    featured: false,
  },
  {
    title: "Multi-vendor E-commerce app",
    description: "Cross-platform E-commerce app featuring real-time order tracking and instant location updates.",
    image: "/img/mob2.png",
    technologies: ["React Native", "Socket.io", "GraphQL", "PostgreSQL"],
    type: "Mobile App",
    icon: <Smartphone className="h-4 w-4" />,
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Web Scraper API",
    description: "High-performance web scraping API service built with Express and React. Features real-time data visualization.",
    image: "/img/mob3.png",
    technologies: ["React", "D3.js", "GSAP", "WebSocket", "Express"],
    type: "Web App",
    icon: <Globe className="h-4 w-4" />,
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Nike Website",
    description: "A dynamic Nike showcase website featuring interactive 3D product models, fluid animations, and a modern e-commerce experience.",
    image: "/img/nike.png",
    technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
    type: "Web App",
    icon: <Globe className="h-4 w-4" />,
    github: "#",
    live: "https://next-nike-mauve.vercel.app/",
    featured: true,
  },
  {
    title: "Freelance dev project",
    description: "A dynamic SS Group website featuring interactive 3D product models, fluid animations, and a modern e-commerce experience.",
    image: "/img/ssgroup.png",
    technologies: ["Next.js", "Tailwind", "gsap"],
    type: "Web App",
    icon: <Globe className="h-4 w-4" />,
    github: "https://github.com/Himanshu-20002/ssgroup.git",
    live: "https://ssgroup-chi.vercel.app/",
    featured: true,
  },
  {
    title: "Animated Component Library",
    description: "An interactive landing page built with GSAP featuring immersive animations and WebGL effects.",
    image: "/img/projectImg3.png",
    technologies: ["Three.js", "React", "GSAP", "WebGL", "Tailwind"],
    type: "Web App",
    icon: <Globe className="h-4 w-4" />,
    github: "#",
    live: "https://landing-page-bay-seven-16.vercel.app/",
    featured: true,
  },
]

export default function Projects() {
  const rootRef = useRef<HTMLElement>(null)
  const scrollSectionRef = useRef<HTMLDivElement>(null)
  const pinContainerRef = useRef<HTMLDivElement>(null)
  const entryContainerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    const pinContainer = pinContainerRef.current
    const scrollSection = scrollSectionRef.current
    const entryContainer = entryContainerRef.current
    if (!track || !pinContainer || !scrollSection || !entryContainer || window.innerWidth < 1024) return

    const getScrollAmount = () => track.scrollWidth - window.innerWidth;

    gsap.fromTo(entryContainer,
      { x: "60vw", y: "35vh", force3D: true },
      {
        x: 0, y: 0, ease: "none", force3D: true,
        scrollTrigger: {
          trigger: scrollSection,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );

    gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: scrollSection,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 3,
        snap: {
          snapTo: 1 / 4, // 5 clusters total including quote
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: "power2.inOut"
        },
        invalidateOnRefresh: true,
      }
    });

    ScrollTrigger.refresh()
  }, { scope: rootRef })

  const ProjectCardContent = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div className="absolute inset-0 bg-gradient-to-t from-[#020203]/90 via-[#020203]/20 to-transparent flex flex-col justify-end p-6 md:p-8 group/content">
      <div className="relative z-10 space-y-3 md:space-y-4 lg:translate-y-6 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <div className="flex justify-between items-center">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 backdrop-blur-md text-[10px] font-mono tracking-[0.2em] px-3 py-1">
            {project.type}
          </Badge>
          <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] font-bold">
            0{index + 1}
          </span>
        </div>

        <h4 className="text-3xl font-serif text-white leading-tight font-bold group-hover:text-purple-400 transition-colors">
          {project.title}
        </h4>

        <p className="text-xs text-neutral-400 font-sans line-clamp-2 max-w-[90%] leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 py-1">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-[9px] px-2.5 py-1 rounded-full bg-white/5 text-purple-300 border border-white/10 font-mono backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <Button
            size="sm"
            variant="outline"
            className="h-11 rounded-xl text-[10px] font-mono uppercase bg-white/5 border-white/10 text-white hover:border-purple-500/50 hover:bg-purple-500/20 flex-1 transition-all duration-500 backdrop-blur-md"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> REPO
            </a>
          </Button>
          {project.type !== "Mobile App" && (
            <Button
              size="sm"
              className="h-11 rounded-xl text-[10px] font-mono uppercase bg-purple-600 hover:bg-purple-500 text-white border-0 flex-1 shadow-[0_10px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_30px_rgba(168,85,247,0.5)] transition-all duration-500"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> LIVE
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Default state content - Hidden on mobile, shows on desktop until hover */}
      <div className="hidden lg:flex absolute inset-x-8 bottom-8 flex-col gap-2 group-hover:opacity-0 transition-opacity duration-500">
        <div className="w-12 h-[2px] bg-purple-500 mb-2" />
        <h4 className="text-2xl font-serif text-white leading-tight font-bold tracking-wide">
          {project.title}
        </h4>
        <span className="text-[10px] font-mono text-purple-400/60 uppercase tracking-[0.2em]">0{index + 1} / DISCOVER CASE_STUDY</span>
      </div>
    </div>
  )

  return (
    <section id="portfolio" ref={rootRef} className="bg-[#020203] text-[#e0e0d5] relative z-10 overflow-hidden border-t border-white/5">

      {/* Scrollbar Removal Hack */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* Dynamic Neon Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[90rem] h-[50rem]  bg-purple-600/15 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] rounded-full bg-purple-500/15 blur-[120px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[30%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-pink-500/10 blur-[100px]" style={{ animationDelay: '3s' }} />
      </div>

      {/* Background SVG Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden flex items-center justify-center">
        <svg
          className="min-w-[150vw] min-h-[150vw] md:min-w-[100vw] md:min-h-[100vw] object-cover animate-[spin_180s_linear_infinite] origin-center mix-blend-screen"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#a855f7" fill="none" transform="translate(500, 500)" strokeWidth="0.5">
            <circle r="250" strokeDasharray="3 12" className="opacity-30" />
            <circle r="420" className="opacity-10" />
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={`lotus-${i}`} transform={`rotate(${i * 30})`}>
                <path d="M 0,-250 C 40,-320 80,-360 0,-420 C -80,-360 -40,-320 0,-250 Z" className="opacity-40" />
                <circle cx="0" cy="-455" r="4" fill="#a855f7" stroke="none" className="opacity-80" />
                <circle cx="0" cy="-455" r="8" fill="#a855f7" stroke="none" className="opacity-20 blur-[2px]" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Intro Block */}
      <div className="relative w-full min-h-[50vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-20 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-6xl mx-auto text-center pointer-events-none"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-bold tracking-tight uppercase font-serif">
            FEATURED <span className="text-purple-500 italic">PROJECTS</span><br />
            CRAFTED WITH <span className="text-purple-400 italic">PRECISION</span><br />
            AND <span className="text-white">PURPOSE</span>.
          </h2>
          <p className="mt-6 lg:mt-12 text-base md:text-xl text-neutral-400 font-sans max-w-2xl mx-auto font-medium tracking-wide">
            A curated selection of digital experiences ranging from immersive web apps to scalable mobile solutions.
          </p>
        </motion.div>
      </div>

      {/* HORIZONTAL SCROLL SECTION FOR DESKTOP */}
      <div ref={scrollSectionRef} className="relative w-full z-20">
        <div ref={pinContainerRef} className="hidden lg:flex w-full h-screen items-center relative overflow-hidden">
          <div ref={entryContainerRef} className="w-max h-full flex items-center">
            <div ref={trackRef} className="flex flex-nowrap shrink-0 gap-40 px-32 w-max h-full items-center will-change-transform">

              {/* Cluster 1 - Single Wide */}
              <div className="relative w-[42rem] h-[28rem] shrink-0 flex items-center justify-center group">
                <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-700 bg-neutral-900/40 border border-purple-500/20 group-hover:border-purple-500/50">
                  <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[0]} index={0} />
                </div>
              </div>

              {/* Cluster 2 - Double Vertical */}
              <div className="relative w-[34rem] h-[55rem] shrink-0 flex flex-col justify-between">
                <div className="relative w-full h-[25rem] overflow-hidden rounded-3xl shadow-2xl bg-neutral-900/40 border border-cyan-500/20 group-hover:border-cyan-500/50 group transition-all duration-500">
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 34rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[1]} index={1} />
                </div>
                <div className="relative w-[24rem] h-[24rem] overflow-hidden rounded-3xl shadow-2xl bg-neutral-900/40 border border-pink-500/20 group-hover:border-pink-500/50 group self-start transition-all duration-500">
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 24rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[2]} index={2} />
                </div>
              </div>

              {/* Quote Block */}
              <div className="w-[36rem] shrink-0 px-8 relative">
                <div className="absolute -top-20 -left-10 text-[10rem] font-serif text-white/5 pointer-events-none line-height-0">&quot;</div>
                <h3 className="font-serif text-6xl italic bg-gradient-to-br from-white via-purple-300 to-purple-600 bg-clip-text text-transparent mb-10 leading-tight">
                  &quot;Code is where the imagination meets reality.&quot;
                </h3>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_#a855f7]" />
                  <p className="font-mono text-sm tracking-[0.4em] text-neutral-400 uppercase">HIMANSHU . 2024</p>
                </div>
              </div>

              {/* Cluster 3 - Massive Hero */}
              <div className="relative w-[60rem] h-[48rem] shrink-0 group">
                <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-[0_0_80px_rgba(168,85,247,0.2)] bg-neutral-900/40 border border-white/10 group-hover:border-purple-400/40 transition-all duration-700">
                  <Image
                    src={projects[3].image}
                    alt={projects[3].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[3]} index={3} />
                </div>
              </div>

              {/* Cluster 4 - Asymmetric Double */}
              <div className="relative w-[34rem] h-[55rem] shrink-0 flex flex-col justify-between">
                <div className="relative w-full h-[25rem] overflow-hidden rounded-3xl shadow-2xl bg-neutral-900/40 border border-cyan-500/20 group-hover:border-cyan-500/50 group transition-all duration-500">
                  <Image
                    src={projects[4].image}
                    alt={projects[1].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 34rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[1]} index={1} />
                </div>
                <div className="relative w-[24rem] h-[24rem] overflow-hidden rounded-3xl shadow-2xl bg-neutral-900/40 border border-pink-500/20 group-hover:border-pink-500/50 group self-start transition-all duration-500">
                  <Image
                    src={projects[5].image}
                    alt={projects[5].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 24rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[5]} index={5} />
                </div>
              </div>

              <div className="relative w-[42rem] h-[28rem] shrink-0 flex items-center justify-center group">
                <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-700 bg-neutral-900/40 border border-purple-500/20 group-hover:border-purple-500/50">
                  <Image
                    src={projects[6].image}
                    alt={projects[6].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProjectCardContent project={projects[6]} index={6} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HORIZONTAL CAROUSEL SECTION FOR MOBILE */}
        <div className="lg:hidden flex flex-col gap-10 py-24 z-20 relative">
          <div className="px-8 flex flex-col gap-2">
            <Badge className="w-fit bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px] uppercase tracking-widest px-3 py-1">
              Selected Works
            </Badge>
            <div className="flex justify-between items-end">
              <h3 className="text-5xl font-serif text-white italic leading-none">Portfolio</h3>
              <div className="flex gap-2 items-center text-cyan-400">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Swipe</span>
                <Smartphone className="w-3 h-3" />
              </div>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 px-8 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-w-[88vw] snap-center relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-neutral-900/40 border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="88vw"
                  className="object-cover"
                />
                <ProjectCardContent project={project} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section >
  )
}
