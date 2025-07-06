import { Select, SelectItem } from "@jamsrui/react";

export const SelectPlaceholder = () => {
  return (
    <Select
      className="max-w-sm"
      label="Select Label"
      placeholder="Select as item..."
    >
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
