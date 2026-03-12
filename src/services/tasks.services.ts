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

export const deleteTask = async (id: number) => {
  await axiosInstance.delete(`/todos/${id}`);
  return id;
};

export const updateTask = async (task: Task) => {
  const res = await axiosInstance.put(`/todos/${task.id}`, task);
  return res.data;
};
