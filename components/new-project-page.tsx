"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Clock } from "lucide-react";
import Link from "next/link";
import { projectTemplates, recentPrompts } from "@/lib/const";
import { page, promptStore } from "@/store/promptStore";

export function NewProjectPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const { prompt, page, setPage } = promptStore();

  console.log("prompt", prompt);
  console.log("set page", page);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    console.log(`Selected template: ${templateId}`);
    // Add your template selection logic here
    setPage(`${selectedTemplate}` as page);
  };

  const handlePromptUse = (prompts: any) => {
    console.log(`Using prompt: ${prompts.title}`);
    // Add your prompt usage logic here
  };

  const handleCreateProject = () => {
    if (selectedTemplate) {
      console.log(`Creating project with template: ${selectedTemplate}`);
      // Add your project creation logic here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-lg font-semibold">Create New Project</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Template Selection */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How would you like to start?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the approach that best fits your project needs and workflow
              preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {projectTemplates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all duration-200 border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:scale-105 ${
                  selectedTemplate === template.id
                    ? "ring-2 ring-primary border-primary/50"
                    : "hover:border-border/60"
                }`}
                onClick={() => handleTemplateSelect(template.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto h-16 w-16 rounded-xl flex items-center justify-center mb-4 ${template.color}`}
                  >
                    <template.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl  bg-gradient-to-r from-[#3B71CA] to-[#DC4C64] bg-clip-text text-transparent  font-bold ">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {template.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  {selectedTemplate === template.id && (
                    <Button
                      className="w-full mt-4 cursor-pointer"
                      onClick={handleCreateProject}
                    >
                      Continue with {template.title}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Prompts Section */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Recent AI Prompts</h3>
              <p className="text-muted-foreground">
                Reuse your previous AI-generated project ideas to save time.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Last 30 days
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>

          {/* Prompts List */}
          <div className="space-y-4">
            {prompt.length > 0 ? (
              prompt.map((promptItem, index) => (
                <div
                  key={index}
                  className="border-border/40 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium mb-1 truncate">
                            {/* {promptItem.title || "Title"}
                             */}
                             Title
                          </h4>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs">
                              {/* {promptItem.outline
                                ?.map((outline) => outline.title)
                                .join(", ") || "Outline"} */}
                                Outline
                            </Badge>
                            {/* <span>{promptItem.createdAt || "createdAt"}</span> */}
                            <span>createdAt</span>
                            <span>•</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePromptUse(promptItem)}
                        className="ml-4 cursor-pointer"
                      >
                        Use
                      </Button>
                    </div>
                  </CardContent>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-medium mb-2">No prompts found</h4>
                <p className="text-muted-foreground text-sm">
                  {searchQuery
                    ? "Try adjusting your search terms."
                    : "You haven't used AI to create projects yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
