import FriendImage from "@/assets/recommend1.png";
import ClubImage from "@/assets/recommend2.png";
import { Link } from "react-router-dom";
import InterestsArea from "@/pages/Recommend/InterestsArea.jsx";
import CustomButton from "../../components/ui/CustomButton.jsx";
import useCheckLogin from "@/hooks/useCheckLogin.jsx";
import { useLoginStore } from "@/store/store.js";

const RecommendPage = () => {
  useCheckLogin();

  // 전역 상태에서 유저 정보 불러오기
  const { name } = useLoginStore();
  return (
    <>
      <div className="flex flex-col font-bold text-lg">
        {name}님의 취미 친구를 <span>저희가 만들어 드릴게요!😝</span>
      </div>
      <div className="flex justify-evenly gap-2 my-3">
        
        <Link>
          <img src={FriendImage} alt="Friend Image" />
        </Link>
        <Link>
          <img src={ClubImage} alt="Club Image" />
        </Link>
      </div>
      <InterestsArea />
      <div className="mt-6">
        <CustomButton>취미 추천 받으러 가기</CustomButton>
        <CustomButton filled>퀘스트 보러 가기</CustomButton>
      </div>
    </>
  );
};

export default RecommendPage;
