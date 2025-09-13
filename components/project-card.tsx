"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye, Trash2, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
// Removed Prisma import - using plain object type instead
import { slideStore } from "@/store/slideStore";

interface Project {
  id: number;
  title: string;
  description: string;
  lastModified: string;
  status: string;
  isDeleted: boolean;
}

interface ProjectCardProps {
  project: Project;
  isInTrash?: boolean;
  slidesData?: any
  onDelete: (projectId: number) => void;
  onRestore: (projectId: number) => void;
  onPermanentDelete: (projectId: number) => void;
}

export function ProjectCard({
  project,
  isInTrash = false,
  onDelete,
  slidesData,
  onRestore,
  onPermanentDelete,
}: ProjectCardProps) {
  const router = useRouter();
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "draft":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "archived":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default:
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };
  const {setSlides} = slideStore()

  return (
    <Card
      className={`group hover:shadow-md transition-all duration-200 border-border/40 bg-card/50 backdrop-blur-sm cursor-pointer ${
        isInTrash ? "opacity-75" : ""
      }`}
      onClick={() => {
        // setSlides(JSON.parse(JSON.stringify(slidesData)))
        router.push(`/presentation/${project.id}`);
      }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 min-w-0 flex-1">
            <CardTitle className="text-base font-semibold truncate">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                onClick={(e) => e.stopPropagation()} // Prevent card navigation
              >
                <MoreHorizontal className="h-4 w-4 " />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {isInTrash ? (
                <>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card navigation
                      onRestore(project.id);
                      router.refresh();
                    }}
                    className="cursor-pointer"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Restore
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card navigation
                      onPermanentDelete(project.id);
                    }}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Delete Forever
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card navigation
                      // Handle view action
                      console.log("View project:", project.id);
                    }}
                    className="cursor-pointer"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card navigation
                    onDelete(project.id);
                    router.refresh();
                  }}
                    
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    <div  onClick={(e) => {
                      e.stopPropagation(); // Prevent card navigation
                      onDelete(project.id);
                      router.refresh();
                    }}>
                      Delete
                    </div>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className={`text-xs ${getStatusColor(project.status)}`}
          >
            {isInTrash ? "deleted" : project.status}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {project.lastModified}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
