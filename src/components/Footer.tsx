import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Full-stack developer passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About Me
              </Link>
              <Link href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="block text-gray-400 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">Web Development</div>
              <div className="text-gray-400">Mobile App Development</div>
              <div className="text-gray-400">UI/UX Design</div>
              <div className="text-gray-400">3D Web Experiences</div>
              <div className="text-gray-400">Performance Optimization</div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                React
              </Badge>
              <Badge variant="secondary" className="text-xs">
                React Native
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Next.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Three.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                GSAP
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Node.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Tailwind
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 flex items-center">
              © {currentYear} DevPortfolio. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
