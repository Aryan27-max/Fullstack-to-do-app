import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to create amazing presentations?</h2>
        <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
          Join thousands of users who are already creating stunning presentations with Potter Presentor. Start your free
          trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
          <div className="relative flex-1 w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 h-12 bg-white dark:bg-gray-800 border-0 text-gray-900 dark:text-white"
            />
          </div>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700 h-12 px-8"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-orange-100 text-sm">No credit card required • Free 14-day trial • Cancel anytime</p>
      </div>
    </section>
  )
}
