import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";

const HobbyItem = ({ hobbyName, ...props }) => {
  return (
    <li className="flex justify-between items-center px-5" {...props}>
      <span className="font-bold text-lg">{hobbyName}</span>
      <Button variant="outline">선택</Button>
    </li>
  );
};

export default HobbyItem;
