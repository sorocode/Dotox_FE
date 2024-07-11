import {
  RankingCard,
  RankingCardSkeleton,
} from "@/components/ui/Ranking/RankingCard";

const TopThreeArea = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {/* <p className="font-semibold">순위</p> */}
      <div className="flex justify-center items-center gap-2">
        <RankingCard />
        <RankingCardSkeleton />
        <RankingCardSkeleton />
      </div>
    </div>
  );
};

export default TopThreeArea;
