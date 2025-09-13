"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, GraduationCap, Briefcase, Palette, BarChart3 } from "lucide-react"

const templateCategories = [
  {
    id: "business",
    name: "Business & Pitch",
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-orange-400 to-orange-600",
    description: "Impress investors and close deals",
    templates: [
      { name: "Startup Pitch", style: "Modern & Bold", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Sales Report", style: "Clean & Professional", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Product Launch", style: "Dynamic & Engaging", preview: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    id: "creative",
    name: "Creative & Portfolio",
    icon: <Palette className="h-5 w-5" />,
    color: "from-teal-400 to-teal-600",
    description: "Showcase your creative work",
    templates: [
      { name: "Design Portfolio", style: "Artistic & Visual", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Brand Guidelines", style: "Stylish & Consistent", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Creative Brief", style: "Inspiring & Fresh", preview: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    id: "education",
    name: "Education & Training",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-yellow-400 to-yellow-600",
    description: "Engage and educate your audience",
    templates: [
      { name: "Course Material", style: "Clear & Structured", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Workshop Guide", style: "Interactive & Fun", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Research Findings", style: "Academic & Detailed", preview: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    id: "data",
    name: "Data & Analytics",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "from-blue-400 to-blue-600",
    description: "Make data tell compelling stories",
    templates: [
      { name: "Analytics Dashboard", style: "Data-Rich & Clear", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Market Research", style: "Insightful & Detailed", preview: "/placeholder.svg?height=200&width=300" },
      { name: "Performance Review", style: "Metric-Focused", preview: "/placeholder.svg?height=200&width=300" },
    ],
  },
]

export default function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState("business")
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null)

  const currentCategory = templateCategories.find((cat) => cat.id === activeCategory)

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Category Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {templateCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
              activeCategory === category.id
                ? "border-orange-200 dark:border-orange-700 bg-white dark:bg-gray-800 shadow-lg scale-105"
                : "border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-orange-100 dark:hover:border-orange-800 hover:shadow-md"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
            >
              {category.icon}
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
          </button>
        ))}
      </div>

      {/* Template Preview */}
      {currentCategory && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentCategory.color} flex items-center justify-center text-white`}
            >
              {currentCategory.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{currentCategory.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{currentCategory.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentCategory.templates.map((template, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredTemplate(template.name)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 aspect-[4/3] mb-4">
                  <img
                    src={template.preview || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredTemplate === template.name ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        className="w-full bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Use this style
                      </Button>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{template.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{template.style}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-teal-50 dark:from-orange-900/20 dark:to-teal-900/20 rounded-2xl border border-orange-100 dark:border-orange-800">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Can't find the perfect style?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Let our AI create a completely custom template just for your content and brand.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 dark:from-orange-600 dark:to-teal-600 dark:hover:from-orange-700 dark:hover:to-teal-700 text-white shrink-0 ml-4 cursor-pointer">
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Custom
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
