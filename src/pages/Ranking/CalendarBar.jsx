import React from "react";
import DateItem from "./DateItem.jsx";
import LeftArrow from "@/assets/leftArrow.svg";
import RightArrow from "@/assets/rightArrow.svg";
import { Button } from "../../components/ui/button.jsx";

const CalendarBar = () => {
  const today = new Date();

  // 요일 배열 (일요일 시작)
  let dayStr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // 오늘 날짜 객체
  const todayDate = {
    month: today.getMonth() + 1,
    day: dayStr[today.getDay()], // 일요일(0) 시작
    date: today.getDate(),
  };

  // 오늘을 중심으로 5개의 날짜를 계산하는 함수
  const getSurroundingDates = (centerDate) => {
    let dates = [];
    for (let i = -2; i <= 2; i++) {
      let newDate = new Date(centerDate);
      newDate.setDate(centerDate.getDate() + i);
      dates.push({
        month: newDate.getMonth() + 1,
        day: dayStr[newDate.getDay()], // 일요일(0) 시작
        date: newDate.getDate(),
      });
    }
    return dates;
  };

  // 중심 날짜로부터 5개의 날짜를 계산
  const surroundingDates = getSurroundingDates(today);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="text-deepGreen flex items-center justify-center gap-6">
        <Button variant="ghost">
          <img src={LeftArrow} alt="left Arrow" />
        </Button>
        <span className="font-semibold text-xl">{todayDate.month}월</span>
        <Button variant="ghost">
          <img src={RightArrow} alt="right Arrow" />
        </Button>
      </div>
      <div className="datesContainer flex justify-evenly w-full mx-2 items-center">
        {surroundingDates.map((dateData, index) => (
          <DateItem
            key={index}
            isActive={dateData.date === todayDate.date}
            dateData={dateData}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarBar;
