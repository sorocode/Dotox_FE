import { Badge } from "../../components/ui/badge.jsx";
import { Card, CardContent } from "../../components/ui/card.jsx";
import ClassImage from "@/assets/fakeImages/classImage.png";
import HeartIcon from "@/assets/heart.svg";
import StarIcon from "@/assets/star.svg";
import { CarouselItem } from "../../components/ui/carousel.jsx";

const CardItem = () => {
  //  FIXME:하드 코딩된 값 변경하기
  return (
    <CarouselItem className="basis-1/2 md:basis-1/3 text-[0.6rem]">
      <Card className="pt-4 flex flex-col items-center justify-center">
        <CardContent className="flex flex-col gap-1">
          <img src={ClassImage} alt="Class Image" className="rounded-xl" />
          <div className="flex justify-between items-center">
            <Badge className="bg-mintGreen">
              <span className="whitespace-nowrap text-[0.6rem]">
                핸드메이드
              </span>
            </Badge>
            <div className="flex gap-2 justify-end">
              <div className="flex items-center">
                <img src={StarIcon} alt="Star Icon" />
                <span className="">4.7</span>
              </div>
              <div className="flex items-center">
                <img src={HeartIcon} alt="Heart Icon" />
                <span>629</span>
              </div>
            </div>
          </div>

          <div className="productTitle ">
            <span className="flex justify-end font-semibold text-right text-xs">
              [대구/경북]나만의 실버링 만들기
            </span>
          </div>

          <div className="flex gap-1 justify-end">
            <span className="text-red-600 font-semibold ">10%</span>
            <span className="previousPrice line-through">₩50,000</span>
          </div>
          <div className="flex justify-end font-bold text-sm">₩45.000</div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CardItem;
