"use client";
import { ArrowRight, CheckCircle, Calendar, Bell } from "lucide-react";
import { Button } from "./ui/button";
import todoImage from "@/public/todohero.jpg"
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter()
  return (
    <div className="bg-gradient-subtle">
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Organize your life with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                smart
              </span>{" "}
              todo lists
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Stay focused, get things done, and achieve your goals with our beautifully
              designed task management platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
            <Button size="lg" variant="default" className="group" onClick={() => {
              router.push("/dashboard")
            }}>
              Start organizing for free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              <a href="#" />
            }}>
              See how it works
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success" />
              Free forever
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-accent" />
              Smart scheduling
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bell className="h-4 w-4 text-warning" />
              Smart reminders
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative animate-slide-up">
          <div className="relative">
            <Image
              src={todoImage}
              alt="Todo list app interface showing organized tasks and productivity features"
              className="w-full h-auto rounded-2xl shadow-card animate-float"
            />
            <div className="absolute -top-4 -right-4 bg-card border rounded-xl p-4 shadow-glow animate-pulse-glow">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Task completed!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}