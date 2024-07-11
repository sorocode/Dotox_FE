import InterestItem from "./InterestItem";
import SelectContainer from "./SelectContainer";

const InterestsArea = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col my-3 font-bold text-lg gap-1">
        <span className="flex items-center gap-2">
          <SelectContainer />
          사람들은
        </span>
        <span>
          지금 <span className="text-lightGreen">여기</span>에 관심이 있어요
        </span>
      </div>
      {/* TODO: 마커나 레이블 어떤식으로 할지 고민해보기 */}
      <InterestItem rank={1} title="독서" interestValue={80} />
      <InterestItem rank={2} title="필라테스" interestValue={67} />
      <InterestItem rank={3} title="향수공방" interestValue={42} />
      <InterestItem rank={4} title="반지공방" interestValue={30} />
    </div>
  );
};

export default InterestsArea;
