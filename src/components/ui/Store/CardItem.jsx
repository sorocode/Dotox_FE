import { Badge } from "../badge";
import { Card, CardContent } from "../card";
import ClassImage from "@/assets/fakeImages/classImage.png";
import HeartIcon from "@/assets/heart.svg";
import StarIcon from "@/assets/star.svg";

const CardItem = () => {
  //  FIXME:하드 코딩된 값 props로 변경하기
  return (
    <Card className="py-2">
      <CardContent className="flex flex-col gap-2">
        <img src={ClassImage} alt="Class Image" />
        <div className="flex justify-between items-center">
          <Badge className="bg-mintGreen">핸드메이드</Badge>
          <div className="flex">
            <img src={StarIcon} alt="Star Icon" />
            <span>4.7</span>
            <img src={HeartIcon} alt="Heart Icon" />
            <span>629</span>
          </div>
        </div>
        <div className="productTitle flex justify-end font-semibold">
          [대구/경북]나만의 실버링 만들기
        </div>
        <div className="flex gap-1 justify-end">
          <span className="text-red-600 font-semibold">10%</span>
          <span className="previousPrice line-through">₩50,000</span>
        </div>
        <div className="flex justify-end font-bold text-lg">₩45.000</div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
