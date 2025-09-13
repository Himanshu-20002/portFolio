import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Smartphone, Globe, Gamepad2 } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Interactive Game Dashboard",
      description:
        "A full-featured Emersive gaming dashboard  packed with scroll  Transition , leaderboards and animated data visualizations.",
      image: "/img/projectImg1.png",
      technologies: ["React ", "Redux", "Firebase", "GSAP"],
      type: "Web App",
      icon: <Smartphone className="h-4 w-4" />,
      github: "https://github.com/Himanshu-20002/gaming-webapp.git",
      live: "https://next-valorant.vercel.app/",
      featured: true,
    },
    
    {
      title: "Grocery Delivery App",
      description: "A scalable grocery app with real-time loc tracking admin dashBord sockets , inspired by blinkit.",
      image: "/img/mobb1.png",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
      type: "Mobile App",
      icon: <Smartphone className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Multi-vendor E-commerce app",
      description: "Cross-platform E-commerce app featuring real-time order tracking and instant location updates. Shop from multiple sellers and get your orders delivered fast with live delivery status",
      image: "/img/mob2.png",
      technologies: ["React Native", "soket.io", "GraphQL", "PostgreSQL"],
      type: "Mobile App",
      icon: <Smartphone className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "web scrapper API",
      description: "High-performance web scraping API service built with Express and React. Features real-time data visualization, automated scraping schedules, and custom data extraction patterns for e-commerce sites.",
      image: "/img/mob3.png",
      technologies: ["React", "D3.js", "GSAP", "WebSocket", "Express"],
      type: "Web App",
      icon: <Globe className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Nike",
      description:" A dynamic Nike showcase website featuring interactive 3D product models, fluid animations, and a modern e-commerce experience. Highlights include animated product arrivals, curated collections, and seamless browsing with GSAP-powered transitions.",
      image: "/img/nike.png",
      technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
      type: "Web App",
      icon: <Globe className="h-4 w-4" />,
      github: "#",
      live: "https://next-nike-mauve.vercel.app/",
      featured: true,
    },
    {
      title: "Animated Component Library",
      description: "An interactive landing page built with gsap featuring immersive animations and WebGL effects.",
      image: "/img/projectImg3.png",
      technologies: ["Three.js", "React", "GSAP", "WebGL", "Tailwind"],
      type: "Web App",
      icon: <Globe className="h-4 w-4" />,
      github: "#",
      live: "https://landing-page-bay-seven-16.vercel.app/",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="portfolio" className="py-20 md:py-32  gap-10 justify-around flex  bg-gradient-to-t from-black from-10% via-violet-500 via-30% to-white    ">

      <div className="container h-100vh mx-auto px-5">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-purple-100 text-purple-700">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and interactive experiences
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16  px-7">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-black">

              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               // Replace the buttons section in your Card component
                <div className="absolute bottom-4 left-4 right-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 md:opacity-0 group-hover:opacity-100"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 max-lg:bg-purple-500 md:opacity-0 group-hover:opacity-100"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader className="bg-gray-200 p-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    {project.icon}
                    <span>{project.type}</span>
                  </Badge>
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Other Projects */}









        <div className="  hidden md:block py-10 px-5">
          <h3 className="text-2xl font-bold text-center">More Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-10">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="secondary" className="flex items-center space-x-1 text-xs">
                      {project.icon}
                      <span>{project.type}</span>
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
