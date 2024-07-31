import { Button } from "../../components/ui/button.jsx";

import LoginForm from "../../components/ui/LoginForm.jsx";
import { Separator } from "@/components/ui/separator.jsx";

import StartWithNaverButton from "@/components/common/StartWithNaverButton.jsx";
import StartWithGoogleButton from "@/components/common/StartWithGoogleButton.jsx";

const LoginPage = () => {
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
      <StartWithNaverButton />
      <StartWithGoogleButton />
    </div>
  );
};
export default LoginPage;
