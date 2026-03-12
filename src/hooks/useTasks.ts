import { createTask, getTasks } from "@/services/tasks.services"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useTasks = () =>{
    const queryClient = useQueryClient();
    
    const tasks = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks
    })

    const create = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

    return {tasks,create}
}