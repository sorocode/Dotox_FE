import { Button } from "../../components/ui/button.jsx";

import LoginForm from "../../components/ui/LoginForm.jsx";
import { Separator } from "@/components/ui/separator.jsx";

import StartWithNaverButton from "@/components/common/StartWithNaverButton.jsx";
import StartWithGoogleButton from "@/components/common/StartWithGoogleButton.jsx";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@/store/store.js";
import axios from "axios";
import { apiRequester } from "@/utils/axiosConfig.js";
import LoadingPage from "./Loading.jsx";

const SERVER_URL = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const { setLogin } = useLoginStore();
  const navigate = useNavigate();
  // const { isPending, mutate } = useMutation({
  //   mutationFn: naverLogin,
  //   onSuccess: (data) => {
  //     if (data) {
  //       setLogin(data);
  //       navigate("/");
  //     }
  //   },
  // });

  // FIXME: 랜덤 아이디로 로그인하게 했는데 이후에 진짜 id가 들어가도록하기
  // const onLoginHandler = () => {
  //   mutate(Math.floor(Math.random() * 9) + 1);
  // };

  const handleLogin = ({ provider }) => {
    console.log("clicked");
    window.location.href = SERVER_URL + `/oauth2/authorization/${provider}`;
  };

  // const handleLogin = async () => {
  //   try {
  //     window.location.href = SERVER_URL + "/oauth2/authorization/naver";
  //     // navigate("oauth2/callback/naver");
  //     const response = await apiRequester.get(
  //       SERVER_URL + "/oauth2/authorization/naver"
  //     );
  //     if (response.data) {
  //       console.log("리다이렉트");
  //       window.location.href = response.data;
  //     }
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
    <div className="flex flex-col gap-6">
      <p className="font-semibold text-xl">로그인</p>

      <LoginForm />
      <div className="flex justify-center items-center gap-2">
        <Button type="button" variant="link">
          아이디찾기
        </Button>
        <Separator orientation="vertical" className="h-5 bg-gray-400" />
        <Button type="button" variant="link">
          비밀번호 찾기
        </Button>
      </div>
      {/* <SimpleLoginContainer /> */}
      {/* <Button asChild variant="outline">
        <Link to="/signup">회원가입</Link>
      </Button> */}
      <StartWithNaverButton onClick={() => handleLogin("naver")} />
      <StartWithGoogleButton onClick={() => handleLogin("google")} />
    </div>
  );
};
export default LoginPage;
