import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Dispatch, SetStateAction } from "react";
import CreateTaskForm from "./CreateTaskForm";

export function CreateTaskModal({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-[#0A0D21] text-[#94A3B8] shadow-2xl">
        <AlertDialogHeader>
          <CreateTaskForm setOpen={setOpen}/>
        </AlertDialogHeader>
        {/* <AlertDialogFooter className="bg-[#0A0D21]  ">
          <AlertDialogCancel className="text-foreground! cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-[#7DF9FF]! text-foreground! cursor-pointer"><Plus/> Add Task</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
