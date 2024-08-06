import { getElapsedTime, startTimer, stopTimer } from "@/utils/timer";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { updateUserInfo } from "@/utils/http";
import { useLoginStore } from "@/store/store";

const TimerSection = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const { userID } = useLoginStore();
  useEffect(() => {
    const interval = setInterval(async () => {
      setElapsedTime(getElapsedTime());
      try {
        await updateUserInfo(userID, { screenTime: elapsedTime });
      } catch (err) {
        throw new Error(err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [elapsedTime, userID]);

  const handleStart = () => {
    startTimer();
    setElapsedTime(0);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Button onClick={handleStart} variant="ghost">
        <img src="mainLogo.png" width="15%" />
        <span>다른 앱 시작</span>
      </Button>
      <p className="text-lg font-bold">
        다른 앱 사용시간: {formatTime(elapsedTime)}
      </p>
      <Button onClick={stopTimer}>중지</Button>
    </div>
  );
};

export default TimerSection;
