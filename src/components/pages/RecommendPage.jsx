import FriendImage from "@/assets/recommend1.png";
import ClubImage from "@/assets/recommend2.png";
import { Link } from "react-router-dom";
import InterestsArea from "../ui/Recommend/InterestsArea";
import CustomButton from "../ui/CustomButton";

const RecommendPage = () => {
  return (
    <>
      <div className="flex flex-col font-bold text-lg">
        ___님의 취미 친구를 <span>저희가 만들어 드릴게요!😝</span>
      </div>
      <div className="flex justify-evenly gap-2 my-3">
        {/* TODO:추후 상세 페이지 링크 추가하기 */}
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
