"use client"

import { Button } from "@/components/ui/button"

export function AboutMe() {
  const stats = [
    {
      value: "25+",
      title: "Projects Completed",
      description: "Web applications & tools",
    },
    {
      value: "3",
      title: "Certifications",
      description: "Verified technical skills",
    },
    {
      value: "3+",
      title: "Years of Learning",
      description: "Consistent growth journey",
    },
  ]

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 md:py-32 bg-[#020202] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10 mt-10 md:mt-0">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me</span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mb-12">
          Hello, I&apos;m <strong className="text-white font-medium">Himanshu</strong>, passionate about building clean, scalable, and modern web applications. I enjoy working across the full stack, constantly learning new technologies, and refining my problem-solving skills to build real-world solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Button
            asChild
            className="bg-[#111113] hover:bg-[#1a1a1c] border border-white/5 text-white rounded-xl px-8 h-12 transition-all backdrop-blur-md shadow-lg font-medium text-sm cursor-pointer"
          >
            <a
              href="/himanshu_resume.pdf?v=1"
              download="Himanshu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </Button>
          <Button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#111113] hover:bg-[#1a1a1c] border border-white/5 text-white rounded-xl px-8 h-12 transition-all backdrop-blur-md shadow-lg font-medium text-sm cursor-pointer"
          >
            View Projects
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111113] border border-white/5 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-start justify-center transition-all hover:bg-[#161618] text-left hover:-translate-y-1 hover:border-white/10 duration-300"
            >
              <h3 className="text-white font-semibold text-3xl mb-4">{stat.value}</h3>
              <p className="text-white font-medium text-sm mb-2">{stat.title}</p>
              <p className="text-zinc-500 text-sm">{stat.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}
