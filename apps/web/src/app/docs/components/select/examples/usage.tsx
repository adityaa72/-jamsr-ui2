import { Select, SelectItem } from "@jamsrui/react";

export const SelectUsage = () => {
  return (
    <div className="py-24 flex items-center justify-center">
      <Select className="max-w-sm w-full" label="Select Fruit">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>
    </div>
  );
};
