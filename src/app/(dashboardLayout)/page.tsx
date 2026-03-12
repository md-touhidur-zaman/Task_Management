import CreateTaskButton from "@/components/dashboard/CreateTaskButton";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import StatisticsData from "@/components/dashboard/StatisticsData";
import TaskTable from "@/components/dashboard/TaskTable";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="bg-foreground">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-3">
          <div className="flex items-center justify-center gap-2 px-3 ">
            <SidebarTrigger className="text-[#7DF9FF]" />
            <Separator orientation="vertical" className="" />
          </div>
          <div>
            <CreateTaskButton />
          </div>
        </header>
        <div className="px-2 lg:px-0 space-y-10 ">
          <DashboardHeroSection />
          <TaskTable />
          <StatisticsData/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
