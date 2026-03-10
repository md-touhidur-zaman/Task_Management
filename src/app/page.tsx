
import { Button } from "@/components/ui/button";
import { getTasks } from "@/services/tasks.services";

export default async function Home() {
  
    const data =await getTasks();
    console.log(data);
 
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
