import { Home, Clock, Trash2, Settings, Archive, FileIcon as FileTemplate, FileText, Palette,Brain, Share2, Sparkles, Zap,  BarChart3, PlusCircle, Code, Users, CheckSquare, Square, AlertCircle } from "lucide-react"




export const menuItems = [
  {
    title: "All Todos",
    key: "home",
    icon: Home,
  },
  {
    title: "Pending",
    key: "pending",
    icon: Square,
  },
  {
    title: "Completed",
    key: "completed",
    icon: CheckSquare,
  },
  {
    title: "High Priority",
    key: "priority",
    icon: AlertCircle,
  },
  {
    title: "Recent",
    key: "recent",
    icon: Clock,
  },
  // {
  //   title: "Settings",
  //   key: "settings",
  //   icon: Settings,
  // },
]


export const mockTodos = [
  {
    _id: "1",
    title: "Complete project proposal",
    description: "Finish the quarterly project proposal for the new client",
    completed: false,
    priority: "high" as const,
    dueDate: new Date("2024-12-20"),
    createdAt: new Date("2024-12-10"),
    updatedAt: new Date("2024-12-10"),
    userId: "user1" as any,
    category: "Work",
    tags: ["urgent", "client", "proposal"],
  },
  {
    _id: "2",
    title: "Buy groceries",
    description: "Get milk, bread, eggs, and vegetables for the week",
    completed: false,
    priority: "medium" as const,
    dueDate: new Date("2024-12-15"),
    createdAt: new Date("2024-12-12"),
    updatedAt: new Date("2024-12-12"),
    userId: "user1" as any,
    category: "Personal",
    tags: ["shopping", "food"],
  },
  {
    _id: "3",
    title: "Review code changes",
    description: "Review the pull requests from the development team",
    completed: true,
    priority: "high" as const,
    dueDate: new Date("2024-12-13"),
    createdAt: new Date("2024-12-11"),
    updatedAt: new Date("2024-12-13"),
    userId: "user1" as any,
    category: "Work",
    tags: ["code-review", "development"],
  },
  {
    _id: "4",
    title: "Plan weekend trip",
    description: "Research and book accommodation for the weekend getaway",
    completed: false,
    priority: "low" as const,
    dueDate: new Date("2024-12-18"),
    createdAt: new Date("2024-12-09"),
    updatedAt: new Date("2024-12-09"),
    userId: "user1" as any,
    category: "Personal",
    tags: ["travel", "vacation", "planning"],
  },
  {
    _id: "5",
    title: "Update documentation",
    description: "Update the API documentation with the latest changes",
    completed: false,
    priority: "medium" as const,
    createdAt: new Date("2024-12-08"),
    updatedAt: new Date("2024-12-08"),
    userId: "user1" as any,
    category: "Work",
    tags: ["documentation", "api"],
  },
  {
    _id: "6",
    title: "Call dentist",
    description: "Schedule annual dental checkup appointment",
    completed: true,
    priority: "medium" as const,
    dueDate: new Date("2024-12-14"),
    createdAt: new Date("2024-12-07"),
    updatedAt: new Date("2024-12-14"),
    userId: "user1" as any,
    category: "Health",
    tags: ["health", "appointment"],
  },
];


export const features = [
  {
    icon: Brain,
    title: "AI-Powered Content",
    description: "Generate compelling content and layouts automatically with advanced AI technology.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create professional presentations in minutes, not hours. Save time and boost productivity.",
  },
  {
    icon: Palette,
    title: "Beautiful Designs",
    description: "Choose from hundreds of professionally designed templates that adapt to your content.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your presentations instantly with colleagues, clients, or the world.",
  },
  {
    icon: Clock,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, no matter where you are.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description: "Get intelligent recommendations to improve your presentation's impact.",
  },
]

export const projectTemplates = [
  {
    id: "create",
    title: "Use a Template",
    description: "Choose from our collection of professionally designed templates to get started quickly.",
    icon: FileTemplate,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    features: ["Pre-built layouts", "Industry standards", "Quick setup"],
  },
  {
    id: "creative-ai",
    title: "Creative AI",
    description: "Let our AI assistant create a custom project based on your requirements and preferences.",
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    features: ["Smart generation", "Custom layouts", "AI-powered"],
  },
  {
    id: "creative-scratch",
    title: "Start from Scratch",
    description: "Begin with a blank canvas and build your project exactly the way you envision it.",
    icon: PlusCircle,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    features: ["Full control", "Custom design", "Unlimited creativity"],
  },
]

export const recentPrompts = [
  {
    id: 1,
    title: "Create a modern e-commerce dashboard with analytics",
    createdAt: "2 hours ago",
    outline: [
      {
        id: "1",
        title: "Dashboard",
        order: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Design a team collaboration workspace",
    createdAt: "1 day ago",
    outline: [
      {
        id: "1",
        title: "Workspace",
        order: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Build a portfolio website with dark theme",
    createdAt: "3 days ago",
    outline: [
      {
        id: "1",
        title: "Website",
        order: 3,
      },
    ],
  },
  {
    id: 4,
    title: "Create a project management tool interface",
    createdAt: "1 week ago",
    outline: [
      {
        id: "1",
        title: "Tool",
        order: 4,
      },
    ],
  },
  {
    id: 5,
    title: "Design a mobile app landing page",
    createdAt: "2 weeks ago",
    outline: [
      {
        id: "1",
        title: "Landing",
        order: 5,
      },
    ],
  },
]