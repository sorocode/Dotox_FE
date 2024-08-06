import { useState } from 'react';
import InterestItem from './InterestItem.jsx';
import SelectContainer from './SelectContainer.jsx';

const InterestsArea = () => {
  const [selectedPersonality, setSelectedPersonality] = useState('calm');

  const interestsByPersonality = {
    calm: [
      { rank: 1, title: '독서', interestValue: 80 },
      { rank: 2, title: '필라테스', interestValue: 67 },
      { rank: 3, title: '향수공방', interestValue: 32 },
      { rank: 4, title: '반지공방', interestValue: 10 },
    ],
    active: [
      { rank: 1, title: '등산', interestValue: 95 },
      { rank: 2, title: '자전거 타기', interestValue: 75 },
      { rank: 3, title: '러닝', interestValue: 40 },
      { rank: 4, title: '수영', interestValue: 20 },
    ],
    sociable: [
      { rank: 1, title: '파티', interestValue: 85 },
      { rank: 2, title: '클럽', interestValue: 70 },
      { rank: 3, title: '모임', interestValue: 65 },
      { rank: 4, title: '여행', interestValue: 45 },
    ],
    sporty: [
      { rank: 1, title: '축구', interestValue: 88 },
      { rank: 2, title: '농구', interestValue: 76 },
      { rank: 3, title: '테니스', interestValue: 64 },
      { rank: 4, title: '배드민턴', interestValue: 30 },
    ],
    variable: [
      { rank: 1, title: '사진 찍기', interestValue: 72 },
      { rank: 2, title: '요리', interestValue: 68 },
      { rank: 3, title: 'DIY 공예', interestValue: 57 },
      { rank: 4, title: '여행', interestValue: 45 },
    ],
  };

  const handleSelect = (value) => {
    setSelectedPersonality(value);
  };

  const interests = interestsByPersonality[selectedPersonality];

  return (
    <div className="mt-4">
      <div className="flex flex-col my-3 font-bold text-lg gap-1">
        <span className="flex items-center gap-2">
          <SelectContainer onSelect={handleSelect} />
          사람들은
        </span>
        <span>
          지금 <span className="text-lightGreen">여기</span>에 관심이 있어요
        </span>
      </div>
      {/* TODO: 마커나 레이블 어떤식으로 할지 고민해보기 */}
      {interests.map((interest) => (
        <InterestItem
          key={interest.rank}
          rank={interest.rank}
          title={interest.title}
          interestValue={interest.interestValue}
        />
      ))}
    </div>
  );
};

export default InterestsArea;
