"use client";
import { useTasks } from "@/hooks/useTasks";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "@/lib/utils";
import { Dot, SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { TablePagination } from "./TablePagination";
import { useState } from "react";
import TableLoadingSkeleton from "./TableLoadingSkeleton";

export default function TaskTable() {
  const [activePage, setActivePage] = useState(1);
  const { tasks } = useTasks();

  let totalPage = 0;
  let pages: number[] = [];

  if (tasks.isLoading) return <TableLoadingSkeleton />;

  if (tasks.isError) return <p>Error loading tasks</p>;

  if (tasks?.data) {
    totalPage = Math.ceil((tasks?.data?.length as number) / 10);
    const pagesNumber = [...Array(totalPage).keys()]
    pages= [...pagesNumber]
  }



  const allTasks = tasks?.data?.slice((activePage * 10) - 10, activePage * 10);

  return (
    <div className="text-[#94A3B8] border border-s-2 rounded-xl overflow-clip container mx-auto mt-9 ">
      <Table className="">
        <TableHeader className=" bg-[#191F28] ">
          <TableRow className="">
            <TableHead className=" text-[#94A3B8] text-lg text-center">
              #
            </TableHead>
            <TableHead className=" text-[#94A3B8] text-lg text-center">
              Title
            </TableHead>
            <TableHead className="text-[#94A3B8] text-lg text-center">
              Status
            </TableHead>
            <TableHead className="text-[#94A3B8]  text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTasks?.map((task) => (
            <TableRow className="text-[#94A3B8] bg-[#0A0D21]" key={task.id}>
              <TableCell className="text-md">{task.id}</TableCell>
              <TableCell className="text-md">{task.title}</TableCell>
              <TableCell className="flex justify-center">
                <span
                  className={cn(
                    " max-w-min flex items-center justify-center bg-blue-400 text-blue-900 px-2 rounded-lg opacity-75",
                    {
                      "bg-green-400 text-green-900 px-2 rounded-lg":
                        task.completed,
                    },
                  )}
                >
                  {" "}
                  <Dot /> {task.completed ? "Completed" : "In Progress"}
                </span>
              </TableCell>

              <TableCell className="text-center space-x-2">
                <Button>
                  <SquarePen className="cursor-pointer" />
                </Button>
                <Button>
                  <Trash2 className="cursor-pointer" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className=" bg-[#191F28]">
          <TableRow className="">
            <TableCell colSpan={4}>
              <TablePagination setActivePage={setActivePage} pages={pages}  activePage={activePage}/>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
