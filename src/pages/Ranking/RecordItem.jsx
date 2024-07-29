import Profile4 from "@/assets/fakeImages/Profile4.svg";
import { Progress } from "../../components/ui/progress.jsx";
import { useEffect, useState } from "react";
import { SkeletonCircle, Skeleton } from "@chakra-ui/react";

export const RecordItem = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex justify-center items-center px-2 gap-4">
      <img src={Profile4} className="w-16" alt="Profile image" />
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <span className="font-semibold text-md">이정민</span>
          <span>3:48:58</span>
        </div>
        <Progress value={progress} className="bg-lightGrey" />
      </div>
    </div>
  );
};

export const RecordItemSkeleton = () => {
  return (
    <div className="flex items-center gap-4 pl-2">
      <SkeletonCircle size="14" />
      <div className="flex flex-col items-center gap-2">
        <Skeleton width="250px" height="20px" />
        <Skeleton width="250px" height="20px" />
      </div>
    </div>
  );
};
