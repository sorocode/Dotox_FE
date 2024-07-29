import { Badge } from "../../components/ui/badge.jsx";
import { Card, CardContent } from "../../components/ui/card.jsx";

import HeartIcon from "@/assets/heart.svg";
import StarIcon from "@/assets/star.svg";
import { CarouselItem } from "../../components/ui/carousel.jsx";

const CardItem = ({
  category,
  stars,
  heart,
  region,
  imageUrl,
  title,
  previousPrice,
  discountRate,
}) => {
  //  FIXME:하드 코딩된 값 변경하기
  return (
    <CarouselItem className="basis-1/2 md:basis-1/3 text-[0.6rem]">
      <Card className="pt-4 flex flex-col items-center justify-center">
        <CardContent className="flex flex-col gap-1">
          <img src={imageUrl} alt="Class Image" className="rounded-xl" />
          <div className="flex justify-between items-center">
            <Badge className="bg-mintGreen">
              <span className="whitespace-nowrap text-[0.6rem]">
                {category}
              </span>
            </Badge>
            <div className="flex gap-2 justify-end">
              <div className="flex items-center">
                <img src={StarIcon} alt="Star Icon" />
                <span className="">{stars}</span>
              </div>
              <div className="flex items-center">
                <img src={HeartIcon} alt="Heart Icon" />
                <span>{heart}</span>
              </div>
            </div>
          </div>

          <div className="productTitle ">
            <span className="flex justify-end font-semibold text-right text-xs">
              [{region}]{title}
            </span>
          </div>

          <div className="flex gap-1 justify-end">
            <span className="text-red-600 font-semibold ">
              {discountRate * 100}%
            </span>
            <span className="previousPrice line-through">
              ₩{previousPrice?.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-end font-bold text-sm">
            ₩{(previousPrice * (1 - discountRate))?.toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CardItem;
