import { getElapsedTime, startTimer } from "@/utils/timer";
import { useEffect, useState } from "react";

const TimerSection = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(getElapsedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <>
      <button onClick={handleStart}>타이머시작</button>
      <p className="text-lg font-bold">
        현재 도톡스 시간: {formatTime(elapsedTime)}
      </p>
    </>
  );
};

export default TimerSection;
