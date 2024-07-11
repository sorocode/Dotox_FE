import { RecordItem, RecordItemSkeleton } from "./RecordItem";

const RecordArea = () => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <RecordItem />
      <RecordItemSkeleton />
    </div>
  );
};

export default RecordArea;
