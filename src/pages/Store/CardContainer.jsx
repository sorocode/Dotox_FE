import { Carousel, CarouselContent } from "../../components/ui/carousel.jsx";
import CardItem from "./CardItem.jsx";

const CardContainer = () => {
  //  FIXME:하드 코딩된 값 변경하기
  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        <CardItem />
        <CardItem />
        <CardItem />
      </CarouselContent>
    </Carousel>
  );
};

export default CardContainer;
