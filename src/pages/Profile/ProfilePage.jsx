import React, { useState } from "react";
import { useLoginStore } from "@/store/store";
import useCheckLogin from "@/hooks/useCheckLogin";
import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "@/utils/http.js";
import { Link } from 'react-router-dom';
import ConfirmModal from "@/components/common/ConfirmModal";
import DeleteFriend from "@/components/common/DeleteFriend"; 

const initialQuestList = [
  {
    name: '이정민',
    status: '퀘스트 진행 중',
    imageUrl: 'src/assets/fakeImages/Profile2.svg',
  },
  {
    name: '김성현',
    status: '퀘스트 진행 중',
    imageUrl: 'src/assets/fakeImages/Profile3.svg',
  },
  {
    name: '장다윤',
    status: '잠시 쉬는 중',
    imageUrl: 'src/assets/fakeImages/Profile4.svg',
  }
];

const HomeIndicator = ({ darkMode, className, homeIndicatorClassName }) => {
  return (
    <div className={`w-full h-[34px] relative ${className}`}>
      <div
        className={`w-[134px] mx-auto h-[5px] rounded-full relative ${
          darkMode ? "bg-label-colordarkprimary" : "bg-label-colorlightprimary"
        } ${homeIndicatorClassName}`}
      />
    </div>
  );
};

const ProfilePage = () => {
  useCheckLogin();
  const { userID } = useLoginStore();
  const { data, isPending } = useQuery({
    queryKey: ["userInfo", userID],
    queryFn: () => fetchUserInfo(userID),
  });

  const [questList, setQuestList] = useState(initialQuestList);

  const handleDeleteFriend = (friendName) => {
    setQuestList(questList.filter(friend => friend.name !== friendName));
  };

  let content;
  if (isPending) {
    content = <p className="text-center">유저 정보를 불러오는 중...</p>;
  } else if (data) {
    content = (
      <div className="relative max-w-[600px] mx-auto bg-white overflow-hidden p-4">
        <HomeIndicator
          className="absolute bottom-0 w-full"
          darkMode={false}
          homeIndicatorClassName="mx-auto"
        />

        <div className="text-center mb-8">
          <ConfirmModal trigger="로그아웃" message="로그아웃 하시겠습니까?" />
          <img
            className="w-[150px] h-[150px] object-cover rounded-full mx-auto mb-4"
            alt="Profile"
            src="src/assets/fakeImages/Profile1.svg"
          />
          <div>
            <div className="font-bold text-black text-2xl mb-2">
              {data.name}
            </div>
            <div className="font-medium text-black text-lg mb-2">
              현재 도톡스 진행상황: {data.time}
            </div>
            <p className="text-black text-lg mb-4">
              <span className="font-medium">팔로워 </span>
              <span className="font-bold">{data.followers}명</span>
              <span className="font-medium"> | 팔로잉 </span>
              <span className="font-bold">{data.following}명</span>
            </p>
            <div className="text-center mb-4">
              <div className="inline-block w-[200px] h-[50px] bg-[#7ad2b1] rounded-full">
                <Link className="flex items-center justify-center h-full font-bold text-black text-xl">
                  프로필 수정
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="font-medium text-black text-xl mb-2">친구정보</div>
          <img
            className="w-[80px] h-[3px] mx-auto"
            alt="Line"
            src="https://c.animaapp.com/66dJL30k/img/line-14.png"
          />
        </div>

        <div className="flex flex-col space-y-4">
          {questList.map((item, index) => (
            <div
              className="flex items-center space-x-4 p-2 border border-gray-200 rounded-md"
              key={index}
            >
              <img className="w-[60px] h-[60px] rounded-full" alt="Group" src={item.imageUrl} />
              <div className="flex-grow">
                <div className="font-medium text-black text-lg">{item.name}</div>
                <div className="text-gray-600 text-sm">{item.status}</div>
              </div>
              <DeleteFriend
                friendName={item.name}
                onDelete={() => handleDeleteFriend(item.name)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <HomeIndicator
        className="fixed left-0 w-full bottom-0"
        darkMode={false}
        homeIndicatorClassName="mx-auto"
      />
      {content}
    </>
  );
};

export default ProfilePage;
