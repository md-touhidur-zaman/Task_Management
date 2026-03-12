import { axiosInstance } from "@/lib/axios";
import { Task } from "@/types/task.types";

export const getTasks = async (): Promise<Task[]> => {
  const res = await axiosInstance.get("/todos");
  return res.data;
};

export const createTask = async (task: Task) => {
  const res = await axiosInstance.post("/todos", task); 
  return res.data;
};
