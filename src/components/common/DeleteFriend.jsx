// src/components/DeleteFriend.jsx
import React, { useState } from "react";

const DeleteFriend = ({ friendName, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="w-6 h-6"
        onClick={() => setIsOpen(true)}
        aria-label={`${friendName} 삭제`}
      >
        <img
          alt="Delete Icon"
          src="https://c.animaapp.com/66dJL30k/img/group-9236-1@2x.png"
        />
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>정말 친구 <b>{friendName}</b>님을 삭제하시겠습니까?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-[#7ad2b1] text-white px-4 py-2 rounded mr-2"
                onClick={handleDelete}
              >
                삭제
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteFriend;
