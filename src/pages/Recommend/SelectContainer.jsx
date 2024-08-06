import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../../components/ui/select.jsx";

const SelectContainer = ({ onSelect }) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[180px] text-lightGreen">
        <SelectValue placeholder="성격이 차분한" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>성격 유형</SelectLabel>
          <SelectItem value="calm">차분한</SelectItem>
          <SelectItem value="active">활동적인</SelectItem>
          <SelectItem value="sociable">사교적인</SelectItem>
          <SelectItem value="sporty">스포츠를 즐기는</SelectItem>
          <SelectItem value="variable">취미가 다양한</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectContainer;
