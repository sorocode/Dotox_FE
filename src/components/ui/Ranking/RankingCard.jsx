import { Card, CardContent } from "../card";
import Profile1 from "@/assets/fakeImages/Profile1.svg";
import { Skeleton } from "@/components/ui/skeleton";

export const RankingCard = () => {
  return (
    <Card className="flex flex-col items-center">
      <CardContent className="flex flex-col justify-center items-center pt-2 gap-2">
        <span className="font-medium text-deepGreen">1등</span>
        <img src={Profile1} alt="Profile1" />
        <div className="flex flex-col items-center">
          <span className="font-semibold">박지현</span>
          <span className="text-sm">1:34:28</span>
        </div>
      </CardContent>
    </Card>
  );
};

export const RankingCardSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
