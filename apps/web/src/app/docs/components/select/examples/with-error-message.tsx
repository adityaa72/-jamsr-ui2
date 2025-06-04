import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectWithErrorMessage = () => {
  return (
    <Select
      className="max-w-sm"
      label="Select Fruit"
      errorMessage="Please choose one of the options"
      isInvalid
    >
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
