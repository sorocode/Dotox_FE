import React, { useState } from 'react';

const QuestDetail = ({ quest, onClose }) => {
  if (!quest) return null;

  const initialChecklist = [
    { id: 1, text: "베이킹 클래스 예약하기", checked: false },
    { id: 2, text: "재료 구매하기", checked: false },
    { id: 3, text: "반죽 만들기", checked: false },
    { id: 4, text: "발효하기", checked: false },
  ];

  const [checklist, setChecklist] = useState(initialChecklist);

  const handleCheckboxChange = (id) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="w-[456px] h-[924px] relative overflow-hidden rounded-[20px] bg-white/[0.97] border border-[#cedcd7]">
        <div className="flex justify-start items-start w-[455px] h-[484px] absolute left-0 top-[-74px] gap-[30px]">
          <div className="flex-grow-0 flex-shrink-0 w-[456px] h-[484px]">
            <img
              src={quest.imageSrc}
              className="w-[455px] h-[484px] absolute left-[-0.5px] top-[-0.5px] rounded-[20px] object-cover"
              alt={quest.title}
            />
            <div className="w-[456px] h-[484px]">
              <svg
                width={456}
                height={485}
                viewBox="0 0 456 410"
                fill="none"
                //xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-0.5px] top-[-0.5px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -54C0 -65.0457 8.95431 -74 20 -74H436C447.046 -74 456 -65.0457 456 -54V390C456 401.046 447.046 410 436 410H20C8.95431 410 0 401.046 0 390V-54Z"
                  fill="url(#paint0_linear_0_8)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_8"
                    x1={228}
                    y1={-74}
                    x2={228}
                    y2={410}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0.05" />
                    <stop offset={1} stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="w-[291.56px] h-[105px] absolute left-[31.32px] top-[267px] text-[40px] font-bold text-left text-white">
                <span>{quest.title}</span>
                <br />
                <span>{quest.subtitle}</span>
              </p>
              <div className="w-[403.4px] h-[33.1px]">
                <div className="w-[403.4px] h-[33.1px]">
                  <p className="w-[85.52px] h-[33.1px] absolute left-[33.8px] top-[403.33px] text-xl font-bold text-left text-white">
                    {quest.category}
                  </p>
                  <p className="w-[114.42px] h-[33.1px] absolute left-[322.78px] top-[403.33px] text-xl font-bold text-left text-white">
                    {quest.points}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute left-[21px] top-[425px] text-[32px] font-bold text-left text-[#7ad2b1]">
            퀘스트 목록
          </p>
        <div className="w-[407px] h-[260px] absolute left-6 top-[482px] overflow-hidden rounded-[10px] border border-[#7ad2b1]">
      
          <div className="flex flex-col gap-2.5 px-[9px] mt-8"> {/* mt-8 추가 */}
            {checklist.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`check-${item.id}`}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="w-6 h-6"
                />
                <label htmlFor={`check-${item.id}`} className="text-lg">
                  {item.text}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-[38px] top-[750px] w-[379px] h-[75px] rounded-[20px] bg-[#7ad2b1]">
          <p className="absolute left-[105px] top-5 text-2xl font-bold text-center text-white">
            같이 할 친구 찾기
          </p>
        </div>
        <div className="absolute left-[38px] top-[835px] w-[379px] h-[75px] rounded-[20px] bg-[#7ad2b1]" onClick={onClose}>
          <p className="absolute left-[168px] top-5 text-2xl font-bold text-center text-white">닫기</p>
        </div>
      </div>
    </div>
  );
};

export default QuestDetail;
