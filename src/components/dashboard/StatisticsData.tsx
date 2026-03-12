"use client";

import { useTasks } from "@/hooks/useTasks";
import { Task } from "@/types/task.types";
import { BookmarkPlus, Loader, ThumbsUp } from "lucide-react";
import StatisticsCardSkelenton from "./StatisticsCardSkelenton";

export default function StatisticsData() {
  const { tasks } = useTasks();

  let completedTask: Task[] = [];
  let isProgressTask: Task[] = [];

  if (tasks.isLoading) return <StatisticsCardSkelenton />;
  
    if (tasks.isError) return <p>Error loading tasks</p>;

   if (tasks?.data) {
    

    tasks.data.map((task) => {
      if(task.completed){
        completedTask = [...completedTask, task]
      }
      else{
        isProgressTask = [...isProgressTask, task]
      }
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[#94A3B8] container mx-auto pb-13">
      <div className="bg-[#0A0D21] px-5 py-10 rounded-lg space-y-5 shadow-sm shadow-[#7DF9FF]">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Total Added Task</h1>
          <BookmarkPlus className="text-[#7DF9FF]!" />
        </div>

        <h1 className="text-5xl font-bold text-background">
          {tasks?.data?.length}
        </h1>
      </div>
      <div className="bg-[#0A0D21] px-5 py-10 rounded-lg space-y-5 shadow-sm shadow-[#7DF9FF]">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Total Completed Task</h1>
          <ThumbsUp className="text-green-500!" />
        </div>

        <h1 className="text-5xl font-bold text-background">{completedTask?.length}</h1>
      </div>
      <div className="bg-[#0A0D21] px-5 py-10 rounded-lg space-y-5 shadow-sm shadow-[#7DF9FF]">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Total In Progress Task</h1>
          <Loader className="text-blue-500!" />
        </div>

        <h1 className="text-5xl font-bold text-background">{isProgressTask?.length}</h1>
      </div>
    </div>
  );
}
