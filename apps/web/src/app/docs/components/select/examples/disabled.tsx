import { Select, SelectItem } from "@jamsrui/react";

export const SelectDisabled = () => {
  return (
    <Select className="max-w-xs" label="Select Label" isDisabled>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
