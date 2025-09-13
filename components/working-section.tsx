export function WorkingSection(){
    return (
        <div>
            <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How Potter-presentor works</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Creating stunning presentations has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enter your topic</h3>
            <p className="text-gray-600 dark:text-gray-300">Tell us what your presentation is about in a few words.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Choose a template</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Select from our library or let AI generate a custom design.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Generate & customize</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI creates your slides, then tweak them to perfection.
            </p>
          </div>
        </div>
      </section>
        </div>
    )
}