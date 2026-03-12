"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useTasks } from "@/hooks/useTasks";
import { Task } from "@/types/task.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string(),
  completed: z.string(),
});

export function UpdateTaskModal({
  task,
  updateModalOpen,
  setUpdateModalOpen,
}: {
  task: Task;
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { update } = useTasks();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:  "",
      completed: task?.completed ? "Completed" : "InProgress",
    },
  });

  const onSubmit = async (e: z.infer<typeof formSchema>) => {
    console.log(e);
    const result = await update.mutateAsync({id: task?.id, title: e.title, completed: e.completed === "Completed"? true : false})

    if(result){
      toast.success("Your task information updated successfully.")
      setUpdateModalOpen(false)
    }

  
  };

  return (
    <AlertDialog open={updateModalOpen} onOpenChange={setUpdateModalOpen}>
      <AlertDialogTitle />
      <AlertDialogContent className="bg-[#0A0D21] text-[#94A3B8] shadow-sm shadow-[#7DF9FF]">
        <AlertDialogDescription>
          <form
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 min-w-max"
          >
            <FieldGroup>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="form-rhf-demo-title"
                      className="text-xl font-bold"
                    >
                      Title
                    </FieldLabel>
                    <Input
                      {...field}
                      className="min-w-full px-2 py-3 bg-background"
                      placeholder="Enter your task title"
                      autoComplete="off"
                      value={task?.title}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="completed"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="form-rhf-demo-title"
                      className="text-xl font-bold"
                    >
                      Status
                    </FieldLabel>
                    <Select defaultValue={task?.completed ? "Complete" : "InProgress"} onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Completed">Completed</SelectItem>
                          <SelectItem value="InProgress">InProgress</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <div className="flex justify-end items-center gap-3">
              <Button
                variant={"outline"}
                type="button"
                className="cursor-pointer text-foreground"
                onClick={() => setUpdateModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant={"outline"}
                className="bg-[#7DF9FF] border-0 hover:bg-[#7DF9FF]/80 cursor-pointer text-foreground font-bold"
              >
                {update.isPending ? (
                  <Loader className="animate-spin" />
                ) : (
                  <>
                    Update Task
                  </>
                )}{" "}
              </Button>
            </div>
          </form>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
