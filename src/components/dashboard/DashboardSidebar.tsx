import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Zap } from "lucide-react"
import Link from "next/link"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/",
      items: [
        {
          title: "Home",
          url: "/",
          icon: "House"
        }
      ],
    }
  ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-red-500" {...props}>
      <SidebarHeader >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8  items-center justify-center rounded-lg bg-[#7DF9FF] text-sidebar-primary-foreground">
                  <Zap className="text-[#0A0D21] font-bold" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Task Management</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarMenu >
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} >
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium ">
                  
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
