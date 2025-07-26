import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Smartphone, Globe, Gamepad2 } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A full-featured React Native e-commerce app with real-time inventory, payment integration, and smooth animations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Redux", "Stripe", "Firebase", "GSAP"],
      type: "Mobile App",
      icon: <Smartphone className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "3D Portfolio Website",
      description: "An interactive 3D portfolio built with Three.js featuring immersive animations and WebGL effects.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Three.js", "React", "GSAP", "WebGL", "Tailwind"],
      type: "Web App",
      icon: <Globe className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable chat app with real-time messaging, file sharing, and video calls using WebRTC.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
      type: "Web App",
      icon: <Globe className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform fitness app with workout tracking, progress analytics, and social features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Expo", "GraphQL", "PostgreSQL"],
      type: "Mobile App",
      icon: <Smartphone className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Interactive Game Dashboard",
      description: "A gaming dashboard with real-time statistics, leaderboards, and animated data visualizations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "GSAP", "WebSocket", "Express"],
      type: "Web App",
      icon: <Gamepad2 className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "AI-Powered Task Manager",
      description:
        "Smart task management app with AI suggestions, natural language processing, and predictive analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
      type: "Web App",
      icon: <Globe className="h-4 w-4" />,
      github: "#",
      live: "#",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 md:py-32  bg-gradient-to-t from-black from-10% via-violet-500 via-30% to-white    ">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-purple-100 text-purple-700">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and interactive experiences
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-black">
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
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
        {/* <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">More Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    height={200}
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
        </div> */}

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
