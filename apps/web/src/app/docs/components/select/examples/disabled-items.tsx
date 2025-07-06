import { Select, SelectItem } from "@jamsrui/react";

export const SelectDisabledItems = () => {
  return (
    <Select className="max-w-sm" label="Select Label">
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem isDisabled value="blueberry">
        Blueberry
      </SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem isDisabled value="banana">
        Banana
      </SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
