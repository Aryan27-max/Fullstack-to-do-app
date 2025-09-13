import { Button } from "./ui/button";


export function TemplateShowcase(){
    return (
        <div>
            <section id="templates" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              From <span className="text-orange-500 dark:text-orange-400">blank canvas</span> to{" "}
              <span className="text-teal-600 dark:text-teal-400">masterpiece</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're pitching to investors, teaching students, or presenting quarterly results, our AI crafts
              the perfect presentation style for your story.
            </p>
          </div>

          <TemplateShowcase />

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-orange-100 dark:border-gray-700">
              <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 rounded-full">
                ✨ Generate with AI
              </Button>
              <span className="text-gray-500 dark:text-gray-400 px-4">or</span>
              <Button
                variant="ghost"
                className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-full"
              >
                Browse templates →
              </Button>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}