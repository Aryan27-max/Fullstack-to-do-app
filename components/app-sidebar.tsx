"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { menuItems } from "@/lib/const";
import { Button } from "./ui/button";
import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import {  useRouter } from "next/navigation";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  user: {
    _id: string
    name: string
    email: string
    clerkId: string
    profilePicture?: string
    subscription: boolean
    createdAt: Date
    updatedAt: Date
  };
}

export function AppSidebar({
  activeSection,
  onSectionChange,
  user,
}: AppSidebarProps) {
  const { signOut } = useClerk();
  const router = useRouter()
  const handleLogout = () => {
    console.log("Logging out...");
    signOut({ redirectUrl: "/" });
    // Add your logout logic here
    // For example: redirect to login page, clear tokens, etc.
  };

  return (
    <Sidebar className="border-r border-border/40">
      <SidebarContent>
        <span className="text-3xl italic flex items-center justify-center mt-3 font-bold cursor-pointer" onClick={()=>{
          router.push("/")
        }}>Todo Master</span>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeSection === item.key}
                  >
                    <button
                      onClick={() => onSectionChange(item.key)}
                      className="flex items-center gap-3 px-3 py-2 w-full text-left cursor-pointer"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-muted/20">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user.profilePicture || "/placeholder.svg?height=32&width=32"}
              alt={user.name}
            />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-medium truncate">{user.name}</span>
            <span className="text-xs text-muted-foreground truncate">
              {user.email}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive cursor-pointer"
            title="Logout"
          >
            <LogOut className="h-4 w-4 " />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
