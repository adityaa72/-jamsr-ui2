import { Select, SelectItem } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const SelectStartEndItems = () => {
  return (
    <Select
      className="max-w-sm"
      label="Select Label"
      startContent="$"
      endContent={<EmailIcon />}
    >
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
