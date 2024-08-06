// HobbyModal.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HobbyModal = ({ isOpen, onClose, hobby }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const relatedHobbies = {
    "요리": ["양식", "한식", "베이킹", "중식", "일식", "프렌치 요리"],
    "음악": ["피아노", "기타", "드럼", "바이올린", "첼로", "플루트", "작곡"],
    "제빵": ["케이크 만들기", "쿠키 굽기", "마카롱 만들기", "빵 만들기"],
    "운동": ["헬스", "요가", "필라테스", "수영", "러닝", "사이클링", "등산"],
    "커피": ["에스프레소 추출", "라떼 아트", "핸드드립", "콜드브루", "커피 블렌딩"],
    "동물": ["강아지 훈련", "고양이 케어", "애완동물 산책", "동물 촬영", "반려동물 용품 제작"],
    "여행": ["배낭여행", "캠핑", "등산", "도시 탐방", "문화 탐험", "해외 여행 계획"],
    "다꾸": ["다이어리 꾸미기", "스티커 제작", "다이어리 디자인", "펜글씨 연습", "색연필 드로잉"],
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">
          <span className="text-2xl">{hobby}</span> 관련 취미
        </h2>
        <ul className="grid grid-cols-2 gap-4 justify-items-center">
          {relatedHobbies[hobby]?.map((relatedHobby, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg border"
              style={{
                borderColor: '#80d297',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '190px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {relatedHobby}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <Link
            to="/quest"
            className="text-white px-4 py-2 rounded"
            style={{ backgroundColor: '#80d297' }}
          >
            퀘스트 하러가기
          </Link>
          <button
            className="text-white px-4 py-2 rounded"
            style={{ backgroundColor: '#80d297' }}
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default HobbyModal;
