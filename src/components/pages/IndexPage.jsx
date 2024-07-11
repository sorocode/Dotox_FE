import { Button } from "../ui/button";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";
const IndexPage = () => {
  return (
    <div>
      <p>인덱스페이지입니다.</p>
      <CustomButton filled={false} asChild>
        <Link to="/ranking">랭킹</Link>
      </CustomButton>
      <CustomButton filled={true} asChild>
        <Link to="login">로그인</Link>
      </CustomButton>
      <CustomButton filled={true} asChild>
        <Link to="recommend">취미, 친구 추천</Link>
      </CustomButton>

      <Button>기본 버튼</Button>
    </div>
  );
};

export default IndexPage;
