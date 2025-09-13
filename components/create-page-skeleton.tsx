"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export function CreatePageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Skeleton */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2" disabled>
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <div className="h-6 w-px bg-border" />
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-[600px] mx-auto" />
          </div>

          {/* Template Cards Skeleton */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto h-16 w-16 rounded-xl bg-muted mb-4 flex items-center justify-center">
                    <Skeleton className="h-8 w-8" />
                  </div>
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[1, 2, 3].map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Skeleton className="h-1.5 w-1.5 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Prompts Section Skeleton */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-5 w-80" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          {/* Search Bar Skeleton */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* Prompts List Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <Card key={index} className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <Skeleton className="h-5 w-3/4 mb-2" />
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-5 w-16 rounded-full" />
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-2" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </div>
                    <Skeleton className="h-8 w-12 rounded-md ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button Skeleton */}
          <div className="text-center mt-8">
            <Skeleton className="h-10 w-32 mx-auto rounded-md" />
          </div>
        </div>
      </section>
    </div>
  )
}
