import { Button } from "../../components/ui/button.jsx";

const DateItem = ({ isActive = false, dateData }) => {
  let activeClass = isActive
    ? "bg-deepGreen text-white hover:opacity-80 hover:bg-deepGreen"
    : "bg-white text-slateGrey hover:bg-deepGreen hover:text-white";
  let cssClass = `px-2 py-6 flex flex-col items-center justify-center rounded-full ${activeClass}`;

  return (
    // FIXME:하드코딩 실제 데이터로 변경하기
    <Button className={cssClass}>
      <div className="font-medium text-sm">{dateData?.day}</div>
      <div className="text-xs font-extralight">
        {dateData?.month}/{dateData?.date}
      </div>
    </Button>
  );
};

export default DateItem;
