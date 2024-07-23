import React from 'react';
import quest1 from '@/assets/quest1.png';
import quest2 from '@/assets/quest2.png';
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, subtitle, category, points }) => (
  <div className="group flex-shrink-0 w-[280px] h-[300px] relative">
    <img
      src={imageSrc}
      className="w-full h-full rounded-[20px] object-cover transition duration-300 group-hover:brightness-125"
      alt={title}
    />
    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-black/5 to-black/80" />
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <p className="text-[20px] font-bold">
        {title}<br />
        {subtitle}
      </p>
      <p className="text-base font-bold mt-2">
        {category}
      </p>
      <p className="text-base font-bold mt-1 group-hover:text-yellow-400 transition-colors duration-300">
        {points}
      </p>
    </div>
  </div>
);

const QuestSection = () => (
  <div className="w-full h-[auto] bg-white overflow-x-auto">
    <div className="flex flex-col space-y-8 p-4">
      <div className="text-center">
        <p className="text-[28px] font-bold text-black">
          💡오늘의 맞춤 퀘스트!💡
        </p>
        <p className="text-xl font-bold text-black mt-2">
          Today’s Quest
        </p>
      </div>
      <p className="text-xl font-bold text-black">
        직업체험
      </p>
      <Link className="flex gap-4 overflow-x-auto">
        <Card 
          imageSrc={quest1}
          title="멋사 베이커리" 
          subtitle="빵 만들기 체험" 
          category="제과제빵" 
          points="💰50포인트" 
        />
        <Card 
          imageSrc={quest2} 
          title="LikeLion" 
          subtitle="LP Bar 방문" 
          category="음악감상" 
          points="💰50포인트" 
        />
      </Link>
      <p className="text-xl font-bold text-black">
        취미생활
      </p>
      <Link className="flex gap-4 overflow-x-auto">
        <Card 
          imageSrc={quest1} 
          title="멋사 베이커리" 
          subtitle="빵 만들기 체험" 
          category="제과제빵" 
          points="💰50포인트" 
        />
        <Card 
          imageSrc={quest2} 
          title="LikeLion" 
          subtitle="LP Bar 방문" 
          category="음악감상" 
          points="💰50포인트" 
        />
      </Link>
    </div>
  </div>
);

export default QuestSection;

