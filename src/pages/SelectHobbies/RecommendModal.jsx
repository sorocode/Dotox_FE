import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../../components/ui/dialog";
import CustomButton from "@/components/ui/CustomButton";
import { HobbyItem } from "./HobbyItem";
const RecommendModal = ({ gender, age }) => {
  let recommendList = {
    male: {
      10: ["축구", "농구", "야구"],
      20: ["헬스", "e스포츠", "스쿠버 다이빙"],
      30: ["골프", "등산", "요가"],
    },
    female: {
      10: ["발레", "피아노", "수영"],
      20: ["필라테스", "카메라 촬영", "도자기 공예"],
      30: ["요가", "캘리그래피", "와인 테이스팅"],
    },
  };

  function getHobbies(gender, age) {
    let ageGroup = age >= 30 ? 30 : age >= 20 ? 20 : 10;
    return recommendList[gender][ageGroup];
  }

  let content = getHobbies(gender, age);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">잘 모르겠어요, 추천 받을래요</Button>
      </DialogTrigger>
      <DialogContent className="rounded-2xl w-11/12">
        <DialogHeader>
          <DialogTitle>
            <div>
              <span className="underline text-xl font-bold">
                {age}대 {gender == "male" ? "남성" : "여성"}
              </span>
              <span> 인기 취미 TOP 3 </span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <ol className="flex flex-col gap-2">
          {content.map((item, index) => (
            <HobbyItem key={index} hobbyName={item} />
          ))}
        </ol>
        <DialogFooter>
          <DialogClose asChild>
            <CustomButton filled={false}>닫기</CustomButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecommendModal;
