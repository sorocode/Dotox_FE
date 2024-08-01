import UserInfoSection from "./UserInfoSection";
import { useLoginStore } from "@/store/store";

import useCheckLogin from "@/hooks/useCheckLogin";
import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "@/utils/http.js";

const ProfilePage = () => {
  // // 로그인되어있지 않을 시 로그인 페이지로 이동
  useCheckLogin();

  const { userID } = useLoginStore();

  // userID로 유저 정보 조회하기
  const { data, isPending } = useQuery({
    queryKey: ["userInfo", userID],
    queryFn: () => fetchUserInfo(userID),
  });

  let content;
  if (isPending) {
    content = "유저 정보를 불러오는 중...";
  }
  if (data) {
    content = (
      <>
        {/* FIXME:프로필 페이지 개선하기 */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl">마이</span>
          <UserInfoSection imgUrl="Profile1.svg" userName={data.name} />
          <p>성별: {data.gender == "m" ? "남성" : "여성"}</p>
          <p>나이: {data.age}</p>
          <p>취미: {data.hobby}</p>
          <p>도톡스 시간: {data.time}</p>
          <p>포인트: {data.point}</p>
        </div>
      </>
    );
  }
  return <>{content}</>;
};

export default ProfilePage;
