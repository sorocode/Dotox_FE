import { Button } from "@/components/ui/button";
import CardContainer from "../ui/Store/CardContainer";

const StorePage = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex justify-center text-xl font-bold">
        🛍️도파민 디톡스토어🛍️
      </h1>
      <div className="onedayClass my-1">
        <h2 className="text-lg font-semibold mb-2">
          내 취미를 배워봐요! 원데이 클래스!
        </h2>
        <CardContainer />
      </div>
      <div className="hobbyTool">
        <h2 className="text-lg font-semibold">
          취미에 재료나 도구가 필요한가요?
        </h2>
        <CardContainer />
      </div>
    </div>
  );
};

export default StorePage;
