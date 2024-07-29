import { useState, useEffect } from "react";
import { Progress } from "../progress";

const InterestItem = ({ rank, title, interestValue }) => {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(parseInt(interestValue));
    }, 500);
    return () => clearTimeout(timer);
  }, [interestValue]);
  return (
    <div className="grid grid-cols-8 my-1">
      <div className="text-slightGrey">{rank}</div>
      <div className="col-span-2 font-semibold text-center">{title}</div>
      <Progress value={progress} className="bg-lightGrey col-span-5" />
    </div>
  );
};

export default InterestItem;
