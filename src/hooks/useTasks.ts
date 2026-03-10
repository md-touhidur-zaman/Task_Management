import { getTasks } from "@/services/tasks.services"
import { useQuery } from "@tanstack/react-query"

export const useTasks = () =>{
    
    const tasks = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks
    })

    return {tasks}
}