import { ThemeToggle } from "@/components/theme-toggle"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
export function Navbar(){
    return(
        <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-orange-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Potter-presentor</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#templates"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              Templates
            </Link>
            <Link
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              About Us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" className="hidden md:inline-flex dark:text-gray-300 dark:hover:text-white cursor-pointer">
              Log in
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 cursor-pointer">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
    )
}