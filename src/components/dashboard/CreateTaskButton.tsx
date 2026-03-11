"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { CreateTaskModal } from "./CreateTaskModal";

export default function CreateTaskButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <Button
          onClick={() => setOpen(true)}
          className="bg-[#7DF9FF] text-foreground border-0 hover:bg-[#7DF9FF]/80 cursor-pointer"
          variant={"outline"}
        >
          {" "}
          <Plus /> Create Task
        </Button>
      </div>
      <CreateTaskModal open={open} setOpen={setOpen} />
    </>
  );
}
