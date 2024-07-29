import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../select";
const SelectContainer = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-lightGreen">
        <SelectValue placeholder="성격이 차분한" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>성격 유형</SelectLabel>
          {/* FIXME:추후 value 수정 */}
          <SelectItem value="apple">활동적인</SelectItem>
          <SelectItem value="banana">사교적인</SelectItem>
          <SelectItem value="blueberry">스포츠를 즐기는</SelectItem>
          <SelectItem value="grapes">취미가 다양한</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectContainer;
