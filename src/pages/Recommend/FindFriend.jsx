
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ximg from '@/assets/Vector.png';
import groupimg from '@/assets/Group 9268.png';
import profile1 from '@/assets/fakeImages/Profile1.svg';
import profile2 from '@/assets/fakeImages/Profile2.svg';
import profile3 from '@/assets/fakeImages/Profile3.svg';
import profile4 from '@/assets/fakeImages/Profile4.svg';



// SectionTitle Component
const SectionTitle = ({ title, highlight }) => (
  <p className="top-0 left-0 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-transparent text-4xl absolute tracking-[0] leading-[normal]">
    <span className="text-[#80d297]">{highlight}</span>
    <span className="text-black">{title}</span>
  </p>
);

// Card Component
const Card = ({ name, time, tag, imageUrl, imageAlt, tagColor }) => {

  const [isFollowing, setIsFollowing] = useState(false);


  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="relative w-[169px] h-[237px]">

      <div className="relative h-[238px] -top-px bg-[100%_100%] ">

        <img className="absolute w-[95px] h-[95px] top-[29px] left-[35px] object-cover" alt={imageAlt} src={imageUrl} />
        <div className="absolute w-[77px] h-[30px] top-[132px] left-[47px]">
          <div className="w-[75px] top-0 left-0 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-black text-xl text-center absolute tracking-[0] leading-[normal]">
            {name}
          </div>
        </div>
        <div className="absolute w-[151px] h-12 top-[177px] left-2.5">

          <div className="relative w-[149px] h-12 bg-cover bg-[50%_50%]">
            <div className="absolute w-[149px] h-12 top-0 left-0 rounded-[20px] [background:#80d297]" />
            <div className="absolute w-full h-full flex items-center justify-center [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-white text-[13px] tracking-[0] leading-[normal]">

              {tag}
            </div>
          </div>
        </div>

        <img className="absolute w-[13px] h-[13px] top-2.5 left-2.5" alt="Vector" src={ximg} />
        <div className="top-2 left-[115px] absolute w-11 h-[17px]" onClick={handleButtonClick}>
          <div className={`relative w-[44px] h-[19px] rounded-sm ${isFollowing ? 'bg-[#80d297]' : 'bg-[#c1c1c1]'}`}>
            <div className="w-full h-full flex items-center justify-center [font-family:'Noto_Sans_KR-Medium',Helvetica] font-medium text-white text-[10px] text-center absolute tracking-[0] leading-[normal]">
  {isFollowing ? "팔로잉" : "팔로우"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FindFriend Component
const FindFriend = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[553px] h-[1199px] relative">
        <div className="absolute w-[537px] h-[311px] top-[260px] left-[9px]">
          <div className="relative h-[311px]">
            <SectionTitle title="로 친구 찾기" highlight="관심사" />
            <div className="w-[535px] gap-[7px] absolute top-[70px] left-0 flex items-center">
              <Card
                name="박지현"
                time="1:34:28"
                tag="운동"

                imageUrl={profile4}

                imageAlt="Rectangle"
                tagColor="#00a869"
              />
              <Card
                name="김성현"
                time="4:43:23"
                tag="음악"

                imageUrl={profile2}

                imageAlt="Rectangle"
                tagColor="#00a869"
              />
              <Card
                name="장다윤"
                time="2:10:03"
                tag="요리"

                imageUrl={profile3}
                imageAlt="Rectangle"
                tagColor="#00a869"
              />
            </div>
            <Link className="top-px left-[466px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#80d297] text-[22px] absolute tracking-[0] leading-[normal]">
              더보기
            </Link>

          </div>
        </div>
        <div className="absolute w-[537px] h-[345px] top-[643px] left-[9px]">
          <div className="relative w-[539px] h-[345px]">
            <div className="absolute w-[282px] h-[91px] top-0 left-px">
              <SectionTitle title="로 친구 찾기" highlight="퀘스트" />
              <p className="top-[39px] left-px [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-transparent text-2xl absolute tracking-[0] leading-[normal]">
                <span className="text-[#3c3c3c]">나의 진행 중인 퀘스트 :&nbsp;&nbsp;</span>
                <span className="text-[#80d297] text-4xl">&nbsp;</span>
              </p>
            </div>
            <div className="w-[535px] px-[3px] py-0.5 absolute top-[100px] left-0 flex items-center gap-2.5">
              <Card
                name="최공부"
                time="N/A"

                tag="나만의 다이어리 만들기"
                imageUrl={profile2}
                imageAlt="Rectangle"

                tagColor="#00a869"
              />
              <Card
                name="김도톡"
                time="N/A"

                tag="마카롱 만들기"
                imageUrl={profile1}
                imageAlt="Rectangle"
                tagColor="#00a869"
              />
              <Card
                name="이정민"
                time="N/A"

                tag="멋사 베이커리 베이킹"
                imageUrl={profile3}

                imageAlt="Rectangle"
                tagColor="#00a869"
              />
            </div>

            <Link className="top-0 left-[459px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#80d297] text-[22px] absolute tracking-[0] leading-[normal]">
              더보기
            </Link>
          </div>
        </div>
        <img className="absolute w-[560px] h-[230px] top-0 left-0" alt="Group" src={groupimg} />

        <div className="absolute w-[496px] h-[75px] top-[1083px] left-[30px]">
          <div className="relative w-[494px] h-[75px] bg-[#7ad2b1] rounded-[20px]">
            <div className="top-5 left-[163px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-white text-2xl text-center absolute tracking-[0] leading-[normal]">
              취미 소모임 찾기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFriend;
