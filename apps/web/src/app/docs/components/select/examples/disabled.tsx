import { Label, Select } from "@jamsrui/react";

export const SelectDisabled = () => {
  return (
    <Select className="max-w-xs" placeholder="Select Label" disabled>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="watermelon">Watermelon</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
