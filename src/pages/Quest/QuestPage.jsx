import React, { useState } from "react";
import quest1 from "@/assets/quest1.png";
import quest2 from "@/assets/quest2.png";
import useCheckLogin from "@/hooks/useCheckLogin";
import QuestDetail from "./QuestDetail";

// Card 컴포넌트 정의
const Card = ({ imageSrc, title, subtitle, category, points, onClick }) => (
  <div
    className="group flex-shrink-0 w-[280px] h-[300px] relative cursor-pointer"
    onClick={onClick}
  >
    <img
      src={imageSrc}
      className="w-full h-full rounded-[20px] object-cover transition duration-300 group-hover:brightness-125"
      alt={title}
    />
    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-black/5 to-black/80" />
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <p className="text-[20px] font-bold">
        {title}
        <br />
        {subtitle}
      </p>
      <p className="text-base font-bold mt-2">{category}</p>
      <p className="text-base font-bold mt-1 group-hover:text-yellow-400 transition-colors duration-300">
        {points}
      </p>
    </div>
  </div>
);

const quests = [
  {
    imageSrc: quest1,
    title: "멋사 베이커리",
    subtitle: "빵 만들기 체험",
    category: "제과제빵",
    points: "💰50포인트",
  },
  {
    imageSrc: quest2,
    title: "LikeLion",
    subtitle: "LP Bar 방문",
    category: "음악감상",
    points: "💰50포인트",
  },
];

const QuestPage = () => {
  useCheckLogin();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState(null);

  const openModal = (quest) => {
    setSelectedQuest(quest);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedQuest(null);
  };

  return (
    <div className="w-full h-[auto] bg-white overflow-x-auto">
      <div className="flex flex-col space-y-8 p-4">
        <div className="text-center">
          <p className="text-[28px] font-bold text-black">💡오늘의 맞춤 퀘스트!💡</p>
          <p className="text-xl font-bold text-black mt-2">Today’s Quest</p>
        </div>
        <p className="text-xl font-bold text-black">직업체험</p>
        <div className="flex gap-4 overflow-x-auto">
          {quests.map((quest, index) => (
            <Card
              key={index}
              imageSrc={quest.imageSrc}
              title={quest.title}
              subtitle={quest.subtitle}
              category={quest.category}
              points={quest.points}
              onClick={() => openModal(quest)}
            />
          ))}
        </div>
        <p className="text-xl font-bold text-black">취미생활</p>
        <div className="flex gap-4 overflow-x-auto">
          {quests.map((quest, index) => (
            <Card
              key={index}
              imageSrc={quest.imageSrc}
              title={quest.title}
              subtitle={quest.subtitle}
              category={quest.category}
              points={quest.points}
              onClick={() => openModal(quest)}
            />
          ))}
        </div>
      </div>
      {selectedQuest && (
        <QuestDetail quest={selectedQuest} onClose={closeModal} />
      )}
    </div>
  );
};

export default QuestPage;
