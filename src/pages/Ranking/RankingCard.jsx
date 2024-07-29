import { SkeletonText, SkeletonCircle, Skeleton } from "@chakra-ui/react";
import { Card, CardContent } from "../card";
import Profile1 from "@/assets/fakeImages/Profile1.svg";

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
    <Card className="flex flex-col items-center">
      <CardContent className="flex flex-col justify-center items-center pt-2 gap-2">
        <span className="font-medium text-deepGreen">1등</span>
        <SkeletonCircle size="12" />
        <div className="flex flex-col items-center gap-2">
          <Skeleton mt="3" height="20px" width="50px" />
          <Skeleton height="15px" width="60px" />
        </div>
      </CardContent>
    </Card>
  );
};
