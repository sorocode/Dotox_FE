import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@/store/store";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isLogin, setLogin } = useLoginStore();
  useEffect(() => {
    if (isLogin) {
      navigate("/profile");
    }
  }, []);
  // FIXME: 추후 수정되어야하는 임시 로그인 로직
  const onLoginHandler = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "1111") {
      setLogin();
      alert("로그인 성공");
      navigate("/select");
      // 여기에 로그인 성공 후의 로직을 추가하세요. 예: 페이지 이동, 토큰 저장 등
    } else {
      setError("로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };
  return (
    <form
      className="flex flex-col justify-center gap-5"
      onSubmit={onLoginHandler}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">이메일</label>
        <input
          type="string"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="px-2 py-1 w-full h-12 rounded-md  border-[0.7px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          className="px-2 py-1 w-full h-12 rounded-md  border-[0.7px]"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="autoLogin" />
        <label htmlFor="autoLogin">자동 로그인</label>
      </div>
      <Button type="submit">로그인</Button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;
