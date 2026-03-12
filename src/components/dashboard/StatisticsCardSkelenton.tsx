import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function StatisticsCardSkelenton() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="w-full max-w-xs h-40 ">
          <CardHeader className="flex justify-between">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className=" w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
