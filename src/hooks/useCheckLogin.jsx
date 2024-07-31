import { useLoginStore } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCheckLogin = () => {
  // 로그인되어있지 않을 시 로그인 페이지로 이동
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      alert("로그인되지 않았습니다.\n 로그인 페이지로 이동합니다.");
      navigate("/login");
    }
  }, [isLogin, navigate]);
};

export default useCheckLogin;
