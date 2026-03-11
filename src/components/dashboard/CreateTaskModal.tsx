import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Dispatch, SetStateAction } from "react";
import CreateTaskForm from "./CreateTaskForm";

export function CreateTaskModal({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-[#0A0D21] text-[#94A3B8] shadow-sm shadow-[#7DF9FF]">
        <AlertDialogDescription>
          <CreateTaskForm setOpen={setOpen}/>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
