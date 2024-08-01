import { Button } from "../ui/button";

const StartWithNaverButton = ({ ...props }) => {
  return (
    <Button variant="ghost" {...props}>
      <div className="flex bg-[#03C75B] items-center justify-center gap-2 rounded-md">
        <img
          src="NaverRectangle.png"
          alt="Naver Icon Rect"
          className="w-[13.5%]"
        />
        <span className="text-white">네이버로 시작하기</span>
      </div>
    </Button>
  );
};

export default StartWithNaverButton;
