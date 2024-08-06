import React, { useState } from "react";
import { useLoginStore } from "@/store/store";
import useCheckLogin from "@/hooks/useCheckLogin";
import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo, searchFriendsById } from "@/utils/http.js";
import { Link } from "react-router-dom";
import ConfirmModal from "@/components/common/ConfirmModal";
import DeleteFriend from "@/components/common/DeleteFriend";
import profile1 from "@/assets/fakeImages/Profile1.svg";
import profile2 from "@/assets/fakeImages/Profile2.svg";
import profile3 from "@/assets/fakeImages/Profile3.svg";
import profile4 from "@/assets/fakeImages/Profile4.svg";
import Lineimg from "@/assets/Line.png";
import FriendItem from "./FriendItem";

const initialQuestList = [
  {
    name: "이정민",
    status: "퀘스트 진행 중",
    imageUrl: profile1,
  },
  {
    name: "김성현",
    status: "퀘스트 진행 중",
    imageUrl: profile2,
  },
  {
    name: "장다윤",
    status: "잠시 쉬는 중",
    imageUrl: profile3,
  },
  {
    name: "박지현",
    status: "퀘스트 진행 중",
    imageUrl: profile4,
  },
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
  const {
    data: userInfoData,
    isPending: userInfoIsPendig,
    error: userInfoError,
    isError: userInfoIsError,
  } = useQuery({
    queryKey: ["userInfo", userID],
    queryFn: () => fetchUserInfo(userID),
  });

  // 친구 목록 불러오는 리액트 쿼리
  const {
    data: friendsData,
    isPending: friendsIsPending,
    error: friendsError,
    isError: friednsIsError,
  } = useQuery({
    queryKey: ["friends", userID],
    queryFn: () => searchFriendsById(userID),
  });

  const [questList, setQuestList] = useState(initialQuestList);

  const handleDeleteFriend = (friendName) => {
    setQuestList(questList.filter((friend) => friend.name !== friendName));
  };

  let content;
  let friendsListSection;
  if (friendsIsPending) {
    friendsListSection = <p>친구 정보를 불러오는 중입니다.</p>;
  }
  if (friednsIsError) {
    friendsListSection = <p>친구 정보를 불러오는 데 실패하였습니다.</p>;
  }
  if (friendsData && friendsData.length() > 0) {
    console.log(friendsData);
    friendsListSection = (
      <div className="flex flex-col space-y-4">
        {friendsData.map((item, index) => (
          <FriendItem
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            status={item.status}
            handleDeleteFriend={handleDeleteFriend}
          />
        ))}
      </div>
    );
  }
  if (userInfoIsPendig) {
    content = <p className="text-center">유저 정보를 불러오는 중...</p>;
  }
  if (userInfoError) {
    content = (
      <p className="text-center">
        유저 정보를 불러오는 데 실패했습니다. 다시 시도해주세요
      </p>
    );
  }
  if (userInfoData) {
    // console.log(data);
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
            src={profile1}
          />
          <div>
            <div className="font-bold text-black text-2xl mb-2">
              {userInfoData.name}
            </div>
            <div className="font-medium text-black text-lg mb-2">
              현재 도톡스 진행상황: {userInfoData.time}
            </div>
            <p className="text-black text-lg mb-4">
              <span className="font-medium">팔로워 </span>
              <span className="font-bold">{userInfoData.followers}명</span>
              <span className="font-medium"> | 팔로잉 </span>
              <span className="font-bold">{userInfoData.following}명</span>
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
          <img className="w-[80px] h-[3px] mx-auto" alt="Line" src={Lineimg} />
        </div>

        {friendsListSection}
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
