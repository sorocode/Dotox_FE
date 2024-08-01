import { useEffect } from "react";
import UserInfoSection from "./UserInfoSection";
import { useLoginStore } from "@/store/store";
import { useNavigate } from "react-router-dom";
import useCheckLogin from "@/hooks/useCheckLogin";

const ProfilePage = () => {
  // // 로그인되어있지 않을 시 로그인 페이지로 이동
  useCheckLogin();

  const { userId } = useLoginStore();
  //TODO:하드코딩된 것 고치기
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-2xl">마이</span>
      <UserInfoSection imgUrl="Profile1.svg" userName={userId} />
    </div>
  );
};

export default ProfilePage;
