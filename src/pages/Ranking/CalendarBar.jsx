import DateItem from "./DateItem";
import LeftArrow from "@/assets/leftArrow.svg";
import RightArrow from "@/assets/rightArrow.svg";
import { Button } from "../button";
const CalendarBar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="text-deepGreen flex items-center justify-center gap-6">
        <Button variant="ghost">
          <img src={LeftArrow} alt="left Arrow" />
        </Button>
        <span className="font-semibold text-xl">5월</span>
        <Button variant="ghost">
          <img src={RightArrow} alt="right Arrow" />
        </Button>
      </div>
      <div className="datesContainer flex justify-evenly w-full mx-2 items-center">
        <DateItem />
        <DateItem />
        <DateItem isActive />
        <DateItem />
        <DateItem />
      </div>
    </div>
  );
};

export default CalendarBar;
