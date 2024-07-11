import { Button } from "../ui/button";
import CustomButton from "../ui/CustomButton";

const IndexPage = () => {
  return (
    <div>
      <p>인덱스페이지입니다.</p>
      <CustomButton filled={false}>빈 버튼</CustomButton>
      <CustomButton filled={true}>채워진 버튼</CustomButton>
      <CustomButton fontSize="large" filled={true}>
        큰 버튼
      </CustomButton>
      <Button>기본 버튼</Button>
    </div>
  );
};

export default IndexPage;
