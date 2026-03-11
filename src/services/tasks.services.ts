import { axiosInstance } from "@/lib/axios"
import { Task } from "@/types/task.types"

export const getTasks = async(): Promise<Task[]> =>{
    
    const res = await axiosInstance.get("/todos")
    return res.data
}
