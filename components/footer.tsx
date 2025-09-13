import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold text-white">
                  Potter-presentor
                </span>
              </div>
              <p className="max-w-xs">
                AI-powered presentation creation tool that helps you create
                stunning slides in minutes.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white dark:hover:text-gray-300 transition-colors"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
            <p> Made with ❤️ </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
