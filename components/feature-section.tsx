import { ArrowRight, Layers, Palette, Sparkles, Zap } from "lucide-react";
import FeatureCard from "./feature-card";

export function FeatureSection(){
    return(
        <div>
            <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Powered by advanced AI</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI understands your needs and creates presentations that captivate your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-orange-500" />}
            title="AI-Generated Content"
            description="Just provide a topic, and our AI will create complete slide content with perfect structure."
          />
          <FeatureCard
            icon={<Layers className="h-6 w-6 text-blue-500" />}
            title="Template Library"
            description="Choose from dozens of professionally designed templates or let AI create a custom one."
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6 text-teal-500" />}
            title="Creative Designs"
            description="Generate unique, eye-catching designs that match your brand and message."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-amber-500" />}
            title="Instant Generation"
            description="Create complete presentations in minutes instead of hours."
          />
          <FeatureCard
            icon={<ArrowRight className="h-6 w-6 text-rose-500" />}
            title="Easy Customization"
            description="Fine-tune any aspect of your presentation with simple controls."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-indigo-500" />}
            title="Smart Suggestions"
            description="Get AI recommendations to improve your slides as you work."
          />
        </div>
      </section>
        </div>
    )
}