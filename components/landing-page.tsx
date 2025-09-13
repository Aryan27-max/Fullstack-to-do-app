import Link from "next/link"
import { ArrowRight, Sparkles, Layers, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import TemplateShowcase from "@/components/template-showcase"
import { Navbar } from "./navbar"
import { HeroSection } from "./hero-section"
import { FeatureSection } from "./feature-section"
import { WorkingSection } from "./working-section"
import { Footer } from "./footer"
import {AboutSection} from "@/components/about-us"
import { CTASection } from "./cta-section"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
     <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Templates Showcase - Revamped */}
      <TemplateShowcase />

      {/* How It Works */}
      <WorkingSection />

      {/* CTA Section */}
      {/* <section className="bg-gradient-to-r from-orange-500 to-teal-500 dark:from-orange-600 dark:to-teal-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to create amazing presentations?</h2>
          <p className="text-xl text-orange-100 dark:text-orange-200 max-w-2xl mx-auto mb-10">
            Join thousands of users who save time and impress their audience with Potter-presentor.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-orange-50 dark:bg-gray-100 dark:text-orange-600 dark:hover:bg-gray-200 cursor-pointer"
          >
            Get started for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section> */}

      <CTASection />

{/* ABout Us */}
<AboutSection />
      {/* Footer */}
      <Footer />
    </div>
  )
}
