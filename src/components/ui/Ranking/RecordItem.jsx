import Profile4 from "@/assets/fakeImages/Profile4.svg";
import { Progress } from "../progress";
import { useEffect, useState } from "react";

const RecordItem = () => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex justify-center items-center px-2 gap-4">
      <img src={Profile4} className="w-16" alt="Profile image" />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <span>이정민</span>
          <span>3:48:58</span>
        </div>
        <Progress value={progress} className="bg-lightGrey" />
      </div>
    </div>
  );
};

export default RecordItem;
