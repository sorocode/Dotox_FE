import { useLoginStore } from "@/store/store";
import { useNavigate } from "react-router-dom";

const UserInfoSection = ({ imgUrl, userName }) => {
  // 로그아웃 관련
  const { setLogout } = useLoginStore();
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    setLogout();
    navigate("/");
  };
  return (
    <div className="flex justify-start gap-2 items-center">
      <img src={imgUrl} alt="profile image" className="w-1/5" />
      <div className="flex flex-col">
        <span className="text-xl font-bold">{userName}</span>
        <button className="underline" onClick={onLogoutHandler}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default UserInfoSection;
