import { Select, SelectItem } from "@jamsrui/react";

export const SelectWithHelperText = () => {
  return (
    <Select
      className="max-w-sm"
      label="Select Fruit"
      helperText="Please choose one of the options"
    >
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
