import { Carousel, CarouselContent } from "../carousel";
import CardItem from "./CardItem";

const CardContainer = () => {
  //  FIXME:하드 코딩된 값 변경하기
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        <CardItem />
        <CardItem />
        <CardItem />
      </CarouselContent>
    </Carousel>
  );
};

export default CardContainer;
