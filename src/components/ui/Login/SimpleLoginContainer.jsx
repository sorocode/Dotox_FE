import { Button } from "../button";
const SimpleLoginContainer = () => {
  return (
    <div className="flex justify-center items-center">
      {/* space-x-4: 버튼 간 간격 조정 */}
      <Button variant="ghost">
        <img
          className="w-20 h-20 object-contain"
          src="NaverLogin.png"
          alt="네이버로그인"
        />
        {/* w-12: 너비 3rem, h-12: 높이 3rem */}
      </Button>
      <Button variant="ghost">
        <img
          className="w-16 h-20 object-contain"
          src="KakaoSmall.png"
          alt="카카오로그인"
        />{" "}
        {/* w-12: 너비 3rem, h-12: 높이 3rem */}
      </Button>
    </div>
  );
};

export default SimpleLoginContainer;
