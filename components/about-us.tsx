import { Users, Target, Award, Heart } from "lucide-react"

export  function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About <span className="text-orange-500 dark:text-orange-400">Potter Presentor</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We're passionate about empowering individuals and teams to create presentations that truly captivate and
              inspire. Our AI-powered platform combines cutting-edge technology with intuitive design to make
              professional presentation creation accessible to everyone.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded by a team of designers, developers, and AI researchers, Potter Presentor is built on the belief
              that great ideas deserve great presentations. We're here to help you tell your story in the most
              compelling way possible.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Active Users</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Presentations Created</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-3xl opacity-20 dark:opacity-30"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Award Winning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Recognized for innovation</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">User Focused</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Built with love for our users</p>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6">
                  <blockquote className="text-gray-700 dark:text-gray-300 italic">
                    "Our mission is to democratize great design and make professional presentations accessible to
                    everyone, regardless of their design background."
                  </blockquote>
                  <div className="mt-4 text-sm font-medium text-orange-600 dark:text-orange-400">
                    — Potter Presentor Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
