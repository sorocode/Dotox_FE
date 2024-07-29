import Modal from "@/components/common/Modal";
import { useLoginStore } from "@/store/store";
import { useNavigate } from "react-router-dom";

const UserInfoSection = ({ imgUrl, userName }) => {
  // 로그아웃 관련

  return (
    <div className="flex justify-start gap-2 items-center">
      <img src={imgUrl} alt="profile image" className="w-1/5" />
      <div className="flex flex-col">
        <span className="text-xl font-bold">{userName}</span>
        <Modal message="로그아웃하시겠습니까?" />
      </div>
    </div>
  );
};

export default UserInfoSection;
