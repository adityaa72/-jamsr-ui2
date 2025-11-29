import { Label, Select } from "@jamsrui/react";

export const SelectDisabledItems = () => {
  return (
    <Select className="max-w-xs" placeholder="Select Label">
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          <Select.Item value="apple" textValue="Apple">
            Apple
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item disabled value="blueberry" textValue="Blueberry">
            Blueberry
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="watermelon" textValue="Watermelon">
            Watermelon
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item disabled value="banana" textValue="Banana">
            Banana
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="orange" textValue="Orange">
            Orange
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
