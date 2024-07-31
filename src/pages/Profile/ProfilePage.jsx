import { useEffect } from "react";
import UserInfoSection from "./UserInfoSection";
import { useLoginStore } from "@/store/store";
import { useNavigate } from "react-router-dom";
import useCheckLogin from "@/hooks/useCheckLogin";

const ProfilePage = () => {
  // // 로그인되어있지 않을 시 로그인 페이지로 이동
  // const { isLogin } = useLoginStore();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLogin) {
  //     alert("로그인되지 않았습니다.\n 로그인 페이지로 이동합니다.");
  //     navigate("/login");
  //   }
  // }, [isLogin, navigate]);

  useCheckLogin();
  //TODO:하드코딩된 것 고치기
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-2xl">마이</span>
      <UserInfoSection imgUrl="Profile1.svg" userName="홍길동" />
    </div>
  );
};

export default ProfilePage;
