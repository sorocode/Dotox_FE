import { Carousel, CarouselContent } from "../../components/ui/carousel.jsx";
import CardItem from "./CardItem.jsx";

const CardContainer = ({ data }) => {
  //  FIXME:하드 코딩된 값 변경하기
  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        <CardItem
          category="핸드메이드"
          region="대구/경북"
          previousPrice={50000}
          discountRate={0.1}
          title="나만의 실버링 만들기"
          heart={932}
          stars={4.7}
          imageUrl="ring.png"
        />
        <CardItem
          category="핸드메이드"
          region="부산/경남"
          previousPrice={50000}
          discountRate={0.1}
          heart={932}
          stars={4.7}
          title="나만의 머핀 만들기"
          imageUrl="muffin.png"
        />
        <CardItem
          category="핸드메이드"
          region="대구/경북"
          previousPrice={50000}
          discountRate={0.1}
          heart={932}
          stars={4.7}
          title="나만의 꽃 만들기"
          imageUrl="flower.png"
        />
      </CarouselContent>
    </Carousel>
  );
};

export default CardContainer;
