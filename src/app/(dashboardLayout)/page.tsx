import CreateTaskButton from "@/components/dashboard/CreateTaskButton";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar/>
      <SidebarInset className="bg-foreground">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-3">
          <div className="flex items-center justify-center gap-2 px-3 ">
            <SidebarTrigger className="text-[#7DF9FF]" />
            <Separator orientation="vertical" className="" />
          </div>
          <div>
            <CreateTaskButton/>
          </div>
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
