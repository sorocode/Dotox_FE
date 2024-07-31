import useCheckLogin from "@/hooks/useCheckLogin";
import CalendarBar from "@/pages/Ranking/CalendarBar.jsx";
import RecordArea from "@/pages/Ranking/RecordArea.jsx";
import TopThreeArea from "@/pages/Ranking/TopThreeArea.jsx";

const RankingPage = () => {
  useCheckLogin();
  return (
    <>
      <CalendarBar />
      <TopThreeArea />
      <RecordArea />
    </>
  );
};

export default RankingPage;
