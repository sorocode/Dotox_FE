// SelectHobbiesPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import rectangle520 from "@/assets/rectangle520.png";
import rectangle521 from "@/assets/rectangle521.png";
import rectangle522 from "@/assets/rectangle522.png";
import rectangle523 from "@/assets/rectangle523.png";
import rectangle524 from "@/assets/rectangle524.png";
import rectangle525 from "@/assets/rectangle525.png";
import rectangle524_2 from "@/assets/rectangle5242.png";
import rectangle525_2 from "@/assets/rectangle5252.png";
import CustomButton from "@/components/ui/CustomButton";
import RecommendModal from "./RecommendModal";
import useCheckLogin from "@/hooks/useCheckLogin";
import HobbyItem from "./HobbyItem";
import HobbyModal from "./HobbyModal";

const SelectHobbiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState(null);

  const hobbies = [
    { imgSrc: rectangle520, altText: "요리", title: "요리" },
    { imgSrc: rectangle521, altText: "음악", title: "음악" },
    { imgSrc: rectangle522, altText: "제빵", title: "제빵" },
    { imgSrc: rectangle523, altText: "운동", title: "운동" },
    { imgSrc: rectangle524, altText: "커피", title: "커피" },
    { imgSrc: rectangle525, altText: "동물", title: "동물" },
    { imgSrc: rectangle524_2, altText: "여행", title: "여행" },
    { imgSrc: rectangle525_2, altText: "다꾸", title: "다꾸" },
  ];

  // 로그인 되었는지 확인
  useCheckLogin();

  const handleHobbyClick = (hobby) => {
    console.log(`Hobby clicked: ${hobby}`);
    setSelectedHobby(hobby);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHobby(null);
  };

  return (
    <div className="w-full h-full min-h-screen bg-white px-4 py-6">
      <div className="mb-6">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
          어떤 일에 관심 있으세요 ?
        </p>
        <p className="text-base md:text-lg lg:text-xl font-bold text-black">
          관심 분야에 맞는 도톡스 취미를 추천해드려요
        </p>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {hobbies.map((hobby, index) => (
          <HobbyItem
            key={index}
            imgSrc={hobby.imgSrc}
            altText={hobby.altText}
            title={hobby.title}
            onClick={handleHobbyClick}
          />
        ))}
      </div>

      {/* Recommendation Link */}
      <RecommendModal gender="male" age={20} />

      {/* Next Button */}
      {/* FIXME:다음버튼 클릭 시 백엔드 통신 필요 */}
      <CustomButton filled={true} asChild>
        <Link to="/quest">다음</Link>
      </CustomButton>

      {/* Hobby Modal */}
      <HobbyModal isOpen={isModalOpen} onClose={closeModal} hobby={selectedHobby} />
    </div>
  );
};

export default SelectHobbiesPage;
