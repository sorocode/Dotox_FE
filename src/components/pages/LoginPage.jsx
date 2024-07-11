import { Button } from "../ui/button";
import SimpleLoginContainer from "../ui/Login/SimpleLoginContainer";
import LoginForm from "../ui/LoginForm";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-6">
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
      <SimpleLoginContainer />
      <Button asChild variant="outline">
        <Link to="/signup">회원가입</Link>
      </Button>
    </div>
  );
};
export default LoginPage;
